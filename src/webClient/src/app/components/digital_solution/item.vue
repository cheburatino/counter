<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Цифровые решения', to:'/digital_solution',  docType: 'digital_solution'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('digital_solution.title')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="ctlg_digital_solution_state_list" :label="$t('digital_solution.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <p>Дата и время создания: {{item.created_at}}</p>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <p>Дата и время изменения: {{item.updated_at}}</p>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('digital_solution.description')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='files' :label="$t('digital_solution.files')" :fld='item.files' :ext = '{tableName: "digital_solution", tableId: this.id}' @update="v=> item.files = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('digital_solution.images')" :fld='item.images' :ext = '{tableName: "digital_solution", tableId: this.id, fldName: "images"}' @update="v=> item.images = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-executor :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-specialist :item='item' :currentUser='currentUser'/>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12" v-if="currentUser.role?.includes(`admin`)">
          <task-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-customer :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="company_list" :label="$t('digital_solution.customer_id')" :item='item.customer_title' :itemId='item.customer_id' :ext='{"avatar":"image/company.svg","isClearable":"true","pathUrl":"/company"}' @update="v=> item.customer_id = v.id" @clear="item.customer_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-customerAgent :item='item' :currentUser='currentUser'/>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <customer-task-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-relation :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('digital_solution.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{customer_id: item.customer_id, pathUrl: "/system", avatar: "image/system.svg", isClearable: "true"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <ft-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <bug-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-modeling :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_plan_start_modeling')" :date-string="$utils.formatPgDate(item.date_plan_start_modeling)" @update="v=> item.date_plan_start_modeling = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_plan_end_modeling')" :date-string="$utils.formatPgDate(item.date_plan_end_modeling)" @update="v=> item.date_plan_end_modeling = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.model" :label="$t('digital_solution.model')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-realization :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_plan_start_realization')" :date-string="$utils.formatPgDate(item.date_plan_start_realization)" @update="v=> item.date_plan_start_realization = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_plan_end_realization')" :date-string="$utils.formatPgDate(item.date_plan_end_realization)" @update="v=> item.date_plan_end_realization = v" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-result :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.result" :label="$t('digital_solution.result')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
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
	import compResult from './comp/result.vue'
	import taskListRefListWidget from './comp/taskListRefListWidget.vue'
	import compExecutor from './comp/executor.vue'
	import compCustomer from './comp/customer.vue'
	import compRelation from './comp/relation.vue'
	import compSpecialist from './comp/specialist.vue'
	import compModeling from './comp/modeling.vue'
	import compRealization from './comp/realization.vue'
	import customerTaskListRefListWidget from './comp/customerTaskListRefListWidget.vue'
	import bugListRefListWidget from './comp/bugListRefListWidget.vue'
	import compCustomerAgent from './comp/customerAgent.vue'
	import ftListRefListWidget from './comp/ftListRefListWidget.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {compResult, taskListRefListWidget, compExecutor, compCustomer, compRelation, compSpecialist, compModeling, compRealization, customerTaskListRefListWidget, bugListRefListWidget, compCustomerAgent, ftListRefListWidget},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/digital_solution'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'state_id', label: 'статус'},
                        {name: 'description', label: 'описание'},
                        {name: 'files', label: 'файлы'},
                        {name: 'images', label: 'изображения'},
                        {name: 'customer_id', label: 'заказчик'},
                        {name: 'system_id', label: 'система'},
                        {name: 'date_plan_start_modeling', label: 'планируемая дата начала моделирования'},
                        {name: 'date_plan_end_modeling', label: 'планируемая дата завершения моделирования'},
                        {name: 'model', label: 'описание модели'},
                        {name: 'date_plan_start_realization', label: 'планируемая дата начала реализации'},
                        {name: 'date_plan_end_realization', label: 'планируемая дата завершения реализации'},
                        {name: 'result', label: 'результат'},
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
                    method: 'digital_solution_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'digital_solution_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
