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
import digital_solution_customer_agent_link from './digital_solution_customer_agent_link'
import time from './time'
import comment from './comment'

export default {
	message: {
 		edit: 'edit',
 		files: 'files',
 		ok: 'ok',
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
 		send: 'send',
 		file: 'file',
 		photo: 'photo',
	},
	auth: {
 		forgot_password: 'forgot password',
 		user_not_found: 'user not found',
 		login: 'login',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_go_to_login: 'go to authorization',
 		invalid_email: '"email" field is filled incorrectly',
 		wrong_password: 'wrong password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password: 'password',
 		registration: 'registration',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		register: 'register',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		password_repeat: 'repeat password',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_first_name: 'you must fill in the "first name" field',
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
 		roles: 'roles',
 		state: 'state',
 		email: 'email',
 		role_admin: 'admin',
 		name_plural: 'users',
 		last_name: 'last name',
 		first_name: 'first name',
 		state_waiting_auth: 'waiting auth',
 		name_plural_deleted: 'deleted users',
 		grade: 'grade',
 		role_student: 'user',
 		state_fired: 'fired',
 		phone: 'phone',
 		photo: 'photo',
 		state_working: 'working',
	},
	menu: {
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		man: 'man',
 		ctlg_customer_task_state: 'ctlg customer task state',
 		counterparty: 'counterparty',
 		system: 'system',
 		digital_solution: 'digital solution',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_digital_solution_specialist_role: 'ctlg digital solution specialist role',
 		ctlg_task_type: 'ctlg task type',
 		contract: 'contract',
 		functional_requirement: 'functional requirement',
 		user: 'users',
 		meeting: 'meeting',
 		task: 'task',
 		time: 'time',
 		invoice: 'invoice',
 		customer_task: 'customer task',
 		digital_solution_customer_agent_link: 'digital solution customer agent link',
 		comment: 'comment',
 		sprint: 'sprint',
 		task_specialist_link: 'task specialist link',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_task_role: 'ctlg task role',
 		ctlg_task_status_type: 'ctlg task status type',
 		ctlg_subtask_state: 'ctlg subtask state',
 		ctlg_bug_state: 'ctlg bug state',
 		request: 'request',
 		company: 'company',
 		bug: 'bug',
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
	digital_solution_customer_agent_link,
	time,
	comment,
}
