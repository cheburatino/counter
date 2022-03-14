import ctlg_request_state from './ctlg_request_state'
import ctlg_model_state from './ctlg_model_state'
import ctlg_model_type from './ctlg_model_type'
import ctlg_request_priority from './ctlg_request_priority'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_digital_solution_specialist_role from './ctlg_digital_solution_specialist_role'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_functional_requirement_specialist_role from './ctlg_functional_requirement_specialist_role'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_task_role from './ctlg_task_role'
import ctlg_work_state from './ctlg_work_state'
import ctlg_work_specialist_role from './ctlg_work_specialist_role'
import ctlg_bug_state from './ctlg_bug_state'
import ctlg_contract_state from './ctlg_contract_state'
import ctlg_technical_task_state from './ctlg_technical_task_state'
import ctlg_technical_task_work_state from './ctlg_technical_task_work_state'
import ctlg_completion_act_state from './ctlg_completion_act_state'
import ctlg_invoice_state from './ctlg_invoice_state'
import ctlg_filter from './ctlg_filter'
import ctlg_order_by from './ctlg_order_by'
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import digital_solution from './digital_solution'
import model from './model'
import functional_requirement from './functional_requirement'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import sprint from './sprint'
import task from './task'
import work from './work'
import customer_task from './customer_task'
import bug from './bug'
import task_specialist_link from './task_specialist_link'
import system_customer_agent_link from './system_customer_agent_link'
import request_customer_agent_link from './request_customer_agent_link'
import functional_requirement_customer_agent_link from './functional_requirement_customer_agent_link'
import digital_solution_specialist_link from './digital_solution_specialist_link'
import functional_requirement_specialist_link from './functional_requirement_specialist_link'
import digital_solution_customer_agent_link from './digital_solution_customer_agent_link'
import bug_customer_agent_link from './bug_customer_agent_link'
import work_specialist_link from './work_specialist_link'
import work_task_link from './work_task_link'
import company_man_link from './company_man_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	user: {
 		last_name: 'last name',
 		phone: 'phone',
 		email: 'email',
 		role_admin: 'admin',
 		state_waiting_auth: 'waiting auth',
 		name_plural: 'users',
 		state: 'state',
 		role_student: 'user',
 		state_fired: 'fired',
 		name_plural_deleted: 'deleted users',
 		state_working: 'working',
 		first_name: 'first name',
 		roles: 'roles',
 		grade: 'grade',
 		photo: 'photo',
	},
	menu: {
 		ctlg_time_type: 'ctlg time type',
 		request: 'request',
 		ctlg_model_type: 'ctlg model type',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_bug_state: 'ctlg bug state',
 		bug_customer_agent_link: 'bug customer agent link',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_filter: 'ctlg filter',
 		meeting: 'meeting',
 		completion_act: 'completion act',
 		ctlg_model_state: 'ctlg model state',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_contract_state: 'ctlg contract state',
 		technical_task: 'technical task',
 		model: 'model',
 		digital_solution: 'digital solution',
 		payment: 'payment',
 		work_task_link: 'work task link',
 		invoice: 'invoice',
 		sprint: 'sprint',
 		company_man_link: 'company man link',
 		ctlg_task_role: 'ctlg task role',
 		system_customer_agent_link: 'system customer agent link',
 		comment: 'comment',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		contract: 'contract',
 		counterparty: 'counterparty',
 		news_from_dima: 'news from dima',
 		ctlg_work_specialist_role: 'ctlg work specialist role',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		company: 'company',
 		customer_task: 'customer task',
 		task_specialist_link: 'task specialist link',
 		ctlg_functional_requirement_specialist_role: 'ctlg functional requirement specialist role',
 		ctlg_order_by: 'ctlg order by',
 		system: 'system',
 		work_specialist_link: 'work specialist link',
 		work: 'work',
 		request_customer_agent_link: 'request customer agent link',
 		user: 'users',
 		ctlg_work_state: 'ctlg work state',
 		functional_requirement_customer_agent_link: 'functional requirement customer agent link',
 		functional_requirement: 'functional requirement',
 		bug: 'bug',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		ctlg_request_priority: 'ctlg request priority',
 		task: 'task',
 		functional_requirement_specialist_link: 'functional requirement specialist link',
 		man: 'man',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		time: 'time',
	},
	message: {
 		delete: 'delete',
 		file: 'file',
 		save: 'save',
 		cancel: 'cancel',
 		send: 'send',
 		files: 'files',
 		photo: 'photo',
 		ok: 'ok',
 		edit: 'edit',
	},
	auth: {
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_first_name: 'you must fill in the "first name" field',
 		password_repeat: 'repeat password',
 		invalid_last_name: 'you must fill in the "last name" field',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		registration: 'registration',
 		invalid_email: '"email" field is filled incorrectly',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		login: 'login',
 		password_recovery_success_message: 'password changed successfully',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_user_already_exist: 'user with this email is already registered',
 		user_not_found: 'user not found',
 		password: 'password',
	},
	profile: {
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
	},
	ctlg_request_state,
	ctlg_model_state,
	ctlg_model_type,
	ctlg_request_priority,
	ctlg_time_type,
	ctlg_digital_solution_state,
	ctlg_digital_solution_specialist_role,
	ctlg_functional_requirement_state,
	ctlg_functional_requirement_specialist_role,
	ctlg_task_type,
	ctlg_task_state,
	ctlg_task_role,
	ctlg_work_state,
	ctlg_work_specialist_role,
	ctlg_bug_state,
	ctlg_contract_state,
	ctlg_technical_task_state,
	ctlg_technical_task_work_state,
	ctlg_completion_act_state,
	ctlg_invoice_state,
	ctlg_filter,
	ctlg_order_by,
	meeting,
	contract,
	technical_task,
	counterparty,
	company,
	man,
	system,
	request,
	digital_solution,
	model,
	functional_requirement,
	invoice,
	payment,
	completion_act,
	sprint,
	task,
	work,
	customer_task,
	bug,
	task_specialist_link,
	system_customer_agent_link,
	request_customer_agent_link,
	functional_requirement_customer_agent_link,
	digital_solution_specialist_link,
	functional_requirement_specialist_link,
	digital_solution_customer_agent_link,
	bug_customer_agent_link,
	work_specialist_link,
	work_task_link,
	company_man_link,
	time,
	comment,
	news_from_dima,
}
