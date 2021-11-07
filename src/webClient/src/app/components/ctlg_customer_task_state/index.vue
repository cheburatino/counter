

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('ctlg_customer_task_state.name_plural'), docType:'ctlg_customer_task_state'}]"/>

    <comp-doc-list ref="docList" :listTitle="$t('ctlg_customer_task_state.name_plural')" :listDeletedTitle="$t('ctlg_customer_task_state.name_plural_deleted')" pg-method="ctlg_customer_task_state_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'"
                   :ext="ext" 
                   search-fld-name="search_text" :readonly="false">


      <template #listItem="{item}">
        
		<router-link :to="currentUrl + item.id" style="cursor: pointer">
			<q-item-section avatar>
			  <q-avatar rounded>
				<img src="image/catalog.svg" alt="">
			  </q-avatar>
			</q-item-section>
		</router-link>
	
        
        <q-item-section>
          <q-item-label lines="1" >{{item.title}}</q-item-label>
          
        </q-item-section>
	
        <q-item-section top side>
          <comp-item-dropdown-btn :item="item" itemProp="title" :is-edit="true" :is-delete="!(false || false)" fkProp=""
                                  pg-method="ctlg_customer_task_state_update"
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
      currentUrl: () => '/ctlg_customer_task_state/',
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
    
    }
  }
</script>
