"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[4196],{34196:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var n=l(34182);const o={key:1,class:"q-mt-sm"},s={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"};function a(e,t,l,a,c,u){const r=(0,n.up)("comp-breadcrumb"),m=(0,n.up)("q-input"),d=(0,n.up)("comp-item-btn-save"),p=(0,n.up)("q-btn"),_=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(_,{padding:""},{default:(0,n.w5)((()=>[l.isOpenInDialog?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(r,{key:0,list:[{label:"Статусы функциональных требований",to:"/ctlg_functional_requirement_state",docType:"ctlg_functional_requirement_state"},{label:c.item?c.item.title?c.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),c.item?((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",s,[(0,n._)("div",i,[(0,n.Wm)(m,{outlined:"",type:"text",modelValue:c.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>c.item.title=e),label:e.$t("ctlg_functional_requirement_state.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,n.wg)(),(0,n.j4)(p,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:u.save},null,8,["label","onClick"])):((0,n.wg)(),(0,n.j4)(d,{key:0,onSave:u.save,readonly:!1,onCancel:t[1]||(t[1]=t=>e.$router.push(u.docUrl))},null,8,["onSave"]))])):(0,n.kq)("",!0)])),_:1})}var c=l(43015);const u={props:["id","isOpenInDialog"],components:{},mixins:[c.Z],computed:{docUrl:function(){return"/ctlg_functional_requirement_state"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"ctlg_functional_requirement_state_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"ctlg_functional_requirement_state_get_by_id",cb:e})}},mounted(){this.reload()}};var r=l(74260),m=l(24379),d=l(34842),p=l(2165),_=l(7518),g=l.n(_);const b=(0,r.Z)(u,[["render",a]]),f=b;g()(u,"components",{QPage:m.Z,QInput:d.Z,QBtn:p.Z})}}]);