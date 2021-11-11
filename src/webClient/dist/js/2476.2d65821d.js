"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[2476],{18747:(e,l,t)=>{t.d(l,{Z:()=>s});var a=t(15800);const s=[{label:a.i18n.global.t("user.role_admin"),value:"admin"},{label:a.i18n.global.t("user.role_student"),value:"student"},{label:a.i18n.global.t("user.role_customer"),value:"customer"},{label:a.i18n.global.t("user.role_specialist"),value:"specialist"}]},22476:(e,l,t)=>{t.r(l),t.d(l,{default:()=>I});var a=t(34182);const s={key:0,class:"q-mt-sm"},o={class:"row q-col-gutter-md q-mb-sm"},m={class:"col-md-4 col-xs-6"},d={class:"col-md-4 col-xs-6"},i={class:"row q-col-gutter-md q-mb-sm"},u={class:"col-md-4 col-xs-6"},n={class:"col-md-4 col-xs-6"},r={class:"row q-col-gutter-md q-mb-sm"},c={class:"col-md-4 col-xs-6"},p={class:"col-md-4 col-xs-6"},b={class:"row q-col-gutter-md"},_={class:"col-xs-12 col-sm-6 col-md-4"},v={class:"col-md-4 col-xs-6"};function h(e,l,t,h,f,g){const V=(0,a.up)("comp-breadcrumb"),q=(0,a.up)("q-input"),x=(0,a.up)("q-select"),$=(0,a.up)("q-icon"),y=(0,a.up)("comp-fld-img"),w=(0,a.up)("comp-item-btn-save"),W=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(W,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(V,{list:[{label:"Пользователи",to:"/users",docType:"users"},{label:f.item?`${f.item.last_name} ${f.item.first_name}`:"",docType:"edit"}]},null,8,["list"]),f.item?((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",o,[(0,a._)("div",m,[(0,a.Wm)(q,{outlined:"",type:"text",modelValue:f.item.last_name,"onUpdate:modelValue":l[0]||(l[0]=e=>f.item.last_name=e),label:e.$t("user.last_name"),class:"q-mb-sm col-md-4 col-xs-6"},null,8,["modelValue","label"])]),(0,a._)("div",d,[(0,a.Wm)(q,{outlined:"",type:"text",modelValue:f.item.first_name,"onUpdate:modelValue":l[1]||(l[1]=e=>f.item.first_name=e),label:e.$t("user.first_name"),class:"q-mb-sm col-md-4 col-xs-6"},null,8,["modelValue","label"])])]),(0,a._)("div",i,[(0,a._)("div",u,[(0,a.Wm)(x,{outlined:"",multiple:"",modelValue:f.item.role,"onUpdate:modelValue":l[2]||(l[2]=e=>f.item.role=e),label:e.$t("user.roles"),options:f.options},null,8,["modelValue","label","options"])]),(0,a._)("div",n,[(0,a.Wm)(x,{outlined:"",modelValue:f.item.state,"onUpdate:modelValue":l[3]||(l[3]=e=>f.item.state=e),label:e.$t("user.state"),options:g.stateOptions},null,8,["modelValue","label","options"])])]),(0,a._)("div",r,[(0,a._)("div",c,[(0,a.Wm)(q,{outlined:"",type:"text",modelValue:f.item.grade,"onUpdate:modelValue":l[4]||(l[4]=e=>f.item.grade=e),label:e.$t("user.grade"),class:"q-mb-sm col-md-4 col-xs-6"},null,8,["modelValue","label"])]),(0,a._)("div",p,[(0,a.Wm)(q,{outlined:"",mask:"+# (###) ### - ####",modelValue:f.item.phone,"onUpdate:modelValue":l[5]||(l[5]=e=>f.item.phone=e),label:e.$t("user.phone"),readonly:!1,class:"q-mb-sm col-md-4 col-xs-6"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"phone"})])),_:1},8,["modelValue","label"])])]),(0,a._)("div",b,[(0,a._)("div",_,[(0,a.Wm)(y,{label:e.$t("user.photo"),fld:f.item.avatar,ext:{fldName:"avatar",uploadUrl:"upload_profile_image",methodUpdate:"user_update",tableId:f.item.id}},null,8,["label","fld","ext"])]),(0,a._)("div",v,[(0,a.Wm)(q,{outlined:"",modelValue:f.item.email,"onUpdate:modelValue":l[6]||(l[6]=e=>f.item.email=e),label:e.$t("user.email"),readonly:!0,class:"q-mb-sm col-md-4 col-xs-6"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"email"})])),_:1},8,["modelValue","label"])])]),(0,a.Wm)(w,{onSave:g.save,onCancel:l[7]||(l[7]=l=>e.$router.push(g.docUrl))},null,8,["onSave"])])):(0,a.kq)("",!0)])),_:1})}var f=t(88603),g=t.n(f),V=t(18747);const q={props:["id"],computed:{docUrl:()=>"/users",stateOptions:function(){return["waiting_auth","working","fired"].map((e=>({value:e,label:this.$t(`user.state_${e}`)})))}},data(){return{item:null,flds:[{name:"first_name",required:!0},{name:"last_name",required:!0},{name:"role"},{name:"state"},{name:"grade"},{name:"phone"}],options:V.Z,optionsFlds:["state"]}},methods:{resultModify(e){return e.role=e.role.map((e=>g().find(this.options,{value:e}))).filter((e=>e)),e.state&&(e.state={value:e.state,label:this.$t(`user.state_${e.state}`)}),e},save(){this.$utils.saveItem.call(this,{method:"user_update",itemForSaveMod:{role:this.item.role.map((({value:e})=>e)).filter((e=>e)),state:this.item.state?this.item.state.value:void 0},resultModify:this.resultModify})}},mounted(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"user_get_by_id",cb:e})}};var x=t(74260),$=t(24379),y=t(34842),w=t(72448),W=t(24554),U=t(7518),k=t.n(U);const Z=(0,x.Z)(q,[["render",h]]),I=Z;k()(q,"components",{QPage:$.Z,QInput:y.Z,QSelect:w.Z,QIcon:W.Z})}}]);