(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[9208],{19208:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>b});var s=l(34182);const o={key:1,class:"q-mt-sm"},a={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"};function n(t,e,l,n,c,u){const d=(0,s.up)("comp-breadcrumb"),m=(0,s.up)("q-input"),r=(0,s.up)("comp-item-btn-save"),p=(0,s.up)("q-btn"),g=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(g,{padding:""},{default:(0,s.w5)((()=>[l.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(d,{key:0,list:[{label:"Статусы багов",to:"/ctlg_bug_state",docType:"ctlg_bug_state"},{label:c.item?c.item.title?c.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),c.item?((0,s.wg)(),(0,s.j4)("div",o,[(0,s.Wm)("div",a,[(0,s.Wm)("div",i,[(0,s.Wm)(m,{outlined:"",type:"text",modelValue:c.item.title,"onUpdate:modelValue":e[1]||(e[1]=t=>c.item.title=t),label:t.$t("ctlg_bug_state.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,s.wg)(),(0,s.j4)(p,{key:1,color:"secondary",label:t.$t("message.save"),class:"q-mr-sm",onClick:u.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(r,{key:0,onSave:u.save,readonly:!1,onCancel:e[2]||(e[2]=e=>t.$router.push(u.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var c=l(43015);const u={props:["id","isOpenInDialog"],components:{},mixins:[c.Z],computed:{docUrl:function(){return"/ctlg_bug_state"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(t){return t},save(){this.$utils.saveItem.call(this,{method:"ctlg_bug_state_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let t=t=>{this.item=this.resultModify(t)};this.$utils.getDocItemById.call(this,{method:"ctlg_bug_state_get_by_id",cb:t})}},mounted(){this.reload()}};var d=l(24379),m=l(34842),r=l(2165),p=l(7518),g=l.n(p);u.render=n;const b=u;g()(u,"components",{QPage:d.Z,QInput:m.Z,QBtn:r.Z})}}]);