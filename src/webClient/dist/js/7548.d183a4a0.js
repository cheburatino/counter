"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[7548],{67548:(l,e,t)=>{t.r(e),t.d(e,{default:()=>D});t(90246);var s=t(34182);const i={key:1,class:"q-mt-sm"},m={class:"row q-col-gutter-md q-mb-sm"},d={class:"col-md-4 col-sm-6 col-xs-12"},o={class:"col-md-2 col-sm-3 col-xs-6"},a={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-2 col-sm-3 col-xs-6"},r={class:"col-md-2 col-sm-3 col-xs-6"},u={class:"col-md-2 col-sm-3 col-xs-6"},_={class:"col-md-2 col-sm-3 col-xs-6"},p={class:"row q-col-gutter-md q-mb-sm"},b={class:"col-md-8 col-sm-12 col-xs-12"},g={class:"row q-col-gutter-md q-mb-sm"},y={class:"col-md-4 col-sm-6 col-xs-12"},f={class:"col-md-4 col-sm-6 col-xs-12"},x={class:"row q-col-gutter-md q-mb-sm"},q={class:"col-md-8 col-sm-12 col-xs-12"},v={class:"row q-col-gutter-md q-mb-sm"},h={class:"col-md-4 col-sm-6 col-xs-12"},w={class:"col-md-4 col-sm-6 col-xs-12"};function k(l,e,t,k,I,$){const U=(0,s.up)("comp-breadcrumb"),C=(0,s.up)("q-input"),M=(0,s.up)("comp-fld-ref-search"),V=(0,s.up)("comp-fld-date"),W=(0,s.up)("comp-fld-files"),j=(0,s.up)("comp-fld-img-list"),N=(0,s.up)("comp-item-btn-save"),D=(0,s.up)("q-btn"),Z=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(Z,{padding:""},{default:(0,s.w5)((()=>[t.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(U,{key:0,list:[{label:"Модели",to:"/model",docType:"model"},{label:I.item?I.item.title?I.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),I.item?((0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",m,[(0,s._)("div",d,[(0,s.Wm)(C,{outlined:"",type:"text",modelValue:I.item.title,"onUpdate:modelValue":e[0]||(e[0]=l=>I.item.title=l),label:l.$t("model.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,s._)("div",o,[(0,s.Wm)(M,{outlined:"",pgMethod:"ctlg_model_type_list",label:l.$t("model.type_id"),item:I.item.type_title,itemId:I.item.type_id,ext:{},onUpdate:e[1]||(e[1]=l=>I.item.type_id=l.id),onClear:e[2]||(e[2]=l=>I.item.type_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,s._)("div",a,[(0,s.Wm)(M,{outlined:"",pgMethod:"ctlg_model_state_list",label:l.$t("model.state_id"),item:I.item.state_title,itemId:I.item.state_id,ext:{},onUpdate:e[3]||(e[3]=l=>I.item.state_id=l.id),onClear:e[4]||(e[4]=l=>I.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,s._)("div",c,[(0,s._)("div",n,[(0,s.Wm)(M,{outlined:"",pgMethod:"system_list",label:l.$t("model.system_id"),item:I.item.system_title,itemId:I.item.system_id,ext:{avatar:"image/system.svg",isClearable:"true",pathUrl:"/system"},onUpdate:e[5]||(e[5]=l=>I.item.system_id=l.id),onClear:e[6]||(e[6]=l=>I.item.system_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])]),(0,s._)("div",r,[(0,s.Wm)(M,{outlined:"",pgMethod:"digital_solution_list",label:l.$t("model.digital_solution_id"),item:I.item.digital_solution_title,itemId:I.item.digital_solution_id,ext:{avatar:"image/digital_solution.svg",isClearable:"true",pathUrl:"/digital_solution"},onUpdate:e[7]||(e[7]=l=>I.item.digital_solution_id=l.id),onClear:e[8]||(e[8]=l=>I.item.digital_solution_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])]),(0,s._)("div",u,[(0,s.Wm)(V,{outlined:"",label:l.$t("model.plan_end_date"),"date-string":l.$utils.formatPgDate(I.item.plan_end_date),onUpdate:e[9]||(e[9]=l=>I.item.plan_end_date=l),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,s._)("div",_,[(0,s.Wm)(V,{outlined:"",label:l.$t("model.fact_end_date"),"date-string":l.$utils.formatPgDate(I.item.fact_end_date),onUpdate:e[10]||(e[10]=l=>I.item.fact_end_date=l),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])])]),(0,s._)("div",p,[(0,s._)("div",b,[(0,s.Wm)(C,{outlined:"",type:"text",modelValue:I.item.description,"onUpdate:modelValue":e[11]||(e[11]=l=>I.item.description=l),label:l.$t("model.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",g,[(0,s._)("div",y,["new"!=this.id?((0,s.wg)(),(0,s.j4)(W,{key:0,fldName:"description_files",label:l.$t("model.description_files"),fld:I.item.description_files,ext:{tableName:"model",tableId:this.id},onUpdate:e[12]||(e[12]=l=>I.item.description_files=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)]),(0,s._)("div",f,["new"!=this.id?((0,s.wg)(),(0,s.j4)(j,{key:0,label:l.$t("model.description_images"),fld:I.item.description_images,ext:{tableName:"model",tableId:this.id,fldName:"description_images"},onUpdate:e[13]||(e[13]=l=>I.item.description_images=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)])]),(0,s._)("div",x,[(0,s._)("div",q,[(0,s.Wm)(C,{outlined:"",type:"text",modelValue:I.item.result,"onUpdate:modelValue":e[14]||(e[14]=l=>I.item.result=l),label:l.$t("model.result"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",v,[(0,s._)("div",h,["new"!=this.id?((0,s.wg)(),(0,s.j4)(W,{key:0,fldName:"result_files",label:l.$t("model.result_files"),fld:I.item.result_files,ext:{tableName:"model",tableId:this.id},onUpdate:e[15]||(e[15]=l=>I.item.result_files=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)]),(0,s._)("div",w,["new"!=this.id?((0,s.wg)(),(0,s.j4)(j,{key:0,label:l.$t("model.result_images"),fld:I.item.result_images,ext:{tableName:"model",tableId:this.id,fldName:"result_images"},onUpdate:e[16]||(e[16]=l=>I.item.result_images=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)])]),t.isOpenInDialog?((0,s.wg)(),(0,s.j4)(D,{key:1,color:"secondary",label:l.$t("message.save"),class:"q-mr-sm",onClick:$.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(N,{key:0,onSave:$.save,readonly:!1,onCancel:e[17]||(e[17]=e=>l.$router.push($.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var I=t(43015);const $={props:["id","isOpenInDialog"],components:{},mixins:[I.Z],computed:{docUrl:function(){return"/model"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"type_id",label:"тип"},{name:"state_id",label:"статус"},{name:"system_id",label:"система"},{name:"digital_solution_id",label:"цифровое решение"},{name:"plan_end_date",label:"планируемая дата завершения"},{name:"fact_end_date",label:"фактическая дата завершения"},{name:"description",label:"описание"},{name:"description_files",label:"файлы описания"},{name:"description_images",label:"изображения описания"},{name:"result",label:"результат"},{name:"result_files",label:"файлы результата"},{name:"result_images",label:"изображения результата"}],optionsFlds:[]}},watch:{},methods:{resultModify(l){return l},save(){this.$utils.saveItem.call(this,{method:"model_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let l=l=>{this.item=this.resultModify(l)};this.$utils.getDocItemById.call(this,{method:"model_get_by_id",cb:l})}},mounted(){this.reload()}};var U=t(74260),C=t(24379),M=t(34842),V=t(2165),W=t(7518),j=t.n(W);const N=(0,U.Z)($,[["render",k]]),D=N;j()($,"components",{QPage:C.Z,QInput:M.Z,QBtn:V.Z})}}]);