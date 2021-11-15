"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[2960],{22960:(t,e,l)=>{l.r(e),l.d(e,{default:()=>w});var i=l(34182);const s={class:"row q-mt-sm q-col-gutter-sm"},r={class:"col-md-2 col-sm-4 col-xs-6"},a={class:"col-md-2 col-sm-4 col-xs-6"},d={class:"col-md-2 col-sm-4 col-xs-6"},o=(0,i._)("img",{src:"image/request.svg",alt:""},null,-1);function u(t,e,l,u,n,m){const c=(0,i.up)("comp-breadcrumb"),p=(0,i.up)("comp-fld-ref-search"),g=(0,i.up)("q-avatar"),_=(0,i.up)("q-item-section"),f=(0,i.up)("router-link"),q=(0,i.up)("q-item-label"),h=(0,i.up)("q-badge"),y=(0,i.up)("comp-item-dropdown-btn"),C=(0,i.up)("comp-doc-list"),w=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(w,{padding:!l.isOpenInDialog},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,class:"text-capitalize",list:[{label:t.$t("request.name_plural"),docType:"request"}]},null,8,["list"])),(0,i._)("div",s,[(0,i._)("div",r,[(0,i.Wm)(p,{dense:"",outlined:"",pgMethod:"ctlg_request_state_list",label:"",item:n.filterCtlgRequestStateTitle,itemId:n.filterCtlgRequestStateId,ext:{isClearable:!0},onUpdate:m.updateFilterCtlgRequestState,onClear:m.updateFilterCtlgRequestState,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["item","itemId","onUpdate","onClear"])]),(0,i._)("div",a,[(0,i.Wm)(p,{dense:"",outlined:"",pgMethod:"system_list",label:"",item:n.filterSystemTitle,itemId:n.filterSystemId,ext:{isClearable:!0},onUpdate:m.updateFilterSystem,onClear:m.updateFilterSystem,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["item","itemId","onUpdate","onClear"])]),(0,i._)("div",d,[(0,i.Wm)(p,{dense:"",outlined:"",pgMethod:"ctlg_request_priority_list",label:"",item:n.filterCtlgRequestPriorityTitle,itemId:n.filterCtlgRequestPriorityId,ext:{isClearable:!0},onUpdate:m.updateFilterCtlgRequestPriority,onClear:m.updateFilterCtlgRequestPriority,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["item","itemId","onUpdate","onClear"])])]),(0,i.Wm)(C,{ref:"docList",listTitle:t.$t("request.name_plural"),listDeletedTitle:t.$t("request.name_plural_deleted"),"pg-method":"request_list","list-sort-data":n.listSortData,"list-filter-data":n.listFilterData,newDocUrl:m.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{listItem:(0,i.w5)((({item:l})=>[(0,i.Wm)(f,{to:m.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{rounded:""},{default:(0,i.w5)((()=>[o])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Wm)(q,{lines:"1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.title),1)])),_:2},1024),(0,i.Wm)(q,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,i.Wm)(_,{top:"",side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"request_update",onEdit:e=>t.$router.push(`${m.currentUrl}${l.id}`),onReloadList:e[0]||(e[0]=e=>t.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"])])),_:1},8,["padding"])}l(10071),l(66016);var n=l(43015);const m={props:["isOpenInDialog","ext"],mixins:[n.Z],computed:{currentUrl:()=>"/request/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}],filterCtlgRequestStateTitle:null,filterCtlgRequestStateId:null,filterSystemTitle:null,filterSystemId:null,filterCtlgRequestPriorityTitle:null,filterCtlgRequestPriorityId:null}},methods:{updateFilterCtlgRequestState(t){this.$refs.docList.changeItemList({state_id:t?t.id:null}),t&&this.$utils.callPgMethod("ctlg_request_state_get_by_id",{id:t.id},(t=>{this.filterCtlgRequestStateTitle=t.title}))},updateFilterSystem(t){this.$refs.docList.changeItemList({system_id:t?t.id:null}),t&&this.$utils.callPgMethod("system_get_by_id",{id:t.id},(t=>{this.filterSystemTitle=t.title}))},updateFilterCtlgRequestPriority(t){this.$refs.docList.changeItemList({priority_id:t?t.id:null}),t&&this.$utils.callPgMethod("ctlg_request_priority_get_by_id",{id:t.id},(t=>{this.filterCtlgRequestPriorityTitle=t.title}))}},mounted(){const t=new URLSearchParams(window.location.search);if(t.has("state_id")){let e=+t.get("state_id");e&&this.updateFilterCtlgRequestState({id:e})}if(t.has("system_id")){let e=+t.get("system_id");e&&this.updateFilterSystem({id:e})}if(t.has("priority_id")){let e=+t.get("priority_id");e&&this.updateFilterCtlgRequestPriority({id:e})}}};var c=l(74260),p=l(24379),g=l(52035),_=l(75096),f=l(2350),q=l(69721),h=l(7518),y=l.n(h);const C=(0,c.Z)(m,[["render",u]]),w=C;y()(m,"components",{QPage:p.Z,QItemSection:g.Z,QAvatar:_.Z,QItemLabel:f.Z,QBadge:q.Z})}}]);