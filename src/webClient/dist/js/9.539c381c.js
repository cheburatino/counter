(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"542f":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("comp-breadcrumb",{attrs:{list:[{label:"Редактирование профиля"}]}}),e.item?i("div",{staticClass:"q-mt-sm"},[e._l(e.flds,(function(t){return i("div",{staticClass:"row q-col-gutter-md q-mb-sm"},e._l(t,(function(t){return i("comp-fld",{key:t.name,attrs:{fld:e.item[t.name],type:t.type,label:t.label,selectOptions:t.selectOptions?t.selectOptions():[],ajaxSelectTitle:e.item[t.ajaxSelectTitle],columnClass:t.columnClass,compName:t.compName,ext:t.ext},on:{update:function(i){e.item[t.name]=i}}})})),1)})),e.$config.telegram&&e.$config.telegram.botName?i("telegram-login",{attrs:{isRegistered:e.currentUser.options.telegram_id}}):e._e(),i("comp-item-btn-save",{on:{save:e.save,cancel:function(t){return e.$router.push(e.docUrl)}}})],2):e._e()],1)},s=[],r=(i("f751"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("vue-telegram-login",{attrs:{mode:"callback","telegram-login":e.$config.telegram.botName,size:"medium"},on:{callback:e.cb}})],1)}),a=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"telegram"})},o=[],u=(i("aef6"),i("6762"),i("2fdb"),{name:"vue-telegram-login",props:{mode:{type:String,required:!0,validator:function(e){return["callback","redirect"].includes(e)}},telegramLogin:{type:String,required:!0,validator:function(e){return e.endsWith("bot")||e.endsWith("Bot")}},redirectUrl:{type:String,default:""},requestAccess:{type:String,default:"read",validator:function(e){return["read","write"].includes(e)}},size:{type:String,default:"large",validator:function(e){return["small","medium","large"].includes(e)}},userpic:{type:Boolean,default:!0},radius:{type:String}},methods:{onTelegramAuth:function(e){this.$emit("callback",e)}},mounted:function(){var e=document.createElement("script");e.async=!0,e.src="https://telegram.org/js/telegram-widget.js?9",e.setAttribute("data-size",this.size),e.setAttribute("data-userpic",this.userpic),e.setAttribute("data-telegram-login",this.telegramLogin),e.setAttribute("data-request-access",this.requestAccess),this.radius&&e.setAttribute("data-radius",this.radius),"callback"===this.mode?(window.onTelegramAuth=this.onTelegramAuth,e.setAttribute("data-onauth","window.onTelegramAuth(user)")):e.setAttribute("data-auth-url",this.redirectUrl),this.$refs.telegram.appendChild(e)}}),c=u,m=i("2877"),d=Object(m["a"])(c,l,o,!1,null,null,null),p=d.exports,g={props:["isRegistered"],components:{vueTelegramLogin:p},data:function(){return{isDone:!1}},methods:{cb:function(e){var t=this;this.isRegistered||this.isDone||this.$utils.postApiRequest({url:"/api/telegram_auth",params:JSON.stringify(e)}).subscribe((function(e){e.ok&&(t.isDone=!1,t.$q.notify({message:"аккаунт в телеграм успешно зарегестрирован",type:"positive",position:"bottom-right"}))}))}}},f=g,h=Object(m["a"])(f,r,a,!1,null,null,null),b=h.exports,v=i("f488"),_={mixins:[v["a"]],components:{telegramLogin:b},computed:{docUrl:function(){return"/"}},data:function(){return{item:null,flds:[[{name:"last_name",type:"string",label:"Фамилия",required:!0},{name:"first_name",type:"string",label:"Имя",required:!0}],[{name:"phone",type:"phone",label:"Телефон"}],[{name:"avatar",compName:"comp-fld-img",label:"Фото",ext:{fldName:"avatar",uploadUrl:"upload_profile_image",methodUpdate:"current_user_update"},columnClass:"col-xs-6 col-sm-6 col-md-2"}]],optionsFlds:[]}},methods:{save:function(){var e=this;this.$utils.saveItem.call(this,{method:"current_user_update",itemForSaveMod:{options:Object.assign(this.item.options||{})},resultModify:function(t){return e.login(),e.optionsFlds&&e.optionsFlds.map((function(e){return t[e]=t.options[e]})),t}})}},mounted:function(){var e=this;this.item=this.currentUser,this.optionsFlds&&this.optionsFlds.map((function(t){return e.$set(e.item,t,e.item.options[t])}))}},y=_,A=Object(m["a"])(y,n,s,!1,null,null,null);t["default"]=A.exports}}]);