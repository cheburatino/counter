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
                  <q-item-label>{{ link.text }}</q-item-label>
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
                      {{link.text}}
                    </q-item-section>
                </template>
                <span v-for="link1 in link.linkList" :key="link1.text" >
                  <q-item v-if="isRole(link1.roles)" :inset-level="1" v-ripple clickable :to="link1.url"
                          exact>
                  <q-item-section>
                    <q-item-label>{{ link1.text }}</q-item-label>
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
									{icon: 'image/digital_solution.svg', text: 'Цифровые решения', url: '/digital_solution', roles: []},

									{icon: 'image/task.svg', text: 'Задачи', url: '/task', roles: []},

									{icon: 'image/request.svg', text: 'Запросы', url: '/request', roles: []},

									{icon: 'image/functional_requirement.svg', text: 'Функциональные требования', url: '/functional_requirement', roles: []},

									{icon: 'image/meeting.svg', text: 'Встречи', url: '/meeting', roles: []},

									{icon: 'image/time_fast.svg', text: 'Время', url: '/time', roles: []},

									{icon: 'image/sprint.svg', text: 'Спринты', url: '/sprint', roles: []},

									{icon: 'image/system.svg', text: 'Системы', url: '/system', roles: []},

									{icon: 'image/company.svg', text: 'Компании', url: '/company', roles: []},

									{icon: 'image/man.svg', text: 'Люди', url: '/man', roles: []},

									{icon: 'image/counterparty.svg', text: 'Контрагенты', url: '/counterparty', roles: []},

									{icon: 'image/contract.svg', text: 'Договоры', url: '/contract', roles: []},

									{icon: 'image/invoice.svg', text: 'Счета', url: '/invoice', roles: []},
{isFolder: true, icon: 'image/catalog.svg', text: 'Справочники', roles: [], linkList: 								[
								{icon: 'image/user.svg', text: 'Пользователи', url: '/users', roles: ['admin']},
								{icon: '', text: 'Сотрудники', url: '/employee', roles: []},
								{icon: '', text: 'Статусы задач разработки', url: '/ctlg_dev_task_state', roles: []},
								{icon: '', text: 'Статусы запросов', url: '/ctlg_request_state', roles: []},
								{icon: '', text: 'Типы времени', url: '/ctlg_time_type', roles: []},
],},

                ],
            }
        },
    }
</script>
