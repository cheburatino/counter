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
 		files: 'files',
 		ok: 'ok',
 		photo: 'photo',
 		edit: 'edit',
	},
	auth: {
 		invalid_last_name: 'you must fill in the "last name" field',
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
 		login: 'login',
 		password_repeat: 'repeat password',
 		password_recovery_success_message: 'password changed successfully',
 		register: 'register',
 		invalid_email: '"email" field is filled incorrectly',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_first_name: 'you must fill in the "first name" field',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		registration: 'registration',
 		authorization: 'authorization',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		password: 'password',
 		password_recovery: 'password recovery',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_user_already_exist: 'user with this email is already registered',
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
 		first_name: 'first name',
 		phone: 'phone',
 		grade: 'grade',
 		state_working: 'working',
 		roles: 'roles',
 		state: 'state',
 		photo: 'photo',
 		role_student: 'user',
 		last_name: 'last name',
 		email: 'email',
 		state_fired: 'fired',
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		role_admin: 'admin',
 		state_waiting_auth: 'waiting auth',
	},
	menu: {
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		ctlg_order_by: 'ctlg order by',
 		counterparty: 'counterparty',
 		company: 'company',
 		invoice: 'invoice',
 		system: 'system',
 		development_task: 'development task',
 		ctlg_filter: 'ctlg filter',
 		ctlg_development_task_state: 'ctlg development task state',
 		contract: 'contract',
 		task: 'task',
 		user: 'users',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		digital_solution: 'digital solution',
 		comment: 'comment',
 		news_from_dima: 'news from dima',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		ctlg_development_task_type: 'ctlg development task type',
 		customer_task: 'customer task',
 		sprint: 'sprint',
 		company_man_link: 'company man link',
 		time: 'time',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		technical_task: 'technical task',
 		man: 'man',
 		completion_act: 'completion act',
 		meeting: 'meeting',
 		work: 'work',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
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
