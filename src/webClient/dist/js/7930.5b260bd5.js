"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[7930],{97930:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ut});l(90246);var i=l(34182);const o={key:1,class:"q-mt-sm"},s={class:"row q-col-gutter-md q-mb-sm"},d={class:"col-md-4 col-sm-6 col-xs-12"},a={class:"col-md-4 col-sm-6 col-xs-12"},n={class:"row q-col-gutter-md q-mb-sm"},m={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"col-md-4 col-sm-6 col-xs-12"},u={class:"row q-col-gutter-md q-mb-sm"},r={class:"col-md-8 col-sm-12 col-xs-12"},p={class:"row q-col-gutter-md q-mb-sm"},_={class:"col-md-4 col-sm-6 col-xs-12"},g={class:"col-md-4 col-sm-6 col-xs-12"},w={class:"row q-col-gutter-md q-mb-sm"},h={class:"col-md-4 col-sm-6 col-xs-12"},b={class:"row q-col-gutter-md q-mb-sm"},f=(0,i._)("div",{class:"col-md-4 col-sm-6 col-xs-12"},[(0,i._)("p",null,"Специалисты")],-1),k={class:"col-md-4 col-sm-6 col-xs-12"},y={class:"row q-col-gutter-md q-mb-sm"},v={class:"col-md-4 col-sm-6 col-xs-12"},q={class:"row q-col-gutter-md q-mb-sm"},x={class:"col-md-4 col-sm-6 col-xs-12"},W={class:"row q-col-gutter-md q-mb-sm"},C={class:"col-md-4 col-sm-6 col-xs-12"},Z={class:"col-md-4 col-sm-6 col-xs-12"},Q={class:"row q-col-gutter-md q-mb-sm"},D={class:"col-md-4 col-sm-6 col-xs-12"},U={class:"row q-col-gutter-md q-mb-sm"},I={class:"col-md-4 col-sm-6 col-xs-12"},S={class:"col-md-4 col-sm-6 col-xs-12"},$={class:"row q-col-gutter-md q-mb-sm"},L={class:"col-md-4 col-sm-6 col-xs-12"},P=(0,i._)("div",{class:"row q-col-gutter-md q-mb-sm"}," not found vueFldTemplate for type `` ",-1),j={class:"row q-col-gutter-md q-mb-sm"},M={class:"col-md-8 col-sm-12 col-xs-12"},V=(0,i.Uk)("Сохранить");function z(e,t,l,z,A,B){const R=(0,i.up)("comp-breadcrumb"),T=(0,i.up)("q-input"),O=(0,i.up)("comp-fld-ref-search"),N=(0,i.up)("comp-fld-files"),K=(0,i.up)("comp-fld-img-list"),H=(0,i.up)("comp-executor"),Y=(0,i.up)("task-list-ref-list-widget"),E=(0,i.up)("comp-customer"),F=(0,i.up)("comp-customerAgent"),G=(0,i.up)("customer-task-list-ref-list-widget"),J=(0,i.up)("comp-relation"),X=(0,i.up)("comp-result"),ee=(0,i.up)("comp-item-btn-save"),te=(0,i.up)("q-btn"),le=(0,i.up)("q-tooltip"),ie=(0,i.up)("q-page-sticky"),oe=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(oe,{padding:""},{default:(0,i.w5)((()=>{var z,oe,se,de,ae,ne,me;return[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(R,{key:0,list:[{label:"Баги",to:"/bug",docType:"bug"},{label:A.item?A.item.title?A.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),A.item?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",s,[(0,i._)("div",d,[(0,i.Wm)(T,{outlined:"",type:"text",modelValue:A.item.title,"onUpdate:modelValue":t[0]||(t[0]=e=>A.item.title=e),label:e.$t("bug.title"),autogrow:"",readonly:(null===(z=e.currentUser.role)||void 0===z?void 0:z.includes("customer"))&&1!=A.item.state_id,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label","readonly"])]),(0,i._)("div",a,[(0,i.Wm)(O,{outlined:"",pgMethod:"ctlg_bug_state_list",label:e.$t("bug.state_id"),item:A.item.state_title,itemId:A.item.state_id,ext:{},onUpdate:t[1]||(t[1]=e=>A.item.state_id=e.id),onClear:t[2]||(t[2]=e=>A.item.state_id=null),readonly:null===(oe=e.currentUser.role)||void 0===oe?void 0:oe.includes("customer"),class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","readonly"])])]),(0,i._)("div",n,[(0,i._)("div",m,[(0,i._)("p",null,"Дата и время создания: "+(0,i.zw)(A.item.created_at),1)]),(0,i._)("div",c,[(0,i._)("p",null,"Дата и время изменения: "+(0,i.zw)(A.item.updated_at),1)])]),(0,i._)("div",u,[(0,i._)("div",r,[(0,i.Wm)(T,{outlined:"",type:"text",modelValue:A.item.description,"onUpdate:modelValue":t[3]||(t[3]=e=>A.item.description=e),label:e.$t("bug.description"),autogrow:"",readonly:(null===(se=e.currentUser.role)||void 0===se?void 0:se.includes("customer"))&&1!=A.item.state_id,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label","readonly"])])]),(0,i._)("div",p,[(0,i._)("div",_,["new"!=this.id?((0,i.wg)(),(0,i.j4)(N,{key:0,fldName:"files",label:e.$t("bug.files"),fld:A.item.files,ext:{tableName:"bug",tableId:this.id},onUpdate:t[4]||(t[4]=e=>A.item.files=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,i.kq)("",!0)]),(0,i._)("div",g,["new"!=this.id?((0,i.wg)(),(0,i.j4)(K,{key:0,label:e.$t("bug.images"),fld:A.item.images,ext:{tableName:"bug",tableId:this.id,fldName:"images"},onUpdate:t[5]||(t[5]=e=>A.item.images=e),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,i.kq)("",!0)])]),(0,i._)("div",w,[(0,i._)("div",h,[(0,i.Wm)(H,{item:A.item},null,8,["item"])])]),(0,i._)("div",b,[f,(0,i._)("div",k,[-1!=A.item.id?((0,i.wg)(),(0,i.j4)(Y,{key:0,id:A.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),(0,i._)("div",y,[(0,i._)("div",v,[(0,i.Wm)(E,{item:A.item},null,8,["item"])])]),(0,i._)("div",q,[(0,i._)("div",x,[(0,i.Wm)(O,{outlined:"",pgMethod:"company_list",label:e.$t("bug.customer_id"),item:A.item.customer_title,itemId:A.item.customer_id,ext:{avatar:"image/company.svg",isClearable:"true",pathUrl:"/company"},onUpdate:t[6]||(t[6]=e=>A.item.customer_id=e.id),onClear:t[7]||(t[7]=e=>A.item.customer_id=null),readonly:null===(de=e.currentUser.role)||void 0===de?void 0:de.includes("customer"),class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext","readonly"])])]),(0,i._)("div",W,[(0,i._)("div",C,[(0,i.Wm)(F,{item:A.item,currentUser:e.currentUser},null,8,["item","currentUser"])]),(0,i._)("div",Z,[-1!=A.item.id?((0,i.wg)(),(0,i.j4)(G,{key:0,id:A.item.id,readonly:!1},null,8,["id"])):(0,i.kq)("",!0)])]),(0,i._)("div",Q,[(0,i._)("div",D,[(0,i.Wm)(J,{item:A.item},null,8,["item"])])]),(0,i._)("div",U,[(0,i._)("div",I,[(0,i.Wm)(O,{outlined:"",pgMethod:"system_list",label:e.$t("bug.system_id"),item:A.item.system_title,itemId:A.item.system_id,ext:{avatar:"image/system.svg",isClearable:"true",pathUrl:"/system"},onUpdate:t[8]||(t[8]=e=>A.item.system_id=e.id),onClear:t[9]||(t[9]=e=>A.item.system_id=null),readonly:null===(ae=e.currentUser.role)||void 0===ae?void 0:ae.includes("customer"),class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext","readonly"])]),(0,i._)("div",S,[(0,i.Wm)(O,{outlined:"",pgMethod:"functional_requirement_list",label:e.$t("bug.functional_requirement_id"),item:A.item.functional_requirement_title,itemId:A.item.functional_requirement_id,ext:{avatar:"image/functional_requirement.svg",isClearable:"true",pathUrl:"/functional_requirement"},onUpdate:t[10]||(t[10]=e=>A.item.functional_requirement_id=e.id),onClear:t[11]||(t[11]=e=>A.item.functional_requirement_id=null),readonly:null===(ne=e.currentUser.role)||void 0===ne?void 0:ne.includes("customer"),class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext","readonly"])])]),(0,i._)("div",$,[(0,i._)("div",L,[(0,i.Wm)(X,{item:A.item},null,8,["item"])])]),P,(0,i._)("div",j,[(0,i._)("div",M,[(0,i.Wm)(T,{outlined:"",type:"text",modelValue:A.item.result,"onUpdate:modelValue":t[12]||(t[12]=e=>A.item.result=e),label:e.$t("bug.result"),autogrow:"",readonly:null===(me=e.currentUser.role)||void 0===me?void 0:me.includes("customer"),class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label","readonly"])])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)(te,{key:1,color:"secondary",label:e.$t("message.save"),class:"q-mr-sm",onClick:B.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(ee,{key:0,onSave:B.save,readonly:!1,onCancel:t[13]||(t[13]=t=>e.$router.push(B.docUrl))},null,8,["onSave"])),(0,i.Wm)(ie,{position:"bottom-right",offset:[18,18]},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{size:"sm",fab:"",icon:"save",color:"primary",onClick:B.save},{default:(0,i.w5)((()=>[(0,i.Wm)(le,null,{default:(0,i.w5)((()=>[V])),_:1})])),_:1},8,["onClick"])])),_:1})])):(0,i.kq)("",!0)]})),_:1})}const A={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function B(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",A," Заказчик: ")}l(64434);const R={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}};var T=l(74260);const O=(0,T.Z)(R,[["render",B],["__scopeId","data-v-af03d2a0"]]),N=O,K={key:0},H={key:1},Y=(0,i._)("div",{style:{"text-align":"center"},class:"text-h6"},"Выбор пользователя",-1),E=(0,i._)("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),F=(0,i._)("br",null,null,-1),G={key:0,style:{"margin-left":"40px","border-bottom":"1px solid #4f6ccd","margin-right":"40px"}};function J(e,t,l,o,s,d){const a=(0,i.up)("q-icon"),n=(0,i.up)("q-space"),m=(0,i.up)("q-btn"),c=(0,i.up)("q-bar"),u=(0,i.up)("q-item-label"),r=(0,i.up)("q-item-section"),p=(0,i.up)("q-item"),_=(0,i.up)("q-list"),g=(0,i.up)("q-card-section"),w=(0,i.up)("q-avatar"),h=(0,i.up)("q-btn-dropdown"),b=(0,i.up)("q-input"),f=(0,i.up)("q-card-actions"),k=(0,i.up)("q-card"),y=(0,i.up)("q-dialog"),v=(0,i.Q2)("ripple"),q=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c,{class:"bg-secondary text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{name:"fas fa-user-astronaut"}),s.isShowDeleted?((0,i.wg)(),(0,i.iD)("div",H,"Удалённые")):((0,i.wg)(),(0,i.iD)("div",K,"Представители заказчика")),(0,i.Wm)(n),(0,i.Wm)(m,{flat:"",round:"",icon:"add",onClick:d.showAddDialog},null,8,["onClick"]),(0,i.Wm)(m,{flat:"",round:"",icon:"delete_outline",onClick:t[0]||(t[0]=e=>s.isShowDeleted=!s.isShowDeleted)})])),_:1}),!s.isShowDeleted&&s.taskSpecList.length>0?((0,i.wg)(),(0,i.j4)(_,{key:0,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.taskSpecList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:t=>d.editPosition(e.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.customer_agent_title),1)])),_:2},1024),(0,i.Wm)(u,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(r,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"delete",onClick:t=>d.deletePosition(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[v]]))),128))])),_:1})):(0,i.kq)("",!0),s.isShowDeleted&&s.deletedtaskSpecList.length>0?((0,i.wg)(),(0,i.j4)(_,{key:1,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.deletedtaskSpecList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:t=>d.editPosition(e.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.customer_agent_title),1)])),_:2},1024),(0,i.Wm)(u,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(r,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"replay",onClick:t=>d.recoverPosition(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[v]]))),128))])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(y,{modelValue:s.isShowDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowDialog=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{style:{"min-width":"250px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[Y])),_:1}),(0,i.Wm)(h,{split:"",color:"primary",push:"",glossy:"","no-caps":"",icon:"face",label:"Пользователь",onClick:e.onMainClick,style:{"margin-left":"40px","margin-bottom":"10px","margin-top":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.specList,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",onClick:t=>d.onSpecClick(e),key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{size:"40px"},{default:(0,i.w5)((()=>[E])),_:1})])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(u,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.position),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[q]]))),128))])),_:1})])),_:1},8,["onClick"]),F,s.spec?((0,i.wg)(),(0,i.iD)("div",G,(0,i.zw)(s.spec),1)):(0,i.kq)("",!0),(0,i.Wm)(b,{modelValue:s.roleDesc,"onUpdate:modelValue":t[1]||(t[1]=e=>s.roleDesc=e),placeholder:"Описание роли",filled:"",autogrow:"",style:{"margin-top":"40px","margin-left":"40px","margin-right":"40px","margin-bottom":"20px"}},null,8,["modelValue"]),(0,i.Wm)(f,{align:"center",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(m,{flat:"",label:"Отмена"},null,512),[[q]]),s.editMode?(0,i.wy)(((0,i.wg)(),(0,i.j4)(m,{key:0,flat:"",label:"Сохранить",onClick:t[2]||(t[2]=e=>d.savePosition(s.activetaskSpecId))},null,512)),[[q]]):(0,i.wy)(((0,i.wg)(),(0,i.j4)(m,{key:1,flat:"",label:"Добавить",onClick:d.addPosition},null,8,["onClick"])),[[q]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const X={props:["fld","item","currentUser"],data(){return{isShowDeleted:!1,isShowDialog:!1,editMode:!1,positionTemplate:null,positionList:[],taskSpecList:[],deletedtaskSpecList:[],position:{id:null,name:null,cost_without_vat:null,cost_without_vat_all:null,quantity:null,vat_rate:null,vat:null,cost_with_vat:null,deleted:!1},spec:"",specId:null,roleDesc:"",specList:[],roleList:[],activetaskSpecId:null}},methods:{showAddDialog(){this.position=Object.assign({},this.positionTemplate),this.editMode=!1,this.isShowDialog=!0,this.spec="",this.roleDesc="",this.roleId=null},findId(e){let t=0;return e.forEach((function(e){e.id>t&&(t=e.id)})),t+1},addPosition(){this.$utils.postCallPgMethod({method:"bug_customer_agent_link_update",params:{id:-1,customer_agent_id:this.specId,description:this.roleDesc,bug_id:this.item.id,author_id:this.currentUser.id}}).subscribe((e=>{e.ok&&this.reloadList()}))},onSpecClick(e){this.spec=e.title,this.specId=e.id},onRoleClick(e){this.role=e.title,this.roleId=e.id},editPosition(e){},savePosition(e){this.$utils.postCallPgMethod({method:"bug_customer_agent_link_update",params:{id:e,specialist_id:this.specId,description:this.roleDesc}}).subscribe((e=>{e.ok&&this.reloadList()})),this.editMode=!1,this.isShowDialog=!1},deletePosition(e){let t=this.taskSpecList.findIndex((t=>t.id===e));this.taskSpecList[t].deleted=!0,this.$utils.postCallPgMethod({method:"bug_customer_agent_link_update",params:{id:e,deleted:!0}}).subscribe((e=>{e.ok&&this.reloadList()}))},recoverPosition(e){this.$utils.postCallPgMethod({method:"bug_customer_agent_link_update",params:{id:e,deleted:!1}}).subscribe((e=>{e.ok&&this.reloadList()}))},reloadList(){this.$utils.postCallPgMethod({method:"bug_customer_agent_link_list",params:{bug_id:this.item.id}}).subscribe((e=>{e.ok&&(this.taskSpecList=e.result)})),this.$utils.postCallPgMethod({method:"bug_customer_agent_link_list",params:{bug_id:this.item.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.deletedtaskSpecList=e.result)}))}},mounted(){this.positionTemplate=Object.assign({},this.position),this.reloadList(),this.$utils.postCallPgMethod({method:"man_list",params:{}}).subscribe((e=>{e.ok&&(this.specList=e.result)})),this.$utils.postCallPgMethod({method:"task_get_specialist_role",params:{}}).subscribe((e=>{e.ok&&(this.roleList=e.result)}))},computed:{},watch:{}};var ee=l(10846),te=l(24554),le=l(62025),ie=l(2165),oe=l(27011),se=l(83414),de=l(52035),ae=l(2350),ne=l(46778),me=l(10151),ce=l(25589),ue=l(42670),re=l(75096),pe=l(34842),_e=l(99367),ge=l(46489),we=l(60677),he=l(7518),be=l.n(he);const fe=(0,T.Z)(X,[["render",J]]),ke=fe;be()(X,"components",{QBar:ee.Z,QIcon:te.Z,QSpace:le.Z,QBtn:ie.Z,QList:oe.Z,QItem:se.Z,QItemSection:de.Z,QItemLabel:ae.Z,QDialog:ne.Z,QCard:me.Z,QCardSection:ce.Z,QBtnDropdown:ue.Z,QAvatar:re.Z,QInput:pe.Z,QCardActions:_e.Z}),be()(X,"directives",{Ripple:ge.Z,ClosePopup:we.Z});const ye={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function ve(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",ye," Связи: ")}const qe={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}},xe=(0,T.Z)(qe,[["render",ve],["__scopeId","data-v-6eb6e3c0"]]),We=xe,Ce={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function Ze(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",Ce," Итоги: ")}const Qe={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}},De=(0,T.Z)(Qe,[["render",Ze],["__scopeId","data-v-79011225"]]),Ue=De,Ie=(0,i.Uk)("задачи "),Se={key:0},$e=(0,i.Uk)("Добавить"),Le=(0,i.Uk)("активные задачи"),Pe=(0,i.Uk)("удаленные задачи"),je=(0,i._)("img",{src:"image/task.svg",alt:""},null,-1),Me=(0,i._)("div",null,"Создать новую запись",-1);function Ve(e,t,l,o,s,d){const a=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),m=(0,i.up)("q-btn"),c=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),g=(0,i.up)("q-badge"),w=(0,i.up)("q-icon"),h=(0,i.up)("q-item"),b=(0,i.up)("q-list"),f=(0,i.up)("q-input"),k=(0,i.up)("comp-fld-ref-search"),y=(0,i.up)("q-card-section"),v=(0,i.up)("q-card-actions"),q=(0,i.up)("q-card"),x=(0,i.up)("q-dialog"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[Ie,s.deleted?((0,i.wg)(),(0,i.iD)("span",Se,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(a),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:0,icon:"add",round:"",flat:"",onClick:d.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[$e])),_:1})])),_:1},8,["onClick"])),s.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(m,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>d.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Le])),_:1})])),_:1})):(0,i.kq)("",!0),s.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>d.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Pe])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(b,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.list,(e=>((0,i.wg)(),(0,i.j4)(h,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/task/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[je])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{name:s.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>d.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(x,{modelValue:s.isShowAddDialog,"onUpdate:modelValue":t[5]||(t[5]=e=>s.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[Me,(0,i.Wm)(a),(0,i.wy)((0,i.Wm)(m,{dense:"",flat:"",icon:"close"},null,512),[[W]])])),_:1}),(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:s.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>s.item.title=e),label:e.$t("task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"]),(0,i.Wm)(k,{outlined:"",pgMethod:"ctlg_task_type_list",label:e.$t("task.type_id"),item:s.item.type_title,itemId:s.item.type_id,ext:{},onUpdate:t[3]||(t[3]=e=>s.item.type_id=e.id),onClear:t[4]||(t[4]=e=>s.item.type_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])),_:1}),(0,i.Wm)(v,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",label:"OK",onClick:d.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const ze={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null,type_id:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("task_list",{bug_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});if(!this.item.type_id)return void this.$q.notify({type:"negative",message:'не заполнено поле: "тип задачи"'});let e=Object.assign({id:-1,bug_id:this.id},this.item);this.$utils.callPgMethod("task_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.item.type_id=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("task_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}};var Ae=l(5363),Be=l(69721);const Re=(0,T.Z)(ze,[["render",Ve]]),Te=Re;be()(ze,"components",{QBar:ee.Z,QSpace:le.Z,QBtn:ie.Z,QTooltip:Ae.Z,QList:oe.Z,QItem:se.Z,QItemSection:de.Z,QAvatar:re.Z,QItemLabel:ae.Z,QBadge:Be.Z,QIcon:te.Z,QDialog:ne.Z,QCard:me.Z,QCardSection:ce.Z,QInput:pe.Z,QCardActions:_e.Z}),be()(ze,"directives",{ClosePopup:we.Z});const Oe=(0,i.Uk)("задачи заказчика "),Ne={key:0},Ke=(0,i.Uk)("Добавить"),He=(0,i.Uk)("активные задачи заказчика"),Ye=(0,i.Uk)("удаленные задачи заказчика"),Ee=(0,i._)("img",{src:"image/customer_task.png",alt:""},null,-1),Fe=(0,i._)("div",null,"Создать новую запись",-1);function Ge(e,t,l,o,s,d){const a=(0,i.up)("q-space"),n=(0,i.up)("q-tooltip"),m=(0,i.up)("q-btn"),c=(0,i.up)("q-bar"),u=(0,i.up)("q-avatar"),r=(0,i.up)("q-item-section"),p=(0,i.up)("router-link"),_=(0,i.up)("q-item-label"),g=(0,i.up)("q-badge"),w=(0,i.up)("q-icon"),h=(0,i.up)("q-item"),b=(0,i.up)("q-list"),f=(0,i.up)("q-input"),k=(0,i.up)("q-card-section"),y=(0,i.up)("q-card-actions"),v=(0,i.up)("q-card"),q=(0,i.up)("q-dialog"),x=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c,{class:"bg-secondary text-white shadow-2"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[Oe,s.deleted?((0,i.wg)(),(0,i.iD)("span",Ne,"удаленные")):(0,i.kq)("",!0)]),(0,i.Wm)(a),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:0,icon:"add",round:"",flat:"",onClick:d.add},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Ke])),_:1})])),_:1},8,["onClick"])),s.deleted&&!l.readonly?((0,i.wg)(),(0,i.j4)(m,{key:1,icon:"delete",round:"",flat:"",onClick:t[0]||(t[0]=e=>d.reload(!1))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[He])),_:1})])),_:1})):(0,i.kq)("",!0),s.deleted||l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:2,icon:"delete_outline",round:"",flat:"",onClick:t[1]||(t[1]=e=>d.reload(!0))},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[Ye])),_:1})])),_:1}))])),_:1}),(0,i.Wm)(b,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.list,(e=>((0,i.wg)(),(0,i.j4)(h,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{to:"/customer_task/"+e.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{rounded:""},{default:(0,i.w5)((()=>[Ee])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(_,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e.options.title.state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l.readonly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{name:s.deleted?"done":"delete",size:"xs",class:"cursor-pointer",color:"grey",onClick:t=>d.removeRecover(e)},null,8,["name","onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:1}),(0,i.Wm)(q,{modelValue:s.isShowAddDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>s.isShowAddDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{style:{width:"500px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[Fe,(0,i.Wm)(a),(0,i.wy)((0,i.Wm)(m,{dense:"",flat:"",icon:"close"},null,512),[[x]])])),_:1}),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{outlined:"",type:"text",modelValue:s.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>s.item.title=e),label:e.$t("customer_task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])])),_:1}),(0,i.Wm)(y,{align:"right",class:"bg-white text-teal"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",label:"OK",onClick:d.saveNew},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const Je={props:["id","readonly"],mixins:[],data(){return{list:[],isShowAddDialog:!1,deleted:!1,item:{title:null}}},methods:{add(){this.isShowAddDialog=!0},reload(e){this.deleted=!!e,this.$utils.callPgMethod("customer_task_list",{bug_id:this.id,deleted:this.deleted,order_by:"created_at desc"},(e=>this.list=e))},saveNew(){if(!this.item.title)return void this.$q.notify({type:"negative",message:'не заполнено поле: "название"'});let e=Object.assign({id:-1,bug_id:this.id},this.item);this.$utils.callPgMethod("customer_task_update",e,(()=>{this.isShowAddDialog=!1,this.item.title=null,this.reload()}))},removeRecover({id:e}){this.$utils.callPgMethod("customer_task_update",{id:e,deleted:!this.deleted},(()=>this.reload(this.deleted)))}},mounted(){this.reload()}},Xe=(0,T.Z)(Je,[["render",Ge]]),et=Xe;be()(Je,"components",{QBar:ee.Z,QSpace:le.Z,QBtn:ie.Z,QTooltip:Ae.Z,QList:oe.Z,QItem:se.Z,QItemSection:de.Z,QAvatar:re.Z,QItemLabel:ae.Z,QBadge:Be.Z,QIcon:te.Z,QDialog:ne.Z,QCard:me.Z,QCardSection:ce.Z,QInput:pe.Z,QCardActions:_e.Z}),be()(Je,"directives",{ClosePopup:we.Z});const tt={class:"inline-wr",style:{padding:"5px","font-size":"16px","padding-bottom":"3px","margin-top":"10px","border-bottom":"1px solid #4f6ccd",width:"203%",color:"#4f6ccd","font-weight":"600"}};function lt(e,t,l,o,s,d){return(0,i.wg)(),(0,i.iD)("div",tt," Исполнитель: ")}const it={props:["fld","item"],name:"webClient_comp_title",data(){return{loading:!1}}},ot=(0,T.Z)(it,[["render",lt],["__scopeId","data-v-ee845fd4"]]),st=ot;var dt=l(43015);const at={props:["id","isOpenInDialog"],components:{compCustomer:N,compCustomerAgent:ke,compRelation:We,compResult:Ue,taskListRefListWidget:Te,customerTaskListRefListWidget:et,compExecutor:st},mixins:[dt.Z],computed:{docUrl:function(){return"/bug"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"state_id",label:"статус"},{name:"description",label:"описание"},{name:"files",label:"файлы"},{name:"images",label:"изображения"},{name:"customer_id",label:"заказчик"},{name:"system_id",label:"система"},{name:"functional_requirement_id",label:"функциональное требование"},{name:"result",label:"результат"}],optionsFlds:[]}},watch:{},methods:{resultModify(e){return e},save(){this.$utils.saveItem.call(this,{method:"bug_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let e=e=>{this.item=this.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"bug_get_by_id",cb:e})}},mounted(){this.reload()}};var nt=l(24379),mt=l(21007);const ct=(0,T.Z)(at,[["render",z]]),ut=ct;be()(at,"components",{QPage:nt.Z,QInput:pe.Z,QBtn:ie.Z,QPageSticky:mt.Z,QTooltip:Ae.Z})}}]);