<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Задачи', to:'/task',  docType: 'task'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->

      <pre>hi there</pre>


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
export default {
  props: ['id', 'isOpenInDialog'],
  components: {workListRefListWidget, customerTaskListRefListWidget},
  mixins: [currentUserMixin,],
  computed: {
    docUrl: function() {
      return '/task'
    },
  },
  data() {
    return {
      item: null,
      flds: [
        {name: 'title', label: 'название',  required: true},
        {name: 'type_id', label: 'тип задачи'},
        {name: 'state_id', label: 'статус'},
        {name: 'system_id', label: 'система'},
        {name: 'work_time_sheet_id', label: 'лурв'},
        {name: 'technical_task_id', label: 'тз'},
        {name: 'plan_end_date', label: 'плановая дата завершения'},
        {name: 'fact_end_date', label: 'фактическая дата завершения'},
        {name: 'specialist_priority', label: 'приоритет'},
        {name: 'estimate', label: 'оценка'},
        {name: 'worked_time', label: 'затрачено'},
        {name: 'today', label: 'в работе сегодня'},
        {name: 'description', label: 'описание'},
        {name: 'files', label: 'файлы'},
        {name: 'images', label: 'изображения'},
        {name: 'process', label: 'процесс'},
        {name: 'process_files', label: 'файлы процесса'},
        {name: 'process_images', label: 'изображения процесса'},
        {name: 'result', label: 'результатос'},
        {name: 'result_files', label: 'файлы результата'},
        {name: 'result_images', label: 'изображения результата'},
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
