

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('task.name_plural'), docType:'task'}]"/>

    <comp-doc-list ref="docList" :listTitle="$t('task.name_plural')" :listDeletedTitle="$t('task.name_plural_deleted')" pg-method="task_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'"
                   :ext="ext" 
                   search-fld-name="search_text" :readonly="false">


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
					<q-item-label caption>
						<q-item-label caption><q-badge class="q-ma-sm" color="orange">{{item.options.title.state_title}}</q-badge><q-badge class="q-ma-sm" color="primary">{{item.options.title.system_title}}</q-badge><q-badge class="q-ma-sm" color="light-blue-3">{{item.options.title.executor_title}}</q-badge><q-badge class="q-ma-sm" color="info">{{item.plan_end_date}}</q-badge></q-item-label>
					</q-item-label>
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
    components: {},
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
    
    }
  }
</script>
