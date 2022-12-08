<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Изменения плановой даты', to:'/plan_date_change',  docType: 'plan_date_change'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('plan_date_change.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="task_list" :label="$t('plan_date_change.task_id')" :item='item.task_title' :itemId='item.task_id' :ext='{"avatar":"image/task.svg","isClearable":"true","pathUrl":"/task"}' @update="v=> item.task_id = v.id" @clear="item.task_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='number' v-model="item.work_day_quantity" :label="$t('plan_date_change.work_day_quantity')" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-select outlined :label="$t('plan_date_change.direction')" v-model='item.direction' :options='[{"label":"ускорение","value":"boost","color":"positive"},{"label":"замедление","value":"slowdown","color":"negative"}]'   :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('plan_date_change.old_plan_date')" :date-string="$utils.formatPgDate(item.old_plan_date)" @update="v=> item.old_plan_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('plan_date_change.new_plan_date')" :date-string="$utils.formatPgDate(item.new_plan_date)" @update="v=> item.new_plan_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.reason" :label="$t('plan_date_change.reason')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="ctlg_plan_date_change_side_list" :label="$t('plan_date_change.side_id')" :item='item.side_title' :itemId='item.side_id' :ext='{}' @update="v=> item.side_id = v.id" @clear="item.side_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-checkbox :label="$t('plan_date_change.customer_confirm')" v-model='item.customer_confirm' :disable='false' :false-value='false' indeterminate-value='some'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date-time outlined :label="$t('plan_date_change.customer_confirm_datetime')" :date-string="$utils.formatPgDateTime(item.customer_confirm_datetime)" @update="v=> item.customer_confirm_datetime = v" @clear="item.customer_confirm_datetime=null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="user_list" :label="$t('plan_date_change.author_id')" :item='item.author_title' :itemId='item.author_id' :ext='{"avatar":"image/users.svg","isClearable":"true","pathUrl":"/users"}' @update="v=> item.author_id = v.id" @clear="item.author_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
              return '/plan_date_change'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название'},
                        {name: 'task_id', label: 'задача'},
                        {name: 'work_day_quantity', label: 'кол-во рабочих дней'},
                        {name: 'direction', label: 'направление'},
                        {name: 'old_plan_date', label: 'старая дата'},
                        {name: 'new_plan_date', label: 'новая дата'},
                        {name: 'reason', label: 'причина'},
                        {name: 'side_id', label: 'на чьей стороне причина'},
                        {name: 'customer_confirm', label: 'подтверждено заказчиком'},
                        {name: 'customer_confirm_datetime', label: 'дата и время подтверждения заказчиком'},
                        {name: 'author_id', label: 'автор'},
                ],
                optionsFlds: [],
                
            }
        },
        watch: {
          
        },
        methods: {
          
            resultModify(res) {
                
				if (res.direction) {
                    let arr = [{"label":"ускорение","value":"boost","color":"positive"},{"label":"замедление","value":"slowdown","color":"negative"}]
                    let direction_item = arr.find(v => v.value === res.direction)
                    if (direction_item) res.direction = {value: res.direction, label: direction_item.label}
                    }
			
                return res
            },
            save() {
                
                this.$utils.saveItem.call(this, {
                    method: 'plan_date_change_update',
                    itemForSaveMod: {direction: this.item.direction ? this.item.direction.value : null,
},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'plan_date_change_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
