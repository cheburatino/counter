<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Технические задания', to:'/technical_task',  docType: 'technical_task'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('technical_task.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_technical_task_state_list" :label="$t('technical_task.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{"isClearable":"true"}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_technical_task_work_state_list" :label="$t('technical_task.work_state_id')" :item='item.work_state_title' :itemId='item.work_state_id' :ext='{"isClearable":"true"}' @update="v=> item.work_state_id = v.id" @clear="item.work_state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-1 col-sm-2 col-xs-6">
          <q-input outlined type='number' v-model="item.number" :label="$t('technical_task.number')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
      </div>
      <div class="col-md-1 col-sm-2 col-xs-6">
          <q-input outlined type='number' v-model="item.amount" :label="$t('technical_task.amount')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('technical_task.date')" :date-string="$utils.formatPgDate(item.date)" @update="v=> item.date = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="contract_list" :label="$t('technical_task.contract_id')" :item='item.contract_title' :itemId='item.contract_id' :ext='{"avatar":"image/contract.svg","isClearable":"true","pathUrl":"/contract"}' @update="v=> item.contract_id = v.id" @clear="item.contract_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('technical_task.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='document' :label="$t('technical_task.document')" :fld='item.document' :ext = '{tableName: "technical_task", tableId: this.id}' @update="v=> item.document = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <invoice-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <completion-act-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      </div>
      

      <!--  кнопки   -->
      <comp-item-btn-save v-if="!isOpenInDialog" @save="save" :readonly="false" @cancel="$router.push(docUrl)"/>
      <!--  при открытии в диалоге кнопку Отмена не показываем   -->
      <q-btn v-else color="secondary" :label="$t('message.save')" class="q-mr-sm" @click="save"/>

        

    </div>
  </q-page>
</template>

<script>
	import invoiceListRefListWidget from './comp/invoiceListRefListWidget.vue'
	import completionActListRefListWidget from './comp/completionActListRefListWidget.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {completionActListRefListWidget, invoiceListRefListWidget},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/technical_task'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'state_id', label: 'статус'},
                        {name: 'work_state_id', label: 'статус работ по ТЗ'},
                        {name: 'number', label: 'номер',  required: true},
                        {name: 'amount', label: 'сумма'},
                        {name: 'date', label: 'дата подписания ТЗ'},
                        {name: 'contract_id', label: 'договор'},
                        {name: 'description', label: 'описание'},
                        {name: 'document', label: 'документ'},
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
                    method: 'technical_task_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'technical_task_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
