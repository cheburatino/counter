import ctlg_time_type from './ctlg_time_type'
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
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import counterparty from './counterparty'
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
import company_man_link from './company_man_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	message: {
 		ok: 'ok',
 		save: 'save',
 		delete: 'delete',
 		send: 'send',
 		photo: 'photo',
 		cancel: 'cancel',
 		edit: 'edit',
 		file: 'file',
 		files: 'files',
	},
	auth: {
 		authorization: 'authorization',
 		password_recovery_success_message: 'password changed successfully',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_user_already_exist: 'user with this email is already registered',
 		wrong_password: 'wrong password',
 		login: 'login',
 		password: 'password',
 		password_repeat: 'repeat password',
 		password_recovery: 'password recovery',
 		invalid_first_name: 'you must fill in the "first name" field',
 		user_not_found: 'user not found',
 		register: 'register',
 		invalid_last_name: 'you must fill in the "last name" field',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		registration: 'registration',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
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
 		role_admin: 'admin',
 		state_fired: 'fired',
 		first_name: 'first name',
 		state: 'state',
 		photo: 'photo',
 		state_waiting_auth: 'waiting auth',
 		name_plural: 'users',
 		last_name: 'last name',
 		roles: 'roles',
 		role_student: 'user',
 		state_working: 'working',
 		email: 'email',
 		name_plural_deleted: 'deleted users',
 		phone: 'phone',
 		grade: 'grade',
	},
	menu: {
 		ctlg_work_state: 'ctlg work state',
 		technical_task: 'technical task',
 		customer_task: 'customer task',
 		sprint: 'sprint',
 		user: 'users',
 		ctlg_task_state: 'ctlg task state',
 		development_task: 'development task',
 		comment: 'comment',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		meeting: 'meeting',
 		work: 'work',
 		ctlg_filter: 'ctlg filter',
 		completion_act: 'completion act',
 		contract: 'contract',
 		digital_solution: 'digital solution',
 		task: 'task',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_development_task_type: 'ctlg development task type',
 		ctlg_invoice_state: 'ctlg invoice state',
 		man: 'man',
 		payment: 'payment',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		company_man_link: 'company man link',
 		news_from_dima: 'news from dima',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		counterparty: 'counterparty',
 		invoice: 'invoice',
 		ctlg_order_by: 'ctlg order by',
 		ctlg_development_task_state: 'ctlg development task state',
 		company: 'company',
 		system: 'system',
 		time: 'time',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_contract_state: 'ctlg contract state',
	},
	ctlg_time_type,
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
	meeting,
	contract,
	technical_task,
	counterparty,
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
	company_man_link,
	time,
	comment,
	news_from_dima,
}
