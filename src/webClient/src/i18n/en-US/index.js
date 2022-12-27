import ctlg_plan_end_date_change_side from './ctlg_plan_end_date_change_side'
import ctlg_history_type from './ctlg_history_type'
import ctlg_system_state from './ctlg_system_state'
import ctlg_meeting_state from './ctlg_meeting_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_stage from './ctlg_task_stage'
import ctlg_task_state from './ctlg_task_state'
import ctlg_customer_task_state from './ctlg_customer_task_state'
import ctlg_work_state from './ctlg_work_state'
import ctlg_contract_state from './ctlg_contract_state'
import ctlg_technical_task_state from './ctlg_technical_task_state'
import ctlg_technical_task_work_state from './ctlg_technical_task_work_state'
import ctlg_completion_act_state from './ctlg_completion_act_state'
import ctlg_invoice_state from './ctlg_invoice_state'
import ctlg_filter from './ctlg_filter'
import ctlg_order_by from './ctlg_order_by'
import ctlg_time_state from './ctlg_time_state'
import company from './company'
import contact from './contact'
import system from './system'
import legal_entity from './legal_entity'
import contract from './contract'
import work_time_sheet from './work_time_sheet'
import technical_task from './technical_task'
import task from './task'
import plan_end_date_change from './plan_end_date_change'
import meeting from './meeting'
import man from './man'
import customer_task from './customer_task'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import work from './work'
import time from './time'

export default {
	message: {
 		delete: 'delete',
 		files: 'files',
 		photo: 'photo',
 		save: 'save',
 		cancel: 'cancel',
 		edit: 'edit',
 		send: 'send',
 		file: 'file',
 		ok: 'ok',
	},
	auth: {
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		password_recovery_go_to_login: 'go to authorization',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		authorization: 'authorization',
 		password_recovery_success_message: 'password changed successfully',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_last_name: 'you must fill in the "last name" field',
 		login: 'login',
 		forgot_password: 'forgot password',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		password: 'password',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		register: 'register',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password_recovery: 'password recovery',
	},
	profile: {
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
	},
	user: {
 		photo: 'photo',
 		role_admin: 'admin',
 		role_student: 'user',
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		last_name: 'last name',
 		first_name: 'first name',
 		roles: 'roles',
 		grade: 'grade',
 		state_fired: 'fired',
 		state: 'state',
 		state_waiting_auth: 'waiting auth',
 		phone: 'phone',
 		email: 'email',
 		state_working: 'working',
	},
	menu: {
 		ctlg_customer_task_state: 'ctlg customer task state',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		ctlg_time_state: 'ctlg time state',
 		contract: 'contract',
 		technical_task: 'technical task',
 		plan_end_date_change: 'plan end date change',
 		ctlg_task_state: 'ctlg task state',
 		man: 'man',
 		ctlg_invoice_state: 'ctlg invoice state',
 		company: 'company',
 		task: 'task',
 		meeting: 'meeting',
 		ctlg_task_stage: 'ctlg task stage',
 		contact: 'contact',
 		legal_entity: 'legal entity',
 		ctlg_history_type: 'ctlg history type',
 		ctlg_system_state: 'ctlg system state',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_order_by: 'ctlg order by',
 		work: 'work',
 		ctlg_plan_end_date_change_side: 'ctlg plan end date change side',
 		time: 'time',
 		ctlg_filter: 'ctlg filter',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		work_time_sheet: 'work time sheet',
 		payment: 'payment',
 		completion_act: 'completion act',
 		user: 'users',
 		system: 'system',
 		invoice: 'invoice',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		customer_task: 'customer task',
 		ctlg_meeting_state: 'ctlg meeting state',
	},
	ctlg_plan_end_date_change_side,
	ctlg_history_type,
	ctlg_system_state,
	ctlg_meeting_state,
	ctlg_task_type,
	ctlg_task_stage,
	ctlg_task_state,
	ctlg_customer_task_state,
	ctlg_work_state,
	ctlg_contract_state,
	ctlg_technical_task_state,
	ctlg_technical_task_work_state,
	ctlg_completion_act_state,
	ctlg_invoice_state,
	ctlg_filter,
	ctlg_order_by,
	ctlg_time_state,
	company,
	contact,
	system,
	legal_entity,
	contract,
	work_time_sheet,
	technical_task,
	task,
	plan_end_date_change,
	meeting,
	man,
	customer_task,
	invoice,
	payment,
	completion_act,
	work,
	time,
}
