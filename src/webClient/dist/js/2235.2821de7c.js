"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[2235],{62235:(t,e,l)=>{l.r(e),l.d(e,{default:()=>k});var s=l(34182);const a={key:1,class:"q-mt-sm"},o={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"};function c(t,e,l,c,n,d){const u=(0,s.up)("comp-breadcrumb"),m=(0,s.up)("q-input"),r=(0,s.up)("comp-item-btn-save"),p=(0,s.up)("q-btn"),_=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(_,{padding:""},{default:(0,s.w5)((()=>[l.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u,{key:0,list:[{label:"Статусы технических заданий",to:"/ctlg_technical_task_state",docType:"ctlg_technical_task_state"},{label:n.item?n.item.title?n.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),n.item?((0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",o,[(0,s._)("div",i,[(0,s.Wm)(m,{outlined:"",type:"text",modelValue:n.item.title,"onUpdate:modelValue":e[0]||(e[0]=t=>n.item.title=t),label:t.$t("ctlg_technical_task_state.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,s.wg)(),(0,s.j4)(p,{key:1,color:"secondary",label:t.$t("message.save"),class:"q-mr-sm",onClick:d.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(r,{key:0,onSave:d.save,readonly:!1,onCancel:e[1]||(e[1]=e=>t.$router.push(d.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var n=l(43015);const d={props:["id","isOpenInDialog"],components:{},mixins:[n.Z],computed:{docUrl:function(){return"/ctlg_technical_task_state"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(t){return t},save(){this.$utils.saveItem.call(this,{method:"ctlg_technical_task_state_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let t=t=>{this.item=this.resultModify(t)};this.$utils.getDocItemById.call(this,{method:"ctlg_technical_task_state_get_by_id",cb:t})}},mounted(){this.reload()}};var u=l(74260),m=l(24379),r=l(34842),p=l(2165),_=l(7518),g=l.n(_);const h=(0,u.Z)(d,[["render",c]]),k=h;g()(d,"components",{QPage:m.Z,QInput:r.Z,QBtn:p.Z})}}]);