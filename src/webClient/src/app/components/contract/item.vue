<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Договоры', to:'/contract',  docType: 'contract'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('contract.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('contract.date')" :date-string="$utils.formatPgDate(item.date)" @update="v=> item.date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('contract.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='draft' :label="$t('contract.draft')" :fld='item.draft' :ext = '{tableName: "contract", tableId: this.id}' @update="v=> item.draft = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='signed' :label="$t('contract.signed')" :fld='item.signed' :ext = '{tableName: "contract", tableId: this.id}' @update="v=> item.signed = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="counterparty_list" :label="$t('contract.counterparty_id')" :item='item.counterparty_title' :itemId='item.counterparty_id' :ext='{"avatar":"image/counterparty.svg","isClearable":"true","pathUrl":"/counterparty"}' @update="v=> item.counterparty_id = v.id" @clear="item.counterparty_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-select outlined :label="$t('contract.state')" v-model='item.state' :options='[{"label":"подготовка","value":"preparation","color":""},{"label":"согласование","value":"approval","color":""},{"label":"подписан","value":"signed","color":""}]'   :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
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
              return '/contract'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'date', label: 'дата'},
                        {name: 'description', label: 'описание'},
                        {name: 'draft', label: 'черновик'},
                        {name: 'signed', label: 'подписанный'},
                        {name: 'counterparty_id', label: 'контрагент'},
                        {name: 'state', label: 'статус'},
                ],
                optionsFlds: [],
                
            }
        },
        watch: {
          
        },
        methods: {
          
            resultModify(res) {
                
				if (res.state) {
                    let arr = [{"label":"подготовка","value":"preparation","color":""},{"label":"согласование","value":"approval","color":""},{"label":"подписан","value":"signed","color":""}]
                    let state_item = arr.find(v => v.value === res.state)
                    if (state_item) res.state = {value: res.state, label: state_item.label}
                    }
			
                return res
            },
            save() {
                
                this.$utils.saveItem.call(this, {
                    method: 'contract_update',
                    itemForSaveMod: {state: this.item.state ? this.item.state.value : null,
},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'contract_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
