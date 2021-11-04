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
	user: {
 		email: 'email',
 		role_student: 'user',
 		state_waiting_auth: 'waiting auth',
 		state_fired: 'fired',
 		grade: 'grade',
 		role_admin: 'admin',
 		state_working: 'working',
 		photo: 'photo',
 		name_plural: 'users',
 		first_name: 'first name',
 		state: 'state',
 		phone: 'phone',
 		name_plural_deleted: 'deleted users',
 		last_name: 'last name',
 		roles: 'roles',
	},
	menu: {
 		ctlg_work_state: 'ctlg work state',
 		contract: 'contract',
 		man: 'man',
 		system: 'system',
 		user: 'users',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		company: 'company',
 		invoice: 'invoice',
 		task_specialist_link: 'task specialist link',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		company_man_link: 'company man link',
 		ctlg_task_role: 'ctlg task role',
 		ctlg_bug_state: 'ctlg bug state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		bug: 'bug',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		work_task_link: 'work task link',
 		ctlg_task_type: 'ctlg task type',
 		counterparty: 'counterparty',
 		digital_solution: 'digital solution',
 		request: 'request',
 		task: 'task',
 		comment: 'comment',
 		news_from_dima: 'news from dima',
 		ctlg_request_state: 'ctlg request state',
 		customer_task: 'customer task',
 		time: 'time',
 		meeting: 'meeting',
 		functional_requirement: 'functional requirement',
 		work: 'work',
 		work_specialist_link: 'work specialist link',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_task_state: 'ctlg task state',
	},
	message: {
 		send: 'send',
 		file: 'file',
 		ok: 'ok',
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
 		edit: 'edit',
 		files: 'files',
 		photo: 'photo',
	},
	auth: {
 		login: 'login',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		wrong_password: 'wrong password',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		password_recovery: 'password recovery',
 		password_recovery_success_message: 'password changed successfully',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		authorization: 'authorization',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		register: 'register',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password: 'password',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
	},
	profile: {
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
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
