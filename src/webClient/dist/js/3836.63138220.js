"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[3836],{23836:(e,l,t)=>{t.r(l),t.d(l,{default:()=>$});var a=t(34182);const i={key:1,class:"q-mt-sm"},s={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"col-md-2 col-sm-3 col-xs-6"},m={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-2 col-sm-3 col-xs-6"},r={class:"col-md-2 col-sm-3 col-xs-6"},u={class:"col-md-2 col-sm-3 col-xs-6"},_={class:"col-md-2 col-sm-3 col-xs-6"};function p(e,l,t,p,b,v){const g=(0,a.up)("comp-breadcrumb"),h=(0,a.up)("q-input"),y=(0,a.up)("comp-fld-ref-search"),f=(0,a.up)("comp-fld-date"),k=(0,a.up)("comp-item-btn-save"),x=(0,a.up)("q-btn"),q=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(q,{padding:""},{default:(0,a.w5)((()=>[t.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(g,{key:0,list:[{label:"Счета",to:"/invoice",docType:"invoice"},{label:b.item?b.item.title?b.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),b.item?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",s,[(0,a._)("div",o,[(0,a.Wm)(h,{outlined:"",type:"text",modelValue:b.item.title,"onUpdate:modelValue":l[0]||(l[0]=e=>b.item.title=e),label:e.$t("invoice.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,a._)("div",d,[(0,a.Wm)(h,{outlined:"",type:"number",modelValue:b.item.total_amount,"onUpdate:modelValue":l[1]||(l[1]=e=>b.item.total_amount=e),label:e.$t("invoice.total_amount"),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["modelValue","label"])]),(0,a._)("div",m,[(0,a.Wm)(y,{outlined:"",pgMethod:"ctlg_invoice_state_list",label:e.$t("invoice.state_id"),item:b.item.state_title,itemId:b.item.state_id,ext:{avatar:"image/catalog.svg",isClearable:"true",pathUrl:"/ctlg_invoice_state"},onUpdate:l[2]||(l[2]=e=>b.item.state_id=e.id),onClear:l[3]||(l[3]=e=>b.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])])]),(0,a._)("div",c,[(0,a._)("div",n,[(0,a.Wm)(y,{outlined:"",pgMethod:"technical_task_list",label:e.$t("invoice.technical_task_id"),item:b.item.technical_task_title,itemId:b.item.technical_task_id,ext:{avatar:"image/technical_task.svg",isClearable:"true",pathUrl:"/technical_task"},onUpdate:l[4]||(l[4]=e=>b.item.technical_task_id=e.id),onClear:l[5]||(l[5]=e=>b.item.technical_task_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])]),(0,a._)("div",r,[(0,a.Wm)(f,{outlined:"",label:e.$t("invoice.date_plan_paid"),"date-string":e.$utils.formatPgDate(b.item.date_plan_paid),onUpdate:l[6]||(l[6]=e=>b.item.date_plan_paid=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a._)("div",u,[(0,a.Wm)(f,{outlined:"",label:e.$t("invoice.date_transfer"),"date-string":e.$utils.formatPgDate(b.item.date_transfer),onUpdate:l[7]||(l[7]=e=>b.item.date_transfer=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a._)("div",_,[(0,a.Wm)(f,{outlined:"",label:e.$t("invoice.date_paid"),"date-string":e.$utils.formatPgDate(b.item.date_paid),onUpdate:l[8]||(l[8]=e=>b.item.date_paid=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])])]),t.isOpenInDialog?((0,a.wg)(),(0,a.j4)(x,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:v.save},null,8,["label","onClick"])):((0,a.wg)(),(0,a.j4)(k,{key:0,onSave:v.save,readonly:!1,onCancel:l[9]||(l[9]=l=>e.$router.push(v.docUrl))},null,8,["onSave"]))])):(0,a.kq)("",!0)])),_:1})}var b=t(43015);const v={props:["id","isOpenInDialog"],components:{},mixins:[b.Z],computed:{docUrl:function(){return"/invoice"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"total_amount",label:"сумма"},{name:"state_id",label:"статус"},{name:"technical_task_id",label:"техническое задание"},{name:"date_plan_paid",label:"планируемая дата оплаты"},{name:"date_transfer",label:"дата выставления"},{name:"date_paid",label:"дата оплаты"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"invoice_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"invoice_get_by_id",cb:e})}},mounted(){this.reload()}};var g=t(74260),h=t(24379),y=t(34842),f=t(2165),k=t(7518),x=t.n(k);const q=(0,g.Z)(v,[["render",p]]),$=q;x()(v,"components",{QPage:h.Z,QInput:y.Z,QBtn:f.Z})}}]);