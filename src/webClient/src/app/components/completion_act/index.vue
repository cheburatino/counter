

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('completion_act.name_plural'), docType:'completion_act'}]"/>

    <comp-doc-list ref="docList" :listTitle="$t('completion_act.name_plural')" :listDeletedTitle="$t('completion_act.name_plural_deleted')" pg-method="completion_act_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'"
                   :ext="ext" 
                   search-fld-name="search_text" :readonly="false">


      <template #listItem="{item}">
        
		<router-link :to="currentUrl + item.id" style="cursor: pointer">
			<q-item-section avatar>
			  <q-avatar rounded>
				<img src="image/completion_act.png" alt="">
			  </q-avatar>
			</q-item-section>
		</router-link>
	
        
				 <q-item-section>
				    <q-item-label lines="1">{{item.title}}</q-item-label>
					<q-item-label caption>
						<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge></q-item-label>
						<q-item-label caption>ТЗ: {{item.options.title.technical_task_title}}</q-item-label>
					</q-item-label>
				 </q-item-section>
			
        <q-item-section top side>
          <comp-item-dropdown-btn :item="item" itemProp="title" :is-edit="true" :is-delete="!(false || false)" fkProp=""
                                  pg-method="completion_act_update"
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
      currentUrl: () => '/completion_act/',
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
