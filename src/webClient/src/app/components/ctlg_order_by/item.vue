<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Сортировки', to:'/ctlg_order_by',  docType: 'ctlg_order_by'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.title" :label="$t('ctlg_order_by.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="user_list" :label="$t('ctlg_order_by.user_table_id')" :item='item.user_table_title' :itemId='item.user_table_id' :ext='{}' @update="v=> item.user_table_id = v.id" @clear="item.user_table_id = null" :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-checkbox :label="$t('ctlg_order_by.is_default')" v-model='item.is_default' :disable='false' :false-value='false' indeterminate-value='some'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.order_by_str" :label="$t('ctlg_order_by.order_by_str')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
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
              return '/ctlg_order_by'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'user_table_id', label: 'пользователь'},
                        {name: 'index', label: 'список'},
                        {name: 'is_default', label: 'по умолчанию'},
                        {name: 'order_by_str', label: 'условия сортировки'},
                ],
                optionsFlds: [],
                
            }
        },
        watch: {
          
        },
        methods: {
          
            resultModify(res) {
                
				if (res.index) {
                    let arr = [{"label":"задачи","value":"task","color":""},{"label":"дела","value":"work","color":""},{"label":"системы","value":"system","color":""},{"label":"цифровые решения","value":"digital_solution","color":""},{"label":"задачи разработки","value":"development_task","color":""},{"label":"технические задания","value":"technical_task","color":""},{"label":"договоры","value":"contract","color":""},{"label":"счета","value":"invoice","color":""},{"label":"платежи","value":"payment","color":""},{"label":"встречи","value":"meeting","color":""}]
                    let index_item = arr.find(v => v.value === res.index)
                    if (index_item) res.index = {value: res.index, label: index_item.label}
                    }
			
                return res
            },
            save() {
                
                this.$utils.saveItem.call(this, {
                    method: 'ctlg_order_by_update',
                    itemForSaveMod: {index: this.item.index ? this.item.index.value : null,
},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'ctlg_order_by_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
