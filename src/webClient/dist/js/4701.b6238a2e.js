(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[4701],{4701:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>_});var a=l(34182);const i=(0,a.Wm)("img",{src:"image/customer_task.png",alt:""},null,-1);function r(t,e,l,r,s,o){const d=(0,a.up)("comp-breadcrumb"),u=(0,a.up)("q-avatar"),n=(0,a.up)("q-item-section"),m=(0,a.up)("router-link"),c=(0,a.up)("q-item-label"),p=(0,a.up)("comp-item-dropdown-btn"),_=(0,a.up)("comp-doc-list"),f=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(f,{padding:!l.isOpenInDialog},{default:(0,a.w5)((()=>[l.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(d,{key:0,class:"text-capitalize",list:[{label:t.$t("customer_task.name_plural"),docType:"customer_task"}]},null,8,["list"])),(0,a.Wm)(_,{ref:"docList",listTitle:t.$t("customer_task.name_plural"),listDeletedTitle:t.$t("customer_task.name_plural_deleted"),"pg-method":"customer_task_list","list-sort-data":s.listSortData,"list-filter-data":s.listFilterData,newDocUrl:o.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{listItem:(0,a.w5)((({item:l})=>[(0,a.Wm)(m,{to:o.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{rounded:""},{default:(0,a.w5)((()=>[i])),_:1})])),_:1})])),_:2},1032,["to"]),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(l.title),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(n,{top:"",side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"customer_task_update",onEdit:e=>t.$router.push(`${o.currentUrl}${l.id}`),onReloadList:e[1]||(e[1]=e=>t.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"])])),_:1},8,["padding"])}var s=l(43015);const o={props:["isOpenInDialog","ext"],mixins:[s.Z],computed:{currentUrl:()=>"/customer_task/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}]}},methods:{},mounted(){}};var d=l(24379),u=l(52035),n=l(75096),m=l(2350),c=l(7518),p=l.n(c);o.render=r;const _=o;p()(o,"components",{QPage:d.Z,QItemSection:u.Z,QAvatar:n.Z,QItemLabel:m.Z})}}]);