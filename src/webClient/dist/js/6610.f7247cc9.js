"use strict";(self["webpackChunkCounter"]=self["webpackChunkCounter"]||[]).push([[6610],{86610:(t,e,l)=>{l.r(e),l.d(e,{default:()=>f});var a=l(75305);const i=(0,a._)("img",{src:"image/counterparty.svg",alt:""},null,-1);function r(t,e,l,r,n,s){const d=(0,a.up)("comp-breadcrumb"),o=(0,a.up)("q-avatar"),u=(0,a.up)("q-item-section"),p=(0,a.up)("router-link"),m=(0,a.up)("q-item-label"),c=(0,a.up)("comp-item-dropdown-btn"),_=(0,a.up)("comp-doc-list"),g=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(g,{padding:!l.isOpenInDialog},{default:(0,a.w5)((()=>[l.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(d,{key:0,class:"text-capitalize",list:[{label:t.$t("legal_entity.name_plural"),docType:"legal_entity"}]},null,8,["list"])),(0,a.Wm)(_,{ref:"docList",listTitle:t.$t("legal_entity.name_plural"),listDeletedTitle:t.$t("legal_entity.name_plural_deleted"),"pg-method":"legal_entity_list","list-sort-data":n.listSortData,"list-filter-data":n.listFilterData,newDocUrl:s.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{listItem:(0,a.w5)((({item:l})=>[(0,a.Wm)(p,{to:s.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{rounded:""},{default:(0,a.w5)((()=>[i])),_:1})])),_:1})])),_:2},1032,["to"]),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(l.title),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(u,{top:"",side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"legal_entity_update",onEdit:e=>t.$router.push(`${s.currentUrl}${l.id}`),onReloadList:e[0]||(e[0]=e=>t.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"])])),_:1},8,["padding"])}var n=l(43015);const s={props:["isOpenInDialog","ext"],components:{},mixins:[n.Z],computed:{currentUrl:()=>"/legal_entity/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}]}},methods:{},mounted(){}};var d=l(74260),o=l(24379),u=l(52035),p=l(75096),m=l(2350),c=l(7518),_=l.n(c);const g=(0,d.Z)(s,[["render",r]]),f=g;_()(s,"components",{QPage:o.Z,QItemSection:u.Z,QAvatar:p.Z,QItemLabel:m.Z})}}]);