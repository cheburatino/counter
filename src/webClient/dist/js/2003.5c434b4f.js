"use strict";(self["webpackChunkCounter"]=self["webpackChunkCounter"]||[]).push([[2003],{92003:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var r=s(75305);const i={class:"layout"},n={key:0,style:{"margin-top":"20px"}},l=(0,r._)("div",{class:"row justify-center"},[(0,r._)("img",{src:"https://a.radikal.ru/a01/1806/fc/49f02b5a592a.jpg",alt:""})],-1),o={class:"row justify-center"},a={class:"row justify-center",style:{"margin-top":"50px"}},u=(0,r.Uk)("Перейти к авторизации");function c(e,t,s,c,p,h){const d=(0,r.up)("q-banner"),m=(0,r.up)("q-btn");return(0,r.wg)(),(0,r.iD)("div",i,[p.isTokenNotValid?((0,r.wg)(),(0,r.iD)("div",n,[l,(0,r._)("div",o,[(0,r.Wm)(d,{"inline-actions":"",class:"bg-grey-3 q-pa-md",innerHTML:e.$t("auth.check_user_email_message")},null,8,["innerHTML"])]),(0,r._)("div",a,[(0,r.Wm)(m,{onClick:t[0]||(t[0]=t=>e.$router.push(h.homeUrl)),color:"primary"},{default:(0,r.w5)((()=>[u])),_:1})])])):(0,r.kq)("",!0)])}const p={props:["isCheckUserEmail"],computed:{homeUrl(){return"/"}},data(){return{isTokenNotValid:null}},mounted(){let e=window.location.search;if(e.split("?").length>1){let t=e.split("?")[1].split("=");"t"===t[0]&&t.length>1&&this.$utils.postApiRequest({url:"/auth/check_user_email",params:{token:t[1]},isShowError:!1}).subscribe((e=>{e.ok?(this.$currentUser.login({user:e.result}),this.$router.push(this.homeUrl)):this.isTokenNotValid=!0}))}}};var h=s(74260),d=s(15607),m=s(2165),k=s(7518),g=s.n(k);const f=(0,h.Z)(p,[["render",c]]),w=f;g()(p,"components",{QBanner:d.Z,QBtn:m.Z})}}]);