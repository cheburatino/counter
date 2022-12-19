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
 		files: 'files',
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
 		edit: 'edit',
 		file: 'file',
 		ok: 'ok',
 		send: 'send',
 		photo: 'photo',
	},
	auth: {
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		register: 'register',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		wrong_password: 'wrong password',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		password_recovery_go_to_login: 'go to authorization',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		password: 'password',
 		password_recovery_success_message: 'password changed successfully',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		login: 'login',
 		forgot_password: 'forgot password',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_last_name: 'you must fill in the "last name" field',
	},
	profile: {
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
	},
	user: {
 		role_student: 'user',
 		state_working: 'working',
 		name_plural_deleted: 'deleted users',
 		last_name: 'last name',
 		phone: 'phone',
 		state_fired: 'fired',
 		state: 'state',
 		email: 'email',
 		role_admin: 'admin',
 		name_plural: 'users',
 		roles: 'roles',
 		state_waiting_auth: 'waiting auth',
 		first_name: 'first name',
 		grade: 'grade',
 		photo: 'photo',
	},
	menu: {
 		ctlg_time_state: 'ctlg time state',
 		man: 'man',
 		customer_task: 'customer task',
 		work: 'work',
 		ctlg_system_state: 'ctlg system state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		ctlg_filter: 'ctlg filter',
 		ctlg_order_by: 'ctlg order by',
 		legal_entity: 'legal entity',
 		meeting: 'meeting',
 		invoice: 'invoice',
 		payment: 'payment',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_task_type: 'ctlg task type',
 		company: 'company',
 		system: 'system',
 		task: 'task',
 		time: 'time',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		completion_act: 'completion act',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		contact: 'contact',
 		work_time_sheet: 'work time sheet',
 		user: 'users',
 		ctlg_history_type: 'ctlg history type',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_contract_state: 'ctlg contract state',
 		contract: 'contract',
 		technical_task: 'technical task',
 		ctlg_plan_end_date_change_side: 'ctlg plan end date change side',
 		ctlg_task_stage: 'ctlg task stage',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		plan_end_date_change: 'plan end date change',
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
