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
	message: {
 		delete: 'удалить',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		photo: 'фото',
 		ok: 'ok',
 		save: 'сохранить',
 		cancel: 'отмена',
 		files: 'файлы',
	},
	auth: {
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		user_not_found: 'пользователь с таким email не найден',
 		wrong_password: 'неверный пароль',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br><br>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		registration: 'регистрация',
 		password_recovery_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register: 'зарегистрироваться',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		authorization: 'авторизация',
 		invalid_email: 'поле "email" заполнено неверно',
 		login: 'войти',
 		password_repeat: 'повторите пароль',
 		password_recovery: 'восстановление пароля',
 		password_recovery_success_message: 'пароль успешно изменен',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email.<br>Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		password: 'пароль',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
	},
	profile: {
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
	},
	user: {
 		first_name: 'имя',
 		phone: 'телефон',
 		email: 'email',
 		role_admin: 'админ',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		name_plural_deleted: 'удаленные пользователи',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		roles: 'роли',
 		role_student: 'сотрудник',
 		state_waiting_auth: 'ожидает авторизации',
 		photo: 'фото',
 		last_name: 'фамилия',
 		state: 'статус',
 		grade: 'должность',
 		name_plural: 'пользователи',
	},
	menu: {
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_work_state: 'Статусы дел',
 		contract: 'Договоры',
 		work: 'Дела',
 		time: 'Время',
 		ctlg_time_type: 'Типы времени',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_bug_state: 'Статусы багов',
 		counterparty: 'Контрагенты',
 		company: 'Компании',
 		work_task_link: 'Связи дел и цифровых решений',
 		ctlg_task_type: 'Типы задач',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		digital_solution: 'Цифровые решения',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_task_role: 'Роли в задачах',
 		system: 'Системы',
 		comment: 'Комментарии',
 		meeting: 'Встречи',
 		request: 'Запросы',
 		customer_task: 'Задачи заказчиков',
 		work_specialist_link: 'Участники дел',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		task_specialist_link: 'Участники задач',
 		user: 'пользователи',
 		man: 'Люди',
 		functional_requirement: 'Функциональные требования',
 		bug: 'Баги',
 		news_from_dima: 'Новости от Димы',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		invoice: 'Счета',
 		task: 'Задачи',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
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
