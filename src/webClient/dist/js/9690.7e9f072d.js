(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[9690],{69690:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>k});var a=t(34182);const i={key:1,class:"q-mt-sm"},o={class:"row q-col-gutter-md q-mb-sm"},s={class:"col-md-4 col-sm-6 col-xs-12"},m={class:"col-md-2 col-sm-3 col-xs-6"},d={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"row q-col-gutter-md q-mb-sm"},c={class:"col-3"},r={class:"col-3"},u={class:"col-3"},p={class:"row q-col-gutter-md q-mb-sm"},b={class:"col-md-2 col-sm-3 col-xs-6"},_={class:"col-md-2 col-sm-3 col-xs-6"},v={class:"col-md-2 col-sm-3 col-xs-6"},y={class:"col-md-2 col-sm-3 col-xs-6"};function g(e,l,t,g,f,q){const W=(0,a.up)("comp-breadcrumb"),h=(0,a.up)("q-input"),x=(0,a.up)("q-select"),$=(0,a.up)("comp-fld-ref-search"),w=(0,a.up)("comp-fld-date"),I=(0,a.up)("comp-item-btn-save"),k=(0,a.up)("q-btn"),U=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(U,{padding:""},{default:(0,a.w5)((()=>[t.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(W,{key:0,list:[{label:"Счета",to:"/invoice",docType:"invoice"},{label:f.item?f.item.title?f.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),f.item?((0,a.wg)(),(0,a.j4)("div",i,[(0,a.Wm)("div",o,[(0,a.Wm)("div",s,[(0,a.Wm)(h,{outlined:"",type:"text",modelValue:f.item.title,"onUpdate:modelValue":l[1]||(l[1]=e=>f.item.title=e),label:e.$t("invoice.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,a.Wm)("div",m,[(0,a.Wm)(h,{outlined:"",type:"number",modelValue:f.item.total_amount,"onUpdate:modelValue":l[2]||(l[2]=e=>f.item.total_amount=e),label:e.$t("invoice.total_amount"),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["modelValue","label"])]),(0,a.Wm)("div",d,[(0,a.Wm)(x,{outlined:"",label:e.$t("invoice.state"),modelValue:f.item.state,"onUpdate:modelValue":l[3]||(l[3]=e=>f.item.state=e),options:[{label:"запланирован",value:"planned",color:""},{label:"выставлен",value:"transferred",color:""},{label:"оплачен",value:"paid",color:""}],readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","modelValue"])])]),(0,a.Wm)("div",n,[(0,a.Wm)("div",c,[(0,a.Wm)($,{outlined:"",pgMethod:"system_list",label:e.$t("invoice.system_id"),item:f.item.system_title,itemId:f.item.system_id,ext:{},onUpdate:l[4]||(l[4]=e=>f.item.system_id=e.id),onClear:l[5]||(l[5]=e=>f.item.system_id=null),readonly:!1,class:"q-mb-sm col-3"},null,8,["label","item","itemId"])]),(0,a.Wm)("div",r,[(0,a.Wm)($,{outlined:"",pgMethod:"counterparty_list",label:e.$t("invoice.payer_id"),item:f.item.payer_title,itemId:f.item.payer_id,ext:{},onUpdate:l[6]||(l[6]=e=>f.item.payer_id=e.id),onClear:l[7]||(l[7]=e=>f.item.payer_id=null),readonly:!1,class:"q-mb-sm col-3"},null,8,["label","item","itemId"])]),(0,a.Wm)("div",u,[(0,a.Wm)($,{outlined:"",pgMethod:"counterparty_list",label:e.$t("invoice.recipient_id"),item:f.item.recipient_title,itemId:f.item.recipient_id,ext:{},onUpdate:l[8]||(l[8]=e=>f.item.recipient_id=e.id),onClear:l[9]||(l[9]=e=>f.item.recipient_id=null),readonly:!1,class:"q-mb-sm col-3"},null,8,["label","item","itemId"])])]),(0,a.Wm)("div",p,[(0,a.Wm)("div",b,[(0,a.Wm)(w,{outlined:"",label:e.$t("invoice.date_plan_transfer"),"date-string":e.$utils.formatPgDate(f.item.date_plan_transfer),onUpdate:l[10]||(l[10]=e=>f.item.date_plan_transfer=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a.Wm)("div",_,[(0,a.Wm)(w,{outlined:"",label:e.$t("invoice.date_plan_paid"),"date-string":e.$utils.formatPgDate(f.item.date_plan_paid),onUpdate:l[11]||(l[11]=e=>f.item.date_plan_paid=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a.Wm)("div",v,[(0,a.Wm)(w,{outlined:"",label:e.$t("invoice.date_transfer"),"date-string":e.$utils.formatPgDate(f.item.date_transfer),onUpdate:l[12]||(l[12]=e=>f.item.date_transfer=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,a.Wm)("div",y,[(0,a.Wm)(w,{outlined:"",label:e.$t("invoice.date_paid"),"date-string":e.$utils.formatPgDate(f.item.date_paid),onUpdate:l[13]||(l[13]=e=>f.item.date_paid=e),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])])]),t.isOpenInDialog?((0,a.wg)(),(0,a.j4)(k,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:q.save},null,8,["label","onClick"])):((0,a.wg)(),(0,a.j4)(I,{key:0,onSave:q.save,readonly:!1,onCancel:l[14]||(l[14]=l=>e.$router.push(q.docUrl))},null,8,["onSave"]))])):(0,a.kq)("",!0)])),_:1})}var f=t(43015);const q={props:["id","isOpenInDialog"],components:{},mixins:[f.Z],computed:{docUrl:function(){return"/invoice"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"total_amount",label:"сумма"},{name:"state",label:"статус"},{name:"system_id",label:"система"},{name:"payer_id",label:"плательщик"},{name:"recipient_id",label:"получатель"},{name:"date_plan_transfer",label:"планируемая дата выставления"},{name:"date_plan_paid",label:"планируемая дата оплаты"},{name:"date_transfer",label:"дата выставления"},{name:"date_paid",label:"дата оплаты"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){if(e.state){let l=[{label:"запланирован",value:"planned",color:""},{label:"выставлен",value:"transferred",color:""},{label:"оплачен",value:"paid",color:""}],t=l.find((l=>l.value===e.state));t&&(e.state={value:e.state,label:t.label})}return e},save(){this.$utils.saveItem.call(this,{method:"invoice_update",itemForSaveMod:{state:this.item.state?this.item.state.value:null},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"invoice_get_by_id",cb:e})}},mounted(){this.reload()}};var W=t(24379),h=t(34842),x=t(72448),$=t(2165),w=t(7518),I=t.n(w);q.render=g;const k=q;I()(q,"components",{QPage:W.Z,QInput:h.Z,QSelect:x.Z,QBtn:$.Z})}}]);