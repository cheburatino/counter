<template>

  <!--  диалог создания / продолжения Времени-->
  <q-dialog v-model="isPlayDialog">
    <q-card class="q-pa-md q-gutter-sm text-center">
      <h4>Запустить новый счётчик?</h4>
      <q-btn rounded push icon="local_fire_department" color="secondary" size="xl" label="Ну погнали" @click="createTime"/>
    </q-card>
  </q-dialog>

  <!--  диалог завершения Времени-->
  <q-dialog v-model="isConfirmDialog">
    <q-card class="q-pa-md q-gutter-sm" style="min-width: 30vw">
      <h4 class="text-center">Закрыть счётчик</h4>
      <p></p>
      <p></p>
      <p><strong>ID: {{ activeTime.id }}</strong></p>
      <p><strong>Начало: {{ new Date(activeTime.start_time).toLocaleString() }}</strong></p>
      <div>
        <!--        <q-input autogrow label="Начало" type="date" :readonly="true" v-model="activeTime.start_time" class="q-mb-md"/>-->
      </div>
      <div>
        <q-input autogrow label="Работа" :readonly="true" v-model="activeTime.options.title.work_title" class="q-my-md"/>
      </div>
      <div>
        <q-input autogrow label="Система" :readonly="true" v-model="activeTime.options.title.system_title" class="q-mb-md"/>
      </div>
      <div>
        <q-input autogrow label="Полезная нагрузка" :readonly="true" v-model="activeTime.effort" class="q-mb-md"/>
      </div>
      <!--      <p><strong>Работа: {{ activeTime.options.title.work_title }}</strong></p>-->
      <!--      <p><strong>Система: {{ activeTime.options.title.system_title }}</strong></p>-->
      <!--      <p><strong>Полезная нагрузка: {{ activeTime.effort }}</strong></p>-->
      <p><strong>Всего полезной нагрузки по работе <br/>после завершения: {{ item.worked_time + activeTime.effort }}</strong></p>
      <p></p>
      <p></p>
      <div>
        <q-input autogrow autofocus v-model="timeDescription" label="Описание" class="q-mb-md"/>
      </div>
      <div align="center">
        <q-btn rounded push icon-right="done" color="positive" size="xl" label="Готово" @click="counterConfirm"/>
      </div>
    </q-card>
  </q-dialog>

  <div>
    <q-card style="border-radius: 20px;">
      <div class="text-center row justify-between">

        <!--      кнопки запуска, паузы и завершения счётчика-->
        <div class="q-pa-md q-gutter-sm">
          <q-btn rounded push icon="play_arrow" color="secondary" size="xl" @click="counterPlay" v-if="!isCounting" :style="!elapsedSeconds ? 'margin-left: 40px' : ''"/>
          <q-btn rounded push icon="pause" color="warning" size="xl" @click="counterPause" v-if="isCounting" style="margin-left: 40px;"/>
          <q-btn rounded push icon="done" color="positive" size="xl" @click="counterConfirmDialogButton" v-if="!isCounting && elapsedSeconds"/>
        </div>

        <!--      счётчик-->
        <div class="q-pa-md q-mr-sm q-gutter-sm" style="padding-left: 0px;">
          <h2 class="q-mb-none">{{ counterDisplay }}</h2>
        </div>

      </div>
    </q-card>

  </div>
</template>

<script>
import {computed, onBeforeUnmount, ref, watch} from 'vue'
import $utils from 'src/app/plugins/utils'

