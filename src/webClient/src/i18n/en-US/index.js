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
import ctlg_development_task_state from './ctlg_development_task_state'
import ctlg_development_task_type from './ctlg_development_task_type'
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import digital_solution from './digital_solution'
import development_task from './development_task'
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
	message: {
 		edit: 'edit',
 		files: 'files',
 		ok: 'ok',
 		save: 'save',
 		cancel: 'cancel',
 		photo: 'photo',
 		delete: 'delete',
 		send: 'send',
 		file: 'file',
	},
	auth: {
 		password_recovery_success_message: 'password changed successfully',
 		register: 'register',
 		user_not_found: 'user not found',
 		password: 'password',
 		registration: 'registration',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		login: 'login',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		wrong_password: 'wrong password',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password_repeat: 'repeat password',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
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
 		roles: 'roles',
 		state_waiting_auth: 'waiting auth',
 		photo: 'photo',
 		email: 'email',
 		name_plural_deleted: 'deleted users',
 		first_name: 'first name',
 		state: 'state',
 		phone: 'phone',
 		state_working: 'working',
 		name_plural: 'users',
 		last_name: 'last name',
 		grade: 'grade',
 		role_admin: 'admin',
 		role_student: 'user',
 		state_fired: 'fired',
	},
	menu: {
 		ctlg_task_role: 'ctlg task role',
 		completion_act: 'completion act',
 		sprint: 'sprint',
 		ctlg_functional_requirement_specialist_role: 'ctlg functional requirement specialist role',
 		ctlg_bug_state: 'ctlg bug state',
 		ctlg_invoice_state: 'ctlg invoice state',
 		request: 'request',
 		development_task: 'development task',
 		company_man_link: 'company man link',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_development_task_type: 'ctlg development task type',
 		digital_solution: 'digital solution',
 		invoice: 'invoice',
 		news_from_dima: 'news from dima',
 		ctlg_model_type: 'ctlg model type',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		work: 'work',
 		bug: 'bug',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		ctlg_contract_state: 'ctlg contract state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		man: 'man',
 		comment: 'comment',
 		counterparty: 'counterparty',
 		functional_requirement: 'functional requirement',
 		task: 'task',
 		task_specialist_link: 'task specialist link',
 		technical_task: 'technical task',
 		request_customer_agent_link: 'request customer agent link',
 		ctlg_work_specialist_role: 'ctlg work specialist role',
 		contract: 'contract',
 		company: 'company',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_work_state: 'ctlg work state',
 		customer_task: 'customer task',
 		system_customer_agent_link: 'system customer agent link',
 		functional_requirement_specialist_link: 'functional requirement specialist link',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_filter: 'ctlg filter',
 		meeting: 'meeting',
 		payment: 'payment',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		user: 'users',
 		ctlg_model_state: 'ctlg model state',
 		ctlg_request_priority: 'ctlg request priority',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_development_task_state: 'ctlg development task state',
 		work_specialist_link: 'work specialist link',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		system: 'system',
 		model: 'model',
 		functional_requirement_customer_agent_link: 'functional requirement customer agent link',
 		work_task_link: 'work task link',
 		bug_customer_agent_link: 'bug customer agent link',
 		ctlg_order_by: 'ctlg order by',
 		time: 'time',
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
	ctlg_development_task_state,
	ctlg_development_task_type,
	meeting,
	contract,
	technical_task,
	counterparty,
	company,
	man,
	system,
	request,
	digital_solution,
	development_task,
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
