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

export default {
	message: {
 		edit: 'edit',
 		file: 'file',
 		send: 'send',
 		files: 'files',
 		photo: 'photo',
 		ok: 'ok',
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
	},
	auth: {
 		login: 'login',
 		password: 'password',
 		password_repeat: 'repeat password',
 		authorization: 'authorization',
 		invalid_user_already_exist: 'user with this email is already registered',
 		registration: 'registration',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		register: 'register',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		password_recovery: 'password recovery',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
	},
	profile: {
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
	},
	user: {
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		state_working: 'working',
 		first_name: 'first name',
 		roles: 'roles',
 		role_student: 'user',
 		role_admin: 'admin',
 		state_waiting_auth: 'waiting auth',
 		last_name: 'last name',
 		state: 'state',
 		phone: 'phone',
 		grade: 'grade',
 		photo: 'photo',
 		email: 'email',
 		state_fired: 'fired',
	},
	menu: {
 		user: 'users',
 		ctlg_electron_skill: 'ctlg electron skill',
 		meeting: 'meeting',
 		ctlg_task_type: 'ctlg task type',
 		contract: 'contract',
 		sprint: 'sprint',
 		ctlg_subtask_state: 'ctlg subtask state',
 		man: 'man',
 		invoice: 'invoice',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		request: 'request',
 		bug: 'bug',
 		comment: 'comment',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_task_status_type: 'ctlg task status type',
 		system: 'system',
 		time: 'time',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_task_role: 'ctlg task role',
 		ctlg_bug_state: 'ctlg bug state',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		digital_solution: 'digital solution',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		counterparty: 'counterparty',
 		company: 'company',
 		functional_requirement: 'functional requirement',
 		customer_task: 'customer task',
 		digital_solution_specialist_link: 'digital solution specialist link',
 		task: 'task',
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
}
