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
 		delete: 'delete',
 		edit: 'edit',
 		send: 'send',
 		files: 'files',
 		photo: 'photo',
 		cancel: 'cancel',
 		file: 'file',
	},
	auth: {
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		login: 'login',
 		registration: 'registration',
 		password_recovery: 'password recovery',
 		password_recovery_go_to_login: 'go to authorization',
 		invalid_first_name: 'you must fill in the "first name" field',
 		password: 'password',
 		authorization: 'authorization',
 		forgot_password: 'forgot password',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		user_not_found: 'user not found',
 		password_repeat: 'repeat password',
 		password_recovery_success_message: 'password changed successfully',
 		register: 'register',
 		invalid_email: '"email" field is filled incorrectly',
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
 		state_waiting_auth: 'waiting auth',
 		role_student: 'user',
 		first_name: 'first name',
 		roles: 'roles',
 		phone: 'phone',
 		last_name: 'last name',
 		email: 'email',
 		role_admin: 'admin',
 		grade: 'grade',
 		photo: 'photo',
 		state_working: 'working',
 		state_fired: 'fired',
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		state: 'state',
	},
	menu: {
 		functional_requirement: 'functional requirement',
 		invoice: 'invoice',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		work_specialist_link: 'work specialist link',
 		news_from_dima: 'news from dima',
 		ctlg_request_priority: 'ctlg request priority',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_state: 'ctlg task state',
 		meeting: 'meeting',
 		system_customer_agent_link: 'system customer agent link',
 		work_task_link: 'work task link',
 		time: 'time',
 		user: 'users',
 		ctlg_work_specialist_role: 'ctlg work specialist role',
 		request: 'request',
 		task_specialist_link: 'task specialist link',
 		customer_task_customer_agent_link: 'customer task customer agent link',
 		ctlg_task_type: 'ctlg task type',
 		system: 'system',
 		sprint: 'sprint',
 		task: 'task',
 		customer_task: 'customer task',
 		request_customer_agent_link: 'request customer agent link',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		counterparty: 'counterparty',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_task_role: 'ctlg task role',
 		ctlg_work_state: 'ctlg work state',
 		technical_task: 'technical task',
 		digital_solution: 'digital solution',
 		functional_requirement_customer_agent_link: 'functional requirement customer agent link',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_bug_state: 'ctlg bug state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		contract: 'contract',
 		man: 'man',
 		bug_customer_agent_link: 'bug customer agent link',
 		ctlg_request_state: 'ctlg request state',
 		company: 'company',
 		work: 'work',
 		bug: 'bug',
 		company_man_link: 'company man link',
 		comment: 'comment',
 		ctlg_functional_requirement_specialist_role: 'ctlg functional requirement specialist role',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		functional_requirement_specialist_link: 'functional requirement specialist link',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
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
