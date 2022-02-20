<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Счета', to:'/invoice',  docType: 'invoice'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('invoice.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-input outlined type='number' v-model="item.amount" :label="$t('invoice.amount')" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_invoice_state_list" :label="$t('invoice.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{"avatar":"image/catalog.svg","isClearable":"true","pathUrl":"/ctlg_invoice_state"}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="technical_task_list" :label="$t('invoice.technical_task_id')" :item='item.technical_task_title' :itemId='item.technical_task_id' :ext='{"avatar":"image/technical_task.svg","isClearable":"true","pathUrl":"/technical_task"}' @update="v=> item.technical_task_id = v.id" @clear="item.technical_task_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('invoice.date_transfer')" :date-string="$utils.formatPgDate(item.date_transfer)" @update="v=> item.date_transfer = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('invoice.date_plan_paid')" :date-string="$utils.formatPgDate(item.date_plan_paid)" @update="v=> item.date_plan_paid = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('invoice.date_paid')" :date-string="$utils.formatPgDate(item.date_paid)" @update="v=> item.date_paid = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='invoice_file' :label="$t('invoice.invoice_file')" :fld='item.invoice_file' :ext = '{tableName: "invoice", tableId: this.id}' @update="v=> item.invoice_file = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <payment-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
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
	import paymentListRefListWidget from './comp/paymentListRefListWidget.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {paymentListRefListWidget},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/invoice'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'amount', label: 'сумма'},
                        {name: 'state_id', label: 'статус'},
                        {name: 'technical_task_id', label: 'техническое задание'},
                        {name: 'date_transfer', label: 'дата выставления'},
                        {name: 'date_plan_paid', label: 'планируемая дата оплаты'},
                        {name: 'date_paid', label: 'дата получения оплаты'},
                        {name: 'invoice_file', label: 'счёт'},
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
                    method: 'invoice_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'invoice_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
