import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_digital_solution_specialist_role from './ctlg_digital_solution_specialist_role'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_task_role from './ctlg_task_role'
import ctlg_dev_task_state from './ctlg_dev_task_state'
import ctlg_task_status_type from './ctlg_task_status_type'
import ctlg_subtask_state from './ctlg_subtask_state'
import ctlg_bug_state from './ctlg_bug_state'
import ctlg_customer_task_state from './ctlg_customer_task_state'
import meeting from './meeting'
import contract from './contract'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import sprint from './sprint'
import digital_solution from './digital_solution'
import functional_requirement from './functional_requirement'
import invoice from './invoice'
import task from './task'
import customer_task from './customer_task'
import bug from './bug'
import task_specialist_link from './task_specialist_link'
import digital_solution_specialist_link from './digital_solution_specialist_link'
import digital_solution_customer_agent_link from './digital_solution_customer_agent_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	auth: {
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_first_name: 'you must fill in the "first name" field',
 		login: 'login',
 		authorization: 'authorization',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password_repeat: 'repeat password',
 		password_recovery: 'password recovery',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		password: 'password',
 		registration: 'registration',
 		password_recovery_success_message: 'password changed successfully',
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
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
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		last_name: 'last name',
 		first_name: 'first name',
 		roles: 'roles',
 		phone: 'phone',
 		photo: 'photo',
 		state_fired: 'fired',
 		email: 'email',
 		role_admin: 'admin',
 		state: 'state',
 		role_student: 'user',
 		grade: 'grade',
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
	},
	menu: {
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_request_state: 'ctlg request state',
 		news_from_dima: 'news from dima',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_task_role: 'ctlg task role',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		task_specialist_link: 'task specialist link',
 		time: 'time',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_bug_state: 'ctlg bug state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		invoice: 'invoice',
 		customer_task: 'customer task',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		company: 'company',
 		system: 'system',
 		request: 'request',
 		digital_solution: 'digital solution',
 		comment: 'comment',
 		user: 'users',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		meeting: 'meeting',
 		ctlg_task_status_type: 'ctlg task status type',
 		man: 'man',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		bug: 'bug',
 		ctlg_subtask_state: 'ctlg subtask state',
 		contract: 'contract',
 		counterparty: 'counterparty',
 		sprint: 'sprint',
 		functional_requirement: 'functional requirement',
 		task: 'task',
	},
	message: {
 		ok: 'ok',
 		cancel: 'cancel',
 		save: 'save',
 		delete: 'delete',
 		edit: 'edit',
 		send: 'send',
 		file: 'file',
 		files: 'files',
 		photo: 'photo',
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
	ctlg_dev_task_state,
	ctlg_task_status_type,
	ctlg_subtask_state,
	ctlg_bug_state,
	ctlg_customer_task_state,
	meeting,
	contract,
	counterparty,
	company,
	man,
	system,
	request,
	sprint,
	digital_solution,
	functional_requirement,
	invoice,
	task,
	customer_task,
	bug,
	task_specialist_link,
	digital_solution_specialist_link,
	digital_solution_customer_agent_link,
	time,
	comment,
	news_from_dima,
}
