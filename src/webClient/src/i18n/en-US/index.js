import ctlg_system_state from './ctlg_system_state'
import ctlg_meeting_state from './ctlg_meeting_state'
import ctlg_task_type from './ctlg_task_type'
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
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import work_time_sheet from './work_time_sheet'
import legal_entity from './legal_entity'
import company from './company'
import man from './man'
import system from './system'
import customer_task from './customer_task'
import task from './task'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import work from './work'
import time from './time'

export default {
	menu: {
 		ctlg_filter: 'ctlg filter',
 		contract: 'contract',
 		work_time_sheet: 'work time sheet',
 		invoice: 'invoice',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_contract_state: 'ctlg contract state',
 		task: 'task',
 		user: 'users',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		ctlg_time_state: 'ctlg time state',
 		work: 'work',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		legal_entity: 'legal entity',
 		ctlg_system_state: 'ctlg system state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		company: 'company',
 		completion_act: 'completion act',
 		time: 'time',
 		customer_task: 'customer task',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_order_by: 'ctlg order by',
 		meeting: 'meeting',
 		technical_task: 'technical task',
 		system: 'system',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_invoice_state: 'ctlg invoice state',
 		man: 'man',
 		payment: 'payment',
	},
	message: {
 		photo: 'photo',
 		save: 'save',
 		send: 'send',
 		delete: 'delete',
 		edit: 'edit',
 		file: 'file',
 		files: 'files',
 		ok: 'ok',
 		cancel: 'cancel',
	},
	auth: {
 		invalid_last_name: 'you must fill in the "last name" field',
 		password_repeat: 'repeat password',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_first_name: 'you must fill in the "first name" field',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		password: 'password',
 		authorization: 'authorization',
 		password_recovery_go_to_login: 'go to authorization',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		login: 'login',
 		registration: 'registration',
 		invalid_user_already_exist: 'user with this email is already registered',
 		wrong_password: 'wrong password',
 		password_recovery: 'password recovery',
 		forgot_password: 'forgot password',
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
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
 		last_name: 'last name',
 		first_name: 'first name',
 		roles: 'roles',
 		photo: 'photo',
 		role_admin: 'admin',
 		state_fired: 'fired',
 		phone: 'phone',
 		grade: 'grade',
 		role_student: 'user',
 		email: 'email',
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		state: 'state',
	},
	ctlg_system_state,
	ctlg_meeting_state,
	ctlg_task_type,
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
	meeting,
	contract,
	technical_task,
	work_time_sheet,
	legal_entity,
	company,
	man,
	system,
	customer_task,
	task,
	invoice,
	payment,
	completion_act,
	work,
	time,
}
