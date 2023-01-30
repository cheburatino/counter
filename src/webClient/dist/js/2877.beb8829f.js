"use strict";(self["webpackChunkCounter"]=self["webpackChunkCounter"]||[]).push([[2877],{72877:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});var o=s(75305);const l={class:"layout"},a={key:0,class:"row justify-center q-ma-lg"},r={class:"text-weight-bold",style:{"text-transform":"capitalize"}},i={class:"q-gutter-md q-mt-md"},n={class:"row wrap justify-center items-start content-start q-gutter-md",style:{"margin-left":"0"}},u=(0,o.Uk)("ok"),p=(0,o.Uk)(" Ссылка уже неактивна. Возможные причины:"),c=(0,o._)("br",null,null,-1),d=(0,o._)("br",null,null,-1),m=(0,o.Uk)(" Вы уже успешно поменяли пароль"),h=(0,o._)("br",null,null,-1),w=(0,o.Uk)(" Истекло время в течении, которого можно было воспользоваться этой ссылкой ");function g(e,t,s,g,_,k){const b=(0,o.up)("q-toolbar-title"),y=(0,o.up)("q-toolbar"),f=(0,o.up)("q-icon"),q=(0,o.up)("q-input"),v=(0,o.up)("q-btn"),$=(0,o.up)("q-card"),F=(0,o.up)("q-banner");return(0,o.wg)(),(0,o.iD)("div",l,[_.isShowForm&&!_.isSuccess?((0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)($,{class:"col-md-4 col-xs-12 q-pa-lg",style:{"min-width":"35%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o._)("span",r,(0,o.zw)(e.$t("auth.password_recovery")),1)])),_:1})])),_:1}),(0,o._)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.flds,(e=>((0,o.wg)(),(0,o.j4)(q,{key:e.model,outlined:"",type:e.type,label:e.label,modelValue:_.regForm[e.model],"onUpdate:modelValue":t=>_.regForm[e.model]=t},{prepend:(0,o.w5)((()=>[(0,o.Wm)(f,{name:e.icon},null,8,["name"])])),_:2},1032,["type","label","modelValue","onUpdate:modelValue"])))),128)),(0,o._)("div",n,[(0,o.Wm)(v,{class:"col",color:"primary",onClick:k.changePassword},{default:(0,o.w5)((()=>[u])),_:1},8,["onClick"])])])])),_:1})])):(0,o.kq)("",!0),_.isSuccess?((0,o.wg)(),(0,o.j4)(F,{key:1,class:"bg-primary text-white q-ma-lg"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"lock",color:"white"})])),action:(0,o.w5)((()=>[(0,o.Wm)(v,{flat:"",color:"white",label:e.$t("auth.password_recovery_go_to_login"),onClick:t[0]||(t[0]=t=>e.$router.push(k.homeUrl))},null,8,["label"])])),default:(0,o.w5)((()=>[(0,o.Uk)(" "+(0,o.zw)(e.$t("auth.password_recovery_success_message"))+" ",1)])),_:1})):(0,o.kq)("",!0),_.isTokenNotValid?((0,o.wg)(),(0,o.j4)(F,{key:2,class:"bg-red text-white q-ma-lg"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"error",color:"white"})])),action:(0,o.w5)((()=>[(0,o.Wm)(v,{flat:"",color:"white",label:"Перейти к авторизации",onClick:t[1]||(t[1]=t=>e.$router.push(k.homeUrl))})])),default:(0,o.w5)((()=>[p,c,d,m,h,w])),_:1})):(0,o.kq)("",!0)])}const _={computed:{homeUrl(){return"/"}},data(){return{regForm:{},flds:[{model:"password",label:this.$t("auth.password"),type:"password",icon:"lock"},{model:"passwordRepeat",label:this.$t("auth.password_repeat"),type:"password",icon:"lock"}],isTokenNotValid:null,isShowForm:!1,isSuccess:!1,token:null}},methods:{changePassword(){!this.regForm.password||this.regForm.password.length<7?this.$q.notify({message:this.$t("auth.invalid_password_must_be_more_7"),type:"negative",position:"top-right"}):this.regForm.password===this.regForm.passwordRepeat?this.$utils.postApiRequest({url:"/auth/email_auth_recover_password",params:{token:this.token,password:this.regForm.password}}).subscribe((e=>{e.ok?this.isSuccess=!0:this.$q.notify({message:e.message,type:"negative",position:"top-right"})})):this.$q.notify({message:this.$t("auth.invalid_password_wrong_repeat"),type:"negative",position:"top-right"})}},created(){let e=window.location.search;if(e.split("?").length>1){let t=e.split("?")[1].split("=");"t"===t[0]&&t.length>1&&(this.token=t[1],this.$utils.postApiRequest({url:"/auth/email_auth_recover_password",params:{token:this.token,is_token_check:!0},isShowError:!1}).subscribe((e=>{e.ok?this.isShowForm=!0:this.isTokenNotValid=!0})))}}};var k=s(74260),b=s(10151),y=s(39570),f=s(13747),q=s(34842),v=s(24554),$=s(2165),F=s(15607),U=s(7518),C=s.n(U);const W=(0,k.Z)(_,[["render",g]]),S=W;C()(_,"components",{QCard:b.Z,QToolbar:y.Z,QToolbarTitle:f.Z,QInput:q.Z,QIcon:v.Z,QBtn:$.Z,QBanner:F.Z})}}]);