<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Задачи', to:'/task',  docType: 'task'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('task.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-1 col-sm-2 col-xs-6">
          <q-input outlined type='number' v-model="item.priority" :label="$t('task.priority')" :readonly='false'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
      </div>
      <div class="col-md-1 col-sm-2 col-xs-6">
          <q-checkbox :label="$t('task.paused')" v-model='item.paused' :disable='false' :false-value='false' indeterminate-value='some'  class='q-mb-sm col-md-1 col-sm-2 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="ctlg_task_state_list" :label="$t('task.state_id')" :item='item.state_title' :itemId='item.state_id' :ext='{}' @update="v=> item.state_id = v.id" @clear="item.state_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('task.system_id')" :item='item.system_title' :itemId='item.system_id' :ext='{"avatar":"image/system.svg","isClearable":"true","pathUrl":"/system"}' @update="v=> item.system_id = v.id" @clear="item.system_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="sprint_list" :label="$t('task.sprint_id')" :item='item.sprint_title' :itemId='item.sprint_id' :ext='{"avatar":"image/sprint.svg","isClearable":"true","pathUrl":"/sprint"}' @update="v=> item.sprint_id = v.id" @clear="item.sprint_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="functional_requirement_list" :label="$t('task.functional_requirement_id')" :item='item.functional_requirement_title' :itemId='item.functional_requirement_id' :ext='{"avatar":"image/functional_requirement.svg","isClearable":"true","pathUrl":"/functional_requirement"}' @update="v=> item.functional_requirement_id = v.id" @clear="item.functional_requirement_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="bug_list" :label="$t('task.bug_id')" :item='item.bug_title' :itemId='item.bug_id' :ext='{"avatar":"image/bug.png","isClearable":"true","pathUrl":"/bug"}' @update="v=> item.bug_id = v.id" @clear="item.bug_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-specialist :item='item' :currentUser='currentUser'/>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('task.plan_end_date')" :date-string="$utils.formatPgDate(item.plan_end_date)" @update="v=> item.plan_end_date = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-date outlined :label="$t('task.fact_end_date')" :date-string="$utils.formatPgDate(item.fact_end_date)" @update="v=> item.fact_end_date = v" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('task.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='files' :label="$t('task.files')" :fld='item.files' :ext = '{tableName: "task", tableId: this.id}' @update="v=> item.files = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('task.images')" :fld='item.images' :ext = '{tableName: "task", tableId: this.id, fldName: "images"}' @update="v=> item.images = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.result" :label="$t('task.result')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-files v-if="this.id != 'new'" fldName='result_files' :label="$t('task.result_files')" :fld='item.result_files' :ext = '{tableName: "task", tableId: this.id}' @update="v=> item.result_files = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-img-list v-if="this.id != 'new'" :label="$t('task.result_images')" :fld='item.result_images' :ext = '{tableName: "task", tableId: this.id, fldName: "result_images"}' @update="v=> item.result_images = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
	import compSpecialist from './comp/specialist.vue'
    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {compSpecialist},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/task'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'priority', label: 'приоритет'},
                        {name: 'paused', label: 'на паузе'},
                        {name: 'state_id', label: 'статус'},
                        {name: 'system_id', label: 'система'},
                        {name: 'sprint_id', label: 'спринт'},
                        {name: 'functional_requirement_id', label: 'функциональное требование'},
                        {name: 'bug_id', label: 'баг'},
                        {name: 'plan_end_date', label: 'плановая дата завершения'},
                        {name: 'fact_end_date', label: 'фактическая дата завершения'},
                        {name: 'description', label: 'описание'},
                        {name: 'files', label: 'файлы'},
                        {name: 'images', label: 'изображения'},
                        {name: 'result', label: 'результат'},
                        {name: 'result_files', label: 'файлы результата'},
                        {name: 'result_images', label: 'изображения результата'},
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
                    method: 'task_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'task_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
