"use strict";(self["webpackChunkCounter"]=self["webpackChunkCounter"]||[]).push([[5193],{65193:(t,e,l)=>{l.r(e),l.d(e,{default:()=>b});var s=l(75305);const o={key:1,class:"q-mt-sm"},a={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"};function n(t,e,l,n,m,c){const d=(0,s.up)("comp-breadcrumb"),u=(0,s.up)("q-input"),r=(0,s.up)("comp-item-btn-save"),p=(0,s.up)("q-btn"),g=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(g,{padding:""},{default:(0,s.w5)((()=>[l.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(d,{key:0,list:[{label:"Статусы систем",to:"/ctlg_system_state",docType:"ctlg_system_state"},{label:m.item?m.item.title?m.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),m.item?((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s._)("div",i,[(0,s.Wm)(u,{outlined:"",type:"text",modelValue:m.item.title,"onUpdate:modelValue":e[0]||(e[0]=t=>m.item.title=t),label:t.$t("ctlg_system_state.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,s.wg)(),(0,s.j4)(p,{key:1,color:"secondary",label:t.$t("message.save"),class:"q-mr-sm",onClick:c.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(r,{key:0,onSave:c.save,readonly:!1,onCancel:e[1]||(e[1]=e=>t.$router.push(c.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var m=l(43015);const c={props:["id","isOpenInDialog"],components:{},mixins:[m.Z],computed:{docUrl:function(){return"/ctlg_system_state"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(t){return t},save(){this.$utils.saveItem.call(this,{method:"ctlg_system_state_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let t=t=>{this.item=this.resultModify(t)};this.$utils.getDocItemById.call(this,{method:"ctlg_system_state_get_by_id",cb:t})}},mounted(){this.reload()}};var d=l(74260),u=l(24379),r=l(34842),p=l(2165),g=l(7518),y=l.n(g);const _=(0,d.Z)(c,[["render",n]]),b=_;y()(c,"components",{QPage:u.Z,QInput:r.Z,QBtn:p.Z})}}]);