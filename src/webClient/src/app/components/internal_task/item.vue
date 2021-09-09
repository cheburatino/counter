<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Внутренние задачи', to:'/internal_task',  docType: 'internal_task'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->

      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" label="название" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-select outlined label="статус" v-model='item.status' :options='[{"label":"в работе","value":"in_work","color":""},{"label":"завершена","value":"completed","color":""}]'   :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>

      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" label="описание" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>

      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="user_list" label="автор" :item='item.author_title' :itemId='item.author_id' :ext='{}' @update="v=> item.author_id = v.id" @clear="item.author_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="user_list" label="постановщик" :item='item.director_title' :itemId='item.director_id' :ext='{}' @update="v=> item.director_id = v.id" @clear="item.director_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>

      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="user_list" label="исполнитель" :item='item.executor_title' :itemId='item.executor_id' :ext='{}' @update="v=> item.executor_id = v.id" @clear="item.executor_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="user_list" label="приёмщик" :item='item.acceptor_title' :itemId='item.acceptor_id' :ext='{}' @update="v=> item.acceptor_id = v.id" @clear="item.acceptor_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>

      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined label="плановая дата начала" :date-string="$utils.formatPgDate(item.plan_start_date)" @update="v=> item.plan_start_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined label="фактическая дата начала" :date-string="$utils.formatPgDate(item.fact_start_date)" @update="v=> item.fact_start_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>

      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined label="плановая дата завершения" :date-string="$utils.formatPgDate(item.plan_end_date)" @update="v=> item.plan_end_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-date outlined label="фактическая дата завершения" :date-string="$utils.formatPgDate(item.fact_end_date)" @update="v=> item.fact_end_date = v" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>

      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="client_list" label="заказчик" :item='item.client_title' :itemId='item.client_id' :ext='{}' @update="v=> item.client_id = v.id" @clear="item.client_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="project_list" label="проект" :item='item.project_title' :itemId='item.project_id' :ext='{}' @update="v=> item.project_id = v.id" @clear="item.project_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>

      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="internal_task_list" label="родительская задача" :item='item.parent_task_title' :itemId='item.parent_task_id' :ext='{"avatar":"image/task.svg","pathUrl":"/internal_task"}' @update="v=> item.parent_task_id = v.id" @clear="item.parent_task_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>


      <!--  кнопки   -->
      <comp-item-btn-save v-if="!isOpenInDialog" @save="save" :readonly="false" @cancel="$router.push(docUrl)"/>
      <!--  при открытии в диалоге кнопку Отмена не показываем   -->
      <q-btn v-else color="secondary" label="сохранить" class="q-mr-sm" @click="save"/>



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
              return '/internal_task'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'status', label: 'статус'},
                        {name: 'description', label: 'описание'},
                        {name: 'author_id', label: 'автор'},
                        {name: 'director_id', label: 'постановщик'},
                        {name: 'executor_id', label: 'исполнитель'},
                        {name: 'acceptor_id', label: 'приёмщик'},
                        {name: 'plan_start_date', label: 'плановая дата начала'},
                        {name: 'fact_start_date', label: 'фактическая дата начала'},
                        {name: 'plan_end_date', label: 'плановая дата завершения'},
                        {name: 'fact_end_date', label: 'фактическая дата завершения'},
                        {name: 'client_id', label: 'заказчик'},
                        {name: 'project_id', label: 'проект'},
                        {name: 'parent_task_id', label: 'родительская задача'},
                ],
                optionsFlds: [],

            }
        },
        methods: {

            resultModify(res) {

				if (res.status) {
                    let arr = [{"label":"в работе","value":"in_work","color":""},{"label":"завершена","value":"completed","color":""}]
                    let status_item = arr.find(v => v.value === res.status)
                    if (status_item) res.status = {value: res.status, label: status_item.label}
                    }

                return res
            },
            save() {

                this.$utils.saveItem.call(this, {
                    method: 'internal_task_update',
                    itemForSaveMod: {status: this.item.status ? this.item.status.value : null,
},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'internal_task_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
