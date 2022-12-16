<template>
  <!--  диалог создания / продолжения Времени-->
  <q-dialog v-model="isPlayDialog">
    <q-card class="q-pa-md q-gutter-sm">
      <h4>Создать время?</h4>
      <q-btn rounded push icon="local_fire_department" color="secondary" size="xl" label="Ну погнали"
             @click="createTime"/>
    </q-card>
  </q-dialog>

  <div class="q-col">
    <q-card>
      <div class="text-center row">

        <!--      кнопки запуска и паузы секундомера-->
        <div class="q-pa-md q-gutter-sm">
          <q-btn rounded push icon="play_arrow" color="secondary" size="xl" @click="counterPlay" v-if="!isCounting"/>
          <q-btn rounded push icon="pause" color="warning" size="xl" @click="counterPause" v-if="isCounting"/>
          <q-btn rounded push icon="done" color="positive" size="xl" @click="counterDone" v-if="!isCounting && elapsedSeconds"/>
        </div>

        <!--      секундомер-->
        <div class="q-pa-md q-gutter-sm">
          <h2 class="q-mb-none">{{ counterDisplay }}</h2>
        </div>

      </div>
    </q-card>

  </div>
</template>

<script>
import {computed, onBeforeUnmount, ref} from 'vue'
import $utils from 'src/app/plugins/utils'

