import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_digital_solution_specialist_role from './ctlg_digital_solution_specialist_role'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_task_role from './ctlg_task_role'
import ctlg_dev_task_state from './ctlg_dev_task_state'
import ctlg_task_status_type from './ctlg_task_status_type'
import ctlg_subtask_state from './ctlg_subtask_state'
import ctlg_bug_state from './ctlg_bug_state'
import ctlg_customer_task_state from './ctlg_customer_task_state'
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
import customer_task from './customer_task'
import bug from './bug'
import task_specialist_link from './task_specialist_link'
import digital_solution_specialist_link from './digital_solution_specialist_link'
import digital_solution_customer_agent_link from './digital_solution_customer_agent_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	message: {
 		delete: 'удалить',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
 		ok: 'ok',
 		save: 'сохранить',
 		cancel: 'отмена',
	},
	auth: {
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		wrong_password: 'неверный пароль',
 		password_recovery: 'восстановление пароля',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		invalid_email: 'поле "email" заполнено неверно',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		login: 'войти',
 		password: 'пароль',
 		forgot_password: 'забыли пароль',
 		register: 'зарегистрироваться',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		user_not_found: 'пользователь с таким email не найден',
 		password_repeat: 'повторите пароль',
 		authorization: 'авторизация',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		registration: 'регистрация',
 		password_recovery_success_message: 'пароль успешно изменен',
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
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		name_plural: 'пользователи',
 		roles: 'роли',
 		state: 'статус',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		state_fired: 'уволен',
 		name_plural_deleted: 'удаленные пользователи',
 		grade: 'должность',
 		email: 'email',
 		phone: 'телефон',
 		photo: 'фото',
	},
	menu: {
 		customer_task: 'Задачи заказчиков',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		contract: 'Договоры',
 		sprint: 'Спринты',
 		functional_requirement: 'Функциональные требования',
 		system: 'Системы',
 		request: 'Запросы',
 		invoice: 'Счета',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_dev_task_state: 'Статусы задач разработки',
 		ctlg_task_status_type: 'Типы статусов задач',
 		counterparty: 'Контрагенты',
 		man: 'Люди',
 		time: 'Время',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		meeting: 'Встречи',
 		ctlg_subtask_state: 'Статусы подзадач',
 		task: 'Задачи',
 		bug: 'Баги',
 		ctlg_time_type: 'Типы времени',
 		ctlg_task_type: 'Типы задач',
 		ctlg_task_state: 'Статусы задач',
 		task_specialist_link: 'Участники задач',
 		news_from_dima: 'Новости от Димы',
 		comment: 'Комментарии',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_bug_state: 'Статусы багов',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		company: 'Компании',
 		digital_solution: 'Цифровые решения',
 		user: 'пользователи',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_task_role: 'Роли в задачах',
	},
	ctlg_electron_skill,
	ctlg_request_state,
	ctlg_time_type,
	ctlg_digital_solution_state,
	ctlg_digital_solution_specialist_role,
	ctlg_functional_requirement_state,
	ctlg_task_type,
	ctlg_task_state,
	ctlg_task_role,
	ctlg_dev_task_state,
	ctlg_task_status_type,
	ctlg_subtask_state,
	ctlg_bug_state,
	ctlg_customer_task_state,
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
	customer_task,
	bug,
	task_specialist_link,
	digital_solution_specialist_link,
	digital_solution_customer_agent_link,
	time,
	comment,
	news_from_dima,
}
