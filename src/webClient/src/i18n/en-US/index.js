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
	profile: {
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
	},
	user: {
 		grade: 'grade',
 		email: 'email',
 		state_working: 'working',
 		name_plural: 'users',
 		phone: 'phone',
 		photo: 'photo',
 		state: 'state',
 		role_student: 'user',
 		state_fired: 'fired',
 		role_admin: 'admin',
 		state_waiting_auth: 'waiting auth',
 		name_plural_deleted: 'deleted users',
 		last_name: 'last name',
 		first_name: 'first name',
 		roles: 'roles',
	},
	menu: {
 		ctlg_customer_task_state: 'ctlg customer task state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		ctlg_filter: 'ctlg filter',
 		technical_task: 'technical task',
 		development_task: 'development task',
 		ctlg_invoice_state: 'ctlg invoice state',
 		ctlg_development_task_state: 'ctlg development task state',
 		ctlg_development_task_type: 'ctlg development task type',
 		customer_task: 'customer task',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		man: 'man',
 		system: 'system',
 		payment: 'payment',
 		sprint: 'sprint',
 		company_man_link: 'company man link',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_order_by: 'ctlg order by',
 		meeting: 'meeting',
 		counterparty: 'counterparty',
 		task: 'task',
 		invoice: 'invoice',
 		completion_act: 'completion act',
 		news_from_dima: 'news from dima',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_work_state: 'ctlg work state',
 		company: 'company',
 		digital_solution: 'digital solution',
 		work: 'work',
 		time: 'time',
 		user: 'users',
 		comment: 'comment',
 		contract: 'contract',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_type: 'ctlg task type',
	},
	message: {
 		send: 'send',
 		photo: 'photo',
 		file: 'file',
 		files: 'files',
 		ok: 'ok',
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
 		edit: 'edit',
	},
	auth: {
 		password_repeat: 'repeat password',
 		forgot_password: 'forgot password',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		register: 'register',
 		login: 'login',
 		password: 'password',
 		registration: 'registration',
 		authorization: 'authorization',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_go_to_login: 'go to authorization',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_user_already_exist: 'user with this email is already registered',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		password_recovery: 'password recovery',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
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
