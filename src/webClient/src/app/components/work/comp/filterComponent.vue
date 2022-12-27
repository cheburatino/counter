<template>
  <div style="flex-wrap: wrap; display: flex;">
    <div style="display: flex; width: 50%; justify-content: space-between; flex-wrap: wrap; padding-right: 5px;">
      <q-input
        id="sqlInput"
        @keydown="keydownHandler"
        style="width: 100%;"
        filled
        v-model="sqlRest"
        label="Условия фильтра"
      />
      <div style="display: flex; justify-content: space-between; width: 100%; padding: 5px;">
        <div>
          <q-btn push style="margin-right: 5px; margin-bottom: 5px; background-color: rgba(255,255,255,0.2)" text-color="primary" :label="activeFilterTitle" @click="() => isFiltersModal = true" />
          <!--              <q-btn v-for="item in filterList" :key="item.id" color="white" style="margin-right: 5px; margin-bottom: 5px;" text-color="primary" :label="item.title" @click="filterStringAssembly(item.where_str)" @mousedown="mousedownOnFilter" @mouseup="mouseupOnFilter(item)" @dblclick="dblClickOnFilter(item)" />-->
        </div>
        <div>
          <q-btn push style="background-color: rgba(255,255,255,0.2)" text-color="primary" label="+" @click="openCreateFilterModal" />
        </div>

      </div>
<!--                <q-btn push color="white" text-color="primary" label="Push" @click="sqlRestBtnClickHandler" />-->
    </div>
    <div style="display: flex; width: 50%; justify-content: space-between; flex-wrap: wrap;">
      <q-input
        id="sqlInput"
        @keydown="keydownHandlerOrder"
        style="width: 100%;"
        filled
        v-model="orderRest"
        label="Условия сортировки"
      />
      <div style="display: flex; justify-content: space-between; width: 100%; padding: 5px;">
        <div>
          <q-btn push style="margin-right: 5px; margin-bottom: 5px; background-color: rgba(255,255,255,0.2)" text-color="primary" :label="activeOrderByTitle" @click="() => isOrderModal = true" />
        </div>
        <div>
          <q-btn push style="background-color: rgba(255,255,255,0.2)" text-color="primary" label="+" @click="openCreateOrderModal" />
        </div>
      </div>
    </div>
  </div>
