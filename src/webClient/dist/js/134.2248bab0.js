"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[134],{1181:(e,l,t)=>{t.d(l,{Z:()=>b});var o=t(75305);const a={class:"q-px-lg q-pb-md"},i={style:{color:"grey","font-size":"0.8rem"}},s={key:0,class:"q-pa-md row justify-center"},d=(0,o.Uk)(" было "),n=(0,o.Uk)(" изменено на ");function u(e,l,t,u,r,m){const c=(0,o.up)("q-timeline-entry"),p=(0,o.up)("q-item-section"),w=(0,o.up)("q-card"),_=(0,o.up)("q-timeline"),y=(0,o.up)("q-card-section"),g=(0,o.up)("q-dialog"),f=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(g,{modelValue:u.isShowDialog,"onUpdate:modelValue":l[0]||(l[0]=e=>u.isShowDialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{style:{"max-width":"100vw","min-width":"50vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o.Wm)(_,{color:"secondary",layout:u.timelineLayout},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{heading:"",tag:"h6"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(t.item.title),1)])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.historyList,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.id,icon:e.icon,color:e.color},{title:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("div",null,(0,o.zw)(e.type),1),(0,o._)("div",i,(0,o.zw)(e.user_full_name),1)])),_:2},1024)])),subtitle:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(new Date(e.datetime).toLocaleDateString("ru",{weekday:"short",day:"numeric",month:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),1)])),default:(0,o.w5)((()=>[e.old_value?((0,o.wg)(),(0,o.iD)("div",s,[d,(0,o.Wm)(w,{class:"col-12 q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.old_value),1)])),_:2},1024),n,(0,o.Wm)(w,{class:"col-12 q-pa-md",style:{"background-color":"rgba(33,186,69,0.1)"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.new_value),1)])),_:2},1024)])):(0,o.kq)("",!0)])),_:2},1032,["icon","color"])))),128))])),_:1},8,["layout"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(f,{round:t.round,rounded:t.rounded,push:"",icon:"history",color:"accent",label:t.label,onClick:l[1]||(l[1]=e=>u.open())},null,8,["round","rounded","label"])],64)}var r=t(48825);const m={props:["historyList","item","label","rounded","round"],setup(e){const l=(0,o.iH)(!1),t=(0,r.Z)(),a=(0,o.Fl)((()=>t.screen.lt.sm?"dense":t.screen.lt.md?"comfortable":"loose")),i=()=>{l.value=!0};return{isShowDialog:l,open:i,timelineLayout:a}}};var c=t(74260),p=t(46778),w=t(10151),_=t(25589),y=t(1432),g=t(23424),f=t(52035),k=t(2165),v=t(7518),h=t.n(v);const W=(0,c.Z)(m,[["render",u]]),b=W;h()(m,"components",{QDialog:p.Z,QCard:w.Z,QCardSection:_.Z,QTimeline:y.Z,QTimelineEntry:g.Z,QItemSection:f.Z,QBtn:k.Z})},70134:(e,l,t)=>{t.r(l),t.d(l,{default:()=>ne});var o=t(75305);const a={class:"q-pa-md"},i={key:0},s={key:1},d={class:"row justify-start items-center"},n=(0,o._)("img",{src:"image/task.svg",alt:""},null,-1),u=(0,o.Uk)("    "),r={class:"row justify-center items-center"},m=(0,o._)("img",{src:"image/system.svg",alt:""},null,-1);function c(e,l,t,c,p,w){const _=(0,o.up)("comp-breadcrumb"),y=(0,o.up)("task-add-button"),g=(0,o.up)("q-space"),f=(0,o.up)("q-th"),k=(0,o.up)("q-td"),v=(0,o.up)("q-avatar"),h=(0,o.up)("q-item-label"),W=(0,o.up)("q-item-section"),b=(0,o.up)("q-item"),Z=(0,o.up)("timeline-dialog-button"),q=(0,o.up)("task-delete-button"),D=(0,o.up)("q-btn"),Q=(0,o.up)("q-tr"),C=(0,o.up)("q-table"),I=(0,o.up)("q-card-section"),U=(0,o.up)("q-card"),z=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(z,{padding:!t.isOpenInDialog},{default:(0,o.w5)((()=>[t.isOpenInDialog?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(_,{key:0,class:"text-capitalize",list:[{label:e.$t("task.name_plural"),docType:"task"}]},null,8,["list"])),(0,o.Wm)(U,{style:{"min-width":"70vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("div",a,[(0,o.Wm)(C,{title:"",rows:c.taskList,columns:c.columns,"row-key":"id",filter:c.filter,"filter-method":c.filterMethod,"rows-per-page-options":[10,25,50,100]},{top:(0,o.w5)((()=>[(0,o.Wm)(y,{onReload:c.reload},null,8,["onReload"]),(0,o.Wm)(g)])),"header-cell-delete":(0,o.w5)((e=>[(0,o.Wm)(f,{props:e,onClick:c.deletedFilter,style:{cursor:"pointer"}},{default:(0,o.w5)((()=>[c.deleted?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",i,(0,o.zw)(e.col.label),1)),c.deleted?((0,o.wg)(),(0,o.iD)("div",s," Восстановить ")):(0,o.kq)("",!0)])),_:2},1032,["props","onClick"])])),body:(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e,style:(0,o.j5)(!0===e.row.today?"background-color: #F2C037":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{key:"id",props:e,style:{width:"0"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.row.id),1)])),_:2},1032,["props"]),(0,o.Wm)(k,{key:"title",props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{to:/task/+e.row.id,style:{cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.Wm)(v,{rounded:"",size:"sm"},{default:(0,o.w5)((()=>[n])),_:1}),u,(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.row.title),1)])),_:2},1024)])])),_:2},1024)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,o.Wm)(k,{key:"type",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.row.options.title.type_title),1)])),_:2},1032,["props"]),(0,o.Wm)(k,{key:"state",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.row.options.title.state_title),1)])),_:2},1032,["props"]),(0,o.Wm)(k,{key:"stage",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.row.options.title.stage_title),1)])),_:2},1032,["props"]),(0,o.Wm)(k,{key:"system",props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{to:/system/+e.row.system_id,style:{cursor:"pointer"},align:"left"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.Wm)(v,{rounded:"",size:"sm"},{default:(0,o.w5)((()=>[m])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.row.options.title.system_title),1)])),_:2},1024)])])),_:2},1024)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,o.Wm)(k,{key:"history",props:e,"auto-width":""},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{historyList:e.row.history,round:!0,item:e.row},null,8,["historyList","item"])])),_:2},1032,["props"]),(0,o.Wm)(k,{key:"delete",props:e,"auto-width":""},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{item:e.row,onReload:l[0]||(l[0]=e=>c.reload())},null,8,["item"])])),_:2},1032,["props"]),(0,o.Wm)(k,{key:"log",props:e,"auto-width":""},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{onClick:l=>c.logg(e.row),icon:"info"},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props","style"])])),_:1},8,["rows","columns","filter","filter-method"])])])])),_:1})])),_:1})])),_:1},8,["padding"])}var p=t(43015),w=t(91589),_=t(1181);const y=(0,o._)("div",{class:"text-h6"},"Удалить задачу",-1),g=(0,o._)("strong",null,"Внимание!",-1),f=(0,o._)("p",null,null,-1),k=(0,o._)("p",null,"Вы точно хотите удалить задачу:",-1),v=(0,o._)("div",{class:"text-h6"},"Восстановить задачу",-1),h=(0,o._)("strong",null,"Внимание!",-1),W=(0,o._)("p",null,null,-1),b=(0,o._)("p",null,"Вы точно хотите восстановить задачу:",-1),Z={align:"center"},q=(0,o.Uk)("Удалить"),D=(0,o.Uk)("Восстановить");function Q(e,l,t,a,i,s){const d=(0,o.up)("q-card-section"),n=(0,o.up)("q-btn"),u=(0,o.up)("q-card-actions"),r=(0,o.up)("q-card"),m=(0,o.up)("q-dialog"),c=(0,o.up)("q-tooltip"),p=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m,{modelValue:a.deleteDialog,"onUpdate:modelValue":l[0]||(l[0]=e=>a.deleteDialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{style:{"min-width":"20vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o._)("div",null,[g,f,k,(0,o._)("p",null,(0,o.zw)(t.item.title)+"?",1)])])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{align:"right",class:"text-primary"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(n,{flat:"",label:"Отмена"},null,512),[[p]]),(0,o.Wm)(n,{label:"Удалить",onClick:a.deleteTask,color:"positive"},null,8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(m,{modelValue:a.restoreDialog,"onUpdate:modelValue":l[1]||(l[1]=e=>a.restoreDialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{style:{"min-width":"20vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o._)("div",null,[h,W,b,(0,o._)("p",null,(0,o.zw)(t.item.title)+"?",1)])])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{align:"right",class:"text-primary"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(n,{flat:"",label:"Отмена"},null,512),[[p]]),(0,o.Wm)(n,{label:"Восстановить",onClick:a.restoreTask,color:"positive"},null,8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",Z,[t.item.deleted?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(n,{key:0,icon:"delete",round:"",push:"",size:"md",onClick:l[2]||(l[2]=e=>a.openDeleteDialog())},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:(0,o.w5)((()=>[q])),_:1})])),_:1})),t.item.deleted?((0,o.wg)(),(0,o.j4)(n,{key:1,icon:"restore_from_trash",round:"",push:"",size:"md",onClick:l[3]||(l[3]=e=>a.openRestoreDialog())},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:(0,o.w5)((()=>[D])),_:1})])),_:1})):(0,o.kq)("",!0)])],64)}var C=t(61959),I=t(48825);const U={props:["item","currentUser"],setup(e,{emit:l}){const t=(0,C.iH)(!1),o=()=>t.value=!0,a=(0,C.iH)(!1),i=()=>a.value=!0,s=(0,I.Z)(),d=()=>{t.value=!0,w.Z.callPgMethod("task_update",{id:e.item.id,deleted:!0},(e=>{l("reload"),t.value=!1,s.notify({type:"info",message:"Задача удалена"})}))},n=()=>{a.value=!0,w.Z.callPgMethod("task_update",{id:e.item.id,deleted:!1},(e=>{l("reload"),a.value=!1,s.notify({type:"positive",message:"Задача восстановлена"})}))};return{deleteDialog:t,restoreDialog:a,openDeleteDialog:o,openRestoreDialog:i,deleteTask:d,restoreTask:n}}};var z=t(74260),T=t(46778),H=t(10151),x=t(25589),V=t(99367),S=t(2165),j=t(5363),M=t(60677),P=t(7518),L=t.n(P);const F=(0,z.Z)(U,[["render",Q]]),B=F;L()(U,"components",{QDialog:T.Z,QCard:H.Z,QCardSection:x.Z,QCardActions:V.Z,QBtn:S.Z,QTooltip:j.Z}),L()(U,"directives",{ClosePopup:M.Z});const A=(0,o._)("div",{class:"text-h6"},"Добавить задачу",-1);function R(e,l,t,a,i,s){const d=(0,o.up)("q-card-section"),n=(0,o.up)("q-input"),u=(0,o.up)("comp-fld-ref-search"),r=(0,o.up)("q-btn"),m=(0,o.up)("q-card-actions"),c=(0,o.up)("q-card"),p=(0,o.up)("q-dialog"),w=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(p,{modelValue:a.isShowDialog,"onUpdate:modelValue":l[5]||(l[5]=e=>a.isShowDialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{style:{"min-width":"20vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[A])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("div",null,[a.systemId?((0,o.wg)(),(0,o.j4)(n,{key:0,modelValue:a.taskTitle,"onUpdate:modelValue":l[0]||(l[0]=e=>a.taskTitle=e),autogrow:"",label:"Название",class:"q-mb-md col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue"])):(0,o.kq)("",!0)]),(0,o._)("div",null,[a.systemId?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:0,outlined:"",pgMethod:"system_list",label:e.$t("task.system_id"),item:a.system,itemId:a.systemId,ext:{},onUpdate:l[1]||(l[1]=e=>a.systemId=e.id),onClear:l[2]||(l[2]=e=>a.systemId=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])),a.systemId?((0,o.wg)(),(0,o.j4)(u,{key:1,rounded:"",dense:"",pgMethod:"system_list",label:e.$t("task.system_id"),item:a.system,itemId:a.systemId,ext:{},onUpdate:l[3]||(l[3]=e=>a.systemId=e.id),onClear:l[4]||(l[4]=e=>a.systemId=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])):(0,o.kq)("",!0)])])])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[a.systemId&&a.taskTitle?((0,o.wg)(),(0,o.j4)(m,{key:0,align:"right",class:"text-primary"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(r,{flat:"",label:"Отмена"},null,512),[[w]]),(0,o.Wm)(r,{label:"Создать",onClick:a.addTask,color:"secondary"},null,8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",null,[(0,o.Wm)(r,{class:"q-mr-md",icon:"add",size:"md",round:"",push:"",color:"secondary",onClick:l[6]||(l[6]=e=>a.open())})])],64)}const Y={props:["currentUser"],setup(e,{emit:l}){const t=(0,C.iH)(!1),o=()=>t.value=!0,a=(0,C.iH)(""),i=(0,C.iH)(null),s=(0,C.iH)(null),d=(0,C.iH)([]),n=()=>{w.Z.callPgMethod("system_list",{deleted:!1,order_by:"id desc"},(e=>{d.value=e}))};n();const u=(0,I.Z)(),r=()=>{t.value=!0,w.Z.callPgMethod("task_update",{id:-1,title:a.value,system_id:s.value,stage_id:1},(e=>{l("reload"),a.value="",s.value=null,t.value=!1,u.notify({type:"positive",message:"Задача создана"})}))};return{isShowDialog:t,open:o,taskTitle:a,system:i,systemId:s,addTask:r,systemList:d}}};var E=t(34842);const O=(0,z.Z)(Y,[["render",R]]),$=O;L()(Y,"components",{QDialog:T.Z,QCard:H.Z,QCardSection:x.Z,QInput:E.Z,QCardActions:V.Z,QBtn:S.Z}),L()(Y,"directives",{ClosePopup:M.Z});const K={props:["isOpenInDialog","ext"],components:{TaskAddButton:$,TaskDeleteButton:B,TimelineDialogButton:_.Z},mixins:[p.Z],computed:{currentUrl:()=>"/task/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}]}},methods:{},mounted(){},setup(e,{emit:l}){const t=(0,o.iH)([]),a=(0,o.iH)([]),i=(0,o.iH)(""),s=(0,o.iH)("all"),d=(0,o.iH)([{name:"id",align:"center",label:"ID",field:"id",sortable:!0},{name:"title",align:"left",label:"Название",field:"title",sortable:!0},{name:"stage",align:"left",label:"Этап",field:"stage",sortable:!0},{name:"system",align:"center",label:"Система",field:"system",sortable:!0},{name:"history",align:"center",label:"История",field:"history"},{name:"delete",align:"center",label:"Удалить",field:"delete"},{name:"log",align:"center",label:"лог",field:"log"}]),n=()=>{},u=()=>{w.Z.callPgMethod("task_list",{deleted:!1,order_by:"id desc"},(e=>{s.value="all",t.value=e,c.value=!1}))},r=()=>{w.Z.callPgMethod("task_list",{deleted:!1,system_id:1,order_by:"id desc"},(e=>{s.value="weare",t.value=e,c.value=!1}))},m=()=>{w.Z.callPgMethod("task_list",{deleted:!1,system_id:2,order_by:"id desc"},(e=>{s.value="counter",t.value=e,c.value=!1}))},c=(0,o.iH)(!1),p=()=>{w.Z.callPgMethod("task_list",{deleted:!c.value,order_by:"id desc"},(e=>{t.value=e,c.value=!c.value}))},_=e=>{console.log("v",e)},y=()=>{w.Z.callPgMethod("task_list",{deleted:!1,order_by:"id desc"},(e=>{t.value=e}))};return y(),{reload:y,open,columns:d,filter:i,filterMethod:n,rows:a,taskList:t,logg:_,weAreFilter:r,counterFilter:m,noFilter:u,deletedFilter:p,deleted:c,filterValue:s}}};var G=t(24379),J=t(31993),N=t(62025),X=t(24554),ee=t(92414),le=t(18186),te=t(83884),oe=t(83414),ae=t(52035),ie=t(75096),se=t(2350);const de=(0,z.Z)(K,[["render",c]]),ne=de;L()(K,"components",{QPage:G.Z,QCard:H.Z,QCardSection:x.Z,QTable:J.Z,QBtn:S.Z,QSpace:N.Z,QInput:E.Z,QIcon:X.Z,QTh:ee.Z,QTr:le.Z,QTd:te.Z,QItem:oe.Z,QItemSection:ae.Z,QAvatar:ie.Z,QItemLabel:se.Z})}}]);