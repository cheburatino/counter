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
 		ok: 'ok',
 		save: 'сохранить',
 		edit: 'редактировать',
 		send: 'отправить',
 		cancel: 'отмена',
 		delete: 'удалить',
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
	},
	auth: {
 		registration: 'регистрация',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		user_not_found: 'пользователь с таким email не найден',
 		wrong_password: 'неверный пароль',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		login: 'войти',
 		authorization: 'авторизация',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		invalid_email: 'поле "email" заполнено неверно',
 		password: 'пароль',
 		password_recovery_success_message: 'пароль успешно изменен',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		password_repeat: 'повторите пароль',
 		register: 'зарегистрироваться',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
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
 		state_fired: 'уволен',
 		role_student: 'сотрудник',
 		state: 'статус',
 		email: 'email',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		state_working: 'работает',
 		name_plural: 'пользователи',
 		roles: 'роли',
 		phone: 'телефон',
 		grade: 'должность',
 		photo: 'фото',
 		name_plural_deleted: 'удаленные пользователи',
	},
	menu: {
 		request: 'Запросы',
 		digital_solution: 'Цифровые решения',
 		comment: 'Комментарии',
 		counterparty: 'Контрагенты',
 		man: 'Люди',
 		task: 'Задачи',
 		task_specialist_link: 'Участники задач',
 		ctlg_task_state: 'Статусы задач',
 		meeting: 'Встречи',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_task_type: 'Типы задач',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_task_status_type: 'Типы статусов задач',
 		ctlg_electron_skill: 'Компетенции',
 		company: 'Компании',
 		system: 'Системы',
 		sprint: 'Спринты',
 		user: 'пользователи',
 		ctlg_dev_task_state: 'Статусы задач разработки',
 		contract: 'Договоры',
 		ctlg_request_state: 'Статусы запроса',
 		invoice: 'Счета',
 		functional_requirement: 'Функциональные требования',
 		ctlg_time_type: 'Типы времени',
 		ctlg_subtask_state: 'Статусы подзадач',
 		time: 'Время',
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
