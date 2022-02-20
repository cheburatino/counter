<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Функциональные требования', to:'/functional_requirement',  docType: 'functional_requirement'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('functional_requirement.title')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-checkbox :label="$t('functional_requirement.paused')" v-model='item.paused' :disable='false' :false-value='false' indeterminate-value='some'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_functional_requirement_state_list" :label="$t('functional_requirement.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('functional_requirement.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{"avatar":"image/system.svg","isClearable":"true","pathUrl":"/system"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="technical_task_list" :label="$t('functional_requirement.technical_task_id')" :item='item.technical_task_title' :itemId='item.technical_task_id' :ext='{"avatar":"image/technical_task.svg","isClearable":"true","pathUrl":"/technical_task"}' @update="v=> item.technical_task_id = v.id" @clear="item.technical_task_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="request_list" :label="$t('functional_requirement.request_id')" :item='item.request_title' :itemId='item.request_id' :ext='{"avatar":"image/request.svg","isClearable":"true","pathUrl":"/request"}' @update="v=> item.request_id = v.id" @clear="item.request_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('functional_requirement.plan_end_date')" :date-string="$utils.formatPgDate(item.plan_end_date)" @update="v=> item.plan_end_date = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('functional_requirement.fact_end_date')" :date-string="$utils.formatPgDate(item.fact_end_date)" @update="v=> item.fact_end_date = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-input outlined type='number' v-model="item.customer_priority" :label="$t('functional_requirement.customer_priority')" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6" v-if="currentUser.role?.includes(`admin`)">
          <q-input outlined type='number' v-model="item.internal_priority" :label="$t('functional_requirement.internal_priority')" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6'  v-if="currentUser.role?.includes(`admin`)" />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('functional_requirement.description')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='files' :label="$t('functional_requirement.files')" :fld='item.files' :ext = '{tableName: "functional_requirement", tableId: this.id}' @update="v=> item.files = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('functional_requirement.images')" :fld='item.images' :ext = '{tableName: "functional_requirement", tableId: this.id, fldName: "images"}' @update="v=> item.images = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.benefit" :label="$t('functional_requirement.benefit')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12" v-if="!currentUser.role?.includes(`customer`)">
          <q-input outlined type='text' v-model="item.description_for_dev" :label="$t('functional_requirement.description_for_dev')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12'  v-if="!currentUser.role?.includes(`customer`)" />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='files_for_dev' :label="$t('functional_requirement.files_for_dev')" :fld='item.files_for_dev' :ext = '{tableName: "functional_requirement", tableId: this.id}' @update="v=> item.files_for_dev = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('functional_requirement.images_for_dev')" :fld='item.images_for_dev' :ext = '{tableName: "functional_requirement", tableId: this.id, fldName: "images_for_dev"}' @update="v=> item.images_for_dev = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12" v-if="currentUser.role?.includes(`admin`)">
          <task-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <bug-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.result" :label="$t('functional_requirement.result')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='result_file' :label="$t('functional_requirement.result_file')" :fld='item.result_file' :ext = '{tableName: "functional_requirement", tableId: this.id}' @update="v=> item.result_file = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('functional_requirement.result_image')" :fld='item.result_image' :ext = '{tableName: "functional_requirement", tableId: this.id, fldName: "result_image"}' @update="v=> item.result_image = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-3">
          <q-input outlined type='number' v-model="item.analisys_estimate" :label="$t('functional_requirement.analisys_estimate')" :readonly='false'  class='q-mb-sm col-3' />
      </div>
      <div class="col-3">
          <q-input outlined type='number' v-model="item.frontend_estimate" :label="$t('functional_requirement.frontend_estimate')" :readonly='false'  class='q-mb-sm col-3' />
      </div>
      <div class="col-3">
          <q-input outlined type='number' v-model="item.backend_estimate" :label="$t('functional_requirement.backend_estimate')" :readonly='false'  class='q-mb-sm col-3' />
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
	import taskListRefListWidget from './comp/taskListRefListWidget.vue'
	import bugListRefListWidget from './comp/bugListRefListWidget.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {bugListRefListWidget, taskListRefListWidget},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/functional_requirement'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'paused', label: 'на паузе'},
                        {name: 'state_id', label: 'статус'},
                        {name: 'system_id', label: 'система'},
                        {name: 'technical_task_id', label: 'техническое задание'},
                        {name: 'request_id', label: 'запрос'},
                        {name: 'plan_end_date', label: 'плановая дата завершения'},
                        {name: 'fact_end_date', label: 'фактическая дата завершения'},
                        {name: 'customer_priority', label: 'приоритет заказчика'},
                        {name: 'internal_priority', label: 'внутренний приоритет'},
                        {name: 'description', label: 'описание'},
                        {name: 'files', label: 'файлы'},
                        {name: 'images', label: 'изображения'},
                        {name: 'benefit', label: 'польза'},
                        {name: 'description_for_dev', label: 'описание для разработки'},
                        {name: 'files_for_dev', label: 'файлы для разработки'},
                        {name: 'images_for_dev', label: 'изображения для разработки'},
                        {name: 'result', label: 'результат'},
                        {name: 'result_file', label: 'файлы результата'},
                        {name: 'result_image', label: 'изображения результата'},
                        {name: 'analisys_estimate', label: 'оценка анализа'},
                        {name: 'frontend_estimate', label: 'оценка фронт'},
                        {name: 'backend_estimate', label: 'оценка бэк'},
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
                    method: 'functional_requirement_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'functional_requirement_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
