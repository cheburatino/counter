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
 		edit: 'edit',
 		file: 'file',
 		files: 'files',
 		ok: 'ok',
 		cancel: 'cancel',
 		send: 'send',
 		photo: 'photo',
 		save: 'save',
 		delete: 'delete',
	},
	auth: {
 		password_repeat: 'repeat password',
 		password_recovery: 'password recovery',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		invalid_first_name: 'you must fill in the "first name" field',
 		login: 'login',
 		password: 'password',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		registration: 'registration',
 		authorization: 'authorization',
 		invalid_last_name: 'you must fill in the "last name" field',
 		user_not_found: 'user not found',
 		invalid_user_already_exist: 'user with this email is already registered',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
	},
	profile: {
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
	},
	user: {
 		phone: 'phone',
 		grade: 'grade',
 		name_plural: 'users',
 		last_name: 'last name',
 		state: 'state',
 		state_working: 'working',
 		name_plural_deleted: 'deleted users',
 		email: 'email',
 		state_waiting_auth: 'waiting auth',
 		state_fired: 'fired',
 		first_name: 'first name',
 		roles: 'roles',
 		photo: 'photo',
 		role_admin: 'admin',
 		role_student: 'user',
	},
	menu: {
 		time: 'time',
 		ctlg_filter: 'ctlg filter',
 		ctlg_order_by: 'ctlg order by',
 		meeting: 'meeting',
 		completion_act: 'completion act',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		work_time_sheet: 'work time sheet',
 		task: 'task',
 		man: 'man',
 		ctlg_system_state: 'ctlg system state',
 		ctlg_task_state: 'ctlg task state',
 		invoice: 'invoice',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		system: 'system',
 		ctlg_task_stage: 'ctlg task stage',
 		ctlg_work_state: 'ctlg work state',
 		contract: 'contract',
 		plan_end_date_change: 'plan end date change',
 		customer_task: 'customer task',
 		user: 'users',
 		ctlg_meeting_state: 'ctlg meeting state',
 		contact: 'contact',
 		ctlg_plan_end_date_change_side: 'ctlg plan end date change side',
 		company: 'company',
 		payment: 'payment',
 		work: 'work',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		legal_entity: 'legal entity',
 		technical_task: 'technical task',
 		ctlg_history_type: 'ctlg history type',
 		ctlg_time_state: 'ctlg time state',
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
