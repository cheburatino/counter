

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('task.name_plural'), docType:'task'}]"/>
    <!-- фильтры   -->
<!--    <div class="row q-mt-sm q-col-gutter-sm">-->
<!--        <div class=" col-md-2 col-sm-4 col-xs-6">-->
<!--          <comp-fld-ref-search dense outlined pgMethod="ctlg_task_state_list" label="" :item='filterCtlgTaskStateTitle' :itemId='filterCtlgTaskStateId' :ext='{isClearable: true}'  @update="updateFilterCtlgTaskState" @clear="updateFilterCtlgTaskState"  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />-->
<!--        </div>-->
<!--        <div class=" col-md-2 col-sm-4 col-xs-6">-->
<!--          <comp-fld-ref-search dense outlined pgMethod="system_list" label="" :item='filterSystemTitle' :itemId='filterSystemId' :ext='{isClearable: true}'  @update="updateFilterSystem" @clear="updateFilterSystem"  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />-->
<!--        </div>-->
<!--        <div class=" col-md-2 col-sm-4 col-xs-6">-->
<!--          <comp-fld-ref-search dense outlined pgMethod="digital_solution_list" label="" :item='filterDigitalSolutionTitle' :itemId='filterDigitalSolutionId' :ext='{isClearable: true}'  @update="updateFilterDigitalSolution" @clear="updateFilterDigitalSolution"  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />-->
<!--        </div>-->
<!--    </div>-->

    <comp-doc-list ref="docList" :listTitle="$t('task.name_plural')" :listDeletedTitle="$t('task.name_plural_deleted')" pg-method="task_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'"
                   :ext="ext" 
                   search-fld-name="search_text" :readonly="false">

      <template #addFilterSlot>
        <div style="display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap;">
          <q-input
              id="sqlInput"
              @keydown="keydownHandler"
              style="width: 100%;"
              filled
              v-model="sqlRest"
              label="Условия фильтра"
              input-class="text-left"
          />
          <q-btn color="black" label="Front" @click="() => this.sqlRest = this.sqlRest + ' and (state_id = 1 or state_id = 2) and type_id = 2'" />
<!--          <q-btn push color="white" text-color="primary" label="Push" @click="sqlRestBtnClickHandler" />-->
        </div>
      </template>

      <template #listItem="{item}">
        
		<router-link :to="currentUrl + item.id" style="cursor: pointer">
			<q-item-section avatar>
			  <q-avatar rounded>
				<img src="image/task.svg" alt="">
			  </q-avatar>
			</q-item-section>
		</router-link>
	
        
				 <q-item-section>
				    <q-item-label lines="1">{{item.title}}</q-item-label>
					<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge> <q-badge>{{item.options.title.system_title}}</q-badge></q-item-label>
				 </q-item-section>
			
        <q-item-section top side>
          <comp-item-dropdown-btn :item="item" itemProp="title" :is-edit="true" :is-delete="!(false || false)" fkProp=""
                                  pg-method="task_update"
                                  @edit="$router.push(`${currentUrl}${item.id}`)"
                                  @reload-list="$refs.docList.reloadList()"/>
        </q-item-section>
      </template>

    </comp-doc-list>
  </q-page>
</template>

<script>
  import currentUserMixin from '../../../app/mixins/currentUser'
  export default {
    props: ['isOpenInDialog', 'ext'],
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
        filterCtlgTaskStateTitle: null,
        filterCtlgTaskStateId: null,
        filterSystemTitle: null,
        filterSystemId: null,
        filterDigitalSolutionTitle: null,
        filterDigitalSolutionId: null,
        sqlRest: 'state_id != 4',
        sqlRestList: [],
        active: true
      }
    },
    methods: {
      sqlRestBtnClickHandler() {
        // let sqlRestParams = {
        //   where_param: this.sqlRest
        // }
        // let sqlRestParams = {page: 1, per_page: 10, deleted: false, order_by: "created_at desc", where_param: this.sqlRest.toString().trim()}
        // this.$utils.postCallPgMethod({ method: 'task_list', params: Object.assign(sqlRestParams) }).subscribe(res => {
        //   console.log(res.result)
        //   this.sqlRestList = res.result
        // })
        this.$refs.docList.changeItemList({'where_param': this.sqlRest ? this.sqlRest : null})

      },
      keydownHandler(e) {
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
    // watch: {
    //   sqlRest(v) {
    //     if (v.length === 0 || v.length > 3) {
    //       this.$refs.docList.changeItemList({'where_param': this.sqlRest ? this.sqlRest : null})
    //     }
    //   }
    // },
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

    }
  }
</script>
