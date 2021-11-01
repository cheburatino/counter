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
 		save: 'сохранить',
 		cancel: 'отмена',
 		delete: 'удалить',
 		edit: 'редактировать',
 		ok: 'ok',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
	},
	auth: {
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		register: 'зарегистрироваться',
 		user_not_found: 'пользователь с таким email не найден',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password_recovery: 'восстановление пароля',
 		password: 'пароль',
 		authorization: 'авторизация',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		wrong_password: 'неверный пароль',
 		login: 'войти',
 		registration: 'регистрация',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		password_repeat: 'повторите пароль',
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
 		email: 'email',
 		role_student: 'сотрудник',
 		state_waiting_auth: 'ожидает авторизации',
 		name_plural: 'пользователи',
 		name_plural_deleted: 'удаленные пользователи',
 		photo: 'фото',
 		role_admin: 'админ',
 		state: 'статус',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		last_name: 'фамилия',
 		roles: 'роли',
 		grade: 'должность',
 		first_name: 'имя',
 		phone: 'телефон',
	},
	menu: {
 		man: 'Люди',
 		ctlg_task_state: 'Статусы задач',
 		functional_requirement: 'Функциональные требования',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		company: 'Компании',
 		system: 'Системы',
 		digital_solution: 'Цифровые решения',
 		ctlg_task_role: 'Роли в задачах',
 		meeting: 'Встречи',
 		time: 'Время',
 		ctlg_time_type: 'Типы времени',
 		contract: 'Договоры',
 		task: 'Задачи',
 		counterparty: 'Контрагенты',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_dev_task_state: 'Статусы задач разработки',
 		ctlg_subtask_state: 'Статусы подзадач',
 		request: 'Запросы',
 		task_specialist_link: 'Участники задач',
 		sprint: 'Спринты',
 		ctlg_task_status_type: 'Типы статусов задач',
 		invoice: 'Счета',
 		comment: 'Комментарии',
 		user: 'пользователи',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_task_type: 'Типы задач',
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
