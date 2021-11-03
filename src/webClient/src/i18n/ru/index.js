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
 		cancel: 'отмена',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
 		ok: 'ok',
 		save: 'сохранить',
 		delete: 'удалить',
	},
	auth: {
 		password_repeat: 'повторите пароль',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		user_not_found: 'пользователь с таким email не найден',
 		wrong_password: 'неверный пароль',
 		password_recovery: 'восстановление пароля',
 		forgot_password: 'забыли пароль',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		login: 'войти',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		password: 'пароль',
 		registration: 'регистрация',
 		authorization: 'авторизация',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		register: 'зарегистрироваться',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
	},
	profile: {
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
	},
	user: {
 		name_plural: 'пользователи',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		role_student: 'сотрудник',
 		name_plural_deleted: 'удаленные пользователи',
 		first_name: 'имя',
 		phone: 'телефон',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		last_name: 'фамилия',
 		grade: 'должность',
 		email: 'email',
 		roles: 'роли',
 		state: 'статус',
 		photo: 'фото',
	},
	menu: {
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		system: 'Системы',
 		bug: 'Баги',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_bug_state: 'Статусы багов',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		time: 'Время',
 		ctlg_electron_skill: 'Компетенции',
 		meeting: 'Встречи',
 		request: 'Запросы',
 		functional_requirement: 'Функциональные требования',
 		invoice: 'Счета',
 		news_from_dima: 'Новости от Димы',
 		ctlg_time_type: 'Типы времени',
 		ctlg_task_state: 'Статусы задач',
 		company: 'Компании',
 		sprint: 'Спринты',
 		comment: 'Комментарии',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_task_type: 'Типы задач',
 		ctlg_task_status_type: 'Типы статусов задач',
 		ctlg_subtask_state: 'Статусы подзадач',
 		man: 'Люди',
 		digital_solution: 'Цифровые решения',
 		counterparty: 'Контрагенты',
 		task: 'Задачи',
 		user: 'пользователи',
 		ctlg_dev_task_state: 'Статусы задач разработки',
 		contract: 'Договоры',
 		customer_task: 'Задачи заказчиков',
 		task_specialist_link: 'Участники задач',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
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
