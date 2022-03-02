<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Платежи', to:'/payment',  docType: 'payment'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-input outlined type='text' v-model="item.title" :label="$t('payment.title')" autogrow :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-input outlined type='number' v-model="item.amount" :label="$t('payment.amount')" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('payment.payment_date')" :date-string="$utils.formatPgDate(item.payment_date)" @update="v=> item.payment_date = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('payment.payment_receipt_date')" :date-string="$utils.formatPgDate(item.payment_receipt_date)" @update="v=> item.payment_receipt_date = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="invoice_list" :label="$t('payment.invoice_id')" :item='item.invoice_title' :itemId='item.invoice_id' :ext='{"avatar":"image/invoice.svg","isClearable":"true","pathUrl":"/invoice"}' @update="v=> item.invoice_id = v.id" @clear="item.invoice_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='payment_order' :label="$t('payment.payment_order')" :fld='item.payment_order' :ext = '{tableName: "payment", tableId: this.id}' @update="v=> item.payment_order = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('payment.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
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

    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/payment'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'amount', label: 'размер платежа'},
                        {name: 'payment_date', label: 'дата платежа'},
                        {name: 'payment_receipt_date', label: 'дата поступления платежа'},
                        {name: 'invoice_id', label: 'счёт'},
                        {name: 'payment_order', label: 'платёжное поручение'},
                        {name: 'description', label: 'описание'},
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
                    method: 'payment_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'payment_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
