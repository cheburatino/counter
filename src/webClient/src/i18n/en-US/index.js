import ctlg_system_state from './ctlg_system_state'
import ctlg_meeting_state from './ctlg_meeting_state'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
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
import ctlg_development_task_state from './ctlg_development_task_state'
import ctlg_development_task_type from './ctlg_development_task_type'
import ctlg_time_state from './ctlg_time_state'
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import legal_entity from './legal_entity'
import company from './company'
import man from './man'
import system from './system'
import digital_solution from './digital_solution'
import development_task from './development_task'
import customer_task from './customer_task'
import task from './task'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import sprint from './sprint'
import work from './work'
import time from './time'
import news_from_dima from './news_from_dima'

export default {
	profile: {
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
	},
	user: {
 		first_name: 'first name',
 		roles: 'roles',
 		phone: 'phone',
 		role_student: 'user',
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
 		name_plural: 'users',
 		last_name: 'last name',
 		state: 'state',
 		grade: 'grade',
 		state_fired: 'fired',
 		name_plural_deleted: 'deleted users',
 		photo: 'photo',
 		email: 'email',
 		role_admin: 'admin',
	},
	menu: {
 		ctlg_development_task_state: 'ctlg development task state',
 		ctlg_development_task_type: 'ctlg development task type',
 		meeting: 'meeting',
 		digital_solution: 'digital solution',
 		completion_act: 'completion act',
 		time: 'time',
 		user: 'users',
 		ctlg_order_by: 'ctlg order by',
 		ctlg_time_state: 'ctlg time state',
 		news_from_dima: 'news from dima',
 		ctlg_task_state: 'ctlg task state',
 		company: 'company',
 		invoice: 'invoice',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		payment: 'payment',
 		sprint: 'sprint',
 		contract: 'contract',
 		development_task: 'development task',
 		task: 'task',
 		ctlg_system_state: 'ctlg system state',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_filter: 'ctlg filter',
 		man: 'man',
 		system: 'system',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		work: 'work',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		technical_task: 'technical task',
 		legal_entity: 'legal entity',
 		customer_task: 'customer task',
	},
	message: {
 		save: 'save',
 		cancel: 'cancel',
 		ok: 'ok',
 		edit: 'edit',
 		send: 'send',
 		file: 'file',
 		files: 'files',
 		photo: 'photo',
 		delete: 'delete',
	},
	auth: {
 		invalid_user_already_exist: 'user with this email is already registered',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		wrong_password: 'wrong password',
 		login: 'login',
 		password_recovery_go_to_login: 'go to authorization',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		password: 'password',
 		password_repeat: 'repeat password',
 		register: 'register',
 		invalid_email: '"email" field is filled incorrectly',
 		user_not_found: 'user not found',
 		registration: 'registration',
 		password_recovery_success_message: 'password changed successfully',
 		forgot_password: 'forgot password',
 		invalid_last_name: 'you must fill in the "last name" field',
	},
	ctlg_system_state,
	ctlg_meeting_state,
	ctlg_digital_solution_state,
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
	ctlg_development_task_state,
	ctlg_development_task_type,
	ctlg_time_state,
	meeting,
	contract,
	technical_task,
	legal_entity,
	company,
	man,
	system,
	digital_solution,
	development_task,
	customer_task,
	task,
	invoice,
	payment,
	completion_act,
	sprint,
	work,
	time,
	news_from_dima,
}
