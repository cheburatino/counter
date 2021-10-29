import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_task_type from './ctlg_task_type'
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
	message: {
 		ok: 'ok',
 		save: 'save',
 		cancel: 'cancel',
 		send: 'send',
 		photo: 'photo',
 		delete: 'delete',
 		edit: 'edit',
 		file: 'file',
 		files: 'files',
	},
	auth: {
 		login: 'login',
 		authorization: 'authorization',
 		forgot_password: 'forgot password',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		registration: 'registration',
 		password_recovery: 'password recovery',
 		password_recovery_success_message: 'password changed successfully',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		wrong_password: 'wrong password',
 		password: 'password',
 		password_repeat: 'repeat password',
 		password_recovery_go_to_login: 'go to authorization',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		register: 'register',
 		invalid_first_name: 'you must fill in the "first name" field',
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
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
 		state_fired: 'fired',
 		phone: 'phone',
 		grade: 'grade',
 		email: 'email',
 		role_admin: 'admin',
 		name_plural: 'users',
 		first_name: 'first name',
 		roles: 'roles',
 		state: 'state',
 		photo: 'photo',
 		name_plural_deleted: 'deleted users',
 		last_name: 'last name',
 		role_student: 'user',
	},
	menu: {
 		system: 'system',
 		digital_solution: 'digital solution',
 		functional_requirement: 'functional requirement',
 		invoice: 'invoice',
 		ctlg_time_type: 'ctlg time type',
 		meeting: 'meeting',
 		contract: 'contract',
 		company: 'company',
 		time: 'time',
 		comment: 'comment',
 		ctlg_task_status_type: 'ctlg task status type',
 		user: 'users',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		request: 'request',
 		sprint: 'sprint',
 		task: 'task',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_subtask_state: 'ctlg subtask state',
 		counterparty: 'counterparty',
 		man: 'man',
	},
	ctlg_electron_skill,
	ctlg_request_state,
	ctlg_time_type,
	ctlg_digital_solution_state,
	ctlg_functional_requirement_state,
	ctlg_task_type,
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
