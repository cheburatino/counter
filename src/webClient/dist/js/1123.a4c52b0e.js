(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[1123],{11123:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>g});var s=l(34182);const o={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-2 col-sm-3 col-xs-6"};function a(e,t,l,a,r,d){const m=(0,s.up)("comp-breadcrumb"),u=(0,s.up)("q-input"),c=(0,s.up)("comp-item-btn-save"),p=(0,s.up)("q-btn"),b=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(b,{padding:""},{default:(0,s.w5)((()=>[l.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(m,{key:0,list:[{label:"Спринты",to:"/sprint",docType:"sprint"},{label:r.item?r.item.title?r.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),r.item?((0,s.wg)(),(0,s.j4)("div",o,[(0,s.Wm)("div",i,[(0,s.Wm)("div",n,[(0,s.Wm)(u,{outlined:"",type:"text",modelValue:r.item.title,"onUpdate:modelValue":t[1]||(t[1]=e=>r.item.title=e),label:e.$t("sprint.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,s.wg)(),(0,s.j4)(p,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:d.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(c,{key:0,onSave:d.save,readonly:!1,onCancel:t[2]||(t[2]=t=>e.$router.push(d.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var r=l(43015);const d={props:["id","isOpenInDialog"],components:{},mixins:[r.Z],computed:{docUrl:function(){return"/sprint"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"sprint_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"sprint_get_by_id",cb:e})}},mounted(){this.reload()}};var m=l(24379),u=l(34842),c=l(2165),p=l(7518),b=l.n(p);d.render=a;const g=d;b()(d,"components",{QPage:m.Z,QInput:u.Z,QBtn:c.Z})}}]);