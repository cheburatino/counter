"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[8742],{68742:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Qe});l(90246);var i=l(34182);const a={key:1,class:"q-mt-sm"},d={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},s={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},m={class:"col-md-1 col-sm-2 col-xs-6"},u={class:"col-md-1 col-sm-2 col-xs-6"},r={class:"col-md-2 col-sm-3 col-xs-6"},p={class:"col-md-4 col-sm-6 col-xs-12"},_={class:"row q-col-gutter-md q-mb-sm"},w={class:"col-md-8 col-sm-12 col-xs-12"},h={class:"row q-col-gutter-md q-mb-sm"},g={class:"col-md-2 col-sm-3 col-xs-6"},f={class:"col-md-2 col-sm-3 col-xs-6"},k={class:"col-md-2 col-sm-3 col-xs-6"},b={class:"col-md-2 col-sm-3 col-xs-6"},q={class:"row q-col-gutter-md q-mb-sm"},y={class:"col-md-4 col-sm-6 col-xs-12"};function v(e,t,l,v,W,Z){const x=(0,i.up)("comp-breadcrumb"),Q=(0,i.up)("q-input"),C=(0,i.up)("comp-fld-ref-search"),U=(0,i.up)("comp-fld-date"),D=(0,i.up)("comp-fld-files"),I=(0,i.up)("completion-act-list-ref-list-widget"),V=(0,i.up)("invoice-list-ref-list-widget"),$=(0,i.up)("functional-requirement-list-ref-list-widget"),j=(0,i.up)("comp-item-btn-save"),S=(0,i.up)("q-btn"),A=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(A,{padding:""},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(x,{key:0,list:[{label:"Технические задания",to:"/technical_task",docType:"technical_task"},{label:W.item?W.item.title?W.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),W.item?((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",d,[(0,i._)("div",o,[(0,i.Wm)(Q,{outlined:"",type:"text",modelValue:W.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>W.item.title=e),label:e.$t("technical_task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,i._)("div",s,[(0,i.Wm)(C,{outlined:"",pgMethod:"ctlg_technical_task_state_list",label:e.$t("technical_task.state_id"),item:W.item.state_title,itemId:W.item.state_id,ext:{isClearable:"true"},onUpdate:t[1]||(t[1]=e=>W.item.state_id=e.id),onClear:t[2]||(t[2]=e=>W.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,i._)("div",n,[(0,i.Wm)(C,{outlined:"",pgMethod:"ctlg_technical_task_work_state_list",label:e.$t("technical_task.work_state_id"),item:W.item.work_state_title,itemId:W.item.work_state_id,ext:{isClearable:"true"},onUpdate:t[3]||(t[3]=e=>W.item.work_state_id=e.id),onClear:t[4]||(t[4]=e=>W.item.work_state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,i._)("div",c,[(0,i._)("div",m,[(0,i.Wm)(Q,{outlined:"",type:"number",modelValue:W.item.number,"onUpdate:modelValue":t[5]||(t[5]=e=>W.item.number=e),label:e.$t("technical_task.number"),readonly:!1,class:"q-mb-sm col-md-1 col-sm-2 col-xs-6"},null,8,["modelValue","label"])]),(0,i._)("div",u,[(0,i.Wm)(Q,{outlined:"",type:"number",modelValue:W.item.amount,"onUpdate:modelValue":t[6]||(t[6]=e=>W.item.amount=e),label:e.$t("technical_task.amount"),readonly:!1,class:"q-mb-sm col-md-1 col-sm-2 col-xs-6"},null,8,["modelValue","label"])]),(0,i._)("div",r,[(0,i.Wm)(U,{outlined:"",label:e.$t("technical_task.date"),"date-string":e.$utils.formatPgDate(W.item.date),onUpdate:t[7]||(t[7]=e=>W.item.date=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,i._)("div",p,[(0,i.Wm)(C,{outlined:"",pgMethod:"contract_list",label:e.$t("technical_task.contract_id"),item:W.item.contract_title,itemId:W.item.contract_id,ext:{avatar:"image/contract.svg",isClearable:"true",pathUrl:"/contract"},onUpdate:t[8]||(t[8]=e=>W.item.contract_id=e.id),onClear:t[9]||(t[9]=e=>W.item.contract_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])])]),(0,i._)("div",_,[(0,i._)("div",w,[(0,i.Wm)(Q,{outlined:"",type:"text",modelValue:W.item.description,"onUpdate:modelValue":t[10]||(t[10]=e=>W.item.description=e),label:e.$t("technical_task.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i._)("div",h,[(0,i._)("div",g,["new"!=this.id?((0,i.wg)(),(0,i.j4)(D,{key:0,fldName:"draft",label:e.$t("technical_task.draft"),fld:W.item.draft,ext:{tableName:"technical_task",tableId:this.id},onUpdate:t[11]||(t[11]=e=>W.item.draft=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","fld","ext"])):(0,i.kq)("",!0)]),(0,i._)("div",f,["new"!=this.id?((0,i.wg)(),(0,i.j4)(D,{key:0,fldName:"signed",label:e.$t("technical_task.signed"),fld:W.item.signed,ext:{tableName:"technical_task",tableId:this.id},onUpdate:t[12]||(t[12]=e=>W.item.signed=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","fld","ext"])):(0,i.kq)("",!0)]),(0,i._)("div",k,[-1!=W.item.id?((0,i.wg)(),(0,i.j4)(I,{key:0,id:W.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)]),(0,i._)("div",b,[-1!=W.item.id?((0,i.wg)(),(0,i.j4)(V,{key:0,id:W.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),(0,i._)("div",q,[(0,i._)("div",y,[-1!=W.item.id?((0,i.wg)(),(0,i.j4)($,{key:0,id:W.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)(S,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:Z.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(j,{key:0,onSave:Z.save,readonly:!1,onCancel:t[13]||(t[13]=t=>e.$router.push(Z.docUrl))},null,8,["onSave"]))])):(0,i.kq)("",!0)])),_:1})}const W=(0,i.Uk)("функциональные требования "),Z={key:0},x=(0,i.Uk)("Добавить"),Q=(0,i.Uk)("активные функциональные требования"),C=(0,i.Uk)("удаленные функциональные требования"),U=(0,i._)("img",{src:"image/functional_requirement.svg",alt:""},null,-1),D=(0,i._)("div",null,"Создать новую запись",-1);function I(e,t,l,a,d,o){const s=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),c=(0,i.up)("q-btn"),m=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),h=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),f=(0,i.up)("q-list"),k=(0,i.up)("q-input"),b=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),y=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),I=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[W,d.deleted?((0,i.wg)(),(0,i.iD)("span",Z,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[x])),_:1})])),_:1},8,["onClick"])),d.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(c,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Q])),_:1})])),_:1})):(0,i.kq)("",!0),d.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[C])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(f,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/functional_requirement/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[U])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(v,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[D,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[I]])])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.item.title=e),label:e.$t("functional_requirement.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const V={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("functional_requirement_list",{technical_task_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,technical_task_id:this.id},this.item);this.$utils.callPgMethod("functional_requirement_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("functional_requirement_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var $=l(74260),j=l(10846),S=l(62025),A=l(2165),M=l(5363),P=l(27011),L=l(83414),B=l(52035),N=l(75096),R=l(2350),z=l(69721),O=l(24554),K=l(46778),T=l(10151),H=l(25589),Y=l(34842),E=l(99367),F=l(60677),G=l(7518),J=l.n(G);const X=(0,$.Z)(V,[["render",I]]),ee=X;J()(V,"components",{QBar:j.Z,QSpace:S.Z,QBtn:A.Z,QTooltip:M.Z,QList:P.Z,QItem:L.Z,QItemSection:B.Z,QAvatar:N.Z,QItemLabel:R.Z,QBadge:z.Z,QIcon:O.Z,QDialog:K.Z,QCard:T.Z,QCardSection:H.Z,QInput:Y.Z,QCardActions:E.Z}),J()(V,"directives",{ClosePopup:F.Z});const te=(0,i.Uk)("акт "),le={key:0},ie=(0,i.Uk)("Добавить"),ae=(0,i.Uk)("активные акт"),de=(0,i.Uk)("удаленные акт"),oe=(0,i._)("img",{src:"image/completion_act.png",alt:""},null,-1),se=(0,i._)("div",null,"Создать новую запись",-1);function ne(e,t,l,a,d,o){const s=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),c=(0,i.up)("q-btn"),m=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),h=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),f=(0,i.up)("q-list"),k=(0,i.up)("q-input"),b=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),y=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[te,d.deleted?((0,i.wg)(),(0,i.iD)("span",le,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[ie])),_:1})])),_:1},8,["onClick"])),d.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(c,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[ae])),_:1})])),_:1})):(0,i.kq)("",!0),d.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[de])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(f,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/completion_act/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[oe])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(v,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[se,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[W]])])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.item.title=e),label:e.$t("completion_act.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const ce={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("completion_act_list",{technical_task_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,technical_task_id:this.id},this.item);this.$utils.callPgMethod("completion_act_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("completion_act_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},me=(0,$.Z)(ce,[["render",ne]]),ue=me;J()(ce,"components",{QBar:j.Z,QSpace:S.Z,QBtn:A.Z,QTooltip:M.Z,QList:P.Z,QItem:L.Z,QItemSection:B.Z,QAvatar:N.Z,QItemLabel:R.Z,QBadge:z.Z,QIcon:O.Z,QDialog:K.Z,QCard:T.Z,QCardSection:H.Z,QInput:Y.Z,QCardActions:E.Z}),J()(ce,"directives",{ClosePopup:F.Z});const re=(0,i.Uk)("счета "),pe={key:0},_e=(0,i.Uk)("Добавить"),we=(0,i.Uk)("активные счета"),he=(0,i.Uk)("удаленные счета"),ge=(0,i._)("img",{src:"image/invoice.svg",alt:""},null,-1),fe=(0,i._)("div",null,"Создать новую запись",-1);function ke(e,t,l,a,d,o){const s=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),c=(0,i.up)("q-btn"),m=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),h=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),f=(0,i.up)("q-list"),k=(0,i.up)("q-input"),b=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),y=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[re,d.deleted?((0,i.wg)(),(0,i.iD)("span",pe,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[_e])),_:1})])),_:1},8,["onClick"])),d.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(c,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[we])),_:1})])),_:1})):(0,i.kq)("",!0),d.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[he])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(f,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/invoice/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[ge])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(v,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[fe,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[W]])])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.item.title=e),label:e.$t("invoice.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const be={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("invoice_list",{technical_task_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,technical_task_id:this.id},this.item);this.$utils.callPgMethod("invoice_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("invoice_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},qe=(0,$.Z)(be,[["render",ke]]),ye=qe;J()(be,"components",{QBar:j.Z,QSpace:S.Z,QBtn:A.Z,QTooltip:M.Z,QList:P.Z,QItem:L.Z,QItemSection:B.Z,QAvatar:N.Z,QItemLabel:R.Z,QBadge:z.Z,QIcon:O.Z,QDialog:K.Z,QCard:T.Z,QCardSection:H.Z,QInput:Y.Z,QCardActions:E.Z}),J()(be,"directives",{ClosePopup:F.Z});var ve=l(43015);const We={props:["id","isOpenInDialog"],components:{invoiceListRefListWidget:ye,functionalRequirementListRefListWidget:ee,completionActListRefListWidget:ue},mixins:[ve.Z],computed:{docUrl:function(){return"/technical_task"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"state_id",label:"статус"},{name:"work_state_id",label:"статус работ по ТЗ"},{name:"number",label:"номер"},{name:"amount",label:"сумма"},{name:"date",label:"дата подписания ТЗ"},{name:"contract_id",label:"договор"},{name:"description",label:"описание"},{name:"draft",label:"черновик"},{name:"signed",label:"подписанное"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"technical_task_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"technical_task_get_by_id",cb:e})}},mounted(){this.reload()}};var Ze=l(24379);const xe=(0,$.Z)(We,[["render",v]]),Qe=xe;J()(We,"components",{QPage:Ze.Z,QInput:Y.Z,QBtn:A.Z})}}]);