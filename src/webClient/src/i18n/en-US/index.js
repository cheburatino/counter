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
	message: {
 		photo: 'photo',
 		save: 'save',
 		delete: 'delete',
 		send: 'send',
 		file: 'file',
 		ok: 'ok',
 		cancel: 'cancel',
 		edit: 'edit',
 		files: 'files',
	},
	auth: {
 		invalid_email: '"email" field is filled incorrectly',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		registration: 'registration',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		wrong_password: 'wrong password',
 		password: 'password',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password_repeat: 'repeat password',
 		forgot_password: 'forgot password',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		login: 'login',
 		password_recovery_go_to_login: 'go to authorization',
 		register: 'register',
	},
	profile: {
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
	},
	user: {
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
 		state_fired: 'fired',
 		grade: 'grade',
 		phone: 'phone',
 		email: 'email',
 		last_name: 'last name',
 		roles: 'roles',
 		photo: 'photo',
 		role_student: 'user',
 		first_name: 'first name',
 		name_plural_deleted: 'deleted users',
 		state: 'state',
 		role_admin: 'admin',
 		name_plural: 'users',
	},
	menu: {
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_time_state: 'ctlg time state',
 		system: 'system',
 		sprint: 'sprint',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		ctlg_filter: 'ctlg filter',
 		technical_task: 'technical task',
 		completion_act: 'completion act',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		ctlg_order_by: 'ctlg order by',
 		work: 'work',
 		ctlg_contract_state: 'ctlg contract state',
 		time: 'time',
 		news_from_dima: 'news from dima',
 		ctlg_development_task_state: 'ctlg development task state',
 		company: 'company',
 		customer_task: 'customer task',
 		task: 'task',
 		invoice: 'invoice',
 		payment: 'payment',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_invoice_state: 'ctlg invoice state',
 		user: 'users',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		contract: 'contract',
 		man: 'man',
 		digital_solution: 'digital solution',
 		ctlg_system_state: 'ctlg system state',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		ctlg_development_task_type: 'ctlg development task type',
 		meeting: 'meeting',
 		legal_entity: 'legal entity',
 		development_task: 'development task',
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
