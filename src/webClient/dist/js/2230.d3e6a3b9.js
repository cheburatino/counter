"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[2230],{62230:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var o=l(34182);const s={key:1,class:"q-mt-sm"},n={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"};function a(e,t,l,a,m,c){const d=(0,o.up)("comp-breadcrumb"),u=(0,o.up)("q-input"),r=(0,o.up)("comp-item-btn-save"),p=(0,o.up)("q-btn"),b=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(b,{padding:""},{default:(0,o.w5)((()=>[l.isOpenInDialog?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0,list:[{label:"Комментарии",to:"/comment",docType:"comment"},{label:m.item?m.item.title?m.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),m.item?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",n,[(0,o._)("div",i,[(0,o.Wm)(u,{outlined:"",type:"text",modelValue:m.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>m.item.title=e),label:e.$t("comment.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,o.wg)(),(0,o.j4)(p,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:c.save},null,8,["label","onClick"])):((0,o.wg)(),(0,o.j4)(r,{key:0,onSave:c.save,readonly:!1,onCancel:t[1]||(t[1]=t=>e.$router.push(c.docUrl))},null,8,["onSave"]))])):(0,o.kq)("",!0)])),_:1})}var m=l(43015);const c={props:["id","isOpenInDialog"],components:{},mixins:[m.Z],computed:{docUrl:function(){return"/comment"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"comment_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"comment_get_by_id",cb:e})}},mounted(){this.reload()}};var d=l(74260),u=l(24379),r=l(34842),p=l(2165),b=l(7518),g=l.n(b);const h=(0,d.Z)(c,[["render",a]]),y=h;g()(c,"components",{QPage:u.Z,QInput:r.Z,QBtn:p.Z})}}]);