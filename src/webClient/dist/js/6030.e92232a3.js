(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[6030],{46030:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>k});var o=l(34182);const s={key:1,class:"q-mt-sm"},a={class:"row q-col-gutter-md q-mb-sm"},i={class:"col-md-4 col-sm-6 col-xs-12"};function n(t,e,l,n,c,r){const d=(0,o.up)("comp-breadcrumb"),m=(0,o.up)("q-input"),u=(0,o.up)("comp-item-btn-save"),p=(0,o.up)("q-btn"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,{padding:""},{default:(0,o.w5)((()=>[l.isOpenInDialog?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0,list:[{label:"Статусы дел",to:"/ctlg_work_state",docType:"ctlg_work_state"},{label:c.item?c.item.title?c.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),c.item?((0,o.wg)(),(0,o.j4)("div",s,[(0,o.Wm)("div",a,[(0,o.Wm)("div",i,[(0,o.Wm)(m,{outlined:"",type:"text",modelValue:c.item.title,"onUpdate:modelValue":e[1]||(e[1]=t=>c.item.title=t),label:t.$t("ctlg_work_state.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),l.isOpenInDialog?((0,o.wg)(),(0,o.j4)(p,{key:1,color:"secondary",label:t.$t("message.save"),class:"q-mr-sm",onClick:r.save},null,8,["label","onClick"])):((0,o.wg)(),(0,o.j4)(u,{key:0,onSave:r.save,readonly:!1,onCancel:e[2]||(e[2]=e=>t.$router.push(r.docUrl))},null,8,["onSave"]))])):(0,o.kq)("",!0)])),_:1})}var c=l(43015);const r={props:["id","isOpenInDialog"],components:{},mixins:[c.Z],computed:{docUrl:function(){return"/ctlg_work_state"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(t){return t},save(){this.$utils.saveItem.call(this,{method:"ctlg_work_state_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let t=t=>{this.item=this.resultModify(t)};this.$utils.getDocItemById.call(this,{method:"ctlg_work_state_get_by_id",cb:t})}},mounted(){this.reload()}};var d=l(24379),m=l(34842),u=l(2165),p=l(7518),g=l.n(p);r.render=n;const k=r;g()(r,"components",{QPage:d.Z,QInput:m.Z,QBtn:u.Z})}}]);