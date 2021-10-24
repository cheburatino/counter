import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
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
	profile: {
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
 		phone: 'phone',
 		avatar: 'photo',
	},
	user: {
 		name_plural: 'users',
 		last_name: 'last name',
 		email: 'email',
 		role_student: 'user',
 		state_fired: 'fired',
 		name_plural_deleted: 'deleted users',
 		state: 'state',
 		grade: 'grade',
 		state_working: 'working',
 		roles: 'roles',
 		phone: 'phone',
 		role_admin: 'admin',
 		first_name: 'first name',
 		photo: 'photo',
 		state_waiting_auth: 'waiting auth',
	},
	menu: {
 		comment: 'comment',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_status_type: 'ctlg task status type',
 		counterparty: 'counterparty',
 		system: 'system',
 		request: 'request',
 		sprint: 'sprint',
 		user: 'users',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		man: 'man',
 		invoice: 'invoice',
 		digital_solution: 'digital solution',
 		functional_requirement: 'functional requirement',
 		task: 'task',
 		time: 'time',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_subtask_state: 'ctlg subtask state',
 		meeting: 'meeting',
 		contract: 'contract',
 		company: 'company',
	},
	message: {
 		files: 'files',
 		ok: 'ok',
 		cancel: 'cancel',
 		edit: 'edit',
 		file: 'file',
 		save: 'save',
 		delete: 'delete',
 		send: 'send',
 		photo: 'photo',
	},
	auth: {
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password_repeat: 'repeat password',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_go_to_login: 'go to authorization',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		register: 'register',
 		authorization: 'authorization',
 		password_recovery: 'password recovery',
 		user_not_found: 'user not found',
 		wrong_password: 'wrong password',
 		registration: 'registration',
 		forgot_password: 'forgot password',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		login: 'login',
 		password: 'password',
	},
	ctlg_electron_skill,
	ctlg_request_state,
	ctlg_time_type,
	ctlg_digital_solution_state,
	ctlg_functional_requirement_state,
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
