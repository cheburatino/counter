"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[6597],{46597:(e,l,t)=>{t.r(l),t.d(l,{default:()=>U});var a=t(34182);const o={key:1,class:"q-mt-sm"},s={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"row q-col-gutter-md q-mb-sm"},m={class:"col-md-4 col-sm-6 col-xs-12"},r={class:"row q-col-gutter-md q-mb-sm"},u={class:"col-md-2 col-sm-3 col-xs-6"},p={class:"col-md-2 col-sm-3 col-xs-6"},b={class:"col-md-2 col-sm-3 col-xs-6"};function _(e,l,t,_,v,g){const h=(0,a.up)("comp-breadcrumb"),f=(0,a.up)("q-input"),y=(0,a.up)("q-select"),q=(0,a.up)("comp-fld-ref-search"),k=(0,a.up)("comp-fld-date"),x=(0,a.up)("comp-item-btn-save"),$=(0,a.up)("q-btn"),w=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(w,{padding:""},{default:(0,a.w5)((()=>[t.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:0,list:[{label:"Счета",to:"/invoice",docType:"invoice"},{label:v.item?v.item.title?v.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),v.item?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",s,[(0,a._)("div",i,[(0,a.Wm)(f,{outlined:"",type:"text",modelValue:v.item.title,"onUpdate:modelValue":l[0]||(l[0]=e=>v.item.title=e),label:e.$t("invoice.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,a._)("div",d,[(0,a.Wm)(f,{outlined:"",type:"number",modelValue:v.item.total_amount,"onUpdate:modelValue":l[1]||(l[1]=e=>v.item.total_amount=e),label:e.$t("invoice.total_amount"),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["modelValue","label"])]),(0,a._)("div",c,[(0,a.Wm)(y,{outlined:"",label:e.$t("invoice.state"),modelValue:v.item.state,"onUpdate:modelValue":l[2]||(l[2]=e=>v.item.state=e),options:[{label:"запланирован",value:"planned",color:""},{label:"выставлен",value:"transferred",color:""},{label:"оплачен",value:"paid",color:""}],readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","modelValue"])])]),(0,a._)("div",n,[(0,a._)("div",m,[(0,a.Wm)(q,{outlined:"",pgMethod:"technical_task_list",label:e.$t("invoice.technical_task_id"),item:v.item.technical_task_title,itemId:v.item.technical_task_id,ext:{avatar:"image/technical_task.svg",isClearable:"true",pathUrl:"/technical_task"},onUpdate:l[3]||(l[3]=e=>v.item.technical_task_id=e.id),onClear:l[4]||(l[4]=e=>v.item.technical_task_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])])]),(0,a._)("div",r,[(0,a._)("div",u,[(0,a.Wm)(k,{outlined:"",label:e.$t("invoice.date_plan_paid"),"date-string":e.$utils.formatPgDate(v.item.date_plan_paid),onUpdate:l[5]||(l[5]=e=>v.item.date_plan_paid=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a._)("div",p,[(0,a.Wm)(k,{outlined:"",label:e.$t("invoice.date_transfer"),"date-string":e.$utils.formatPgDate(v.item.date_transfer),onUpdate:l[6]||(l[6]=e=>v.item.date_transfer=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a._)("div",b,[(0,a.Wm)(k,{outlined:"",label:e.$t("invoice.date_paid"),"date-string":e.$utils.formatPgDate(v.item.date_paid),onUpdate:l[7]||(l[7]=e=>v.item.date_paid=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])])]),t.isOpenInDialog?((0,a.wg)(),(0,a.j4)($,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:g.save},null,8,["label","onClick"])):((0,a.wg)(),(0,a.j4)(x,{key:0,onSave:g.save,readonly:!1,onCancel:l[8]||(l[8]=l=>e.$router.push(g.docUrl))},null,8,["onSave"]))])):(0,a.kq)("",!0)])),_:1})}var v=t(43015);const g={props:["id","isOpenInDialog"],components:{},mixins:[v.Z],computed:{docUrl:function(){return"/invoice"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"total_amount",label:"сумма"},{name:"state",label:"статус"},{name:"technical_task_id",label:"техническое задание"},{name:"date_plan_paid",label:"планируемая дата оплаты"},{name:"date_transfer",label:"дата выставления"},{name:"date_paid",label:"дата оплаты"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){if(e.state){let l=[{label:"запланирован",value:"planned",color:""},{label:"выставлен",value:"transferred",color:""},{label:"оплачен",value:"paid",color:""}],t=l.find((l=>l.value===e.state));t&&(e.state={value:e.state,label:t.label})}return e},save(){this.$utils.saveItem.call(this,{method:"invoice_update",itemForSaveMod:{state:this.item.state?this.item.state.value:null},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"invoice_get_by_id",cb:e})}},mounted(){this.reload()}};var h=t(74260),f=t(24379),y=t(34842),q=t(72448),k=t(2165),x=t(7518),$=t.n(x);const w=(0,h.Z)(g,[["render",_]]),U=w;$()(g,"components",{QPage:f.Z,QInput:y.Z,QSelect:q.Z,QBtn:k.Z})}}]);