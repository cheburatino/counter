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
 		ok: 'ok',
 		save: 'сохранить',
 		cancel: 'отмена',
 		send: 'отправить',
 		photo: 'фото',
 		delete: 'удалить',
 		edit: 'редактировать',
 		file: 'файл',
 		files: 'файлы',
	},
	auth: {
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password_repeat: 'повторите пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		user_not_found: 'пользователь с таким email не найден',
 		login: 'войти',
 		authorization: 'авторизация',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		password: 'пароль',
 		forgot_password: 'забыли пароль',
 		register: 'зарегистрироваться',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		wrong_password: 'неверный пароль',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
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
 		name_plural: 'пользователи',
 		last_name: 'фамилия',
 		roles: 'роли',
 		phone: 'телефон',
 		photo: 'фото',
 		email: 'email',
 		state_working: 'работает',
 		name_plural_deleted: 'удаленные пользователи',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		state_fired: 'уволен',
 		first_name: 'имя',
 		state: 'статус',
 		grade: 'должность',
 		role_student: 'сотрудник',
	},
	menu: {
 		functional_requirement: 'Функциональные требования',
 		comment: 'Комментарии',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_subtask_state: 'Статусы подзадач',
 		counterparty: 'Контрагенты',
 		system: 'Системы',
 		request: 'Запросы',
 		sprint: 'Спринты',
 		time: 'Время',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_task_status_type: 'Типы статусов задач',
 		contract: 'Договоры',
 		user: 'пользователи',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_dev_task_state: 'Статусы задач разработки',
 		company: 'Компании',
 		invoice: 'Счета',
 		task: 'Задачи',
 		ctlg_time_type: 'Типы времени',
 		ctlg_task_type: 'Типы задач',
 		meeting: 'Встречи',
 		man: 'Люди',
 		digital_solution: 'Цифровые решения',
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
