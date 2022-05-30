"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[2879],{2879:(e,t,l)=>{l.r(t),l.d(t,{default:()=>z});var i=l(34182);const r={style:{"flex-wrap":"wrap",display:"flex"}},d={style:{display:"flex",width:"50%","justify-content":"space-between","flex-wrap":"wrap","padding-right":"5px"}},s={style:{display:"flex","justify-content":"space-between",width:"100%",padding:"5px"}},a={style:{display:"flex",width:"50%","justify-content":"space-between","flex-wrap":"wrap"}},o={style:{display:"flex","justify-content":"space-between",width:"100%",padding:"5px"}},n=(0,i._)("img",{src:"image/payment.png",alt:""},null,-1),u=(0,i._)("div",{class:"text-h6"},"Добавление нового фильтра",-1),m=(0,i._)("div",{class:"text-h8"},"Название фильтра:",-1),c=(0,i._)("div",{class:"text-h8"},"Условия фильтра:",-1),h=(0,i._)("span",null,"сделать фильтром по-умолчанию",-1),p=(0,i._)("div",{class:"text-h6"},"Редактирование фильтра",-1),_=(0,i._)("div",{class:"text-h8"},"Название фильтра:",-1),w=(0,i._)("div",{class:"text-h8"},"Условия фильтра:",-1),f=(0,i._)("span",null,"сделать фильтром по-умолчанию",-1),y={class:"q-ml-sm"},O=(0,i._)("div",{class:"text-h6"},"Filter list",-1),g=(0,i._)("div",{class:"text-h6"},"Order_by list:",-1),b=(0,i._)("div",{class:"text-h6"},"Добавление новой сортировки",-1),F=(0,i._)("div",{class:"text-h8"},"Название сортировки:",-1),C=(0,i._)("div",{class:"text-h8"},"Условия сортировки:",-1),k=(0,i._)("span",null,"сделать сортировкой по-умолчанию",-1),W=(0,i._)("div",{class:"text-h6"},"Редактирование сортировки",-1),x=(0,i._)("div",{class:"text-h8"},"Название сортировки:",-1),M=(0,i._)("div",{class:"text-h8"},"Условия сортировки:",-1),V=(0,i._)("span",null,"сделать сортировкой по-умолчанию",-1),v={class:"q-ml-sm"};function T(e,t,l,T,D,L){const q=(0,i.up)("comp-breadcrumb"),U=(0,i.up)("q-input"),B=(0,i.up)("q-btn"),R=(0,i.up)("q-avatar"),S=(0,i.up)("q-item-section"),$=(0,i.up)("router-link"),E=(0,i.up)("q-item-label"),K=(0,i.up)("comp-item-dropdown-btn"),I=(0,i.up)("comp-doc-list"),P=(0,i.up)("q-card-section"),H=(0,i.up)("q-checkbox"),Z=(0,i.up)("q-card-actions"),Q=(0,i.up)("q-card"),j=(0,i.up)("q-dialog"),A=(0,i.up)("q-page"),N=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(A,{padding:!l.isOpenInDialog},{default:(0,i.w5)((()=>[l.isOpenInDialog?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(q,{key:0,class:"text-capitalize",list:[{label:e.$t("payment.name_plural"),docType:"payment"}]},null,8,["list"])),(0,i.Wm)(I,{ref:"docList",listTitle:e.$t("payment.name_plural"),listDeletedTitle:e.$t("payment.name_plural_deleted"),"pg-method":"payment_list","list-sort-data":D.listSortData,"list-filter-data":D.listFilterData,newDocUrl:L.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{addFilterSlot:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i._)("div",d,[(0,i.Wm)(U,{id:"sqlInput",onKeydown:L.keydownHandler,style:{width:"100%"},filled:"",modelValue:D.sqlRest,"onUpdate:modelValue":t[0]||(t[0]=e=>D.sqlRest=e),label:"Условия фильтра","input-class":"text-left"},null,8,["onKeydown","modelValue"]),(0,i._)("div",s,[(0,i._)("div",null,[(0,i.Wm)(B,{color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:D.activeFilterTitle,onClick:t[1]||(t[1]=()=>D.isFiltersModal=!0)},null,8,["label"])]),(0,i._)("div",null,[(0,i.Wm)(B,{color:"white","text-color":"primary",label:"+",onClick:L.openCreateFilterModal},null,8,["onClick"])])])]),(0,i._)("div",a,[(0,i.Wm)(U,{id:"sqlInput",onKeydown:L.keydownHandlerOrder,style:{width:"100%"},filled:"",modelValue:D.orderRest,"onUpdate:modelValue":t[2]||(t[2]=e=>D.orderRest=e),label:"Условия сортировки","input-class":"text-left"},null,8,["onKeydown","modelValue"]),(0,i._)("div",o,[(0,i._)("div",null,[(0,i.Wm)(B,{color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:D.activeOrderByTitle,onClick:t[3]||(t[3]=()=>D.isOrderModal=!0)},null,8,["label"])]),(0,i._)("div",null,[(0,i.Wm)(B,{color:"white","text-color":"primary",label:"+",onClick:L.openCreateOrderModal},null,8,["onClick"])])])])])])),listItem:(0,i.w5)((({item:l})=>[(0,i.Wm)($,{to:L.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{rounded:""},{default:(0,i.w5)((()=>[n])),_:1})])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i.Wm)(E,{lines:"1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(l.title),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(S,{top:"",side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"payment_update",onEdit:t=>e.$router.push(`${L.currentUrl}${l.id}`),onReloadList:t[4]||(t[4]=t=>e.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"]),(0,i.Wm)(j,{modelValue:D.isCreateFilterModal,"onUpdate:modelValue":t[8]||(t[8]=e=>D.isCreateFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[m])),_:1}),(0,i.Wm)(P,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:D.newFilterTitle,"onUpdate:modelValue":t[5]||(t[5]=e=>D.newFilterTitle=e),autofocus:"",onKeyup:(0,i.D2)(L.closeCreateFilterModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(P,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:D.newFilterСondition,"onUpdate:modelValue":t[6]||(t[6]=e=>D.newFilterСondition=e),autofocus:"",onKeyup:(0,i.D2)(L.closeCreateFilterModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(H,{modelValue:D.defCheckbox,"onUpdate:modelValue":t[7]||(t[7]=e=>D.defCheckbox=e)},null,8,["modelValue"]),h,(0,i.Wm)(Z,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel"},null,512),[[N]]),(0,i.Wm)(B,{flat:"",label:"Add filter",onClick:L.createFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(j,{modelValue:D.isEditFilterModal,"onUpdate:modelValue":t[14]||(t[14]=e=>D.isEditFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(P,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:D.editFilterTitle,"onUpdate:modelValue":t[9]||(t[9]=e=>D.editFilterTitle=e),autofocus:"",onKeyup:t[10]||(t[10]=(0,i.D2)((()=>this.isEditFilterModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[w])),_:1}),(0,i.Wm)(P,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:D.editFilterСondition,"onUpdate:modelValue":t[11]||(t[11]=e=>D.editFilterСondition=e),autofocus:"",onKeyup:t[12]||(t[12]=(0,i.D2)((()=>this.isEditFilterModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{modelValue:D.defCheckbox,"onUpdate:modelValue":t[13]||(t[13]=e=>D.defCheckbox=e)},null,8,["modelValue"]),f,(0,i.Wm)(Z,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel"},null,512),[[N]]),(0,i.Wm)(B,{flat:"",label:"Edit filter",onClick:L.editFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(j,{modelValue:D.isDeleteFilterModal,"onUpdate:modelValue":t[15]||(t[15]=e=>D.isDeleteFilterModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(P,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i._)("span",y,'Хотите удалить фильтр "'+(0,i.zw)(D.curFilter.title)+'"?',1)])),_:1}),(0,i.Wm)(Z,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel",color:"primary"},null,512),[[N]]),(0,i.Wm)(B,{flat:"",label:"Delete",color:"primary",onClick:L.deleteFilter},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(j,{modelValue:D.isFiltersModal,"onUpdate:modelValue":t[16]||(t[16]=e=>D.isFiltersModal=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[O])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(D.filterList,(e=>((0,i.wg)(),(0,i.j4)(B,{key:e.id,color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:e.title,onClick:t=>L.filterStringAssembly(e),onMousedown:L.mousedownOnFilter,onMouseup:t=>L.mouseupOnFilter(e),onDblclick:t=>L.dblClickOnFilter(e)},null,8,["label","onClick","onMousedown","onMouseup","onDblclick"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(j,{modelValue:D.isOrderModal,"onUpdate:modelValue":t[17]||(t[17]=e=>D.isOrderModal=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(D.orderByList,(e=>((0,i.wg)(),(0,i.j4)(B,{key:e.id,color:"white",style:{"margin-right":"5px","margin-bottom":"5px"},"text-color":"primary",label:e.title,onClick:t=>L.filterStringAssemblyOrder(e),onMousedown:L.mousedownOnOrder,onMouseup:t=>L.mouseupOnOrder(e),onDblclick:t=>L.dblClickOnOrder(e)},null,8,["label","onClick","onMousedown","onMouseup","onDblclick"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(j,{modelValue:D.isCreateOrderModal,"onUpdate:modelValue":t[21]||(t[21]=e=>D.isCreateOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[b])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[F])),_:1}),(0,i.Wm)(P,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:D.newOrderTitle,"onUpdate:modelValue":t[18]||(t[18]=e=>D.newOrderTitle=e),autofocus:"",onKeyup:(0,i.D2)(L.closeCreateOrderModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[C])),_:1}),(0,i.Wm)(P,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:D.newOrderСondition,"onUpdate:modelValue":t[19]||(t[19]=e=>D.newOrderСondition=e),autofocus:"",onKeyup:(0,i.D2)(L.closeCreateOrderModal,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(H,{modelValue:D.defCheckboxOrder,"onUpdate:modelValue":t[20]||(t[20]=e=>D.defCheckboxOrder=e)},null,8,["modelValue"]),k,(0,i.Wm)(Z,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel"},null,512),[[N]]),(0,i.Wm)(B,{flat:"",label:"Add order_by",onClick:L.createOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(j,{modelValue:D.isEditOrderModal,"onUpdate:modelValue":t[27]||(t[27]=e=>D.isEditOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[W])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(P,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:D.editOrderTitle,"onUpdate:modelValue":t[22]||(t[22]=e=>D.editOrderTitle=e),autofocus:"",onKeyup:t[23]||(t[23]=(0,i.D2)((()=>this.isEditOrderModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[M])),_:1}),(0,i.Wm)(P,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",modelValue:D.editOrderСondition,"onUpdate:modelValue":t[24]||(t[24]=e=>D.editOrderСondition=e),autofocus:"",onKeyup:t[25]||(t[25]=(0,i.D2)((()=>this.isEditOrderModal=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{modelValue:D.defCheckboxOrder,"onUpdate:modelValue":t[26]||(t[26]=e=>D.defCheckboxOrder=e)},null,8,["modelValue"]),V,(0,i.Wm)(Z,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel"},null,512),[[N]]),(0,i.Wm)(B,{flat:"",label:"Edit order_by",onClick:L.editOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(j,{modelValue:D.isDeleteOrderModal,"onUpdate:modelValue":t[28]||(t[28]=e=>D.isDeleteOrderModal=e),"transition-show":"rotate","transition-hide":"rotate",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(P,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i._)("span",v,'Хотите удалить сортировку "'+(0,i.zw)(D.curOrder.title)+'"?',1)])),_:1}),(0,i.Wm)(Z,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(B,{flat:"",label:"Cancel",color:"primary"},null,512),[[N]]),(0,i.Wm)(B,{flat:"",label:"Delete",color:"primary",onClick:L.deleteOrder},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["padding"])}l(10071),l(66016);var D=l(43015);const L={props:["isOpenInDialog","ext"],mixins:[D.Z],computed:{currentUrl:()=>"/payment/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}],filterCtlgTaskStateTitle:null,filterCtlgTaskStateId:null,filterSystemTitle:null,filterSystemId:null,filterDigitalSolutionTitle:null,filterDigitalSolutionId:null,sqlRest:"state_id != 4",sqlRestList:[],active:!0,isCreateFilterModal:!1,newFilterTitle:"",newFilterСondition:"",filterList:[],ismousedownOnFilter:!1,mouseFlag:!1,isDeleteFilterModal:!1,curFilter:"",filterLoading:!1,isEditFilterModal:!1,editFilterTitle:"",editFilterСondition:"",isFiltersModal:!1,activeFilter:"",storeFilterName:"",activeFilterTitle:"",orderRest:"",defCheckbox:!1,orderByList:[],activeOrderBy:{},activeOrderByTitle:"",isOrderModal:!1,defCheckboxOrder:!1,newOrderСondition:"",newOrderTitle:"",isCreateOrderModal:!1,curOrder:{},isEditOrderModal:!1,editOrderTitle:"",editOrderСondition:"",orderLoading:!1,isDeleteOrderModal:!1,storeOrderByName:""}},methods:{dblClickOnFilter(e){this.curFilter=e,this.isEditFilterModal=!0,this.editFilterTitle=e.title,this.editFilterСondition=e.where_str,this.defCheckbox=e.is_default},mousedownOnFilter(){this.filterLoading||(this.filterLoading=!0,this.mouseFlag=!1,setTimeout((()=>{this.mouseFlag=!0,this.filterLoading=!1}),1500))},mouseupOnFilter(e){this.mouseFlag&&(this.isDeleteFilterModal=!0,this.curFilter=e)},filterStringAssembly(e){this.mouseFlag||(this.sqlRest=e.where_str,this.activeFilter=e,this.activeFilterTitle=e.title,this.storeFilterName="",this.sqlRestBtnClickHandler())},dblClickOnOrder(e){this.curOrder=e,this.isEditOrderModal=!0,this.editOrderTitle=e.title,this.editOrderСondition=e.order_by_str,this.defCheckboxOrder=e.is_default},mousedownOnOrder(){this.orderLoading||(this.orderLoading=!0,this.mouseFlag=!1,setTimeout((()=>{this.mouseFlag=!0,this.orderLoading=!1}),1500))},mouseupOnOrder(e){this.mouseFlag&&(this.isDeleteOrderModal=!0,this.curOrder=e)},filterStringAssemblyOrder(e){this.mouseFlag||(this.orderRest=e.order_by_str,this.activeOrderBy=e,this.activeOrderByTitle=e.title,this.storeOrderByName="",this.sqlRestBtnClickHandler())},createFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:-1,title:this.newFilterTitle,index:"payment",where_str:this.newFilterСondition,user_table_id:this.currentUser.id,is_default:this.defCheckbox}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.closeCreateFilterModal())}))},createOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:-1,title:this.newOrderTitle,index:"payment",order_by_str:this.newOrderСondition,user_table_id:this.currentUser.id,is_default:this.defCheckboxOrder}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.closeCreateOrderModal())}))},deleteFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:this.curFilter.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.isDeleteFilterModal=!1)}))},deleteOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:this.curOrder.id,deleted:!0}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.isDeleteOrderModal=!1)}))},editFilter(){this.$utils.postCallPgMethod({method:"ctlg_filter_update",params:{id:this.curFilter.id,title:this.editFilterTitle,index:"payment",where_str:this.editFilterСondition,user_table_id:this.currentUser.id,is_default:this.defCheckbox}}).subscribe((e=>{e.ok&&(this.loadFilterList(),this.isEditFilterModal=!1)}))},editOrder(){this.$utils.postCallPgMethod({method:"ctlg_order_by_update",params:{id:this.curOrder.id,title:this.editOrderTitle,index:"payment",order_by_str:this.editOrderСondition,user_table_id:this.currentUser.id,is_default:this.defCheckboxOrder}}).subscribe((e=>{e.ok&&(this.loadOrderList(),this.isEditOrderModal=!1)}))},loadFilterList(){this.$utils.postCallPgMethod({method:"ctlg_filter_list",params:{user_table_id:this.currentUser.id,index:"payment"}}).subscribe((e=>{e.ok&&(console.log("filterList: ",e.result),this.filterList=e.result,this.filterList.forEach((e=>{e.is_default&&(this.activeFilter=e,this.activeFilterTitle=e.title,this.sqlRest=e.where_str,this.sqlRestBtnClickHandler())})))}))},loadOrderList(){this.$utils.postCallPgMethod({method:"ctlg_order_by_list",params:{user_table_id:this.currentUser.id,index:"payment"}}).subscribe((e=>{e.ok&&(console.log("filterList: ",e.result),this.orderByList=e.result,this.orderByList.forEach((e=>{e.is_default&&(this.activeOrderBy=e,this.activeOrderByTitle=e.title,this.orderRest=e.order_by_str,this.sqlRestBtnClickHandler())})))}))},openCreateFilterModal(){this.isCreateFilterModal=!0,this.defCheckbox=!1},openCreateOrderModal(){this.isCreateOrderModal=!0,this.defCheckboxOrder=!1},closeCreateFilterModal(){this.isCreateFilterModal=!1,this.newFilterTitle="",this.newFilterСondition=""},closeCreateOrderModal(){this.isCreateOrderModal=!1,this.newOrderTitle="",this.newOrderСondition=""},sqlRestBtnClickHandler(){this.$refs.docList.changeItemList({where_param:this.sqlRest?this.sqlRest:null,order_by:this.orderRest?this.orderRest:"created_at desc"})},keydownHandler(e){13==e.keyCode&&this.sqlRestBtnClickHandler()},keydownHandlerOrder(e){13==e.keyCode&&this.sqlRestBtnClickHandler()},routOnTask(e){console.log(window.location),console.log(e),window.location.href=`${window.location.origin}${window.location.pathname}/${e}`},updateFilterCtlgTaskState(e){this.$refs.docList.changeItemList({state:e?e.id:null}),e&&this.$utils.callPgMethod("ctlg_task_state_get_by_id",{id:e.id},(e=>{this.filterCtlgTaskStateTitle=e.title}))},updateFilterSystem(e){this.$refs.docList.changeItemList({system_id:e?e.id:null}),e&&this.$utils.callPgMethod("system_get_by_id",{id:e.id},(e=>{this.filterSystemTitle=e.title}))},updateFilterDigitalSolution(e){this.$refs.docList.changeItemList({digital_solution_id:e?e.id:null}),e&&this.$utils.callPgMethod("digital_solution_get_by_id",{id:e.id},(e=>{this.filterDigitalSolutionTitle=e.title}))}},watch:{sqlRest(e){this.activeFilter.where_str!=e?(this.storeFilterName=this.activeFilter.title,this.activeFilterTitle="CUSTOM"):this.storeFilterName&&(this.activeFilterTitle=this.activeFilter.title)},orderRest(e){this.activeOrderBy.order_by_str!=e?(this.storeOrderByName=this.activeOrderBy.title,this.activeOrderByTitle="CUSTOM"):this.storeOrderByName&&(this.activeOrderByTitle=this.activeOrderBy.title)}},mounted(){const e=new URLSearchParams(window.location.search);if(e.has("state")){let t=+e.get("state");t&&this.updateFilterCtlgTaskState({id:t})}if(e.has("system_id")){let t=+e.get("system_id");t&&this.updateFilterSystem({id:t})}if(e.has("digital_solution_id")){let t=+e.get("digital_solution_id");t&&this.updateFilterDigitalSolution({id:t})}this.sqlRestBtnClickHandler(),this.loadFilterList(),this.loadOrderList()}};var q=l(74260),U=l(24379),B=l(34842),R=l(2165),S=l(52035),$=l(75096),E=l(2350),K=l(46778),I=l(10151),P=l(25589),H=l(65735),Z=l(99367),Q=l(60677),j=l(7518),A=l.n(j);const N=(0,q.Z)(L,[["render",T]]),z=N;A()(L,"components",{QPage:U.Z,QInput:B.Z,QBtn:R.Z,QItemSection:S.Z,QAvatar:$.Z,QItemLabel:E.Z,QDialog:K.Z,QCard:I.Z,QCardSection:P.Z,QCheckbox:H.Z,QCardActions:Z.Z}),A()(L,"directives",{ClosePopup:Q.Z})}}]);