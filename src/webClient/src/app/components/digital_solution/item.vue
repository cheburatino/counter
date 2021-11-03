<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Цифровые решения', to:'/digital_solution',  docType: 'digital_solution'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('digital_solution.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_digital_solution_state_list" :label="$t('digital_solution.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6" v-if="item.state_id === 4 || item.state_id === 5 || item.state_id === 6">
          <comp-fld-ref-search outlined pgMethod="sprint_list" :label="$t('digital_solution.sprint_id')" :item='item.sprint_title' :itemId='item.sprint_id' :ext='{"avatar":"image/sprint.svg","isClearable":"true","pathUrl":"/sprint"}' @update="v=> item.sprint_id = v.id" @clear="item.sprint_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6'  v-if="item.state_id === 4 || item.state_id === 5 || item.state_id === 6" />
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
          <q-input outlined type='text' v-model="item.description" :label="$t('digital_solution.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <ft-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <task-list-ref-list-widget v-if='item.id != -1' :id='item.id' :readonly='false'/>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-participants :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="company_list" :label="$t('digital_solution.customer_id')" :item='item.customer_title' :itemId='item.customer_id' :ext='{"avatar":"image/company.svg","isClearable":"true","pathUrl":"/company"}' @update="v=> item.customer_id = v.id" @clear="item.customer_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('digital_solution.rsk_id')" :item='item.rsk_title' :itemId='item.rsk_id' :ext='{company_id: 1, pathUrl: "/man", avatar: "image/man.svg", isClearable: "true"}' @update="v=> item.rsk_id = v.id" @clear="item.rsk_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-specialist :item='item' :currentUser='currentUser'/>
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('digital_solution.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{customer_id: item.customer_id, pathUrl: "/system", avatar: "image/system.svg", isClearable: "true"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('digital_solution.analyst_id')" :item='item.analyst_title' :itemId='item.analyst_id' :ext='{company_id: 1, pathUrl: "/man", avatar: "image/man.svg", isClearable: "true"}' @update="v=> item.analyst_id = v.id" @clear="item.analyst_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('digital_solution.client_agent_id')" :item='item.client_agent_title' :itemId='item.client_agent_id' :ext='{company_id: item.customer_id, pathUrl: "/man", avatar: "image/man.svg", isClearable: "true"}' @update="v=> item.client_agent_id = v.id" @clear="item.client_agent_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('digital_solution.team_lead_id')" :item='item.team_lead_title' :itemId='item.team_lead_id' :ext='{company_id: 1, pathUrl: "/man", avatar: "image/man.svg", isClearable: "true"}' @update="v=> item.team_lead_id = v.id" @clear="item.team_lead_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-modeling :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_plan_start_modeling')" :date-string="$utils.formatPgDate(item.date_plan_start_modeling)" @update="v=> item.date_plan_start_modeling = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_fact_start_modeling')" :date-string="$utils.formatPgDate(item.date_fact_start_modeling)" @update="v=> item.date_fact_start_modeling = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.model" :label="$t('digital_solution.model')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_plan_end_modeling')" :date-string="$utils.formatPgDate(item.date_plan_end_modeling)" @update="v=> item.date_plan_end_modeling = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_fact_end_modeling')" :date-string="$utils.formatPgDate(item.date_fact_end_modeling)" @update="v=> item.date_fact_end_modeling = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-realization :item='item' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_plan_start_realization')" :date-string="$utils.formatPgDate(item.date_plan_start_realization)" @update="v=> item.date_plan_start_realization = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_fact_start_realization')" :date-string="$utils.formatPgDate(item.date_fact_start_realization)" @update="v=> item.date_fact_start_realization = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_plan_end_realization')" :date-string="$utils.formatPgDate(item.date_plan_end_realization)" @update="v=> item.date_plan_end_realization = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined :label="$t('digital_solution.date_fact_end_realization')" :date-string="$utils.formatPgDate(item.date_fact_end_realization)" @update="v=> item.date_fact_end_realization = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
	import compRealization from './comp/realization.vue'
	import compSpecialist from './comp/specialist.vue'
	import ftListRefListWidget from './comp/ftListRefListWidget.vue'
	import taskListRefListWidget from './comp/taskListRefListWidget.vue'
	import compParticipants from './comp/participants.vue'
	import compModeling from './comp/modeling.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {compParticipants, compModeling, compRealization, compSpecialist, ftListRefListWidget, taskListRefListWidget},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/digital_solution'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'state_id', label: 'статус'},
                        {name: 'sprint_id', label: 'спринт'},
                        {name: 'description', label: 'описание'},
                        {name: 'customer_id', label: 'заказчик'},
                        {name: 'rsk_id', label: 'рск'},
                        {name: 'system_id', label: 'система'},
                        {name: 'analyst_id', label: 'аналитик'},
                        {name: 'client_agent_id', label: 'представитель заказчика'},
                        {name: 'team_lead_id', label: 'тимлид'},
                        {name: 'date_plan_start_modeling', label: 'планируемая дата начала моделирования'},
                        {name: 'date_fact_start_modeling', label: 'фактическая дата начала моделирования'},
                        {name: 'model', label: 'описание модели'},
                        {name: 'date_plan_end_modeling', label: 'планируемая дата завершения моделирования'},
                        {name: 'date_fact_end_modeling', label: 'фактическая дата завершения моделирования'},
                        {name: 'date_plan_start_realization', label: 'планируемая дата начала реализации'},
                        {name: 'date_fact_start_realization', label: 'фактическая дата начала реализации'},
                        {name: 'date_plan_end_realization', label: 'планируемая дата завершения реализации'},
                        {name: 'date_fact_end_realization', label: 'фактическая дата завершения реализации'},
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
                    method: 'digital_solution_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'digital_solution_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
