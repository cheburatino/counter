<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Контакты', to:'/man',  docType: 'man'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.last_name" :label="$t('man.last_name')"  :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-input outlined type='text' v-model="item.first_name" :label="$t('man.first_name')"  :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      <div class="col-md-2 col-sm-3 col-xs-6">
          <q-input outlined type='text' v-model="item.middle_name" :label="$t('man.middle_name')"  :readonly='false'  class='q-mb-sm col-md-2 col-sm-3 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="company_list" :label="$t('man.company_id')" :item='item.company_title' :itemId='item.company_id' :ext='{"avatar":"image/company.svg","isClearable":"true","pathUrl":"/company"}' @update="v=> item.company_id = v.id" @clear="item.company_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <q-input outlined type='text' v-model="item.position" :label="$t('man.position')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="user_list" :label="$t('man.user_table_id')" :item='item.user_table_title' :itemId='item.user_table_id' :ext='{"avatar":"https://image.flaticon.com/icons/svg/423/423063.svg","isClearable":"true","pathUrl":"/users"}' @update="v=> item.user_table_id = v.id" @clear="item.user_table_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
              return '/man'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название'},
                        {name: 'last_name', label: 'фамилия'},
                        {name: 'first_name', label: 'имя'},
                        {name: 'middle_name', label: 'отчество'},
                        {name: 'company_id', label: 'компания'},
                        {name: 'position', label: 'должность'},
                        {name: 'user_table_id', label: 'пользователь'},
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
                    method: 'man_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'man_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
