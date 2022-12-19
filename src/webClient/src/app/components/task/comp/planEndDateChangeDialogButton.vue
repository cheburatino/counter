<template>
  <q-dialog v-model="isShowDialog">
    <q-card style="min-width: 20vw">
      <q-card-section>
        <div class="text-h6">Изменить плановую дату завершения</div>
      </q-card-section>
      <q-card-section>
        <div>
          <!--          новая плановая дата завершения-->
          <div>
            <comp-fld-date outlined :label="'новая ' + $t('task.plan_end_date')" :date-string="$utils.formatPgDate(item.plan_end_date)" :readonly='false' @update="v=> planEndDate = v" class='q-mb-sm col-md-4 col-sm-6 col-xs-12'/>
          </div>
          <!--          на чьей стороне причина-->
          <div>
            <comp-fld-ref-search outlined pgMethod="ctlg_plan_end_date_change_side_list" :label="$t('plan_end_date_change.side_id')" :item='item.side_title' :itemId='item.side_id' :ext='{}' @update="v=> sideId = v.id" @clear="sideId = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
          </div>
          <!--          кол-во рабочих дней-->
          <div>
            <q-input outlined dense type='number' v-model="workDayQuantity" :label="$t('plan_end_date_change.work_day_quantity')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-4' />
          </div>
          <!--          причина-->
          <div>
            <q-input v-model="reason" autogrow label="Причина"/>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Отмена" v-close-popup/>
          <q-btn label="Готово" @click="planEndDateChange" color="warning"/>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>

  <div>
    <q-btn class="q-ml-sm" icon="event_repeat" size="md" round color="secondary" @click="open()">
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">Изменить дату</q-tooltip>
    </q-btn>
  </div>

</template>

<script>

import {ref} from 'Vue'
import {useQuasar} from 'quasar'
import $utils from 'src/app/plugins/utils'

export default {
  props: ['item', 'currentUser'],
  setup(props, {emit}) {
    // управление показом диалога
    const isShowDialog = ref(false)
    const open = () => isShowDialog.value = true

    const planEndDate = ref(null)
    const reason = ref('')
    const sideId = ref(null)
    const workDayQuantity = ref(null)

    const $q = useQuasar()

    const planEndDateChange = () => {
      isShowDialog.value = true
      $utils.callPgMethod('task_change_plan_end_date', {
        task_id: props.item.id,
        new_plan_end_date: planEndDate.value,
        reason: reason.value,
        side_id: sideId.value,
        work_day_quantity: workDayQuantity.value

      }, (res) => {
        emit('reload')
        isShowDialog.value = false

        $q.notify({type: 'positive', message: 'Плановая дата завершения изменена'})
      })
    }

    return {
      isShowDialog,
      open,
      planEndDate,
      reason,
      planEndDateChange,
      sideId,
      workDayQuantity
    }
  }
}
</script>


<style scoped>

</style>
