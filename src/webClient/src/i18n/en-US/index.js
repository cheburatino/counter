import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_dev_task_state from './ctlg_dev_task_state'
import ctlg_task_status_type from './ctlg_task_status_type'
import ctlg_subtask_state from './ctlg_subtask_state'
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
import time from './time'
import comment from './comment'

export default {
	auth: {
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password: 'password',
 		password_recovery_success_message: 'password changed successfully',
 		forgot_password: 'forgot password',
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
 		password_repeat: 'repeat password',
 		password_recovery: 'password recovery',
 		password_recovery_go_to_login: 'go to authorization',
 		register: 'register',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_last_name: 'you must fill in the "last name" field',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		login: 'login',
 		registration: 'registration',
 		authorization: 'authorization',
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
 		last_name: 'last name',
 		first_name: 'first name',
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
 		state_fired: 'fired',
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		roles: 'roles',
 		state: 'state',
 		phone: 'phone',
 		grade: 'grade',
 		photo: 'photo',
 		email: 'email',
 		role_admin: 'admin',
 		role_student: 'user',
	},
	menu: {
 		invoice: 'invoice',
 		time: 'time',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_subtask_state: 'ctlg subtask state',
 		meeting: 'meeting',
 		system: 'system',
 		request: 'request',
 		contract: 'contract',
 		man: 'man',
 		user: 'users',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		digital_solution: 'digital solution',
 		functional_requirement: 'functional requirement',
 		task: 'task',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		counterparty: 'counterparty',
 		comment: 'comment',
 		ctlg_task_status_type: 'ctlg task status type',
 		company: 'company',
 		sprint: 'sprint',
	},
	message: {
 		delete: 'delete',
 		edit: 'edit',
 		file: 'file',
 		files: 'files',
 		photo: 'photo',
 		cancel: 'cancel',
 		save: 'save',
 		send: 'send',
 		ok: 'ok',
	},
	ctlg_electron_skill,
	ctlg_request_state,
	ctlg_time_type,
	ctlg_digital_solution_state,
	ctlg_functional_requirement_state,
	ctlg_task_type,
	ctlg_task_state,
	ctlg_dev_task_state,
	ctlg_task_status_type,
	ctlg_subtask_state,
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
	time,
	comment,
}
