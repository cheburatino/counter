"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[910],{80910:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Zt});l(90246);var i=l(34182);const o={key:1,class:"q-mt-sm"},s={class:"row q-col-gutter-md q-mb-sm"},d={class:"col-md-4 col-sm-6 col-xs-12"},a={class:"col-md-2 col-sm-3 col-xs-6"},n={class:"col-md-2 col-sm-3 col-xs-6"},m={class:"row q-col-gutter-md q-mb-sm"},r={class:"col-md-4 col-sm-6 col-xs-12"},u={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"row q-col-gutter-md q-mb-sm"},p={class:"col-md-8 col-sm-12 col-xs-12"},_={class:"row q-col-gutter-md q-mb-sm"},w={class:"col-md-4 col-sm-6 col-xs-12"},g={class:"col-md-4 col-sm-6 col-xs-12"},h={class:"row q-col-gutter-md q-mb-sm"},f={key:0,class:"col-md-4 col-sm-6 col-xs-12"},k={key:1,class:"col-md-4 col-sm-6 col-xs-12"},q={class:"row q-col-gutter-md q-mb-sm"},b={class:"col-md-4 col-sm-6 col-xs-12"},y={class:"row q-col-gutter-md q-mb-sm"},v=(0,i._)("div",{class:"col-md-4 col-sm-6 col-xs-12"},[(0,i._)("p",null,"Специалисты")],-1),x={key:0,class:"col-md-4 col-sm-6 col-xs-12"},W={class:"row q-col-gutter-md q-mb-sm"},C={class:"col-md-4 col-sm-6 col-xs-12"},Z={class:"row q-col-gutter-md q-mb-sm"},Q={class:"col-md-4 col-sm-6 col-xs-12"},D={class:"row q-col-gutter-md q-mb-sm"},U={class:"col-md-4 col-sm-6 col-xs-12"},S={class:"col-md-4 col-sm-6 col-xs-12"},I={class:"row q-col-gutter-md q-mb-sm"},$={class:"col-md-4 col-sm-6 col-xs-12"},V={class:"row q-col-gutter-md q-mb-sm"},j={class:"col-md-4 col-sm-6 col-xs-12"},L={class:"col-md-4 col-sm-6 col-xs-12"},P={class:"row q-col-gutter-md q-mb-sm"},M={class:"col-md-4 col-sm-6 col-xs-12"},A={class:"row q-col-gutter-md q-mb-sm"},z={class:"col-md-4 col-sm-6 col-xs-12"},R={class:"row q-col-gutter-md q-mb-sm"},B={class:"col-md-8 col-sm-12 col-xs-12"},O=(0,i.Uk)("Сохранить");function T(e,t,l,T,N,K){const H=(0,i.up)("comp-breadcrumb"),Y=(0,i.up)("q-input"),E=(0,i.up)("comp-fld-ref-search"),F=(0,i.up)("comp-fld-files"),G=(0,i.up)("comp-fld-img-list"),J=(0,i.up)("comp-fld-date-time"),X=(0,i.up)("comp-executor"),ee=(0,i.up)("task-list-ref-list-widget"),te=(0,i.up)("comp-customer"),le=(0,i.up)("comp-customerAgent"),ie=(0,i.up)("customer-task-list-ref-list-widget"),oe=(0,i.up)("comp-relation"),se=(0,i.up)("ft-list-ref-list-widget"),de=(0,i.up)("comp-result"),ae=(0,i.up)("comp-item-btn-save"),ne=(0,i.up)("q-btn"),me=(0,i.up)("q-tooltip"),re=(0,i.up)("q-page-sticky"),ue=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(ue,{padding:""},{default:(0,i.w5)((()=>{var T,ue,ce,pe,_e,we,ge,he,fe,ke,qe,be,ye;return[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(H,{key:0,list:[{label:"Запросы",to:"/request",docType:"request"},{label:N.item?N.item.title?N.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),N.item?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",s,[(0,i._)("div",d,[(0,i.Wm)(Y,{outlined:"",type:"text",modelValue:N.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>N.item.title=e),label:e.$t("request.title"),autogrow:"",readonly:(null===(T=e.currentUser.role)||void 0===T?void 0:T.includes("customer"))&&1!=N.item.state_id,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label","readonly"])]),(0,i._)("div",a,[(0,i.Wm)(E,{outlined:"",pgMethod:"ctlg_request_priority_list",label:e.$t("request.priority_id"),item:N.item.priority_title,itemId:N.item.priority_id,ext:{},onUpdate:t[1]||(t[1]=e=>N.item.priority_id=e.id),onClear:t[2]||(t[2]=e=>N.item.priority_id=null),readonly:!1,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId"])]),(0,i._)("div",n,[(0,i.Wm)(E,{outlined:"",pgMethod:"ctlg_request_state_list",label:e.$t("request.state_id"),item:N.item.state_title,itemId:N.item.state_id,ext:{},onUpdate:t[3]||(t[3]=e=>N.item.state_id=e.id),onClear:t[4]||(t[4]=e=>N.item.state_id=null),readonly:(null===(ue=e.currentUser.role)||void 0===ue?void 0:ue.includes("customer"))&&1!=N.item.state_id,class:"q-mb-sm col-md-2 col-sm-3 col-xs-6"},null,8,["label","item","itemId","readonly"])])]),(0,i._)("div",m,[(0,i._)("div",r,[(0,i._)("p",null,"Дата и время создания: "+(0,i.zw)(N.item.created_at),1)]),(0,i._)("div",u,[(0,i._)("p",null,"Дата и время изменения: "+(0,i.zw)(N.item.updated_at),1)])]),(0,i._)("div",c,[(0,i._)("div",p,[(0,i.Wm)(Y,{outlined:"",type:"text",modelValue:N.item.description,"onUpdate:modelValue":t[5]||(t[5]=e=>N.item.description=e),label:e.$t("request.description"),autogrow:"",readonly:(null===(ce=e.currentUser.role)||void 0===ce?void 0:ce.includes("customer"))&&1!=N.item.state_id,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label","readonly"])])]),(0,i._)("div",_,[(0,i._)("div",w,["new"!=this.id?((0,i.wg)(),(0,i.j4)(F,{key:0,fldName:"files",label:e.$t("request.files"),fld:N.item.files,ext:{tableName:"request",tableId:this.id},onUpdate:t[6]||(t[6]=e=>N.item.files=e),readonly:(null===(pe=e.currentUser.role)||void 0===pe?void 0:pe.includes("customer"))&&1!=N.item.state_id,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext","readonly"])):(0,i.kq)("",!0)]),(0,i._)("div",g,["new"!=this.id?((0,i.wg)(),(0,i.j4)(G,{key:0,label:e.$t("request.images"),fld:N.item.images,ext:{tableName:"request",tableId:this.id,fldName:"images"},onUpdate:t[7]||(t[7]=e=>N.item.images=e),readonly:(null===(_e=e.currentUser.role)||void 0===_e?void 0:_e.includes("customer"))&&1!=N.item.state_id,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext","readonly"])):(0,i.kq)("",!0)])]),(0,i._)("div",h,[null!==(we=e.currentUser.role)&&void 0!==we&&we.includes("admin")?((0,i.wg)(),(0,i.iD)("div",f,[null!==(ge=e.currentUser.role)&&void 0!==ge&&ge.includes("admin")?((0,i.wg)(),(0,i.j4)(Y,{key:0,outlined:"",type:"text",modelValue:N.item.how_request_received,"onUpdate:modelValue":t[8]||(t[8]=e=>N.item.how_request_received=e),label:e.$t("request.how_request_received"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),null!==(he=e.currentUser.role)&&void 0!==he&&he.includes("admin")?((0,i.wg)(),(0,i.iD)("div",k,[null!==(fe=e.currentUser.role)&&void 0!==fe&&fe.includes("admin")?((0,i.wg)(),(0,i.j4)(J,{key:0,outlined:"",label:e.$t("request.datetime_reciept"),"date-string":e.$utils.formatPgDateTime(N.item.datetime_reciept),onUpdate:t[9]||(t[9]=e=>N.item.datetime_reciept=e),onClear:t[10]||(t[10]=e=>N.item.datetime_reciept=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","date-string"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)]),(0,i._)("div",q,[(0,i._)("div",b,[(0,i.Wm)(X,{item:N.item},null,8,["item"])])]),(0,i._)("div",y,[v,null!==(ke=e.currentUser.role)&&void 0!==ke&&ke.includes("admin")?((0,i.wg)(),(0,i.iD)("div",x,[-1!=N.item.id?((0,i.wg)(),(0,i.j4)(ee,{key:0,id:N.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)]),(0,i._)("div",W,[(0,i._)("div",C,[(0,i.Wm)(te,{item:N.item},null,8,["item"])])]),(0,i._)("div",Z,[(0,i._)("div",Q,[(0,i.Wm)(E,{outlined:"",pgMethod:"company_list",label:e.$t("request.customer_id"),item:N.item.customer_title,itemId:N.item.customer_id,ext:{avatar:"image/company.svg",isClearable:"true",pathUrl:"/company"},onUpdate:t[11]||(t[11]=e=>N.item.customer_id=e.id),onClear:t[12]||(t[12]=e=>N.item.customer_id=null),readonly:(null===(qe=e.currentUser.role)||void 0===qe?void 0:qe.includes("customer"))&&1!=N.item.state_id,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext","readonly"])])]),(0,i._)("div",D,[(0,i._)("div",U,[(0,i.Wm)(le,{item:N.item,currentUser:e.currentUser},null,8,["item","currentUser"])]),(0,i._)("div",S,[-1!=N.item.id?((0,i.wg)(),(0,i.j4)(ie,{key:0,id:N.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),(0,i._)("div",I,[(0,i._)("div",$,[(0,i.Wm)(oe,{item:N.item},null,8,["item"])])]),(0,i._)("div",V,[(0,i._)("div",j,[(0,i.Wm)(E,{outlined:"",pgMethod:"system_list",label:e.$t("request.system_id"),item:N.item.system_title,itemId:N.item.system_id,ext:{customer_id:N.item.customer_id,isClearable:"true",pathUrl:"/system",avatar:"image/system.svg"},onUpdate:t[13]||(t[13]=e=>N.item.system_id=e.id),onClear:t[14]||(t[14]=e=>N.item.system_id=null),readonly:(null===(be=e.currentUser.role)||void 0===be?void 0:be.includes("customer"))&&1!=N.item.state_id,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext","readonly"])]),(0,i._)("div",L,[-1!=N.item.id?((0,i.wg)(),(0,i.j4)(se,{key:0,id:N.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),(0,i._)("div",P,[(0,i._)("div",M,[(0,i.Wm)(Y,{outlined:"",type:"number",modelValue:N.item.cost_estimate,"onUpdate:modelValue":t[15]||(t[15]=e=>N.item.cost_estimate=e),label:e.$t("request.cost_estimate"),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])]),(0,i._)("div",A,[(0,i._)("div",z,[(0,i.Wm)(de,{item:N.item},null,8,["item"])])]),(0,i._)("div",R,[(0,i._)("div",B,[(0,i.Wm)(Y,{outlined:"",type:"text",modelValue:N.item.result,"onUpdate:modelValue":t[16]||(t[16]=e=>N.item.result=e),label:e.$t("request.result"),autogrow:"",readonly:(null===(ye=e.currentUser.role)||void 0===ye?void 0:ye.includes("customer"))&&1!=N.item.state_id,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label","readonly"])])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)(ne,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:K.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(ae,{key:0,onSave:K.save,readonly:!1,onCancel:t[17]||(t[17]=t=>e.$router.push(K.docUrl))},null,8,["onSave"])),(0,i.Wm)(re,{position:"bottom-right",offset:[18,18]},{default:(0,i.w5)((()=>[(0,i.Wm)(ne,{size:"sm",fab:"",icon:"save",color:"primary",onClick:K.save},{default:(0,i.w5)((()=>[(0,i.Wm)(me,null,{default:(0,i.w5)((()=>[O])),_:1})])),_:1},8,["onClick"])])),_:1})])):(0,i.kq)("",!0)]})),_:1})}const N={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function K(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",N," Итоги: ")}l(64434);const H={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}};var Y=l(74260);const E=(0,Y.Z)(H,[["render",K],["__scopeId","data-v-7d9bf16a"]]),F=E,G=(0,i.Uk)("задачи "),J={key:0},X=(0,i.Uk)("Добавить"),ee=(0,i.Uk)("активные задачи"),te=(0,i.Uk)("удаленные задачи"),le=(0,i._)("img",{src:"image/task.svg",alt:""},null,-1),ie=(0,i._)("div",null,"Создать новую запись",-1);function oe(e,t,l,o,s,d){const a=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),m=(0,i.up)("q-btn"),r=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),c=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),h=(0,i.up)("q-list"),f=(0,i.up)("q-input"),k=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),b=(0,i.up)("q-card"),y=(0,i.up)("q-dialog"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[G,s.deleted?((0,i.wg)(),(0,i.iD)("span",J,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(a),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:0,icon:"add",round:"",flat:"",onClick:d.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[X])),_:1})])),_:1},8,["onClick"])),s.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(m,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>d.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[ee])),_:1})])),_:1})):(0,i.kq)("",!0),s.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>d.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[te])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(h,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/task/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[le])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{name:s.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>d.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(y,{modelValue:s.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[ie,(0,i.Wm)(a),(0,i.wy)((0,i.Wm)(m,{dense:"",flat:"",icon:"close"},null,512),[[v]])])),_:1}),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:s.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>s.item.title=e),label:e.$t("task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",label:"OK",onClick:d.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const se={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("task_list",{digital_solution_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,digital_solution_id:this.id},this.item);this.$utils.callPgMethod("task_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("task_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var de=l(10846),ae=l(62025),ne=l(2165),me=l(5363),re=l(27011),ue=l(83414),ce=l(52035),pe=l(75096),_e=l(2350),we=l(24554),ge=l(46778),he=l(10151),fe=l(25589),ke=l(34842),qe=l(99367),be=l(60677),ye=l(7518),ve=l.n(ye);const xe=(0,Y.Z)(se,[["render",oe]]),We=xe;ve()(se,"components",{QBar:de.Z,QSpace:ae.Z,QBtn:ne.Z,QTooltip:me.Z,QList:re.Z,QItem:ue.Z,QItemSection:ce.Z,QAvatar:pe.Z,QItemLabel:_e.Z,QIcon:we.Z,QDialog:ge.Z,QCard:he.Z,QCardSection:fe.Z,QInput:ke.Z,QCardActions:qe.Z}),ve()(se,"directives",{ClosePopup:be.Z});const Ce=(0,i.Uk)("задачи заказчика "),Ze={key:0},Qe=(0,i.Uk)("Добавить"),De=(0,i.Uk)("активные задачи заказчика"),Ue=(0,i.Uk)("удаленные задачи заказчика"),Se=(0,i._)("img",{src:"image/customer_task.png",alt:""},null,-1),Ie=(0,i._)("div",null,"Создать новую запись",-1);function $e(e,t,l,o,s,d){const a=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),m=(0,i.up)("q-btn"),r=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),c=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-badge"),g=(0,i.up)("q-icon"),h=(0,i.up)("q-item"),f=(0,i.up)("q-list"),k=(0,i.up)("q-input"),q=(0,i.up)("q-card-section"),b=(0,i.up)("q-card-actions"),y=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),x=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[Ce,s.deleted?((0,i.wg)(),(0,i.iD)("span",Ze,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(a),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:0,icon:"add",round:"",flat:"",onClick:d.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Qe])),_:1})])),_:1},8,["onClick"])),s.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(m,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>d.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[De])),_:1})])),_:1})):(0,i.kq)("",!0),s.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>d.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Ue])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(f,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.list,(e=>((0,i.wg)(),(0,i.j4)(h,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/customer_task/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[Se])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{name:s.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>d.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(v,{modelValue:s.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[Ie,(0,i.Wm)(a),(0,i.wy)((0,i.Wm)(m,{dense:"",flat:"",icon:"close"},null,512),[[x]])])),_:1}),(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{outlined:"",type:"text",modelValue:s.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>s.item.title=e),label:e.$t("customer_task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(b,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",label:"OK",onClick:d.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const Ve={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("customer_task_list",{digital_solution_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,digital_solution_id:this.id},this.item);this.$utils.callPgMethod("customer_task_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("customer_task_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var je=l(69721);const Le=(0,Y.Z)(Ve,[["render",$e]]),Pe=Le;ve()(Ve,"components",{QBar:de.Z,QSpace:ae.Z,QBtn:ne.Z,QTooltip:me.Z,QList:re.Z,QItem:ue.Z,QItemSection:ce.Z,QAvatar:pe.Z,QItemLabel:_e.Z,QBadge:je.Z,QIcon:we.Z,QDialog:ge.Z,QCard:he.Z,QCardSection:fe.Z,QInput:ke.Z,QCardActions:qe.Z}),ve()(Ve,"directives",{ClosePopup:be.Z});const Me=(0,i.Uk)("функциональные требования "),Ae={key:0},ze=(0,i.Uk)("Добавить"),Re=(0,i.Uk)("активные функциональные требования"),Be=(0,i.Uk)("удаленные функциональные требования"),Oe=(0,i._)("img",{src:"image/functional_requirement.svg",alt:""},null,-1),Te=(0,i._)("div",null,"Создать новую запись",-1);function Ne(e,t,l,o,s,d){const a=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),m=(0,i.up)("q-btn"),r=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),c=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),w=(0,i.up)("q-icon"),g=(0,i.up)("q-item"),h=(0,i.up)("q-list"),f=(0,i.up)("q-input"),k=(0,i.up)("q-card-section"),q=(0,i.up)("q-card-actions"),b=(0,i.up)("q-card"),y=(0,i.up)("q-dialog"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[Me,s.deleted?((0,i.wg)(),(0,i.iD)("span",Ae,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(a),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:0,icon:"add",round:"",flat:"",onClick:d.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[ze])),_:1})])),_:1},8,["onClick"])),s.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(m,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>d.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Re])),_:1})])),_:1})):(0,i.kq)("",!0),s.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>d.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Be])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(h,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.list,(e=>((0,i.wg)(),(0,i.j4)(g,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/functional_requirement/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[Oe])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{name:s.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>d.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(y,{modelValue:s.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[Te,(0,i.Wm)(a),(0,i.wy)((0,i.Wm)(m,{dense:"",flat:"",icon:"close"},null,512),[[v]])])),_:1}),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:s.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>s.item.title=e),label:e.$t("functional_requirement.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(q,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",label:"OK",onClick:d.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const Ke={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("functional_requirement_list",{request_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,request_id:this.id},this.item);this.$utils.callPgMethod("functional_requirement_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("functional_requirement_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},He=(0,Y.Z)(Ke,[["render",Ne]]),Ye=He;ve()(Ke,"components",{QBar:de.Z,QSpace:ae.Z,QBtn:ne.Z,QTooltip:me.Z,QList:re.Z,QItem:ue.Z,QItemSection:ce.Z,QAvatar:pe.Z,QItemLabel:_e.Z,QIcon:we.Z,QDialog:ge.Z,QCard:he.Z,QCardSection:fe.Z,QInput:ke.Z,QCardActions:qe.Z}),ve()(Ke,"directives",{ClosePopup:be.Z});const Ee={key:0},Fe={key:1},Ge=(0,i._)("div",{style:{"text-align":"center"},class:"text-h6"},"Выбор пользователя",-1),Je=(0,i._)("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),Xe=(0,i._)("br",null,null,-1),et={key:0,style:{"margin-left":"40px","border-bottom":"1px solid #4f6ccd","margin-right":"40px"}};function tt(e,t,l,o,s,d){const a=(0,i.up)("q-icon"),n=(0,i.up)("q-space"),m=(0,i.up)("q-btn"),r=(0,i.up)("q-bar"),u=(0,i.up)("q-item-label"),c=(0,i.up)("q-item-section"),p=(0,i.up)("q-item"),_=(0,i.up)("q-list"),w=(0,i.up)("q-card-section"),g=(0,i.up)("q-avatar"),h=(0,i.up)("q-btn-dropdown"),f=(0,i.up)("q-input"),k=(0,i.up)("q-card-actions"),q=(0,i.up)("q-card"),b=(0,i.up)("q-dialog"),y=(0,i.Q2)("ripple"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{class:"bg-secondary text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{name:"fas fa-user-astronaut"}),s.isShowDeleted?((0,i.wg)(),(0,i.iD)("div",Fe,"Удалённые")):((0,i.wg)(),(0,i.iD)("div",Ee,"Представители заказчика")),(0,i.Wm)(n),(0,i.Wm)(m,{flat:"",round:"",icon:"add",onClick:d.showAddDialog},null,8,["onClick"]),(0,i.Wm)(m,{flat:"",round:"",icon:"delete_outline",onClick:t[0]||(t[0]=e=>s.isShowDeleted=!s.isShowDeleted)})])),_:1}),!s.isShowDeleted&&s.taskSpecList.length>0?((0,i.wg)(),(0,i.j4)(_,{key:0,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.taskSpecList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:t=>d.editPosition(e.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.customer_agent_title),1)])),_:2},1024),(0,i.Wm)(u,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(c,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"delete",onClick:t=>d.deletePosition(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[y]]))),128))])),_:1})):(0,i.kq)("",!0),s.isShowDeleted&&s.deletedtaskSpecList.length>0?((0,i.wg)(),(0,i.j4)(_,{key:1,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.deletedtaskSpecList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:t=>d.editPosition(e.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.customer_agent_title),1)])),_:2},1024),(0,i.Wm)(u,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(c,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"replay",onClick:t=>d.recoverPosition(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[y]]))),128))])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(b,{modelValue:s.isShowDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowDialog=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{style:{"min-width":"250px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[Ge])),_:1}),(0,i.Wm)(h,{split:"",color:"primary",push:"",glossy:"","no-caps":"",icon:"face",label:"Пользователь",onClick:e.onMainClick,style:{"margin-left":"40px","margin-bottom":"10px","margin-top":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.specList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",onClick:t=>d.onSpecClick(e),key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{size:"40px"},{default:(0,i.w5)((()=>[Je])),_:1})])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(u,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.position),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[v]]))),128))])),_:1})])),_:1},8,["onClick"]),Xe,s.spec?((0,i.wg)(),(0,i.iD)("div",et,(0,i.zw)(s.spec),1)):(0,i.kq)("",!0),(0,i.Wm)(f,{modelValue:s.roleDesc,"onUpdate:modelValue":t[1]||(t[1]=e=>s.roleDesc=e),placeholder:"Описание роли",filled:"",autogrow:"",style:{"margin-top":"40px","margin-left":"40px","margin-right":"40px","margin-bottom":"20px"}},null,8,["modelValue"]),(0,i.Wm)(k,{align:"center",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(m,{flat:"",label:"Отмена"},null,512),[[v]]),s.editMode?(0,i.wy)(((0,i.wg)(),(0,i.j4)(m,{key:0,flat:"",label:"Сохранить",onClick:t[2]||(t[2]=e=>d.savePosition(s.activetaskSpecId))},null,512)),[[v]]):(0,i.wy)(((0,i.wg)(),(0,i.j4)(m,{key:1,flat:"",label:"Добавить",onClick:d.addPosition},null,8,["onClick"])),[[v]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const lt={props:["fld","item","currentUser"],data(){return{isShowDeleted:!1,isShowDialog:!1,editMode:!1,positionTemplate:null,positionList:[],taskSpecList:[],deletedtaskSpecList:[],position:{id:null,name:null,cost_without_vat:null,cost_without_vat_all:null,quantity:null,vat_rate:null,vat:null,cost_with_vat:null,deleted:!1},spec:"",specId:null,roleDesc:"",specList:[],roleList:[],activetaskSpecId:null}},methods:{showAddDialog(){this.position=Object.assign({},this.positionTemplate),this.editMode=!1,this.isShowDialog=!0,this.spec="",this.roleDesc="",this.roleId=null},findId(e){let t=0;return e.forEach((function(e){e.id>t&&(t=e.id)})),t+1},addPosition(){this.$utils.postCallPgMethod({method:"request_customer_agent_link_update",params:{id:-1,customer_agent_id:this.specId,description:this.roleDesc,request_id:this.item.id,author_id:this.currentUser.id}}).subscribe((e=>{e.ok&&this.reloadList()}))},onSpecClick(e){this.spec=e.title,this.specId=e.id},onRoleClick(e){this.role=e.title,this.roleId=e.id},editPosition(e){},savePosition(e){this.$utils.postCallPgMethod({method:"request_customer_agent_link_update",params:{id:e,specialist_id:this.specId,description:this.roleDesc}}).subscribe((e=>{e.ok&&this.reloadList()})),this.editMode=!1,this.isShowDialog=!1},deletePosition(e){let t=this.taskSpecList.findIndex((t=>t.id===e));this.taskSpecList[t].deleted=!0,this.$utils.postCallPgMethod({method:"request_customer_agent_link_update",params:{id:e,deleted:!0}}).subscribe((e=>{e.ok&&this.reloadList()}))},recoverPosition(e){this.$utils.postCallPgMethod({method:"request_customer_agent_link_update",params:{id:e,deleted:!1}}).subscribe((e=>{e.ok&&this.reloadList()}))},reloadList(){this.$utils.postCallPgMethod({method:"request_customer_agent_link_list",params:{request_id:this.item.id}}).subscribe((e=>{e.ok&&(this.taskSpecList=e.result)})),this.$utils.postCallPgMethod({method:"request_customer_agent_link_list",params:{request_id:this.item.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.deletedtaskSpecList=e.result)}))}},mounted(){this.positionTemplate=Object.assign({},this.position),this.reloadList(),this.$utils.postCallPgMethod({method:"man_list",params:{}}).subscribe((e=>{e.ok&&(this.specList=e.result)})),this.$utils.postCallPgMethod({method:"task_get_specialist_role",params:{}}).subscribe((e=>{e.ok&&(this.roleList=e.result)}))},computed:{},watch:{}};var it=l(42670),ot=l(46489);const st=(0,Y.Z)(lt,[["render",tt]]),dt=st;ve()(lt,"components",{QBar:de.Z,QIcon:we.Z,QSpace:ae.Z,QBtn:ne.Z,QList:re.Z,QItem:ue.Z,QItemSection:ce.Z,QItemLabel:_e.Z,QDialog:ge.Z,QCard:he.Z,QCardSection:fe.Z,QBtnDropdown:it.Z,QAvatar:pe.Z,QInput:ke.Z,QCardActions:qe.Z}),ve()(lt,"directives",{Ripple:ot.Z,ClosePopup:be.Z});const at={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function nt(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",at," Связи: ")}const mt={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}},rt=(0,Y.Z)(mt,[["render",nt],["__scopeId","data-v-8fd1f476"]]),ut=rt,ct={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function pt(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",ct," Исполнитель: ")}const _t={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}},wt=(0,Y.Z)(_t,[["render",pt],["__scopeId","data-v-3308cb4a"]]),gt=wt,ht={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function ft(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",ht," Заказчик: ")}const kt={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}},qt=(0,Y.Z)(kt,[["render",ft],["__scopeId","data-v-7294fa8b"]]),bt=qt;var yt=l(43015);const vt={props:["id","isOpenInDialog"],components:{compCustomer:bt,compResult:F,taskListRefListWidget:We,customerTaskListRefListWidget:Pe,ftListRefListWidget:Ye,compCustomerAgent:dt,compRelation:ut,compExecutor:gt},mixins:[yt.Z],computed:{docUrl:function(){return"/request"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"priority_id",label:"приоритет"},{name:"state_id",label:"статус"},{name:"description",label:"описание"},{name:"files",label:"файлы"},{name:"images",label:"изображения"},{name:"how_request_received",label:"как получен запрос"},{name:"datetime_reciept",label:"дата и время получения запроса"},{name:"customer_id",label:"заказчик"},{name:"system_id",label:"система"},{name:"cost_estimate",label:"оценка стоимости"},{name:"result",label:"результат"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"request_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"request_get_by_id",cb:e})}},mounted(){this.reload()}};var xt=l(24379),Wt=l(21007);const Ct=(0,Y.Z)(vt,[["render",T]]),Zt=Ct;ve()(vt,"components",{QPage:xt.Z,QInput:ke.Z,QBtn:ne.Z,QPageSticky:Wt.Z,QTooltip:me.Z})}}]);