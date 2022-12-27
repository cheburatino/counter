

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('task.name_plural'), docType:'task'}]"/>

    <q-card style="min-width: 70vw">
      <!--      <q-card-section>-->
      <!--        <div class="text-h6">Задачи</div>-->
      <!--      </q-card-section>-->
      <q-card-section>
        <div>
          <!--          таблица-->
          <div class="q-pa-md">
            <q-table
                title=""
                :rows="taskList"
                :columns="columns"
                row-key="id"
                :rows-per-page-options="[10, 25, 50, 100]"
            >
              <!--              верхняя часть таблицы-->
              <template v-slot:top>
                <!--                кнопка добавления задачи-->
                <task-add-button @reload="reload"/>
                <!--                фильтры-->
                <filter-component :tableMode="true" :currentUser="currentUser" @sqlRestBtnClickHandler="sqlRestBtnClickHandler"/>
                <q-space />
              </template>
              <!--              заголовок столбца "Удалить" / "Восстановить"-->
              <template v-slot:header-cell-delete="props">
                <q-th :props="props" @click="deletedFilter" style="cursor: pointer">
                  <div v-if="!deleted">
                    {{ props.col.label }}
                  </div>
                  <div v-if="deleted">
                    Восстановить
                  </div>
                </q-th>
              </template>
              <!--              тело-->
              <template v-slot:body="props">
                <q-tr :props="props" :style="props.row.today === true ? 'background-color: #F2C037' : ''">

                  <!--                  id-->
                  <q-td key="id" :props="props" style="width: 0;">
                    {{ props.row.id }}
                  </q-td>

                  <!--                  название-->
                  <q-td key="title" :props="props">
                    <q-item :to="/task/ + props.row.id" style="cursor: pointer">
                      <q-item-section>
                        <div class="row justify-start items-center">
                          <q-avatar rounded size="sm">
                            <img src="image/task.svg" alt="">
                          </q-avatar>
                          &nbsp;&nbsp;
                          <q-item-label>{{props.row.title}}</q-item-label>
                        </div>
                      </q-item-section>
                    </q-item>
                  </q-td>

                  <!--                  тип-->
                  <q-td key="type" :props="props">
                    {{ props.row.options.title.type_title }}
                  </q-td>

                  <!--                  статус-->
                  <q-td key="state" :props="props">
                    {{ props.row.options.title.state_title }}
                  </q-td>

                  <!--                  этап-->
                  <q-td key="stage" :props="props">
                    {{ props.row.options.title.stage_title }}
                  </q-td>

                  <!--                  система-->
                  <q-td key="system" :props="props" >
                    <q-item :to="/system/ + props.row.system_id" style="cursor: pointer" align="left">

                      <q-item-section>
                        <div class="row justify-center items-center">
                          <q-avatar rounded size="sm">
                            <img src="image/system.svg" alt="">
                          </q-avatar>

                          <q-item-label>{{props.row.options.title.system_title}}</q-item-label>
                        </div>
                      </q-item-section>
                    </q-item>
                  </q-td>

                  <!--                  история-->
                  <q-td key="history" :props="props" auto-width>
                    <timeline-dialog-button :historyList="props.row.history" :round="true" :item="props.row" />
                  </q-td>

                  <!--                  удалить-->
                  <q-td key="delete" :props="props" auto-width>
                    <task-delete-button :item="props.row" @reload="reload()" />
                  </q-td>

                  <!--                  консоль лог-->
                  <q-td key="log" :props="props" auto-width>
                    <q-btn @click="logg(props.row)" icon="info"/>
                  </q-td>

                </q-tr>
              </template>
            </q-table>
          </div>
        </div>
      </q-card-section>
    </q-card>


  </q-page>
</template>

<script>

import currentUserMixin from '../../../app/mixins/currentUser'
import {ref} from "vue";
import $utils from "src/app/plugins/utils";
import TimelineDialogButton from "src/app/components/task/comp/timelineDialogButton.vue";
import TaskDeleteButton from "src/app/components/task/comp/taskDeleteButton.vue";
import TaskAddButton from "src/app/components/task/comp/taskAddButton.vue";
import FilterComponent from "src/app/components/task/comp/filterComponent.vue";

export default {
  props: ['isOpenInDialog', 'ext'],
  components: {FilterComponent, TaskAddButton, TaskDeleteButton, TimelineDialogButton},
  mixins: [currentUserMixin],
  computed: {
    currentUrl: () => '/task/',
  },
  data() {
    return {
      listSortData: [
        {value: 'created_at', title: 'Дата'},
        {value: 'title', title: 'Название'},
      ],
      listFilterData: [
        {value: {deleted: false}, title: 'Активные'},
        {value: {deleted: true}, title: 'Удаленные'}
      ],
    }
  },
  methods: {
  },
  mounted() {

  },

  setup(props, {emit}) {
    // таблица вместо списка
    const taskList = ref([])
    const rows = ref([])
    const columns = ref([
      { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
      { name: 'title', align: 'left', label: 'Название', field: 'title', sortable: true },
      { name: 'stage', align: 'left', label: 'Этап', field: 'stage', sortable: true },
      { name: 'system', align: 'center', label: 'Система', field: 'system', sortable: true},
      { name: 'history', align: 'center', label: 'История', field: 'history'},
      { name: 'delete', align: 'center', label: 'Удалить', field: 'delete'},
      { name: 'log', align: 'center', label: 'лог', field: 'log'},
    ])

    const sqlRestBtnClickHandler = (v) => {
      $utils.callPgMethod('task_list', v, (res) => {
        taskList.value = res
        deleted.value = false
      })
    }

    const deleted = ref(false)

    const deletedFilter = () => {
      $utils.callPgMethod('task_list', {deleted: !deleted.value, order_by: "id desc"}, (res) => {
        taskList.value = res
        deleted.value = !deleted.value
      })
    }

    const logg = (v) => {
      console.log('v', v)
    }

    const reload = () => {
      $utils.callPgMethod('task_list', {deleted: false, order_by: "id desc"}, (res) => {
        taskList.value = res
      })
    }
    reload()

    return {
      reload,
      open,
      columns,
      rows,
      taskList,
      logg,
      deletedFilter,
      deleted,
      sqlRestBtnClickHandler
    }
  }
}
</script>
