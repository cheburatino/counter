<template>
  <q-dialog v-model="isShowDialog">
    <q-card style="min-width: 20vw">
      <q-card-section>
        <div class="text-h6">Добавить задачу</div>
      </q-card-section>
      <q-card-section>
        <div>
<!--          название-->
          <div>
            <q-input v-model="taskTitle" autogrow label="Название" class='q-mb-md col-md-4 col-sm-6 col-xs-12' v-if="systemId"/>
          </div>
<!--          система-->
          <div>
<!--            квадратное поле-->
            <comp-fld-ref-search outlined pgMethod="system_list" :label="$t('task.system_id')" :item='system' :itemId='systemId' :ext='{}' @update="v=> systemId = v.id" @clear="systemId = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' v-if="!systemId"/>
<!--            закруглённое поле-->
            <comp-fld-ref-search rounded dense pgMethod="system_list" :label="$t('task.system_id')" :item='system' :itemId='systemId' :ext='{}' @update="v=> systemId = v.id" @clear="systemId = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' v-if="systemId"/>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-card-actions align="right" class="text-primary" v-if="systemId && taskTitle">
          <q-btn flat label="Отмена" v-close-popup/>
          <q-btn label="Создать" @click="addTask" color="secondary"/>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>

  <div>
<!--    круглая кнопка добавления в index-->
    <q-btn class="q-mr-md" icon="add" size="md" round push color="secondary" @click="open()"/>
  </div>

</template>

<script>

import {ref} from 'Vue'
import {useQuasar} from 'quasar'
import $utils from 'src/app/plugins/utils'

export default {
  props: ['currentUser'],
  setup(props, {emit}) {
    // управление показом диалога
    const isShowDialog = ref(false)
    const open = () => isShowDialog.value = true

    const taskTitle = ref('')
    const system = ref(null)
    const systemId = ref(null)
    const systemList = ref([])

    const systemListFetch = () => {
      $utils.callPgMethod('system_list', {deleted: false, order_by: "id desc"}, (res) => {
        systemList.value = res
      })
    }
    systemListFetch()

    const $q = useQuasar()

    const addTask = () => {
      isShowDialog.value = true
      $utils.callPgMethod('task_update', {
        id: -1,
        title: taskTitle.value,
        system_id: systemId.value,
        stage_id: 1

      }, (res) => {
        emit('reload')
        taskTitle.value = ''
        systemId.value = null
        isShowDialog.value = false

        $q.notify({type: 'positive', message: 'Задача создана'})
      })
    }

    return {
      isShowDialog,
      open,
      taskTitle,
      system,
      systemId,
      addTask,
      systemList
    }
  }
}
</script>


<style scoped>

</style>
