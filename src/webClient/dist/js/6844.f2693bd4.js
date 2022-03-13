"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[6844],{46844:(e,l,t)=>{t.r(l),t.d(l,{default:()=>q});var s=t(34182);const a={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"col-md-2 col-sm-3 col-xs-6"},m={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-8 col-sm-12 col-xs-12"};function u(e,l,t,u,r,b){const _=(0,s.up)("comp-breadcrumb"),p=(0,s.up)("q-input"),f=(0,s.up)("comp-fld-ref-search"),g=(0,s.up)("q-checkbox"),h=(0,s.up)("comp-item-btn-save"),v=(0,s.up)("q-btn"),x=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(x,{padding:""},{default:(0,s.w5)((()=>[t.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(_,{key:0,list:[{label:"Фильтры",to:"/ctlg_filter",docType:"ctlg_filter"},{label:r.item?r.item.title?r.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),r.item?((0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",i,[(0,s._)("div",o,[(0,s.Wm)(p,{outlined:"",type:"text",modelValue:r.item.title,"onUpdate:modelValue":l[0]||(l[0]=e=>r.item.title=e),label:e.$t("ctlg_filter.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,s._)("div",d,[(0,s.Wm)(f,{outlined:"",pgMethod:"user_list",label:e.$t("ctlg_filter.user_table_id"),item:r.item.user_table_title,itemId:r.item.user_table_id,ext:{},onUpdate:l[1]||(l[1]=e=>r.item.user_table_id=e.id),onClear:l[2]||(l[2]=e=>r.item.user_table_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,s._)("div",m,[(0,s.Wm)(g,{label:e.$t("ctlg_filter.is_default"),modelValue:r.item.is_default,"onUpdate:modelValue":l[3]||(l[3]=e=>r.item.is_default=e),disable:!1,"false-value":!1,"indeterminate-value":"some",class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","modelValue"])])]),(0,s._)("div",c,[(0,s._)("div",n,[(0,s.Wm)(p,{outlined:"",type:"text",modelValue:r.item.where_str,"onUpdate:modelValue":l[4]||(l[4]=e=>r.item.where_str=e),label:e.$t("ctlg_filter.where_str"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),t.isOpenInDialog?((0,s.wg)(),(0,s.j4)(v,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:b.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(h,{key:0,onSave:b.save,readonly:!1,onCancel:l[5]||(l[5]=l=>e.$router.push(b.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var r=t(43015);const b={props:["id","isOpenInDialog"],components:{},mixins:[r.Z],computed:{docUrl:function(){return"/ctlg_filter"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"user_table_id",label:"пользователь"},{name:"index",label:"список"},{name:"is_default",label:"по умолчанию"},{name:"where_str",label:"условия фильтра"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){if(e.index){let l=[{label:"задачи",value:"task",color:""},{label:"функциональные требования",value:"functional_requirement",color:""}],t=l.find((l=>l.value===e.index));t&&(e.index={value:e.index,label:t.label})}return e},save(){this.$utils.saveItem.call(this,{method:"ctlg_filter_update",itemForSaveMod:{index:this.item.index?this.item.index.value:null},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"ctlg_filter_get_by_id",cb:e})}},mounted(){this.reload()}};var _=t(74260),p=t(24379),f=t(34842),g=t(65735),h=t(2165),v=t(7518),x=t.n(v);const y=(0,_.Z)(b,[["render",u]]),q=y;x()(b,"components",{QPage:p.Z,QInput:f.Z,QCheckbox:g.Z,QBtn:h.Z})}}]);