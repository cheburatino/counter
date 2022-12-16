<template>
  <!--  диалог создания / продолжения Времени-->
  <q-dialog v-model="isPlayDialog">
    <q-card class="q-pa-md q-gutter-sm">
      <h4>Создать время?</h4>
      <q-btn rounded push icon="local_fire_department" color="secondary" size="xl" label="Ну погнали" @click="createTime"/>
    </q-card>
  </q-dialog>
  <div class="q-col">
    <q-card>
      <div class="text-center row">

        <!--      кнопки запуска и паузы секундомера-->
        <div class="q-pa-md q-gutter-sm">
          <q-btn rounded push icon="play_arrow" color="secondary" size="xl" @click="playDialog" v-if="!isCounting"/>
          <q-btn rounded push icon="pause" color="warning" size="xl" @click="stopCountdown" v-if="isCounting"/>
          <q-btn rounded push icon="done" color="positive" size="xl" @click="stopCountdown" v-if="!isCounting && elapsedSeconds"/>
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
import {computed, ref, watch} from 'vue'
import moment from 'moment'
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

    // добавление одной секунды в дисплей
    const addOneSecond = () => {
      counterDisplay.value = moment(counterDisplay.value, 'mm:ss').add(1, 'seconds').format('mm:ss')
      elapsedSeconds.value++
    }


    const counterDisplayConvert = (secondsElapsed) => {
      const hours = Math.floor(secondsElapsed % (3600 * 60) / 60 / 60)
      const minutes = Math.floor((secondsElapsed % 3600) / 60)
      const seconds = secondsElapsed % 60
      elapsedSeconds.value = secondsElapsed

      function addZero(value) {
        return value < 10 ? `0${value}` : value
      }

      console.log('hours ', hours)
      console.log('minutes ', minutes)
      console.log('seconds ', seconds)
      // if (secondsElapsed) counterDisplay.value = `${hours}:${addZero(minutes)}:${addZero(seconds)}`
      if (secondsElapsed > 60) counterDisplay.value = `${hours}:${addZero(minutes)}`
      if (secondsElapsed < 60) counterDisplay.value = `${addZero(minutes)}:${addZero(seconds)}`
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

    // диалоговое окно создания / продолжения Времени
    const playDialog = () => {
      isPlayDialog.value = true
    }

    // создание новой сущности времени и запуск таймера
    const createTime = () => {
      $utils.callPgMethod('time_update', {
        id: -1,
        work_id: props.item.id,
        start_time: new Date,
        system_id: props.item.system_id,
        state_id: 1
      }, (res) => {
        console.log(res)
        isPlayDialog.value = false
        initCountdown()
        emit('reloadTimeWidget')
      })
    }

    // определение активного времени
    $utils.callPgMethod('time_list', {
      work_id: props.item.id,
      state_id: 1
    }, (list) => {
      if (list[0])
      $utils.callPgMethod('time_get_by_id', {id: list[0].id}, (res) => {
        activeTime.value = res

      })
    })

    // определение параметров активного времени
    const counterState = computed(() => {
      if (activeTime.value) return  activeTime.value.state_id
      return null
    })

    const counterValue = computed(() => {
      if (activeTime.value) {
        if (activeTime.value.effort > 0) counterDisplayConvert(activeTime.value.effort * 60)
        if (activeTime.value.effort === 0) counterDisplayConvert(Math.ceil((Date.now() - Date.parse(activeTime.value.start_time)) / 1000))
      }
      return elapsedSeconds.value
    })





    setTimeout(() => {
    console.log('counterValue.value', counterValue.value)
    },500)
    // $utils.callPgMethod('time_get_by_id', {
    //   work_id: props.item.work_id
    // }, (res) => {
    //   console.log(res)
    // })

    return {
      circleValue,
      counterDisplay,
      initCountdown,
      stopCountdown,
      elapsedSeconds,
      isCounting,
      isPlayDialog,
      playDialog,
      createTime
    }
  }
}
</script>

<style scoped>
* {
  font-weight: 200;
}
</style>
