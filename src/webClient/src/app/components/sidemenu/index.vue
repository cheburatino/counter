<template>
  <q-drawer :modelValue="leftSide" side="left" bordered show-if-above
            content-class="bg-grey-2"
            :width="240" @hide="$emit('hide')">
<!--    <q-scroll-area class="fit">-->
      <q-list padding>
        <div v-for="link in menuLinks" :key="link.text">
            <span v-if="isRole(link.roles)">
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
                  <q-item v-if="isRole(link1.roles)" :inset-level="1" v-ripple clickable :to="link1.url"
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
              return (roles) => {
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
                menuLinks: [
                    // for codeGenerate ##sidemenu_slot1

									{icon: 'image/task.svg', text: 'i18n_menu.task', url: '/task', roles: ['admin', 'specialist']},

									{icon: 'image/meeting.svg', text: 'i18n_menu.meeting', url: '/meeting', roles: ['admin', 'specialist']},
{isFolder: true, icon: 'image/development.png', text: 'Разработка', roles: ['admin'], linkList: 								[
								{icon: '', text: 'Системы', url: '/system', roles: []},
								{icon: '', text: 'Цифровые решения', url: '/digital_solution', roles: []},
								{icon: '', text: 'Задачи разработки', url: '/development_task', roles: []},
								{icon: '', text: 'Задачи заказчика', url: '/customer_task', roles: []},
],},
{isFolder: true, icon: 'image/crm.png', text: 'CRM', roles: ['admin'], linkList: 								[
								{icon: '', text: 'Компании', url: '/company', roles: []},
								{icon: '', text: 'Контакты', url: '/man', roles: []},
								{icon: '', text: 'Контрагенты', url: '/counterparty', roles: []},
								{icon: '', text: 'Договоры', url: '/contract', roles: []},
								{icon: '', text: 'ТЗ', url: '/technical_task', roles: []},
								{icon: '', text: 'Акты', url: '/completion_act', roles: []},
								{icon: '', text: 'Счета', url: '/invoice', roles: []},
								{icon: '', text: 'Платежи', url: '/payment', roles: []},
],},
{isFolder: true, icon: 'image/catalog.svg', text: 'Справочники', roles: ['admin'], linkList: 								[
								{icon: 'image/user.svg', text: 'Пользователи', url: '/users', roles: []},
								{icon: '', text: 'Статусы встреч', url: '/ctlg_meeting_state', roles: []},
								{icon: '', text: 'Статусы цифровых решений', url: '/ctlg_digital_solution_state', roles: []},
								{icon: '', text: 'Статусы задач', url: '/ctlg_task_state', roles: []},
								{icon: '', text: 'Статусы задач разработки', url: '/ctlg_development_task_state', roles: []},
								{icon: '', text: 'Статусы задач заказчиков', url: '/ctlg_customer_task_state', roles: []},
								{icon: '', text: 'Статусы договоров', url: '/ctlg_contract_state', roles: []},
								{icon: '', text: 'Статусы технических заданий', url: '/ctlg_technical_task_state', roles: []},
								{icon: '', text: 'Статусы работ по ТЗ', url: '/ctlg_technical_task_work_state', roles: []},
								{icon: '', text: 'Статусы актов', url: '/ctlg_completion_act_state', roles: []},
								{icon: '', text: 'Статусы счетов', url: '/ctlg_invoice_state', roles: []},
								{icon: '', text: 'Типы задач разработки', url: '/ctlg_development_task_type', roles: []},
								{icon: '', text: 'Типы задач', url: '/ctlg_task_type', roles: []},
								{icon: '', text: 'Фильтры', url: '/ctlg_filter', roles: []},
								{icon: '', text: 'Сортировки', url: '/ctlg_order_by', roles: []},
],},

                ],
            }
        },
    }
</script>
