(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[1801],{18747:(e,t,l)=>{"use strict";l.d(t,{Z:()=>s});var a=l(62809);const s=[{label:a.i18n.global.t("user.role_admin"),value:"admin"},{label:a.i18n.global.t("user.role_student"),value:"student"},{label:a.i18n.global.t("user.role_customer"),value:"customer"},{label:a.i18n.global.t("user.role_specialist"),value:"specialist"}]},21801:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>b});var a=l(34182);const s={key:1,src:"https://www.svgrepo.com/show/95333/avatar.svg"},r=(0,a.Uk)("уволен"),i=(0,a.Uk)("ожидает авторизации");function o(e,t,l,o,u,n){const d=(0,a.up)("comp-breadcrumb"),c=(0,a.up)("comp-stat-img-src"),m=(0,a.up)("q-avatar"),p=(0,a.up)("q-item-section"),w=(0,a.up)("q-item-label"),f=(0,a.up)("q-icon"),g=(0,a.up)("q-badge"),_=(0,a.up)("comp-item-dropdown-btn"),v=(0,a.up)("comp-doc-list"),k=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(k,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"text-capitalize",list:[{label:e.$t("user.name_plural"),docType:"users"}]},null,8,["list"]),(0,a.Wm)(v,{ref:"docList","doc-name":"user","pg-method":"user_list","list-sort-data":u.listSortData,"list-filter-data":u.listFilterData,"search-fld-name":"search_fullname"},{listItem:(0,a.w5)((({item:l})=>[(0,a.Wm)(p,{avatar:"",onClick:t=>e.$router.push(`${n.currentUrl}${l.id}`)},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{rounded:""},{default:(0,a.w5)((()=>[l.avatar?((0,a.wg)(),(0,a.j4)(c,{key:0,src:l.avatar},null,8,["src"])):((0,a.wg)(),(0,a.j4)("img",s))])),_:2},1024)])),_:2},1032,["onClick"]),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(l.fullname),1)])),_:2},1024),(0,a.Wm)(w,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(l.email),1)])),_:2},1024),(0,a.Wm)(w,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[l.options.telegram_id?((0,a.wg)(),(0,a.j4)(f,{key:0,name:"fab fa-telegram",class:"q-mr-sm",size:"17px",color:"primary"})):(0,a.kq)("",!0),"fired"==l.options.state?((0,a.wg)(),(0,a.j4)(g,{key:1,color:"negative",class:"q-mr-sm"},{default:(0,a.w5)((()=>[r])),_:1})):(0,a.kq)("",!0),"waiting_auth"==l.options.state?((0,a.wg)(),(0,a.j4)(g,{key:2,color:"warning",class:"q-mr-sm"},{default:(0,a.w5)((()=>[i])),_:1})):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(n.rolesI18n(l),(e=>((0,a.wg)(),(0,a.j4)(g,{key:e,color:"secondary",class:"q-mr-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(e),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024),(0,a.Wm)(p,{top:"",side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{item:l,itemProp:"fullname","is-edit":!0,"is-delete":!0,"pg-method":"user_update",onEdit:t=>e.$router.push(`${n.currentUrl}${l.id}`),onReloadList:t[1]||(t[1]=t=>e.$refs.docList.reloadList())},null,8,["item","onEdit"])])),_:2},1024)])),_:1},8,["list-sort-data","list-filter-data"])])),_:1})}var u=l(18747),n=l(88603),d=l.n(n);const c={computed:{currentUrl:()=>"/users/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"fullname",title:"ФИО"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}]}},methods:{rolesI18n(e){return e.role.filter((e=>"student"!==e)).map((e=>d().find(u.Z,{value:e}).label))}}};var m=l(24379),p=l(52035),w=l(75096),f=l(2350),g=l(24554),_=l(69721),v=l(7518),k=l.n(v);c.render=o;const b=c;k()(c,"components",{QPage:m.Z,QItemSection:p.Z,QAvatar:w.Z,QItemLabel:f.Z,QIcon:g.Z,QBadge:_.Z})}}]);