<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Запросы', to:'/request',  docType: 'request'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('request.title')" autogrow :readonly='currentUser.role?.includes(`customer`) && item.state_id != 1'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_request_priority_list" :label="$t('request.priority_id')" :item='item.priority_title' :itemId='item.priority_id' :ext='{}' @update="v=> item.priority_id = v.id" @clear="item.priority_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_request_state_list" :label="$t('request.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='currentUser.role?.includes(`customer`) && item.state_id != 1'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
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
          <q-input outlined type='text' v-model="item.description" :label="$t('request.description')" autogrow :readonly='currentUser.role?.includes(`customer`) && item.state_id != 1'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='files' :label="$t('request.files')" :fld='item.files' :ext = '{tableName: "request", tableId: this.id}' @update="v=> item.files = v" :readonly='currentUser.role?.includes(`customer`) && item.state_id != 1'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('request.images')" :fld='item.images' :ext = '{tableName: "request", tableId: this.id, fldName: "images"}' @update="v=> item.images = v" :readonly='currentUser.role?.includes(`customer`) && item.state_id != 1'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12" v-if="currentUser.role?.includes(`admin`)">
          <q-input outlined type='text' v-model="item.how_request_received" :label="$t('request.how_request_received')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12'  v-if="currentUser.role?.includes(`admin`)" />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12" v-if="currentUser.role?.includes(`admin`)">
          <comp-fld-date-time outlined :label="$t('request.datetime_reciept')" :date-string="$utils.formatPgDateTime(item.datetime_reciept)" @update="v=> item.datetime_reciept = v" @clear="item.datetime_reciept=null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12'  v-if="currentUser.role?.includes(`admin`)" />
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
          <comp-fld-ref-search outlined pgMethod="company_list" :label="$t('request.customer_id')" :item='item.customer_title' :itemId='item.customer_id' :ext='{"avatar":"image/company.svg","isClearable":"true","pathUrl":"/company"}' @update="v=> item.customer_id = v.id" @clear="item.customer_id = null" :readonly='currentUser.role?.includes(`customer`) && item.state_id != 1'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('request.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{customer_id: item.customer_id, pathUrl: "/system", avatar: "image/system.svg", isClearable: "true"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='currentUser.role?.includes(`customer`) && item.state_id != 1'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <ft-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='number' v-model="item.time_estimate" :label="$t('request.time_estimate')" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='number' v-model="item.cost_estimate" :label="$t('request.cost_estimate')" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-result :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.result" :label="$t('request.result')" autogrow :readonly='currentUser.role?.includes(`customer`) && item.state_id != 1'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
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
	import compCustomer from './comp/customer.vue'
	import compResult from './comp/result.vue'
	import taskListRefListWidget from './comp/taskListRefListWidget.vue'
	import customerTaskListRefListWidget from './comp/customerTaskListRefListWidget.vue'
	import ftListRefListWidget from './comp/ftListRefListWidget.vue'
	import compCustomerAgent from './comp/customerAgent.vue'
	import compRelation from './comp/relation.vue'
	import compExecutor from './comp/executor.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {ftListRefListWidget, compCustomerAgent, compRelation, compExecutor, compCustomer, compResult, taskListRefListWidget, customerTaskListRefListWidget},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/request'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'priority_id', label: 'приоритет'},
                        {name: 'state_id', label: 'статус'},
                        {name: 'description', label: 'описание'},
                        {name: 'files', label: 'файлы'},
                        {name: 'images', label: 'изображения'},
                        {name: 'how_request_received', label: 'как получен запрос'},
                        {name: 'datetime_reciept', label: 'дата и время получения запроса'},
                        {name: 'customer_id', label: 'заказчик'},
                        {name: 'system_id', label: 'система'},
                        {name: 'time_estimate', label: 'оценка времени'},
                        {name: 'cost_estimate', label: 'оценка стоимости'},
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
                    method: 'request_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'request_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
