"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[7020],{77020:(l,e,t)=>{t.r(e),t.d(e,{default:()=>K});t(90246);var s=t(34182);const a={key:1,class:"q-mt-sm"},m={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},i={class:"col-md-2 col-sm-3 col-xs-6"},d={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-2 col-sm-3 col-xs-6"},r={class:"col-md-2 col-sm-3 col-xs-6"},u={class:"col-md-2 col-sm-3 col-xs-6"},_={class:"col-md-2 col-sm-3 col-xs-6"},b={class:"row q-col-gutter-md q-mb-sm"},p={class:"col-md-2 col-sm-3 col-xs-6"},g={class:"col-md-1 col-sm-2 col-xs-6"},x={class:"col-md-1 col-sm-2 col-xs-6"},k={class:"col-md-2 col-sm-3 col-xs-6"},y={class:"col-md-2 col-sm-3 col-xs-6"},f={class:"row q-col-gutter-md q-mb-sm"},v={class:"col-md-8 col-sm-12 col-xs-12"},q={class:"row q-col-gutter-md q-mb-sm"},h={class:"col-md-4 col-sm-6 col-xs-12"},w={class:"col-md-4 col-sm-6 col-xs-12"},U={class:"row q-col-gutter-md q-mb-sm"},$={class:"col-md-8 col-sm-12 col-xs-12"},I={class:"row q-col-gutter-md q-mb-sm"},V={class:"col-md-4 col-sm-6 col-xs-12"},C={class:"col-md-4 col-sm-6 col-xs-12"},W={class:"row q-col-gutter-md q-mb-sm"},N={class:"col-md-8 col-sm-12 col-xs-12"},M={class:"row q-col-gutter-md q-mb-sm"},j={class:"col-md-4 col-sm-6 col-xs-12"},Z={class:"col-md-4 col-sm-6 col-xs-12"},D=(0,s.Uk)("Сохранить");function Q(l,e,t,Q,P,S){const O=(0,s.up)("comp-breadcrumb"),T=(0,s.up)("q-input"),B=(0,s.up)("comp-fld-ref-search"),E=(0,s.up)("q-checkbox"),F=(0,s.up)("comp-fld-date"),z=(0,s.up)("comp-fld-files"),A=(0,s.up)("comp-fld-img-list"),G=(0,s.up)("comp-item-btn-save"),H=(0,s.up)("q-btn"),J=(0,s.up)("q-tooltip"),K=(0,s.up)("q-page-sticky"),L=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(L,{padding:""},{default:(0,s.w5)((()=>[t.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(O,{key:0,list:[{label:"Задачи",to:"/task",docType:"task"},{label:P.item?P.item.title?P.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),P.item?((0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",m,[(0,s._)("div",o,[(0,s.Wm)(T,{outlined:"",type:"text",modelValue:P.item.title,"onUpdate:modelValue":e[0]||(e[0]=l=>P.item.title=l),label:l.$t("task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,s._)("div",i,[(0,s.Wm)(B,{outlined:"",pgMethod:"ctlg_task_state_list",label:l.$t("task.state_id"),item:P.item.state_title,itemId:P.item.state_id,ext:{},onUpdate:e[1]||(e[1]=l=>P.item.state_id=l.id),onClear:e[2]||(e[2]=l=>P.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,s._)("div",d,[(0,s.Wm)(E,{label:l.$t("task.today"),modelValue:P.item.today,"onUpdate:modelValue":e[3]||(e[3]=l=>P.item.today=l),disable:!1,"false-value":!1,"indeterminate-value":"some",class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","modelValue"])])]),(0,s._)("div",c,[(0,s._)("div",n,[(0,s.Wm)(B,{outlined:"",pgMethod:"ctlg_task_type_list",label:l.$t("task.type_id"),item:P.item.type_title,itemId:P.item.type_id,ext:{},onUpdate:e[4]||(e[4]=l=>P.item.type_id=l.id),onClear:e[5]||(e[5]=l=>P.item.type_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,s._)("div",r,[(0,s.Wm)(B,{outlined:"",pgMethod:"system_list",label:l.$t("task.system_id"),item:P.item.system_title,itemId:P.item.system_id,ext:{avatar:"image/system.svg",isClearable:"true",pathUrl:"/system"},onUpdate:e[6]||(e[6]=l=>P.item.system_id=l.id),onClear:e[7]||(e[7]=l=>P.item.system_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])]),(0,s._)("div",u,[(0,s.Wm)(B,{outlined:"",pgMethod:"digital_solution_list",label:l.$t("task.digital_solution_id"),item:P.item.digital_solution_title,itemId:P.item.digital_solution_id,ext:{avatar:"image/digital_solution.svg",isClearable:"true",pathUrl:"/digital_solution"},onUpdate:e[8]||(e[8]=l=>P.item.digital_solution_id=l.id),onClear:e[9]||(e[9]=l=>P.item.digital_solution_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])]),(0,s._)("div",_,[(0,s.Wm)(B,{outlined:"",pgMethod:"development_task_list",label:l.$t("task.development_task_id"),item:P.item.development_task_title,itemId:P.item.development_task_id,ext:{avatar:"image/development_task.png",isClearable:"true",pathUrl:"/development_task"},onUpdate:e[10]||(e[10]=l=>P.item.development_task_id=l.id),onClear:e[11]||(e[11]=l=>P.item.development_task_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])])]),(0,s._)("div",b,[(0,s._)("div",p,[(0,s.Wm)(B,{outlined:"",pgMethod:"man_list",label:l.$t("task.executor_id"),item:P.item.executor_title,itemId:P.item.executor_id,ext:{company_id:1,avatar:"image/man.svg",isClearable:"true",pathUrl:"/man"},onUpdate:e[12]||(e[12]=l=>P.item.executor_id=l.id),onClear:e[13]||(e[13]=l=>P.item.executor_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","ext"])]),(0,s._)("div",g,[(0,s.Wm)(T,{outlined:"",type:"number",modelValue:P.item.estimate,"onUpdate:modelValue":e[14]||(e[14]=l=>P.item.estimate=l),label:l.$t("task.estimate"),readonly:!1,class:"q-mb-sm col-md-1 col-sm-2 col-xs-6"},null,8,["modelValue","label"])]),(0,s._)("div",x,[(0,s.Wm)(T,{outlined:"",type:"number",modelValue:P.item.specialist_priority,"onUpdate:modelValue":e[15]||(e[15]=l=>P.item.specialist_priority=l),label:l.$t("task.specialist_priority"),readonly:!1,class:"q-mb-sm col-md-1 col-sm-2 col-xs-6"},null,8,["modelValue","label"])]),(0,s._)("div",k,[(0,s.Wm)(F,{outlined:"",label:l.$t("task.plan_end_date"),"date-string":l.$utils.formatPgDate(P.item.plan_end_date),onUpdate:e[16]||(e[16]=l=>P.item.plan_end_date=l),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,s._)("div",y,[(0,s.Wm)(F,{outlined:"",label:l.$t("task.fact_end_date"),"date-string":l.$utils.formatPgDate(P.item.fact_end_date),onUpdate:e[17]||(e[17]=l=>P.item.fact_end_date=l),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])])]),(0,s._)("div",f,[(0,s._)("div",v,[(0,s.Wm)(T,{outlined:"",type:"text",modelValue:P.item.description,"onUpdate:modelValue":e[18]||(e[18]=l=>P.item.description=l),label:l.$t("task.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",q,[(0,s._)("div",h,["new"!=this.id?((0,s.wg)(),(0,s.j4)(z,{key:0,fldName:"files",label:l.$t("task.files"),fld:P.item.files,ext:{tableName:"task",tableId:this.id},onUpdate:e[19]||(e[19]=l=>P.item.files=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)]),(0,s._)("div",w,["new"!=this.id?((0,s.wg)(),(0,s.j4)(A,{key:0,label:l.$t("task.images"),fld:P.item.images,ext:{tableName:"task",tableId:this.id,fldName:"images"},onUpdate:e[20]||(e[20]=l=>P.item.images=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)])]),(0,s._)("div",U,[(0,s._)("div",$,[(0,s.Wm)(T,{outlined:"",type:"text",modelValue:P.item.process,"onUpdate:modelValue":e[21]||(e[21]=l=>P.item.process=l),label:l.$t("task.process"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",I,[(0,s._)("div",V,["new"!=this.id?((0,s.wg)(),(0,s.j4)(z,{key:0,fldName:"process_files",label:l.$t("task.process_files"),fld:P.item.process_files,ext:{tableName:"task",tableId:this.id},onUpdate:e[22]||(e[22]=l=>P.item.process_files=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)]),(0,s._)("div",C,["new"!=this.id?((0,s.wg)(),(0,s.j4)(A,{key:0,label:l.$t("task.process_images"),fld:P.item.process_images,ext:{tableName:"task",tableId:this.id,fldName:"process_images"},onUpdate:e[23]||(e[23]=l=>P.item.process_images=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)])]),(0,s._)("div",W,[(0,s._)("div",N,[(0,s.Wm)(T,{outlined:"",type:"text",modelValue:P.item.result,"onUpdate:modelValue":e[24]||(e[24]=l=>P.item.result=l),label:l.$t("task.result"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",M,[(0,s._)("div",j,["new"!=this.id?((0,s.wg)(),(0,s.j4)(z,{key:0,fldName:"result_files",label:l.$t("task.result_files"),fld:P.item.result_files,ext:{tableName:"task",tableId:this.id},onUpdate:e[25]||(e[25]=l=>P.item.result_files=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)]),(0,s._)("div",Z,["new"!=this.id?((0,s.wg)(),(0,s.j4)(A,{key:0,label:l.$t("task.result_images"),fld:P.item.result_images,ext:{tableName:"task",tableId:this.id,fldName:"result_images"},onUpdate:e[26]||(e[26]=l=>P.item.result_images=l),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)])]),t.isOpenInDialog?((0,s.wg)(),(0,s.j4)(H,{key:1,color:"secondary",label:l.$t("message.save"),class:"q-mr-sm",onClick:S.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(G,{key:0,onSave:S.save,readonly:!1,onCancel:e[27]||(e[27]=e=>l.$router.push(S.docUrl))},null,8,["onSave"])),(0,s.Wm)(K,{position:"bottom-right",offset:[18,18]},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{size:"sm",fab:"",icon:"save",color:"primary",onClick:S.save},{default:(0,s.w5)((()=>[(0,s.Wm)(J,null,{default:(0,s.w5)((()=>[D])),_:1})])),_:1},8,["onClick"])])),_:1})])):(0,s.kq)("",!0)])),_:1})}var P=t(43015);const S={props:["id","isOpenInDialog"],components:{},mixins:[P.Z],computed:{docUrl:function(){return"/task"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"state_id",label:"статус"},{name:"today",label:"в работе сегодня"},{name:"type_id",label:"тип задачи"},{name:"system_id",label:"система"},{name:"digital_solution_id",label:"цифровое решение"},{name:"development_task_id",label:"задача на разработку"},{name:"executor_id",label:"исполнитель"},{name:"estimate",label:"оценка"},{name:"specialist_priority",label:"приоритет"},{name:"plan_end_date",label:"плановая дата завершения"},{name:"fact_end_date",label:"фактическая дата завершения"},{name:"description",label:"описание"},{name:"files",label:"файлы"},{name:"images",label:"изображения"},{name:"process",label:"процесс"},{name:"process_files",label:"файлы результата"},{name:"process_images",label:"изображения результата"},{name:"result",label:"результат"},{name:"result_files",label:"файлы результата"},{name:"result_images",label:"изображения результата"}],optionsFlds:[]}},watch:{},methods:{resultModify(l){return l},save(){this.$utils.saveItem.call(this,{method:"task_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let l=l=>{this.item=this.resultModify(l)};this.$utils.getDocItemById.call(this,{method:"task_get_by_id",cb:l})}},mounted(){this.reload()}};var O=t(74260),T=t(24379),B=t(34842),E=t(65735),F=t(2165),z=t(21007),A=t(5363),G=t(7518),H=t.n(G);const J=(0,O.Z)(S,[["render",Q]]),K=J;H()(S,"components",{QPage:T.Z,QInput:B.Z,QCheckbox:E.Z,QBtn:F.Z,QPageSticky:z.Z,QTooltip:A.Z})}}]);