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
 		save: 'save',
 		cancel: 'cancel',
 		delete: 'delete',
 		files: 'files',
 		photo: 'photo',
 		ok: 'ok',
 		edit: 'edit',
 		send: 'send',
 		file: 'file',
	},
	auth: {
 		password: 'password',
 		password_repeat: 'repeat password',
 		register: 'register',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_user_already_exist: 'user with this email is already registered',
 		wrong_password: 'wrong password',
 		registration: 'registration',
 		password_recovery: 'password recovery',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		password_recovery_go_to_login: 'go to authorization',
 		forgot_password: 'forgot password',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_last_name: 'you must fill in the "last name" field',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		login: 'login',
 		authorization: 'authorization',
 		password_recovery_success_message: 'password changed successfully',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_first_name: 'you must fill in the "first name" field',
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
 		role_admin: 'admin',
 		last_name: 'last name',
 		first_name: 'first name',
 		roles: 'roles',
 		state: 'state',
 		phone: 'phone',
 		grade: 'grade',
 		photo: 'photo',
 		state_fired: 'fired',
 		state_working: 'working',
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		email: 'email',
 		role_student: 'user',
 		state_waiting_auth: 'waiting auth',
	},
	menu: {
 		meeting: 'meeting',
 		counterparty: 'counterparty',
 		task: 'task',
 		user: 'users',
 		ctlg_subtask_state: 'ctlg subtask state',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		request: 'request',
 		invoice: 'invoice',
 		time: 'time',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_request_state: 'ctlg request state',
 		functional_requirement: 'functional requirement',
 		comment: 'comment',
 		contract: 'contract',
 		man: 'man',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		ctlg_task_status_type: 'ctlg task status type',
 		company: 'company',
 		system: 'system',
 		sprint: 'sprint',
 		digital_solution: 'digital solution',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_task_type: 'ctlg task type',
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
