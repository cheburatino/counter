import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_digital_solution_specialist_role from './ctlg_digital_solution_specialist_role'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_task_role from './ctlg_task_role'
import ctlg_work_state from './ctlg_work_state'
import ctlg_bug_state from './ctlg_bug_state'
import ctlg_customer_task_state from './ctlg_customer_task_state'
import meeting from './meeting'
import contract from './contract'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import digital_solution from './digital_solution'
import functional_requirement from './functional_requirement'
import invoice from './invoice'
import task from './task'
import work from './work'
import customer_task from './customer_task'
import bug from './bug'
import task_specialist_link from './task_specialist_link'
import digital_solution_specialist_link from './digital_solution_specialist_link'
import digital_solution_customer_agent_link from './digital_solution_customer_agent_link'
import work_specialist_link from './work_specialist_link'
import work_task_link from './work_task_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	message: {
 		file: 'файл',
 		save: 'сохранить',
 		delete: 'удалить',
 		edit: 'редактировать',
 		send: 'отправить',
 		ok: 'ok',
 		cancel: 'отмена',
 		files: 'файлы',
 		photo: 'фото',
	},
	auth: {
 		user_not_found: 'пользователь с таким email не найден',
 		login: 'войти',
 		password: 'пароль',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password_repeat: 'повторите пароль',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		authorization: 'авторизация',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		forgot_password: 'забыли пароль',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register: 'зарегистрироваться',
 		wrong_password: 'неверный пароль',
	},
	profile: {
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
	},
	user: {
 		last_name: 'фамилия',
 		phone: 'телефон',
 		email: 'email',
 		state_fired: 'уволен',
 		state: 'статус',
 		grade: 'должность',
 		photo: 'фото',
 		first_name: 'имя',
 		roles: 'роли',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		state_working: 'работает',
 		name_plural: 'пользователи',
 		name_plural_deleted: 'удаленные пользователи',
 		role_student: 'сотрудник',
	},
	menu: {
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_task_type: 'Типы задач',
 		ctlg_task_state: 'Статусы задач',
 		counterparty: 'Контрагенты',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_task_role: 'Роли в задачах',
 		man: 'Люди',
 		bug: 'Баги',
 		request: 'Запросы',
 		invoice: 'Счета',
 		work_task_link: 'Связи дел и цифровых решений',
 		comment: 'Комментарии',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		company: 'Компании',
 		system: 'Системы',
 		functional_requirement: 'Функциональные требования',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		time: 'Время',
 		user: 'пользователи',
 		ctlg_bug_state: 'Статусы багов',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		meeting: 'Встречи',
 		customer_task: 'Задачи заказчиков',
 		ctlg_time_type: 'Типы времени',
 		work: 'Дела',
 		work_specialist_link: 'Участники дел',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		news_from_dima: 'Новости от Димы',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_work_state: 'Статусы дел',
 		task: 'Задачи',
 		task_specialist_link: 'Участники задач',
 		contract: 'Договоры',
 		digital_solution: 'Цифровые решения',
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
	ctlg_work_state,
	ctlg_bug_state,
	ctlg_customer_task_state,
	meeting,
	contract,
	counterparty,
	company,
	man,
	system,
	request,
	digital_solution,
	functional_requirement,
	invoice,
	task,
	work,
	customer_task,
	bug,
	task_specialist_link,
	digital_solution_specialist_link,
	digital_solution_customer_agent_link,
	work_specialist_link,
	work_task_link,
	time,
	comment,
	news_from_dima,
}
