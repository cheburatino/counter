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

									{icon: 'image/system.png', text: 'i18n_menu.system', url: '/system', roles: []},

									{icon: 'image/task.svg', text: 'i18n_menu.task', url: '/task', roles: []},

									{icon: 'image/work.png', text: 'i18n_menu.work', url: '/work', roles: ['admin']},

									{icon: 'image/time.svg', text: 'i18n_menu.time', url: '/time', roles: ['admin']},

									{icon: 'image/meeting.svg', text: 'i18n_menu.meeting', url: '/meeting', roles: []},
{isFolder: true, icon: 'image/crm.png', text: 'CRM', roles: ['admin'], linkList: 								[
								{icon: '', text: '????????????????', url: '/company', roles: []},
								{icon: '', text: '????.????????', url: '/legal_entity', roles: []},
								{icon: '', text: '????????????????', url: '/contact', roles: []},
								{icon: '', text: '????????????????', url: '/contract', roles: []},
								{icon: '', text: '????', url: '/technical_task', roles: []},
								{icon: '', text: '????????', url: '/work_time_sheet', roles: []},
								{icon: '', text: '????????', url: '/completion_act', roles: []},
								{icon: '', text: '??????????', url: '/invoice', roles: []},
								{icon: '', text: '??????????????', url: '/payment', roles: []},
],},
{isFolder: true, icon: 'image/catalog.svg', text: '??????????????????????', roles: ['admin'], linkList: 								[
								{icon: 'image/user.svg', text: '????????????????????????', url: '/users', roles: []},
								{icon: '', text: '?????????????? ????????????', url: '/ctlg_meeting_state', roles: []},
								{icon: '', text: '?????????????? ????????????', url: '/ctlg_system_state', roles: []},
								{icon: '', text: '?????????? ????????????', url: '/ctlg_task_stage', roles: []},
								{icon: '', text: '?????????????????? ????????????', url: '/ctlg_task_state', roles: []},
								{icon: '', text: '?????????????? ??????????', url: '/ctlg_work_state', roles: []},
								{icon: '', text: '?????????????? ??????????????', url: '/ctlg_time_state', roles: []},
								{icon: '', text: '?????????????? ??????????????????', url: '/ctlg_contract_state', roles: []},
								{icon: '', text: '?????????????? ???????????????????? ???? ????', url: '/ctlg_technical_task_state', roles: []},
								{icon: '', text: '?????????????? ?????????? ???? ????', url: '/ctlg_technical_task_work_state', roles: []},
								{icon: '', text: '?????????????? ??????????', url: '/ctlg_completion_act_state', roles: []},
								{icon: '', text: '?????????????? ????????????', url: '/ctlg_invoice_state', roles: []},
								{icon: '', text: '???????? ??????????????', url: '/ctlg_history_type', roles: []},
								{icon: '', text: '???????? ??????????', url: '/ctlg_task_type', roles: []},
								{icon: '', text: '??????????????', url: '/ctlg_filter', roles: []},
								{icon: '', text: '????????????????????', url: '/ctlg_order_by', roles: []},
],},

                ],
            }
        },
    }
</script>
