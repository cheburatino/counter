"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[2376],{22376:(t,e,l)=>{l.r(e),l.d(e,{default:()=>w});var a=l(34182);const i=(0,a._)("img",{src:"image/bug.png",alt:""},null,-1);function r(t,e,l,r,d,u){const n=(0,a.up)("comp-breadcrumb"),s=(0,a.up)("q-avatar"),o=(0,a.up)("q-item-section"),p=(0,a.up)("router-link"),c=(0,a.up)("q-item-label"),m=(0,a.up)("comp-item-dropdown-btn"),g=(0,a.up)("comp-doc-list"),f=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(f,{padding:!l.isOpenInDialog},{default:(0,a.w5)((()=>[l.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(n,{key:0,class:"text-capitalize",list:[{label:t.$t("bug.name_plural"),docType:"bug"}]},null,8,["list"])),(0,a.Wm)(g,{ref:"docList",listTitle:t.$t("bug.name_plural"),listDeletedTitle:t.$t("bug.name_plural_deleted"),"pg-method":"bug_list","list-sort-data":d.listSortData,"list-filter-data":d.listFilterData,newDocUrl:u.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{listItem:(0,a.w5)((({item:l})=>[(0,a.Wm)(p,{to:u.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{rounded:""},{default:(0,a.w5)((()=>[i])),_:1})])),_:1})])),_:2},1032,["to"]),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(l.title),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(o,{top:"",side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"bug_update",onEdit:e=>t.$router.push(`${u.currentUrl}${l.id}`),onReloadList:e[0]||(e[0]=e=>t.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"])])),_:1},8,["padding"])}var d=l(43015);const u={props:["isOpenInDialog","ext"],mixins:[d.Z],computed:{currentUrl:()=>"/bug/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}]}},methods:{},mounted(){}};var n=l(74260),s=l(24379),o=l(52035),p=l(75096),c=l(2350),m=l(7518),g=l.n(m);const f=(0,n.Z)(u,[["render",r]]),w=f;g()(u,"components",{QPage:s.Z,QItemSection:o.Z,QAvatar:p.Z,QItemLabel:c.Z})}}]);