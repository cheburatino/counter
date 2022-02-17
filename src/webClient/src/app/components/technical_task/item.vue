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
          <comp-fld-ref-search outlined pgMethod="contract_list" :label="$t('technical_task.contract_id')" :item='item.contract_title' :itemId='item.contract_id' :ext='{"avatar":"image/contract.svg","isClearable":"true","pathUrl":"/contract"}' @update="v=> item.contract_id = v.id" @clear="item.contract_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('technical_task.date')" :date-string="$utils.formatPgDate(item.date)" @update="v=> item.date = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('technical_task.description')" autogrow :readonly='false'  class='q-mb-sm col-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='draft' :label="$t('technical_task.draft')" :fld='item.draft' :ext = '{tableName: "technical_task", tableId: this.id}' @update="v=> item.draft = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='signed' :label="$t('technical_task.signed')" :fld='item.signed' :ext = '{tableName: "technical_task", tableId: this.id}' @update="v=> item.signed = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-select outlined :label="$t('technical_task.state')" v-model='item.state' :options='[{"label":"подготовка","value":"preparation","color":""},{"label":"согласование","value":"approval","color":""},{"label":"подписан","value":"signed","color":""}]'   :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='number' v-model="item.amount" :label="$t('technical_task.amount')" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
              return '/technical_task'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'contract_id', label: 'договор'},
                        {name: 'date', label: 'дата'},
                        {name: 'number', label: 'номер'},
                        {name: 'description', label: 'описание'},
                        {name: 'draft', label: 'черновик'},
                        {name: 'signed', label: 'подписанный'},
                        {name: 'state', label: 'статус'},
                        {name: 'amount', label: 'сумма'},
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
                    method: 'technical_task_update',
                    itemForSaveMod: {state: this.item.state ? this.item.state.value : null,
},
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
