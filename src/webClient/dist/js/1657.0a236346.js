"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[1657],{1657:(t,e,l)=>{l.r(e),l.d(e,{default:()=>q});var a=l(34182);const o={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},s={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"col-md-2 col-sm-3 col-xs-6"},m={class:"col-md-2 col-sm-3 col-xs-6"},d={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-4 col-sm-6 col-xs-12"};function r(t,e,l,r,u,p){const _=(0,a.up)("comp-breadcrumb"),b=(0,a.up)("q-input"),h=(0,a.up)("comp-fld-date"),g=(0,a.up)("comp-fld-ref-search"),k=(0,a.up)("comp-item-btn-save"),v=(0,a.up)("q-btn"),y=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(y,{padding:""},{default:(0,a.w5)((()=>[l.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(_,{key:0,list:[{label:"Акты выполненных работ",to:"/completion_act",docType:"completion_act"},{label:u.item?u.item.title?u.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),u.item?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",i,[(0,a._)("div",s,[(0,a.Wm)(b,{outlined:"",type:"text",modelValue:u.item.title,"onUpdate:modelValue":e[0]||(e[0]=t=>u.item.title=t),label:t.$t("completion_act.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,a._)("div",c,[(0,a.Wm)(h,{outlined:"",label:t.$t("completion_act.date"),"date-string":t.$utils.formatPgDate(u.item.date),onUpdate:e[1]||(e[1]=t=>u.item.date=t),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a._)("div",m,[(0,a.Wm)(g,{outlined:"",pgMethod:"ctlg_completion_act_state_list",label:t.$t("completion_act.state_id"),item:u.item.state_title,itemId:u.item.state_id,ext:{isClearable:"true"},onUpdate:e[2]||(e[2]=t=>u.item.state_id=t.id),onClear:e[3]||(e[3]=t=>u.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,a._)("div",d,[(0,a._)("div",n,[(0,a.Wm)(g,{outlined:"",pgMethod:"technical_task_list",label:t.$t("completion_act.technical_task_id"),item:u.item.technical_task_title,itemId:u.item.technical_task_id,ext:{isClearable:"true"},onUpdate:e[4]||(e[4]=t=>u.item.technical_task_id=t.id),onClear:e[5]||(e[5]=t=>u.item.technical_task_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),l.isOpenInDialog?((0,a.wg)(),(0,a.j4)(v,{key:1,color:"secondary",label:t.$t("message.save"),class:"q-mr-sm",onClick:p.save},null,8,["label","onClick"])):((0,a.wg)(),(0,a.j4)(k,{key:0,onSave:p.save,readonly:!1,onCancel:e[6]||(e[6]=e=>t.$router.push(p.docUrl))},null,8,["onSave"]))])):(0,a.kq)("",!0)])),_:1})}var u=l(43015);const p={props:["id","isOpenInDialog"],components:{},mixins:[u.Z],computed:{docUrl:function(){return"/completion_act"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"date",label:"дата подписи"},{name:"state_id",label:"статус"},{name:"technical_task_id",label:"техническое задание"}],optionsFlds:[]}},watch:{},methods:{resultModify(t){return t},save(){this.$utils.saveItem.call(this,{method:"completion_act_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let t=t=>{this.item=this.resultModify(t)};this.$utils.getDocItemById.call(this,{method:"completion_act_get_by_id",cb:t})}},mounted(){this.reload()}};var _=l(74260),b=l(24379),h=l(34842),g=l(2165),k=l(7518),v=l.n(k);const y=(0,_.Z)(p,[["render",r]]),q=y;v()(p,"components",{QPage:b.Z,QInput:h.Z,QBtn:g.Z})}}]);