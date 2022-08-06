"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[7074],{67074:(e,t,l)=>{l.r(t),l.d(t,{default:()=>We});l(90246);var i=l(34182);const a={key:1,class:"q-mt-sm"},d={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},s={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},m={key:0,class:"col-md-4 col-sm-6 col-xs-12"},u={class:"col-md-2 col-sm-3 col-xs-6"},r={class:"col-md-2 col-sm-3 col-xs-6"},p={class:"row q-col-gutter-md q-mb-sm"},_={class:"col-md-8 col-sm-12 col-xs-12"},w={class:"row q-col-gutter-md q-mb-sm"},h={class:"col-md-2 col-sm-3 col-xs-6"},g={class:"col-md-2 col-sm-3 col-xs-6"},k={class:"col-md-2 col-sm-3 col-xs-6"},f={class:"col-md-2 col-sm-3 col-xs-6"};function q(e,t,l,q,y,b){const v=(0,i.up)("comp-breadcrumb"),W=(0,i.up)("q-input"),Z=(0,i.up)("comp-fld-ref-search"),Q=(0,i.up)("comp-fld-date"),x=(0,i.up)("comp-fld-files"),C=(0,i.up)("development-task-list-ref-list-widget"),U=(0,i.up)("invoice-list-ref-list-widget"),D=(0,i.up)("completion-act-list-ref-list-widget"),I=(0,i.up)("comp-item-btn-save"),$=(0,i.up)("q-btn"),j=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(j,{padding:""},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(v,{key:0,list:[{label:"Технические задания",to:"/technical_task",docType:"technical_task"},{label:y.item?y.item.title?y.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),y.item?((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",d,[(0,i._)("div",o,[(0,i.Wm)(W,{outlined:"",type:"text",modelValue:y.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>y.item.title=e),label:e.$t("technical_task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,i._)("div",s,[(0,i.Wm)(Z,{outlined:"",pgMethod:"ctlg_technical_task_state_list",label:e.$t("technical_task.state_id"),item:y.item.state_title,itemId:y.item.state_id,ext:{isClearable:"true"},onUpdate:t[1]||(t[1]=e=>y.item.state_id=e.id),onClear:t[2]||(t[2]=e=>y.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,i._)("div",n,[(0,i.Wm)(Z,{outlined:"",pgMethod:"ctlg_technical_task_work_state_list",label:e.$t("technical_task.work_state_id"),item:y.item.work_state_title,itemId:y.item.work_state_id,ext:{isClearable:"true"},onUpdate:t[3]||(t[3]=e=>y.item.work_state_id=e.id),onClear:t[4]||(t[4]=e=>y.item.work_state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,i._)("div",c,[6!==y.item.state_id?((0,i.wg)(),(0,i.iD)("div",m,[6!==y.item.state_id?((0,i.wg)(),(0,i.j4)(Z,{key:0,outlined:"",pgMethod:"contract_list",label:e.$t("technical_task.contract_id"),item:y.item.contract_title,itemId:y.item.contract_id,ext:{avatar:"image/contract.svg",isClearable:"true",pathUrl:"/contract"},onUpdate:t[5]||(t[5]=e=>y.item.contract_id=e.id),onClear:t[6]||(t[6]=e=>y.item.contract_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),(0,i._)("div",u,[(0,i.Wm)(W,{outlined:"",type:"number",modelValue:y.item.amount,"onUpdate:modelValue":t[7]||(t[7]=e=>y.item.amount=e),label:e.$t("technical_task.amount"),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["modelValue","label"])]),(0,i._)("div",r,[(0,i.Wm)(Q,{outlined:"",label:e.$t("technical_task.date"),"date-string":e.$utils.formatPgDate(y.item.date),onUpdate:t[8]||(t[8]=e=>y.item.date=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])])]),(0,i._)("div",p,[(0,i._)("div",_,[(0,i.Wm)(W,{outlined:"",type:"text",modelValue:y.item.description,"onUpdate:modelValue":t[9]||(t[9]=e=>y.item.description=e),label:e.$t("technical_task.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i._)("div",w,[(0,i._)("div",h,["new"!=this.id?((0,i.wg)(),(0,i.j4)(x,{key:0,fldName:"document",label:e.$t("technical_task.document"),fld:y.item.document,ext:{tableName:"technical_task",tableId:this.id},onUpdate:t[10]||(t[10]=e=>y.item.document=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","fld","ext"])):(0,i.kq)("",!0)]),(0,i._)("div",g,[-1!=y.item.id?((0,i.wg)(),(0,i.j4)(C,{key:0,id:y.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)]),(0,i._)("div",k,[-1!=y.item.id?((0,i.wg)(),(0,i.j4)(U,{key:0,id:y.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)]),(0,i._)("div",f,[-1!=y.item.id?((0,i.wg)(),(0,i.j4)(D,{key:0,id:y.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)($,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:b.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(I,{key:0,onSave:b.save,readonly:!1,onCancel:t[11]||(t[11]=t=>e.$router.push(b.docUrl))},null,8,["onSave"]))])):(0,i.kq)("",!0)])),_:1})}const y=(0,i.Uk)("задачи разработки "),b={key:0},v=(0,i.Uk)("Добавить"),W=(0,i.Uk)("активные задачи разработки"),Z=(0,i.Uk)("удаленные задачи разработки"),Q=(0,i._)("img",{src:"image/development_task.png",alt:""},null,-1),x=(0,i._)("div",null,"Создать новую запись",-1);function C(e,t,l,a,d,o){const s=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),c=(0,i.up)("q-btn"),m=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),h=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),k=(0,i.up)("q-list"),f=(0,i.up)("q-input"),q=(0,i.up)("q-card-section"),C=(0,i.up)("q-card-actions"),U=(0,i.up)("q-card"),D=(0,i.up)("q-dialog"),I=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[y,d.deleted?((0,i.wg)(),(0,i.iD)("span",b,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[v])),_:1})])),_:1},8,["onClick"])),d.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(c,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[W])),_:1})])),_:1})):(0,i.kq)("",!0),d.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Z])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(k,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/development_task/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[Q])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(D,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[x,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[I]])])),_:1}),(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.item.title=e),label:e.$t("development_task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(C,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const U={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("development_task_list",{technical_task_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,technical_task_id:this.id},this.item);this.$utils.callPgMethod("development_task_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("development_task_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var D=l(74260),I=l(10846),$=l(62025),j=l(2165),S=l(5363),V=l(27011),A=l(83414),M=l(52035),P=l(75096),L=l(2350),B=l(69721),z=l(24554),O=l(46778),R=l(10151),N=l(25589),K=l(34842),T=l(99367),H=l(60677),Y=l(7518),E=l.n(Y);const F=(0,D.Z)(U,[["render",C]]),G=F;E()(U,"components",{QBar:I.Z,QSpace:$.Z,QBtn:j.Z,QTooltip:S.Z,QList:V.Z,QItem:A.Z,QItemSection:M.Z,QAvatar:P.Z,QItemLabel:L.Z,QBadge:B.Z,QIcon:z.Z,QDialog:O.Z,QCard:R.Z,QCardSection:N.Z,QInput:K.Z,QCardActions:T.Z}),E()(U,"directives",{ClosePopup:H.Z});const J=(0,i.Uk)("счета "),X={key:0},ee=(0,i.Uk)("Добавить"),te=(0,i.Uk)("активные счета"),le=(0,i.Uk)("удаленные счета"),ie=(0,i._)("img",{src:"image/invoice.svg",alt:""},null,-1),ae=(0,i._)("div",null,"Создать новую запись",-1);function de(e,t,l,a,d,o){const s=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),c=(0,i.up)("q-btn"),m=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),h=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),k=(0,i.up)("q-list"),f=(0,i.up)("q-input"),q=(0,i.up)("q-card-section"),y=(0,i.up)("q-card-actions"),b=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[J,d.deleted?((0,i.wg)(),(0,i.iD)("span",X,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[ee])),_:1})])),_:1},8,["onClick"])),d.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(c,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[te])),_:1})])),_:1})):(0,i.kq)("",!0),d.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[le])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(k,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/invoice/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[ie])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(v,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[ae,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[W]])])),_:1}),(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.item.title=e),label:e.$t("invoice.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(y,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const oe={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("invoice_list",{technical_task_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,technical_task_id:this.id},this.item);this.$utils.callPgMethod("invoice_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("invoice_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},se=(0,D.Z)(oe,[["render",de]]),ne=se;E()(oe,"components",{QBar:I.Z,QSpace:$.Z,QBtn:j.Z,QTooltip:S.Z,QList:V.Z,QItem:A.Z,QItemSection:M.Z,QAvatar:P.Z,QItemLabel:L.Z,QBadge:B.Z,QIcon:z.Z,QDialog:O.Z,QCard:R.Z,QCardSection:N.Z,QInput:K.Z,QCardActions:T.Z}),E()(oe,"directives",{ClosePopup:H.Z});const ce=(0,i.Uk)("акт "),me={key:0},ue=(0,i.Uk)("Добавить"),re=(0,i.Uk)("активные акт"),pe=(0,i.Uk)("удаленные акт"),_e=(0,i._)("img",{src:"image/completion_act.png",alt:""},null,-1),we=(0,i._)("div",null,"Создать новую запись",-1);function he(e,t,l,a,d,o){const s=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),c=(0,i.up)("q-btn"),m=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),h=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),k=(0,i.up)("q-list"),f=(0,i.up)("q-input"),q=(0,i.up)("q-card-section"),y=(0,i.up)("q-card-actions"),b=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[ce,d.deleted?((0,i.wg)(),(0,i.iD)("span",me,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[ue])),_:1})])),_:1},8,["onClick"])),d.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(c,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[re])),_:1})])),_:1})):(0,i.kq)("",!0),d.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[pe])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(k,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/completion_act/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[_e])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(v,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[we,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[W]])])),_:1}),(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.item.title=e),label:e.$t("completion_act.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(y,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const ge={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("completion_act_list",{technical_task_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,technical_task_id:this.id},this.item);this.$utils.callPgMethod("completion_act_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("completion_act_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},ke=(0,D.Z)(ge,[["render",he]]),fe=ke;E()(ge,"components",{QBar:I.Z,QSpace:$.Z,QBtn:j.Z,QTooltip:S.Z,QList:V.Z,QItem:A.Z,QItemSection:M.Z,QAvatar:P.Z,QItemLabel:L.Z,QBadge:B.Z,QIcon:z.Z,QDialog:O.Z,QCard:R.Z,QCardSection:N.Z,QInput:K.Z,QCardActions:T.Z}),E()(ge,"directives",{ClosePopup:H.Z});var qe=l(43015);const ye={props:["id","isOpenInDialog"],components:{developmentTaskListRefListWidget:G,invoiceListRefListWidget:ne,completionActListRefListWidget:fe},mixins:[qe.Z],computed:{docUrl:function(){return"/technical_task"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"state_id",label:"статус документа"},{name:"work_state_id",label:"статус работ по ТЗ"},{name:"contract_id",label:"договор"},{name:"amount",label:"сумма"},{name:"date",label:"дата подписания ТЗ"},{name:"description",label:"описание"},{name:"document",label:"документ"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"technical_task_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"technical_task_get_by_id",cb:e})}},mounted(){this.reload()}};var be=l(24379);const ve=(0,D.Z)(ye,[["render",q]]),We=ve;E()(ye,"components",{QPage:be.Z,QInput:K.Z,QBtn:j.Z})}}]);