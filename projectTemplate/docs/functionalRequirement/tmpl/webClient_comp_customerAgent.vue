<template>
  <div>
    <!--  bar  -->
    <q-bar class="bg-secondary text-white">
      <q-icon name="fas fa-user-astronaut" />
<!--      <q-icon name="fas fa-atom" />-->
      <div v-if="!isShowDeleted">Представители заказчика</div>
      <div v-else>Удалённые</div>
      <q-space />
      <q-btn flat round icon="add" @click="showAddDialog" />
      <q-btn flat round icon="delete_outline" @click="isShowDeleted = !isShowDeleted" />
    </q-bar>

    <!--  list active  -->
    <q-list v-if="!isShowDeleted && taskSpecList.length > 0" bordered separator>
      <q-item clickable v-ripple v-for="item in taskSpecList" :key="item.id">
        <q-item-section @click="editPosition(item.id)">
          <q-item-label>{{ item.options.title.customer_agent_title }}</q-item-label>
          <q-item-label caption>{{ item.description }} </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn flat round icon="delete" @click="deletePosition(item.id)" />
        </q-item-section>
      </q-item>
    </q-list>

    <!--  list deleted  -->
    <q-list v-if="isShowDeleted && deletedtaskSpecList.length > 0" bordered separator>
      <q-item clickable v-ripple v-for="item in deletedtaskSpecList" :key="item.id">
        <q-item-section @click="editPosition(item.id)">
          <q-item-label>{{ item.options.title.customer_agent_title }}</q-item-label>
          <q-item-label caption>{{ item.description }} </q-item-label>
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
          <div style="text-align: center" class="text-h6">Выбор пользователя</div>
        </q-card-section>

        <q-btn-dropdown
            split
            color="primary"
            push
            glossy
            no-caps
            icon="face"
            label="Пользователь"
            @click="onMainClick"
            style="margin-left: 40px; margin-bottom: 10px; margin-top: 20px;"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onSpecClick(item)" v-for="item in specList" :key="item.id">
              <q-item-section avatar>
                <q-avatar size="40px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{item.title}}</q-item-label>
                <q-item-label caption>{{item.position}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <br>
        <div v-if="spec" style="margin-left: 40px; border-bottom: 1px solid #4f6ccd; margin-right: 40px;">
          {{spec}}
        </div>

        <q-input
            v-model="roleDesc"
            placeholder="Описание роли"
            filled
            autogrow
            style="margin-top: 40px; margin-left: 40px; margin-right: 40px; margin-bottom: 20px;"
        />


        <q-card-actions align="center" class="text-primary">
          <q-btn flat label="Отмена" v-close-popup />
          <q-btn v-if="editMode" flat label="Сохранить" v-close-popup @click="savePosition(activetaskSpecId)" />
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
      taskSpecList: [],
      deletedtaskSpecList: [],
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
      spec: '',
      specId: null,
      roleDesc: '',
      specList: [],
      roleList: [],
      activetaskSpecId: null
    }
  },

  methods: {
    showAddDialog() {
      this.position = Object.assign({}, this.positionTemplate)
      this.editMode = false
      this.isShowDialog = true
      this.spec = ''
      this.roleDesc = ''
      this.roleId = null
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
        method: 'functional_requirement_customer_agent_link_update',
        params: {
          id: -1,
          customer_agent_id: this.specId,
          description: this.roleDesc,
          functional_requirement_id: this.item.id,
          author_id: this.currentUser.id
        }
      }).subscribe(v => {
        if (v.ok) {
          this.reloadList()
        }
      })
    },

    onSpecClick (item) {
      this.spec = item.title;
      this.specId = item.id;
    },
    onRoleClick (item) {
      this.role = item.title
      this.roleId = item.id
    },
    editPosition(id) {
      // let activetaskSpec = this.taskSpecList.find(v => v.id === id)
      //
      // this.specId = activetaskSpec.specialist_id
      // this.spec = activetaskSpec.options.title.specialist_title
      // this.roleDesc = activetaskSpec.description
      // this.activetaskSpecId = id
      // this.editMode = true
      // this.isShowDialog = true
    },
    savePosition(id) {
      this.$utils.postCallPgMethod({
        method: 'functional_requirement_customer_agent_link_update',
        params: {
          id: id,
          specialist_id: this.specId,
          description: this.roleDesc,
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
      let index = this.taskSpecList.findIndex(v => v.id === id)
      this.taskSpecList[index].deleted = true
      this.$utils.postCallPgMethod({
        method: 'functional_requirement_customer_agent_link_update',
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
        method: 'functional_requirement_customer_agent_link_update',
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
        method: 'functional_requirement_customer_agent_link_list',
        params: {
          functional_requirement_id: this.item.id
        }
      }).subscribe(v => {
        if (v.ok) {
          this.taskSpecList = v.result;
        }

      })
      this.$utils.postCallPgMethod({
        method: 'functional_requirement_customer_agent_link_list',
        params: {
          functional_requirement_id: this.item.id,
          deleted: true
        }
      }).subscribe(v => {
        if (v.ok) {
          this.deletedtaskSpecList = v.result;
        }

      })
    }
  },

  mounted() {
    this.positionTemplate = Object.assign({}, this.position)
    this.reloadList()
    this.$utils.postCallPgMethod({
      method: 'man_list',
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
