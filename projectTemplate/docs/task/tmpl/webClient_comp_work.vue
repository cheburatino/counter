<template>
  <div>
    <!--  bar  -->
    <q-bar class="bg-orange-6 text-white">
      <q-icon name="fas fa-user-astronaut" />
<!--      <q-icon name="fas fa-atom" />-->
      <div v-if="!isShowDeleted">Дела</div>
      <div v-else>Удалённые</div>
      <q-space />
      <q-btn flat round icon="add" @click="showAddDialog" />
      <q-btn flat round icon="delete_outline" @click="isShowDeleted = !isShowDeleted" />
    </q-bar>

    <!--  list active  -->
    <q-list v-if="!isShowDeleted && taskWorkList.length > 0" bordered separator>
      <q-item clickable v-ripple v-for="item in taskWorkList" :key="item.id">
        <q-item-section @click="routeWork(item.work_id)">
          <q-item-label>{{ item.options.title.work_title }}</q-item-label>
          <q-item-label caption>{{item.options.title.description}} </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn flat round icon="delete" @click="deletePosition(item.id)" />
        </q-item-section>
      </q-item>
    </q-list>

    <!--  list deleted  -->
    <q-list v-if="isShowDeleted && deletedTaskWorkList.length > 0" bordered separator>
      <q-item clickable v-ripple v-for="item in deletedTaskWorkList" :key="item.id">
        <q-item-section @click="routeWork(item.work_id)">
          <q-item-label>{{ item.options.title.work_title }}</q-item-label>
          <q-item-label caption>{{item.options.title.description}} </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn flat round icon="replay" @click="recoverPosition(item.id)" />
        </q-item-section>
      </q-item>
    </q-list>

    <!--  dialog  -->
    <q-dialog v-model="isShowDialog" persistent>
      <q-card style="min-width: 250px">
        <q-card-section>
          <div style="text-align: center" class="text-h6">Данные по Делу</div>
        </q-card-section>

        <q-input
            v-model="workTitle"
            placeholder="Название дела"
            filled
            autogrow
            style="margin-top: 40px; margin-left: 40px; margin-right: 40px; margin-bottom: 20px;"
        />


        <q-input
            v-model="workDesc"
            placeholder="Описание дела"
            filled
            autogrow
            style="margin-top: 40px; margin-left: 40px; margin-right: 40px; margin-bottom: 20px;"
        />


        <q-card-actions align="center" class="text-primary">
          <q-btn flat label="Отмена" v-close-popup />
          <q-btn v-if="editMode" flat label="Сохранить" v-close-popup @click="savePosition(activeWorkTaskId)" />
          <q-btn v-else flat label="Добавить" v-close-popup @click="addPosition" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  props: ['fld', 'item', 'currentUser'],
  data() {
    return {
      isShowDeleted: false,
      isShowDialog: false,
      editMode: false,
      positionTemplate: null,
      positionList: [],
      taskWorkList: [],
      deletedTaskWorkList: [],
      position: {
        id: null,
        name: null,
        cost_without_vat: null,
        cost_without_vat_all: null,
        quantity: null,
        vat_rate: null,
        vat: null,
        cost_with_vat: null,
        deleted: false,

      },
      workTitle: '',
      workDesc: '',
      activeWorkTaskId: null

    }
  },

  methods: {
    showAddDialog() {
      this.position = Object.assign({}, this.positionTemplate)
      this.editMode = false
      this.isShowDialog = true
      this.workTitle = ''
      this.workDesc = ''
    },
    findId(arr) {
      let id = 0
      arr.forEach(function(item) {
        if (item.id > id) id = item.id
      })
      return id + 1
    },
    addPosition() {
      this.$utils.postCallPgMethod({
        method: 'work_update',
        params: {
          id: -1,
          title: this.workTitle,
          state_id: 1,
          description: this.workDesc,
        }
      }).subscribe(v => {
        if (v.ok) {
          let resWorkId = v.result.id

          this.$utils .postCallPgMethod({
            method: 'work_task_link_update',
            params: {
              id: -1,
              work_id: resWorkId,
              description: this.workDesc,
              task_id: this.item.id,
            }
          }).subscribe(v => {
            if (v.ok) {
              this.reloadList()
            }
          })
        }
      })
    },

    routeWork(id) {
      this.$router.push(`/work/${id}`)
    },
    savePosition(id) {
      this.$utils.postCallPgMethod({
        method: 'work_task_link_update',
        params: {
          id: id,
          description: this.workDesc,
        }
      }).subscribe(v => {
        if (v.ok) {
          this.reloadList()
        }
      })
      this.editMode = false
      this.isShowDialog = false
    },
    deletePosition(id) {
      let index = this.taskWorkList.findIndex(v => v.id === id)
      this.taskWorkList[index].deleted = true
      this.$utils.postCallPgMethod({
        method: 'work_task_link_update',
        params: {
          id: id,
          deleted: true
        }
      }).subscribe(v => {
        if (v.ok) {
          this.reloadList()
        }
      })
    },
    recoverPosition(id) {
      this.$utils.postCallPgMethod({
        method: 'work_task_link_update',
        params: {
          id: id,
          deleted: false
        }
      }).subscribe(v => {
        if (v.ok) {
          this.reloadList()
        }
      })
    },
    reloadList () {
      this.$utils.postCallPgMethod({
        method: 'work_task_link_list',
        params: {
          task_id: this.item.id
        }
      }).subscribe(v => {
        if (v.ok) {
          this.taskWorkList = v.result;
        }

      })
      this.$utils.postCallPgMethod({
        method: 'work_task_link_list',
        params: {
          task_id: this.item.id,
          deleted: true
        }
      }).subscribe(v => {
        if (v.ok) {
          this.deletedTaskWorkList = v.result;
        }

      })
    }
  },

  mounted() {
    this.positionTemplate = Object.assign({}, this.position)
    this.reloadList()
    this.$utils.postCallPgMethod({
      method: 'task_get_specialist',
      params: {}
    }).subscribe(v => {
      if (v.ok) {
        this.specList = v.result;
      }
    })
    this.$utils.postCallPgMethod({
      method: 'task_get_specialist_role',
      params: {}
    }).subscribe(v => {
      if (v.ok) {
        this.roleList = v.result;
      }
    })
  },

  computed: {

  },

  watch: {

  }
}
</script>
