(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[3798],{3798:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>ce});l(90246);var i=l(34182);const d={key:1,class:"q-mt-sm"},a={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},s={class:"col-md-2 col-sm-3 col-xs-6"},m={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"row q-col-gutter-md q-mb-sm"},u={class:"col-md-8 col-sm-12 col-xs-12"},r={class:"row q-col-gutter-md q-mb-sm"},c={class:"col-md-4 col-sm-6 col-xs-12"},p={class:"col-md-4 col-sm-6 col-xs-12"},_={class:"row q-col-gutter-md q-mb-sm"},g={class:"col-md-4 col-sm-6 col-xs-12"},w={class:"col-md-4 col-sm-6 col-xs-12"},q={class:"row q-col-gutter-md q-mb-sm"},h={class:"col-md-4 col-sm-6 col-xs-12"},b={class:"row q-col-gutter-md q-mb-sm"},y={class:"col-md-8 col-sm-12 col-xs-12"},f={class:"row q-col-gutter-md q-mb-sm"},k={class:"col-md-4 col-sm-6 col-xs-12"},v={class:"col-md-4 col-sm-6 col-xs-12"};function W(e,t,l,W,x,C){const Z=(0,i.up)("comp-breadcrumb"),Q=(0,i.up)("q-input"),U=(0,i.up)("comp-fld-date-time"),I=(0,i.up)("comp-fld-ref-search"),j=(0,i.up)("ft-list-ref-list-widget"),$=(0,i.up)("task-list-ref-list-widget"),V=(0,i.up)("comp-item-btn-save"),S=(0,i.up)("q-btn"),D=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(D,{padding:""},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(Z,{key:0,list:[{label:"Запросы",to:"/request",docType:"request"},{label:x.item?x.item.title?x.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),x.item?((0,i.wg)(),(0,i.j4)("div",d,[(0,i.Wm)("div",a,[(0,i.Wm)("div",o,[(0,i.Wm)(Q,{outlined:"",type:"text",modelValue:x.item.title,"onUpdate:modelValue":t[1]||(t[1]=e=>x.item.title=e),label:e.$t("request.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,i.Wm)("div",s,[(0,i.Wm)(U,{outlined:"",label:e.$t("request.datetime_reciept"),"date-string":e.$utils.formatPgDateTime(x.item.datetime_reciept),onUpdate:t[2]||(t[2]=e=>x.item.datetime_reciept=e),onClear:t[3]||(t[3]=e=>x.item.datetime_reciept=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,i.Wm)("div",m,[(0,i.Wm)(I,{outlined:"",pgMethod:"ctlg_request_state_list",label:e.$t("request.state_id"),item:x.item.state_title,itemId:x.item.state_id,ext:{},onUpdate:t[4]||(t[4]=e=>x.item.state_id=e.id),onClear:t[5]||(t[5]=e=>x.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,i.Wm)("div",n,[(0,i.Wm)("div",u,[(0,i.Wm)(Q,{outlined:"",type:"text",modelValue:x.item.description,"onUpdate:modelValue":t[6]||(t[6]=e=>x.item.description=e),label:e.$t("request.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i.Wm)("div",r,[(0,i.Wm)("div",c,[(0,i.Wm)(I,{outlined:"",pgMethod:"man_list",label:e.$t("request.rsk_id"),item:x.item.rsk_title,itemId:x.item.rsk_id,ext:{company_id:1,pathUrl:"/man",avatar:"image/man.svg",isClearable:"true"},onUpdate:t[7]||(t[7]=e=>x.item.rsk_id=e.id),onClear:t[8]||(t[8]=e=>x.item.rsk_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])]),(0,i.Wm)("div",p,[(0,i.Wm)(Q,{outlined:"",type:"text",modelValue:x.item.how_request_received,"onUpdate:modelValue":t[9]||(t[9]=e=>x.item.how_request_received=e),label:e.$t("request.how_request_received"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),(0,i.Wm)("div",_,[(0,i.Wm)("div",g,[(0,i.Wm)(I,{outlined:"",pgMethod:"company_list",label:e.$t("request.customer_id"),item:x.item.customer_title,itemId:x.item.customer_id,ext:{avatar:"image/company.svg",isClearable:"true",pathUrl:"/company"},onUpdate:t[10]||(t[10]=e=>x.item.customer_id=e.id),onClear:t[11]||(t[11]=e=>x.item.customer_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])]),(0,i.Wm)("div",w,[(0,i.Wm)(I,{outlined:"",pgMethod:"man_list",label:e.$t("request.customer_agent_id"),item:x.item.customer_agent_title,itemId:x.item.customer_agent_id,ext:{company_id:x.item.customer_id,isClearable:"true",pathUrl:"/man",avatar:"image/man.svg"},onUpdate:t[12]||(t[12]=e=>x.item.customer_agent_id=e.id),onClear:t[13]||(t[13]=e=>x.item.customer_agent_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])])]),(0,i.Wm)("div",q,[(0,i.Wm)("div",h,[(0,i.Wm)(I,{outlined:"",pgMethod:"system_list",label:e.$t("request.system_id"),item:x.item.system_title,itemId:x.item.system_id,ext:{customer_id:x.item.customer_id,avatar:"image/system.svg",isClearable:"true",pathUrl:"/system"},onUpdate:t[14]||(t[14]=e=>x.item.system_id=e.id),onClear:t[15]||(t[15]=e=>x.item.system_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])])]),(0,i.Wm)("div",b,[(0,i.Wm)("div",y,[(0,i.Wm)(Q,{outlined:"",type:"text",modelValue:x.item.result,"onUpdate:modelValue":t[16]||(t[16]=e=>x.item.result=e),label:e.$t("request.result"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i.Wm)("div",f,[(0,i.Wm)("div",k,[-1!=x.item.id?((0,i.wg)(),(0,i.j4)(j,{key:0,id:x.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)]),(0,i.Wm)("div",v,[-1!=x.item.id?((0,i.wg)(),(0,i.j4)($,{key:0,id:x.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)(S,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:C.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(V,{key:0,onSave:C.save,readonly:!1,onCancel:t[17]||(t[17]=t=>e.$router.push(C.docUrl))},null,8,["onSave"]))])):(0,i.kq)("",!0)])),_:1})}const x=(0,i.Uk)("Функциональные требования "),C={key:0},Z=(0,i.Uk)("Добавить"),Q=(0,i.Uk)("активные Функциональные требования"),U=(0,i.Uk)("удаленные Функциональные требования"),I=(0,i.Wm)("img",{src:"image/functional_requirement.svg",alt:""},null,-1),j=(0,i.Wm)("div",null,"Создать новую запись",-1);function $(e,t,l,d,a,o){const s=(0,i.up)("q-space"),m=(0,i.up)("q-tooltip"),n=(0,i.up)("q-btn"),u=(0,i.up)("q-bar"),r=(0,i.up)("q-avatar"),c=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),g=(0,i.up)("q-icon"),w=(0,i.up)("q-item"),q=(0,i.up)("q-list"),h=(0,i.up)("q-input"),b=(0,i.up)("q-card-section"),y=(0,i.up)("q-card-actions"),f=(0,i.up)("q-card"),k=(0,i.up)("q-dialog"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)("div",null,[(0,i.Wm)(u,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i.Wm)("div",null,[x,a.deleted?((0,i.wg)(),(0,i.j4)("span",C,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(n,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[Z])),_:1})])),_:1},8,["onClick"])),a.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(n,{key:1,icon:"delete",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[Q])),_:1})])),_:1})):(0,i.kq)("",!0),a.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(n,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[2]||(t[2]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[U])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(q,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.list,(e=>((0,i.wg)(),(0,i.j4)(w,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/functional_requirement/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{rounded:""},{default:(0,i.w5)((()=>[I])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{name:a.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(k,{modelValue:a.isShowAddDialog,"onUpdate:modelValue":t[4]||(t[4]=e=>a.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[j,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(n,{dense:"",flat:"",icon:"close"},null,512),[[v]])])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{outlined:"",type:"text",modelValue:a.item.title,"onUpdate:modelValue":t[3]||(t[3]=e=>a.item.title=e),label:e.$t("functional_requirement.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(y,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const V={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("functional_requirement_list",{request_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,request_id:this.id},this.item);this.$utils.callPgMethod("functional_requirement_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("functional_requirement_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var S=l(10846),D=l(62025),M=l(2165),A=l(5363),P=l(27011),L=l(83414),O=l(52035),B=l(75096),R=l(2350),T=l(24554),z=l(46778),K=l(10151),N=l(25589),E=l(34842),F=l(99367),H=l(60677),Y=l(7518),G=l.n(Y);V.render=$;const J=V;G()(V,"components",{QBar:S.Z,QSpace:D.Z,QBtn:M.Z,QTooltip:A.Z,QList:P.Z,QItem:L.Z,QItemSection:O.Z,QAvatar:B.Z,QItemLabel:R.Z,QIcon:T.Z,QDialog:z.Z,QCard:K.Z,QCardSection:N.Z,QInput:E.Z,QCardActions:F.Z}),G()(V,"directives",{ClosePopup:H.Z});const X=(0,i.Uk)("задачи "),ee={key:0},te=(0,i.Uk)("Добавить"),le=(0,i.Uk)("активные задачи"),ie=(0,i.Uk)("удаленные задачи"),de=(0,i.Wm)("img",{src:"image/task.svg",alt:""},null,-1),ae=(0,i.Wm)("div",null,"Создать новую запись",-1);function oe(e,t,l,d,a,o){const s=(0,i.up)("q-space"),m=(0,i.up)("q-tooltip"),n=(0,i.up)("q-btn"),u=(0,i.up)("q-bar"),r=(0,i.up)("q-avatar"),c=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),g=(0,i.up)("q-icon"),w=(0,i.up)("q-item"),q=(0,i.up)("q-list"),h=(0,i.up)("q-input"),b=(0,i.up)("q-card-section"),y=(0,i.up)("q-card-actions"),f=(0,i.up)("q-card"),k=(0,i.up)("q-dialog"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)("div",null,[(0,i.Wm)(u,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i.Wm)("div",null,[X,a.deleted?((0,i.wg)(),(0,i.j4)("span",ee,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(n,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[te])),_:1})])),_:1},8,["onClick"])),a.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(n,{key:1,icon:"delete",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[le])),_:1})])),_:1})):(0,i.kq)("",!0),a.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(n,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[2]||(t[2]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[ie])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(q,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.list,(e=>((0,i.wg)(),(0,i.j4)(w,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/task/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{rounded:""},{default:(0,i.w5)((()=>[de])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{name:a.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(k,{modelValue:a.isShowAddDialog,"onUpdate:modelValue":t[4]||(t[4]=e=>a.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[ae,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(n,{dense:"",flat:"",icon:"close"},null,512),[[v]])])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{outlined:"",type:"text",modelValue:a.item.title,"onUpdate:modelValue":t[3]||(t[3]=e=>a.item.title=e),label:e.$t("task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(y,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const se={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("task_list",{digital_solution_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,digital_solution_id:this.id},this.item);this.$utils.callPgMethod("task_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("task_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};se.render=oe;const me=se;G()(se,"components",{QBar:S.Z,QSpace:D.Z,QBtn:M.Z,QTooltip:A.Z,QList:P.Z,QItem:L.Z,QItemSection:O.Z,QAvatar:B.Z,QItemLabel:R.Z,QIcon:T.Z,QDialog:z.Z,QCard:K.Z,QCardSection:N.Z,QInput:E.Z,QCardActions:F.Z}),G()(se,"directives",{ClosePopup:H.Z});var ne=l(43015);const ue={props:["id","isOpenInDialog"],components:{taskListRefListWidget:me,ftListRefListWidget:J},mixins:[ne.Z],computed:{docUrl:function(){return"/request"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"datetime_reciept",label:"дата и время получения запроса"},{name:"state_id",label:"статус"},{name:"description",label:"описание"},{name:"rsk_id",label:"рск"},{name:"how_request_received",label:"как получен запрос"},{name:"customer_id",label:"заказчик"},{name:"customer_agent_id",label:"представитель заказчика"},{name:"system_id",label:"система"},{name:"result",label:"результат"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"request_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"request_get_by_id",cb:e})}},mounted(){this.reload()}};var re=l(24379);ue.render=W;const ce=ue;G()(ue,"components",{QPage:re.Z,QInput:E.Z,QBtn:M.Z})}}]);