export default {
  name: "TimeCounter",
  components: {},
  props: ['item'],
  setup(props, {emit}) {
    // заполненность круга
    const circleValue = ref(0)

    // прошло секунд
    const elapsedSeconds = ref(0)

    // значение на дисплее
    const counterDisplay = ref('00:00')

    // переменная для запуска и паузы секундомера
    let counterInterval = ref(null)

    // переменная состояния секундомера
    const isCounting = ref(false)

    // переменная состояния окна диалога создания / продолжения Времени
    const isPlayDialog = ref(false)

    // переменная активного времени
    const activeTime = ref(null)

    // переменная значения секундомера
    const counterValue = computed(() => {
      // если время активно и нет counter_start_time
      if (activeTime.value && activeTime.value.state_id === 1 && !activeTime.value.counter_start_time) {
        if (activeTime.value.effort > 0) {
          counterDisplayConvert(activeTime.value.effort * 60)
          initCountdown()
        }
        if (activeTime.value.effort === 0) {
          counterDisplayConvert(Math.ceil((Date.now() - Date.parse(activeTime.value.start_time)) / 1000))
          initCountdown()
        }
      }
      // если время активно и есть counter_start_time
      if (activeTime.value && activeTime.value.state_id === 1 && activeTime.value.counter_start_time) {
        if (activeTime.value.effort > 0) {
          counterDisplayConvert(Math.ceil((activeTime.value.effort * 60) + ((Date.now() - Date.parse(activeTime.value.counter_start_time)) / 1000)))
          initCountdown()
        }
        else return 0
      }
      // если время на паузе
      if (activeTime.value && activeTime.value.state_id === 2) {
        if (activeTime.value.effort > 0) {
          counterDisplayConvert(activeTime.value.effort * 60)
        }
        else return 0
      }
      return elapsedSeconds.value
    })

    // добавление одной секунды в дисплей
    const addOneSecond = () => {
      // console.log(elapsedSeconds.value)
      // counterDisplay.value = moment(counterDisplay.value, 'mm:ss').add(1, 'seconds').format('mm:ss')
      // if (elapsedSeconds.value > 60) counterDisplay.value = moment(counterDisplay.value, 'mm:ss').add(1, 'seconds').format('mm:ss')
      // if (elapsedSeconds.value < 60) counterDisplay.value = moment(counterDisplay.value, 'hh:mm').add(1, 'seconds').format('hh:mm')
      elapsedSeconds.value++
      counterDisplayConvert(elapsedSeconds.value)
    }

    // корректный ввод времени в секундомер
    const counterDisplayConvert = (secondsElapsed) => {
      elapsedSeconds.value = secondsElapsed
      const hours = Math.floor(elapsedSeconds.value % (3600 * 60) / 60 / 60)
      const minutes = Math.floor((elapsedSeconds.value % 3600) / 60)
      const seconds = elapsedSeconds.value % 60

      const addZero = (value) => {return value < 10 ? `0${value}` : value}

      if (elapsedSeconds.value > 59) counterDisplay.value = `${hours}:${addZero(minutes)}`
      if (elapsedSeconds.value < 60) counterDisplay.value = `${addZero(minutes)}:${addZero(seconds)}`
    }

    // запуск секундомера
    const initCountdown = () => {
      counterInterval = setInterval(() => {
        addOneSecond()
      }, 1000)
      isCounting.value = true
    }

    // пауза секундомера
    const stopCountdown = () => {
      clearInterval(counterInterval)
      isCounting.value = false
    }

    // кнопка диалогового окна создания / продолжения Времени
    const counterPlay = () => {
      if (activeTime.value && activeTime.value.state_id === 2) {
        $utils.callPgMethod('time_update', {
          id: activeTime.value.id,
          effort: Math.ceil(elapsedSeconds.value / 60),
          counter_start_time: new Date(Date.now() - ((new Date).getTimezoneOffset() * 60 * 1000) ).toISOString(),
          state_id: 1
        }, (res) => {
          getActiveTime()
          initCountdown()
          emit('reloadTimeWidget')
        })
      }
      else isPlayDialog.value = true
    }

    // создание новой сущности времени и запуск таймера
    const createTime = () => {
      $utils.callPgMethod('time_update', {
        id: -1,
        work_id: props.item.id,
        start_time: new Date(Date.now() - ((new Date).getTimezoneOffset() * 60 * 1000) ).toISOString(),
        system_id: props.item.system_id,
        state_id: 1
      }, (res) => {
        isPlayDialog.value = false
        getActiveTime()
        initCountdown()
        emit('reloadTimeWidget')
      })
    }

    // определение активного времени
    const getActiveTime = () => {
      $utils.callPgMethod('time_list', {
        work_id: props.item.id,
        order_by: "state_id"
      }, (list) => {
        if (list[0])
          if (list[0].state_id !== 3) {
            $utils.callPgMethod('time_get_by_id', {id: list[0].id}, (res) => {
              activeTime.value = res
              counterValue.value++
              emit('reloadTimeWidget')
            })
          }
          else activeTime.value = null
      })
    }
    getActiveTime()

    // кнопка паузы секундомера
    const counterPause = () => {
      if (activeTime.value.effort === 0) {
        $utils.callPgMethod('time_update', {
          id: activeTime.value.id,
          effort: Math.ceil(elapsedSeconds.value / 60),
          state_id: 2
        }, (res) => {
          emit('reloadTimeWidget')
          console.log(res)
          stopCountdown()
          getActiveTime()
        })
      }
      if (activeTime.value.effort > 0) {
        $utils.callPgMethod('time_update', {
          id: activeTime.value.id,
          effort: Math.ceil(elapsedSeconds.value / 60),
          state_id: 2
        }, (res) => {
          emit('reloadTimeWidget')
          stopCountdown()
          getActiveTime()
        })
      }
    }

    // кнопка завершения секундомера
    const counterDone = () => {
      $utils.callPgMethod('time_update', {
        id: activeTime.value.id,
        effort: Math.ceil(elapsedSeconds.value / 60),
        end_time: new Date(Date.now() - ((new Date).getTimezoneOffset() * 60 * 1000) ).toISOString(),
        state_id: 3
      }, (res) => {
        activeTime.value = null
        elapsedSeconds.value = null
        emit('reloadTimeWidget')
        stopCountdown()
        // getActiveTime()
        counterDisplay.value = '00:00'
      })
    }

    // остановка фронтовой части секундомера при выходе с экрана
    onBeforeUnmount(() => {
      stopCountdown()
    })

    return {
      circleValue,
      counterDisplay,
      initCountdown,
      stopCountdown,
      elapsedSeconds,
      isCounting,
      isPlayDialog,
      counterPlay,
      createTime,
      counterPause,
      counterDone
    }
  }
}
</script>

<style scoped>
* {
  font-weight: 200;
}
</style>
