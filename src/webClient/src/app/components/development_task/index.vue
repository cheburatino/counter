

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('development_task.name_plural'), docType:'development_task'}]"/>

    <comp-doc-list ref="docList" :listTitle="$t('development_task.name_plural')" :listDeletedTitle="$t('development_task.name_plural_deleted')" pg-method="development_task_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'"
                   :ext="ext" 
                   search-fld-name="search_text" :readonly="false">


      <template #listItem="{item}">
        
		<router-link :to="currentUrl + item.id" style="cursor: pointer">
			<q-item-section avatar>
			  <q-avatar rounded>
				<img src="image/development_task.png" alt="">
			  </q-avatar>
			</q-item-section>
		</router-link>
	
        
				 <q-item-section>
				    <q-item-label lines="1">{{item.title}}</q-item-label>
					<q-item-label caption>
						<q-item-label caption><q-badge v-if="item.internal_priority" color="blue-grey-3">{{item.internal_priority}}</q-badge> <q-badge color="orange">{{item.options.title.state_title}}</q-badge> <q-badge v-if="item.digital_solution_id" color="primary">{{item.options.title.digital_solution_title}}</q-badge> <q-badge v-if="item.sprint_id" color="info">{{item.options.title.sprint_title}} спринт</q-badge></q-item-label>
						<q-item-label caption>Плановая дата завершения: {{$utils.formatPgDate(item.plan_end_date)}}</q-item-label>
						<q-item-label caption v-if="item.fact_end_date">Фактическая дата завершения: {{$utils.formatPgDate(item.fact_end_date)}}</q-item-label>
					</q-item-label>
				 </q-item-section>
			
        <q-item-section top side>
          <comp-item-dropdown-btn :item="item" itemProp="title" :is-edit="true" :is-delete="!(false || false)" fkProp=""
                                  pg-method="development_task_update"
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
      currentUrl: () => '/development_task/',
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
