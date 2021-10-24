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
          <q-input outlined type='number' v-model="item.total_amount" :label="$t('invoice.total_amount')" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-select outlined :label="$t('invoice.state')" v-model='item.state' :options='[{"label":"запланирован","value":"planned","color":""},{"label":"выставлен","value":"transferred","color":""},{"label":"оплачен","value":"paid","color":""}]'   :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-3">
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('invoice.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='false'  class='q-mb-sm col-3' />
      </div>
      <div class="col-3">
          <comp-fld-ref-search outlined pgMethod="counterparty_list" :label="$t('invoice.payer_id')" :item='item.payer_title' :itemId='item.payer_id' :ext='{}' @update="v=> item.payer_id = v.id" @clear="item.payer_id = null" :readonly='false'  class='q-mb-sm col-3' />
      </div>
      <div class="col-3">
          <comp-fld-ref-search outlined pgMethod="counterparty_list" :label="$t('invoice.recipient_id')" :item='item.recipient_title' :itemId='item.recipient_id' :ext='{}' @update="v=> item.recipient_id = v.id" @clear="item.recipient_id = null" :readonly='false'  class='q-mb-sm col-3' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('invoice.date_plan_transfer')" :date-string="$utils.formatPgDate(item.date_plan_transfer)" @update="v=> item.date_plan_transfer = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('invoice.date_plan_paid')" :date-string="$utils.formatPgDate(item.date_plan_paid)" @update="v=> item.date_plan_paid = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('invoice.date_transfer')" :date-string="$utils.formatPgDate(item.date_transfer)" @update="v=> item.date_transfer = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('invoice.date_paid')" :date-string="$utils.formatPgDate(item.date_paid)" @update="v=> item.date_paid = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
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
              return '/invoice'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'total_amount', label: 'сумма'},
                        {name: 'state', label: 'статус'},
                        {name: 'system_id', label: 'система'},
                        {name: 'payer_id', label: 'плательщик'},
                        {name: 'recipient_id', label: 'получатель'},
                        {name: 'date_plan_transfer', label: 'планируемая дата выставления'},
                        {name: 'date_plan_paid', label: 'планируемая дата оплаты'},
                        {name: 'date_transfer', label: 'дата выставления'},
                        {name: 'date_paid', label: 'дата оплаты'},
                ],
                optionsFlds: [],
                
            }
        },
        methods: {
          
            resultModify(res) {
                
				if (res.state) {
                    let arr = [{"label":"запланирован","value":"planned","color":""},{"label":"выставлен","value":"transferred","color":""},{"label":"оплачен","value":"paid","color":""}]
                    let state_item = arr.find(v => v.value === res.state)
                    if (state_item) res.state = {value: res.state, label: state_item.label}
                    }
			
                return res
            },
            save() {
                
                this.$utils.saveItem.call(this, {
                    method: 'invoice_update',
                    itemForSaveMod: {state: this.item.state ? this.item.state.value : null,
},
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
