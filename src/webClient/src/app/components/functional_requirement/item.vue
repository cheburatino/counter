<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Функциональные требования', to:'/functional_requirement',  docType: 'functional_requirement'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('functional_requirement.title')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="ctlg_functional_requirement_state_list" :label="$t('functional_requirement.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-executor :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <p>Специалисты</p>
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
          <comp-fld-ref-search outlined pgMethod="company_list" :label="$t('functional_requirement.customer_id')" :item='item.customer_title' :itemId='item.customer_id' :ext='{"avatar":"image/company.svg","isClearable":"true","pathUrl":"/company"}' @update="v=> item.customer_id = v.id" @clear="item.customer_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
          <comp-fld-ref-search outlined pgMethod="request_list" :label="$t('functional_requirement.request_id')" :item='item.request_title' :itemId='item.request_id' :ext='{"avatar":"image/request.svg","isClearable":"true","pathUrl":"/request"}' @update="v=> item.request_id = v.id" @clear="item.request_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('functional_requirement.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{"avatar":"image/system.svg","isClearable":"true","pathUrl":"/system"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="digital_solution_list" :label="$t('functional_requirement.digital_solution_id')" :item='item.digital_solution_title' :itemId='item.digital_solution_id' :ext='{"avatar":"image/digital_solution.svg","isClearable":"true","pathUrl":"/digital_solution"}' @update="v=> item.digital_solution_id = v.id" @clear="item.digital_solution_id = null" :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <bug-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-result :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.result" :label="$t('functional_requirement.result')" autogrow :readonly='currentUser.role?.includes(`customer`)'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
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
	import compCustomerAgent from './comp/customerAgent.vue'
	import compRelation from './comp/relation.vue'
	import compResult from './comp/result.vue'
	import taskListRefListWidget from './comp/taskListRefListWidget.vue'
	import customerTaskListRefListWidget from './comp/customerTaskListRefListWidget.vue'
	import bugListRefListWidget from './comp/bugListRefListWidget.vue'
	import compExecutor from './comp/executor.vue'
	import compCustomer from './comp/customer.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {compExecutor, compCustomer, compCustomerAgent, compRelation, compResult, taskListRefListWidget, customerTaskListRefListWidget, bugListRefListWidget},
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
                        {name: 'state_id', label: 'статус'},
                        {name: 'description', label: 'описание'},
                        {name: 'files', label: 'файлы'},
                        {name: 'images', label: 'изображения'},
                        {name: 'customer_id', label: 'заказчик'},
                        {name: 'request_id', label: 'запрос'},
                        {name: 'system_id', label: 'система'},
                        {name: 'digital_solution_id', label: 'цифровое решение'},
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
