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
 		delete: 'delete',
 		ok: 'ok',
 		save: 'save',
 		send: 'send',
 		file: 'file',
 		files: 'files',
 		photo: 'photo',
 		cancel: 'cancel',
 		edit: 'edit',
	},
	auth: {
 		registration: 'registration',
 		password_recovery: 'password recovery',
 		password_recovery_go_to_login: 'go to authorization',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		wrong_password: 'wrong password',
 		password: 'password',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		invalid_last_name: 'you must fill in the "last name" field',
 		login: 'login',
 		password_repeat: 'repeat password',
 		authorization: 'authorization',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		invalid_first_name: 'you must fill in the "first name" field',
 		forgot_password: 'forgot password',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_user_already_exist: 'user with this email is already registered',
	},
	profile: {
 		phone: 'phone',
 		avatar: 'photo',
 		exit: 'exit',
 		breadcrumb_label: 'Profile edit',
 		last_name: 'last name',
 		first_name: 'first name',
	},
	user: {
 		state: 'state',
 		grade: 'grade',
 		first_name: 'first name',
 		role_admin: 'admin',
 		role_student: 'user',
 		state_working: 'working',
 		state_waiting_auth: 'waiting auth',
 		name_plural: 'users',
 		name_plural_deleted: 'deleted users',
 		photo: 'photo',
 		email: 'email',
 		last_name: 'last name',
 		roles: 'roles',
 		phone: 'phone',
 		state_fired: 'fired',
	},
	menu: {
 		time: 'time',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		meeting: 'meeting',
 		contract: 'contract',
 		man: 'man',
 		sprint: 'sprint',
 		functional_requirement: 'functional requirement',
 		comment: 'comment',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_task_status_type: 'ctlg task status type',
 		system: 'system',
 		request: 'request',
 		invoice: 'invoice',
 		task: 'task',
 		user: 'users',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		ctlg_subtask_state: 'ctlg subtask state',
 		counterparty: 'counterparty',
 		company: 'company',
 		digital_solution: 'digital solution',
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
