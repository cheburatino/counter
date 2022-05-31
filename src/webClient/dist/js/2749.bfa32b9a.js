"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[2749],{12749:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ie});var i=l(34182);const d={key:1,class:"q-mt-sm"},a={class:"row q-col-gutter-md q-mb-sm"},o={class:"col-md-4 col-sm-6 col-xs-12"},n={class:"row q-col-gutter-md q-mb-sm"},s={class:"col-md-4 col-sm-6 col-xs-12"},u={class:"col-md-4 col-sm-6 col-xs-12"};function c(e,t,l,c,r,m){const p=(0,i.up)("comp-breadcrumb"),w=(0,i.up)("q-input"),g=(0,i.up)("legal-entity-list-ref-list-widget"),_=(0,i.up)("contract-list-ref-list-widget"),h=(0,i.up)("comp-item-btn-save"),y=(0,i.up)("q-btn"),f=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(f,{padding:""},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(p,{key:0,list:[{label:"Компании",to:"/company",docType:"company"},{label:r.item?r.item.title?r.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),r.item?((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",a,[(0,i._)("div",o,[(0,i.Wm)(w,{outlined:"",type:"text",modelValue:r.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>r.item.title=e),label:e.$t("company.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),(0,i._)("div",n,[(0,i._)("div",s,[-1!=r.item.id?((0,i.wg)(),(0,i.j4)(g,{key:0,id:r.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)]),(0,i._)("div",u,[-1!=r.item.id?((0,i.wg)(),(0,i.j4)(_,{key:0,id:r.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)(y,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:m.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(h,{key:0,onSave:m.save,readonly:!1,onCancel:t[1]||(t[1]=t=>e.$router.push(m.docUrl))},null,8,["onSave"]))])):(0,i.kq)("",!0)])),_:1})}const r=(0,i.Uk)("юр.лица "),m={key:0},p=(0,i.Uk)("Добавить"),w=(0,i.Uk)("активные юр.лица"),g=(0,i.Uk)("удаленные юр.лица"),_=(0,i._)("img",{src:"image/counterparty.svg",alt:""},null,-1),h=(0,i._)("div",null,"Создать новую запись",-1);function y(e,t,l,d,a,o){const n=(0,i.up)("q-space"),s=(0,i.up)("q-tooltip"),u=(0,i.up)("q-btn"),c=(0,i.up)("q-bar"),y=(0,i.up)("q-avatar"),f=(0,i.up)("q-item-section"),k=(0,i.up)("router-link"),q=(0,i.up)("q-item-label"),v=(0,i.up)("q-badge"),W=(0,i.up)("q-icon"),b=(0,i.up)("q-item"),Z=(0,i.up)("q-list"),Q=(0,i.up)("q-input"),C=(0,i.up)("q-card-section"),D=(0,i.up)("q-card-actions"),x=(0,i.up)("q-card"),S=(0,i.up)("q-dialog"),U=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[r,a.deleted?((0,i.wg)(),(0,i.iD)("span",m,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(n),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[p])),_:1})])),_:1},8,["onClick"])),a.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(u,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[w])),_:1})])),_:1})):(0,i.kq)("",!0),a.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[g])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(Z,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.list,(e=>((0,i.wg)(),(0,i.j4)(b,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{to:"/legal_entity/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{rounded:""},{default:(0,i.w5)((()=>[_])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(q,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(f,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{name:a.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(S,{modelValue:a.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>a.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[h,(0,i.Wm)(n),(0,i.wy)((0,i.Wm)(u,{dense:"",flat:"",icon:"close"},null,512),[[U]])])),_:1}),(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{outlined:"",type:"text",modelValue:a.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>a.item.title=e),label:e.$t("legal_entity.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(D,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const f={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("legal_entity_list",{company_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,company_id:this.id},this.item);this.$utils.callPgMethod("legal_entity_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("legal_entity_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var k=l(74260),q=l(10846),v=l(62025),W=l(2165),b=l(5363),Z=l(27011),Q=l(83414),C=l(52035),D=l(75096),x=l(2350),S=l(69721),U=l(24554),j=l(46778),I=l(10151),V=l(25589),$=l(34842),A=l(99367),M=l(60677),P=l(7518),B=l.n(P);const L=(0,k.Z)(f,[["render",y]]),O=L;B()(f,"components",{QBar:q.Z,QSpace:v.Z,QBtn:W.Z,QTooltip:b.Z,QList:Z.Z,QItem:Q.Z,QItemSection:C.Z,QAvatar:D.Z,QItemLabel:x.Z,QBadge:S.Z,QIcon:U.Z,QDialog:j.Z,QCard:I.Z,QCardSection:V.Z,QInput:$.Z,QCardActions:A.Z}),B()(f,"directives",{ClosePopup:M.Z});const z=(0,i.Uk)("договоры "),R={key:0},K=(0,i.Uk)("Добавить"),N=(0,i.Uk)("активные договоры"),T=(0,i.Uk)("удаленные договоры"),E=(0,i._)("img",{src:"image/contract.svg",alt:""},null,-1),F=(0,i._)("div",null,"Создать новую запись",-1);function H(e,t,l,d,a,o){const n=(0,i.up)("q-space"),s=(0,i.up)("q-tooltip"),u=(0,i.up)("q-btn"),c=(0,i.up)("q-bar"),r=(0,i.up)("q-avatar"),m=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),w=(0,i.up)("q-item-label"),g=(0,i.up)("q-badge"),_=(0,i.up)("q-icon"),h=(0,i.up)("q-item"),y=(0,i.up)("q-list"),f=(0,i.up)("q-input"),k=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),v=(0,i.up)("q-card"),W=(0,i.up)("q-dialog"),b=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[z,a.deleted?((0,i.wg)(),(0,i.iD)("span",R,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(n),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:0,icon:"add",round:"",flat:"",onClick:o.add},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[K])),_:1})])),_:1},8,["onClick"])),a.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(u,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>o.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[N])),_:1})])),_:1})):(0,i.kq)("",!0),a.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>o.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[T])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(y,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.list,(e=>((0,i.wg)(),(0,i.j4)(h,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/contract/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{rounded:""},{default:(0,i.w5)((()=>[E])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(w,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{name:a.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>o.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(W,{modelValue:a.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>a.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[F,(0,i.Wm)(n),(0,i.wy)((0,i.Wm)(u,{dense:"",flat:"",icon:"close"},null,512),[[b]])])),_:1}),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:a.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>a.item.title=e),label:e.$t("contract.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{flat:"",label:"OK",onClick:o.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const Y={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("contract_list",{legal_entity_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,legal_entity_id:this.id},this.item);this.$utils.callPgMethod("contract_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("contract_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},G=(0,k.Z)(Y,[["render",H]]),J=G;B()(Y,"components",{QBar:q.Z,QSpace:v.Z,QBtn:W.Z,QTooltip:b.Z,QList:Z.Z,QItem:Q.Z,QItemSection:C.Z,QAvatar:D.Z,QItemLabel:x.Z,QBadge:S.Z,QIcon:U.Z,QDialog:j.Z,QCard:I.Z,QCardSection:V.Z,QInput:$.Z,QCardActions:A.Z}),B()(Y,"directives",{ClosePopup:M.Z});var X=l(43015);const ee={props:["id","isOpenInDialog"],components:{legalEntityListRefListWidget:O,contractListRefListWidget:J},mixins:[X.Z],computed:{docUrl:function(){return"/company"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"company_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"company_get_by_id",cb:e})}},mounted(){this.reload()}};var te=l(24379);const le=(0,k.Z)(ee,[["render",c]]),ie=le;B()(ee,"components",{QPage:te.Z,QInput:$.Z,QBtn:W.Z})}}]);