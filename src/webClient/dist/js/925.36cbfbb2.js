(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[925],{20925:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>_});var a=l(34182);const i={class:"row q-mt-sm q-col-gutter-sm"},s={class:" col-md-2 col-sm-4 col-xs-6"},d=(0,a.Wm)("img",{src:"image/task.svg",alt:""},null,-1);function r(t,e,l,r,o,n){const u=(0,a.up)("comp-breadcrumb"),c=(0,a.up)("comp-fld-ref-search"),m=(0,a.up)("q-avatar"),p=(0,a.up)("q-item-section"),g=(0,a.up)("router-link"),k=(0,a.up)("q-item-label"),f=(0,a.up)("q-badge"),_=(0,a.up)("comp-item-dropdown-btn"),w=(0,a.up)("comp-doc-list"),h=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(h,{padding:!l.isOpenInDialog},{default:(0,a.w5)((()=>[l.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(u,{key:0,class:"text-capitalize",list:[{label:t.$t("task.name_plural"),docType:"task"}]},null,8,["list"])),(0,a.Wm)("div",i,[(0,a.Wm)("div",s,[(0,a.Wm)(c,{dense:"",outlined:"",pgMethod:"ctlg_task_state_list",label:"",item:o.filterCtlgTaskStateTitle,itemId:o.filterCtlgTaskStateId,ext:{isClearable:!0},onUpdate:n.updateFilterCtlgTaskState,onClear:n.updateFilterCtlgTaskState,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["item","itemId","onUpdate","onClear"])])]),(0,a.Wm)(w,{ref:"docList",listTitle:t.$t("task.name_plural"),listDeletedTitle:t.$t("task.name_plural_deleted"),"pg-method":"task_list","list-sort-data":o.listSortData,"list-filter-data":o.listFilterData,newDocUrl:n.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{listItem:(0,a.w5)((({item:l})=>[(0,a.Wm)(g,{to:n.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{rounded:""},{default:(0,a.w5)((()=>[d])),_:1})])),_:1})])),_:2},1032,["to"]),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(l.title),1)])),_:2},1024),(0,a.Wm)(k,{caption:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"orange"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(l.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)(p,{top:"",side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"task_update",onEdit:e=>t.$router.push(`${n.currentUrl}${l.id}`),onReloadList:e[1]||(e[1]=e=>t.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"])])),_:1},8,["padding"])}l(10071),l(17965),l(67280);var o=l(43015);const n={props:["isOpenInDialog","ext"],mixins:[o.Z],computed:{currentUrl:()=>"/task/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}],filterCtlgTaskStateTitle:null,filterCtlgTaskStateId:null}},methods:{updateFilterCtlgTaskState(t){this.$refs.docList.changeItemList({state:t?t.id:null}),t&&this.$utils.callPgMethod("ctlg_task_state_get_by_id",{id:t.id},(t=>{this.filterCtlgTaskStateTitle=t.title}))}},mounted(){const t=new URLSearchParams(window.location.search);if(t.has("state")){let e=+t.get("state");e&&this.updateFilterCtlgTaskState({id:e})}}};var u=l(24379),c=l(52035),m=l(75096),p=l(2350),g=l(69721),k=l(7518),f=l.n(k);n.render=r;const _=n;f()(n,"components",{QPage:u.Z,QItemSection:c.Z,QAvatar:m.Z,QItemLabel:p.Z,QBadge:g.Z})}}]);