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

									{icon: 'image/sprint.svg', text: 'i18n_menu.sprint', url: '/sprint', roles: ['admin', 'specialist', 'customer']},

									{icon: 'image/system.svg', text: 'i18n_menu.system', url: '/system', roles: ['admin', 'specialist', 'customer']},

									{icon: 'image/request.svg', text: 'i18n_menu.request', url: '/request', roles: ['admin', 'specialist', 'customer']},

									{icon: 'image/functional_requirement.svg', text: 'i18n_menu.functional_requirement', url: '/functional_requirement', roles: ['admin', 'specialist', 'customer']},

									{icon: 'image/task.svg', text: 'i18n_menu.task', url: '/task', roles: ['admin', 'specialist']},

									{icon: 'image/bug.png', text: 'i18n_menu.bug', url: '/bug', roles: ['admin', 'customer', 'specialist']},

									{icon: 'image/company.svg', text: 'i18n_menu.company', url: '/company', roles: ['admin']},

									{icon: 'image/counterparty.svg', text: 'i18n_menu.counterparty', url: '/counterparty', roles: ['admin']},

									{icon: 'image/contract.svg', text: 'i18n_menu.contract', url: '/contract', roles: ['admin']},

									{icon: 'image/technical_task.svg', text: 'i18n_menu.technical_task', url: '/technical_task', roles: ['admin']},

									{icon: 'image/completion_act.png', text: 'i18n_menu.completion_act', url: '/completion_act', roles: ['admin']},

									{icon: 'image/invoice.svg', text: 'i18n_menu.invoice', url: '/invoice', roles: ['admin']},

									{icon: 'image/payment.png', text: 'i18n_menu.payment', url: '/payment', roles: ['admin']},
{isFolder: true, icon: 'image/catalog.svg', text: 'Справочники', roles: ['admin'], linkList: 								[
								{icon: 'image/user.svg', text: 'Пользователи', url: '/users', roles: []},
								{icon: '', text: 'Статусы запросов', url: '/ctlg_request_state', roles: []},
								{icon: '', text: 'Приоритеты запросов', url: '/ctlg_request_priority', roles: []},
								{icon: '', text: 'Статусы функциональных требований', url: '/ctlg_functional_requirement_state', roles: []},
								{icon: '', text: 'Роли специалистов в функциональных требованиях', url: '/ctlg_functional_requirement_specialist_role', roles: []},
								{icon: '', text: 'Статусы цифровых решений', url: '/ctlg_digital_solution_state', roles: []},
								{icon: '', text: 'Роли специалистов в цифровых решениях', url: '/ctlg_digital_solution_specialist_role', roles: []},
								{icon: '', text: 'Типы задач', url: '/ctlg_task_type', roles: []},
								{icon: '', text: 'Статусы задач', url: '/ctlg_task_state', roles: []},
								{icon: '', text: 'Роли в задачах', url: '/ctlg_task_role', roles: []},
								{icon: '', text: 'Статусы дел', url: '/ctlg_work_state', roles: []},
								{icon: '', text: 'Роли специалистов в делах', url: '/ctlg_work_specialist_role', roles: []},
								{icon: '', text: 'Статусы задач заказчиков', url: '/ctlg_customer_task_state', roles: []},
								{icon: '', text: 'Статусы багов', url: '/ctlg_bug_state', roles: []},
								{icon: '', text: 'Статусы договоров', url: '/ctlg_contract_state', roles: []},
								{icon: '', text: 'Статусы технических заданий', url: '/ctlg_technical_task_state', roles: []},
								{icon: '', text: 'Статусы актов', url: '/ctlg_completion_act_state', roles: []},
								{icon: '', text: 'Статусы счетов', url: '/ctlg_invoice_state', roles: []},
],},

                ],
            }
        },
    }
</script>
