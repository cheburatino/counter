"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[9583],{29583:(e,t,l)=>{l.r(t),l.d(t,{default:()=>k});var s=l(34182);const o={key:1,class:"q-mt-sm"},a={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-4 col-sm-6 col-xs-12"};function i(e,t,l,i,d,c){const m=(0,s.up)("comp-breadcrumb"),u=(0,s.up)("q-input"),r=(0,s.up)("comp-item-btn-save"),p=(0,s.up)("q-btn"),_=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(_,{padding:""},{default:(0,s.w5)((()=>[l.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(m,{key:0,list:[{label:"Статусы задач на разработку",to:"/ctlg_development_task_state",docType:"ctlg_development_task_state"},{label:d.item?d.item.title?d.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),d.item?((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s._)("div",n,[(0,s.Wm)(u,{outlined:"",type:"text",modelValue:d.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>d.item.title=e),label:e.$t("ctlg_development_task_state.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,s.wg)(),(0,s.j4)(p,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:c.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(r,{key:0,onSave:c.save,readonly:!1,onCancel:t[1]||(t[1]=t=>e.$router.push(c.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var d=l(43015);const c={props:["id","isOpenInDialog"],components:{},mixins:[d.Z],computed:{docUrl:function(){return"/ctlg_development_task_state"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"ctlg_development_task_state_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"ctlg_development_task_state_get_by_id",cb:e})}},mounted(){this.reload()}};var m=l(74260),u=l(24379),r=l(34842),p=l(2165),_=l(7518),g=l.n(_);const v=(0,m.Z)(c,[["render",i]]),k=v;g()(c,"components",{QPage:u.Z,QInput:r.Z,QBtn:p.Z})}}]);