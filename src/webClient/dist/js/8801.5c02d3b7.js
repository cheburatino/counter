"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[8801],{8801:(e,t,l)=>{l.r(t),l.d(t,{default:()=>re});l(90246);var i=l(34182);const a={key:1,class:"q-mt-sm"},d={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},s={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},m={class:"col-md-2 col-sm-3 col-xs-6"},u={class:"col-md-2 col-sm-3 col-xs-6"},r={class:"col-md-4 col-sm-6 col-xs-12"},p={class:"row q-col-gutter-md q-mb-sm"},_={class:"col-md-8 col-sm-12 col-xs-12"},w={class:"row q-col-gutter-md q-mb-sm"},h={class:"col-md-4 col-sm-6 col-xs-12"},g={class:"col-md-2 col-sm-3 col-xs-6"},k={class:"col-md-2 col-sm-3 col-xs-6"};function f(e,t,l,f,b,q){const y=(0,i.up)("comp-breadcrumb"),v=(0,i.up)("q-input"),W=(0,i.up)("comp-fld-ref-search"),x=(0,i.up)("comp-fld-date"),Z=(0,i.up)("comp-fld-files"),Q=(0,i.up)("invoice-list-ref-list-widget"),C=(0,i.up)("completion-act-list-ref-list-widget"),U=(0,i.up)("comp-item-btn-save"),D=(0,i.up)("q-btn"),I=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(I,{padding:""},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(y,{key:0,list:[{label:"Технические задания",to:"/technical_task",docType:"technical_task"},{label:b.item?b.item.title?b.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),b.item?((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",d,[(0,i._)("div",o,[(0,i.Wm)(v,{outlined:"",type:"text",modelValue:b.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>b.item.title=e),label:e.$t("technical_task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,i._)("div",s,[(0,i.Wm)(W,{outlined:"",pgMethod:"ctlg_technical_task_state_list",label:e.$t("technical_task.state_id"),item:b.item.state_title,itemId:b.item.state_id,ext:{isClearable:"true"},onUpdate:t[1]||(t[1]=e=>b.item.state_id=e.id),onClear:t[2]||(t[2]=e=>b.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,i._)("div",n,[(0,i.Wm)(W,{outlined:"",pgMethod:"ctlg_technical_task_work_state_list",label:e.$t("technical_task.work_state_id"),item:b.item.work_state_title,itemId:b.item.work_state_id,ext:{isClearable:"true"},onUpdate:t[3]||(t[3]=e=>b.item.work_state_id=e.id),onClear:t[4]||(t[4]=e=>b.item.work_state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,i._)("div",c,[(0,i._)("div",m,[(0,i.Wm)(v,{outlined:"",type:"number",modelValue:b.item.amount,"onUpdate:modelValue":t[5]||(t[5]=e=>b.item.amount=e),label:e.$t("technical_task.amount"),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["modelValue","label"])]),(0,i._)("div",u,[(0,i.Wm)(x,{outlined:"",label:e.$t("technical_task.date"),"date-string":e.$utils.formatPgDate(b.item.date),onUpdate:t[6]||(t[6]=e=>b.item.date=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,i._)("div",r,[(0,i.Wm)(W,{outlined:"",pgMethod:"contract_list",label:e.$t("technical_task.contract_id"),item:b.item.contract_title,itemId:b.item.contract_id,ext:{avatar:"image/contract.svg",isClearable:"true",pathUrl:"/contract"},onUpdate:t[7]||(t[7]=e=>b.item.contract_id=e.id),onClear:t[8]||(t[8]=e=>b.item.contract_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])])]),(0,i._)("div",p,[(0,i._)("div",_,[(0,i.Wm)(v,{outlined:"",type:"text",modelValue:b.item.description,"onUpdate:modelValue":t[9]||(t[9]=e=>b.item.description=e),label:e.$t("technical_task.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i._)("div",w,[(0,i._)("div",h,["new"!=this.id?((0,i.wg)(),(0,i.j4)(Z,{key:0,fldName:"document",label:e.$t("technical_task.document"),fld:b.item.document,ext:{tableName:"technical_task",tableId:this.id},onUpdate:t[10]||(t[10]=e=>b.item.document=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,i.kq)("",!0)]),(0,i._)("div",g,[-1!=b.item.id?((0,i.wg)(),(0,i.j4)(Q,{key:0,id:b.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)]),(0,i._)("div",k,[-1!=b.item.id?((0,i.wg)(),(0,i.j4)(C,{key:0,id:b.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)(D,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:q.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(U,{key:0,onSave:q.save,readonly:!1,onCancel:t[11]||(t[11]=t=>e.$router.push(q.docUrl))},null,8,["onSave"]))])):(0,i.kq)("",!0)])),_:1})}const b=(0,i.Uk)("счета "),q={key:0},y=(0,i.Uk)("Добавить"),v=(0,i.Uk)("активные счета"),W=(0,i.Uk)("удаленные счета"),x=(0,i._)("img",{src:"image/invoice.svg",alt:""},null,-1),Z=(0,i._)("div",null,"Создать новую запись",-1);function Q(e,t,l,a,d,o){const s=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),c=(0,i.up)("q-btn"),m=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),h=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),k=(0,i.up)("q-list"),f=(0,i.up)("q-input"),Q=(0,i.up)("q-card-section"),C=(0,i.up)("q-card-actions"),U=(0,i.up)("q-card"),D=(0,i.up)("q-dialog"),I=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[b,d.deleted?((0,i.wg)(),(0,i.iD)("span",q,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[y])),_:1})])),_:1},8,["onClick"])),d.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(c,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[v])),_:1})])),_:1})):(0,i.kq)("",!0),d.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[W])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(k,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/invoice/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[x])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(D,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[Z,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[I]])])),_:1}),(0,i.Wm)(Q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.item.title=e),label:e.$t("invoice.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(C,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const C={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("invoice_list",{technical_task_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,technical_task_id:this.id},this.item);this.$utils.callPgMethod("invoice_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("invoice_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var U=l(74260),D=l(10846),I=l(62025),$=l(2165),V=l(5363),j=l(27011),S=l(83414),A=l(52035),M=l(75096),P=l(2350),B=l(69721),L=l(24554),O=l(46778),z=l(10151),N=l(25589),R=l(34842),K=l(99367),T=l(60677),E=l(7518),F=l.n(E);const H=(0,U.Z)(C,[["render",Q]]),Y=H;F()(C,"components",{QBar:D.Z,QSpace:I.Z,QBtn:$.Z,QTooltip:V.Z,QList:j.Z,QItem:S.Z,QItemSection:A.Z,QAvatar:M.Z,QItemLabel:P.Z,QBadge:B.Z,QIcon:L.Z,QDialog:O.Z,QCard:z.Z,QCardSection:N.Z,QInput:R.Z,QCardActions:K.Z}),F()(C,"directives",{ClosePopup:T.Z});const G=(0,i.Uk)("акт "),J={key:0},X=(0,i.Uk)("Добавить"),ee=(0,i.Uk)("активные акт"),te=(0,i.Uk)("удаленные акт"),le=(0,i._)("img",{src:"image/completion_act.png",alt:""},null,-1),ie=(0,i._)("div",null,"Создать новую запись",-1);function ae(e,t,l,a,d,o){const s=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),c=(0,i.up)("q-btn"),m=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),h=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),k=(0,i.up)("q-list"),f=(0,i.up)("q-input"),b=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),y=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[G,d.deleted?((0,i.wg)(),(0,i.iD)("span",J,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(s),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[X])),_:1})])),_:1},8,["onClick"])),d.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(c,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[ee])),_:1})])),_:1})):(0,i.kq)("",!0),d.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[te])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(k,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/completion_act/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[le])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(v,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[ie,(0,i.Wm)(s),(0,i.wy)((0,i.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[W]])])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.item.title=e),label:e.$t("completion_act.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const de={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("completion_act_list",{technical_task_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,technical_task_id:this.id},this.item);this.$utils.callPgMethod("completion_act_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("completion_act_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},oe=(0,U.Z)(de,[["render",ae]]),se=oe;F()(de,"components",{QBar:D.Z,QSpace:I.Z,QBtn:$.Z,QTooltip:V.Z,QList:j.Z,QItem:S.Z,QItemSection:A.Z,QAvatar:M.Z,QItemLabel:P.Z,QBadge:B.Z,QIcon:L.Z,QDialog:O.Z,QCard:z.Z,QCardSection:N.Z,QInput:R.Z,QCardActions:K.Z}),F()(de,"directives",{ClosePopup:T.Z});var ne=l(43015);const ce={props:["id","isOpenInDialog"],components:{invoiceListRefListWidget:Y,completionActListRefListWidget:se},mixins:[ne.Z],computed:{docUrl:function(){return"/technical_task"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"state_id",label:"статус"},{name:"work_state_id",label:"статус работ по ТЗ"},{name:"amount",label:"сумма"},{name:"date",label:"дата подписания ТЗ"},{name:"contract_id",label:"договор"},{name:"description",label:"описание"},{name:"document",label:"документ"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"technical_task_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"technical_task_get_by_id",cb:e})}},mounted(){this.reload()}};var me=l(24379);const ue=(0,U.Z)(ce,[["render",f]]),re=ue;F()(ce,"components",{QPage:me.Z,QInput:R.Z,QBtn:$.Z})}}]);