<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Тудушки', to:'/todo',  docType: 'todo'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-xs-6">
          <q-input outlined type='text' v-model="item.title" label="название" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-xs-6">
          <q-input outlined type='text' v-model="item.state" label="состояние" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-8">
          <q-input outlined type='text' v-model="item.description" label="Описание" autogrow :readonly='false'  class='q-mb-sm col-8' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="user_list" label="Автор" :item='item.author_title' :itemId='item.author_id' :ext='{}' @update="v=> item.author_id = v.id" @clear="item.author_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-xs-6' />
      </div>
      <div class="col-md-4 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="user_list" label="Исполнитель" :item='item.performer_title' :itemId='item.performer_id' :ext='{}' @update="v=> item.performer_id = v.id" @clear="item.performer_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-xs-6' />
      </div>
      <div class="col-md-4 col-xs-6">
          <comp-fld-ref-search outlined pgMethod="user_list" label="Приёмщик" :item='item.acceptor_title' :itemId='item.acceptor_id' :ext='{}' @update="v=> item.acceptor_id = v.id" @clear="item.acceptor_id = null" :readonly='false'  class='q-mb-sm col-md-4 col-xs-6' />
      </div>
      </div>
      

      <!--  кнопки   -->
      <comp-item-btn-save v-if="!isOpenInDialog" @save="save" :readonly="false" @cancel="$router.push(docUrl)"/>
      <!--  при открытии в диалоге кнопку Отмена не показываем   -->
      <q-btn v-else color="secondary" label="сохранить" class="q-mr-sm" @click="save"/>

        

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
              return '/todo'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'state', label: 'состояние'},
                        {name: 'description', label: 'Описание'},
                        {name: 'author_id', label: 'Автор'},
                        {name: 'performer_id', label: 'Исполнитель'},
                        {name: 'acceptor_id', label: 'Приёмщик'},
                ],
                optionsFlds: [],
                }
        },
        methods: {
          
            resultModify(res) {
                
                return res
            },
            save() {
                
                this.$utils.saveItem.call(this, {
                    method: 'todo_update',
                    itemForSaveMod: {},
                    resultModify: this.resultModify,
                })
            },
          reload() {
            let cb = (v) => {
              this.item = this.resultModify(v)
            }
            this.$utils.getDocItemById.call(this, {method: 'todo_get_by_id', cb})
          }
        },
        mounted() {
           this.reload()
        }
    }
</script>
