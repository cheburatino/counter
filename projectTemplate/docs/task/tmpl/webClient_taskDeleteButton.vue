<template>
  <q-dialog v-model="deleteDialog">
    <q-card style="min-width: 20vw">
      <q-card-section>
        <div class="text-h6">Удалить задачу</div>
      </q-card-section>
      <q-card-section>
        <div>
          <strong>Внимание!</strong>
          <p></p>
          <p>Вы точно хотите удалить задачу:</p>
          <p>{{ item.title }}?</p>
        </div>
      </q-card-section>
      <q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Отмена" v-close-popup/>
          <q-btn label="Удалить" @click="deleteTask" color="positive"/>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="restoreDialog">
    <q-card style="min-width: 20vw">
      <q-card-section>
        <div class="text-h6">Восстановить задачу</div>
      </q-card-section>
      <q-card-section>
        <div>
          <strong>Внимание!</strong>
          <p></p>
          <p>Вы точно хотите восстановить задачу:</p>
          <p>{{ item.title }}?</p>
        </div>
      </q-card-section>
      <q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Отмена" v-close-popup/>
          <q-btn label="Восстановить" @click="restoreTask" color="positive"/>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>

  <div align="center">
    <q-btn icon="delete" round push size="md" @click="openDeleteDialog()" v-if="!item.deleted">
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">Удалить</q-tooltip>
    </q-btn>
    <q-btn icon="restore_from_trash" round push size="md" @click="openRestoreDialog()" v-if="item.deleted">
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">Восстановить</q-tooltip>
    </q-btn>
  </div>

</template>

<script>
import {ref} from 'Vue'
import {useQuasar} from 'quasar'
import $utils from 'src/app/plugins/utils'

export default {
  props: ['item', 'currentUser'],
  setup(props, {emit}) {
    // управление показом диалога
    const deleteDialog = ref(false)
    const openDeleteDialog = () => deleteDialog.value = true
    const restoreDialog = ref(false)
    const openRestoreDialog = () => restoreDialog.value = true

    const $q = useQuasar()

    const deleteTask = () => {
      deleteDialog.value = true
      $utils.callPgMethod('task_update', {id: props.item.id, deleted: true}, (res) => {
        emit('reload')
        deleteDialog.value = false

        $q.notify({type: 'info', message: 'Задача удалена'})
      })
    }

    const restoreTask = () => {
      restoreDialog.value = true
      $utils.callPgMethod('task_update', {id: props.item.id, deleted: false}, (res) => {
        emit('reload')
        restoreDialog.value = false

        $q.notify({type: 'positive', message: 'Задача восстановлена'})
      })
    }

    return {
      deleteDialog,
      restoreDialog,
      openDeleteDialog,
      openRestoreDialog,
      deleteTask,
      restoreTask,
    }
  }
}
</script>


<style scoped>

</style>
