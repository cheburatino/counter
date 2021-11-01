import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_task_role from './ctlg_task_role'
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
import task_specialist_link from './task_specialist_link'
import time from './time'
import comment from './comment'

export default {
	message: {
 		save: 'save',
 		cancel: 'cancel',
 		edit: 'edit',
 		file: 'file',
 		files: 'files',
 		ok: 'ok',
 		delete: 'delete',
 		send: 'send',
 		photo: 'photo',
	},
	auth: {
 		user_not_found: 'user not found',
 		password: 'password',
 		authorization: 'authorization',
 		password_recovery_go_to_login: 'go to authorization',
 		invalid_email: '"email" field is filled incorrectly',
 		invalid_password_must_be_more_7: 'password must be more than 7 characters',
 		invalid_last_name: 'you must fill in the "last name" field',
 		forgot_password: 'forgot password',
 		check_user_email_message: 'The link is no longer active. Possible reasons: <br> <br> - Your email has already been successfully confirmed - try to enter the system with your username and password <br> - The email address has expired. Need to register again',
 		password_repeat: 'repeat password',
 		registration: 'registration',
 		register: 'register',
 		register_message: 'Check the email specified in the registration. <br> A letter should come to confirm the mailing address.',
 		invalid_password_wrong_repeat: 're-entered password does not match the first option',
 		wrong_password: 'wrong password',
 		login: 'login',
 		password_recovery: 'password recovery',
 		password_recovery_success_message: 'password changed successfully',
 		password_recovery_message: 'Check the email specified in the registration. <br> A letter should come with a link for password recovery.',
 		invalid_first_name: 'you must fill in the "first name" field',
 		invalid_user_already_exist: 'user with this email is already registered',
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
 		state_fired: 'fired',
 		name_plural_deleted: 'deleted users',
 		phone: 'phone',
 		photo: 'photo',
 		email: 'email',
 		name_plural: 'users',
 		grade: 'grade',
 		state: 'state',
 		role_student: 'user',
 		state_waiting_auth: 'waiting auth',
 		state_working: 'working',
 		last_name: 'last name',
 		first_name: 'first name',
 		roles: 'roles',
 		role_admin: 'admin',
	},
	menu: {
 		ctlg_digital_solution_state: 'ctlg digital solution state',
 		user: 'users',
 		ctlg_request_state: 'ctlg request state',
 		contract: 'contract',
 		ctlg_task_state: 'ctlg task state',
 		ctlg_task_role: 'ctlg task role',
 		request: 'request',
 		ctlg_dev_task_state: 'ctlg dev task state',
 		ctlg_task_status_type: 'ctlg task status type',
 		ctlg_subtask_state: 'ctlg subtask state',
 		task: 'task',
 		comment: 'comment',
 		meeting: 'meeting',
 		system: 'system',
 		sprint: 'sprint',
 		digital_solution: 'digital solution',
 		functional_requirement: 'functional requirement',
 		invoice: 'invoice',
 		time: 'time',
 		ctlg_electron_skill: 'ctlg electron skill',
 		ctlg_time_type: 'ctlg time type',
 		ctlg_task_type: 'ctlg task type',
 		man: 'man',
 		ctlg_functional_requirement_state: 'ctlg functional requirement state',
 		counterparty: 'counterparty',
 		company: 'company',
 		task_specialist_link: 'task specialist link',
	},
	ctlg_electron_skill,
	ctlg_request_state,
	ctlg_time_type,
	ctlg_digital_solution_state,
	ctlg_functional_requirement_state,
	ctlg_task_type,
	ctlg_task_state,
	ctlg_task_role,
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
	task_specialist_link,
	time,
	comment,
}
