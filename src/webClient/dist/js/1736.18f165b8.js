"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[1736],{71736:(e,l,t)=>{t.r(l),t.d(l,{default:()=>C});t(90246);var m=t(34182);const o={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},s={class:"col-md-4 col-sm-6 col-xs-12"},a={class:"col-md-2 col-sm-3 col-xs-6"},d={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-2 col-sm-3 col-xs-6"},r={class:"col-md-2 col-sm-3 col-xs-6"},u={class:"col-md-4 col-sm-6 col-xs-12"},p={class:"row q-col-gutter-md q-mb-sm"},b={class:"col-md-4 col-sm-6 col-xs-12"},_={class:"row q-col-gutter-md q-mb-sm"},g={class:"col-md-8 col-sm-12 col-xs-12"};function x(e,l,t,x,v,y){const f=(0,m.up)("comp-breadcrumb"),w=(0,m.up)("q-input"),q=(0,m.up)("comp-fld-ref-search"),h=(0,m.up)("comp-fld-date-time"),k=(0,m.up)("comp-item-btn-save"),$=(0,m.up)("q-btn"),I=(0,m.up)("q-page");return(0,m.wg)(),(0,m.j4)(I,{padding:""},{default:(0,m.w5)((()=>[t.isOpenInDialog?(0,m.kq)("",!0):((0,m.wg)(),(0,m.j4)(f,{key:0,list:[{label:"Время",to:"/time",docType:"time"},{label:v.item?v.item.title?v.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),v.item?((0,m.wg)(),(0,m.iD)("div",o,[(0,m._)("div",i,[(0,m._)("div",s,[(0,m.Wm)(w,{outlined:"",type:"text",modelValue:v.item.title,"onUpdate:modelValue":l[0]||(l[0]=e=>v.item.title=e),label:e.$t("time.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,m._)("div",a,[(0,m.Wm)(w,{outlined:"",type:"number",modelValue:v.item.effort,"onUpdate:modelValue":l[1]||(l[1]=e=>v.item.effort=e),label:e.$t("time.effort"),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["modelValue","label"])]),(0,m._)("div",d,[(0,m.Wm)(q,{outlined:"",pgMethod:"ctlg_time_state_list",label:e.$t("time.state_id"),item:v.item.state_title,itemId:v.item.state_id,ext:{},onUpdate:l[2]||(l[2]=e=>v.item.state_id=e.id),onClear:l[3]||(l[3]=e=>v.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,m._)("div",c,[(0,m._)("div",n,[(0,m.Wm)(h,{outlined:"",label:e.$t("time.start_time"),"date-string":e.$utils.formatPgDateTime(v.item.start_time),onUpdate:l[4]||(l[4]=e=>v.item.start_time=e),onClear:l[5]||(l[5]=e=>v.item.start_time=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,m._)("div",r,[(0,m.Wm)(h,{outlined:"",label:e.$t("time.end_time"),"date-string":e.$utils.formatPgDateTime(v.item.end_time),onUpdate:l[6]||(l[6]=e=>v.item.end_time=e),onClear:l[7]||(l[7]=e=>v.item.end_time=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,m._)("div",u,[(0,m.Wm)(q,{outlined:"",pgMethod:"man_list",label:e.$t("time.executor_id"),item:v.item.executor_title,itemId:v.item.executor_id,ext:{avatar:"image/man.svg",isClearable:"true",pathUrl:"/man"},onUpdate:l[8]||(l[8]=e=>v.item.executor_id=e.id),onClear:l[9]||(l[9]=e=>v.item.executor_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])])]),(0,m._)("div",p,[(0,m._)("div",b,[(0,m.Wm)(q,{outlined:"",pgMethod:"work_list",label:e.$t("time.work_id"),item:v.item.work_title,itemId:v.item.work_id,ext:{avatar:"image/work.png",isClearable:"true",pathUrl:"/work"},onUpdate:l[10]||(l[10]=e=>v.item.work_id=e.id),onClear:l[11]||(l[11]=e=>v.item.work_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])])]),(0,m._)("div",_,[(0,m._)("div",g,[(0,m.Wm)(w,{outlined:"",type:"text",modelValue:v.item.description,"onUpdate:modelValue":l[12]||(l[12]=e=>v.item.description=e),label:e.$t("time.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),t.isOpenInDialog?((0,m.wg)(),(0,m.j4)($,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:y.save},null,8,["label","onClick"])):((0,m.wg)(),(0,m.j4)(k,{key:0,onSave:y.save,readonly:!1,onCancel:l[13]||(l[13]=l=>e.$router.push(y.docUrl))},null,8,["onSave"]))])):(0,m.kq)("",!0)])),_:1})}var v=t(43015);const y={props:["id","isOpenInDialog"],components:{},mixins:[v.Z],computed:{docUrl:function(){return"/time"}},data(){return{item:null,flds:[{name:"title",label:"название"},{name:"effort",label:"полезная нагрузка"},{name:"state_id",label:"статус"},{name:"start_time",label:"начало"},{name:"end_time",label:"завершение"},{name:"executor_id",label:"исполнитель"},{name:"work_id",label:"работа"},{name:"description",label:"описание"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"time_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"time_get_by_id",cb:e})}},mounted(){this.reload()}};var f=t(74260),w=t(24379),q=t(34842),h=t(2165),k=t(7518),$=t.n(k);const I=(0,f.Z)(y,[["render",x]]),C=I;$()(y,"components",{QPage:w.Z,QInput:q.Z,QBtn:h.Z})}}]);