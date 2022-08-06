<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Время', to:'/time',  docType: 'time'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('time.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_time_state_list" :label="$t('time.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-1 col-sm-2 col-xs-6">
          <q-input outlined type='number' v-model="item.effort" :label="$t('time.effort')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date-time outlined :label="$t('time.start_time')" :date-string="$utils.formatPgDateTime(item.start_time)" @update="v=> item.start_time = v" @clear="item.start_time=null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date-time outlined :label="$t('time.end_time')" :date-string="$utils.formatPgDateTime(item.end_time)" @update="v=> item.end_time = v" @clear="item.end_time=null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-input outlined type='number' v-model="item.effort_for_customer_task" :label="$t('time.effort_for_customer_task')" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-input outlined type='number' v-model="item.effort_for_task" :label="$t('time.effort_for_task')" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('time.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <work-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
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
	import workListRefListWidget from './comp/workListRefListWidget.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {workListRefListWidget},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/time'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название'},
                        {name: 'state_id', label: 'статус'},
                        {name: 'effort', label: 'затрачено'},
                        {name: 'start_time', label: 'начало'},
                        {name: 'end_time', label: 'завершение'},
                        {name: 'effort_for_customer_task', label: 'время для задач разработки'},
                        {name: 'effort_for_task', label: 'время для задач'},
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
                    method: 'time_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'time_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
