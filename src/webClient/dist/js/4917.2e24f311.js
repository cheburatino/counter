(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[4917],{4917:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>b});var o=l(34182);const s={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-4 col-sm-6 col-xs-12"};function a(e,t,l,a,m,d){const c=(0,o.up)("comp-breadcrumb"),u=(0,o.up)("q-input"),r=(0,o.up)("comp-item-btn-save"),p=(0,o.up)("q-btn"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,{padding:""},{default:(0,o.w5)((()=>[l.isOpenInDialog?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(c,{key:0,list:[{label:"Встречи",to:"/meeting",docType:"meeting"},{label:m.item?m.item.title?m.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),m.item?((0,o.wg)(),(0,o.j4)("div",s,[(0,o.Wm)("div",i,[(0,o.Wm)("div",n,[(0,o.Wm)(u,{outlined:"",type:"text",modelValue:m.item.title,"onUpdate:modelValue":t[1]||(t[1]=e=>m.item.title=e),label:e.$t("meeting.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,o.wg)(),(0,o.j4)(p,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:d.save},null,8,["label","onClick"])):((0,o.wg)(),(0,o.j4)(r,{key:0,onSave:d.save,readonly:!1,onCancel:t[2]||(t[2]=t=>e.$router.push(d.docUrl))},null,8,["onSave"]))])):(0,o.kq)("",!0)])),_:1})}var m=l(43015);const d={props:["id","isOpenInDialog"],components:{},mixins:[m.Z],computed:{docUrl:function(){return"/meeting"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"meeting_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"meeting_get_by_id",cb:e})}},mounted(){this.reload()}};var c=l(24379),u=l(34842),r=l(2165),p=l(7518),g=l.n(p);d.render=a;const b=d;g()(d,"components",{QPage:c.Z,QInput:u.Z,QBtn:r.Z})}}]);