"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[1919],{21919:(e,l,s)=>{s.r(l),s.d(l,{default:()=>A});s(90246);var t=s(34182);const a={key:1,class:"q-mt-sm"},m={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},i={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"row q-col-gutter-md q-mb-sm"},c={class:"col-md-4 col-sm-6 col-xs-12"},n={class:"col-md-2 col-sm-3 col-xs-6"},r={class:"col-md-2 col-sm-3 col-xs-6"},u={class:"row q-col-gutter-md q-mb-sm"},_={class:"col-md-4 col-sm-6 col-xs-12"},p={class:"col-md-4 col-sm-6 col-xs-12"},b={class:"row q-col-gutter-md q-mb-sm"},g={class:"col-md-8 col-sm-12 col-xs-12"},k={class:"row q-col-gutter-md q-mb-sm"},f={class:"col-md-4 col-sm-6 col-xs-12"},x={class:"col-md-4 col-sm-6 col-xs-12"},q={class:"row q-col-gutter-md q-mb-sm"},y={class:"col-6"},v={class:"col-md-2 col-sm-3 col-xs-6"},h={class:"row q-col-gutter-md q-mb-sm"},w={class:"col-md-4 col-sm-6 col-xs-12"},U={class:"col-md-4 col-sm-6 col-xs-12"},$={class:"row q-col-gutter-md q-mb-sm"},I={class:"col-md-8 col-sm-12 col-xs-12"},C={class:"row q-col-gutter-md q-mb-sm"},V={class:"col-md-4 col-sm-6 col-xs-12"},W={class:"col-md-4 col-sm-6 col-xs-12"},N=(0,t.Uk)("Сохранить");function j(e,l,s,j,M,Z){const D=(0,t.up)("comp-breadcrumb"),Q=(0,t.up)("q-input"),P=(0,t.up)("comp-fld-ref-search"),S=(0,t.up)("comp-fld-date"),O=(0,t.up)("comp-fld-files"),T=(0,t.up)("comp-fld-img-list"),B=(0,t.up)("q-checkbox"),E=(0,t.up)("comp-item-btn-save"),F=(0,t.up)("q-btn"),z=(0,t.up)("q-tooltip"),A=(0,t.up)("q-page-sticky"),G=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(G,{padding:""},{default:(0,t.w5)((()=>[s.isOpenInDialog?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(D,{key:0,list:[{label:"Задачи заказчиков",to:"/customer_task",docType:"customer_task"},{label:M.item?M.item.title?M.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),M.item?((0,t.wg)(),(0,t.iD)("div",a,[(0,t._)("div",m,[(0,t._)("div",o,[(0,t.Wm)(Q,{outlined:"",type:"text",modelValue:M.item.title,"onUpdate:modelValue":l[0]||(l[0]=e=>M.item.title=e),label:e.$t("customer_task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,t._)("div",i,[(0,t.Wm)(P,{outlined:"",pgMethod:"ctlg_customer_task_state_list",label:e.$t("customer_task.state_id"),item:M.item.state_title,itemId:M.item.state_id,ext:{},onUpdate:l[1]||(l[1]=e=>M.item.state_id=e.id),onClear:l[2]||(l[2]=e=>M.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,t._)("div",d,[(0,t._)("div",c,[(0,t.Wm)(P,{outlined:"",pgMethod:"system_list",label:e.$t("customer_task.system_id"),item:M.item.system_title,itemId:M.item.system_id,ext:{avatar:"image/system.svg",isClearable:"true",pathUrl:"/system"},onUpdate:l[3]||(l[3]=e=>M.item.system_id=e.id),onClear:l[4]||(l[4]=e=>M.item.system_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])]),(0,t._)("div",n,[(0,t.Wm)(P,{outlined:"",pgMethod:"task_list",label:e.$t("customer_task.task_id"),item:M.item.task_title,itemId:M.item.task_id,ext:{avatar:"image/task.svg",isClearable:"true",pathUrl:"/task"},onUpdate:l[5]||(l[5]=e=>M.item.task_id=e.id),onClear:l[6]||(l[6]=e=>M.item.task_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])]),(0,t._)("div",r,[(0,t.Wm)(P,{outlined:"",pgMethod:"man_list",label:e.$t("customer_task.responsible_id"),item:M.item.responsible_title,itemId:M.item.responsible_id,ext:{avatar:"image/man.svg",isClearable:"true",pathUrl:"/man"},onUpdate:l[7]||(l[7]=e=>M.item.responsible_id=e.id),onClear:l[8]||(l[8]=e=>M.item.responsible_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])])]),(0,t._)("div",u,[(0,t._)("div",_,[(0,t.Wm)(S,{outlined:"",label:e.$t("customer_task.plan_start_date"),"date-string":e.$utils.formatPgDate(M.item.plan_start_date),onUpdate:l[9]||(l[9]=e=>M.item.plan_start_date=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","date-string"])]),(0,t._)("div",p,[(0,t.Wm)(S,{outlined:"",label:e.$t("customer_task.plan_end_date"),"date-string":e.$utils.formatPgDate(M.item.plan_end_date),onUpdate:l[10]||(l[10]=e=>M.item.plan_end_date=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","date-string"])])]),(0,t._)("div",b,[(0,t._)("div",g,[(0,t.Wm)(Q,{outlined:"",type:"text",modelValue:M.item.description,"onUpdate:modelValue":l[11]||(l[11]=e=>M.item.description=e),label:e.$t("customer_task.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,t._)("div",k,[(0,t._)("div",f,["new"!=this.id?((0,t.wg)(),(0,t.j4)(O,{key:0,fldName:"description_files",label:e.$t("customer_task.description_files"),fld:M.item.description_files,ext:{tableName:"customer_task",tableId:this.id},onUpdate:l[12]||(l[12]=e=>M.item.description_files=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,t.kq)("",!0)]),(0,t._)("div",x,["new"!=this.id?((0,t.wg)(),(0,t.j4)(T,{key:0,label:e.$t("customer_task.description_images"),fld:M.item.description_images,ext:{tableName:"customer_task",tableId:this.id,fldName:"description_images"},onUpdate:l[13]||(l[13]=e=>M.item.description_images=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,t.kq)("",!0)])]),(0,t._)("div",q,[(0,t._)("div",y,[(0,t.Wm)(Q,{outlined:"",type:"text",modelValue:M.item.process,"onUpdate:modelValue":l[14]||(l[14]=e=>M.item.process=e),label:e.$t("customer_task.process"),autogrow:"",readonly:!1,class:"q-mb-sm col-6"},null,8,["modelValue","label"])]),(0,t._)("div",v,[(0,t.Wm)(B,{label:e.$t("customer_task.is_paused"),modelValue:M.item.is_paused,"onUpdate:modelValue":l[15]||(l[15]=e=>M.item.is_paused=e),disable:!1,"false-value":!1,"indeterminate-value":"some",class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","modelValue"])])]),(0,t._)("div",h,[(0,t._)("div",w,["new"!=this.id?((0,t.wg)(),(0,t.j4)(O,{key:0,fldName:"process_files",label:e.$t("customer_task.process_files"),fld:M.item.process_files,ext:{tableName:"customer_task",tableId:this.id},onUpdate:l[16]||(l[16]=e=>M.item.process_files=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,t.kq)("",!0)]),(0,t._)("div",U,["new"!=this.id?((0,t.wg)(),(0,t.j4)(T,{key:0,label:e.$t("customer_task.process_images"),fld:M.item.process_images,ext:{tableName:"customer_task",tableId:this.id,fldName:"process_images"},onUpdate:l[17]||(l[17]=e=>M.item.process_images=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,t.kq)("",!0)])]),(0,t._)("div",$,[(0,t._)("div",I,[(0,t.Wm)(Q,{outlined:"",type:"text",modelValue:M.item.result,"onUpdate:modelValue":l[18]||(l[18]=e=>M.item.result=e),label:e.$t("customer_task.result"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,t._)("div",C,[(0,t._)("div",V,["new"!=this.id?((0,t.wg)(),(0,t.j4)(O,{key:0,fldName:"result_files",label:e.$t("customer_task.result_files"),fld:M.item.result_files,ext:{tableName:"customer_task",tableId:this.id},onUpdate:l[19]||(l[19]=e=>M.item.result_files=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,t.kq)("",!0)]),(0,t._)("div",W,["new"!=this.id?((0,t.wg)(),(0,t.j4)(T,{key:0,label:e.$t("customer_task.result_images"),fld:M.item.result_images,ext:{tableName:"customer_task",tableId:this.id,fldName:"result_images"},onUpdate:l[20]||(l[20]=e=>M.item.result_images=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,t.kq)("",!0)])]),s.isOpenInDialog?((0,t.wg)(),(0,t.j4)(F,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:Z.save},null,8,["label","onClick"])):((0,t.wg)(),(0,t.j4)(E,{key:0,onSave:Z.save,readonly:!1,onCancel:l[21]||(l[21]=l=>e.$router.push(Z.docUrl))},null,8,["onSave"])),(0,t.Wm)(A,{position:"bottom-right",offset:[18,18]},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{size:"sm",fab:"",icon:"save",color:"primary",onClick:Z.save},{default:(0,t.w5)((()=>[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[N])),_:1})])),_:1},8,["onClick"])])),_:1})])):(0,t.kq)("",!0)])),_:1})}var M=s(43015);const Z={props:["id","isOpenInDialog"],components:{},mixins:[M.Z],computed:{docUrl:function(){return"/customer_task"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"state_id",label:"статус"},{name:"system_id",label:"система"},{name:"task_id",label:"задача"},{name:"responsible_id",label:"ответственный"},{name:"plan_start_date",label:"плановая дата начала"},{name:"plan_end_date",label:"плановая дата завершения"},{name:"description",label:"описание"},{name:"description_files",label:"файлы описания"},{name:"description_images",label:"изображения описания"},{name:"process",label:"процесс"},{name:"is_paused",label:"на паузе"},{name:"process_files",label:"файлы результата"},{name:"process_images",label:"изображения результата"},{name:"result",label:"результат"},{name:"result_files",label:"файлы результата"},{name:"result_images",label:"изображения результата"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"customer_task_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"customer_task_get_by_id",cb:e})}},mounted(){this.reload()}};var D=s(74260),Q=s(24379),P=s(34842),S=s(65735),O=s(2165),T=s(21007),B=s(5363),E=s(7518),F=s.n(E);const z=(0,D.Z)(Z,[["render",j]]),A=z;F()(Z,"components",{QPage:Q.Z,QInput:P.Z,QCheckbox:S.Z,QBtn:O.Z,QPageSticky:T.Z,QTooltip:B.Z})}}]);