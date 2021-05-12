<template>
  <q-page padding>

    <comp-breadcrumb v-if="!isOpenInDialog" :list="[{label:'Люди', to:'/man',  docType: 'man'},  {label: item ? (item.title ? item.title : 'Редактирование') : '',  docType: 'edit'}]"/>

    <div v-if="item" class="q-mt-sm">
      <!--  поля формы    -->
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-md-4 col-xs-6">
          <q-input outlined type='text' v-model="item.title" label="название" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-xs-6' />
      </div>
      </div>
      
      <div class="row q-col-gutter-md q-mb-sm">
      <div class="col-3">
          <q-input outlined type='text' v-model="item.last_name" label="фамилия" autogrow :readonly='false'  class='q-mb-sm col-3' />
      </div>
      <div class="col-3">
          <q-input outlined type='text' v-model="item.name" label="имя" autogrow :readonly='false'  class='q-mb-sm col-3' />
      </div>
      <div class="col-3">
          <q-input outlined type='text' v-model="item.middle_name" label="отчество" autogrow :readonly='false'  class='q-mb-sm col-3' />
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
              return '/man'
            },
        },
        data() {
            return {
                item: null,
                flds: [
                        {name: 'title', label: 'название',  required: true},
                        {name: 'last_name', label: 'фамилия'},
                        {name: 'name', label: 'имя'},
                        {name: 'middle_name', label: 'отчество'},
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
