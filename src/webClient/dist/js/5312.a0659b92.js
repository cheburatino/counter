"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[5312],{35312:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Oe});l(90246);var i=l(34182);const o={key:1,class:"q-mt-sm"},s={class:"row q-col-gutter-md q-mb-sm"},d={class:"col-md-4 col-sm-6 col-xs-12"},a={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"col-md-2 col-sm-3 col-xs-6"},u={class:"row q-col-gutter-md q-mb-sm"},r={class:"col-md-4 col-sm-6 col-xs-12"},m={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"row q-col-gutter-md q-mb-sm"},p={class:"col-md-8 col-sm-12 col-xs-12"},_={class:"row q-col-gutter-md q-mb-sm"},w={class:"col-md-4 col-sm-6 col-xs-12"},g={class:"row q-col-gutter-md q-mb-sm"},h={class:"col-md-4 col-sm-6 col-xs-12"},k={class:"col-md-4 col-sm-6 col-xs-12"},f={class:"row q-col-gutter-md q-mb-sm"},q={class:"col-md-4 col-sm-6 col-xs-12"},b={key:0,class:"col-md-4 col-sm-6 col-xs-12"},y={class:"row q-col-gutter-md q-mb-sm"},v={class:"col-md-4 col-sm-6 col-xs-12"},W={class:"row q-col-gutter-md q-mb-sm"},x={class:"col-md-4 col-sm-6 col-xs-12"},C={class:"row q-col-gutter-md q-mb-sm"},Z={class:"col-md-8 col-sm-12 col-xs-12"};function D(e,t,l,D,Q,S){const I=(0,i.up)("comp-breadcrumb"),U=(0,i.up)("q-input"),L=(0,i.up)("comp-fld-ref-search"),$=(0,i.up)("comp-fld-date-time"),P=(0,i.up)("comp-relation"),V=(0,i.up)("ft-list-ref-list-widget"),M=(0,i.up)("task-list-ref-list-widget"),j=(0,i.up)("comp-participant"),A=(0,i.up)("comp-customerAgent"),z=(0,i.up)("comp-item-btn-save"),B=(0,i.up)("q-btn"),O=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(O,{padding:""},{default:(0,i.w5)((()=>{var D;return[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(I,{key:0,list:[{label:"Запросы",to:"/request",docType:"request"},{label:Q.item?Q.item.title?Q.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),Q.item?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",s,[(0,i._)("div",d,[(0,i.Wm)(U,{outlined:"",type:"text",modelValue:Q.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>Q.item.title=e),label:e.$t("request.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,i._)("div",a,[(0,i.Wm)(L,{outlined:"",pgMethod:"ctlg_request_priority_list",label:e.$t("request.priority_id"),item:Q.item.priority_title,itemId:Q.item.priority_id,ext:{},onUpdate:t[1]||(t[1]=e=>Q.item.priority_id=e.id),onClear:t[2]||(t[2]=e=>Q.item.priority_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,i._)("div",n,[(0,i.Wm)(L,{outlined:"",pgMethod:"ctlg_request_state_list",label:e.$t("request.state_id"),item:Q.item.state_title,itemId:Q.item.state_id,ext:{},onUpdate:t[3]||(t[3]=e=>Q.item.state_id=e.id),onClear:t[4]||(t[4]=e=>Q.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,i._)("div",u,[(0,i._)("div",r,[(0,i.Wm)(U,{outlined:"",type:"text",modelValue:Q.item.how_request_received,"onUpdate:modelValue":t[5]||(t[5]=e=>Q.item.how_request_received=e),label:e.$t("request.how_request_received"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,i._)("div",m,[(0,i.Wm)($,{outlined:"",label:e.$t("request.datetime_reciept"),"date-string":e.$utils.formatPgDateTime(Q.item.datetime_reciept),onUpdate:t[6]||(t[6]=e=>Q.item.datetime_reciept=e),onClear:t[7]||(t[7]=e=>Q.item.datetime_reciept=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","date-string"])])]),(0,i._)("div",c,[(0,i._)("div",p,[(0,i.Wm)(U,{outlined:"",type:"text",modelValue:Q.item.description,"onUpdate:modelValue":t[8]||(t[8]=e=>Q.item.description=e),label:e.$t("request.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i._)("div",_,[(0,i._)("div",w,[(0,i.Wm)(P,{item:Q.item},null,8,["item"])])]),(0,i._)("div",g,[(0,i._)("div",h,[(0,i.Wm)(L,{outlined:"",pgMethod:"company_list",label:e.$t("request.customer_id"),item:Q.item.customer_title,itemId:Q.item.customer_id,ext:{avatar:"image/company.svg",isClearable:"true",pathUrl:"/company"},onUpdate:t[9]||(t[9]=e=>Q.item.customer_id=e.id),onClear:t[10]||(t[10]=e=>Q.item.customer_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])]),(0,i._)("div",k,[(0,i.Wm)(L,{outlined:"",pgMethod:"system_list",label:e.$t("request.system_id"),item:Q.item.system_title,itemId:Q.item.system_id,ext:{customer_id:Q.item.customer_id,pathUrl:"/system",avatar:"image/system.svg",isClearable:"true"},onUpdate:t[11]||(t[11]=e=>Q.item.system_id=e.id),onClear:t[12]||(t[12]=e=>Q.item.system_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])])]),(0,i._)("div",f,[(0,i._)("div",q,[-1!=Q.item.id?((0,i.wg)(),(0,i.j4)(V,{key:0,id:Q.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)]),null!==(D=e.currentUser.role)&&void 0!==D&&D.includes("admin")?((0,i.wg)(),(0,i.iD)("div",b,[-1!=Q.item.id?((0,i.wg)(),(0,i.j4)(M,{key:0,id:Q.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)]),(0,i._)("div",y,[(0,i._)("div",v,[(0,i.Wm)(j,{item:Q.item},null,8,["item"])])]),(0,i._)("div",W,[(0,i._)("div",x,[(0,i.Wm)(A,{item:Q.item,currentUser:e.currentUser},null,8,["item","currentUser"])])]),(0,i._)("div",C,[(0,i._)("div",Z,[(0,i.Wm)(U,{outlined:"",type:"text",modelValue:Q.item.result,"onUpdate:modelValue":t[13]||(t[13]=e=>Q.item.result=e),label:e.$t("request.result"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)(B,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:S.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(z,{key:0,onSave:S.save,readonly:!1,onCancel:t[14]||(t[14]=t=>e.$router.push(S.docUrl))},null,8,["onSave"]))])):(0,i.kq)("",!0)]})),_:1})}const Q=(0,i.Uk)("задачи "),S={key:0},I=(0,i.Uk)("Добавить"),U=(0,i.Uk)("активные задачи"),L=(0,i.Uk)("удаленные задачи"),$=(0,i._)("img",{src:"image/task.svg",alt:""},null,-1),P=(0,i._)("div",null,"Создать новую запись",-1);function V(e,t,l,o,s,d){const a=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),u=(0,i.up)("q-btn"),r=(0,i.up)("q-bar"),m=(0,i.up)("q-avatar"),c=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),h=(0,i.up)("q-list"),k=(0,i.up)("q-input"),f=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),b=(0,i.up)("q-card"),y=(0,i.up)("q-dialog"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[Q,s.deleted?((0,i.wg)(),(0,i.iD)("span",S,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(a),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:0,icon:"add",round:"",flat:"",onClick:d.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[I])),_:1})])),_:1},8,["onClick"])),s.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(u,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>d.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[U])),_:1})])),_:1})):(0,i.kq)("",!0),s.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>d.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[L])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(h,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/task/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{rounded:""},{default:(0,i.w5)((()=>[$])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{name:s.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>d.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(y,{modelValue:s.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[P,(0,i.Wm)(a),(0,i.wy)((0,i.Wm)(u,{dense:"",flat:"",icon:"close"},null,512),[[v]])])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{outlined:"",type:"text",modelValue:s.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>s.item.title=e),label:e.$t("task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{flat:"",label:"OK",onClick:d.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const M={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("task_list",{digital_solution_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,digital_solution_id:this.id},this.item);this.$utils.callPgMethod("task_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("task_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var j=l(74260),A=l(10846),z=l(62025),B=l(2165),O=l(5363),R=l(27011),T=l(83414),K=l(52035),H=l(75096),Y=l(2350),N=l(24554),E=l(46778),F=l(10151),G=l(25589),J=l(34842),X=l(99367),ee=l(60677),te=l(7518),le=l.n(te);const ie=(0,j.Z)(M,[["render",V]]),oe=ie;le()(M,"components",{QBar:A.Z,QSpace:z.Z,QBtn:B.Z,QTooltip:O.Z,QList:R.Z,QItem:T.Z,QItemSection:K.Z,QAvatar:H.Z,QItemLabel:Y.Z,QIcon:N.Z,QDialog:E.Z,QCard:F.Z,QCardSection:G.Z,QInput:J.Z,QCardActions:X.Z}),le()(M,"directives",{ClosePopup:ee.Z});const se={key:0},de={key:1},ae=(0,i._)("div",{style:{"text-align":"center"},class:"text-h6"},"Выбор пользователя",-1),ne=(0,i._)("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),ue=(0,i._)("br",null,null,-1),re={key:0,style:{"margin-left":"40px","border-bottom":"1px solid #4f6ccd","margin-right":"40px"}};function me(e,t,l,o,s,d){const a=(0,i.up)("q-icon"),n=(0,i.up)("q-space"),u=(0,i.up)("q-btn"),r=(0,i.up)("q-bar"),m=(0,i.up)("q-item-label"),c=(0,i.up)("q-item-section"),p=(0,i.up)("q-item"),_=(0,i.up)("q-list"),w=(0,i.up)("q-card-section"),g=(0,i.up)("q-avatar"),h=(0,i.up)("q-btn-dropdown"),k=(0,i.up)("q-input"),f=(0,i.up)("q-card-actions"),q=(0,i.up)("q-card"),b=(0,i.up)("q-dialog"),y=(0,i.Q2)("ripple"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{class:"bg-secondary text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{name:"fas fa-user-astronaut"}),s.isShowDeleted?((0,i.wg)(),(0,i.iD)("div",de,"Удалённые")):((0,i.wg)(),(0,i.iD)("div",se,"Представители заказчика")),(0,i.Wm)(n),(0,i.Wm)(u,{flat:"",round:"",icon:"add",onClick:d.showAddDialog},null,8,["onClick"]),(0,i.Wm)(u,{flat:"",round:"",icon:"delete_outline",onClick:t[0]||(t[0]=e=>s.isShowDeleted=!s.isShowDeleted)})])),_:1}),!s.isShowDeleted&&s.taskSpecList.length>0?((0,i.wg)(),(0,i.j4)(_,{key:0,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.taskSpecList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:t=>d.editPosition(e.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.customer_agent_title),1)])),_:2},1024),(0,i.Wm)(m,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(c,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{flat:"",round:"",icon:"delete",onClick:t=>d.deletePosition(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[y]]))),128))])),_:1})):(0,i.kq)("",!0),s.isShowDeleted&&s.deletedtaskSpecList.length>0?((0,i.wg)(),(0,i.j4)(_,{key:1,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.deletedtaskSpecList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:t=>d.editPosition(e.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.customer_agent_title),1)])),_:2},1024),(0,i.Wm)(m,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(c,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{flat:"",round:"",icon:"replay",onClick:t=>d.recoverPosition(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[y]]))),128))])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(b,{modelValue:s.isShowDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowDialog=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{style:{"min-width":"250px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[ae])),_:1}),(0,i.Wm)(h,{split:"",color:"primary",push:"",glossy:"","no-caps":"",icon:"face",label:"Пользователь",onClick:e.onMainClick,style:{"margin-left":"40px","margin-bottom":"10px","margin-top":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.specList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",onClick:t=>d.onSpecClick(e),key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{size:"40px"},{default:(0,i.w5)((()=>[ne])),_:1})])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(m,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.position),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[v]]))),128))])),_:1})])),_:1},8,["onClick"]),ue,s.spec?((0,i.wg)(),(0,i.iD)("div",re,(0,i.zw)(s.spec),1)):(0,i.kq)("",!0),(0,i.Wm)(k,{modelValue:s.roleDesc,"onUpdate:modelValue":t[1]||(t[1]=e=>s.roleDesc=e),placeholder:"Описание роли",filled:"",autogrow:"",style:{"margin-top":"40px","margin-left":"40px","margin-right":"40px","margin-bottom":"20px"}},null,8,["modelValue"]),(0,i.Wm)(f,{align:"center",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(u,{flat:"",label:"Отмена"},null,512),[[v]]),s.editMode?(0,i.wy)(((0,i.wg)(),(0,i.j4)(u,{key:0,flat:"",label:"Сохранить",onClick:t[2]||(t[2]=e=>d.savePosition(s.activetaskSpecId))},null,512)),[[v]]):(0,i.wy)(((0,i.wg)(),(0,i.j4)(u,{key:1,flat:"",label:"Добавить",onClick:d.addPosition},null,8,["onClick"])),[[v]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const ce={props:["fld","item","currentUser"],data(){return{isShowDeleted:!1,isShowDialog:!1,editMode:!1,positionTemplate:null,positionList:[],taskSpecList:[],deletedtaskSpecList:[],position:{id:null,name:null,cost_without_vat:null,cost_without_vat_all:null,quantity:null,vat_rate:null,vat:null,cost_with_vat:null,deleted:!1},spec:"",specId:null,roleDesc:"",specList:[],roleList:[],activetaskSpecId:null}},methods:{showAddDialog(){this.position=Object.assign({},this.positionTemplate),this.editMode=!1,this.isShowDialog=!0,this.spec="",this.roleDesc="",this.roleId=null},findId(e){let t=0;return e.forEach((function(e){e.id>t&&(t=e.id)})),t+1},addPosition(){this.$utils.postCallPgMethod({method:"request_customer_agent_link_update",params:{id:-1,customer_agent_id:this.specId,description:this.roleDesc,request_id:this.item.id,author_id:this.currentUser.id}}).subscribe((e=>{e.ok&&this.reloadList()}))},onSpecClick(e){this.spec=e.title,this.specId=e.id},onRoleClick(e){this.role=e.title,this.roleId=e.id},editPosition(e){},savePosition(e){this.$utils.postCallPgMethod({method:"request_customer_agent_link_update",params:{id:e,specialist_id:this.specId,description:this.roleDesc}}).subscribe((e=>{e.ok&&this.reloadList()})),this.editMode=!1,this.isShowDialog=!1},deletePosition(e){let t=this.taskSpecList.findIndex((t=>t.id===e));this.taskSpecList[t].deleted=!0,this.$utils.postCallPgMethod({method:"request_customer_agent_link_update",params:{id:e,deleted:!0}}).subscribe((e=>{e.ok&&this.reloadList()}))},recoverPosition(e){this.$utils.postCallPgMethod({method:"request_customer_agent_link_update",params:{id:e,deleted:!1}}).subscribe((e=>{e.ok&&this.reloadList()}))},reloadList(){this.$utils.postCallPgMethod({method:"request_customer_agent_link_list",params:{request_id:this.item.id}}).subscribe((e=>{e.ok&&(this.taskSpecList=e.result)})),this.$utils.postCallPgMethod({method:"request_customer_agent_link_list",params:{request_id:this.item.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.deletedtaskSpecList=e.result)}))}},mounted(){this.positionTemplate=Object.assign({},this.position),this.reloadList(),this.$utils.postCallPgMethod({method:"man_list",params:{}}).subscribe((e=>{e.ok&&(this.specList=e.result)})),this.$utils.postCallPgMethod({method:"task_get_specialist_role",params:{}}).subscribe((e=>{e.ok&&(this.roleList=e.result)}))},computed:{},watch:{}};var pe=l(42670),_e=l(46489);const we=(0,j.Z)(ce,[["render",me]]),ge=we;le()(ce,"components",{QBar:A.Z,QIcon:N.Z,QSpace:z.Z,QBtn:B.Z,QList:R.Z,QItem:T.Z,QItemSection:K.Z,QItemLabel:Y.Z,QDialog:E.Z,QCard:F.Z,QCardSection:G.Z,QBtnDropdown:pe.Z,QAvatar:H.Z,QInput:J.Z,QCardActions:X.Z}),le()(ce,"directives",{Ripple:_e.Z,ClosePopup:ee.Z});const he={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function ke(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",he," Участники: ")}l(64434);const fe={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}},qe=(0,j.Z)(fe,[["render",ke],["__scopeId","data-v-4f276e1a"]]),be=qe,ye={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function ve(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",ye," Связи: ")}const We={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}},xe=(0,j.Z)(We,[["render",ve],["__scopeId","data-v-8fd1f476"]]),Ce=xe,Ze=(0,i.Uk)("Функциональные требования "),De={key:0},Qe=(0,i.Uk)("Добавить"),Se=(0,i.Uk)("активные Функциональные требования"),Ie=(0,i.Uk)("удаленные Функциональные требования"),Ue=(0,i._)("img",{src:"image/functional_requirement.svg",alt:""},null,-1),Le=(0,i._)("div",null,"Создать новую запись",-1);function $e(e,t,l,o,s,d){const a=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),u=(0,i.up)("q-btn"),r=(0,i.up)("q-bar"),m=(0,i.up)("q-avatar"),c=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),h=(0,i.up)("q-list"),k=(0,i.up)("q-input"),f=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),b=(0,i.up)("q-card"),y=(0,i.up)("q-dialog"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[Ze,s.deleted?((0,i.wg)(),(0,i.iD)("span",De,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(a),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:0,icon:"add",round:"",flat:"",onClick:d.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Qe])),_:1})])),_:1},8,["onClick"])),s.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(u,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>d.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Se])),_:1})])),_:1})):(0,i.kq)("",!0),s.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>d.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Ie])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(h,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/functional_requirement/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{rounded:""},{default:(0,i.w5)((()=>[Ue])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{name:s.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>d.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(y,{modelValue:s.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[Le,(0,i.Wm)(a),(0,i.wy)((0,i.Wm)(u,{dense:"",flat:"",icon:"close"},null,512),[[v]])])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{outlined:"",type:"text",modelValue:s.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>s.item.title=e),label:e.$t("functional_requirement.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{flat:"",label:"OK",onClick:d.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const Pe={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("functional_requirement_list",{request_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,request_id:this.id},this.item);this.$utils.callPgMethod("functional_requirement_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("functional_requirement_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},Ve=(0,j.Z)(Pe,[["render",$e]]),Me=Ve;le()(Pe,"components",{QBar:A.Z,QSpace:z.Z,QBtn:B.Z,QTooltip:O.Z,QList:R.Z,QItem:T.Z,QItemSection:K.Z,QAvatar:H.Z,QItemLabel:Y.Z,QIcon:N.Z,QDialog:E.Z,QCard:F.Z,QCardSection:G.Z,QInput:J.Z,QCardActions:X.Z}),le()(Pe,"directives",{ClosePopup:ee.Z});var je=l(43015);const Ae={props:["id","isOpenInDialog"],components:{ftListRefListWidget:Me,taskListRefListWidget:oe,compCustomerAgent:ge,compParticipant:be,compRelation:Ce},mixins:[je.Z],computed:{docUrl:function(){return"/request"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"priority_id",label:"приоритет"},{name:"state_id",label:"статус"},{name:"how_request_received",label:"как получен запрос"},{name:"datetime_reciept",label:"дата и время получения запроса"},{name:"description",label:"описание"},{name:"customer_id",label:"заказчик"},{name:"system_id",label:"система"},{name:"result",label:"результат"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"request_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"request_get_by_id",cb:e})}},mounted(){this.reload()}};var ze=l(24379);const Be=(0,j.Z)(Ae,[["render",D]]),Oe=Be;le()(Ae,"components",{QPage:ze.Z,QInput:J.Z,QBtn:B.Z})}}]);