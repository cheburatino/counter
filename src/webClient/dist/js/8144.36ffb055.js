"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[8144],{88144:(l,i,t)=>{t.r(i),t.d(i,{default:()=>I});t(90246);var e=t(34182);const o={key:1,class:"q-mt-sm"},s=(0,e._)("div",{class:"row q-col-gutter-md q-mb-sm"}," not found vueFldTemplate for type `` ",-1),a={class:"row q-col-gutter-md q-mb-sm"},d={class:"col-md-4 col-sm-6 col-xs-12"},m={class:"col-md-4 col-sm-6 col-xs-12"},n={class:"row q-col-gutter-md q-mb-sm"},c={class:"col-md-4 col-sm-6 col-xs-12"},u={class:"row q-col-gutter-md q-mb-sm"},_={class:"col-md-8 col-sm-12 col-xs-12"},r={class:"row q-col-gutter-md q-mb-sm"},p={class:"col-md-4 col-sm-6 col-xs-12"};function g(l,i,t,g,b,h){const v=(0,e.up)("comp-breadcrumb"),k=(0,e.up)("comp-fld-ref-search"),q=(0,e.up)("q-input"),y=(0,e.up)("comp-item-btn-save"),x=(0,e.up)("q-btn"),f=(0,e.up)("q-page");return(0,e.wg)(),(0,e.j4)(f,{padding:""},{default:(0,e.w5)((()=>[t.isOpenInDialog?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(v,{key:0,list:[{label:"Связи цифровых решений и специалиста",to:"/digital_solution_specialist_link",docType:"digital_solution_specialist_link"},{label:b.item?b.item.title?b.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),b.item?((0,e.wg)(),(0,e.iD)("div",o,[s,(0,e._)("div",a,[(0,e._)("div",d,[(0,e.Wm)(k,{outlined:"",pgMethod:"digital_solution_list",label:l.$t("digital_solution_specialist_link.digital_solution_id"),item:b.item.digital_solution_title,itemId:b.item.digital_solution_id,ext:{},onUpdate:i[0]||(i[0]=l=>b.item.digital_solution_id=l.id),onClear:i[1]||(i[1]=l=>b.item.digital_solution_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])]),(0,e._)("div",m,[(0,e.Wm)(k,{outlined:"",pgMethod:"man_list",label:l.$t("digital_solution_specialist_link.specialist_id"),item:b.item.specialist_title,itemId:b.item.specialist_id,ext:{},onUpdate:i[2]||(i[2]=l=>b.item.specialist_id=l.id),onClear:i[3]||(i[3]=l=>b.item.specialist_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,e._)("div",n,[(0,e._)("div",c,[(0,e.Wm)(k,{outlined:"",pgMethod:"ctlg_digital_solution_specialist_role_list",label:l.$t("digital_solution_specialist_link.role_id"),item:b.item.role_title,itemId:b.item.role_id,ext:{},onUpdate:i[4]||(i[4]=l=>b.item.role_id=l.id),onClear:i[5]||(i[5]=l=>b.item.role_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,e._)("div",u,[(0,e._)("div",_,[(0,e.Wm)(q,{outlined:"",type:"text",modelValue:b.item.description,"onUpdate:modelValue":i[6]||(i[6]=l=>b.item.description=l),label:l.$t("digital_solution_specialist_link.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,e._)("div",r,[(0,e._)("div",p,[(0,e.Wm)(k,{outlined:"",pgMethod:"man_list",label:l.$t("digital_solution_specialist_link.author_id"),item:b.item.author_title,itemId:b.item.author_id,ext:{},onUpdate:i[7]||(i[7]=l=>b.item.author_id=l.id),onClear:i[8]||(i[8]=l=>b.item.author_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),t.isOpenInDialog?((0,e.wg)(),(0,e.j4)(x,{key:1,color:"secondary",label:l.$t("message.save"),class:"q-mr-sm",onClick:h.save},null,8,["label","onClick"])):((0,e.wg)(),(0,e.j4)(y,{key:0,onSave:h.save,readonly:!1,onCancel:i[9]||(i[9]=i=>l.$router.push(h.docUrl))},null,8,["onSave"]))])):(0,e.kq)("",!0)])),_:1})}var b=t(43015);const h={props:["id","isOpenInDialog"],components:{},mixins:[b.Z],computed:{docUrl:function(){return"/digital_solution_specialist_link"}},data(){return{item:null,flds:[{name:"digital_solution_id",label:"id цифрового решения"},{name:"specialist_id",label:"специалист"},{name:"role_id",label:"роль"},{name:"description",label:"описание"},{name:"author_id",label:"автор"}],optionsFlds:[]}},watch:{},methods:{resultModify(l){return l},save(){this.$utils.saveItem.call(this,{method:"digital_solution_specialist_link_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let l=l=>{this.item=this.resultModify(l)};this.$utils.getDocItemById.call(this,{method:"digital_solution_specialist_link_get_by_id",cb:l})}},mounted(){this.reload()}};var v=t(74260),k=t(24379),q=t(34842),y=t(2165),x=t(7518),f=t.n(x);const w=(0,v.Z)(h,[["render",g]]),I=w;f()(h,"components",{QPage:k.Z,QInput:q.Z,QBtn:y.Z})}}]);