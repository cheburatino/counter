<template>
  <q-drawer :modelValue="leftSide" side="left" bordered show-if-above
            content-class="bg-grey-2"
            :width="240" @hide="$emit('hide')">
    <q-scroll-area class="fit">
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
                  <q-item-label>{{link.text.includes("i18n_") ? $t(link.text.replace("i18n_", "")) : link.text}}</q-item-label>
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
                      {{link.text.includes("i18n_") ? $t(link.text.replace("i18n_", "")) : link.text}}
                    </q-item-section>
                </template>
                <span v-for="link1 in link.linkList" :key="link1.text" >
                  <q-item v-if="isRole(link1.roles)" :inset-level="1" v-ripple clickable :to="link1.url"
                          exact>
                  <q-item-section>
                    <q-item-label>{{link1.text.includes("i18n_") ? $t(link1.text.replace("i18n_", "")) : link1.text}}</q-item-label>
                  </q-item-section>
                </q-item>
                </span>
              </q-expansion-item>
            </span>
        </div>
      </q-list>
    </q-scroll-area>
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
									{icon: 'image/request.svg', text: 'i18n_menu.request', url: '/request', roles: []},

									{icon: 'image/functional_requirement.svg', text: 'i18n_menu.functional_requirement', url: '/functional_requirement', roles: []},

									{icon: 'image/digital_solution.svg', text: 'i18n_menu.digital_solution', url: '/digital_solution', roles: []},

									{icon: 'image/task.svg', text: 'i18n_menu.task', url: '/task', roles: []},

									{icon: 'image/meeting.svg', text: 'i18n_menu.meeting', url: '/meeting', roles: []},

									{icon: 'image/time_fast.svg', text: 'i18n_menu.time', url: '/time', roles: []},

									{icon: 'image/sprint.svg', text: 'i18n_menu.sprint', url: '/sprint', roles: []},

									{icon: 'image/system.svg', text: 'i18n_menu.system', url: '/system', roles: []},

									{icon: 'image/company.svg', text: 'i18n_menu.company', url: '/company', roles: []},

									{icon: 'image/man.svg', text: 'i18n_menu.man', url: '/man', roles: []},

									{icon: 'image/counterparty.svg', text: 'i18n_menu.counterparty', url: '/counterparty', roles: []},

									{icon: 'image/contract.svg', text: 'i18n_menu.contract', url: '/contract', roles: []},

									{icon: 'image/invoice.svg', text: 'i18n_menu.invoice', url: '/invoice', roles: []},
{isFolder: true, icon: 'image/catalog.svg', text: 'Справочники', roles: [], linkList: 								[
								{icon: 'image/user.svg', text: 'Пользователи', url: '/users', roles: ['admin']},
								{icon: '', text: 'Компетенции', url: '/ctlg_electron_skill', roles: []},
								{icon: '', text: 'Статусы запросов', url: '/ctlg_request_state', roles: []},
								{icon: '', text: 'Статусы функциональных требований', url: '/ctlg_functional_requirement_state', roles: []},
								{icon: '', text: 'Статусы цифровых решений', url: '/ctlg_digital_solution_state', roles: []},
								{icon: '', text: 'Типы задач', url: '/ctlg_task_type', roles: []},
								{icon: '', text: 'Статусы задач', url: '/ctlg_task_state', roles: []},
],},

                ],
            }
        },
    }
</script>
