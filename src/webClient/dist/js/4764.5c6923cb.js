"use strict";(self["webpackChunkElectron"]=self["webpackChunkElectron"]||[]).push([[4764],{4764:(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var i=s(34182);const a={key:0,class:"q-mt-sm"},l={class:"row q-col-gutter-md q-mb-sm"};function r(e,t,s,r,n,o){const m=(0,i.up)("comp-breadcrumb"),u=(0,i.up)("comp-fld"),d=(0,i.up)("telegram-login"),c=(0,i.up)("comp-item-btn-save"),p=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(p,{padding:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{list:[{label:e.$t("profile.breadcrumb_label")}]},null,8,["list"]),n.item?((0,i.wg)(),(0,i.iD)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.flds,(t=>((0,i.wg)(),(0,i.iD)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t,(t=>((0,i.wg)(),(0,i.j4)(u,{key:t.name,fld:n.item[t.name],type:t.type,onUpdate:e=>n.item[t.name]=e,label:e.$t("profile."+t.name),selectOptions:t.selectOptions?t.selectOptions():[],ajaxSelectTitle:n.item[t.ajaxSelectTitle],columnClass:t.columnClass,compName:t.compName,ext:t.ext},null,8,["fld","type","onUpdate","label","selectOptions","ajaxSelectTitle","columnClass","compName","ext"])))),128))])))),256)),e.$config.telegram&&e.$config.telegram.botName?((0,i.wg)(),(0,i.j4)(d,{key:0,isRegistered:e.currentUser.options.telegram_id},null,8,["isRegistered"])):(0,i.kq)("",!0),(0,i.Wm)(c,{onSave:o.save,onCancel:t[0]||(t[0]=t=>e.$router.push(o.docUrl))},null,8,["onSave"])])):(0,i.kq)("",!0)])),_:1})}function n(e,t,s,a,l,r){const n=(0,i.up)("vue-telegram-login");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(n,{mode:"callback","telegram-login":e.$config.telegram.botName,size:"medium",onCallback:r.cb},null,8,["telegram-login","onCallback"])])}s(92100);const o={ref:"telegram"};function m(e,t,s,a,l,r){return(0,i.wg)(),(0,i.iD)("div",o,null,512)}const u={name:"vue-telegram-login",props:{mode:{type:String,required:!0,validator(e){return["callback","redirect"].includes(e)}},telegramLogin:{type:String,required:!0,validator(e){return e.endsWith("bot")||e.endsWith("Bot")}},redirectUrl:{type:String,default:""},requestAccess:{type:String,default:"read",validator(e){return["read","write"].includes(e)}},size:{type:String,default:"large",validator(e){return["small","medium","large"].includes(e)}},userpic:{type:Boolean,default:!0},radius:{type:String}},methods:{onTelegramAuth(e){this.$emit("callback",e)}},mounted(){const e=document.createElement("script");e.async=!0,e.src="https://telegram.org/js/telegram-widget.js?9",e.setAttribute("data-size",this.size),e.setAttribute("data-userpic",this.userpic),e.setAttribute("data-telegram-login",this.telegramLogin),e.setAttribute("data-request-access",this.requestAccess),this.radius&&e.setAttribute("data-radius",this.radius),"callback"===this.mode?(window.onTelegramAuth=this.onTelegramAuth,e.setAttribute("data-onauth","window.onTelegramAuth(user)")):e.setAttribute("data-auth-url",this.redirectUrl),this.$refs.telegram.appendChild(e)}};var d=s(74260);const c=(0,d.Z)(u,[["render",m]]),p=c,g={props:["isRegistered"],components:{vueTelegramLogin:p},data(){return{isDone:!1}},methods:{cb(e){this.isRegistered||this.isDone||this.$utils.postApiRequest({url:"/api/telegram_auth",params:JSON.stringify(e)}).subscribe((e=>{e.ok&&(this.isDone=!1,this.$q.notify({message:"аккаунт в телеграм успешно зарегестрирован",type:"positive",position:"bottom-right"}))}))}}},h=(0,d.Z)(g,[["render",n]]),b=h;var f=s(43015);const v={mixins:[f.Z],components:{telegramLogin:b},computed:{docUrl:()=>"/"},data(){return{item:null,flds:[[{name:"last_name",type:"string",label:"Фамилия",required:!0},{name:"first_name",type:"string",label:"Имя",required:!0}],[{name:"phone",type:"phone",label:"Телефон"}],[{name:"avatar",compName:"comp-fld-img",label:"Фото",ext:{fldName:"avatar",uploadUrl:"upload_profile_image",methodUpdate:"current_user_update"},columnClass:"col-xs-6 col-sm-6 col-md-2"}]],optionsFlds:[]}},methods:{save(){this.$utils.saveItem.call(this,{method:"current_user_update",itemForSaveMod:{options:Object.assign(this.item.options||{})},resultModify:e=>(this.login(),this.optionsFlds&&this.optionsFlds.map((t=>e[t]=e.options[t])),e)})}},mounted(){this.item=this.currentUser,this.optionsFlds&&this.optionsFlds.map((e=>this.item[e]=this.item.options[e]))}};var y=s(24379),w=s(7518),k=s.n(w);const q=(0,d.Z)(v,[["render",r]]),A=q;k()(v,"components",{QPage:y.Z})}}]);