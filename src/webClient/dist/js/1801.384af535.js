(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[1801],{18747:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var l=a(62462);const r=[{label:l.i18n.global.t("user.role_admin"),value:"admin"},{label:l.i18n.global.t("user.role_student"),value:"student"}]},21801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var l=a(34182);const r={key:1,src:"https://www.svgrepo.com/show/95333/avatar.svg"},s=(0,l.Uk)("уволен"),i=(0,l.Uk)("ожидает авторизации");function o(e,t,a,o,n,u){const d=(0,l.up)("comp-breadcrumb"),m=(0,l.up)("comp-stat-img-src"),c=(0,l.up)("q-avatar"),p=(0,l.up)("q-item-section"),w=(0,l.up)("q-item-label"),f=(0,l.up)("q-icon"),g=(0,l.up)("q-badge"),_=(0,l.up)("comp-item-dropdown-btn"),k=(0,l.up)("comp-doc-list"),v=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(v,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"text-capitalize",list:[{label:e.$t("user.name_plural"),docType:"users"}]},null,8,["list"]),(0,l.Wm)(k,{ref:"docList","doc-name":"user","pg-method":"user_list","list-sort-data":n.listSortData,"list-filter-data":n.listFilterData,"search-fld-name":"search_fullname"},{listItem:(0,l.w5)((({item:a})=>[(0,l.Wm)(p,{avatar:"",onClick:t=>e.$router.push(`${u.currentUrl}${a.id}`)},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{rounded:""},{default:(0,l.w5)((()=>[a.avatar?((0,l.wg)(),(0,l.j4)(m,{key:0,src:a.avatar},null,8,["src"])):((0,l.wg)(),(0,l.j4)("img",r))])),_:2},1024)])),_:2},1032,["onClick"]),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,{lines:"1"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,l.zw)(a.fullname),1)])),_:2},1024),(0,l.Wm)(w,{caption:"",lines:"2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,l.zw)(a.email),1)])),_:2},1024),(0,l.Wm)(w,{caption:"",lines:"2"},{default:(0,l.w5)((()=>[a.options.telegram_id?((0,l.wg)(),(0,l.j4)(f,{key:0,name:"fab fa-telegram",class:"q-mr-sm",size:"17px",color:"primary"})):(0,l.kq)("",!0),"fired"==a.options.state?((0,l.wg)(),(0,l.j4)(g,{key:1,color:"negative",class:"q-mr-sm"},{default:(0,l.w5)((()=>[s])),_:1})):(0,l.kq)("",!0),"waiting_auth"==a.options.state?((0,l.wg)(),(0,l.j4)(g,{key:2,color:"warning",class:"q-mr-sm"},{default:(0,l.w5)((()=>[i])),_:1})):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(u.rolesI18n(a),(e=>((0,l.wg)(),(0,l.j4)(g,{key:e,color:"secondary",class:"q-mr-sm"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,l.zw)(e),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024),(0,l.Wm)(p,{top:"",side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{item:a,itemProp:"fullname","is-edit":!0,"is-delete":!0,"pg-method":"user_update",onEdit:t=>e.$router.push(`${u.currentUrl}${a.id}`),onReloadList:t[1]||(t[1]=t=>e.$refs.docList.reloadList())},null,8,["item","onEdit"])])),_:2},1024)])),_:1},8,["list-sort-data","list-filter-data"])])),_:1})}var n=a(18747),u=a(88603),d=a.n(u);const m={computed:{currentUrl:()=>"/users/"},data(){return{listSortData:[{value:"created_at",title:"Дата"},{value:"fullname",title:"ФИО"}],listFilterData:[{value:{deleted:!1},title:"Активные"},{value:{deleted:!0},title:"Удаленные"}]}},methods:{rolesI18n(e){return e.role.filter((e=>"student"!==e)).map((e=>d().find(n.Z,{value:e}).label))}}};var c=a(24379),p=a(52035),w=a(75096),f=a(2350),g=a(24554),_=a(69721),k=a(7518),v=a.n(k);m.render=o;const b=m;v()(m,"components",{QPage:c.Z,QItemSection:p.Z,QAvatar:w.Z,QItemLabel:f.Z,QIcon:g.Z,QBadge:_.Z})}}]);