<!--  Модальное окно добавления нового фильтра-->
  <q-dialog v-model="isCreateFilterModal" >
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Добавление нового фильтра</div>
      </q-card-section>

      <q-card-section>
        <div>Название фильтра:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="newFilterTitle" autofocus @keyup.enter="closeCreateFilterModal" />
      </q-card-section>

      <q-card-section>
        <div>Условия фильтра:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="newFilterCondition" autofocus @keyup.enter="closeCreateFilterModal" />
      </q-card-section>
      <q-checkbox v-model="defCheckbox" /><span>сделать фильтром по умолчанию</span>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Add filter" style="background-color: rgba(33, 186, 69, 0.2);" @click="createFilter" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--    Модальное окно редактирования фильтра-->
  <q-dialog v-model="isEditFilterModal" >
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Редактирование фильтра</div>
      </q-card-section>

      <q-card-section>
        <div>Название фильтра:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="editFilterTitle" autofocus @keyup.enter="() => isEditFilterModal = false" />
      </q-card-section>

      <q-card-section>
        <div>Условия фильтра:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="editFilterCondition" autofocus @keyup.enter="() => isEditFilterModal = false" />
      </q-card-section>

      <q-checkbox v-model="defCheckbox" /><span>сделать фильтром по умолчанию</span>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Edit filter" style="background-color: rgba(33, 186, 69, 0.2);" @click="editFilter" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--    Модальное окно удаления фильтра-->
  <q-dialog v-model="isDeleteFilterModal" >
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Хотите удалить фильтр "{{curFilter.title}}"?</span>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Delete" style="background-color: rgba(193, 0, 21, 0.2);" @click="deleteFilter" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--    Модальное окно со списком фильтров-->
  <q-dialog v-model="isFiltersModal">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-center">Варианты фильтров</div>
      </q-card-section>

      <q-card-section align="center">
        <q-btn v-for="item in filterList" :key="item.id" push style="margin-right: 5px; margin-bottom: 5px; background-color: rgba(255,255,255,0.2)" text-color="primary" :label="item.title" @click="filterStringAssembly(item)" @mousedown="mousedownOnFilter" @mouseup="mouseupOnFilter(item)" @dblclick="dblClickOnFilter(item)" />
      </q-card-section>
    </q-card>
  </q-dialog>

  <!--    Модальное окно со списком сортировок-->
  <q-dialog v-model="isOrderModal">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-center">Варианты сортировки</div>
      </q-card-section>

      <q-card-section align="center">
        <q-btn v-for="item in orderByList" :key="item.id" push style="margin-right: 5px; margin-bottom: 5px; background-color: rgba(255,255,255,0.2)" text-color="primary" :label="item.title" @click="filterStringAssemblyOrder(item)" @mousedown="mousedownOnOrder" @mouseup="mouseupOnOrder(item)" @dblclick="dblClickOnOrder(item)" />
      </q-card-section>
    </q-card>
  </q-dialog>
  <!--    Модальное окно добавления новой сортировки-->
  <q-dialog v-model="isCreateOrderModal" >
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Добавление новой сортировки</div>
      </q-card-section>

      <q-card-section>
        <div>Название сортировки:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="newOrderTitle" autofocus @keyup.enter="closeCreateOrderModal" />
      </q-card-section>

      <q-card-section>
        <div>Условия сортировки:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="newOrderCondition" autofocus @keyup.enter="closeCreateOrderModal" />
      </q-card-section>
      <q-checkbox v-model="defCheckboxOrder" /><span>сделать сортировкой по умолчанию</span>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Add order_by" style="background-color: rgba(33, 186, 69, 0.2);" @click="createOrder" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--    Модальное окно редактирования сортировки-->
  <q-dialog v-model="isEditOrderModal" >
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Редактирование сортировки</div>
      </q-card-section>

      <q-card-section>
        <div>Название сортировки:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="editOrderTitle" autofocus @keyup.enter="() => isEditOrderModal = false" />
      </q-card-section>

      <q-card-section>
        <div>Условия сортировки:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="editOrderCondition" autofocus @keyup.enter="() => isEditOrderModal = false" />
      </q-card-section>

      <q-checkbox v-model="defCheckboxOrder" /><span>сделать сортировкой по умолчанию</span>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Edit order_by" style="background-color: rgba(33, 186, 69, 0.2);" @click="editOrder" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--    Модальное окно удаления сортировки-->
  <q-dialog v-model="isDeleteOrderModal" >
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Хотите удалить сортировку "{{curOrder.title}}"?</span>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Delete" style="background-color: rgba(193, 0, 21, 0.2);" @click="deleteOrder" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {computed, ref, watch} from "vue";
import $utils from 'src/app/plugins/utils'

