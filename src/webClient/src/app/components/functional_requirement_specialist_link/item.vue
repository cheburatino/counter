<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Связи цифровых решений и специалистов', to:'/functional_requirement_specialist_link',  docType: 'functional_requirement_specialist_link'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
          not found vueFldTemplate for type ``
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="functional_requirement_list" :label="$t('functional_requirement_specialist_link.functional_requirement_id')" :item='item.functional_requirement_title' :itemId='item.functional_requirement_id' :ext='{}' @update="v=> item.functional_requirement_id = v.id" @clear="item.functional_requirement_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('functional_requirement_specialist_link.specialist_id')" :item='item.specialist_title' :itemId='item.specialist_id' :ext='{}' @update="v=> item.specialist_id = v.id" @clear="item.specialist_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="ctlg_functional_requirement_specialist_role_list" :label="$t('functional_requirement_specialist_link.role_id')" :item='item.role_title' :itemId='item.role_id' :ext='{}' @update="v=> item.role_id = v.id" @clear="item.role_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined type='text' v-model="item.description" :label="$t('functional_requirement_specialist_link.description')" autogrow :readonly='false'  class='q-mb-sm col-md-8 col-sm-12 col-xs-12' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
          <comp-fld-ref-search outlined pgMethod="man_list" :label="$t('functional_requirement_specialist_link.author_id')" :item='item.author_title' :itemId='item.author_id' :ext='{}' @update="v=> item.author_id = v.id" @clear="item.author_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
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
              return '/functional_requirement_specialist_link'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'functional_requirement_id', label: 'id функционального требования'},
                        {name: 'specialist_id', label: 'специалист'},
                        {name: 'role_id', label: 'роль'},
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
                    method: 'functional_requirement_specialist_link_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'functional_requirement_specialist_link_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
