<template>
    <div>
        <q-bar class="bg-secondary text-white shadow-2">
            <div>работы <span v-if="deleted">удаленные</span></div>
            <q-space />
            <q-btn icon="add" v-if="!readonly" round flat @click="add"><q-tooltip>Добавить</q-tooltip></q-btn>
            <q-btn v-if="deleted && !readonly" icon="delete" round flat @click="reload(false)"><q-tooltip>активные работы</q-tooltip></q-btn>
            <q-btn v-if="!deleted && !readonly" icon="delete_outline" round flat @click="reload(true)"><q-tooltip>удаленные работы</q-tooltip></q-btn>
        </q-bar>

        <q-list bordered separator>
            <q-item v-for="v in list" :key="v.id">
                <router-link :to="'/work/' + v.id" style="cursor: pointer">
                    <q-item-section avatar>
                        <q-avatar rounded>
                            <img src="image/work.png" alt="">
                        </q-avatar>
                    </q-item-section>
                </router-link>
                <q-item-section>
                    
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption>
					<q-badge color="orange">{{v.options.title.state_title}}</q-badge> <q-badge v-if="v.state_id === 3" color="positive">{{v.worked_time}} минут</q-badge>
				</q-item-label>
            
                </q-item-section>
                 <q-item-section side v-if="!readonly">
                    <q-icon :name="deleted ? 'done' : 'delete'" size="xs" class="cursor-pointer" color="grey" @click="removeRecover(v)"/>
                </q-item-section>
            </q-item>
        </q-list>

        <!-- диалог добавления -->
        <q-dialog v-model="isShowAddDialog">
            <q-card style="width: 500px; max-width: 80vw;">
                <q-bar>
                    <div>Создать новую запись</div>
                    <q-space />
                    <q-btn dense flat icon="close" v-close-popup/>
                </q-bar>
                <q-card-section>
                    
                    <q-input outlined type='text' v-model="item.title" :label="$t('work.title')" autogrow :readonly='false'  class='q-mb-sm col-md-4 col-sm-6 col-xs-12' />
                    
                </q-card-section>
                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" @click="saveNew"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    
    export default {
        props: ['id', 'readonly'],
        mixins: [  ],
        data() {
            return {
                list: [],
                isShowAddDialog: false,
                deleted: false,
                item: {title: null, },
            }
        },
        methods: {
            add() {
                this.isShowAddDialog = true
            },
            reload(isDeleted) {
                !isDeleted ? this.deleted = false : this.deleted = true
                this.$utils.callPgMethod('work_list', {'time_id': this.id, deleted: this.deleted, 'order_by': 'created_at desc', }, (result) => this.list = result)
            },
            saveNew() {
                
                    if (!this.item.title) {
                    this.$q.notify({type: 'negative', message: 'не заполнено поле: "название"'})
                    return
                }
                let params = Object.assign({id: -1, time_id: this.id}, this.item)
                
                    
                // если IsStateMachine то work_create, в остальных случаях work_update
                this.$utils.callPgMethod('work_update', params, () => {
                    this.isShowAddDialog = false
                    
                    this.item.title = null 
                    this.reload()
                })
            },
            removeRecover({id}) {
                this.$utils.callPgMethod('work_update', {id, deleted: !this.deleted}, () => this.reload(this.deleted))
            }
        },
        mounted() {
            this.reload()
        }
    }
</script>
