

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('request.name_plural'), docType:'request'}]"/>
    <!-- фильтры   -->
    <div class="row q-mt-sm q-col-gutter-sm">
        <div class=" col-md-2 col-sm-4 col-xs-6">
          <comp-fld-ref-search dense outlined pgMethod="ctlg_request_state_list" label="" :item='filterCtlgRequestStateTitle' :itemId='filterCtlgRequestStateId' :ext='{isClearable: true}'  @update="updateFilterCtlgRequestState" @clear="updateFilterCtlgRequestState"  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
        <div class=" col-md-2 col-sm-4 col-xs-6">
          <comp-fld-ref-search dense outlined pgMethod="system_list" label="" :item='filterSystemTitle' :itemId='filterSystemId' :ext='{isClearable: true}'  @update="updateFilterSystem" @clear="updateFilterSystem"  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
        </div>
    </div>

    <comp-doc-list ref="docList" :listTitle="$t('request.name_plural')" :listDeletedTitle="$t('request.name_plural_deleted')" pg-method="request_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'"
                   :ext="ext" 
                   search-fld-name="search_text" :readonly="false">


      <template #listItem="{item}">
        
		<router-link :to="currentUrl + item.id" style="cursor: pointer">
			<q-item-section avatar>
			  <q-avatar rounded>
				<img src="image/request.svg" alt="">
			  </q-avatar>
			</q-item-section>
		</router-link>
	
        
				 <q-item-section>
				    <q-item-label lines="1">{{item.title}}</q-item-label>
					<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge></q-item-label>
				 </q-item-section>
			
        <q-item-section top side>
          <comp-item-dropdown-btn :item="item" itemProp="title" :is-edit="true" :is-delete="!(false || false)" fkProp=""
                                  pg-method="request_update"
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
      currentUrl: () => '/request/',
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
        filterCtlgRequestStateTitle: null,
        filterCtlgRequestStateId: null,
        filterSystemTitle: null,
        filterSystemId: null,
      }
    },
    methods: {
      updateFilterCtlgRequestState(v) {
        this.$refs.docList.changeItemList({'state_id': v ? v.id : null})
        if (v) {
          this.$utils.callPgMethod(`ctlg_request_state_get_by_id`, {id: v.id}, (res) => {
            this.filterCtlgRequestStateTitle = res.title
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
    },
    mounted() {
    // извлекаем параметры фильтрации из url
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.has('state_id')) {
        let id = +urlParams.get('state_id')
        if (id) this.updateFilterCtlgRequestState({id})
      }
      if (urlParams.has('system_id')) {
        let id = +urlParams.get('system_id')
        if (id) this.updateFilterSystem({id})
      }
    }
  }
</script>
