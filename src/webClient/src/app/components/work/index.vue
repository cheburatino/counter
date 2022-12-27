

<template>
  <q-page :padding="!isOpenInDialog">
    <comp-breadcrumb class="text-capitalize" v-if="!isOpenInDialog" :list="[{label: $t('work.name_plural'), docType:'work'}]"/>

    <comp-doc-list ref="docList" :listTitle="$t('work.name_plural')" :listDeletedTitle="$t('work.name_plural_deleted')" pg-method="work_list"
                   :list-sort-data="listSortData" :list-filter-data="listFilterData"
                   :newDocUrl="currentUrl + 'new'"
                   :ext="ext"
                   search-fld-name="search_text" :readonly="false">

      <template #addFilterSlot>
        <filter-component :currentUser="currentUser"
                          @sqlRestBtnClickHandler="sqlRestBtnClickHandler"
                          @updateFilterCtlgTaskState="updateFilterCtlgTaskState"
                          @updateFilterSystem="updateFilterSystem"
                          @updateFilterDigitalSolution="updateFilterDigitalSolution"
        />
      </template>

      <template #listItem="{item}">

        <router-link :to="currentUrl + item.id" style="cursor: pointer">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="image/work.png" alt="">
            </q-avatar>
          </q-item-section>
        </router-link>


        <q-item-section>
          <q-item-label lines="1" >{{item.title}}</q-item-label>
          <q-item-label caption>
            <q-badge color="orange">{{item.options.title.state_title}}</q-badge>
            <q-badge v-if="item.today" class="q-ma-xs" color="primary">На сегодня</q-badge>
            <q-badge v-if="item.system_id" class="q-ma-xs" color="primary">{{item.options.title.system_title}}</q-badge>
            <q-badge v-if="item.task_id" class="q-ma-xs" color="green">{{item.options.title.task_title}}</q-badge>
          </q-item-label>
          <q-item-label caption v-if="item.plan_end_date">Плановая дата завершения: {{$utils.formatPgDate(item.plan_end_date)}}</q-item-label>
          <q-item-label v-if="item.fact_end_date" caption>Фактическая дата завершения: {{$utils.formatPgDate(item.fact_end_date)}}</q-item-label>
        </q-item-section>

        <q-item-section top side>
          <comp-item-dropdown-btn :item="item" itemProp="title" :is-edit="true" :is-delete="!(false || false)" fkProp=""
                                  pg-method="work_update"
                                  @edit="$router.push(`${currentUrl}${item.id}`)"
                                  @reload-list="$refs.docList.reloadList()"/>
        </q-item-section>
      </template>

    </comp-doc-list>
  </q-page>
</template>

<script>
import currentUserMixin from '../../../app/mixins/currentUser'
import FilterComponent from "src/app/components/work/comp/filterComponent";
export default {
  components: {FilterComponent},
  props: ['isOpenInDialog', 'ext'],
  mixins: [currentUserMixin],
  computed: {
    currentUrl: () => '/work/',
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
    sqlRestBtnClickHandler(v) {
      this.$refs.docList.changeItemList(v)
    },
    updateFilterCtlgTaskState(v) {
      this.$refs.docList.changeItemList(v)
    },
    updateFilterSystem(v) {
      this.$refs.docList.changeItemList(v)
    },
    updateFilterDigitalSolution(v) {
      this.$refs.docList.changeItemList(v)
    },
  },
  watch: {},
  mounted() {}
}
</script>
