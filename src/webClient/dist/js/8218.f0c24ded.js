"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[8218],{48218:(l,e,t)=>{t.r(e),t.d(e,{default:()=>x});var o=t(75305);const s={key:1,class:"q-mt-sm"},a={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"col-md-4 col-sm-6 col-xs-12"},m={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"col-md-4 col-sm-6 col-xs-12"};function r(l,e,t,r,u,p){const y=(0,o.up)("comp-breadcrumb"),b=(0,o.up)("q-input"),_=(0,o.up)("comp-item-btn-save"),g=(0,o.up)("q-btn"),h=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(h,{padding:""},{default:(0,o.w5)((()=>[t.isOpenInDialog?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(y,{key:0,list:[{label:"Типы историй",to:"/ctlg_history_type",docType:"ctlg_history_type"},{label:u.item?u.item.title?u.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),u.item?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",a,[(0,o._)("div",i,[(0,o.Wm)(b,{outlined:"",type:"text",modelValue:u.item.title,"onUpdate:modelValue":e[0]||(e[0]=l=>u.item.title=l),label:l.$t("ctlg_history_type.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,o._)("div",c,[(0,o.Wm)(b,{outlined:"",type:"text",modelValue:u.item.entity,"onUpdate:modelValue":e[1]||(e[1]=l=>u.item.entity=l),label:l.$t("ctlg_history_type.entity"),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),(0,o._)("div",m,[(0,o._)("div",n,[(0,o.Wm)(b,{outlined:"",type:"text",modelValue:u.item.icon,"onUpdate:modelValue":e[2]||(e[2]=l=>u.item.icon=l),label:l.$t("ctlg_history_type.icon"),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,o._)("div",d,[(0,o.Wm)(b,{outlined:"",type:"text",modelValue:u.item.color,"onUpdate:modelValue":e[3]||(e[3]=l=>u.item.color=l),label:l.$t("ctlg_history_type.color"),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),t.isOpenInDialog?((0,o.wg)(),(0,o.j4)(g,{key:1,color:"secondary",label:l.$t("message.save"),class:"q-mr-sm",onClick:p.save},null,8,["label","onClick"])):((0,o.wg)(),(0,o.j4)(_,{key:0,onSave:p.save,readonly:!1,onCancel:e[4]||(e[4]=e=>l.$router.push(p.docUrl))},null,8,["onSave"]))])):(0,o.kq)("",!0)])),_:1})}var u=t(43015);const p={props:["id","isOpenInDialog"],components:{},mixins:[u.Z],computed:{docUrl:function(){return"/ctlg_history_type"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"entity",label:"сущность"},{name:"icon",label:"иконка"},{name:"color",label:"цвет"}],optionsFlds:[]}},watch:{},methods:{resultModify(l){return l},save(){this.$utils.saveItem.call(this,{method:"ctlg_history_type_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let l=l=>{this.item=this.resultModify(l)};this.$utils.getDocItemById.call(this,{method:"ctlg_history_type_get_by_id",cb:l})}},mounted(){this.reload()}};var y=t(74260),b=t(24379),_=t(34842),g=t(2165),h=t(7518),v=t.n(h);const q=(0,y.Z)(p,[["render",r]]),x=q;v()(p,"components",{QPage:b.Z,QInput:_.Z,QBtn:g.Z})}}]);