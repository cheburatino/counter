<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Работы', to:'/work',  docType: 'work'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->

      <!--      название-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('work.title')" autogrow :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
      </div>

      <!--      оценка / затрачено / приоритет-->
      <div class="row q-col-gutter-md q-mb-sm">
        <!--      оценка-->
        <div class="col-md-1 col-sm-2 col-xs-6">
          <q-input outlined type='number' v-model="item.estimate" :label="$t('work.estimate')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
        </div>

        <!--      затраченное время-->
        <div class="col-md-1 col-sm-2 col-xs-6">
          <q-input outlined type='number' v-model="item.worked_time" :label="$t('work.worked_time')" :readonly='true'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
        </div>

        <!--      приоритет специалиста-->
        <div class="col-md-1 col-sm-2 col-xs-6">
          <q-input outlined type='number' v-model="item.specialist_priority" :label="$t('work.specialist_priority')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
        </div>
      </div>

      <!--      чекбокс "в работе сегодня"-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 2 || item.state_id === 3">
        <div class="col-md-2 col-sm-4 col-xs-6">
          <q-checkbox :label="$t('work.today')" v-model='item.today' :disable='false' :false-value='false' indeterminate-value='some'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
        </div>
      </div>

      <!--      статус-->
      <div class="row q-col-gutter-md q-mb-sm">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.state_id">
          <comp-fld-ref-search outlined pgMethod="ctlg_work_state_list" :label="$t('work.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
        <!--        закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.state_id">
          <comp-fld-ref-search rounded dense pgMethod="ctlg_work_state_list" :label="$t('work.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
      </div>

      <!--      система-->
      <div class="row q-col-gutter-md q-mb-sm">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.system_id">
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('work.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{"avatar":"image/system.png","isClearable":"true","pathUrl":"/system"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
        <!--        закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.system_id">
          <comp-fld-ref-search rounded dense pgMethod="system_list" :label="$t('work.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{"avatar":"image/system.png","isClearable":"true","pathUrl":"/system"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
        </div>
      </div>

      <!--        исполнитель-->
      <!--      <div class="row q-col-gutter-md q-mb-sm">-->
      <!--        &lt;!&ndash;        квадратное поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.executor_id">-->
      <!--          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('work.executor_id')" :item='item.executor_title' :itemId='item.executor_id' :ext='{"avatar":"image/man.svg","isClearable":"true","pathUrl":"/man"}' @update="v=> item.executor_id = v.id" @clear="item.executor_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
      <!--        </div>-->
      <!--        &lt;!&ndash;        закруглённое поле&ndash;&gt;-->
      <!--        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.executor_id">-->
      <!--          <comp-fld-ref-search rounded dense pgMethod="man_list" :label="$t('work.executor_id')" :item='item.executor_title' :itemId='item.executor_id' :ext='{"avatar":"image/man.svg","isClearable":"true","pathUrl":"/man"}' @update="v=> item.executor_id = v.id" @clear="item.executor_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />-->
      <!--        </div>-->
      <!--      </div>-->

      <!--        задача-->
      <div class="row q-col-gutter-md q-mb-sm">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.task_id">
          <comp-fld-ref-search outlined pgMethod="task_list" :label="$t('work.task_id')" :item='item.task_title' :itemId='item.task_id' :ext='{"avatar":"image/task.svg","isClearable":"true","pathUrl":"/task"}' @update="v=> item.task_id = v.id" @clear="item.task_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
        <!--        закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.task_id">
          <comp-fld-ref-search rounded dense pgMethod="task_list" :label="$t('work.task_id')" :item='item.task_title' :itemId='item.task_id' :ext='{"avatar":"image/task.svg","isClearable":"true","pathUrl":"/task"}' @update="v=> item.task_id = v.id" @clear="item.task_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        плановая дата завершения-->
      <div class="row q-col-gutter-md q-mb-sm">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.plan_end_date">
          <comp-fld-date outlined :label="$t('work.plan_end_date')" :date-string="$utils.formatPgDate(item.plan_end_date)" @update="v=> item.plan_end_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.plan_end_date">
          <comp-fld-date rounded dense :label="$t('work.plan_end_date')" :date-string="$utils.formatPgDate(item.plan_end_date)" @update="v=> item.plan_end_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--        фактическая дата завершения-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 2 || item.state_id === 3 || item.state_id === 4">
        <!--        квадратное поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="!item.fact_end_date">
          <comp-fld-date outlined :label="$t('work.fact_end_date')" :date-string="$utils.formatPgDate(item.fact_end_date)" @update="v=> item.fact_end_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
        <!--        закруглённое поле-->
        <div class="col-md-4 col-sm-6 col-xs-12" v-if="item.fact_end_date">
          <comp-fld-date rounded dense :label="$t('work.fact_end_date')" :date-string="$utils.formatPgDate(item.fact_end_date)" @update="v=> item.fact_end_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--      описание-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('work.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
        </div>
      </div>

      <!--      файлы описания-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='description_files' :label="$t('work.description_files')" :fld='item.description_files' :ext = '{tableName: "work", tableId: this.id}' @update="v=> item.description_files = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--      изображения описания-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('work.description_images')" :fld='item.description_images' :ext = '{tableName: "work", tableId: this.id, fldName: "description_images"}' @update="v=> item.description_images = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--      процесс-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 2 || item.state_id === 3 || item.state_id === 4">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.process" :label="$t('work.process')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
        </div>
      </div>

      <!--      файлы процесса-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 2 || item.state_id === 3 || item.state_id === 4">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='process_files' :label="$t('work.process_files')" :fld='item.process_files' :ext = '{tableName: "work", tableId: this.id}' @update="v=> item.process_files = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--      изображения процесса-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 2 || item.state_id === 3 || item.state_id === 4">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('work.process_images')" :fld='item.process_images' :ext = '{tableName: "work", tableId: this.id, fldName: "process_images"}' @update="v=> item.process_images = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--      счётчик-->
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <time-counter :item="item" @reloadTimeWidget="reloadTimeWidget" v-if="item.state_id === 2 || item.state_id === 3 || item.state_id === 4"/>
        </div>
      </div>

      <!--      время-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 2 || item.state_id === 3 || item.state_id === 4">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <!--          <time-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false' :key="timeKey"/>-->
        </div>
      </div>

      <!--      результат-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 3 || item.state_id === 4">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.result" :label="$t('work.result')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
        </div>
      </div>

      <!--      файлы результата-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 3 || item.state_id === 4">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='result_files' :label="$t('work.result_files')" :fld='item.result_files' :ext = '{tableName: "work", tableId: this.id}' @update="v=> item.result_files = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
      </div>

      <!--      изображения результата-->
      <div class="row q-col-gutter-md q-mb-sm" v-if="item.state_id === 3 || item.state_id === 4">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('work.result_images')" :fld='item.result_images' :ext = '{tableName: "work", tableId: this.id, fldName: "result_images"}' @update="v=> item.result_images = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
import timeListRefListWidget from './comp/timeListRefListWidget.vue'
import currentUserMixin from '../../../app/mixins/currentUser'
import TimeCounter from "src/app/components/time/comp/TimeCounter.vue";

export default {
  props: ['id', 'isOpenInDialog'],
  components: {
    TimeCounter,
    // timeListRefListWidget
  },
  mixins: [currentUserMixin,],
  computed: {
    docUrl: function() {
      return '/work'
    },
  },
  data() {
    return {
      item: null,
      timeKey: 0,
      flds: [
        {name: 'title', label: 'название',  required: true},
        {name: 'estimate', label: 'оценка'},
        {name: 'worked_time', label: 'затрачено'},
        {name: 'today', label: 'в работе сегодня'},
        {name: 'specialist_priority', label: 'приоритет'},
        {name: 'state_id', label: 'статус'},
        {name: 'system_id', label: 'система'},
        {name: 'executor_id', label: 'исполнитель'},
        {name: 'task_id', label: 'задача'},
        {name: 'plan_end_date', label: 'плановая дата завершения'},
        {name: 'fact_end_date', label: 'фактическая дата завершения'},
        {name: 'description', label: 'описание'},
        {name: 'description_files', label: 'файлы описания'},
        {name: 'description_images', label: 'изображения описания'},
        {name: 'process', label: 'процесс'},
        {name: 'process_files', label: 'файлы результата'},
        {name: 'process_images', label: 'изображения результата'},
        {name: 'result', label: 'результат'},
        {name: 'result_files', label: 'файлы результата'},
        {name: 'result_images', label: 'изображения результата'},
      ],
      optionsFlds: [],

    }
  },
  watch: {},
  methods: {

    resultModify(res) {
      return res
    },

    save() {
      this.$utils.saveItem.call(this, {
        method: 'work_update',
        itemForSaveMod: {},
        resultModify: this.resultModify,
      })
    },

    reload() {
      let cb = (v) => {
        this.item = this.resultModify(v)
      }
      this.$utils.getDocItemById.call(this, {method: 'work_get_by_id', cb})
    },

    reloadTimeWidget() {
      this.timeKey++
    }
  },
  mounted() {
    this.reload()
  }
}
</script>
