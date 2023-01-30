<template>
  <q-page padding>
    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Акты выполненных работ', to:'/completion_act',  docType: 'completion_act'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>


    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('completion_act.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('completion_act.date')" :date-string="$utils.formatPgDate(item.date)" @update="v=> item.date = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_completion_act_state_list" :label="$t('completion_act.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{"isClearable":"true"}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="technical_task_list" :label="$t('completion_act.technical_task_id')" :item='item.technical_task_title' :itemId='item.technical_task_id' :ext='{"avatar":"image/technical_task.svg","isClearable":"true","pathUrl":"/technical_task"}' @update="v=> item.technical_task_id = v.id" @clear="item.technical_task_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='document' :label="$t('completion_act.document')" :fld='item.document' :ext = '{tableName: "completion_act", tableId: this.id}' @update="v=> item.document = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('completion_act.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
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
              return '/completion_act'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'date', label: 'дата подписи'},
                        {name: 'state_id', label: 'статус'},
                        {name: 'technical_task_id', label: 'техническое задание'},
                        {name: 'document', label: 'документ'},
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
                    method: 'completion_act_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'completion_act_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
