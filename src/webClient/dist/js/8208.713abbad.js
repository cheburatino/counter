(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[8208],{28208:(l,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>y});t(90246);var i=t(34182);const s={key:1,class:"q-mt-sm"},o=(0,i.Wm)("div",{class:"row q-col-gutter-md q-mb-sm"}," not found vueFldTemplate for type `` ",-1),m={class:"row q-col-gutter-md q-mb-sm"},a={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"row q-col-gutter-md q-mb-sm"},n={class:"col-md-8 col-sm-12 col-xs-12"},r={class:"row q-col-gutter-md q-mb-sm"},u={class:"col-md-4 col-sm-6 col-xs-12"};function p(l,e,t,p,_,k){const b=(0,i.up)("comp-breadcrumb"),w=(0,i.up)("comp-fld-ref-search"),h=(0,i.up)("q-input"),g=(0,i.up)("comp-item-btn-save"),v=(0,i.up)("q-btn"),y=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(y,{padding:""},{default:(0,i.w5)((()=>[t.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(b,{key:0,list:[{label:"Участники дел",to:"/work_specialist_link",docType:"work_specialist_link"},{label:_.item?_.item.title?_.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),_.item?((0,i.wg)(),(0,i.j4)("div",s,[o,(0,i.Wm)("div",m,[(0,i.Wm)("div",a,[(0,i.Wm)(w,{outlined:"",pgMethod:"task_list",label:l.$t("work_specialist_link.work_id"),item:_.item.work_title,itemId:_.item.work_id,ext:{},onUpdate:e[1]||(e[1]=l=>_.item.work_id=l.id),onClear:e[2]||(e[2]=l=>_.item.work_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])]),(0,i.Wm)("div",d,[(0,i.Wm)(w,{outlined:"",pgMethod:"man_list",label:l.$t("work_specialist_link.specialist_id"),item:_.item.specialist_title,itemId:_.item.specialist_id,ext:{},onUpdate:e[3]||(e[3]=l=>_.item.specialist_id=l.id),onClear:e[4]||(e[4]=l=>_.item.specialist_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,i.Wm)("div",c,[(0,i.Wm)("div",n,[(0,i.Wm)(h,{outlined:"",type:"text",modelValue:_.item.description,"onUpdate:modelValue":e[5]||(e[5]=l=>_.item.description=l),label:l.$t("work_specialist_link.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i.Wm)("div",r,[(0,i.Wm)("div",u,[(0,i.Wm)(w,{outlined:"",pgMethod:"man_list",label:l.$t("work_specialist_link.author_id"),item:_.item.author_title,itemId:_.item.author_id,ext:{},onUpdate:e[6]||(e[6]=l=>_.item.author_id=l.id),onClear:e[7]||(e[7]=l=>_.item.author_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),t.isOpenInDialog?((0,i.wg)(),(0,i.j4)(v,{key:1,color:"secondary",label:l.$t("message.save"),class:"q-mr-sm",onClick:k.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(g,{key:0,onSave:k.save,readonly:!1,onCancel:e[8]||(e[8]=e=>l.$router.push(k.docUrl))},null,8,["onSave"]))])):(0,i.kq)("",!0)])),_:1})}var _=t(43015);const k={props:["id","isOpenInDialog"],components:{},mixins:[_.Z],computed:{docUrl:function(){return"/work_specialist_link"}},data(){return{item:null,flds:[{name:"work_id",label:"дело"},{name:"specialist_id",label:"специалист"},{name:"description",label:"описание"},{name:"author_id",label:"автор"}],optionsFlds:[]}},watch:{},methods:{resultModify(l){return l},save(){this.$utils.saveItem.call(this,{method:"work_specialist_link_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let l=l=>{this.item=this.resultModify(l)};this.$utils.getDocItemById.call(this,{method:"work_specialist_link_get_by_id",cb:l})}},mounted(){this.reload()}};var b=t(24379),w=t(34842),h=t(2165),g=t(7518),v=t.n(g);k.render=p;const y=k;v()(k,"components",{QPage:b.Z,QInput:w.Z,QBtn:h.Z})}}]);