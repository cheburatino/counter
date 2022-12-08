<template>
  <q-drawer :modelValue="leftSide" side="left" bordered show-if-above
            content-class="bg-grey-2"
            :width="240" @hide="$emit('hide')">
<!--    <q-scroll-area class="fit">-->
      <q-list padding>
        <div v-for="link in menuLinks" :key="link.text">
            <span v-if="isRole(link.roles, link.conditionalFunc)">
              <q-item v-if="!link.isFolder" v-ripple clickable :to="link.url" exact>
                <q-item-section avatar>
                  <q-avatar rounded>
                    <img :src="link.icon">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label v-html='link.text.includes("i18n_") ? $t(link.text.replace("i18n_", "")) : link.text'/>
                </q-item-section>
              </q-item>
              <q-expansion-item v-else header-class="text-grey" closed>
                 <template v-slot:header>
                  <q-item-section avatar>
                    <q-avatar rounded>
                      <img :src="link.icon">
                    </q-avatar>
                  </q-item-section>
                    <q-item-section>
                      <q-item-label v-html='link.text.includes("i18n_") ? $t(link.text.replace("i18n_", "")) : link.text'/>
                    </q-item-section>
                </template>
                <span v-for="link1 in link.linkList" :key="link1.text" >
                  <q-item v-if="isRole(link1.roles, link1.conditionalFunc)" :inset-level="1" v-ripple clickable :to="link1.url"
                          exact>
                  <q-item-section>
                    <q-item-label v-html='link1.text.includes("i18n_") ? $t(link1.text.replace("i18n_", "")) : link1.text'/>
                  </q-item-section>
                </q-item>
                </span>
              </q-expansion-item>
            </span>
        </div>
      </q-list>
<!--    </q-scroll-area>-->
  </q-drawer>
</template>

<script>
    export default {
        props: ['leftSide', 'currentUser'],
        computed: {
          isRole() {
            return (roles, conditionalFunc) => {
                  if (conditionalFunc) {
                    let isAccess = conditionalFunc(this.currentUser)
                    if (!isAccess) return false
                  }
                  if (!roles || roles.length === 0) return true
                  if (!this.currentUser.role) return false
                  let isAccess = false
                  this.currentUser.role.map(r => {
                      if (roles.includes(r)) isAccess = true
                  })
                  return isAccess
              }
          }
        },
        data() {
            return {
                //
                menuLinks: [
                    // for codeGenerate ##sidemenu_slot1

									{icon: 'image/system.svg', text: 'i18n_menu.system', url: '/system', roles: []},

									{icon: 'image/task.svg', text: 'i18n_menu.task', url: '/task', roles: []},

									{icon: 'image/work.png', text: 'i18n_menu.work', url: '/work', roles: ['admin']},

									{icon: 'image/time.svg', text: 'i18n_menu.time', url: '/time', roles: ['admin']},

									{icon: 'image/meeting.svg', text: 'i18n_menu.meeting', url: '/meeting', roles: []},

									{icon: 'image/customer_task.png', text: 'i18n_menu.customer_task', url: '/customer_task', roles: []},

									{icon: 'image/plan_date_change.png', text: 'i18n_menu.plan_date_change', url: '/plan_date_change', roles: []},
{isFolder: true, icon: 'image/crm.png', text: 'CRM', roles: ['admin'], linkList: 								[
								{icon: '', text: 'Компании', url: '/company', roles: []},
								{icon: '', text: 'Юр.лица', url: '/legal_entity', roles: []},
								{icon: '', text: 'Контакты', url: '/contact', roles: []},
								{icon: '', text: 'Договоры', url: '/contract', roles: []},
								{icon: '', text: 'ТЗ', url: '/technical_task', roles: []},
								{icon: '', text: 'ЛУРВ', url: '/work_time_sheet', roles: []},
								{icon: '', text: 'Акты', url: '/completion_act', roles: []},
								{icon: '', text: 'Счета', url: '/invoice', roles: []},
								{icon: '', text: 'Платежи', url: '/payment', roles: []},
],},
{isFolder: true, icon: 'image/catalog.svg', text: 'Справочники', roles: ['admin'], linkList: 								[
								{icon: 'image/user.svg', text: 'Пользователи', url: '/users', roles: []},
								{icon: '', text: 'Статусы встреч', url: '/ctlg_meeting_state', roles: []},
								{icon: '', text: 'Статусы систем', url: '/ctlg_system_state', roles: []},
								{icon: '', text: 'Этапы задачи', url: '/ctlg_task_stage', roles: []},
								{icon: '', text: 'Состояния задачи', url: '/ctlg_task_state', roles: []},
								{icon: '', text: 'Статусы работ', url: '/ctlg_work_state', roles: []},
								{icon: '', text: 'Статусы времени', url: '/ctlg_time_state', roles: []},
								{icon: '', text: 'Статусы задач заказчиков', url: '/ctlg_customer_task_state', roles: []},
								{icon: '', text: 'Статусы договоров', url: '/ctlg_contract_state', roles: []},
								{icon: '', text: 'Статусы документов по ТЗ', url: '/ctlg_technical_task_state', roles: []},
								{icon: '', text: 'Статусы работ по ТЗ', url: '/ctlg_technical_task_work_state', roles: []},
								{icon: '', text: 'Статусы актов', url: '/ctlg_completion_act_state', roles: []},
								{icon: '', text: 'Статусы счетов', url: '/ctlg_invoice_state', roles: []},
								{icon: '', text: 'Типы истории', url: '/ctlg_history_type', roles: []},
								{icon: '', text: 'Типы задач', url: '/ctlg_task_type', roles: []},
								{icon: '', text: 'Из-за кого изменилась плановая дата', url: '/ctlg_plan_date_change_side', roles: []},
								{icon: '', text: 'Фильтры', url: '/ctlg_filter', roles: []},
								{icon: '', text: 'Сортировки', url: '/ctlg_order_by', roles: []},
],},

                ],
            }
        },
    }
</script>
