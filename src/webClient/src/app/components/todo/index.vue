<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Тудушки', docType:'todo'}]"/>

    <comp-doc-list ref="docList" listTitle='Тудушки' listDeletedTitle='Удаленные Тудушки' pg-method="todo_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'" :ext="ext" 
                   search-fld-name="search_text" :readonly="false">

      <template #listItem="{item}">
        
        <q-item-section avatar @click="$router.push(currentUrl + item.id)" style="cursor: pointer">
          <q-avatar rounded>
            <img src="https://www.flaticon.com/svg/static/icons/svg/1632/1632670.svg" alt="">
          </q-avatar>
        </q-item-section>
	
        
        <q-item-section>
          <q-item-label lines="1" >{{item.title}}</q-item-label>
          
        </q-item-section>
	
        <q-item-section top side>
          <comp-item-dropdown-btn :item="item" itemProp="title" :is-edit="true" :is-delete="!(false)" fkProp=""
                                  pg-method="todo_update"
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
      currentUrl: () => 'todo/',
    },
    data() {
      return {
        listSortData: [
          {value: 'created_at', title: 'Дата'},
          {value: 'title', title: 'Название'}
        ],
        listFilterData: [
          {value: {deleted: false}, title: 'Активные'},
          {value: {deleted: true}, title: 'Удаленные'}
        ],
      }
    },
  }
</script>
