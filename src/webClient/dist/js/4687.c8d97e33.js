"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[4687],{4687:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});l(90246);var s=l(34182);const o={key:1,class:"q-mt-sm"},i=(0,s._)("div",{class:"row q-col-gutter-md q-mb-sm"}," not found vueFldTemplate for type `` ",-1),m={class:"row q-col-gutter-md q-mb-sm"},a={class:"col-md-4 col-sm-6 col-xs-12"},n={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"row q-col-gutter-md q-mb-sm"},r={class:"col-md-8 col-sm-12 col-xs-12"},c={class:"row q-col-gutter-md q-mb-sm"},u={class:"col-md-4 col-sm-6 col-xs-12"};function _(e,t,l,_,p,g){const q=(0,s.up)("comp-breadcrumb"),b=(0,s.up)("comp-fld-ref-search"),h=(0,s.up)("q-input"),v=(0,s.up)("comp-item-btn-save"),k=(0,s.up)("q-btn"),y=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(y,{padding:""},{default:(0,s.w5)((()=>[l.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(q,{key:0,list:[{label:"Связи запросов и представителей заказчиков",to:"/request_customer_agent_link",docType:"request_customer_agent_link"},{label:p.item?p.item.title?p.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),p.item?((0,s.wg)(),(0,s.iD)("div",o,[i,(0,s._)("div",m,[(0,s._)("div",a,[(0,s.Wm)(b,{outlined:"",pgMethod:"request_list",label:e.$t("request_customer_agent_link.request_id"),item:p.item.request_title,itemId:p.item.request_id,ext:{},onUpdate:t[0]||(t[0]=e=>p.item.request_id=e.id),onClear:t[1]||(t[1]=e=>p.item.request_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])]),(0,s._)("div",n,[(0,s.Wm)(b,{outlined:"",pgMethod:"man_list",label:e.$t("request_customer_agent_link.customer_agent_id"),item:p.item.customer_agent_title,itemId:p.item.customer_agent_id,ext:{},onUpdate:t[2]||(t[2]=e=>p.item.customer_agent_id=e.id),onClear:t[3]||(t[3]=e=>p.item.customer_agent_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,s._)("div",d,[(0,s._)("div",r,[(0,s.Wm)(h,{outlined:"",type:"text",modelValue:p.item.description,"onUpdate:modelValue":t[4]||(t[4]=e=>p.item.description=e),label:e.$t("request_customer_agent_link.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",c,[(0,s._)("div",u,[(0,s.Wm)(b,{outlined:"",pgMethod:"man_list",label:e.$t("request_customer_agent_link.author_id"),item:p.item.author_title,itemId:p.item.author_id,ext:{},onUpdate:t[5]||(t[5]=e=>p.item.author_id=e.id),onClear:t[6]||(t[6]=e=>p.item.author_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),l.isOpenInDialog?((0,s.wg)(),(0,s.j4)(k,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:g.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(v,{key:0,onSave:g.save,readonly:!1,onCancel:t[7]||(t[7]=t=>e.$router.push(g.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var p=l(43015);const g={props:["id","isOpenInDialog"],components:{},mixins:[p.Z],computed:{docUrl:function(){return"/request_customer_agent_link"}},data(){return{item:null,flds:[{name:"request_id",label:"запрос"},{name:"customer_agent_id",label:"представитель заказчика"},{name:"description",label:"описание"},{name:"author_id",label:"автор"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"request_customer_agent_link_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"request_customer_agent_link_get_by_id",cb:e})}},mounted(){this.reload()}};var q=l(74260),b=l(24379),h=l(34842),v=l(2165),k=l(7518),y=l.n(k);const f=(0,q.Z)(g,[["render",_]]),w=f;y()(g,"components",{QPage:b.Z,QInput:h.Z,QBtn:v.Z})}}]);