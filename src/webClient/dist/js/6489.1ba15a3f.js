"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[6489],{66489:(e,l,t)=>{t.r(l),t.d(l,{default:()=>O});t(90246);var s=t(34182);const m={key:1,class:"q-mt-sm"},i={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},a={class:"col-md-2 col-sm-3 col-xs-6"},d={class:"col-md-2 col-sm-3 col-xs-6"},c={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-8 col-sm-12 col-xs-12"},r={class:"row q-col-gutter-md q-mb-sm"},u={class:"col-md-8 col-sm-12 col-xs-12"},b={class:"row q-col-gutter-md q-mb-sm"},g={class:"col-md-4 col-sm-6 col-xs-12"},p={class:"col-md-4 col-sm-6 col-xs-12"},_={class:"row q-col-gutter-md q-mb-sm"},f={class:"col-md-8 col-sm-12 col-xs-12"},x={class:"row q-col-gutter-md q-mb-sm"},q={class:"col-md-4 col-sm-6 col-xs-12"},y={class:"col-md-4 col-sm-6 col-xs-12"},v={class:"row q-col-gutter-md q-mb-sm"},w={class:"col-md-8 col-sm-12 col-xs-12"},h={class:"row q-col-gutter-md q-mb-sm"},k={class:"col-md-4 col-sm-6 col-xs-12"},$={class:"col-md-4 col-sm-6 col-xs-12"};function I(e,l,t,I,U,V){const N=(0,s.up)("comp-breadcrumb"),j=(0,s.up)("q-input"),C=(0,s.up)("comp-fld-date-time"),W=(0,s.up)("comp-fld-ref-search"),D=(0,s.up)("comp-fld-files"),M=(0,s.up)("comp-fld-img-list"),Z=(0,s.up)("comp-item-btn-save"),O=(0,s.up)("q-btn"),Q=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(Q,{padding:""},{default:(0,s.w5)((()=>[t.isOpenInDialog?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(N,{key:0,list:[{label:"Встречи",to:"/meeting",docType:"meeting"},{label:U.item?U.item.title?U.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),U.item?((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",i,[(0,s._)("div",o,[(0,s.Wm)(j,{outlined:"",type:"text",modelValue:U.item.title,"onUpdate:modelValue":l[0]||(l[0]=e=>U.item.title=e),label:e.$t("meeting.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,s._)("div",a,[(0,s.Wm)(C,{outlined:"",label:e.$t("meeting.datetime"),"date-string":e.$utils.formatPgDateTime(U.item.datetime),onUpdate:l[1]||(l[1]=e=>U.item.datetime=e),onClear:l[2]||(l[2]=e=>U.item.datetime=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","date-string"])]),(0,s._)("div",d,[(0,s.Wm)(W,{outlined:"",pgMethod:"ctlg_meeting_state_list",label:e.$t("meeting.state_id"),item:U.item.state_title,itemId:U.item.state_id,ext:{},onUpdate:l[3]||(l[3]=e=>U.item.state_id=e.id),onClear:l[4]||(l[4]=e=>U.item.state_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])])]),(0,s._)("div",c,[(0,s._)("div",n,[(0,s.Wm)(j,{outlined:"",type:"text",modelValue:U.item.place,"onUpdate:modelValue":l[5]||(l[5]=e=>U.item.place=e),label:e.$t("meeting.place"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",r,[(0,s._)("div",u,[(0,s.Wm)(j,{outlined:"",type:"text",modelValue:U.item.description,"onUpdate:modelValue":l[6]||(l[6]=e=>U.item.description=e),label:e.$t("meeting.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",b,[(0,s._)("div",g,["new"!=this.id?((0,s.wg)(),(0,s.j4)(D,{key:0,fldName:"description_files",label:e.$t("meeting.description_files"),fld:U.item.description_files,ext:{tableName:"meeting",tableId:this.id},onUpdate:l[7]||(l[7]=e=>U.item.description_files=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)]),(0,s._)("div",p,["new"!=this.id?((0,s.wg)(),(0,s.j4)(M,{key:0,label:e.$t("meeting.description_images"),fld:U.item.description_images,ext:{tableName:"meeting",tableId:this.id,fldName:"description_images"},onUpdate:l[8]||(l[8]=e=>U.item.description_images=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)])]),(0,s._)("div",_,[(0,s._)("div",f,[(0,s.Wm)(j,{outlined:"",type:"text",modelValue:U.item.notes,"onUpdate:modelValue":l[9]||(l[9]=e=>U.item.notes=e),label:e.$t("meeting.notes"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",x,[(0,s._)("div",q,["new"!=this.id?((0,s.wg)(),(0,s.j4)(D,{key:0,fldName:"notes_files",label:e.$t("meeting.notes_files"),fld:U.item.notes_files,ext:{tableName:"meeting",tableId:this.id},onUpdate:l[10]||(l[10]=e=>U.item.notes_files=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)]),(0,s._)("div",y,["new"!=this.id?((0,s.wg)(),(0,s.j4)(M,{key:0,label:e.$t("meeting.notes_images"),fld:U.item.notes_images,ext:{tableName:"meeting",tableId:this.id,fldName:"notes_images"},onUpdate:l[11]||(l[11]=e=>U.item.notes_images=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)])]),(0,s._)("div",v,[(0,s._)("div",w,[(0,s.Wm)(j,{outlined:"",type:"text",modelValue:U.item.result,"onUpdate:modelValue":l[12]||(l[12]=e=>U.item.result=e),label:e.$t("meeting.result"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,s._)("div",h,[(0,s._)("div",k,["new"!=this.id?((0,s.wg)(),(0,s.j4)(D,{key:0,fldName:"result_files",label:e.$t("meeting.result_files"),fld:U.item.result_files,ext:{tableName:"meeting",tableId:this.id},onUpdate:l[13]||(l[13]=e=>U.item.result_files=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)]),(0,s._)("div",$,["new"!=this.id?((0,s.wg)(),(0,s.j4)(M,{key:0,label:e.$t("meeting.result_images"),fld:U.item.result_images,ext:{tableName:"meeting",tableId:this.id,fldName:"result_images"},onUpdate:l[14]||(l[14]=e=>U.item.result_images=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,s.kq)("",!0)])]),t.isOpenInDialog?((0,s.wg)(),(0,s.j4)(O,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:V.save},null,8,["label","onClick"])):((0,s.wg)(),(0,s.j4)(Z,{key:0,onSave:V.save,readonly:!1,onCancel:l[15]||(l[15]=l=>e.$router.push(V.docUrl))},null,8,["onSave"]))])):(0,s.kq)("",!0)])),_:1})}var U=t(43015);const V={props:["id","isOpenInDialog"],components:{},mixins:[U.Z],computed:{docUrl:function(){return"/meeting"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"datetime",label:"дата и время"},{name:"state_id",label:"статус"},{name:"place",label:"место"},{name:"description",label:"описание и темы"},{name:"description_files",label:"файлы описания"},{name:"description_images",label:"изображения описания"},{name:"notes",label:"заметки"},{name:"notes_files",label:"файлы заметок"},{name:"notes_images",label:"изображения заметок"},{name:"result",label:"результаты"},{name:"result_files",label:"файлы результатов"},{name:"result_images",label:"изображения результатов"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"meeting_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"meeting_get_by_id",cb:e})}},mounted(){this.reload()}};var N=t(74260),j=t(24379),C=t(34842),W=t(2165),D=t(7518),M=t.n(D);const Z=(0,N.Z)(V,[["render",I]]),O=Z;M()(V,"components",{QPage:j.Z,QInput:C.Z,QBtn:W.Z})}}]);