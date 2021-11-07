import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
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
	profile: {
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
	},
	user: {
 		state: 'state',
 		name_plural: 'users',
 		first_name: 'first name',
 		photo: 'photo',
 		role_admin: 'admin',
 		role_student: 'user',
 		state_working: 'working',
 		state_fired: 'fired',
 		last_name: 'last name',
 		phone: 'phone',
 		grade: 'grade',
 		email: 'email',
 		name_plural_deleted: 'deleted users',
 		roles: 'roles',
 		state_waiting_auth: 'waiting auth',
	},
	menu: {
 		ctlg_time_type: 'ctlg time type',
 		counterparty: 'counterparty',
 		request: 'request',
 		work_task_link: 'work task link',
 		comment: 'comment',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_bug_state: 'ctlg bug state',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		bug_customer_agent_link: 'bug customer agent link',
 		customer_task_customer_agent_link: 'customer task customer agent link',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_task_state: 'ctlg task state',
 		invoice: 'invoice',
 		task: 'task',
 		functional_requirement_customer_agent_link: 'functional requirement customer agent link',
 		company: 'company',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		bug: 'bug',
 		task_specialist_link: 'task specialist link',
 		work_specialist_link: 'work specialist link',
 		user: 'users',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		meeting: 'meeting',
 		digital_solution: 'digital solution',
 		work: 'work',
 		news_from_dima: 'news from dima',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		contract: 'contract',
 		company_man_link: 'company man link',
 		ctlg_task_role: 'ctlg task role',
 		ctlg_work_state: 'ctlg work state',
 		man: 'man',
 		functional_requirement: 'functional requirement',
 		time: 'time',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_task_type: 'ctlg task type',
 		system: 'system',
 		customer_task: 'customer task',
 		request_customer_agent_link: 'request customer agent link',
	},
	message: {
 		delete: 'delete',
 		send: 'send',
 		files: 'files',
 		photo: 'photo',
 		ok: 'ok',
 		cancel: 'cancel',
 		file: 'file',
 		save: 'save',
 		edit: 'edit',
	},
	auth: {
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_user_already_exist: 'user with this email is already registered',
 		login: 'login',
 		password_repeat: 'repeat password',
 		register: 'register',
 		wrong_password: 'wrong password',
 		password: 'password',
 		authorization: 'authorization',
 		register_message: 'Check the email specified in the registration. A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br/> <br/> - Your email has already been successfully confirmed - try to enter the system with your username and password <br/> - The email address has expired. Need to register again',
 		registration: 'registration',
 		password_recovery: 'password recovery',
 		forgot_password: 'forgot password',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		user_not_found: 'user not found',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_go_to_login: 'go to authorization',
 		password_recovery_message: 'Check the email specified in the registration. A letter should come with a link for password recovery.',
	},
	ctlg_electron_skill,
	ctlg_request_state,
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
