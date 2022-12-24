<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Задачи', to:'/task',  docType: 'task'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->

      <!--      название-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('task.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        тип -->
      <!--      <div class="row q-col-gutter-md q-mb-sm">-->
      <!--&lt;!&ndash;        квадратное поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.type_id">-->
      <!--            <comp-fld-ref-search outlined pgMethod="ctlg_task_type_list" :label="$t('task.type_id')" :item='item.type_title' :itemId='item.type_id' :ext='{}' @update="v=> item.type_id = v.id" @clear="item.type_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
      <!--        </div>-->
      <!--&lt;!&ndash;        закруглённое поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.type_id">-->
      <!--            <comp-fld-ref-search rounded dense pgMethod="ctlg_task_type_list" :label="$t('task.type_id')" :item='item.type_title' :itemId='item.type_id' :ext='{}' @update="v=> item.type_id = v.id" @clear="item.type_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
      <!--        </div>-->
      <!--      </div>-->

      <!--        этап-->
      <div class="row q-col-gutter-md q-mb-sm">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.state_id">
          <comp-fld-ref-search outlined pgMethod="ctlg_task_stage_list" :label="$t('task.stage_id')" :item='item.stage_title' :itemId='item.stage_id' :ext='{}' @update="v=> item.stage_id = v.id" @clear="item.stage_id = null" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
        </div>
        <!--        закруглённое поле-->
        <div class="col-md-3 col-sm-5 col-xs-9" v-if="item.state_id && this.id !== 'new'">
          <comp-fld-ref-search rounded dense pgMethod="ctlg_task_stage_list" :label="$t('task.stage_id')"
                               :item='item.stage_title' :itemId='item.stage_id' :ext='{}'
                               :bg-color="item.state_id === 2 ? 'warning' : item.state_id === 3 ? 'negative' : ''"
                               @update="v=> item.stage_id = v.id" @clear="item.stage_id = null" :readonly='true'
                               class='q-mb-sm col-md-1 col-sm-2 col-xs-6'/>
        </div>
        <!--        кнопка перехода на следующий этап-->
        <div class="col-md-1 col-sm-1 col-xs-3" v-if="item.state_id && this.id !== 'new'">
          <set-next-stage-button :item="item" @reload="reload()" :currentUser="currentUser" />
        </div>
      </div>

      <!--        статус-->
      <!--      <div class="row q-col-gutter-md q-mb-sm">-->
      <!--&lt;!&ndash;        квадратное поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.state_id">-->
      <!--            <comp-fld-ref-search outlined pgMethod="ctlg_task_state_list" :label="$t('task.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />-->
      <!--        </div>-->
      <!--&lt;!&ndash;        закруглённое поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.state_id">-->
      <!--            <comp-fld-ref-search rounded dense pgMethod="ctlg_task_state_list" :label="$t('task.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />-->
      <!--        </div>-->
      <!--      </div>-->

      <!--        система-->
      <div class="row q-col-gutter-md q-mb-sm">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.system_id">
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('task.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{"avatar":"image/system.png","isClearable":"true","pathUrl":"/system"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
        <!--        закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.system_id">
          <comp-fld-ref-search rounded dense pgMethod="system_list" :label="$t('task.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{"avatar":"image/system.png","isClearable":"true","pathUrl":"/system"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        лурв-->
      <!--      <div class="row q-col-gutter-md q-mb-sm">-->
      <!--&lt;!&ndash;        квадратное поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.work_time_sheet_id">-->
      <!--            <comp-fld-ref-search outlined pgMethod="work_time_sheet_list" :label="$t('task.work_time_sheet_id')" :item='item.work_time_sheet_title' :itemId='item.work_time_sheet_id' :ext='{"avatar":"image/work_time_sheet.png","isClearable":"true","pathUrl":"/work_time_sheet"}' @update="v=> item.work_time_sheet_id = v.id" @clear="item.work_time_sheet_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
      <!--        </div>-->
      <!--&lt;!&ndash;        закруглённое поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.work_time_sheet_id">-->
      <!--            <comp-fld-ref-search rounded dense pgMethod="work_time_sheet_list" :label="$t('task.work_time_sheet_id')" :item='item.work_time_sheet_title' :itemId='item.work_time_sheet_id' :ext='{"avatar":"image/work_time_sheet.png","isClearable":"true","pathUrl":"/work_time_sheet"}' @update="v=> item.work_time_sheet_id = v.id" @clear="item.work_time_sheet_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
      <!--        </div>-->
      <!--      </div>-->

      <!--        тз-->
      <!--      <div class="row q-col-gutter-md q-mb-sm">-->
      <!--&lt;!&ndash;        квадратное поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.technical_task_id">-->
      <!--            <comp-fld-ref-search outlined pgMethod="technical_task_list" :label="$t('task.technical_task_id')" :item='item.technical_task_title' :itemId='item.technical_task_id' :ext='{"avatar":"image/technical_task.svg","isClearable":"true","pathUrl":"/technical_task"}' @update="v=> item.technical_task_id = v.id" @clear="item.technical_task_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
      <!--        </div>-->
      <!--&lt;!&ndash;        закруглённое поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.technical_task_id">-->
      <!--            <comp-fld-ref-search rounded dense pgMethod="technical_task_list" :label="$t('task.technical_task_id')" :item='item.technical_task_title' :itemId='item.technical_task_id' :ext='{"avatar":"image/technical_task.svg","isClearable":"true","pathUrl":"/technical_task"}' @update="v=> item.technical_task_id = v.id" @clear="item.technical_task_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
      <!--        </div>-->
      <!--      </div>-->

      <!--        описание-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('task.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
        </div>
      </div>

      <!--        файлы описания-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files  v-if="this.id != 'new'" fldName='description_files' :label="$t('task.description_files')" :fld='item.description_files' :ext = '{tableName: "task", tableId: this.id}' @update="v=> item.description_files = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        изображения описания-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('task.description_images')" :fld='item.description_images' :ext = '{tableName: "task", tableId: this.id, fldName: "description_images"}' @update="v=> item.description_images = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        плановая дата завершения / кнопка изменения-->
      <div class="row q-col-gutter-sm q-mb-sm" v-if="this.id != 'new' && planEndDateShow" >
        <!--         квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.plan_end_date">
          <comp-fld-date outlined :label="$t('task.plan_end_date')" :date-string="$utils.formatPgDate(item.plan_end_date)" @update="v=> item.plan_end_date = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
        <!--         закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.plan_end_date">
          <comp-fld-date rounded dense :label="$t('task.plan_end_date')" :date-string="$utils.formatPgDate(item.plan_end_date)" @update="v=> item.plan_end_date = v" :readonly='false' @clear="item.fact_end_date = null" class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
<!--        &lt;!&ndash;         закруглённое поле&ndash;&gt;-->
<!--        <div class="col-md-3 col-sm-5 col-xs-10" v-if="item.plan_end_date">-->
<!--          <comp-fld-date rounded dense :label="$t('task.plan_end_date')" :date-string="$utils.formatPgDate(item.plan_end_date)" @update="v=> item.plan_end_date = v" :readonly='false' @clear="item.fact_end_date = null" class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
<!--        </div>-->
<!--        &lt;!&ndash;        кнопка изменения плановой даты&ndash;&gt;-->
<!--        <div class="col-md-1 col-xs-2" v-if="item.plan_end_date">-->
<!--          <plan-end-date-change-dialog-button :item="item" @reload="reload()"/>-->
<!--        </div>-->
      </div>

      <!--        фактическая дата завершения-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && factEndDateShow">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.fact_end_date">
          <comp-fld-date outlined :label="$t('task.fact_end_date')" :date-string="$utils.formatPgDate(item.fact_end_date)" @update="v=> item.fact_end_date = v" :readonly='false' class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
        <!--         закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.fact_end_date">
          <comp-fld-date rounded dense :label="$t('task.fact_end_date')" :date-string="$utils.formatPgDate(item.fact_end_date)" @update="v=> item.fact_end_date = v" :readonly='false' @clear="item.fact_end_date = null" class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
      </div>

      <!--      приоритет / оценка / затрачено-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && timePriorityShow">

        <!--        оценка времени-->
        <div class="col-md-1 col-sm-2 col-xs-4">
          <q-input outlined dense type='number' v-model="item.estimate" :label="$t('task.estimate')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
        </div>

        <!--        затрачено времени-->
        <div class="col-md-1 col-sm-2 col-xs-4">
          <q-input outlined dense type='number' v-model="item.worked_time" :label="$t('task.worked_time')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
        </div>
<!--        <div class="col-md-1 col-sm-2 col-xs-4" v-if="item.worked_time > 0">-->
<!--          <q-input outlined dense type='number' v-model="item.worked_time" :label="$t('task.worked_time')" :readonly='true'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />-->
<!--        </div>-->

        <!--        приоритет заказчика-->
        <div class="col-md-2 col-sm-3 col-xs-4">
          <q-input outlined dense type='number' v-model="item.customer_priority" :label="$t('task.customer_priority')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
        </div>

      </div>

      <!--        работы-->
<!--      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && workShow">-->
<!--        <div class="col-md-4 col-sm-6 col-xs-12">-->
<!--          <work-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>-->
<!--        </div>-->
<!--      </div>-->

      <!--        задачи заказчика-->
      <!--      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && workShow">-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12">-->
      <!--          <customer-task-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>-->
      <!--        </div>-->
      <!--      </div>-->

      <!--      как проверить задачу-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && howToCheckShow">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.how_to_check" :label="$t('task.how_to_check')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        файлы проверки-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && howToCheckShow && item.how_to_check">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='how_to_check_files' :label="$t('task.how_to_check_files')" :fld='item.how_to_check_files' :ext = '{tableName: "task", tableId: this.id}' @update="v=> item.how_to_check_files = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        изображения проверки-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && howToCheckShow && item.how_to_check">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('task.how_to_check_images')" :fld='item.how_to_check_images' :ext = '{tableName: "task", tableId: this.id, fldName: "how_to_check_images"}' @update="v=> item.how_to_check_images = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        результат-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && resultShow" >
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.result" :label="$t('task.result')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
        </div>
      </div>

      <!--        файлы результата-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && resultShow" >
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='result_files' :label="$t('task.result_files')" :fld='item.result_files' :ext = '{tableName: "task", tableId: this.id}' @update="v=> item.result_files = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        изображения результата-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && resultShow" >
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('task.result_images')" :fld='item.result_images' :ext = '{tableName: "task", tableId: this.id, fldName: "result_images"}' @update="v=> item.result_images = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        ответственный исполнитель-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && responsibleShow">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.executor_responsible_id">
          <comp-fld-ref-search outlined pgMethod="contact_list" :label="$t('task.executor_responsible_id')" :item='item.executor_responsible_title' :itemId='item.executor_responsible_id' :ext='{"avatar":"image/man.svg","isClearable":"true","pathUrl":"/contact"}' @update="v=> item.executor_responsible_id = v.id" @clear="item.executor_responsible_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
        <!--        закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.executor_responsible_id">
          <comp-fld-ref-search rounded dense pgMethod="contact_list" :label="$t('task.executor_responsible_id')" :item='item.executor_responsible_title' :itemId='item.executor_responsible_id' :ext='{"avatar":"image/man.svg","isClearable":"true","pathUrl":"/contact"}' @update="v=> item.executor_responsible_id = v.id" @clear="item.executor_responsible_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        ответственный заказчик-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="this.id != 'new' && responsibleShow">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.customer_responsible_id">
          <comp-fld-ref-search outlined pgMethod="contact_list" :label="$t('task.customer_responsible_id')" :item='item.customer_responsible_title' :itemId='item.customer_responsible_id' :ext='{"avatar":"image/man.svg","isClearable":"true","pathUrl":"/contact"}' @update="v=> item.customer_responsible_id = v.id" @clear="item.customer_responsible_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
        <!--         закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.customer_responsible_id">
          <comp-fld-ref-search rounded dense pgMethod="contact_list" :label="$t('task.customer_responsible_id')" :item='item.customer_responsible_title' :itemId='item.customer_responsible_id' :ext='{"avatar":"image/man.svg","isClearable":"true","pathUrl":"/contact"}' @update="v=> item.customer_responsible_id = v.id" @clear="item.customer_responsible_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        история-->
      <div class="row q-col-gutter-md q-mb-md">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <timeline-dialog-button :historyList="item.history" :label="'история'" :rounded="true" :item="item" />
        </div>
      </div>


      <!--  кнопки   -->
      <comp-item-btn-save v-if="!isOpenInDialog" @save="save" :readonly="false" @cancel="$router.push(docUrl)"/>
      <!--  при открытии в диалоге кнопку Отмена не показываем   -->
      <q-btn v-else color="secondary" :label="$t('message.save')" class="q-mr-sm" @click="save"/>



      <!-- кнопка сохранения, которая закреплена в углу экрана     -->
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn size="sm" fab icon="save" color="primary" @click="save">
          <q-tooltip>Сохранить</q-tooltip>
        </q-btn>
      </q-page-sticky>

    </div>
  </q-page>
</template>

<script>
import workListRefListWidget from './comp/workListRefListWidget.vue'
import customerTaskListRefListWidget from './comp/customerTaskListRefListWidget.vue'
import currentUserMixin from '../../../app/mixins/currentUser'
import TimelineDialogButton from "src/app/components/task/comp/timelineDialogButton.vue";
import PlanEndDateChangeDialogButton from "src/app/components/task/comp/planEndDateChangeDialogButton.vue";
import SetNextStageButton from "src/app/components/task/comp/setNextStageButton.vue";

export default {
  props: ['id', 'isOpenInDialog'],
  components: {
    SetNextStageButton,
    // PlanEndDateChangeDialogButton,
    TimelineDialogButton,
    // workListRefListWidget,
    // customerTaskListRefListWidget
  },
  mixins: [currentUserMixin,],
  computed: {
    docUrl: function() {
      return '/task'
    },

    // видимость поля "плановая дата завершения"
    planEndDateShow() {
      // зависимость от этапа
      switch (this.item.stage_id) {
          // видно на этапе "бэклог"
        case 2: return true
          // видно на этапе "в работе"
        case 3: return true
          // видно на этапе "внутреннее тестирование"
        case 4: return true
          // видно на этапе "тестирование заказчика"
        case 5: return true
          // видно на этапе "выполнено"
        case 6: return true
      }
      return false
    },

    // видимость поля "фактическая дата завершения"
    factEndDateShow() {
      // зависимость от этапа
      switch (this.item.stage_id) {
          // видно на этапе "тестирование заказчика"
        case 5: return true
          // видно на этапе "выполнено"
        case 6: return true
      }
      return false
    },

    // видимость полей "оценка", "затраченное время", "приоритет"
    timePriorityShow() {
      // зависимость от этапа
      switch (this.item.stage_id) {
          // видно на этапе "бэклог"
        case 2: return true
          // видно на этапе "в работе"
        case 3: return true
          // видно на этапе "внутреннее тестирование"
        case 4: return true
          // видно на этапе "тестирование заказчика"
        case 5: return true
          // видно на этапе "выполнено"
        case 6: return true
      }
      return false
    },

    // видимость виджетов "работы" и "задачи заказчика"
    workShow() {
      // зависимость от этапа
      switch (this.item.stage_id) {
          // видно на этапе "бэклог"
        case 2: return true
          // видно на этапе "в работе"
        case 3: return true
          // видно на этапе "внутреннее тестирование"
        case 4: return true
          // видно на этапе "тестирование заказчика"
        case 5: return true
          // видно на этапе "выполнено"
        case 6: return true
      }
      return false
    },

    // видимость поля и виджетов "как проверить задачу"
    howToCheckShow() {
      // зависимость от этапа
      switch (this.item.stage_id) {
          // видно на этапе "внутреннее тестирование"
        case 4: return true
          // видно на этапе "тестирование заказчика"
        case 5: return true
          // видно на этапе "выполнено"
        case 6: return true
      }
      return false
    },

    // видимость поля и виджетов "результат"
    resultShow() {
      // зависимость от этапа
      switch (this.item.stage_id) {
          // видно на этапе "тестирование заказчика"
        case 5: return true
          // видно на этапе "выполнено"
        case 6: return true
      }
      return false
    },

    //видимость выборов ответственных
    responsibleShow() {
      // зависимость от этапа
      switch (this.item.stage_id) {
          // видно на этапе "бэклог"
        case 2: return true
          // видно на этапе "в работе"
        case 3: return true
          // видно на этапе "внутреннее тестирование"
        case 4: return true
          // видно на этапе "тестирование заказчика"
        case 5: return true
          // видно на этапе "выполнено"
        case 6: return true
      }
      return false
    },
  },
  data() {
    return {
      item: null,
      flds: [
        {name: 'title', label: 'название',  required: true},
        {name: 'type_id', label: 'тип задачи'},
        {name: 'stage_id', label: 'этап',  required: true},
        {name: 'state_id', label: 'статус',  required: true},
        {name: 'system_id', label: 'система'},
        {name: 'plan_end_date', label: 'плановая дата завершения'},
        {name: 'fact_end_date', label: 'фактическая дата завершения'},
        {name: 'customer_priority', label: 'приоритет заказчика'},
        {name: 'estimate', label: 'оценка'},
        {name: 'worked_time', label: 'затрачено'},
        {name: 'description', label: 'описание'},
        {name: 'description_files', label: 'файлы описания'},
        {name: 'description_images', label: 'изображения описания'},
        {name: 'how_to_check', label: 'как проверить задачу'},
        {name: 'how_to_check_files', label: 'файлы проверки'},
        {name: 'how_to_check_images', label: 'изображения проверки'},
        {name: 'result', label: 'результат'},
        {name: 'result_files', label: 'файлы результата'},
        {name: 'result_images', label: 'изображения результата'},
        {name: 'history', label: 'история'},
        {name: 'executor_responsible_id', label: 'ответственный исполнитель'},
        {name: 'customer_responsible_id', label: 'ответственный заказчик'},
      ],
      optionsFlds: [],

    }
  },
  watch: {

  },
  methods: {

    resultModify(res) {
      return res
    },

    save() {
      this.$utils.saveItem.call(this, {
        method: 'task_update',
        itemForSaveMod: {},
        resultModify: this.resultModify,
      })
    },

    reload() {
      let cb = (v) => {
        this.item = this.resultModify(v)
      }
      this.$utils.getDocItemById.call(this, {method: 'task_get_by_id', cb})
    }
  },
  mounted() {
    this.reload()
  }
}
</script>
