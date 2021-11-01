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
	message: {
 		send: 'отправить',
 		files: 'файлы',
 		ok: 'ok',
 		cancel: 'отмена',
 		delete: 'удалить',
 		photo: 'фото',
 		save: 'сохранить',
 		edit: 'редактировать',
 		file: 'файл',
	},
	auth: {
 		password_recovery_success_message: 'пароль успешно изменен',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		user_not_found: 'пользователь с таким email не найден',
 		wrong_password: 'неверный пароль',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password: 'пароль',
 		register: 'зарегистрироваться',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		password_recovery: 'восстановление пароля',
 		registration: 'регистрация',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		password_repeat: 'повторите пароль',
 		authorization: 'авторизация',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		login: 'войти',
	},
	profile: {
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
	},
	user: {
 		state: 'статус',
 		email: 'email',
 		phone: 'телефон',
 		photo: 'фото',
 		state_waiting_auth: 'ожидает авторизации',
 		state_fired: 'уволен',
 		name_plural: 'пользователи',
 		name_plural_deleted: 'удаленные пользователи',
 		last_name: 'фамилия',
 		roles: 'роли',
 		grade: 'должность',
 		role_admin: 'админ',
 		state_working: 'работает',
 		first_name: 'имя',
 		role_student: 'сотрудник',
	},
	menu: {
 		ctlg_subtask_state: 'Статусы подзадач',
 		man: 'Люди',
 		sprint: 'Спринты',
 		digital_solution: 'Цифровые решения',
 		user: 'пользователи',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_task_type: 'Типы задач',
 		ctlg_dev_task_state: 'Статусы задач разработки',
 		system: 'Системы',
 		comment: 'Комментарии',
 		ctlg_time_type: 'Типы времени',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		functional_requirement: 'Функциональные требования',
 		task: 'Задачи',
 		meeting: 'Встречи',
 		counterparty: 'Контрагенты',
 		company: 'Компании',
 		contract: 'Договоры',
 		request: 'Запросы',
 		invoice: 'Счета',
 		time: 'Время',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_task_status_type: 'Типы статусов задач',
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
