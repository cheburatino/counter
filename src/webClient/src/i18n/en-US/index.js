import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_request_priority from './ctlg_request_priority'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_digital_solution_specialist_role from './ctlg_digital_solution_specialist_role'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_task_role from './ctlg_task_role'
import ctlg_work_state from './ctlg_work_state'
import ctlg_bug_state from './ctlg_bug_state'
import ctlg_customer_task_state from './ctlg_customer_task_state'
import meeting from './meeting'
import contract from './contract'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import digital_solution from './digital_solution'
import functional_requirement from './functional_requirement'
import invoice from './invoice'
import task from './task'
import work from './work'
import customer_task from './customer_task'
import bug from './bug'
import task_specialist_link from './task_specialist_link'
import system_customer_agent_link from './system_customer_agent_link'
import request_customer_agent_link from './request_customer_agent_link'
import functional_requirement_customer_agent_link from './functional_requirement_customer_agent_link'
import digital_solution_specialist_link from './digital_solution_specialist_link'
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
	menu: {
 		company: 'company',
 		task: 'task',
 		work: 'work',
 		bug_customer_agent_link: 'bug customer agent link',
 		digital_solution: 'digital solution',
 		invoice: 'invoice',
 		company_man_link: 'company man link',
 		ctlg_request_priority: 'ctlg request priority',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_task_role: 'ctlg task role',
 		counterparty: 'counterparty',
 		customer_task: 'customer task',
 		task_specialist_link: 'task specialist link',
 		request_customer_agent_link: 'request customer agent link',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		contract: 'contract',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		news_from_dima: 'news from dima',
 		system_customer_agent_link: 'system customer agent link',
 		functional_requirement_customer_agent_link: 'functional requirement customer agent link',
 		comment: 'comment',
 		user: 'users',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_work_state: 'ctlg work state',
 		man: 'man',
 		bug: 'bug',
 		functional_requirement: 'functional requirement',
 		work_task_link: 'work task link',
 		customer_task_customer_agent_link: 'customer task customer agent link',
 		work_specialist_link: 'work specialist link',
 		time: 'time',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_bug_state: 'ctlg bug state',
 		meeting: 'meeting',
 		request: 'request',
 		system: 'system',
 		digital_solution_specialist_link: 'digital solution specialist link',
	},
	message: {
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
 		file: 'file',
 		files: 'files',
 		photo: 'photo',
 		ok: 'ok',
 		edit: 'edit',
 		send: 'send',
	},
	auth: {
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		register: 'register',
 		invalid_first_name: 'you must fill in the "first name" field',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		user_not_found: 'user not found',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_user_already_exist: 'user with this email is already registered',
 		invalid_last_name: 'you must fill in the "last name" field',
 		wrong_password: 'wrong password',
 		login: 'login',
 		password: 'password',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		password_recovery_success_message: 'password changed successfully',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
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
 		name_plural_deleted: 'deleted users',
 		state: 'state',
 		grade: 'grade',
 		role_student: 'user',
 		state_waiting_auth: 'waiting auth',
 		roles: 'roles',
 		name_plural: 'users',
 		first_name: 'first name',
 		role_admin: 'admin',
 		state_fired: 'fired',
 		last_name: 'last name',
 		phone: 'phone',
 		photo: 'photo',
 		email: 'email',
 		state_working: 'working',
	},
	ctlg_electron_skill,
	ctlg_request_state,
	ctlg_request_priority,
	ctlg_time_type,
	ctlg_digital_solution_state,
	ctlg_digital_solution_specialist_role,
	ctlg_functional_requirement_state,
	ctlg_task_type,
	ctlg_task_state,
	ctlg_task_role,
	ctlg_work_state,
	ctlg_bug_state,
	ctlg_customer_task_state,
	meeting,
	contract,
	counterparty,
	company,
	man,
	system,
	request,
	digital_solution,
	functional_requirement,
	invoice,
	task,
	work,
	customer_task,
	bug,
	task_specialist_link,
	system_customer_agent_link,
	request_customer_agent_link,
	functional_requirement_customer_agent_link,
	digital_solution_specialist_link,
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