export default {
  props: ['currentUser'],
  setup(props, {emit}) {

    const filterCtlgTaskStateTitle = ref(null)
    const filterCtlgTaskStateId = ref(null)
    const filterSystemTitle = ref(null)
    const filterSystemId = ref(null)
    const filterDigitalSolutionTitle = ref(null)
    const filterDigitalSolutionId = ref(null)
    const sqlRestList = ref([])
    const active = ref(true)
    const isCreateFilterModal = ref(false)
    const newFilterTitle = ref('')
    const newFilterCondition = ref('')
    const filterList = ref([])
    const isMousedownOnFilter = ref(false)
    const mouseFlag = ref(false)
    const isDeleteFilterModal = ref(false)
    const curFilter = ref('')
    const filterLoading = ref(false)
    const isEditFilterModal = ref(false)
    const editFilterTitle = ref('')
    const editFilterCondition = ref('')
    const isFiltersModal = ref(false)
    const activeFilter = ref('')
    const storeFilterName = ref('')
    const activeFilterTitle = ref('')
    const sqlRest = ref('')
    const orderRest = ref('')
    const defCheckbox = ref(false)
    const orderByList = ref([])
    const activeOrderBy = ref({})
    const activeOrderByTitle = ref('')
    const isOrderModal = ref(false)
    const defCheckboxOrder = ref(false)
    const newOrderCondition = ref('')
    const newOrderTitle = ref('')
    const isCreateOrderModal = ref(false)
    const curOrder = ref({})
    const isEditOrderModal = ref(false)
    const editOrderTitle = ref('')
    const editOrderCondition = ref('')
    const orderLoading = ref(false)
    const isDeleteOrderModal = ref(false)
    const storeOrderByName = ref('')

      // КЛИК ПО ФИЛЬТРУ
    const dblClickOnFilter = (item) => {
        curFilter.value = item
        isEditFilterModal.value = true
        editFilterTitle.value = item.title
        editFilterCondition.value = item.where_str
        defCheckbox.value = item.is_default
      }
    const mousedownOnFilter = () => {
        if (filterLoading.value) return
        filterLoading.value = true
        mouseFlag.value = false
        setTimeout(() => {
          mouseFlag.value = true
          filterLoading.value = false
        }, 1500)
      }
    const mouseupOnFilter = (item) => {
        if (!mouseFlag.value) return
        isDeleteFilterModal.value = true
        curFilter.value = item
      }
    const filterStringAssembly = (item) => {
        if (mouseFlag.value) return
        sqlRest.value = item.where_str
        activeFilter.value = item
        activeFilterTitle.value = item.title
        storeFilterName.value = ''
        sqlRestBtnClickHandler()
      }
      // КЛИК ПО СОРТИРОВКЕ
    const dblClickOnOrder = (item) => {
        curOrder.value = item
        isEditOrderModal.value = true
        editOrderTitle.value = item.title
        editOrderCondition.value = item.order_by_str
        defCheckboxOrder.value = item.is_default
      }
    const mousedownOnOrder = () => {
        if (orderLoading.value) return
        orderLoading.value = true
        mouseFlag.value = false
        setTimeout(() => {
          mouseFlag.value = true
          orderLoading.value = false
        }, 1500)
      }
    const mouseupOnOrder = (item) => {
        if (!mouseFlag.value) return
        isDeleteOrderModal.value = true
        curOrder.value = item
      }
    const filterStringAssemblyOrder = (item) => {
        if (mouseFlag.value) return
        orderRest.value = item.order_by_str
        activeOrderBy.value = item
        activeOrderByTitle.value = item.title
        storeOrderByName.value = ''
        sqlRestBtnClickHandler()
      }
    const createFilter = () => {
        $utils.postCallPgMethod({
          method: 'ctlg_filter_update',
          params: {
            id: -1,
            title: newFilterTitle.value,
            index: 'meeting',
            where_str: newFilterCondition.value,
            user_table_id: props.currentUser.id,
            is_default: defCheckbox.value
          }
        }).subscribe(v => {
          if (v.ok) {
            loadFilterList()
            closeCreateFilterModal()
          }
        })
      }
    const createOrder = () => {
        $utils.postCallPgMethod({
          method: 'ctlg_order_by_update',
          params: {
            id: -1,
            title: newOrderTitle.value,
            index: 'meeting',
            order_by_str: newOrderCondition.value,
            user_table_id: props.currentUser.id,
            is_default: defCheckboxOrder.value
          }
        }).subscribe(v => {
          if (v.ok) {
            loadOrderList()
            closeCreateOrderModal()
          }
        })
      }
    const deleteFilter = () => {
        $utils.postCallPgMethod({
          method: 'ctlg_filter_update',
          params: {
            id: curFilter.value.id,
            deleted: true,
          }
        }).subscribe(v => {
          if (v.ok) {
            loadFilterList()
            isDeleteFilterModal.value = false
          }
        })
      }
    const deleteOrder = () => {
        $utils.postCallPgMethod({
          method: 'ctlg_order_by_update',
          params: {
            id: curOrder.value.id,
            deleted: true,
          }
        }).subscribe(v => {
          if (v.ok) {
            loadOrderList()
            isDeleteOrderModal.value = false
          }
        })
      }
    const editFilter = () => {
        $utils.postCallPgMethod({
          method: 'ctlg_filter_update',
          params: {
            id: curFilter.value.id,
            title: editFilterTitle,
            index: 'meeting',
            where_str: editFilterCondition,
            user_table_id: props.currentUser.id,
            is_default: defCheckbox
          }
        }).subscribe(v => {
          if (v.ok) {
            loadFilterList()
            isEditFilterModal.value = false
          }
        })
      }
    const editOrder = () => {
        $utils.postCallPgMethod({
          method: 'ctlg_order_by_update',
          params: {
            id: curOrder.value.id,
            title: editOrderTitle,
            index: 'meeting',
            order_by_str: editOrderCondition,
            user_table_id: props.currentUser.id,
            is_default: defCheckboxOrder
          }
        }).subscribe(v => {
          if (v.ok) {
            loadOrderList()
            isEditOrderModal.value = false
          }
        })
      }
    const loadFilterList = () => {
        $utils.postCallPgMethod({
          method: 'ctlg_filter_list',
          params: {
            user_table_id: props.currentUser.id,
            index: 'meeting',
          }
        }).subscribe(v => {
          if (v.ok) {
            filterList.value = v.result
            filterList.value.forEach((item) => {
              if (item.is_default) {
                activeFilter.value = item;
                activeFilterTitle.value = item.title;
                sqlRest.value = item.where_str;
                sqlRestBtnClickHandler();
              }
            })
          }
        })
      }
    const loadOrderList = () => {
        $utils.postCallPgMethod({
          method: 'ctlg_order_by_list',
          params: {
            user_table_id: props.currentUser.id,
            index: 'meeting',
          }
        }).subscribe(v => {
          if (v.ok) {
            orderByList.value = v.result
            orderByList.value.forEach((item) => {
              if (item.is_default) {
                activeOrderBy.value = item;
                activeOrderByTitle.value = item.title;
                orderRest.value = item.order_by_str;
                sqlRestBtnClickHandler();
              }
            })
          }
        })
      }
    const openCreateFilterModal = () => {
        isCreateFilterModal.value = true
        defCheckbox.value = false
      }
    const openCreateOrderModal = () => {
        isCreateOrderModal.value = true
        defCheckboxOrder.value = false
      }
    const closeCreateFilterModal = () => {
        isCreateFilterModal.value = false
        newFilterTitle.value = ''
        newFilterCondition.value = ''
      }
    const closeCreateOrderModal = () => {
        isCreateOrderModal.value = false
        newOrderTitle.value = ''
        newOrderCondition.value = ''
      }
    const sqlRestBtnClickHandler = () => {
      emit('sqlRestBtnClickHandler', {'where_param': sqlRest.value ? sqlRest.value : null, 'order_by': orderRest.value ? orderRest.value : 'created_at desc'})
      }
    const keydownHandler = (e) => {
        if (e.keyCode === 13) {
          sqlRestBtnClickHandler()
        }
      }
    const keydownHandlerOrder = (e) => {
        if (e.keyCode === 13) {
          sqlRestBtnClickHandler()
        }
      }
    const routOnTask = (id) => {
        console.log(window.location)
        console.log(id)
        window.location.href = `${window.location.origin}${window.location.pathname}/${id}`
      }
    const updateFilterCtlgTaskState = (v) => {
        emit('updateFilterCtlgTaskState', {'state': v ? v.id : null})
        if (v) {
          $utils.callPgMethod(`ctlg_task_state_get_by_id`, {id: v.id}, (res) => {
            filterCtlgTaskStateTitle.value = res.title
          })
        }
      }
    const updateFilterSystem = (v) => {
        emit('updateFilterSystem', {'system_id': v ? v.id : null})
        if (v) {
          $utils.callPgMethod(`system_get_by_id`, {id: v.id}, (res) => {
            filterSystemTitle.value = res.title
          })
        }
      }
    const updateFilterDigitalSolution = (v) => {
      emit('updateFilterDigitalSolution', {'digital_solution_id': v ? v.id : null})
      if (v) {
        $utils.callPgMethod(`digital_solution_get_by_id`, {id: v.id}, (res) => {
          filterDigitalSolutionTitle.value = res.title
        })
      }
    }

    watch(sqlRest, (v) => {
      if (activeFilter.value.where_str !== v) {
        storeFilterName.value = activeFilter.value.title
        activeFilterTitle.value = 'CUSTOM';
      } else {
        if (storeFilterName.value) {
          activeFilterTitle.value = activeFilter.value.title;
        }
      }
      return 0
    })

    const orderRestComputed = computed((v) => {
      if (activeOrderBy.value.order_by_str !== v) {
        storeOrderByName.value = activeOrderBy.value.title
        activeOrderByTitle.value = 'CUSTOM';
      } else {
        if (storeOrderByName.value) {
          activeOrderByTitle.value = activeOrderBy.value.title;
        }
      }
      return 0
    })

    // извлекаем параметры фильтрации из url
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('state')) {
      let id = +urlParams.get('state')
      if (id) updateFilterCtlgTaskState({id})
    }
    if (urlParams.has('system_id')) {
      let id = +urlParams.get('system_id')
      if (id) updateFilterSystem({id})
    }
    if (urlParams.has('digital_solution_id')) {
      let id = +urlParams.get('digital_solution_id')
      if (id) updateFilterDigitalSolution({id})
    }

    // sqlRestBtnClickHandler()
    loadFilterList()
    loadOrderList()

    return {
      filterCtlgTaskStateTitle,
      filterCtlgTaskStateId,
      filterSystemTitle,
      filterSystemId,
      filterDigitalSolutionTitle,
      filterDigitalSolutionId,
      sqlRestList,
      active,
      isCreateFilterModal,
      newFilterTitle,
      newFilterCondition,
      filterList,
      isMousedownOnFilter,
      mouseFlag,
      isDeleteFilterModal,
      curFilter,
      filterLoading,
      isEditFilterModal,
      editFilterTitle,
      editFilterCondition,
      isFiltersModal,
      activeFilter,
      storeFilterName,
      activeFilterTitle,
      sqlRest,
      orderRest,
      orderRestComputed,
      defCheckbox,
      orderByList,
      activeOrderBy,
      activeOrderByTitle,
      isOrderModal,
      defCheckboxOrder,
      newOrderCondition,
      newOrderTitle,
      isCreateOrderModal,
      curOrder,
      isEditOrderModal,
      editOrderTitle,
      editOrderCondition,
      orderLoading,
      isDeleteOrderModal,
      storeOrderByName,
      dblClickOnFilter,
      mousedownOnFilter,
      mouseupOnFilter,
      filterStringAssembly,
      dblClickOnOrder,
      mousedownOnOrder,
      mouseupOnOrder,
      filterStringAssemblyOrder,
      createFilter,
      createOrder,
      deleteFilter,
      deleteOrder,
      editFilter,
      editOrder,
      loadFilterList,
      loadOrderList,
      openCreateFilterModal,
      openCreateOrderModal,
      closeCreateFilterModal,
      closeCreateOrderModal,
      sqlRestBtnClickHandler,
      keydownHandler,
      keydownHandlerOrder,
      routOnTask,
      updateFilterCtlgTaskState,
      updateFilterSystem,
      updateFilterDigitalSolution,
    }
  }
}
</script>

<style scoped>

</style>
