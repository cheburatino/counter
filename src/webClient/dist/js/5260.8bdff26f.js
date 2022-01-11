"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[5260],{5260:(t,e,l)=>{l.r(e),l.d(e,{default:()=>k});var i=l(34182);const a={class:"row q-mt-sm q-col-gutter-sm"},s={class:"col-md-2 col-sm-4 col-xs-6"},o={class:"col-md-2 col-sm-4 col-xs-6"},d={class:"col-md-2 col-sm-4 col-xs-6"},r=(0,i._)("img",{src:"image/bug.png",alt:""},null,-1),n=(0,i.Uk)();function u(t,e,l,u,m,c){const p=(0,i.up)("comp-breadcrumb"),g=(0,i.up)("comp-fld-ref-search"),_=(0,i.up)("q-avatar"),f=(0,i.up)("q-item-section"),h=(0,i.up)("router-link"),w=(0,i.up)("q-item-label"),S=(0,i.up)("q-badge"),b=(0,i.up)("comp-item-dropdown-btn"),W=(0,i.up)("comp-doc-list"),k=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(k,{padding:!l.isOpenInDialog},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(p,{key:0,class:"text-capitalize",list:[{label:t.$t("bug.name_plural"),docType:"bug"}]},null,8,["list"])),(0,i._)("div",a,[(0,i._)("div",s,[(0,i.Wm)(g,{dense:"",outlined:"",pgMethod:"ctlg_work_state_list",label:"",item:m.filterCtlgWorkStateTitle,itemId:m.filterCtlgWorkStateId,ext:{isClearable:!0},onUpdate:c.updateFilterCtlgWorkState,onClear:c.updateFilterCtlgWorkState,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["item","itemId","onUpdate","onClear"])]),(0,i._)("div",o,[(0,i.Wm)(g,{dense:"",outlined:"",pgMethod:"system_list",label:"",item:m.filterSystemTitle,itemId:m.filterSystemId,ext:{isClearable:!0},onUpdate:c.updateFilterSystem,onClear:c.updateFilterSystem,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["item","itemId","onUpdate","onClear"])]),(0,i._)("div",d,[(0,i.Wm)(g,{dense:"",outlined:"",pgMethod:"digital_solution_list",label:"",item:m.filterDigitalSolutionTitle,itemId:m.filterDigitalSolutionId,ext:{isClearable:!0},onUpdate:c.updateFilterDigitalSolution,onClear:c.updateFilterDigitalSolution,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["item","itemId","onUpdate","onClear"])])]),(0,i.Wm)(W,{ref:"docList",listTitle:t.$t("bug.name_plural"),listDeletedTitle:t.$t("bug.name_plural_deleted"),"pg-method":"bug_list","list-sort-data":m.listSortData,"list-filter-data":m.listFilterData,newDocUrl:c.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{listItem:(0,i.w5)((({item:l})=>[(0,i.Wm)(h,{to:c.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{rounded:""},{default:(0,i.w5)((()=>[r])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,{lines:"1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.title),1)])),_:2},1024),(0,i.Wm)(w,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.state_title),1)])),_:2},1024),n,(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.system_title),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(w,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Плановая дата завершения: "+(0,i.zw)(l.plan_end_date),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,i.Wm)(f,{top:"",side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"bug_update",onEdit:e=>t.$router.push(`${c.currentUrl}${l.id}`),onReloadList:e[0]||(e[0]=e=>t.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"])])),_:1},8,["padding"])}l(10071),l(66016);var m=l(43015);const c={props:["isOpenInDialog","ext"],mixins:[m.Z],computed:{currentUrl:()=>"/bug/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}],filterCtlgWorkStateTitle:null,filterCtlgWorkStateId:null,filterSystemTitle:null,filterSystemId:null,filterDigitalSolutionTitle:null,filterDigitalSolutionId:null}},methods:{updateFilterCtlgWorkState(t){this.$refs.docList.changeItemList({state:t?t.id:null}),t&&this.$utils.callPgMethod("ctlg_work_state_get_by_id",{id:t.id},(t=>{this.filterCtlgWorkStateTitle=t.title}))},updateFilterSystem(t){this.$refs.docList.changeItemList({system_id:t?t.id:null}),t&&this.$utils.callPgMethod("system_get_by_id",{id:t.id},(t=>{this.filterSystemTitle=t.title}))},updateFilterDigitalSolution(t){this.$refs.docList.changeItemList({digital_solution_id:t?t.id:null}),t&&this.$utils.callPgMethod("digital_solution_get_by_id",{id:t.id},(t=>{this.filterDigitalSolutionTitle=t.title}))}},mounted(){const t=new URLSearchParams(window.location.search);if(t.has("state")){let e=+t.get("state");e&&this.updateFilterCtlgWorkState({id:e})}if(t.has("system_id")){let e=+t.get("system_id");e&&this.updateFilterSystem({id:e})}if(t.has("digital_solution_id")){let e=+t.get("digital_solution_id");e&&this.updateFilterDigitalSolution({id:e})}}};var p=l(74260),g=l(24379),_=l(52035),f=l(75096),h=l(2350),w=l(69721),S=l(7518),b=l.n(S);const W=(0,p.Z)(c,[["render",u]]),k=W;b()(c,"components",{QPage:g.Z,QItemSection:_.Z,QAvatar:f.Z,QItemLabel:h.Z,QBadge:w.Z})}}]);