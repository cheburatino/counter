(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[7661],{37661:(l,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>f});t(90246);var i=t(34182);const s={key:1,class:"q-mt-sm"},a=(0,i.Wm)("div",{class:"row q-col-gutter-md q-mb-sm"}," not found vueFldTemplate for type `` ",-1),o={class:"row q-col-gutter-md q-mb-sm"},m={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-4 col-sm-6 col-xs-12"},r={class:"row q-col-gutter-md q-mb-sm"},u={class:"col-md-8 col-sm-12 col-xs-12"},p={class:"row q-col-gutter-md q-mb-sm"},_={class:"col-md-4 col-sm-6 col-xs-12"};function k(l,e,t,k,b,h){const g=(0,i.up)("comp-breadcrumb"),v=(0,i.up)("comp-fld-ref-search"),q=(0,i.up)("q-input"),y=(0,i.up)("comp-item-btn-save"),x=(0,i.up)("q-btn"),f=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(f,{padding:""},{default:(0,i.w5)((()=>[t.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(g,{key:0,list:[{label:"Участники задач",to:"/task_specialist_link",docType:"task_specialist_link"},{label:b.item?b.item.title?b.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),b.item?((0,i.wg)(),(0,i.j4)("div",s,[a,(0,i.Wm)("div",o,[(0,i.Wm)("div",m,[(0,i.Wm)(v,{outlined:"",pgMethod:"task_list",label:l.$t("task_specialist_link.task_id"),item:b.item.task_title,itemId:b.item.task_id,ext:{},onUpdate:e[1]||(e[1]=l=>b.item.task_id=l.id),onClear:e[2]||(e[2]=l=>b.item.task_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])]),(0,i.Wm)("div",d,[(0,i.Wm)(v,{outlined:"",pgMethod:"man_list",label:l.$t("task_specialist_link.specialist_id"),item:b.item.specialist_title,itemId:b.item.specialist_id,ext:{},onUpdate:e[3]||(e[3]=l=>b.item.specialist_id=l.id),onClear:e[4]||(e[4]=l=>b.item.specialist_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,i.Wm)("div",c,[(0,i.Wm)("div",n,[(0,i.Wm)(v,{outlined:"",pgMethod:"ctlg_task_role_list",label:l.$t("task_specialist_link.role_id"),item:b.item.role_title,itemId:b.item.role_id,ext:{},onUpdate:e[5]||(e[5]=l=>b.item.role_id=l.id),onClear:e[6]||(e[6]=l=>b.item.role_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,i.Wm)("div",r,[(0,i.Wm)("div",u,[(0,i.Wm)(q,{outlined:"",type:"text",modelValue:b.item.description,"onUpdate:modelValue":e[7]||(e[7]=l=>b.item.description=l),label:l.$t("task_specialist_link.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i.Wm)("div",p,[(0,i.Wm)("div",_,[(0,i.Wm)(v,{outlined:"",pgMethod:"man_list",label:l.$t("task_specialist_link.author_id"),item:b.item.author_title,itemId:b.item.author_id,ext:{},onUpdate:e[8]||(e[8]=l=>b.item.author_id=l.id),onClear:e[9]||(e[9]=l=>b.item.author_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),t.isOpenInDialog?((0,i.wg)(),(0,i.j4)(x,{key:1,color:"secondary",label:l.$t("message.save"),class:"q-mr-sm",onClick:h.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(y,{key:0,onSave:h.save,readonly:!1,onCancel:e[10]||(e[10]=e=>l.$router.push(h.docUrl))},null,8,["onSave"]))])):(0,i.kq)("",!0)])),_:1})}var b=t(43015);const h={props:["id","isOpenInDialog"],components:{},mixins:[b.Z],computed:{docUrl:function(){return"/task_specialist_link"}},data(){return{item:null,flds:[{name:"task_id",label:"id задачи"},{name:"specialist_id",label:"специалист"},{name:"role_id",label:"роль"},{name:"description",label:"описание"},{name:"author_id",label:"автор"}],optionsFlds:[]}},watch:{},methods:{resultModify(l){return l},save(){this.$utils.saveItem.call(this,{method:"task_specialist_link_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let l=l=>{this.item=this.resultModify(l)};this.$utils.getDocItemById.call(this,{method:"task_specialist_link_get_by_id",cb:l})}},mounted(){this.reload()}};var g=t(24379),v=t(34842),q=t(2165),y=t(7518),x=t.n(y);h.render=k;const f=h;x()(h,"components",{QPage:g.Z,QInput:v.Z,QBtn:q.Z})}}]);