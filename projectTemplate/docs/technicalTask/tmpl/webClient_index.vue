

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('technical_task.name_plural'), docType:'technical_task'}]"/>

    <comp-doc-list ref="docList" :listTitle="$t('technical_task.name_plural')" :listDeletedTitle="$t('technical_task.name_plural_deleted')" pg-method="technical_task_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'"
                   :ext="ext" 
                   search-fld-name="search_text" :readonly="false">

      <template #addFilterSlot>
        <div style="flex-wrap: wrap; display: flex;">
          <div style="display: flex; width: 50%; justify-content: space-between; flex-wrap: wrap; padding-right: 5px;">
            <q-input
                id="sqlInput"
                @keydown="keydownHandler"
                style="width: 100%;"
                filled
                v-model="sqlRest"
                label="Условия фильтра"
                input-class="text-left"
            />
            <div style="display: flex; justify-content: space-between; width: 100%; padding: 5px;">
              <div>
                <q-btn color="white" style="margin-right: 5px; margin-bottom: 5px;" text-color="primary" :label="activeFilterTitle" @click="() => isFiltersModal = true" />
                <!--              <q-btn v-for="item in filterList" :key="item.id" color="white" style="margin-right: 5px; margin-bottom: 5px;" text-color="primary" :label="item.title" @click="filterStringAssembly(item.where_str)" @mousedown="mousedownOnFilter" @mouseup="mouseupOnFilter(item)" @dblclick="dblClickOnFilter(item)" />-->
              </div>
              <div>
                <q-btn color="white" text-color="primary" label="+" @click="openCreateFilterModal" />
              </div>

            </div>
            <!--          <q-btn push color="white" text-color="primary" label="Push" @click="sqlRestBtnClickHandler" />-->
          </div>
          <div style="display: flex; width: 50%; justify-content: space-between; flex-wrap: wrap;">
            <q-input
                id="sqlInput"
                @keydown="keydownHandlerOrder"
                style="width: 100%;"
                filled
                v-model="orderRest"
                label="Условия сортировки"
                input-class="text-left"
            />
            <div style="display: flex; justify-content: space-between; width: 100%; padding: 5px;">
              <div>
                <q-btn color="white" style="margin-right: 5px; margin-bottom: 5px;" text-color="primary" :label="activeOrderByTitle" @click="() => isOrderModal = true" />
              </div>
              <div>
                <q-btn color="white" text-color="primary" label="+" @click="openCreateOrderModal" />
              </div>
            </div>
          </div>
        </div>
      </template>


      <template #listItem="{item}">
        
		<router-link :to="currentUrl + item.id" style="cursor: pointer">
			<q-item-section avatar>
			  <q-avatar rounded>
				<img src="image/technical_task.svg" alt="">
			  </q-avatar>
			</q-item-section>
		</router-link>
	
        
        <q-item-section>
          <q-item-label lines="1" >{{item.title}}</q-item-label>
          <q-item-label caption>
            <q-badge class="q-ma-xs" color="orange">{{item.options.title.state_title}}</q-badge>
            <q-badge class="q-ma-xs" color="orange">{{item.options.title.work_state_title}}</q-badge>
          </q-item-label>
        </q-item-section>
	
        <q-item-section top side>
          <comp-item-dropdown-btn :item="item" itemProp="title" :is-edit="true" :is-delete="!(false || false)" fkProp=""
                                  pg-method="technical_task_update"
                                  @edit="$router.push(`${currentUrl}${item.id}`)"
                                  @reload-list="$refs.docList.reloadList()"/>
        </q-item-section>
      </template>

    </comp-doc-list>

    <q-dialog v-model="isCreateFilterModal" transition-show="rotate" transition-hide="rotate" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Добавление нового фильтра</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h8">Название фильтра:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="newFilterTitle" autofocus @keyup.enter="closeCreateFilterModal" />
        </q-card-section>

        <q-card-section>
          <div class="text-h8">Условия фильтра:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="newFilterСondition" autofocus @keyup.enter="closeCreateFilterModal" />
        </q-card-section>
        <q-checkbox v-model="defCheckbox" /><span>сделать фильтром по-умолчанию</span>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add filter" @click="createFilter" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isEditFilterModal" transition-show="rotate" transition-hide="rotate" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Редактирование фильтра</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h8">Название фильтра:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="editFilterTitle" autofocus @keyup.enter="() => this.isEditFilterModal = false" />
        </q-card-section>

        <q-card-section>
          <div class="text-h8">Условия фильтра:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="editFilterСondition" autofocus @keyup.enter="() => this.isEditFilterModal = false" />
        </q-card-section>

        <q-checkbox v-model="defCheckbox" /><span>сделать фильтром по-умолчанию</span>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Edit filter" @click="editFilter" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isDeleteFilterModal" transition-show="rotate" transition-hide="rotate" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Хотите удалить фильтр "{{curFilter.title}}"?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Delete" color="primary" @click="deleteFilter" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--    Модалка со списком фильтров-->
    <q-dialog v-model="isFiltersModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Варианты фильтров</div>
        </q-card-section>

        <q-card-section>
          <q-btn v-for="item in filterList" :key="item.id" color="white" style="margin-right: 5px; margin-bottom: 5px;" text-color="primary" :label="item.title" @click="filterStringAssembly(item)" @mousedown="mousedownOnFilter" @mouseup="mouseupOnFilter(item)" @dblclick="dblClickOnFilter(item)" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!--    Модалка со списком сортировки-->
    <q-dialog v-model="isOrderModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Варианты сортировки</div>
        </q-card-section>

        <q-card-section>
          <q-btn v-for="item in orderByList" :key="item.id" color="white" style="margin-right: 5px; margin-bottom: 5px;" text-color="primary" :label="item.title" @click="filterStringAssemblyOrder(item)" @mousedown="mousedownOnOrder" @mouseup="mouseupOnOrder(item)" @dblclick="dblClickOnOrder(item)" />
        </q-card-section>
      </q-card>
    </q-dialog>
    <!--    ДОБАВЛЕНИЕ НОВОЙ СОРТИРОВКИ-->
    <q-dialog v-model="isCreateOrderModal" transition-show="rotate" transition-hide="rotate" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Добавление новой сортировки</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h8">Название сортировки:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="newOrderTitle" autofocus @keyup.enter="closeCreateOrderModal" />
        </q-card-section>

        <q-card-section>
          <div class="text-h8">Условия сортировки:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="newOrderСondition" autofocus @keyup.enter="closeCreateOrderModal" />
        </q-card-section>
        <q-checkbox v-model="defCheckboxOrder" /><span>сделать сортировкой по-умолчанию</span>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add order_by" @click="createOrder" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--    РЕДАКТИРОВАНИЕ СОРТИРОВКИ-->
    <q-dialog v-model="isEditOrderModal" transition-show="rotate" transition-hide="rotate" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Редактирование сортировки</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h8">Название сортировки:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="editOrderTitle" autofocus @keyup.enter="() => this.isEditOrderModal = false" />
        </q-card-section>

        <q-card-section>
          <div class="text-h8">Условия сортировки:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="editOrderСondition" autofocus @keyup.enter="() => this.isEditOrderModal = false" />
        </q-card-section>

        <q-checkbox v-model="defCheckboxOrder" /><span>сделать сортировкой по-умолчанию</span>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Edit order_by" @click="editOrder" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--    УДАЛЕНИЕ СОРТИРОВКИ-->
    <q-dialog v-model="isDeleteOrderModal" transition-show="rotate" transition-hide="rotate" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Хотите удалить сортировку "{{curOrder.title}}"?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Delete" color="primary" @click="deleteOrder" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
  import currentUserMixin from '../../../app/mixins/currentUser'
  export default {
    props: ['isOpenInDialog', 'ext'],
    mixins: [currentUserMixin],
    computed: {
      currentUrl: () => '/technical_task/',
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
        filterCtlgTaskStateTitle: null,
        filterCtlgTaskStateId: null,
        filterSystemTitle: null,
        filterSystemId: null,
        filterDigitalSolutionTitle: null,
        filterDigitalSolutionId: null,
        sqlRestList: [],
        active: true,
        isCreateFilterModal: false,
        newFilterTitle: '',
        newFilterСondition: '',
        filterList: [],
        ismousedownOnFilter: false,
        mouseFlag: false,
        isDeleteFilterModal: false,
        curFilter: '',
        filterLoading: false,
        isEditFilterModal: false,
        editFilterTitle: '',
        editFilterСondition: '',
        isFiltersModal: false,
        activeFilter: '',
        storeFilterName: '',
        activeFilterTitle: '',
        orderRest: '',
        defCheckbox: false,
        orderByList: [],
        activeOrderBy: {},
        activeOrderByTitle: '',
        isOrderModal: false,
        defCheckboxOrder: false,
        newOrderСondition: '',
        newOrderTitle: '',
        isCreateOrderModal: false,
        curOrder: {},
        isEditOrderModal: false,
        editOrderTitle: '',
        editOrderСondition: '',
        orderLoading: false,
        isDeleteOrderModal: false,
        storeOrderByName: ''
      }
    },
    methods: {
      // КЛИК ПО ФИЛЬТРУ
      dblClickOnFilter(item) {
        this.curFilter = item
        this.isEditFilterModal = true
        this.editFilterTitle = item.title
        this.editFilterСondition = item.where_str
        this.defCheckbox = item.is_default
      },
      mousedownOnFilter() {
        if (this.filterLoading) return
        this.filterLoading = true
        this.mouseFlag = false
        setTimeout(() => {
          this.mouseFlag = true
          this.filterLoading = false
        }, 1500)
      },
      mouseupOnFilter(item) {
        if (!this.mouseFlag) return
        this.isDeleteFilterModal = true
        this.curFilter = item
      },
      filterStringAssembly(item) {
        if (this.mouseFlag) return
        this.sqlRest = item.where_str
        this.activeFilter = item
        this.activeFilterTitle = item.title
        this.storeFilterName = ''
        this.sqlRestBtnClickHandler()
      },
      // КЛИК ПО СОРТИРОВКЕ
      dblClickOnOrder(item) {
        this.curOrder = item
        this.isEditOrderModal = true
        this.editOrderTitle = item.title
        this.editOrderСondition = item.order_by_str
        this.defCheckboxOrder = item.is_default
      },
      mousedownOnOrder() {
        if (this.orderLoading) return
        this.orderLoading = true
        this.mouseFlag = false
        setTimeout(() => {
          this.mouseFlag = true
          this.orderLoading = false
        }, 1500)
      },
      mouseupOnOrder(item) {
        if (!this.mouseFlag) return
        this.isDeleteOrderModal = true
        this.curOrder = item
      },
      filterStringAssemblyOrder(item) {
        if (this.mouseFlag) return
        this.orderRest = item.order_by_str
        this.activeOrderBy = item
        this.activeOrderByTitle = item.title
        this.storeOrderByName = ''
        this.sqlRestBtnClickHandler()
      },


      createFilter() {
        this.$utils.postCallPgMethod({
          method: 'ctlg_filter_update',
          params: {
            id: -1,
            title: this.newFilterTitle,
            index: 'technical_task',
            where_str: this.newFilterСondition,
            user_table_id: this.currentUser.id,
            is_default: this.defCheckbox
          }
        }).subscribe(v => {
          if (v.ok) {
            this.loadFilterList()
            this.closeCreateFilterModal()
          }
        })
      },
      createOrder() {
        this.$utils.postCallPgMethod({
          method: 'ctlg_order_by_update',
          params: {
            id: -1,
            title: this.newOrderTitle,
            index: 'technical_task',
            order_by_str: this.newOrderСondition,
            user_table_id: this.currentUser.id,
            is_default: this.defCheckboxOrder
          }
        }).subscribe(v => {
          if (v.ok) {
            this.loadOrderList()
            this.closeCreateOrderModal()
          }
        })
      },
      deleteFilter() {
        this.$utils.postCallPgMethod({
          method: 'ctlg_filter_update',
          params: {
            id: this.curFilter.id,
            deleted: true,
          }
        }).subscribe(v => {
          if (v.ok) {
            this.loadFilterList()
            this.isDeleteFilterModal = false
          }
        })
      },
      deleteOrder() {
        this.$utils.postCallPgMethod({
          method: 'ctlg_order_by_update',
          params: {
            id: this.curOrder.id,
            deleted: true,
          }
        }).subscribe(v => {
          if (v.ok) {
            this.loadOrderList()
            this.isDeleteOrderModal = false
          }
        })
      },
      editFilter() {
        this.$utils.postCallPgMethod({
          method: 'ctlg_filter_update',
          params: {
            id: this.curFilter.id,
            title: this.editFilterTitle,
            index: 'technical_task',
            where_str: this.editFilterСondition,
            user_table_id: this.currentUser.id,
            is_default: this.defCheckbox
          }
        }).subscribe(v => {
          if (v.ok) {
            this.loadFilterList()
            this.isEditFilterModal = false
          }
        })
      },
      editOrder() {
        this.$utils.postCallPgMethod({
          method: 'ctlg_order_by_update',
          params: {
            id: this.curOrder.id,
            title: this.editOrderTitle,
            index: 'technical_task',
            order_by_str: this.editOrderСondition,
            user_table_id: this.currentUser.id,
            is_default: this.defCheckboxOrder
          }
        }).subscribe(v => {
          if (v.ok) {
            this.loadOrderList()
            this.isEditOrderModal = false
          }
        })
      },
      loadFilterList() {
        this.$utils.postCallPgMethod({
          method: 'ctlg_filter_list',
          params: {
            user_table_id: this.currentUser.id,
            index: 'technical_task',
          }
        }).subscribe(v => {
          if (v.ok) {
            console.log('filterList: ', v.result)
            this.filterList = v.result
            this.filterList.forEach((item) => {
              if (item.is_default) {
                this.activeFilter = item;
                this.activeFilterTitle = item.title;
                this.sqlRest = item.where_str;
                this.sqlRestBtnClickHandler();
              }
            })
          }
        })
      },
      loadOrderList() {
        this.$utils.postCallPgMethod({
          method: 'ctlg_order_by_list',
          params: {
            user_table_id: this.currentUser.id,
            index: 'technical_task',
          }
        }).subscribe(v => {
          if (v.ok) {
            console.log('filterList: ', v.result)
            this.orderByList = v.result
            this.orderByList.forEach((item) => {
              if (item.is_default) {
                this.activeOrderBy = item;
                this.activeOrderByTitle = item.title;
                this.orderRest = item.order_by_str;
                this.sqlRestBtnClickHandler();
              }
            })
          }
        })
      },
      openCreateFilterModal() {
        this.isCreateFilterModal = true
        this.defCheckbox = false
      },
      openCreateOrderModal() {
        this.isCreateOrderModal = true
        this.defCheckboxOrder = false
      },
      closeCreateFilterModal() {
        this.isCreateFilterModal = false
        this.newFilterTitle = ''
        this.newFilterСondition = ''
      },
      closeCreateOrderModal() {
        this.isCreateOrderModal = false
        this.newOrderTitle = ''
        this.newOrderСondition = ''
      },
      sqlRestBtnClickHandler() {
        // let sqlRestParams = {
        //   where_param: this.sqlRest
        // }
        // let sqlRestParams = {page: 1, per_page: 10, deleted: false, order_by: "created_at desc", where_param: this.sqlRest.toString().trim()}
        // this.$utils.postCallPgMethod({ method: 'task_list', params: Object.assign(sqlRestParams) }).subscribe(res => {
        //   console.log(res.result)
        //   this.sqlRestList = res.result
        // })
        this.$refs.docList.changeItemList({'where_param': this.sqlRest ? this.sqlRest : null, 'order_by': this.orderRest ? this.orderRest : 'created_at desc'})

      },
      keydownHandler(e) {
        if (e.keyCode == 13) {
          this.sqlRestBtnClickHandler()
        }
      },
      keydownHandlerOrder(e) {
        if (e.keyCode == 13) {
          this.sqlRestBtnClickHandler()
        }
      },
      routOnTask(id) {
        console.log(window.location)
        console.log(id)
        window.location.href = `${window.location.origin}${window.location.pathname}/${id}`

      },
      updateFilterCtlgTaskState(v) {
        this.$refs.docList.changeItemList({'state': v ? v.id : null})
        if (v) {
          this.$utils.callPgMethod(`ctlg_task_state_get_by_id`, {id: v.id}, (res) => {
            this.filterCtlgTaskStateTitle = res.title
          })
        }
      },
      updateFilterSystem(v) {
        this.$refs.docList.changeItemList({'system_id': v ? v.id : null})
        if (v) {
          this.$utils.callPgMethod(`system_get_by_id`, {id: v.id}, (res) => {
            this.filterSystemTitle = res.title
          })
        }
      },
      updateFilterDigitalSolution(v) {
        this.$refs.docList.changeItemList({'digital_solution_id': v ? v.id : null})
        if (v) {
          this.$utils.callPgMethod(`digital_solution_get_by_id`, {id: v.id}, (res) => {
            this.filterDigitalSolutionTitle = res.title
          })
        }
      },
    },
    watch: {
      sqlRest(v) {
        if (this.activeFilter.where_str != v) {
          this.storeFilterName = this.activeFilter.title
          this.activeFilterTitle = 'CUSTOM';
        } else {
          if (this.storeFilterName) {
            this.activeFilterTitle = this.activeFilter.title;
          }
        }
      },
      orderRest(v) {
        if (this.activeOrderBy.order_by_str != v) {
          this.storeOrderByName = this.activeOrderBy.title
          this.activeOrderByTitle = 'CUSTOM';
        } else {
          if (this.storeOrderByName) {
            this.activeOrderByTitle = this.activeOrderBy.title;
          }
        }
      }
    },
    mounted() {
      // извлекаем параметры фильтрации из url
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.has('state')) {
        let id = +urlParams.get('state')
        if (id) this.updateFilterCtlgTaskState({id})
      }
      if (urlParams.has('system_id')) {
        let id = +urlParams.get('system_id')
        if (id) this.updateFilterSystem({id})
      }
      if (urlParams.has('digital_solution_id')) {
        let id = +urlParams.get('digital_solution_id')
        if (id) this.updateFilterDigitalSolution({id})
      }

      this.sqlRestBtnClickHandler()
      this.loadFilterList()
      this.loadOrderList()

    }
  }
</script>
