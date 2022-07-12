"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[6405],{26405:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Y});var i=l(34182);const r={style:{"flex-wrap":"wrap",display:"flex"}},d={style:{display:"flex",width:"50%","justify-content":"space-between","flex-wrap":"wrap","padding-right":"5px"}},a={style:{display:"flex","justify-content":"space-between",width:"100%",padding:"5px"}},s={style:{display:"flex",width:"50%","justify-content":"space-between","flex-wrap":"wrap"}},o={style:{display:"flex","justify-content":"space-between",width:"100%",padding:"5px"}},n=(0,i._)("img",{src:"image/technical_task.svg",alt:""},null,-1),u=(0,i._)("div",{class:"text-h6"},"Добавление нового фильтра",-1),c=(0,i._)("div",{class:"text-h8"},"Название фильтра:",-1),m=(0,i._)("div",{class:"text-h8"},"Условия фильтра:",-1),h=(0,i._)("span",null,"сделать фильтром по-умолчанию",-1),p=(0,i._)("div",{class:"text-h6"},"Редактирование фильтра",-1),_=(0,i._)("div",{class:"text-h8"},"Название фильтра:",-1),w=(0,i._)("div",{class:"text-h8"},"Условия фильтра:",-1),f=(0,i._)("span",null,"сделать фильтром по-умолчанию",-1),g={class:"q-ml-sm"},y=(0,i._)("div",{class:"text-h6"},"Варианты фильтров",-1),O=(0,i._)("div",{class:"text-h6"},"Варианты сортировки",-1),b=(0,i._)("div",{class:"text-h6"},"Добавление новой сортировки",-1),k=(0,i._)("div",{class:"text-h8"},"Название сортировки:",-1),F=(0,i._)("div",{class:"text-h8"},"Условия сортировки:",-1),C=(0,i._)("span",null,"сделать сортировкой по-умолчанию",-1),W=(0,i._)("div",{class:"text-h6"},"Редактирование сортировки",-1),x=(0,i._)("div",{class:"text-h8"},"Название сортировки:",-1),M=(0,i._)("div",{class:"text-h8"},"Условия сортировки:",-1),V=(0,i._)("span",null,"сделать сортировкой по-умолчанию",-1),v={class:"q-ml-sm"};function T(e,t,l,T,q,D){const L=(0,i.up)("comp-breadcrumb"),U=(0,i.up)("q-input"),B=(0,i.up)("q-btn"),S=(0,i.up)("q-avatar"),R=(0,i.up)("q-item-section"),$=(0,i.up)("router-link"),E=(0,i.up)("q-item-label"),K=(0,i.up)("q-badge"),I=(0,i.up)("comp-item-dropdown-btn"),P=(0,i.up)("comp-doc-list"),Z=(0,i.up)("q-card-section"),H=(0,i.up)("q-checkbox"),Q=(0,i.up)("q-card-actions"),j=(0,i.up)("q-card"),A=(0,i.up)("q-dialog"),N=(0,i.up)("q-page"),z=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(N,{padding:!l.isOpenInDialog},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(L,{key:0,class:"text-capitalize",list:[{label:e.$t("technical_task.name_plural"),docType:"technical_task"}]},null,8,["list"])),(0,i.Wm)(P,{ref:"docList",listTitle:e.$t("technical_task.name_plural"),listDeletedTitle:e.$t("technical_task.name_plural_deleted"),"pg-method":"technical_task_list","list-sort-data":q.listSortData,"list-filter-data":q.listFilterData,newDocUrl:D.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{addFilterSlot:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i._)("div",d,[(0,i.Wm)(U,{id:"sqlInput",onKeydown:D.keydownHandler,style:{width:"100%"},filled:"",modelValue:e.sqlRest,"onUpdate:modelValue":t[0]||(t[0]=t=>e.sqlRest=t),label:"Условия фильтра","input-class":"text-left"},null,8,["onKeydown","modelValue"]),(0,i._)("div",a,[(0,i._)("div",null,[(0,i.Wm)(B,{color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:q.activeFilterTitle,onClick:t[1]||(t[1]=()=>q.isFiltersModal=!0)},null,8,["label"])]),(0,i._)("div",null,[(0,i.Wm)(B,{color:"white","text-color":"primary",label:"+",onClick:D.openCreateFilterModal},null,8,["onClick"])])])]),(0,i._)("div",s,[(0,i.Wm)(U,{id:"sqlInput",onKeydown:D.keydownHandlerOrder,style:{width:"100%"},filled:"",modelValue:q.orderRest,"onUpdate:modelValue":t[2]||(t[2]=e=>q.orderRest=e),label:"Условия сортировки","input-class":"text-left"},null,8,["onKeydown","modelValue"]),(0,i._)("div",o,[(0,i._)("div",null,[(0,i.Wm)(B,{color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:q.activeOrderByTitle,onClick:t[3]||(t[3]=()=>q.isOrderModal=!0)},null,8,["label"])]),(0,i._)("div",null,[(0,i.Wm)(B,{color:"white","text-color":"primary",label:"+",onClick:D.openCreateOrderModal},null,8,["onClick"])])])])])])),listItem:(0,i.w5)((({item:l})=>[(0,i.Wm)($,{to:D.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{rounded:""},{default:(0,i.w5)((()=>[n])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[(0,i.Wm)(E,{lines:"1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.title),1)])),_:2},1024),(0,i.Wm)(E,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{class:"q-ma-xs",color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.state_title),1)])),_:2},1024),(0,i.Wm)(K,{class:"q-ma-xs",color:"orange"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.options.title.work_state_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,i.Wm)(R,{top:"",side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"technical_task_update",onEdit:t=>e.$router.push(`${D.currentUrl}${l.id}`),onReloadList:t[4]||(t[4]=t=>e.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"]),(0,i.Wm)(A,{modelValue:q.isCreateFilterModal,"onUpdate:modelValue":t[8]||(t[8]=e=>q.isCreateFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(Z,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:q.newFilterTitle,"onUpdate:modelValue":t[5]||(t[5]=e=>q.newFilterTitle=e),autofocus:"",onKeyup:(0,i.D2)(D.closeCreateFilterModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[m])),_:1}),(0,i.Wm)(Z,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:q.newFilterСondition,"onUpdate:modelValue":t[6]||(t[6]=e=>q.newFilterСondition=e),autofocus:"",onKeyup:(0,i.D2)(D.closeCreateFilterModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(H,{modelValue:q.defCheckbox,"onUpdate:modelValue":t[7]||(t[7]=e=>q.defCheckbox=e)},null,8,["modelValue"]),h,(0,i.Wm)(Q,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel"},null,512),[[z]]),(0,i.Wm)(B,{flat:"",label:"Add filter",onClick:D.createFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(A,{modelValue:q.isEditFilterModal,"onUpdate:modelValue":t[14]||(t[14]=e=>q.isEditFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(Z,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:q.editFilterTitle,"onUpdate:modelValue":t[9]||(t[9]=e=>q.editFilterTitle=e),autofocus:"",onKeyup:t[10]||(t[10]=(0,i.D2)((()=>this.isEditFilterModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[w])),_:1}),(0,i.Wm)(Z,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:q.editFilterСondition,"onUpdate:modelValue":t[11]||(t[11]=e=>q.editFilterСondition=e),autofocus:"",onKeyup:t[12]||(t[12]=(0,i.D2)((()=>this.isEditFilterModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{modelValue:q.defCheckbox,"onUpdate:modelValue":t[13]||(t[13]=e=>q.defCheckbox=e)},null,8,["modelValue"]),f,(0,i.Wm)(Q,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel"},null,512),[[z]]),(0,i.Wm)(B,{flat:"",label:"Edit filter",onClick:D.editFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(A,{modelValue:q.isDeleteFilterModal,"onUpdate:modelValue":t[15]||(t[15]=e=>q.isDeleteFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i._)("span",g,'Хотите удалить фильтр "'+(0,i.zw)(q.curFilter.title)+'"?',1)])),_:1}),(0,i.Wm)(Q,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel",color:"primary"},null,512),[[z]]),(0,i.Wm)(B,{flat:"",label:"Delete",color:"primary",onClick:D.deleteFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(A,{modelValue:q.isFiltersModal,"onUpdate:modelValue":t[16]||(t[16]=e=>q.isFiltersModal=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[y])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(q.filterList,(e=>((0,i.wg)(),(0,i.j4)(B,{key:e.id,color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:e.title,onClick:t=>D.filterStringAssembly(e),onMousedown:D.mousedownOnFilter,onMouseup:t=>D.mouseupOnFilter(e),onDblclick:t=>D.dblClickOnFilter(e)},null,8,["label","onClick","onMousedown","onMouseup","onDblclick"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(A,{modelValue:q.isOrderModal,"onUpdate:modelValue":t[17]||(t[17]=e=>q.isOrderModal=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[O])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(q.orderByList,(e=>((0,i.wg)(),(0,i.j4)(B,{key:e.id,color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:e.title,onClick:t=>D.filterStringAssemblyOrder(e),onMousedown:D.mousedownOnOrder,onMouseup:t=>D.mouseupOnOrder(e),onDblclick:t=>D.dblClickOnOrder(e)},null,8,["label","onClick","onMousedown","onMouseup","onDblclick"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(A,{modelValue:q.isCreateOrderModal,"onUpdate:modelValue":t[21]||(t[21]=e=>q.isCreateOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[b])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(Z,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:q.newOrderTitle,"onUpdate:modelValue":t[18]||(t[18]=e=>q.newOrderTitle=e),autofocus:"",onKeyup:(0,i.D2)(D.closeCreateOrderModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[F])),_:1}),(0,i.Wm)(Z,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:q.newOrderСondition,"onUpdate:modelValue":t[19]||(t[19]=e=>q.newOrderСondition=e),autofocus:"",onKeyup:(0,i.D2)(D.closeCreateOrderModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(H,{modelValue:q.defCheckboxOrder,"onUpdate:modelValue":t[20]||(t[20]=e=>q.defCheckboxOrder=e)},null,8,["modelValue"]),C,(0,i.Wm)(Q,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel"},null,512),[[z]]),(0,i.Wm)(B,{flat:"",label:"Add order_by",onClick:D.createOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(A,{modelValue:q.isEditOrderModal,"onUpdate:modelValue":t[27]||(t[27]=e=>q.isEditOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[W])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(Z,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:q.editOrderTitle,"onUpdate:modelValue":t[22]||(t[22]=e=>q.editOrderTitle=e),autofocus:"",onKeyup:t[23]||(t[23]=(0,i.D2)((()=>this.isEditOrderModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(Z,null,{default:(0,i.w5)((()=>[M])),_:1}),(0,i.Wm)(Z,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:q.editOrderСondition,"onUpdate:modelValue":t[24]||(t[24]=e=>q.editOrderСondition=e),autofocus:"",onKeyup:t[25]||(t[25]=(0,i.D2)((()=>this.isEditOrderModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{modelValue:q.defCheckboxOrder,"onUpdate:modelValue":t[26]||(t[26]=e=>q.defCheckboxOrder=e)},null,8,["modelValue"]),V,(0,i.Wm)(Q,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel"},null,512),[[z]]),(0,i.Wm)(B,{flat:"",label:"Edit order_by",onClick:D.editOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(A,{modelValue:q.isDeleteOrderModal,"onUpdate:modelValue":t[28]||(t[28]=e=>q.isDeleteOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i._)("span",v,'Хотите удалить сортировку "'+(0,i.zw)(q.curOrder.title)+'"?',1)])),_:1}),(0,i.Wm)(Q,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel",color:"primary"},null,512),[[z]]),(0,i.Wm)(B,{flat:"",label:"Delete",color:"primary",onClick:D.deleteOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["padding"])}l(10071),l(66016);var q=l(43015);const D={props:["isOpenInDialog","ext"],mixins:[q.Z],computed:{currentUrl:()=>"/technical_task/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}],filterCtlgTaskStateTitle:null,filterCtlgTaskStateId:null,filterSystemTitle:null,filterSystemId:null,filterDigitalSolutionTitle:null,filterDigitalSolutionId:null,sqlRestList:[],active:!0,isCreateFilterModal:!1,newFilterTitle:"",newFilterСondition:"",filterList:[],ismousedownOnFilter:!1,mouseFlag:!1,isDeleteFilterModal:!1,curFilter:"",filterLoading:!1,isEditFilterModal:!1,editFilterTitle:"",editFilterСondition:"",isFiltersModal:!1,activeFilter:"",storeFilterName:"",activeFilterTitle:"",orderRest:"",defCheckbox:!1,orderByList:[],activeOrderBy:{},activeOrderByTitle:"",isOrderModal:!1,defCheckboxOrder:!1,newOrderСondition:"",newOrderTitle:"",isCreateOrderModal:!1,curOrder:{},isEditOrderModal:!1,editOrderTitle:"",editOrderСondition:"",orderLoading:!1,isDeleteOrderModal:!1,storeOrderByName:""}},methods:{dblClickOnFilter(e){this.curFilter=e,this.isEditFilterModal=!0,this.editFilterTitle=e.title,this.editFilterСondition=e.where_str,this.defCheckbox=e.is_default},mousedownOnFilter(){this.filterLoading||(this.filterLoading=!0,this.mouseFlag=!1,setTimeout((()=>{this.mouseFlag=!0,this.filterLoading=!1}),1500))},mouseupOnFilter(e){this.mouseFlag&&(this.isDeleteFilterModal=!0,this.curFilter=e)},filterStringAssembly(e){this.mouseFlag||(this.sqlRest=e.where_str,this.activeFilter=e,this.activeFilterTitle=e.title,this.storeFilterName="",this.sqlRestBtnClickHandler())},dblClickOnOrder(e){this.curOrder=e,this.isEditOrderModal=!0,this.editOrderTitle=e.title,this.editOrderСondition=e.order_by_str,this.defCheckboxOrder=e.is_default},mousedownOnOrder(){this.orderLoading||(this.orderLoading=!0,this.mouseFlag=!1,setTimeout((()=>{this.mouseFlag=!0,this.orderLoading=!1}),1500))},mouseupOnOrder(e){this.mouseFlag&&(this.isDeleteOrderModal=!0,this.curOrder=e)},filterStringAssemblyOrder(e){this.mouseFlag||(this.orderRest=e.order_by_str,this.activeOrderBy=e,this.activeOrderByTitle=e.title,this.storeOrderByName="",this.sqlRestBtnClickHandler())},createFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:-1,title:this.newFilterTitle,index:"technical_task",where_str:this.newFilterСondition,user_table_id:this.currentUser.id,is_default:this.defCheckbox}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.closeCreateFilterModal())}))},createOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:-1,title:this.newOrderTitle,index:"technical_task",order_by_str:this.newOrderСondition,user_table_id:this.currentUser.id,is_default:this.defCheckboxOrder}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.closeCreateOrderModal())}))},deleteFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:this.curFilter.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.isDeleteFilterModal=!1)}))},deleteOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:this.curOrder.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.isDeleteOrderModal=!1)}))},editFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:this.curFilter.id,title:this.editFilterTitle,index:"technical_task",where_str:this.editFilterСondition,user_table_id:this.currentUser.id,is_default:this.defCheckbox}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.isEditFilterModal=!1)}))},editOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:this.curOrder.id,title:this.editOrderTitle,index:"technical_task",order_by_str:this.editOrderСondition,user_table_id:this.currentUser.id,is_default:this.defCheckboxOrder}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.isEditOrderModal=!1)}))},loadFilterList(){this.$utils.postCallPgMethod({method:"ctlg_filter_list",params:{user_table_id:this.currentUser.id,index:"technical_task"}}).subscribe((e=>{e.ok&&(console.log("filterList: ",e.result),this.filterList=e.result,this.filterList.forEach((e=>{e.is_default&&(this.activeFilter=e,this.activeFilterTitle=e.title,this.sqlRest=e.where_str,this.sqlRestBtnClickHandler())})))}))},loadOrderList(){this.$utils.postCallPgMethod({method:"ctlg_order_by_list",params:{user_table_id:this.currentUser.id,index:"technical_task"}}).subscribe((e=>{e.ok&&(console.log("filterList: ",e.result),this.orderByList=e.result,this.orderByList.forEach((e=>{e.is_default&&(this.activeOrderBy=e,this.activeOrderByTitle=e.title,this.orderRest=e.order_by_str,this.sqlRestBtnClickHandler())})))}))},openCreateFilterModal(){this.isCreateFilterModal=!0,this.defCheckbox=!1},openCreateOrderModal(){this.isCreateOrderModal=!0,this.defCheckboxOrder=!1},closeCreateFilterModal(){this.isCreateFilterModal=!1,this.newFilterTitle="",this.newFilterСondition=""},closeCreateOrderModal(){this.isCreateOrderModal=!1,this.newOrderTitle="",this.newOrderСondition=""},sqlRestBtnClickHandler(){this.$refs.docList.changeItemList({where_param:this.sqlRest?this.sqlRest:null,order_by:this.orderRest?this.orderRest:"created_at desc"})},keydownHandler(e){13==e.keyCode&&this.sqlRestBtnClickHandler()},keydownHandlerOrder(e){13==e.keyCode&&this.sqlRestBtnClickHandler()},routOnTask(e){console.log(window.location),console.log(e),window.location.href=`${window.location.origin}${window.location.pathname}/${e}`},updateFilterCtlgTaskState(e){this.$refs.docList.changeItemList({state:e?e.id:null}),e&&this.$utils.callPgMethod("ctlg_task_state_get_by_id",{id:e.id},(e=>{this.filterCtlgTaskStateTitle=e.title}))},updateFilterSystem(e){this.$refs.docList.changeItemList({system_id:e?e.id:null}),e&&this.$utils.callPgMethod("system_get_by_id",{id:e.id},(e=>{this.filterSystemTitle=e.title}))},updateFilterDigitalSolution(e){this.$refs.docList.changeItemList({digital_solution_id:e?e.id:null}),e&&this.$utils.callPgMethod("digital_solution_get_by_id",{id:e.id},(e=>{this.filterDigitalSolutionTitle=e.title}))}},watch:{sqlRest(e){this.activeFilter.where_str!=e?(this.storeFilterName=this.activeFilter.title,this.activeFilterTitle="CUSTOM"):this.storeFilterName&&(this.activeFilterTitle=this.activeFilter.title)},orderRest(e){this.activeOrderBy.order_by_str!=e?(this.storeOrderByName=this.activeOrderBy.title,this.activeOrderByTitle="CUSTOM"):this.storeOrderByName&&(this.activeOrderByTitle=this.activeOrderBy.title)}},mounted(){const e=new URLSearchParams(window.location.search);if(e.has("state")){let t=+e.get("state");t&&this.updateFilterCtlgTaskState({id:t})}if(e.has("system_id")){let t=+e.get("system_id");t&&this.updateFilterSystem({id:t})}if(e.has("digital_solution_id")){let t=+e.get("digital_solution_id");t&&this.updateFilterDigitalSolution({id:t})}this.sqlRestBtnClickHandler(),this.loadFilterList(),this.loadOrderList()}};var L=l(74260),U=l(24379),B=l(34842),S=l(2165),R=l(52035),$=l(75096),E=l(2350),K=l(69721),I=l(46778),P=l(10151),Z=l(25589),H=l(65735),Q=l(99367),j=l(60677),A=l(7518),N=l.n(A);const z=(0,L.Z)(D,[["render",T]]),Y=z;N()(D,"components",{QPage:U.Z,QInput:B.Z,QBtn:S.Z,QItemSection:R.Z,QAvatar:$.Z,QItemLabel:E.Z,QBadge:K.Z,QDialog:I.Z,QCard:P.Z,QCardSection:Z.Z,QCheckbox:H.Z,QCardActions:Q.Z}),N()(D,"directives",{ClosePopup:j.Z})}}]);