"use strict";(self["webpackChunkCounter"]=self["webpackChunkCounter"]||[]).push([[1801],{18747:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(91912);const s=[{label:l.i18n.global.t("user.role_admin"),value:"admin"},{label:l.i18n.global.t("user.role_student"),value:"student"},{label:l.i18n.global.t("user.role_customer"),value:"customer"},{label:l.i18n.global.t("user.role_specialist"),value:"specialist"}]},21801:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var l=a(75305);const s={key:1,src:"https://www.svgrepo.com/show/95333/avatar.svg"},r=(0,l.Uk)("уволен"),i=(0,l.Uk)("ожидает авторизации");function o(e,t,a,o,u,n){const d=(0,l.up)("comp-breadcrumb"),m=(0,l.up)("comp-stat-img-src"),c=(0,l.up)("q-avatar"),p=(0,l.up)("q-item-section"),w=(0,l.up)("q-item-label"),f=(0,l.up)("q-icon"),g=(0,l.up)("q-badge"),_=(0,l.up)("comp-item-dropdown-btn"),v=(0,l.up)("comp-doc-list"),k=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(k,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"text-capitalize",list:[{label:e.$t("user.name_plural"),docType:"users"}]},null,8,["list"]),(0,l.Wm)(v,{ref:"docList","doc-name":"user","pg-method":"user_list","list-sort-data":u.listSortData,"list-filter-data":u.listFilterData,"search-fld-name":"search_fullname"},{listItem:(0,l.w5)((({item:a})=>[(0,l.Wm)(p,{avatar:"",onClick:t=>e.$router.push(`${n.currentUrl}${a.id}`)},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{rounded:""},{default:(0,l.w5)((()=>[a.avatar?((0,l.wg)(),(0,l.j4)(m,{key:0,src:a.avatar},null,8,["src"])):((0,l.wg)(),(0,l.iD)("img",s))])),_:2},1024)])),_:2},1032,["onClick"]),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,{lines:"1"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,l.zw)(a.fullname),1)])),_:2},1024),(0,l.Wm)(w,{caption:"",lines:"2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,l.zw)(a.email),1)])),_:2},1024),(0,l.Wm)(w,{caption:"",lines:"2"},{default:(0,l.w5)((()=>[a.options.telegram_id?((0,l.wg)(),(0,l.j4)(f,{key:0,name:"fab fa-telegram",class:"q-mr-sm",size:"17px",color:"primary"})):(0,l.kq)("",!0),"fired"==a.options.state?((0,l.wg)(),(0,l.j4)(g,{key:1,color:"negative",class:"q-mr-sm"},{default:(0,l.w5)((()=>[r])),_:1})):(0,l.kq)("",!0),"waiting_auth"==a.options.state?((0,l.wg)(),(0,l.j4)(g,{key:2,color:"warning",class:"q-mr-sm"},{default:(0,l.w5)((()=>[i])),_:1})):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.rolesI18n(a),(e=>((0,l.wg)(),(0,l.j4)(g,{key:e,color:"secondary",class:"q-mr-sm"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,l.zw)(e),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024),(0,l.Wm)(p,{top:"",side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{item:a,itemProp:"fullname","is-edit":!0,"is-delete":!0,"pg-method":"user_update",onEdit:t=>e.$router.push(`${n.currentUrl}${a.id}`),onReloadList:t[0]||(t[0]=t=>e.$refs.docList.reloadList())},null,8,["item","onEdit"])])),_:2},1024)])),_:1},8,["list-sort-data","list-filter-data"])])),_:1})}var u=a(18747),n=a(88603),d=a.n(n);const m={computed:{currentUrl:()=>"/users/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"fullname",title:"ФИО"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}]}},methods:{rolesI18n(e){return e.role.filter((e=>"student"!==e)).map((e=>d().find(u.Z,{value:e}).label))}}};var c=a(74260),p=a(24379),w=a(52035),f=a(75096),g=a(2350),_=a(24554),v=a(69721),k=a(7518),b=a.n(k);const h=(0,c.Z)(m,[["render",o]]),q=h;b()(m,"components",{QPage:p.Z,QItemSection:w.Z,QAvatar:f.Z,QItemLabel:g.Z,QIcon:_.Z,QBadge:v.Z})}}]);