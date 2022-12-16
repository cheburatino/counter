<template>
  <div class="q-col">
    <div class="text-center">
<!--      <h3 style="margin: 0;">{{ elapsedSeconds }}</h3>-->
<!--      <h4>{{ elapsedSeconds }}</h4>-->
    </div>

    <div class="text-center">

      <!--      кнопки запуска и паузы секундомера-->
      <div class="q-pa-md q-gutter-sm">
        <q-btn rounded push icon="play_arrow" color="secondary" size="xl" @click="initCountdown" v-if="!isCounting"/>
        <q-btn rounded push icon="pause" color="warning" size="xl" @click="stopCountdown" v-if="isCounting"/>
        <q-btn rounded push icon="done" color="positive" size="xl" @click="stopCountdown" v-if="!isCounting && elapsedSeconds"/>
      </div>

<!--      секундомер-->
      <q-circular-progress
        show-value
        font-size="16px"
        class="q-ma-md"
        :value="circleValue"
        size="300px"
        :thickness="0.02"
        :color='isCounting ? "secondary" : "warning"'
        track-color="grey-3"
      >
        <h2>{{ counterDisplay }}</h2>
      </q-circular-progress>

    </div>
  </div>
</template>

<script>
import {ref, watch} from 'vue'
import moment from 'moment'



export default {
  name: "TimeCounter",
  components: {},
  setup() {
    // заполненность круга
    const circleValue = ref(0)

    // прошло секунд
    let elapsedSeconds = ref(0)

    // значение на дисплее
    let counterDisplay = ref('00:00')

    // переменная для запуска и паузы секундомера
    let counterInterval = ref(null)

    // переменная состояния секундомера
    let isCounting = ref(false)

    // заполненность круга
    function circlePercentage() {
      if (elapsedSeconds.value < 60) circleValue.value = (100 * elapsedSeconds.value) / 60
      else circleValue.value = (100 * (elapsedSeconds.value % 60)) / 60
    }

    // функция для корректного ввода времени в секундомер
    function counterDisplayConvert(secondsElapsed) {
      const minutes = Math.floor((secondsElapsed % 3600) / 60)
      const seconds = secondsElapsed % 60

      function addZero(value) {
        return value < 10 ? `0${value}` : value
      }

      counterDisplay.value = `${addZero(minutes)}:${addZero(seconds)}`
    }

    // добавление одной секунды в дисплей
    function addOneSecond() {
      counterDisplay.value = moment(counterDisplay.value, 'mm:ss').add(1, 'seconds').format('mm:ss')
      elapsedSeconds.value++
    }

    // запуск секундомера
    function initCountdown() {
      counterInterval = setInterval(() => {
        addOneSecond()
        circlePercentage()
      }, 1000)
      isCounting.value = true
    }

    // пауза секундомера
    function stopCountdown() {
      clearInterval(counterInterval)
      isCounting.value = false
    }

    return {
      circleValue,
      counterDisplay,
      initCountdown,
      stopCountdown,
      elapsedSeconds,
      isCounting
    }
  }
}
</script>

<style scoped>
* {
  font-weight: 200;
}
</style>
