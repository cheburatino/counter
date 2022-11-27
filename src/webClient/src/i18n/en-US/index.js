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
import company from './company'
import system from './system'
import legal_entity from './legal_entity'
import contract from './contract'
import work_time_sheet from './work_time_sheet'
import technical_task from './technical_task'
import task from './task'
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
 		cancel: 'cancel',
 		send: 'send',
 		files: 'files',
 		photo: 'photo',
 		save: 'save',
 		delete: 'delete',
 		edit: 'edit',
 		file: 'file',
 		ok: 'ok',
	},
	auth: {
 		password: 'password',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_first_name: 'you must fill in the "first name" field',
 		password_repeat: 'repeat password',
 		authorization: 'authorization',
 		register: 'register',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		registration: 'registration',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		login: 'login',
 		password_recovery: 'password recovery',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		wrong_password: 'wrong password',
	},
	profile: {
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
	},
	user: {
 		email: 'email',
 		state_fired: 'fired',
 		state: 'state',
 		phone: 'phone',
 		role_admin: 'admin',
 		state_working: 'working',
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		state_waiting_auth: 'waiting auth',
 		first_name: 'first name',
 		roles: 'roles',
 		photo: 'photo',
 		role_student: 'user',
 		last_name: 'last name',
 		grade: 'grade',
	},
	menu: {
 		ctlg_technical_task_state: 'ctlg technical task state',
 		ctlg_filter: 'ctlg filter',
 		ctlg_order_by: 'ctlg order by',
 		technical_task: 'technical task',
 		time: 'time',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		legal_entity: 'legal entity',
 		task: 'task',
 		meeting: 'meeting',
 		user: 'users',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		customer_task: 'customer task',
 		payment: 'payment',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		system: 'system',
 		contract: 'contract',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_invoice_state: 'ctlg invoice state',
 		company: 'company',
 		invoice: 'invoice',
 		completion_act: 'completion act',
 		ctlg_system_state: 'ctlg system state',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_work_state: 'ctlg work state',
 		work_time_sheet: 'work time sheet',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_time_state: 'ctlg time state',
 		man: 'man',
 		work: 'work',
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
	company,
	system,
	legal_entity,
	contract,
	work_time_sheet,
	technical_task,
	task,
	meeting,
	man,
	customer_task,
	invoice,
	payment,
	completion_act,
	work,
	time,
}
