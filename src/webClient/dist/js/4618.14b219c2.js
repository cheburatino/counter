"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[4618],{94618:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var o=l(34182);const s={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},r={class:"col-md-4 col-sm-6 col-xs-12"};function a(e,t,l,a,n,c){const u=(0,o.up)("comp-breadcrumb"),d=(0,o.up)("q-input"),m=(0,o.up)("comp-item-btn-save"),p=(0,o.up)("q-btn"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,{padding:""},{default:(0,o.w5)((()=>[l.isOpenInDialog?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:0,list:[{label:"Приоритеты запросов",to:"/ctlg_request_priority",docType:"ctlg_request_priority"},{label:n.item?n.item.title?n.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),n.item?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",i,[(0,o._)("div",r,[(0,o.Wm)(d,{outlined:"",type:"text",modelValue:n.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>n.item.title=e),label:e.$t("ctlg_request_priority.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,o.wg)(),(0,o.j4)(p,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:c.save},null,8,["label","onClick"])):((0,o.wg)(),(0,o.j4)(m,{key:0,onSave:c.save,readonly:!1,onCancel:t[1]||(t[1]=t=>e.$router.push(c.docUrl))},null,8,["onSave"]))])):(0,o.kq)("",!0)])),_:1})}var n=l(43015);const c={props:["id","isOpenInDialog"],components:{},mixins:[n.Z],computed:{docUrl:function(){return"/ctlg_request_priority"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"ctlg_request_priority_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"ctlg_request_priority_get_by_id",cb:e})}},mounted(){this.reload()}};var u=l(74260),d=l(24379),m=l(34842),p=l(2165),g=l(7518),y=l.n(g);const _=(0,u.Z)(c,[["render",a]]),b=_;y()(c,"components",{QPage:d.Z,QInput:m.Z,QBtn:p.Z})}}]);