export default {
  name: "TimeCounter",
  components: {},
  props: ['item'],
  setup(props, {emit}) {
    // прошло секунд
    const elapsedSeconds = ref(0)

    // значение на дисплее
    const counterDisplay = ref('00:00')

    // переменная для запуска и паузы счётчика
    let counterInterval = ref(null)

    // переменная состояния счётчика
    const isCounting = ref(false)

    // переменная состояния окна диалога создания / продолжения Времени
    const isPlayDialog = ref(false)

    // переменная состояния окна диалога завершения Времени
    const isConfirmDialog = ref(false)

    // переменная описания времени при завершении
    const timeDescription = ref('')

    // переменная активного времени
    const activeTime = ref(null)

    // пересчёт состояния счётчика ( "в процессе" / "на паузе" / counter_start_time?)
    const counterValue = computed(() => {
      // если время в процессе и нет counter_start_time
      if (activeTime.value && activeTime.value.state_id === 1 && !activeTime.value.counter_start_time) {
        if (activeTime.value.effort > 0) {
          counterDisplayConvert(activeTime.value.effort * 60)
          initCountdown()
        }
        if (activeTime.value.effort === 0) {
          counterDisplayConvert(Math.round((Date.now() - Date.parse(activeTime.value.start_time)) / 1000))
          initCountdown()
        }
      }
      // если время в процессе и есть counter_start_time
      if (activeTime.value && activeTime.value.state_id === 1 && activeTime.value.counter_start_time) {
        if (activeTime.value.effort > 0) {
          counterDisplayConvert(Math.round((activeTime.value.effort * 60) + ((Date.now() - Date.parse(activeTime.value.counter_start_time)) / 1000)))
          initCountdown()
        }
        if (activeTime.value.effort === 0) {
          counterDisplayConvert(Math.round((Date.now() - Date.parse(activeTime.value.counter_start_time)) / 1000))
          initCountdown()
        }
        else return 0
      }
      // если время на паузе
      if (activeTime.value && activeTime.value.state_id === 2) {
        stopCountdown()
        if (activeTime.value.effort > 0) {
          counterDisplayConvert(activeTime.value.effort * 60)
        }
        else return 0
      }
      return elapsedSeconds.value
    })

    // функция определения времени по id и применения его на счётчик
    const setTime = (timeId) => {
      $utils.callPgMethod('time_get_by_id', {id: timeId}, (time) => {
        activeTime.value = time
        counterValue.value++
        emit('reloadTimeWidget')
      })
    }

    // добавление одной секунды в счётчик
    const addOneSecond = () => {
      elapsedSeconds.value++
      counterDisplayConvert(elapsedSeconds.value)
    }

    // корректный ввод времени в счётчик в секундах и вывод нв экран
    // в формате MM:SS или HH:MM в зависимости от значения secondsElapsed
    const counterDisplayConvert = (secondsElapsed) => {
      elapsedSeconds.value = secondsElapsed
      const hours = Math.floor(elapsedSeconds.value % (3600 * 60) / 60 / 60)
      const minutes = Math.floor((elapsedSeconds.value % 3600) / 60)
      const seconds = elapsedSeconds.value % 60

      const addZero = (value) => {return value < 10 ? `0${value}` : value}

      // console.log('seconds ', seconds)
      if (elapsedSeconds.value > 59) counterDisplay.value = `${hours}:${addZero(minutes)}`
      if (elapsedSeconds.value < 60) counterDisplay.value = `${addZero(minutes)}:${addZero(seconds)}`
    }

    // запуск счётчика интервалом в 1 секунду
    const initCountdown = () => {
      stopCountdown()
      counterInterval = setInterval(() => {
        addOneSecond()
      }, 1000)
      isCounting.value = true
    }

    // пауза счётчика
    const stopCountdown = () => {
      clearInterval(counterInterval)
      isCounting.value = false
    }

    // кнопка диалогового окна создания / продолжения Времени
    const counterPlay = () => {
      if (activeTime.value && activeTime.value.state_id === 2) {
        $utils.callPgMethod('time_counter_continue', {
          work_id: props.item.id,
        }, (res) => {
          console.log('time_counter_continue result time id:', res.result.id)
          setTime(res.result.id)
        })
      }
      else isPlayDialog.value = true
    }

    // создание новой сущности времени и запуск счётчика
    const createTime = () => {
      $utils.callPgMethod('time_counter_create', {
        work_id: props.item.id,
        system_id: props.item.system_id,
      }, (res) => {
        isPlayDialog.value = false
        setTime(res.result.id)
        initCountdown()
        emit('reloadTimeWidget')
      })
    }

    // определение активного времени
    const getActiveTime = () => {
      $utils.callPgMethod('time_list', {
        work_id: props.item.id,
        deleted: false,
        order_by: "state_id"
      }, (list) => {
        if (list[0])
          if (list[0].state_id !== 3) setTime(list[0].id)
          else activeTime.value = null
      })
    }
    getActiveTime()

    // кнопка паузы счётчика
    const counterPause = () => {
      stopCountdown()
      $utils.callPgMethod('time_counter_pause', {
        work_id: props.item.id,
      }, (res) => {
        setTime(res.result.id)
        stopCountdown()
      })
    }

    // кнопка вызова диалогового окна завершения счётчика
    const counterConfirmDialogButton = () => {
      isConfirmDialog.value = true
    }

    // кнопка "Готово" в диалоге завершения счётчика
    const counterConfirm = () => {
      $utils.callPgMethod('time_counter_confirm', {
        work_id: props.item.id,
        description: timeDescription.value
      }, (res) => {
        isConfirmDialog.value = false
        stopCountdown()
        timeDescription.value = ''
        counterDisplay.value = '00:00'
        elapsedSeconds.value = null
        activeTime.value = null
        emit('reloadTimeWidget')
      })
    }

    // остановка фронтовой части счётчика при выходе с экрана
    onBeforeUnmount(() => {
      stopCountdown()
    })

    return {
      counterDisplay,
      initCountdown,
      stopCountdown,
      elapsedSeconds,
      isCounting,
      isPlayDialog,
      counterPlay,
      createTime,
      counterPause,
      isConfirmDialog,
      counterConfirmDialogButton,
      counterConfirm,
      activeTime,
      timeDescription,
    }
  }
}
</script>

<style scoped>
* {
  font-weight: 200;
}
</style>
