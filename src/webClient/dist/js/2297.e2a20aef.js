(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[2297],{82297:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>f});var a=l(34182);const i=(0,a.Wm)("img",{src:"image/contract.svg",alt:""},null,-1);function r(t,e,l,r,n,o){const d=(0,a.up)("comp-breadcrumb"),s=(0,a.up)("q-avatar"),c=(0,a.up)("q-item-section"),u=(0,a.up)("router-link"),p=(0,a.up)("q-item-label"),m=(0,a.up)("comp-item-dropdown-btn"),f=(0,a.up)("comp-doc-list"),w=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(w,{padding:!l.isOpenInDialog},{default:(0,a.w5)((()=>[l.isOpenInDialog?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(d,{key:0,class:"text-capitalize",list:[{label:t.$t("contract.name_plural"),docType:"contract"}]},null,8,["list"])),(0,a.Wm)(f,{ref:"docList",listTitle:t.$t("contract.name_plural"),listDeletedTitle:t.$t("contract.name_plural_deleted"),"pg-method":"contract_list","list-sort-data":n.listSortData,"list-filter-data":n.listFilterData,newDocUrl:o.currentUrl+"new",ext:l.ext,"search-fld-name":"search_text",readonly:!1},{listItem:(0,a.w5)((({item:l})=>[(0,a.Wm)(u,{to:o.currentUrl+l.id,style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{rounded:""},{default:(0,a.w5)((()=>[i])),_:1})])),_:1})])),_:2},1032,["to"]),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(l.title),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(c,{top:"",side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{item:l,itemProp:"title","is-edit":!0,"is-delete":!0,fkProp:"","pg-method":"contract_update",onEdit:e=>t.$router.push(`${o.currentUrl}${l.id}`),onReloadList:e[1]||(e[1]=e=>t.$refs.docList.reloadList())},null,8,["item","is-delete","onEdit"])])),_:2},1024)])),_:1},8,["listTitle","listDeletedTitle","list-sort-data","list-filter-data","newDocUrl","ext"])])),_:1},8,["padding"])}var n=l(43015);const o={props:["isOpenInDialog","ext"],mixins:[n.Z],computed:{currentUrl:()=>"/contract/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"title",title:"Название"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}]}},methods:{},mounted(){}};var d=l(24379),s=l(52035),c=l(75096),u=l(2350),p=l(7518),m=l.n(p);o.render=r;const f=o;m()(o,"components",{QPage:d.Z,QItemSection:s.Z,QAvatar:c.Z,QItemLabel:u.Z})}}]);