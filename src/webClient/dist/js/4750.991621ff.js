"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[4750],{64750:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});l(90246);var a=l(34182);const o={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},s={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"col-md-2 col-sm-3 col-xs-6"},m={class:"col-md-2 col-sm-3 col-xs-6"},d={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-4 col-sm-6 col-xs-12"},u={class:"col-md-4 col-sm-6 col-xs-12"},r={class:"row q-col-gutter-md q-mb-sm"},p={class:"col-md-8 col-sm-12 col-xs-12"};function _(e,t,l,_,b,h){const g=(0,a.up)("comp-breadcrumb"),v=(0,a.up)("q-input"),k=(0,a.up)("comp-fld-date"),y=(0,a.up)("comp-fld-ref-search"),q=(0,a.up)("comp-fld-files"),f=(0,a.up)("comp-item-btn-save"),x=(0,a.up)("q-btn"),w=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(w,{padding:""},{default:(0,a.w5)((()=>[l.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(g,{key:0,list:[{label:"Акты выполненных работ",to:"/completion_act",docType:"completion_act"},{label:b.item?b.item.title?b.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),b.item?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",i,[(0,a._)("div",s,[(0,a.Wm)(v,{outlined:"",type:"text",modelValue:b.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>b.item.title=e),label:e.$t("completion_act.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,a._)("div",c,[(0,a.Wm)(k,{outlined:"",label:e.$t("completion_act.date"),"date-string":e.$utils.formatPgDate(b.item.date),onUpdate:t[1]||(t[1]=e=>b.item.date=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a._)("div",m,[(0,a.Wm)(y,{outlined:"",pgMethod:"ctlg_completion_act_state_list",label:e.$t("completion_act.state_id"),item:b.item.state_title,itemId:b.item.state_id,ext:{isClearable:"true"},onUpdate:t[2]||(t[2]=e=>b.item.state_id=e.id),onClear:t[3]||(t[3]=e=>b.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,a._)("div",d,[(0,a._)("div",n,[(0,a.Wm)(y,{outlined:"",pgMethod:"technical_task_list",label:e.$t("completion_act.technical_task_id"),item:b.item.technical_task_title,itemId:b.item.technical_task_id,ext:{avatar:"image/technical_task.svg",isClearable:"true",pathUrl:"/technical_task"},onUpdate:t[4]||(t[4]=e=>b.item.technical_task_id=e.id),onClear:t[5]||(t[5]=e=>b.item.technical_task_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])]),(0,a._)("div",u,["new"!=this.id?((0,a.wg)(),(0,a.j4)(q,{key:0,fldName:"document",label:e.$t("completion_act.document"),fld:b.item.document,ext:{tableName:"completion_act",tableId:this.id},onUpdate:t[6]||(t[6]=e=>b.item.document=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,a.kq)("",!0)])]),(0,a._)("div",r,[(0,a._)("div",p,[(0,a.Wm)(v,{outlined:"",type:"text",modelValue:b.item.description,"onUpdate:modelValue":t[7]||(t[7]=e=>b.item.description=e),label:e.$t("completion_act.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,a.wg)(),(0,a.j4)(x,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:h.save},null,8,["label","onClick"])):((0,a.wg)(),(0,a.j4)(f,{key:0,onSave:h.save,readonly:!1,onCancel:t[8]||(t[8]=t=>e.$router.push(h.docUrl))},null,8,["onSave"]))])):(0,a.kq)("",!0)])),_:1})}var b=l(43015);const h={props:["id","isOpenInDialog"],components:{},mixins:[b.Z],computed:{docUrl:function(){return"/completion_act"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"date",label:"дата подписи"},{name:"state_id",label:"статус"},{name:"technical_task_id",label:"техническое задание"},{name:"document",label:"документ"},{name:"description",label:"описание"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"completion_act_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"completion_act_get_by_id",cb:e})}},mounted(){this.reload()}};var g=l(74260),v=l(24379),k=l(34842),y=l(2165),q=l(7518),f=l.n(q);const x=(0,g.Z)(h,[["render",_]]),w=x;f()(h,"components",{QPage:v.Z,QInput:k.Z,QBtn:y.Z})}}]);