<template>
  <q-btn round push icon="skip_next" color="secondary" @click="setNextStage" v-if="item.stage_id < 6">
    <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" v-if="item.stage_id === 1">Отправить в бэклог</q-tooltip>
    <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" v-if="item.stage_id === 2">Отправить в работу</q-tooltip>
    <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" v-if="item.stage_id === 3">Отправить на внутреннее тестирование</q-tooltip>
    <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" v-if="item.stage_id === 4">Отправить на тестирование заказчику</q-tooltip>
    <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" v-if="item.stage_id === 5">Готово!</q-tooltip>
  </q-btn>
</template>

<script>
import $utils from 'src/app/plugins/utils'

export default {
  props: ['item'],
  setup(props, {emit}) {

    // функция перехода на этап "бэклог"
    const setStageToBacklog = () => {
      $utils.callPgMethod('task_to_backlog', {
        id: props.item.id,
      }, (res) => {
        emit('reload')
      })
    }

    // функция перехода на этап "в процессе"
    const setStageToInProgress = () => {
      $utils.callPgMethod('task_to_in_process', {
        id: props.item.id,
      }, (res) => {
        emit('reload')
      })
    }

    // функция перехода на этап "внутреннее тестирование"
    const setStageToInternalCheck = () => {
      $utils.callPgMethod('task_to_internal_check', {
        id: props.item.id,
      }, (res) => {
        emit('reload')
      })
    }

    // функция перехода на этап "тестирование заказчика"
    const setStageToCustomerCheck = () => {
      $utils.callPgMethod('task_to_customer_check', {
        id: props.item.id,
      }, (res) => {
        emit('reload')
      })
    }

    // функция перехода на этап "готово"
    const setStageToDone = () => {
      $utils.callPgMethod('task_to_done', {
        id: props.item.id,
      }, (res) => {
        emit('reload')
      })
    }

    // функция перехода на следующий этап (на кнопке)
    const setNextStage = () => {
      // зависимость от актуального этапа
      switch (props.item.stage_id) {
        case 1: setStageToBacklog(); break;
        case 2: setStageToInProgress(); break;
        case 3: setStageToInternalCheck(); break;
        case 4: setStageToCustomerCheck(); break;
        case 5: setStageToDone(); break;
      }
    }

    return {
      setNextStage
    }
  }
}
</script>

<style scoped>

</style>
