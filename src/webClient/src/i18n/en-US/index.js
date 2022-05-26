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
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
	},
	user: {
 		name_plural_deleted: 'deleted users',
 		phone: 'phone',
 		grade: 'grade',
 		email: 'email',
 		photo: 'photo',
 		role_admin: 'admin',
 		name_plural: 'users',
 		last_name: 'last name',
 		first_name: 'first name',
 		roles: 'roles',
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
 		state: 'state',
 		role_student: 'user',
 		state_fired: 'fired',
	},
	menu: {
 		payment: 'payment',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		ctlg_development_task_type: 'ctlg development task type',
 		digital_solution: 'digital solution',
 		development_task: 'development task',
 		ctlg_meeting_state: 'ctlg meeting state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		invoice: 'invoice',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		technical_task: 'technical task',
 		man: 'man',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		ctlg_order_by: 'ctlg order by',
 		company_man_link: 'company man link',
 		news_from_dima: 'news from dima',
 		user: 'users',
 		meeting: 'meeting',
 		customer_task: 'customer task',
 		task: 'task',
 		comment: 'comment',
 		contract: 'contract',
 		sprint: 'sprint',
 		work: 'work',
 		time: 'time',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_filter: 'ctlg filter',
 		company: 'company',
 		system: 'system',
 		completion_act: 'completion act',
 		counterparty: 'counterparty',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_development_task_state: 'ctlg development task state',
	},
	message: {
 		ok: 'ok',
 		file: 'file',
 		delete: 'delete',
 		edit: 'edit',
 		send: 'send',
 		files: 'files',
 		photo: 'photo',
 		save: 'save',
 		cancel: 'cancel',
	},
	auth: {
 		password_recovery: 'password recovery',
 		password_recovery_go_to_login: 'go to authorization',
 		user_not_found: 'user not found',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		password: 'password',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		register: 'register',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		wrong_password: 'wrong password',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		authorization: 'authorization',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_last_name: 'you must fill in the "last name" field',
 		login: 'login',
 		forgot_password: 'forgot password',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
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
