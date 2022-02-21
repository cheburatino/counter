import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
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
import ctlg_customer_task_state from './ctlg_customer_task_state'
import ctlg_contract_state from './ctlg_contract_state'
import ctlg_technical_task_state from './ctlg_technical_task_state'
import ctlg_technical_task_work_state from './ctlg_technical_task_work_state'
import ctlg_completion_act_state from './ctlg_completion_act_state'
import ctlg_invoice_state from './ctlg_invoice_state'
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import digital_solution from './digital_solution'
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
import customer_task_customer_agent_link from './customer_task_customer_agent_link'
import bug_customer_agent_link from './bug_customer_agent_link'
import work_specialist_link from './work_specialist_link'
import work_task_link from './work_task_link'
import company_man_link from './company_man_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	message: {
 		ok: 'ok',
 		save: 'save',
 		edit: 'edit',
 		send: 'send',
 		cancel: 'cancel',
 		delete: 'delete',
 		file: 'file',
 		files: 'files',
 		photo: 'photo',
	},
	auth: {
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		password: 'password',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_first_name: 'you must fill in the "first name" field',
 		password_recovery: 'password recovery',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_user_already_exist: 'user with this email is already registered',
 		wrong_password: 'wrong password',
 		authorization: 'authorization',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_go_to_login: 'go to authorization',
 		invalid_last_name: 'you must fill in the "last name" field',
 		login: 'login',
 		forgot_password: 'forgot password',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
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
 		name_plural: 'users',
 		grade: 'grade',
 		role_admin: 'admin',
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
 		state_fired: 'fired',
 		name_plural_deleted: 'deleted users',
 		state: 'state',
 		roles: 'roles',
 		phone: 'phone',
 		photo: 'photo',
 		email: 'email',
 		role_student: 'user',
 		last_name: 'last name',
 		first_name: 'first name',
	},
	menu: {
 		customer_task_customer_agent_link: 'customer task customer agent link',
 		work_task_link: 'work task link',
 		ctlg_request_priority: 'ctlg request priority',
 		ctlg_task_role: 'ctlg task role',
 		ctlg_technical_task_work_state: 'ctlg technical task work state',
 		company: 'company',
 		ctlg_bug_state: 'ctlg bug state',
 		request_customer_agent_link: 'request customer agent link',
 		user: 'users',
 		sprint: 'sprint',
 		task: 'task',
 		work_specialist_link: 'work specialist link',
 		meeting: 'meeting',
 		man: 'man',
 		system: 'system',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_completion_act_state: 'ctlg completion act state',
 		contract: 'contract',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_contract_state: 'ctlg contract state',
 		technical_task: 'technical task',
 		work: 'work',
 		request: 'request',
 		digital_solution: 'digital solution',
 		functional_requirement: 'functional requirement',
 		payment: 'payment',
 		ctlg_functional_requirement_specialist_role: 'ctlg functional requirement specialist role',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_invoice_state: 'ctlg invoice state',
 		bug: 'bug',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_task_state: 'ctlg task state',
 		completion_act: 'completion act',
 		functional_requirement_specialist_link: 'functional requirement specialist link',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_technical_task_state: 'ctlg technical task state',
 		functional_requirement_customer_agent_link: 'functional requirement customer agent link',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		task_specialist_link: 'task specialist link',
 		company_man_link: 'company man link',
 		time: 'time',
 		news_from_dima: 'news from dima',
 		system_customer_agent_link: 'system customer agent link',
 		bug_customer_agent_link: 'bug customer agent link',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		invoice: 'invoice',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		counterparty: 'counterparty',
 		ctlg_time_type: 'ctlg time type',
 		comment: 'comment',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_work_specialist_role: 'ctlg work specialist role',
 		customer_task: 'customer task',
	},
	ctlg_electron_skill,
	ctlg_request_state,
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
	ctlg_customer_task_state,
	ctlg_contract_state,
	ctlg_technical_task_state,
	ctlg_technical_task_work_state,
	ctlg_completion_act_state,
	ctlg_invoice_state,
	meeting,
	contract,
	technical_task,
	counterparty,
	company,
	man,
	system,
	request,
	digital_solution,
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
	customer_task_customer_agent_link,
	bug_customer_agent_link,
	work_specialist_link,
	work_task_link,
	company_man_link,
	time,
	comment,
	news_from_dima,
}
