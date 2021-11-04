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
import company_man_link from './company_man_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	user: {
 		last_name: 'фамилия',
 		roles: 'роли',
 		grade: 'должность',
 		email: 'email',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		name_plural: 'пользователи',
 		role_admin: 'админ',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		state: 'статус',
 		phone: 'телефон',
 		state_waiting_auth: 'ожидает авторизации',
 		name_plural_deleted: 'удаленные пользователи',
 		photo: 'фото',
 		state_fired: 'уволен',
 		first_name: 'имя',
	},
	menu: {
 		user: 'пользователи',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		system: 'Системы',
 		comment: 'Комментарии',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		counterparty: 'Контрагенты',
 		man: 'Люди',
 		request: 'Запросы',
 		time: 'Время',
 		news_from_dima: 'Новости от Димы',
 		ctlg_task_role: 'Роли в задачах',
 		company: 'Компании',
 		work_task_link: 'Связи дел и цифровых решений',
 		ctlg_task_type: 'Типы задач',
 		ctlg_work_state: 'Статусы дел',
 		digital_solution: 'Цифровые решения',
 		invoice: 'Счета',
 		work: 'Дела',
 		task_specialist_link: 'Участники задач',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		task: 'Задачи',
 		customer_task: 'Задачи заказчиков',
 		ctlg_electron_skill: 'Компетенции',
 		contract: 'Договоры',
 		functional_requirement: 'Функциональные требования',
 		bug: 'Баги',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_bug_state: 'Статусы багов',
 		meeting: 'Встречи',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		work_specialist_link: 'Участники дел',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_time_type: 'Типы времени',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
	},
	message: {
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		photo: 'фото',
 		ok: 'ok',
 		delete: 'удалить',
 		files: 'файлы',
 		save: 'сохранить',
 		cancel: 'отмена',
	},
	auth: {
 		authorization: 'авторизация',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register: 'зарегистрироваться',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password: 'пароль',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		login: 'войти',
 		password_repeat: 'повторите пароль',
 		password_recovery_success_message: 'пароль успешно изменен',
 		forgot_password: 'забыли пароль',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		wrong_password: 'неверный пароль',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		user_not_found: 'пользователь с таким email не найден',
	},
	profile: {
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
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
	company_man_link,
	time,
	comment,
	news_from_dima,
}
