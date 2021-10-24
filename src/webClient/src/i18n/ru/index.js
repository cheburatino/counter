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
	auth: {
 		register: 'зарегистрироваться',
 		user_not_found: 'пользователь с таким email не найден',
 		login: 'войти',
 		password_repeat: 'повторите пароль',
 		registration: 'регистрация',
 		forgot_password: 'забыли пароль',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		authorization: 'авторизация',
 		password_recovery: 'восстановление пароля',
 		password_recovery_success_message: 'пароль успешно изменен',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		wrong_password: 'неверный пароль',
 		password: 'пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
	},
	profile: {
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
	},
	user: {
 		photo: 'фото',
 		name_plural_deleted: 'удаленные пользователи',
 		state: 'статус',
 		phone: 'телефон',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		last_name: 'фамилия',
 		grade: 'должность',
 		email: 'email',
 		first_name: 'имя',
 		role_student: 'сотрудник',
 		state_waiting_auth: 'ожидает авторизации',
 		name_plural: 'пользователи',
 		roles: 'роли',
 		role_admin: 'админ',
	},
	menu: {
 		ctlg_subtask_state: 'Статусы подзадач',
 		request: 'Запросы',
 		sprint: 'Спринты',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		contract: 'Договоры',
 		company: 'Компании',
 		system: 'Системы',
 		digital_solution: 'Цифровые решения',
 		invoice: 'Счета',
 		comment: 'Комментарии',
 		ctlg_dev_task_state: 'Статусы задач разработки',
 		ctlg_task_status_type: 'Типы статусов задач',
 		counterparty: 'Контрагенты',
 		functional_requirement: 'Функциональные требования',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_time_type: 'Типы времени',
 		meeting: 'Встречи',
 		man: 'Люди',
 		task: 'Задачи',
 		time: 'Время',
 		user: 'пользователи',
 		ctlg_request_state: 'Статусы запроса',
	},
	message: {
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
 		save: 'сохранить',
 		cancel: 'отмена',
 		delete: 'удалить',
 		edit: 'редактировать',
 		send: 'отправить',
 		ok: 'ok',
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
