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
 		files: 'files',
 		photo: 'photo',
 		ok: 'ok',
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
 		send: 'send',
 		file: 'file',
	},
	auth: {
 		login: 'login',
 		password: 'password',
 		password_repeat: 'repeat password',
 		forgot_password: 'forgot password',
 		register: 'register',
 		invalid_first_name: 'you must fill in the "first name" field',
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		registration: 'registration',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		invalid_email: '"email" field is filled incorrectly',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_go_to_login: 'go to authorization',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
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
 		first_name: 'first name',
 		state_working: 'working',
 		last_name: 'last name',
 		role_student: 'user',
 		state_waiting_auth: 'waiting auth',
 		photo: 'photo',
 		roles: 'roles',
 		phone: 'phone',
 		grade: 'grade',
 		state_fired: 'fired',
 		name_plural_deleted: 'deleted users',
 		state: 'state',
 		email: 'email',
 		role_admin: 'admin',
 		name_plural: 'users',
	},
	menu: {
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_task_state: 'ctlg task state',
 		system: 'system',
 		request: 'request',
 		time: 'time',
 		ctlg_work_state: 'ctlg work state',
 		ctlg_bug_state: 'ctlg bug state',
 		man: 'man',
 		task: 'task',
 		work: 'work',
 		news_from_dima: 'news from dima',
 		user: 'users',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		meeting: 'meeting',
 		bug: 'bug',
 		work_task_link: 'work task link',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		work_specialist_link: 'work specialist link',
 		ctlg_task_role: 'ctlg task role',
 		contract: 'contract',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		company_man_link: 'company man link',
 		ctlg_time_type: 'ctlg time type',
 		company: 'company',
 		digital_solution: 'digital solution',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_task_type: 'ctlg task type',
 		invoice: 'invoice',
 		customer_task: 'customer task',
 		comment: 'comment',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		counterparty: 'counterparty',
 		functional_requirement: 'functional requirement',
 		task_specialist_link: 'task specialist link',
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
