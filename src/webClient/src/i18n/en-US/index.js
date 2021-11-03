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
import digital_solution_specialist_link from './digital_solution_specialist_link'
import digital_solution_customer_agent_link from './digital_solution_customer_agent_link'
import work_specialist_link from './work_specialist_link'
import work_task_link from './work_task_link'
import company_man_link from './company_man_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	message: {
 		edit: 'edit',
 		send: 'send',
 		cancel: 'cancel',
 		delete: 'delete',
 		file: 'file',
 		files: 'files',
 		photo: 'photo',
 		ok: 'ok',
 		save: 'save',
	},
	auth: {
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		password_recovery_go_to_login: 'go to authorization',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_user_already_exist: 'user with this email is already registered',
 		login: 'login',
 		password: 'password',
 		forgot_password: 'forgot password',
 		register: 'register',
 		invalid_last_name: 'you must fill in the "last name" field',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		password_recovery_success_message: 'password changed successfully',
 		invalid_first_name: 'you must fill in the "first name" field',
	},
	profile: {
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
	},
	user: {
 		name_plural: 'users',
 		state_working: 'working',
 		state_fired: 'fired',
 		first_name: 'first name',
 		role_admin: 'admin',
 		last_name: 'last name',
 		roles: 'roles',
 		state: 'state',
 		photo: 'photo',
 		state_waiting_auth: 'waiting auth',
 		name_plural_deleted: 'deleted users',
 		phone: 'phone',
 		grade: 'grade',
 		email: 'email',
 		role_student: 'user',
	},
	menu: {
 		functional_requirement: 'functional requirement',
 		company_man_link: 'company man link',
 		ctlg_task_role: 'ctlg task role',
 		meeting: 'meeting',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_request_state: 'ctlg request state',
 		system: 'system',
 		work: 'work',
 		work_specialist_link: 'work specialist link',
 		work_task_link: 'work task link',
 		news_from_dima: 'news from dima',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_work_state: 'ctlg work state',
 		counterparty: 'counterparty',
 		man: 'man',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		bug: 'bug',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		comment: 'comment',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		company: 'company',
 		invoice: 'invoice',
 		task: 'task',
 		task_specialist_link: 'task specialist link',
 		time: 'time',
 		user: 'users',
 		ctlg_bug_state: 'ctlg bug state',
 		request: 'request',
 		digital_solution: 'digital solution',
 		ctlg_task_state: 'ctlg task state',
 		contract: 'contract',
 		customer_task: 'customer task',
 		digital_solution_specialist_link: 'digital solution specialist link',
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
	digital_solution_specialist_link,
	digital_solution_customer_agent_link,
	work_specialist_link,
	work_task_link,
	company_man_link,
	time,
	comment,
	news_from_dima,
}
