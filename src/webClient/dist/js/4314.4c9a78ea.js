"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[4314],{34314:(e,l,t)=>{t.r(l),t.d(l,{default:()=>J});var a=t(34182);const i={key:1,class:"q-mt-sm"},d={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},s={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"col-md-2 col-sm-3 col-xs-6"},m={class:"row q-col-gutter-md q-mb-sm"},c={class:"col-md-2 col-sm-3 col-xs-6"},u={class:"col-md-2 col-sm-3 col-xs-6"},r={class:"col-md-2 col-sm-3 col-xs-6"},p={class:"col-md-2 col-sm-3 col-xs-6"},_={class:"row q-col-gutter-md q-mb-sm"},g={class:"col-md-4 col-sm-6 col-xs-12"},v={class:"col-md-4 col-sm-6 col-xs-12"};function h(e,l,t,h,b,w){const f=(0,a.up)("comp-breadcrumb"),y=(0,a.up)("q-input"),k=(0,a.up)("comp-fld-ref-search"),q=(0,a.up)("comp-fld-date"),x=(0,a.up)("comp-fld-files"),W=(0,a.up)("payment-list-ref-list-widget"),Z=(0,a.up)("comp-item-btn-save"),C=(0,a.up)("q-btn"),U=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(U,{padding:""},{default:(0,a.w5)((()=>[t.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(f,{key:0,list:[{label:"Счета",to:"/invoice",docType:"invoice"},{label:b.item?b.item.title?b.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),b.item?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",d,[(0,a._)("div",o,[(0,a.Wm)(y,{outlined:"",type:"text",modelValue:b.item.title,"onUpdate:modelValue":l[0]||(l[0]=e=>b.item.title=e),label:e.$t("invoice.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,a._)("div",s,[(0,a.Wm)(y,{outlined:"",type:"number",modelValue:b.item.amount,"onUpdate:modelValue":l[1]||(l[1]=e=>b.item.amount=e),label:e.$t("invoice.amount"),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["modelValue","label"])]),(0,a._)("div",n,[(0,a.Wm)(k,{outlined:"",pgMethod:"ctlg_invoice_state_list",label:e.$t("invoice.state_id"),item:b.item.state_title,itemId:b.item.state_id,ext:{avatar:"image/catalog.svg",isClearable:"true",pathUrl:"/ctlg_invoice_state"},onUpdate:l[2]||(l[2]=e=>b.item.state_id=e.id),onClear:l[3]||(l[3]=e=>b.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])])]),(0,a._)("div",m,[(0,a._)("div",c,[(0,a.Wm)(k,{outlined:"",pgMethod:"technical_task_list",label:e.$t("invoice.technical_task_id"),item:b.item.technical_task_title,itemId:b.item.technical_task_id,ext:{avatar:"image/technical_task.svg",isClearable:"true",pathUrl:"/technical_task"},onUpdate:l[4]||(l[4]=e=>b.item.technical_task_id=e.id),onClear:l[5]||(l[5]=e=>b.item.technical_task_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])]),(0,a._)("div",u,[(0,a.Wm)(q,{outlined:"",label:e.$t("invoice.date_transfer"),"date-string":e.$utils.formatPgDate(b.item.date_transfer),onUpdate:l[6]||(l[6]=e=>b.item.date_transfer=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a._)("div",r,[(0,a.Wm)(q,{outlined:"",label:e.$t("invoice.date_plan_paid"),"date-string":e.$utils.formatPgDate(b.item.date_plan_paid),onUpdate:l[7]||(l[7]=e=>b.item.date_plan_paid=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a._)("div",p,[(0,a.Wm)(q,{outlined:"",label:e.$t("invoice.date_paid"),"date-string":e.$utils.formatPgDate(b.item.date_paid),onUpdate:l[8]||(l[8]=e=>b.item.date_paid=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])])]),(0,a._)("div",_,[(0,a._)("div",g,["new"!=this.id?((0,a.wg)(),(0,a.j4)(x,{key:0,fldName:"invoice_file",label:e.$t("invoice.invoice_file"),fld:b.item.invoice_file,ext:{tableName:"invoice",tableId:this.id},onUpdate:l[9]||(l[9]=e=>b.item.invoice_file=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,a.kq)("",!0)]),(0,a._)("div",v,[-1!=b.item.id?((0,a.wg)(),(0,a.j4)(W,{key:0,id:b.item.id,readonly:!1},null,8,["id"])):(0,a.kq)("",!0)])]),t.isOpenInDialog?((0,a.wg)(),(0,a.j4)(C,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:w.save},null,8,["label","onClick"])):((0,a.wg)(),(0,a.j4)(Z,{key:0,onSave:w.save,readonly:!1,onCancel:l[10]||(l[10]=l=>e.$router.push(w.docUrl))},null,8,["onSave"]))])):(0,a.kq)("",!0)])),_:1})}const b=(0,a.Uk)("платежи "),w={key:0},f=(0,a.Uk)("Добавить"),y=(0,a.Uk)("активные платежи"),k=(0,a.Uk)("удаленные платежи"),q=(0,a._)("img",{src:"image/payment.png",alt:""},null,-1),x=(0,a._)("div",null,"Создать новую запись",-1);function W(e,l,t,i,d,o){const s=(0,a.up)("q-space"),n=(0,a.up)("q-tooltip"),m=(0,a.up)("q-btn"),c=(0,a.up)("q-bar"),u=(0,a.up)("q-avatar"),r=(0,a.up)("q-item-section"),p=(0,a.up)("router-link"),_=(0,a.up)("q-item-label"),g=(0,a.up)("q-icon"),v=(0,a.up)("q-item"),h=(0,a.up)("q-list"),W=(0,a.up)("q-input"),Z=(0,a.up)("q-card-section"),C=(0,a.up)("q-card-actions"),U=(0,a.up)("q-card"),$=(0,a.up)("q-dialog"),Q=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c,{class:"bg-secondary text-white shadow-2"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[b,d.deleted?((0,a.wg)(),(0,a.iD)("span",w,"удаленные")):(0,a.kq)("",!0)]),(0,a.Wm)(s),t.readonly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[f])),_:1})])),_:1},8,["onClick"])),d.deleted&&!t.readonly?((0,a.wg)(),(0,a.j4)(m,{key:1,icon:"delete",round:"",flat:"",onClick:l[0]||(l[0]=e=>o.reload(!1))},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[y])),_:1})])),_:1})):(0,a.kq)("",!0),d.deleted||t.readonly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:2,icon:"delete_outline",round:"",flat:"",onClick:l[1]||(l[1]=e=>o.reload(!0))},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[k])),_:1})])),_:1}))])),_:1}),(0,a.Wm)(h,{bordered:"",separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.list,(e=>((0,a.wg)(),(0,a.j4)(v,{key:e.id},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{to:"/payment/"+e.id,style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{rounded:""},{default:(0,a.w5)((()=>[q])),_:1})])),_:1})])),_:2},1032,["to"]),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(e.title),1)])),_:2},1024),(0,a.Wm)(_,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Размер: "+(0,a.zw)(e.amount),1)])),_:2},1024)])),_:2},1024),t.readonly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(r,{key:0,side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{name:d.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:l=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,a.Wm)($,{modelValue:d.isShowAddDialog,"onUpdate:modelValue":l[3]||(l[3]=e=>d.isShowAddDialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{style:{width:"500px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[x,(0,a.Wm)(s),(0,a.wy)((0,a.Wm)(m,{dense:"",flat:"",icon:"close"},null,512),[[Q]])])),_:1}),(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":l[2]||(l[2]=e=>d.item.title=e),label:e.$t("payment.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,a.Wm)(C,{align:"right",class:"bg-white text-teal"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const Z={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("payment_list",{invoice_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,invoice_id:this.id},this.item);this.$utils.callPgMethod("payment_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("payment_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var C=t(74260),U=t(10846),$=t(62025),Q=t(2165),D=t(5363),I=t(27011),j=t(83414),V=t(52035),S=t(75096),M=t(2350),P=t(24554),A=t(46778),O=t(10151),B=t(25589),L=t(34842),N=t(99367),z=t(60677),R=t(7518),T=t.n(R);const E=(0,C.Z)(Z,[["render",W]]),F=E;T()(Z,"components",{QBar:U.Z,QSpace:$.Z,QBtn:Q.Z,QTooltip:D.Z,QList:I.Z,QItem:j.Z,QItemSection:V.Z,QAvatar:S.Z,QItemLabel:M.Z,QIcon:P.Z,QDialog:A.Z,QCard:O.Z,QCardSection:B.Z,QInput:L.Z,QCardActions:N.Z}),T()(Z,"directives",{ClosePopup:z.Z});var K=t(43015);const H={props:["id","isOpenInDialog"],components:{paymentListRefListWidget:F},mixins:[K.Z],computed:{docUrl:function(){return"/invoice"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"amount",label:"размер платежа"},{name:"state_id",label:"статус"},{name:"technical_task_id",label:"техническое задание"},{name:"date_transfer",label:"дата выставления"},{name:"date_plan_paid",label:"планируемая дата оплаты"},{name:"date_paid",label:"дата получения оплаты"},{name:"invoice_file",label:"счёт"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"invoice_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"invoice_get_by_id",cb:e})}},mounted(){this.reload()}};var Y=t(24379);const G=(0,C.Z)(H,[["render",h]]),J=G;T()(H,"components",{QPage:Y.Z,QInput:L.Z,QBtn:Q.Z})}}]);