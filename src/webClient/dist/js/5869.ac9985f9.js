"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[5869],{45869:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var o=l(34182);const s={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},a={class:"col-md-4 col-sm-6 col-xs-12"};function n(e,t,l,n,m,r){const d=(0,o.up)("comp-breadcrumb"),c=(0,o.up)("q-input"),u=(0,o.up)("comp-item-btn-save"),p=(0,o.up)("q-btn"),h=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(h,{padding:""},{default:(0,o.w5)((()=>[l.isOpenInDialog?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0,list:[{label:"ЛУРВ",to:"/work_time_sheet",docType:"work_time_sheet"},{label:m.item?m.item.title?m.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),m.item?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",i,[(0,o._)("div",a,[(0,o.Wm)(c,{outlined:"",type:"text",modelValue:m.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>m.item.title=e),label:e.$t("work_time_sheet.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,o.wg)(),(0,o.j4)(p,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:r.save},null,8,["label","onClick"])):((0,o.wg)(),(0,o.j4)(u,{key:0,onSave:r.save,readonly:!1,onCancel:t[1]||(t[1]=t=>e.$router.push(r.docUrl))},null,8,["onSave"]))])):(0,o.kq)("",!0)])),_:1})}var m=l(43015);const r={props:["id","isOpenInDialog"],components:{},mixins:[m.Z],computed:{docUrl:function(){return"/work_time_sheet"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"work_time_sheet_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"work_time_sheet_get_by_id",cb:e})}},mounted(){this.reload()}};var d=l(74260),c=l(24379),u=l(34842),p=l(2165),h=l(7518),_=l.n(h);const k=(0,d.Z)(r,[["render",n]]),b=k;_()(r,"components",{QPage:c.Z,QInput:u.Z,QBtn:p.Z})}}]);