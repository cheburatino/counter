<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Связи задач заказчиков и представителей заказчиков', to:'/custotmer_task_customer_agent_link',  docType: 'custotmer_task_customer_agent_link'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
          not found vueFldTemplate for type ``
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="custotmer_task_list" :label="$t('custotmer_task_customer_agent_link.custotmer_task_id')" :item='item.custotmer_task_title' :itemId='item.custotmer_task_id' :ext='{}' @update="v=> item.custotmer_task_id = v.id" @clear="item.custotmer_task_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('custotmer_task_customer_agent_link.customer_agent_id')" :item='item.customer_agent_title' :itemId='item.customer_agent_id' :ext='{}' @update="v=> item.customer_agent_id = v.id" @clear="item.customer_agent_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('custotmer_task_customer_agent_link.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('custotmer_task_customer_agent_link.author_id')" :item='item.author_title' :itemId='item.author_id' :ext='{}' @update="v=> item.author_id = v.id" @clear="item.author_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      

      <!--  кнопки   -->
      <comp-item-btn-save v-if="!isOpenInDialog" @save="save" :readonly="false" @cancel="$router.push(docUrl)"/>
      <!--  при открытии в диалоге кнопку Отмена не показываем   -->
      <q-btn v-else color="secondary" :label="$t('message.save')" class="q-mr-sm" @click="save"/>

        

    </div>
  </q-page>
</template>

<script>

    import currentUserMixin from '../../../app/mixins/currentUser'
    export default {
        props: ['id', 'isOpenInDialog'],
        components: {},
        mixins: [currentUserMixin,],
        computed: {
            docUrl: function() {
              return '/custotmer_task_customer_agent_link'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'custotmer_task_id', label: 'задача заказчика'},
                        {name: 'customer_agent_id', label: 'представитель заказчика'},
                        {name: 'description', label: 'описание'},
                        {name: 'author_id', label: 'автор'},
                ],
                optionsFlds: [],
                
            }
        },
        watch: {
          
        },
        methods: {
          
            resultModify(res) {
                
                return res
            },
            save() {
                
                this.$utils.saveItem.call(this, {
                    method: 'custotmer_task_customer_agent_link_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'custotmer_task_customer_agent_link_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
