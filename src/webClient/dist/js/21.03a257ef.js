(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{d3af:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("comp-breadcrumb",{attrs:{list:[{label:"Задача",to:"/task",docType:"task",icon:"fas fa-tasks"},{label:t.item&&t.item.title?""+t.item.title:"",docType:"edit"}]}}),t.item?a("div",{staticClass:"q-mt-sm"},[t._l(t.flds,(function(e){return a("div",{staticClass:"row q-col-gutter-md q-mb-sm"},[Array.isArray(e)?t._l(e,(function(e){return a("comp-fld",{key:e.name,attrs:{fld:t.item[e.name],type:e.type,label:e.label,selectOptions:e.selectOptions?e.selectOptions():[],ajaxSelectTitle:t.item[e.ajaxSelectTitle],columnClass:e.columnClass,compName:e.compName,readonly:!!e.readonly&&e.readonly(),pgMethod:e.pgMethod},on:{update:function(a){t.item[e.name]=a}}})})):t._e(),"task_type_id"===e.name?[a("ref-table-id",{attrs:{id:t.id,task_type_id:t.item.task_type_id,table_id:t.item.table_id,task_type_title:t.item.task_type_title,table_id_title:t.item.table_id_title,table_name:t.item.table_name},on:{update:t.updateRefTable}})]:t._e()],2)})),a("comp-item-btn-save",{on:{save:t.save,cancel:function(e){return t.$router.push(t.docUrl)}}})],2):t._e()],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"row q-col-gutter-md q-mb-sm"},[a("div",{staticClass:"col-xs-12 col-sm-6 col-md-4"},[a("comp-fld-ref-search",{attrs:{label:"Тип задачи",item:t.task_type_title,pgMethod:"task_type_list",readonly:t.id>0},on:{update:t.updateTaskType}})],1),t.tableName?a("div",{staticClass:"col-xs-12 col-sm-6 col-md-4"},[a("comp-fld-ref-search",{ref:"tableIdSearch",attrs:{label:t.$config.tablesForTask[t.tableName],item:t.table_id_title,pgMethod:t.tableName+"_list",readonly:t.id>0},on:{update:t.updateTableId}})],1):t._e()])])},d=[],n={props:["id","task_type_id","table_id","task_type_title","table_name","table_id_title"],data:function(){return{localTaskTypeId:null,localTableId:null,tableName:null}},methods:{updateTaskType:function(t){var e=this,a=t.id,l=t.item;this.tableName=l.item.table_name,this.localTaskTypeId=a,this.localTableId=null,this.$nextTick((function(){e.$refs.tableIdSearch&&e.$refs.tableIdSearch.clear()})),this.tableName||this.update()},updateTableId:function(t){var e=t.id;this.localTableId=e,this.update()},update:function(){this.$emit("update",{task_type_id:this.localTaskTypeId,table_id:this.localTableId})}},mounted:function(){this.localTaskTypeId=this.task_type_id,this.localTableId=this.table_id,this.tableName=this.table_name}},o=n,c=a("2877"),r=Object(c["a"])(o,s,d,!1,null,null,null),m=r.exports,u={components:{refTableId:m},props:["id"],computed:{docUrl:function(){return"/task"}},data:function(){var t=this;return{item:null,flds:[[{name:"executor_id",type:"userId",label:"Исполнитель",ajaxSelectTitle:"executor_fullname",readonly:function(){return t.id>0}}],{name:"task_type_id"},{name:"table_id"},[{name:"deadline",type:"datetime",label:"deadline",readonly:function(){return!0}}],[{name:"content",type:"string",label:"Текст",columnClass:"col-xs-12 col-sm-8 col-md-8"}]],optionsFlds:[]}},methods:{updateRefTable:function(t){var e=t.task_type_id,a=t.table_id;this.item.task_type_id=e,this.item.table_id=a},resultModify:function(t){return t},save:function(){this.$utils.saveItem.call(this,{method:"task_update",itemForSaveMod:{},resultModify:this.resultModify})}},mounted:function(){var t=this,e=function(e){t.item=t.resultModify(e)};this.$utils.getDocItemById.call(this,{method:"task_get_by_id",cb:e})}},p=u,_=Object(c["a"])(p,l,i,!1,null,null,null);e["default"]=_.exports}}]);