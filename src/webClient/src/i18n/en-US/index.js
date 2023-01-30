import ctlg_history_type from './ctlg_history_type'
import ctlg_system_state from './ctlg_system_state'
import ctlg_meeting_state from './ctlg_meeting_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_stage from './ctlg_task_stage'
import ctlg_task_state from './ctlg_task_state'
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
import meeting from './meeting'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import work from './work'
import time from './time'

export default {
	message: {
 		delete: 'delete',
 		send: 'send',
 		file: 'file',
 		files: 'files',
 		ok: 'ok',
 		save: 'save',
 		photo: 'photo',
 		cancel: 'cancel',
 		edit: 'edit',
	},
	auth: {
 		password_recovery: 'password recovery',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_first_name: 'you must fill in the "first name" field',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		password: 'password',
 		invalid_user_already_exist: 'user with this email is already registered',
 		user_not_found: 'user not found',
 		password_recovery_go_to_login: 'go to authorization',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_last_name: 'you must fill in the "last name" field',
 		login: 'login',
 		registration: 'registration',
 		authorization: 'authorization',
 		password_recovery_success_message: 'password changed successfully',
 		forgot_password: 'forgot password',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		password_repeat: 'repeat password',
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
 		phone: 'phone',
 		role_student: 'user',
 		state_waiting_auth: 'waiting auth',
 		last_name: 'last name',
 		state_fired: 'fired',
 		name_plural: 'users',
 		roles: 'roles',
 		photo: 'photo',
 		email: 'email',
 		role_admin: 'admin',
 		name_plural_deleted: 'deleted users',
 		first_name: 'first name',
 		state: 'state',
 		grade: 'grade',
 		state_working: 'working',
	},
	menu: {
 		payment: 'payment',
 		contract: 'contract',
 		invoice: 'invoice',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		ctlg_time_state: 'ctlg time state',
 		system: 'system',
 		work: 'work',
 		user: 'users',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_task_stage: 'ctlg task stage',
 		ctlg_contract_state: 'ctlg contract state',
 		contact: 'contact',
 		technical_task: 'technical task',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_filter: 'ctlg filter',
 		task: 'task',
 		meeting: 'meeting',
 		time: 'time',
 		ctlg_work_state: 'ctlg work state',
 		work_time_sheet: 'work time sheet',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		ctlg_order_by: 'ctlg order by',
 		legal_entity: 'legal entity',
 		completion_act: 'completion act',
 		ctlg_history_type: 'ctlg history type',
 		ctlg_system_state: 'ctlg system state',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		company: 'company',
	},
	ctlg_history_type,
	ctlg_system_state,
	ctlg_meeting_state,
	ctlg_task_type,
	ctlg_task_stage,
	ctlg_task_state,
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
	meeting,
	invoice,
	payment,
	completion_act,
	work,
	time,
}
