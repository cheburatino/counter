"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[8087],{18087:(l,e,t)=>{t.r(e),t.d(e,{default:()=>w});var a=t(34182);const o={key:1,class:"q-mt-sm"},s={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"col-md-2 col-sm-3 col-xs-6"},m={class:"col-md-2 col-sm-3 col-xs-6"},d={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-4 col-sm-6 col-xs-12"},u={class:"col-md-2 col-sm-3 col-xs-6"};function r(l,e,t,r,b,_){const v=(0,a.up)("comp-breadcrumb"),p=(0,a.up)("q-input"),g=(0,a.up)("comp-fld-ref-search"),f=(0,a.up)("q-checkbox"),h=(0,a.up)("q-select"),x=(0,a.up)("comp-item-btn-save"),y=(0,a.up)("q-btn"),k=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(k,{padding:""},{default:(0,a.w5)((()=>[t.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(v,{key:0,list:[{label:"Фильтры",to:"/ctlg_filter",docType:"ctlg_filter"},{label:b.item?b.item.title?b.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),b.item?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",s,[(0,a._)("div",i,[(0,a.Wm)(p,{outlined:"",type:"text",modelValue:b.item.title,"onUpdate:modelValue":e[0]||(e[0]=l=>b.item.title=l),label:l.$t("ctlg_filter.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,a._)("div",c,[(0,a.Wm)(g,{outlined:"",pgMethod:"user_list",label:l.$t("ctlg_filter.user_table_id"),item:b.item.user_table_title,itemId:b.item.user_table_id,ext:{},onUpdate:e[1]||(e[1]=l=>b.item.user_table_id=l.id),onClear:e[2]||(e[2]=l=>b.item.user_table_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,a._)("div",m,[(0,a.Wm)(f,{label:l.$t("ctlg_filter.is_default"),modelValue:b.item.is_default,"onUpdate:modelValue":e[3]||(e[3]=l=>b.item.is_default=l),disable:!1,"false-value":!1,"indeterminate-value":"some",class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","modelValue"])])]),(0,a._)("div",d,[(0,a._)("div",n,[(0,a.Wm)(p,{outlined:"",type:"text",modelValue:b.item.where_str,"onUpdate:modelValue":e[4]||(e[4]=l=>b.item.where_str=l),label:l.$t("ctlg_filter.where_str"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,a._)("div",u,[(0,a.Wm)(h,{outlined:"",label:l.$t("ctlg_filter.index"),modelValue:b.item.index,"onUpdate:modelValue":e[5]||(e[5]=l=>b.item.index=l),options:[{label:"системы",value:"system",color:""},{label:"задачи",value:"task",color:""},{label:"задачи разработки",value:"development_task",color:""},{label:"технические задания",value:"technical_task",color:""},{label:"договоры",value:"contract",color:""},{label:"счета",value:"invoice",color:""},{label:"платежи",value:"payment",color:""},{label:"встречи",value:"meeting",color:""}],readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","modelValue"])])]),t.isOpenInDialog?((0,a.wg)(),(0,a.j4)(y,{key:1,color:"secondary",label:l.$t("message.save"),class:"q-mr-sm",onClick:_.save},null,8,["label","onClick"])):((0,a.wg)(),(0,a.j4)(x,{key:0,onSave:_.save,readonly:!1,onCancel:e[6]||(e[6]=e=>l.$router.push(_.docUrl))},null,8,["onSave"]))])):(0,a.kq)("",!0)])),_:1})}var b=t(43015);const _={props:["id","isOpenInDialog"],components:{},mixins:[b.Z],computed:{docUrl:function(){return"/ctlg_filter"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"user_table_id",label:"пользователь"},{name:"is_default",label:"по умолчанию"},{name:"where_str",label:"условия фильтра"},{name:"index",label:"список"}],optionsFlds:[]}},watch:{},methods:{resultModify(l){if(l.index){let e=[{label:"системы",value:"system",color:""},{label:"задачи",value:"task",color:""},{label:"задачи разработки",value:"development_task",color:""},{label:"технические задания",value:"technical_task",color:""},{label:"договоры",value:"contract",color:""},{label:"счета",value:"invoice",color:""},{label:"платежи",value:"payment",color:""},{label:"встречи",value:"meeting",color:""}],t=e.find((e=>e.value===l.index));t&&(l.index={value:l.index,label:t.label})}return l},save(){this.$utils.saveItem.call(this,{method:"ctlg_filter_update",itemForSaveMod:{index:this.item.index?this.item.index.value:null},resultModify:this.resultModify})},reload(){let l=l=>{this.item=this.resultModify(l)};this.$utils.getDocItemById.call(this,{method:"ctlg_filter_get_by_id",cb:l})}},mounted(){this.reload()}};var v=t(74260),p=t(24379),g=t(34842),f=t(65735),h=t(72448),x=t(2165),y=t(7518),k=t.n(y);const q=(0,v.Z)(_,[["render",r]]),w=q;k()(_,"components",{QPage:p.Z,QInput:g.Z,QCheckbox:f.Z,QSelect:h.Z,QBtn:x.Z})}}]);