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
	profile: {
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
	},
	user: {
 		phone: 'телефон',
 		grade: 'должность',
 		email: 'email',
 		role_admin: 'админ',
 		name_plural_deleted: 'удаленные пользователи',
 		last_name: 'фамилия',
 		roles: 'роли',
 		state: 'статус',
 		role_student: 'сотрудник',
 		first_name: 'имя',
 		state_waiting_auth: 'ожидает авторизации',
 		state_working: 'работает',
 		photo: 'фото',
 		state_fired: 'уволен',
 		name_plural: 'пользователи',
	},
	menu: {
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_bug_state: 'Статусы багов',
 		meeting: 'Встречи',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		time: 'Время',
 		ctlg_task_state: 'Статусы задач',
 		company: 'Компании',
 		system: 'Системы',
 		digital_solution: 'Цифровые решения',
 		task: 'Задачи',
 		task_specialist_link: 'Участники задач',
 		work_task_link: 'Связи дел и цифровых решений',
 		user: 'пользователи',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_work_state: 'Статусы дел',
 		man: 'Люди',
 		work_specialist_link: 'Участники дел',
 		news_from_dima: 'Новости от Димы',
 		ctlg_task_role: 'Роли в задачах',
 		request: 'Запросы',
 		invoice: 'Счета',
 		work: 'Дела',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_task_type: 'Типы задач',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		functional_requirement: 'Функциональные требования',
 		bug: 'Баги',
 		counterparty: 'Контрагенты',
 		customer_task: 'Задачи заказчиков',
 		comment: 'Комментарии',
 		ctlg_time_type: 'Типы времени',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		contract: 'Договоры',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
	},
	message: {
 		cancel: 'отмена',
 		edit: 'редактировать',
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
 		save: 'сохранить',
 		delete: 'удалить',
 		send: 'отправить',
 		ok: 'ok',
	},
	auth: {
 		register: 'зарегистрироваться',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		user_not_found: 'пользователь с таким email не найден',
 		login: 'войти',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		authorization: 'авторизация',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		invalid_email: 'поле "email" заполнено неверно',
 		wrong_password: 'неверный пароль',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
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
