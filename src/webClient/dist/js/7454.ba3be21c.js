(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[7454],{17454:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>_t});l(90246);var i=l(34182);const s={key:1,class:"q-mt-sm"},o={class:"row q-col-gutter-md q-mb-sm"},a={class:"col-md-4 col-sm-6 col-xs-12"},d={class:"col-md-4 col-sm-6 col-xs-12"},n={class:"row q-col-gutter-md q-mb-sm"},m={class:"col-md-4 col-sm-6 col-xs-12"},c={class:"col-md-4 col-sm-6 col-xs-12"},r={class:"row q-col-gutter-md q-mb-sm"},u={class:"col-md-8 col-sm-12 col-xs-12"},p={class:"row q-col-gutter-md q-mb-sm"},k={class:"col-md-4 col-sm-6 col-xs-12"},h={class:"col-md-4 col-sm-6 col-xs-12"},_={class:"row q-col-gutter-md q-mb-sm"},w={class:"col-md-4 col-sm-6 col-xs-12"},g={class:"row q-col-gutter-md q-mb-sm"},b={class:"col-md-4 col-sm-6 col-xs-12"},f={class:"col-md-4 col-sm-6 col-xs-12"},W={class:"row q-col-gutter-md q-mb-sm"},y={class:"col-md-4 col-sm-6 col-xs-12"},v={class:"col-md-4 col-sm-6 col-xs-12"},q={class:"row q-col-gutter-md q-mb-sm"},x={class:"col-md-8 col-sm-12 col-xs-12"},C={class:"row q-col-gutter-md q-mb-sm"},D={class:"col-md-4 col-sm-6 col-xs-12"},S=(0,i.Uk)("Сохранить");function L(t,e,l,L,I,P){const U=(0,i.up)("comp-breadcrumb"),j=(0,i.up)("q-input"),$=(0,i.up)("comp-fld-ref-search"),Z=(0,i.up)("comp-fld-files"),Q=(0,i.up)("comp-fld-img-list"),M=(0,i.up)("comp-specialist"),V=(0,i.up)("comp-fld-date"),T=(0,i.up)("comp-work"),z=(0,i.up)("comp-item-btn-save"),A=(0,i.up)("q-btn"),B=(0,i.up)("q-tooltip"),O=(0,i.up)("q-page-sticky"),H=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(H,{padding:""},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(U,{key:0,list:[{label:"Задачи",to:"/task",docType:"task"},{label:I.item?I.item.title?I.item.title:"Редактирование":"",docType:"edit"}]},null,8,["list"])),I.item?((0,i.wg)(),(0,i.j4)("div",s,[(0,i.Wm)("div",o,[(0,i.Wm)("div",a,[(0,i.Wm)(j,{outlined:"",type:"text",modelValue:I.item.title,"onUpdate:modelValue":e[1]||(e[1]=t=>I.item.title=t),label:t.$t("task.title"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["modelValue","label"])]),(0,i.Wm)("div",d,[(0,i.Wm)($,{outlined:"",pgMethod:"ctlg_task_state_list",label:t.$t("task.state"),item:I.item.state_title,itemId:I.item.state,ext:{},onUpdate:e[2]||(e[2]=t=>I.item.state=t.id),onClear:e[3]||(e[3]=t=>I.item.state=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,i.Wm)("div",n,[(0,i.Wm)("div",m,[(0,i.Wm)($,{outlined:"",pgMethod:"digital_solution_list",label:t.$t("task.digital_solution_id"),item:I.item.digital_solution_title,itemId:I.item.digital_solution_id,ext:{avatar:"image/digital_solution.svg",pathUrl:"/digital_solution"},onUpdate:e[4]||(e[4]=t=>I.item.digital_solution_id=t.id),onClear:e[5]||(e[5]=t=>I.item.digital_solution_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId","ext"])]),(0,i.Wm)("div",c,[(0,i.Wm)($,{outlined:"",pgMethod:"ctlg_task_type_list",label:t.$t("task.type_id"),item:I.item.type_title,itemId:I.item.type_id,ext:{},onUpdate:e[6]||(e[6]=t=>I.item.type_id=t.id),onClear:e[7]||(e[7]=t=>I.item.type_id=null),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","item","itemId"])])]),(0,i.Wm)("div",r,[(0,i.Wm)("div",u,[(0,i.Wm)(j,{outlined:"",type:"text",modelValue:I.item.description,"onUpdate:modelValue":e[8]||(e[8]=t=>I.item.description=t),label:t.$t("task.description"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i.Wm)("div",p,[(0,i.Wm)("div",k,["new"!=this.id?((0,i.wg)(),(0,i.j4)(Z,{key:0,fldName:"files",label:t.$t("task.files"),fld:I.item.files,ext:{tableName:"task",tableId:this.id},onUpdate:e[9]||(e[9]=t=>I.item.files=t),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,i.kq)("",!0)]),(0,i.Wm)("div",h,["new"!=this.id?((0,i.wg)(),(0,i.j4)(Q,{key:0,label:t.$t("task.images"),fld:I.item.images,ext:{tableName:"task",tableId:this.id,fldName:"images"},onUpdate:e[10]||(e[10]=t=>I.item.images=t),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","fld","ext"])):(0,i.kq)("",!0)])]),(0,i.Wm)("div",_,[(0,i.Wm)("div",w,[(0,i.Wm)(M,{item:I.item,currentUser:t.currentUser},null,8,["item","currentUser"])])]),(0,i.Wm)("div",g,[(0,i.Wm)("div",b,[(0,i.Wm)(V,{outlined:"",label:t.$t("task.plan_start_date"),"date-string":t.$utils.formatPgDate(I.item.plan_start_date),onUpdate:e[11]||(e[11]=t=>I.item.plan_start_date=t),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","date-string"])]),(0,i.Wm)("div",f,[(0,i.Wm)(V,{outlined:"",label:t.$t("task.fact_start_date"),"date-string":t.$utils.formatPgDate(I.item.fact_start_date),onUpdate:e[12]||(e[12]=t=>I.item.fact_start_date=t),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","date-string"])])]),(0,i.Wm)("div",W,[(0,i.Wm)("div",y,[(0,i.Wm)(V,{outlined:"",label:t.$t("task.plan_end_date"),"date-string":t.$utils.formatPgDate(I.item.plan_end_date),onUpdate:e[13]||(e[13]=t=>I.item.plan_end_date=t),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","date-string"])]),(0,i.Wm)("div",v,[(0,i.Wm)(V,{outlined:"",label:t.$t("task.fact_end_date"),"date-string":t.$utils.formatPgDate(I.item.fact_end_date),onUpdate:e[14]||(e[14]=t=>I.item.fact_end_date=t),readonly:!1,class:"q-mb-sm col-md-4 col-sm-6 col-xs-12"},null,8,["label","date-string"])])]),(0,i.Wm)("div",q,[(0,i.Wm)("div",x,[(0,i.Wm)(j,{outlined:"",type:"text",modelValue:I.item.result,"onUpdate:modelValue":e[15]||(e[15]=t=>I.item.result=t),label:t.$t("task.result"),autogrow:"",readonly:!1,class:"q-mb-sm col-md-8 col-sm-12 col-xs-12"},null,8,["modelValue","label"])])]),(0,i.Wm)("div",C,[(0,i.Wm)("div",D,[(0,i.Wm)(T,{item:I.item,currentUser:t.currentUser},null,8,["item","currentUser"])])]),l.isOpenInDialog?((0,i.wg)(),(0,i.j4)(A,{key:1,color:"secondary",label:t.$t("message.save"),class:"q-mr-sm",onClick:P.save},null,8,["label","onClick"])):((0,i.wg)(),(0,i.j4)(z,{key:0,onSave:P.save,readonly:!1,onCancel:e[16]||(e[16]=e=>t.$router.push(P.docUrl))},null,8,["onSave"])),(0,i.Wm)(O,{position:"bottom-right",offset:[18,18]},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{size:"sm",fab:"",icon:"save",color:"primary",onClick:P.save},{default:(0,i.w5)((()=>[(0,i.Wm)(B,null,{default:(0,i.w5)((()=>[S])),_:1})])),_:1},8,["onClick"])])),_:1})])):(0,i.kq)("",!0)])),_:1})}const I={key:0},P={key:1},U=(0,i.Wm)("div",{style:{"text-align":"center"},class:"text-h6"},"Данные по специалисту",-1),j=(0,i.Wm)("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),$=(0,i.Wm)("br",null,null,-1),Z={key:0,style:{"margin-left":"40px","border-bottom":"1px solid #4f6ccd","margin-right":"40px"}},Q={key:1,style:{"margin-left":"40px","border-bottom":"1px solid #4f6ccd","margin-right":"40px"}};function M(t,e,l,s,o,a){const d=(0,i.up)("q-icon"),n=(0,i.up)("q-space"),m=(0,i.up)("q-btn"),c=(0,i.up)("q-bar"),r=(0,i.up)("q-item-label"),u=(0,i.up)("q-item-section"),p=(0,i.up)("q-item"),k=(0,i.up)("q-list"),h=(0,i.up)("q-card-section"),_=(0,i.up)("q-avatar"),w=(0,i.up)("q-btn-dropdown"),g=(0,i.up)("q-input"),b=(0,i.up)("q-card-actions"),f=(0,i.up)("q-card"),W=(0,i.up)("q-dialog"),y=(0,i.Q2)("ripple"),v=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)("div",null,[(0,i.Wm)(c,{class:"bg-blue-6 text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{name:"fas fa-user-astronaut"}),o.isShowDeleted?((0,i.wg)(),(0,i.j4)("div",P,"Удалённые")):((0,i.wg)(),(0,i.j4)("div",I,"Специалисты")),(0,i.Wm)(n),(0,i.Wm)(m,{flat:"",round:"",icon:"add",onClick:a.showAddDialog},null,8,["onClick"]),(0,i.Wm)(m,{flat:"",round:"",icon:"delete_outline",onClick:e[1]||(e[1]=t=>o.isShowDeleted=!o.isShowDeleted)})])),_:1}),!o.isShowDeleted&&o.taskSpecList.length>0?((0,i.wg)(),(0,i.j4)(k,{key:0,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.taskSpecList,(t=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:t.id},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{onClick:e=>a.editPosition(t.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.options.title.specialist_title),1)])),_:2},1024),(0,i.Wm)(r,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.options.title.role_title),1)])),_:2},1024),(0,i.Wm)(r,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(u,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"delete",onClick:e=>a.deletePosition(t.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[y]]))),128))])),_:1})):(0,i.kq)("",!0),o.isShowDeleted&&o.deletedtaskSpecList.length>0?((0,i.wg)(),(0,i.j4)(k,{key:1,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.deletedtaskSpecList,(t=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:t.id},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{onClick:e=>a.editPosition(t.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.options.title.specialist_title),1)])),_:2},1024),(0,i.Wm)(r,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.options.title.role_title),1)])),_:2},1024),(0,i.Wm)(r,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(u,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"replay",onClick:e=>a.recoverPosition(t.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[y]]))),128))])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(W,{modelValue:o.isShowDialog,"onUpdate:modelValue":e[4]||(e[4]=t=>o.isShowDialog=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{style:{"min-width":"250px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[U])),_:1}),(0,i.Wm)(w,{split:"",color:"primary",push:"",glossy:"","no-caps":"",icon:"face",label:"Специалист",onClick:t.onMainClick,style:{"margin-left":"40px","margin-bottom":"10px","margin-top":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.specList,(t=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",onClick:e=>a.onSpecClick(t),key:t.id},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{size:"40px"},{default:(0,i.w5)((()=>[j])),_:1})])),_:1}),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.title),1)])),_:2},1024),(0,i.Wm)(r,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.position),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[v]]))),128))])),_:1})])),_:1},8,["onClick"]),$,o.spec?((0,i.wg)(),(0,i.j4)("div",Z,(0,i.zw)(o.spec),1)):(0,i.kq)("",!0),(0,i.Wm)(w,{color:"primary",label:"Роль",style:{"margin-left":"40px","margin-bottom":"10px","margin-top":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.roleList,(t=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",onClick:e=>a.onRoleClick(t),key:t.title},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[v]]))),128))])),_:1})])),_:1}),o.role?((0,i.wg)(),(0,i.j4)("div",Q,(0,i.zw)(o.role),1)):(0,i.kq)("",!0),(0,i.Wm)(g,{modelValue:o.roleDesc,"onUpdate:modelValue":e[2]||(e[2]=t=>o.roleDesc=t),placeholder:"Описание роли",filled:"",autogrow:"",style:{"margin-top":"40px","margin-left":"40px","margin-right":"40px","margin-bottom":"20px"}},null,8,["modelValue"]),(0,i.Wm)(b,{align:"center",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(m,{flat:"",label:"Отмена"},null,512),[[v]]),o.editMode?(0,i.wy)(((0,i.wg)(),(0,i.j4)(m,{key:0,flat:"",label:"Сохранить",onClick:e[3]||(e[3]=t=>a.savePosition(o.activetaskSpecId))},null,512)),[[v]]):(0,i.wy)(((0,i.wg)(),(0,i.j4)(m,{key:1,flat:"",label:"Добавить",onClick:a.addPosition},null,8,["onClick"])),[[v]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const V={props:["fld","item","currentUser"],data(){return{isShowDeleted:!1,isShowDialog:!1,editMode:!1,positionTemplate:null,positionList:[],taskSpecList:[],deletedtaskSpecList:[],position:{id:null,name:null,cost_without_vat:null,cost_without_vat_all:null,quantity:null,vat_rate:null,vat:null,cost_with_vat:null,deleted:!1},spec:"",specId:null,role:"",roleId:null,roleDesc:"",specList:[],roleList:[],activetaskSpecId:null}},methods:{showAddDialog(){this.position=Object.assign({},this.positionTemplate),this.editMode=!1,this.isShowDialog=!0,this.spec="",this.role="",this.specId=null,this.roleDesc="",this.roleId=null},findId(t){let e=0;return t.forEach((function(t){t.id>e&&(e=t.id)})),e+1},addPosition(){this.$utils.postCallPgMethod({method:"task_specialist_link_update",params:{id:-1,specialist_id:this.specId,role_id:this.roleId,description:this.roleDesc,task_id:this.item.id,author_id:this.currentUser.id}}).subscribe((t=>{t.ok&&this.reloadList()}))},onSpecClick(t){this.spec=t.title,this.specId=t.id},onRoleClick(t){this.role=t.title,this.roleId=t.id},editPosition(t){let e=this.taskSpecList.find((e=>e.id===t));this.specId=e.specialist_id,this.roleId=e.role_id,this.spec=e.options.title.specialist_title,this.role=e.options.title.role_title,this.roleDesc=e.description,this.activetaskSpecId=t,this.editMode=!0,this.isShowDialog=!0},savePosition(t){this.$utils.postCallPgMethod({method:"task_specialist_link_update",params:{id:t,specialist_id:this.specId,role_id:this.roleId,description:this.roleDesc}}).subscribe((t=>{t.ok&&this.reloadList()})),this.editMode=!1,this.isShowDialog=!1},deletePosition(t){let e=this.taskSpecList.findIndex((e=>e.id===t));this.taskSpecList[e].deleted=!0,this.$utils.postCallPgMethod({method:"task_specialist_link_update",params:{id:t,deleted:!0}}).subscribe((t=>{t.ok&&this.reloadList()}))},recoverPosition(t){this.$utils.postCallPgMethod({method:"task_specialist_link_update",params:{id:t,deleted:!1}}).subscribe((t=>{t.ok&&this.reloadList()}))},reloadList(){this.$utils.postCallPgMethod({method:"task_specialist_link_list",params:{task_id:this.item.id}}).subscribe((t=>{t.ok&&(this.taskSpecList=t.result)})),this.$utils.postCallPgMethod({method:"task_specialist_link_list",params:{task_id:this.item.id,deleted:!0}}).subscribe((t=>{t.ok&&(this.deletedtaskSpecList=t.result)}))}},mounted(){this.positionTemplate=Object.assign({},this.position),this.reloadList(),this.$utils.postCallPgMethod({method:"task_get_specialist",params:{}}).subscribe((t=>{t.ok&&(this.specList=t.result)})),this.$utils.postCallPgMethod({method:"task_get_specialist_role",params:{}}).subscribe((t=>{t.ok&&(this.roleList=t.result)}))},computed:{},watch:{}};var T=l(10846),z=l(24554),A=l(62025),B=l(2165),O=l(27011),H=l(83414),K=l(52035),Y=l(2350),E=l(46778),N=l(10151),R=l(25589),F=l(42670),G=l(75096),J=l(34842),X=l(99367),tt=l(46489),et=l(60677),lt=l(7518),it=l.n(lt);V.render=M;const st=V;it()(V,"components",{QBar:T.Z,QIcon:z.Z,QSpace:A.Z,QBtn:B.Z,QList:O.Z,QItem:H.Z,QItemSection:K.Z,QItemLabel:Y.Z,QDialog:E.Z,QCard:N.Z,QCardSection:R.Z,QBtnDropdown:F.Z,QAvatar:G.Z,QInput:J.Z,QCardActions:X.Z}),it()(V,"directives",{Ripple:tt.Z,ClosePopup:et.Z});const ot={key:0},at={key:1},dt=(0,i.Wm)("div",{style:{"text-align":"center"},class:"text-h6"},"Данные по Делу",-1);function nt(t,e,l,s,o,a){const d=(0,i.up)("q-icon"),n=(0,i.up)("q-space"),m=(0,i.up)("q-btn"),c=(0,i.up)("q-bar"),r=(0,i.up)("q-item-label"),u=(0,i.up)("q-item-section"),p=(0,i.up)("q-item"),k=(0,i.up)("q-list"),h=(0,i.up)("q-card-section"),_=(0,i.up)("q-input"),w=(0,i.up)("q-card-actions"),g=(0,i.up)("q-card"),b=(0,i.up)("q-dialog"),f=(0,i.Q2)("ripple"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)("div",null,[(0,i.Wm)(c,{class:"bg-orange-6 text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{name:"fas fa-user-astronaut"}),o.isShowDeleted?((0,i.wg)(),(0,i.j4)("div",at,"Удалённые")):((0,i.wg)(),(0,i.j4)("div",ot,"Дела")),(0,i.Wm)(n),(0,i.Wm)(m,{flat:"",round:"",icon:"add",onClick:a.showAddDialog},null,8,["onClick"]),(0,i.Wm)(m,{flat:"",round:"",icon:"delete_outline",onClick:e[1]||(e[1]=t=>o.isShowDeleted=!o.isShowDeleted)})])),_:1}),!o.isShowDeleted&&o.taskWorkList.length>0?((0,i.wg)(),(0,i.j4)(k,{key:0,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.taskWorkList,(t=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:t.id},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{onClick:e=>a.routeWork(t.work_id)},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.options.title.work_title),1)])),_:2},1024),(0,i.Wm)(r,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.options.title.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(u,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"delete",onClick:e=>a.deletePosition(t.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[f]]))),128))])),_:1})):(0,i.kq)("",!0),o.isShowDeleted&&o.deletedTaskWorkList.length>0?((0,i.wg)(),(0,i.j4)(k,{key:1,bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.deletedTaskWorkList,(t=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(p,{clickable:"",key:t.id},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{onClick:e=>a.routeWork(t.work_id)},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.options.title.work_title),1)])),_:2},1024),(0,i.Wm)(r,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(t.options.title.description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(u,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"replay",onClick:e=>a.recoverPosition(t.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1536)),[[f]]))),128))])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(b,{modelValue:o.isShowDialog,"onUpdate:modelValue":e[5]||(e[5]=t=>o.isShowDialog=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{style:{"min-width":"250px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[dt])),_:1}),(0,i.Wm)(_,{modelValue:o.workTitle,"onUpdate:modelValue":e[2]||(e[2]=t=>o.workTitle=t),placeholder:"Название дела",filled:"",autogrow:"",style:{"margin-top":"40px","margin-left":"40px","margin-right":"40px","margin-bottom":"20px"}},null,8,["modelValue"]),(0,i.Wm)(_,{modelValue:o.workDesc,"onUpdate:modelValue":e[3]||(e[3]=t=>o.workDesc=t),placeholder:"Описание дела",filled:"",autogrow:"",style:{"margin-top":"40px","margin-left":"40px","margin-right":"40px","margin-bottom":"20px"}},null,8,["modelValue"]),(0,i.Wm)(w,{align:"center",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(m,{flat:"",label:"Отмена"},null,512),[[W]]),o.editMode?(0,i.wy)(((0,i.wg)(),(0,i.j4)(m,{key:0,flat:"",label:"Сохранить",onClick:e[4]||(e[4]=t=>a.savePosition(o.activeWorkTaskId))},null,512)),[[W]]):(0,i.wy)(((0,i.wg)(),(0,i.j4)(m,{key:1,flat:"",label:"Добавить",onClick:a.addPosition},null,8,["onClick"])),[[W]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const mt={props:["fld","item","currentUser"],data(){return{isShowDeleted:!1,isShowDialog:!1,editMode:!1,positionTemplate:null,positionList:[],taskWorkList:[],deletedTaskWorkList:[],position:{id:null,name:null,cost_without_vat:null,cost_without_vat_all:null,quantity:null,vat_rate:null,vat:null,cost_with_vat:null,deleted:!1},workTitle:"",workDesc:"",activeWorkTaskId:null}},methods:{showAddDialog(){this.position=Object.assign({},this.positionTemplate),this.editMode=!1,this.isShowDialog=!0,this.workTitle="",this.workDesc=""},findId(t){let e=0;return t.forEach((function(t){t.id>e&&(e=t.id)})),e+1},addPosition(){this.$utils.postCallPgMethod({method:"work_update",params:{id:-1,title:this.workTitle,state_id:1,description:this.workDesc}}).subscribe((t=>{if(t.ok){let e=t.result.id;this.$utils.postCallPgMethod({method:"work_task_link_update",params:{id:-1,work_id:e,description:this.workDesc,task_id:this.item.id}}).subscribe((t=>{t.ok&&this.reloadList()}))}}))},routeWork(t){this.$router.push(`/work/${t}`)},savePosition(t){this.$utils.postCallPgMethod({method:"work_task_link_update",params:{id:t,description:this.workDesc}}).subscribe((t=>{t.ok&&this.reloadList()})),this.editMode=!1,this.isShowDialog=!1},deletePosition(t){let e=this.taskWorkList.findIndex((e=>e.id===t));this.taskWorkList[e].deleted=!0,this.$utils.postCallPgMethod({method:"work_task_link_update",params:{id:t,deleted:!0}}).subscribe((t=>{t.ok&&this.reloadList()}))},recoverPosition(t){this.$utils.postCallPgMethod({method:"work_task_link_update",params:{id:t,deleted:!1}}).subscribe((t=>{t.ok&&this.reloadList()}))},reloadList(){this.$utils.postCallPgMethod({method:"work_task_link_list",params:{task_id:this.item.id}}).subscribe((t=>{t.ok&&(this.taskWorkList=t.result)})),this.$utils.postCallPgMethod({method:"work_task_link_list",params:{task_id:this.item.id,deleted:!0}}).subscribe((t=>{t.ok&&(this.deletedTaskWorkList=t.result)}))}},mounted(){this.positionTemplate=Object.assign({},this.position),this.reloadList(),this.$utils.postCallPgMethod({method:"task_get_specialist",params:{}}).subscribe((t=>{t.ok&&(this.specList=t.result)})),this.$utils.postCallPgMethod({method:"task_get_specialist_role",params:{}}).subscribe((t=>{t.ok&&(this.roleList=t.result)}))},computed:{},watch:{}};mt.render=nt;const ct=mt;it()(mt,"components",{QBar:T.Z,QIcon:z.Z,QSpace:A.Z,QBtn:B.Z,QList:O.Z,QItem:H.Z,QItemSection:K.Z,QItemLabel:Y.Z,QDialog:E.Z,QCard:N.Z,QCardSection:R.Z,QInput:J.Z,QCardActions:X.Z}),it()(mt,"directives",{Ripple:tt.Z,ClosePopup:et.Z});var rt=l(43015);const ut={props:["id","isOpenInDialog"],components:{compSpecialist:st,compWork:ct},mixins:[rt.Z],computed:{docUrl:function(){return"/task"}},data(){return{item:null,flds:[{name:"title",label:"название",required:!0},{name:"state",label:"статус"},{name:"digital_solution_id",label:"цифровое решение"},{name:"type_id",label:"тип задачи",required:!0},{name:"description",label:"описание"},{name:"files",label:"файлы"},{name:"images",label:"изображения"},{name:"author_id",label:"автор"},{name:"plan_start_date",label:"плановая дата начала"},{name:"fact_start_date",label:"фактическая дата начала"},{name:"plan_end_date",label:"плановая дата завершения"},{name:"fact_end_date",label:"фактическая дата завершения"},{name:"result",label:"результат"}],optionsFlds:[]}},watch:{},methods:{resultModify(t){return t},save(){this.$utils.saveItem.call(this,{method:"task_update",itemForSaveMod:{},resultModify:this.resultModify})},reload(){let t=t=>{this.item=this.resultModify(t)};this.$utils.getDocItemById.call(this,{method:"task_get_by_id",cb:t})}},mounted(){this.reload()}};var pt=l(24379),kt=l(21007),ht=l(5363);ut.render=L;const _t=ut;it()(ut,"components",{QPage:pt.Z,QInput:J.Z,QBtn:B.Z,QPageSticky:kt.Z,QTooltip:ht.Z})}}]);