"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[5762],{55762:(e,t,l)=>{l.r(t),l.d(t,{default:()=>h});var o=l(34182);const s={key:1,class:"q-mt-sm"},a={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-4 col-sm-6 col-xs-12"};function i(e,t,l,i,c,m){const d=(0,o.up)("comp-breadcrumb"),u=(0,o.up)("q-input"),r=(0,o.up)("comp-item-btn-save"),p=(0,o.up)("q-btn"),y=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(y,{padding:""},{default:(0,o.w5)((()=>[l.isOpenInDialog?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0,list:[{label:"Компании",to:"/company",docType:"company"},{label:c.item?c.item.title?c.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),c.item?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",a,[(0,o._)("div",n,[(0,o.Wm)(u,{outlined:"",type:"text",modelValue:c.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>c.item.title=e),label:e.$t("company.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,o.wg)(),(0,o.j4)(p,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:m.save},null,8,["label","onClick"])):((0,o.wg)(),(0,o.j4)(r,{key:0,onSave:m.save,readonly:!1,onCancel:t[1]||(t[1]=t=>e.$router.push(m.docUrl))},null,8,["onSave"]))])):(0,o.kq)("",!0)])),_:1})}var c=l(43015);const m={props:["id","isOpenInDialog"],components:{},mixins:[c.Z],computed:{docUrl:function(){return"/company"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"company_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"company_get_by_id",cb:e})}},mounted(){this.reload()}};var d=l(74260),u=l(24379),r=l(34842),p=l(2165),y=l(7518),b=l.n(y);const g=(0,d.Z)(m,[["render",i]]),h=g;b()(m,"components",{QPage:u.Z,QInput:r.Z,QBtn:p.Z})}}]);