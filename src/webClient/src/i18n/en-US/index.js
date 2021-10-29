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
 		role_admin: 'admin',
 		last_name: 'last name',
 		photo: 'photo',
 		state_working: 'working',
 		grade: 'grade',
 		email: 'email',
 		state_fired: 'fired',
 		state_waiting_auth: 'waiting auth',
 		name_plural_deleted: 'deleted users',
 		first_name: 'first name',
 		roles: 'roles',
 		state: 'state',
 		phone: 'phone',
 		role_student: 'user',
	},
	menu: {
 		system: 'system',
 		sprint: 'sprint',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_type: 'ctlg task type',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		ctlg_task_status_type: 'ctlg task status type',
 		ctlg_subtask_state: 'ctlg subtask state',
 		contract: 'contract',
 		digital_solution: 'digital solution',
 		task: 'task',
 		user: 'users',
 		man: 'man',
 		request: 'request',
 		invoice: 'invoice',
 		comment: 'comment',
 		ctlg_electron_skill: 'ctlg electron skill',
 		meeting: 'meeting',
 		counterparty: 'counterparty',
 		company: 'company',
 		ctlg_request_state: 'ctlg request state',
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		functional_requirement: 'functional requirement',
 		time: 'time',
	},
	message: {
 		ok: 'ok',
 		save: 'save',
 		cancel: 'cancel',
 		photo: 'photo',
 		delete: 'delete',
 		edit: 'edit',
 		send: 'send',
 		file: 'file',
 		files: 'files',
	},
	auth: {
 		password_recovery_go_to_login: 'go to authorization',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		login: 'login',
 		forgot_password: 'forgot password',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_last_name: 'you must fill in the "last name" field',
 		user_not_found: 'user not found',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		password_repeat: 'repeat password',
 		password_recovery: 'password recovery',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		invalid_user_already_exist: 'user with this email is already registered',
 		password: 'password',
 		registration: 'registration',
 		authorization: 'authorization',
 		invalid_email: '"email" field is filled incorrectly',
 		wrong_password: 'wrong password',
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
