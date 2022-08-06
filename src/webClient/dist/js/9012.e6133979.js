"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[9012],{9012:(e,t,l)=>{l.r(t),l.d(t,{default:()=>le});var i=l(34182);const d={style:{"flex-wrap":"wrap",display:"flex"}},r={style:{display:"flex",width:"50%","justify-content":"space-between","flex-wrap":"wrap","padding-right":"5px"}},a={style:{display:"flex","justify-content":"space-between",width:"100%",padding:"5px"}},s={style:{display:"flex",width:"50%","justify-content":"space-between","flex-wrap":"wrap"}},o={style:{display:"flex","justify-content":"space-between",width:"100%",padding:"5px"}},n=(0,i._)("img",{src:"image/development_task.png",alt:""},null,-1),u=(0,i.Uk)("На паузе"),m=(0,i.Uk)(),c=(0,i.Uk)(),h=(0,i.Uk)(),p=(0,i.Uk)(),_=(0,i.Uk)(),w=(0,i._)("div",{class:"text-h6"},"Добавление нового фильтра",-1),f=(0,i._)("div",{class:"text-h8"},"Название фильтра:",-1),g=(0,i._)("div",{class:"text-h8"},"Условия фильтра:",-1),y=(0,i._)("span",null,"сделать фильтром по-умолчанию",-1),k=(0,i._)("div",{class:"text-h6"},"Редактирование фильтра",-1),O=(0,i._)("div",{class:"text-h8"},"Название фильтра:",-1),b=(0,i._)("div",{class:"text-h8"},"Условия фильтра:",-1),F=(0,i._)("span",null,"сделать фильтром по-умолчанию",-1),C={class:"q-ml-sm"},W=(0,i._)("div",{class:"text-h6"},"Варианты фильтров",-1),x=(0,i._)("div",{class:"text-h6"},"Варианты сортировки",-1),M=(0,i._)("div",{class:"text-h6"},"Добавление новой сортировки",-1),v=(0,i._)("div",{class:"text-h8"},"Название сортировки:",-1),V=(0,i._)("div",{class:"text-h8"},"Условия сортировки:",-1),T=(0,i._)("span",null,"сделать сортировкой по-умолчанию",-1),U=(0,i._)("div",{class:"text-h6"},"Редактирование сортировки",-1),q=(0,i._)("div",{class:"text-h8"},"Название сортировки:",-1),D=(0,i._)("div",{class:"text-h8"},"Условия сортировки:",-1),L=(0,i._)("span",null,"сделать сортировкой по-умолчанию",-1),B={class:"q-ml-sm"};function S(e,t,l,S,$,R){const E=(0,i.up)("comp-breadcrumb"),K=(0,i.up)("q-input"),P=(0,i.up)("q-btn"),I=(0,i.up)("q-avatar"),j=(0,i.up)("q-item-section"),Z=(0,i.up)("router-link"),H=(0,i.up)("q-item-label"),Q=(0,i.up)("q-badge"),z=(0,i.up)("comp-item-dropdown-btn"),A=(0,i.up)("comp-doc-list"),N=(0,i.up)("q-card-section"),Y=(0,i.up)("q-checkbox"),G=(0,i.up)("q-card-actions"),J=(0,i.up)("q-card"),X=(0,i.up)("q-dialog"),ee=(0,i.up)("q-page"),te=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(ee,{padding:!l.isOpenInDialog},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(E,{key:0,class:"text-capitalize",list:[{label:e.$t("development_task.name_plural"),docType:"development_task"}]},null,8,["list"])),(0,i.Wm)(A,{ref:"docList",listTitle:e.$t("development_task.name_plural"),listDeletedTitle:e.$t("development_task.name_plural_deleted"),"pg-method":"development_task_list","list-sort-data":$.listSortData,"list-filter-data":$.listFilterData,newDocUrl:R.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{addFilterSlot:(0,i.w5)((()=>[(0,i._)("div",d,[(0,i._)("div",r,[(0,i.Wm)(K,{id:"sqlInput",onKeydown:R.keydownHandler,style:{width:"100%"},filled:"",modelValue:e.sqlRest,"onUpdate:modelValue":t[0]||(t[0]=t=>e.sqlRest=t),label:"Условия фильтра","input-class":"text-left"},null,8,["onKeydown","modelValue"]),(0,i._)("div",a,[(0,i._)("div",null,[(0,i.Wm)(P,{color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:$.activeFilterTitle,onClick:t[1]||(t[1]=()=>$.isFiltersModal=!0)},null,8,["label"])]),(0,i._)("div",null,[(0,i.Wm)(P,{color:"white","text-color":"primary",label:"+",onClick:R.openCreateFilterModal},null,8,["onClick"])])])]),(0,i._)("div",s,[(0,i.Wm)(K,{id:"sqlInput",onKeydown:R.keydownHandlerOrder,style:{width:"100%"},filled:"",modelValue:$.orderRest,"onUpdate:modelValue":t[2]||(t[2]=e=>$.orderRest=e),label:"Условия сортировки","input-class":"text-left"},null,8,["onKeydown","modelValue"]),(0,i._)("div",o,[(0,i._)("div",null,[(0,i.Wm)(P,{color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:$.activeOrderByTitle,onClick:t[3]||(t[3]=()=>$.isOrderModal=!0)},null,8,["label"])]),(0,i._)("div",null,[(0,i.Wm)(P,{color:"white","text-color":"primary",label:"+",onClick:R.openCreateOrderModal},null,8,["onClick"])])])])])])),listItem:(0,i.w5)((({item:l})=>[(0,i.Wm)(Z,{to:R.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{rounded:""},{default:(0,i.w5)((()=>[n])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i.Wm)(H,{lines:"1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.title),1)])),_:2},1024),(0,i.Wm)(H,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{caption:""},{default:(0,i.w5)((()=>[l.is_paused?((0,i.wg)(),(0,i.j4)(Q,{key:0,color:"warning"},{default:(0,i.w5)((()=>[u])),_:1})):(0,i.kq)("",!0),m,l.internal_priority?((0,i.wg)(),(0,i.j4)(Q,{key:1,color:"blue-grey-3"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.internal_priority),1)])),_:2},1024)):(0,i.kq)("",!0),c,(0,i.Wm)(Q,{color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.state_title),1)])),_:2},1024),h,l.system_id?((0,i.wg)(),(0,i.j4)(Q,{key:2,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.system_title),1)])),_:2},1024)):(0,i.kq)("",!0),p,l.sprint_id?((0,i.wg)(),(0,i.j4)(Q,{key:3,color:"info"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.sprint_title)+" спринт",1)])),_:2},1024)):(0,i.kq)("",!0),_,l.digital_solution_id?((0,i.wg)(),(0,i.j4)(Q,{key:4,color:"purple-4"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.digital_solution_title),1)])),_:2},1024)):(0,i.kq)("",!0)])),_:2},1024),l.plan_end_date?((0,i.wg)(),(0,i.j4)(H,{key:0,caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Плановая дата завершения: "+(0,i.zw)(e.$utils.formatPgDate(l.plan_end_date)),1)])),_:2},1024)):(0,i.kq)("",!0),l.fact_end_date?((0,i.wg)(),(0,i.j4)(H,{key:1,caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Фактическая дата завершения: "+(0,i.zw)(e.$utils.formatPgDate(l.fact_end_date)),1)])),_:2},1024)):(0,i.kq)("",!0)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{top:"",side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"development_task_update",onEdit:t=>e.$router.push(`${R.currentUrl}${l.id}`),onReloadList:t[4]||(t[4]=t=>e.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"]),(0,i.Wm)(X,{modelValue:$.isCreateFilterModal,"onUpdate:modelValue":t[8]||(t[8]=e=>$.isCreateFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(J,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[w])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(N,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:"",modelValue:$.newFilterTitle,"onUpdate:modelValue":t[5]||(t[5]=e=>$.newFilterTitle=e),autofocus:"",onKeyup:(0,i.D2)(R.closeCreateFilterModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(N,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:"",modelValue:$.newFilterСondition,"onUpdate:modelValue":t[6]||(t[6]=e=>$.newFilterСondition=e),autofocus:"",onKeyup:(0,i.D2)(R.closeCreateFilterModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(Y,{modelValue:$.defCheckbox,"onUpdate:modelValue":t[7]||(t[7]=e=>$.defCheckbox=e)},null,8,["modelValue"]),y,(0,i.Wm)(G,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(P,{flat:"",label:"Cancel"},null,512),[[te]]),(0,i.Wm)(P,{flat:"",label:"Add filter",onClick:R.createFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{modelValue:$.isEditFilterModal,"onUpdate:modelValue":t[14]||(t[14]=e=>$.isEditFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(J,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[O])),_:1}),(0,i.Wm)(N,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:"",modelValue:$.editFilterTitle,"onUpdate:modelValue":t[9]||(t[9]=e=>$.editFilterTitle=e),autofocus:"",onKeyup:t[10]||(t[10]=(0,i.D2)((()=>this.isEditFilterModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[b])),_:1}),(0,i.Wm)(N,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:"",modelValue:$.editFilterСondition,"onUpdate:modelValue":t[11]||(t[11]=e=>$.editFilterСondition=e),autofocus:"",onKeyup:t[12]||(t[12]=(0,i.D2)((()=>this.isEditFilterModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(Y,{modelValue:$.defCheckbox,"onUpdate:modelValue":t[13]||(t[13]=e=>$.defCheckbox=e)},null,8,["modelValue"]),F,(0,i.Wm)(G,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(P,{flat:"",label:"Cancel"},null,512),[[te]]),(0,i.Wm)(P,{flat:"",label:"Edit filter",onClick:R.editFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{modelValue:$.isDeleteFilterModal,"onUpdate:modelValue":t[15]||(t[15]=e=>$.isDeleteFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(J,null,{default:(0,i.w5)((()=>[(0,i.Wm)(N,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i._)("span",C,'Хотите удалить фильтр "'+(0,i.zw)($.curFilter.title)+'"?',1)])),_:1}),(0,i.Wm)(G,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(P,{flat:"",label:"Cancel",color:"primary"},null,512),[[te]]),(0,i.Wm)(P,{flat:"",label:"Delete",color:"primary",onClick:R.deleteFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{modelValue:$.isFiltersModal,"onUpdate:modelValue":t[16]||(t[16]=e=>$.isFiltersModal=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(J,null,{default:(0,i.w5)((()=>[(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[W])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)($.filterList,(e=>((0,i.wg)(),(0,i.j4)(P,{key:e.id,color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:e.title,onClick:t=>R.filterStringAssembly(e),onMousedown:R.mousedownOnFilter,onMouseup:t=>R.mouseupOnFilter(e),onDblclick:t=>R.dblClickOnFilter(e)},null,8,["label","onClick","onMousedown","onMouseup","onDblclick"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{modelValue:$.isOrderModal,"onUpdate:modelValue":t[17]||(t[17]=e=>$.isOrderModal=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(J,null,{default:(0,i.w5)((()=>[(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)($.orderByList,(e=>((0,i.wg)(),(0,i.j4)(P,{key:e.id,color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:e.title,onClick:t=>R.filterStringAssemblyOrder(e),onMousedown:R.mousedownOnOrder,onMouseup:t=>R.mouseupOnOrder(e),onDblclick:t=>R.dblClickOnOrder(e)},null,8,["label","onClick","onMousedown","onMouseup","onDblclick"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{modelValue:$.isCreateOrderModal,"onUpdate:modelValue":t[21]||(t[21]=e=>$.isCreateOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(J,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[M])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)(N,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:"",modelValue:$.newOrderTitle,"onUpdate:modelValue":t[18]||(t[18]=e=>$.newOrderTitle=e),autofocus:"",onKeyup:(0,i.D2)(R.closeCreateOrderModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[V])),_:1}),(0,i.Wm)(N,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:"",modelValue:$.newOrderСondition,"onUpdate:modelValue":t[19]||(t[19]=e=>$.newOrderСondition=e),autofocus:"",onKeyup:(0,i.D2)(R.closeCreateOrderModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(Y,{modelValue:$.defCheckboxOrder,"onUpdate:modelValue":t[20]||(t[20]=e=>$.defCheckboxOrder=e)},null,8,["modelValue"]),T,(0,i.Wm)(G,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(P,{flat:"",label:"Cancel"},null,512),[[te]]),(0,i.Wm)(P,{flat:"",label:"Add order_by",onClick:R.createOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{modelValue:$.isEditOrderModal,"onUpdate:modelValue":t[27]||(t[27]=e=>$.isEditOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(J,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[U])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[q])),_:1}),(0,i.Wm)(N,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:"",modelValue:$.editOrderTitle,"onUpdate:modelValue":t[22]||(t[22]=e=>$.editOrderTitle=e),autofocus:"",onKeyup:t[23]||(t[23]=(0,i.D2)((()=>this.isEditOrderModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[D])),_:1}),(0,i.Wm)(N,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:"",modelValue:$.editOrderСondition,"onUpdate:modelValue":t[24]||(t[24]=e=>$.editOrderСondition=e),autofocus:"",onKeyup:t[25]||(t[25]=(0,i.D2)((()=>this.isEditOrderModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(Y,{modelValue:$.defCheckboxOrder,"onUpdate:modelValue":t[26]||(t[26]=e=>$.defCheckboxOrder=e)},null,8,["modelValue"]),L,(0,i.Wm)(G,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(P,{flat:"",label:"Cancel"},null,512),[[te]]),(0,i.Wm)(P,{flat:"",label:"Edit order_by",onClick:R.editOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{modelValue:$.isDeleteOrderModal,"onUpdate:modelValue":t[28]||(t[28]=e=>$.isDeleteOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(J,null,{default:(0,i.w5)((()=>[(0,i.Wm)(N,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i._)("span",B,'Хотите удалить сортировку "'+(0,i.zw)($.curOrder.title)+'"?',1)])),_:1}),(0,i.Wm)(G,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(P,{flat:"",label:"Cancel",color:"primary"},null,512),[[te]]),(0,i.Wm)(P,{flat:"",label:"Delete",color:"primary",onClick:R.deleteOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["padding"])}l(10071),l(66016);var $=l(43015);const R={props:["isOpenInDialog","ext"],mixins:[$.Z],computed:{currentUrl:()=>"/development_task/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}],filterCtlgTaskStateTitle:null,filterCtlgTaskStateId:null,filterSystemTitle:null,filterSystemId:null,filterDigitalSolutionTitle:null,filterDigitalSolutionId:null,sqlRestList:[],active:!0,isCreateFilterModal:!1,newFilterTitle:"",newFilterСondition:"",filterList:[],ismousedownOnFilter:!1,mouseFlag:!1,isDeleteFilterModal:!1,curFilter:"",filterLoading:!1,isEditFilterModal:!1,editFilterTitle:"",editFilterСondition:"",isFiltersModal:!1,activeFilter:"",storeFilterName:"",activeFilterTitle:"",orderRest:"",defCheckbox:!1,orderByList:[],activeOrderBy:{},activeOrderByTitle:"",isOrderModal:!1,defCheckboxOrder:!1,newOrderСondition:"",newOrderTitle:"",isCreateOrderModal:!1,curOrder:{},isEditOrderModal:!1,editOrderTitle:"",editOrderСondition:"",orderLoading:!1,isDeleteOrderModal:!1,storeOrderByName:""}},methods:{dblClickOnFilter(e){this.curFilter=e,this.isEditFilterModal=!0,this.editFilterTitle=e.title,this.editFilterСondition=e.where_str,this.defCheckbox=e.is_default},mousedownOnFilter(){this.filterLoading||(this.filterLoading=!0,this.mouseFlag=!1,setTimeout((()=>{this.mouseFlag=!0,this.filterLoading=!1}),1500))},mouseupOnFilter(e){this.mouseFlag&&(this.isDeleteFilterModal=!0,this.curFilter=e)},filterStringAssembly(e){this.mouseFlag||(this.sqlRest=e.where_str,this.activeFilter=e,this.activeFilterTitle=e.title,this.storeFilterName="",this.sqlRestBtnClickHandler())},dblClickOnOrder(e){this.curOrder=e,this.isEditOrderModal=!0,this.editOrderTitle=e.title,this.editOrderСondition=e.order_by_str,this.defCheckboxOrder=e.is_default},mousedownOnOrder(){this.orderLoading||(this.orderLoading=!0,this.mouseFlag=!1,setTimeout((()=>{this.mouseFlag=!0,this.orderLoading=!1}),1500))},mouseupOnOrder(e){this.mouseFlag&&(this.isDeleteOrderModal=!0,this.curOrder=e)},filterStringAssemblyOrder(e){this.mouseFlag||(this.orderRest=e.order_by_str,this.activeOrderBy=e,this.activeOrderByTitle=e.title,this.storeOrderByName="",this.sqlRestBtnClickHandler())},createFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:-1,title:this.newFilterTitle,index:"development_task",where_str:this.newFilterСondition,user_table_id:this.currentUser.id,is_default:this.defCheckbox}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.closeCreateFilterModal())}))},createOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:-1,title:this.newOrderTitle,index:"development_task",order_by_str:this.newOrderСondition,user_table_id:this.currentUser.id,is_default:this.defCheckboxOrder}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.closeCreateOrderModal())}))},deleteFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:this.curFilter.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.isDeleteFilterModal=!1)}))},deleteOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:this.curOrder.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.isDeleteOrderModal=!1)}))},editFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:this.curFilter.id,title:this.editFilterTitle,index:"development_task",where_str:this.editFilterСondition,user_table_id:this.currentUser.id,is_default:this.defCheckbox}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.isEditFilterModal=!1)}))},editOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:this.curOrder.id,title:this.editOrderTitle,index:"development_task",order_by_str:this.editOrderСondition,user_table_id:this.currentUser.id,is_default:this.defCheckboxOrder}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.isEditOrderModal=!1)}))},loadFilterList(){this.$utils.postCallPgMethod({method:"ctlg_filter_list",params:{user_table_id:this.currentUser.id,index:"development_task"}}).subscribe((e=>{e.ok&&(console.log("filterList: ",e.result),this.filterList=e.result,this.filterList.forEach((e=>{e.is_default&&(this.activeFilter=e,this.activeFilterTitle=e.title,this.sqlRest=e.where_str,this.sqlRestBtnClickHandler())})))}))},loadOrderList(){this.$utils.postCallPgMethod({method:"ctlg_order_by_list",params:{user_table_id:this.currentUser.id,index:"development_task"}}).subscribe((e=>{e.ok&&(console.log("filterList: ",e.result),this.orderByList=e.result,this.orderByList.forEach((e=>{e.is_default&&(this.activeOrderBy=e,this.activeOrderByTitle=e.title,this.orderRest=e.order_by_str,this.sqlRestBtnClickHandler())})))}))},openCreateFilterModal(){this.isCreateFilterModal=!0,this.defCheckbox=!1},openCreateOrderModal(){this.isCreateOrderModal=!0,this.defCheckboxOrder=!1},closeCreateFilterModal(){this.isCreateFilterModal=!1,this.newFilterTitle="",this.newFilterСondition=""},closeCreateOrderModal(){this.isCreateOrderModal=!1,this.newOrderTitle="",this.newOrderСondition=""},sqlRestBtnClickHandler(){this.$refs.docList.changeItemList({where_param:this.sqlRest?this.sqlRest:null,order_by:this.orderRest?this.orderRest:"created_at desc"})},keydownHandler(e){13==e.keyCode&&this.sqlRestBtnClickHandler()},keydownHandlerOrder(e){13==e.keyCode&&this.sqlRestBtnClickHandler()},routOnTask(e){console.log(window.location),console.log(e),window.location.href=`${window.location.origin}${window.location.pathname}/${e}`},updateFilterCtlgTaskState(e){this.$refs.docList.changeItemList({state:e?e.id:null}),e&&this.$utils.callPgMethod("ctlg_development_task_state_get_by_id",{id:e.id},(e=>{this.filterCtlgTaskStateTitle=e.title}))},updateFilterSystem(e){this.$refs.docList.changeItemList({system_id:e?e.id:null}),e&&this.$utils.callPgMethod("system_get_by_id",{id:e.id},(e=>{this.filterSystemTitle=e.title}))},updateFilterDigitalSolution(e){this.$refs.docList.changeItemList({digital_solution_id:e?e.id:null}),e&&this.$utils.callPgMethod("digital_solution_get_by_id",{id:e.id},(e=>{this.filterDigitalSolutionTitle=e.title}))}},watch:{sqlRest(e){this.activeFilter.where_str!=e?(this.storeFilterName=this.activeFilter.title,this.activeFilterTitle="CUSTOM"):this.storeFilterName&&(this.activeFilterTitle=this.activeFilter.title)},orderRest(e){this.activeOrderBy.order_by_str!=e?(this.storeOrderByName=this.activeOrderBy.title,this.activeOrderByTitle="CUSTOM"):this.storeOrderByName&&(this.activeOrderByTitle=this.activeOrderBy.title)}},mounted(){const e=new URLSearchParams(window.location.search);if(e.has("state")){let t=+e.get("state");t&&this.updateFilterCtlgTaskState({id:t})}if(e.has("system_id")){let t=+e.get("system_id");t&&this.updateFilterSystem({id:t})}if(e.has("digital_solution_id")){let t=+e.get("digital_solution_id");t&&this.updateFilterDigitalSolution({id:t})}this.sqlRestBtnClickHandler(),this.loadFilterList(),this.loadOrderList()}};var E=l(74260),K=l(24379),P=l(34842),I=l(2165),j=l(52035),Z=l(75096),H=l(2350),Q=l(69721),z=l(46778),A=l(10151),N=l(25589),Y=l(65735),G=l(99367),J=l(60677),X=l(7518),ee=l.n(X);const te=(0,E.Z)(R,[["render",S]]),le=te;ee()(R,"components",{QPage:K.Z,QInput:P.Z,QBtn:I.Z,QItemSection:j.Z,QAvatar:Z.Z,QItemLabel:H.Z,QBadge:Q.Z,QDialog:z.Z,QCard:A.Z,QCardSection:N.Z,QCheckbox:Y.Z,QCardActions:G.Z}),ee()(R,"directives",{ClosePopup:J.Z})}}]);