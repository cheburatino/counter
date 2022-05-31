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
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
 		send: 'send',
 		file: 'file',
 		photo: 'photo',
 		ok: 'ok',
 		edit: 'edit',
 		files: 'files',
	},
	auth: {
 		authorization: 'authorization',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		password: 'password',
 		password_recovery: 'password recovery',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		wrong_password: 'wrong password',
 		login: 'login',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
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
 		name_plural: 'users',
 		grade: 'grade',
 		role_admin: 'admin',
 		state_waiting_auth: 'waiting auth',
 		first_name: 'first name',
 		roles: 'roles',
 		photo: 'photo',
 		state_working: 'working',
 		name_plural_deleted: 'deleted users',
 		state: 'state',
 		phone: 'phone',
 		email: 'email',
 		last_name: 'last name',
 		role_student: 'user',
 		state_fired: 'fired',
	},
	menu: {
 		contract: 'contract',
 		customer_task: 'customer task',
 		company_man_link: 'company man link',
 		time: 'time',
 		user: 'users',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		development_task: 'development task',
 		completion_act: 'completion act',
 		work: 'work',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		ctlg_filter: 'ctlg filter',
 		ctlg_order_by: 'ctlg order by',
 		ctlg_development_task_type: 'ctlg development task type',
 		counterparty: 'counterparty',
 		digital_solution: 'digital solution',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		ctlg_contract_state: 'ctlg contract state',
 		news_from_dima: 'news from dima',
 		ctlg_development_task_state: 'ctlg development task state',
 		man: 'man',
 		comment: 'comment',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		company: 'company',
 		system: 'system',
 		task: 'task',
 		ctlg_task_type: 'ctlg task type',
 		meeting: 'meeting',
 		technical_task: 'technical task',
 		sprint: 'sprint',
 		ctlg_invoice_state: 'ctlg invoice state',
 		invoice: 'invoice',
 		payment: 'payment',
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
