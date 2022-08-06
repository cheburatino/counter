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
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
	},
	user: {
 		roles: 'roles',
 		phone: 'phone',
 		email: 'email',
 		state_waiting_auth: 'waiting auth',
 		state_fired: 'fired',
 		name_plural_deleted: 'deleted users',
 		photo: 'photo',
 		first_name: 'first name',
 		role_student: 'user',
 		state: 'state',
 		grade: 'grade',
 		role_admin: 'admin',
 		state_working: 'working',
 		name_plural: 'users',
 		last_name: 'last name',
	},
	menu: {
 		ctlg_task_state: 'ctlg task state',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		ctlg_order_by: 'ctlg order by',
 		meeting: 'meeting',
 		contract: 'contract',
 		man: 'man',
 		system: 'system',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_development_task_state: 'ctlg development task state',
 		ctlg_development_task_type: 'ctlg development task type',
 		development_task: 'development task',
 		invoice: 'invoice',
 		news_from_dima: 'news from dima',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		customer_task: 'customer task',
 		completion_act: 'completion act',
 		ctlg_work_state: 'ctlg work state',
 		technical_task: 'technical task',
 		company: 'company',
 		ctlg_system_state: 'ctlg system state',
 		legal_entity: 'legal entity',
 		time: 'time',
 		user: 'users',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_time_state: 'ctlg time state',
 		payment: 'payment',
 		sprint: 'sprint',
 		work: 'work',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_filter: 'ctlg filter',
 		digital_solution: 'digital solution',
 		task: 'task',
	},
	message: {
 		cancel: 'cancel',
 		edit: 'edit',
 		send: 'send',
 		file: 'file',
 		ok: 'ok',
 		save: 'save',
 		photo: 'photo',
 		delete: 'delete',
 		files: 'files',
	},
	auth: {
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_last_name: 'you must fill in the "last name" field',
 		login: 'login',
 		password: 'password',
 		password_repeat: 'repeat password',
 		forgot_password: 'forgot password',
 		wrong_password: 'wrong password',
 		password_recovery: 'password recovery',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_user_already_exist: 'user with this email is already registered',
 		user_not_found: 'user not found',
 		registration: 'registration',
 		authorization: 'authorization',
 		password_recovery_go_to_login: 'go to authorization',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_first_name: 'you must fill in the "first name" field',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
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
