import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_request_priority from './ctlg_request_priority'
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
import system_customer_agent_link from './system_customer_agent_link'
import request_customer_agent_link from './request_customer_agent_link'
import functional_requirement_customer_agent_link from './functional_requirement_customer_agent_link'
import digital_solution_specialist_link from './digital_solution_specialist_link'
import digital_solution_customer_agent_link from './digital_solution_customer_agent_link'
import customer_task_customer_agent_link from './customer_task_customer_agent_link'
import bug_customer_agent_link from './bug_customer_agent_link'
import work_specialist_link from './work_specialist_link'
import work_task_link from './work_task_link'
import company_man_link from './company_man_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	message: {
 		save: 'сохранить',
 		cancel: 'отмена',
 		edit: 'редактировать',
 		send: 'отправить',
 		files: 'файлы',
 		photo: 'фото',
 		ok: 'ok',
 		delete: 'удалить',
 		file: 'файл',
	},
	auth: {
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		password_recovery: 'восстановление пароля',
 		password_repeat: 'повторите пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		forgot_password: 'забыли пароль',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		wrong_password: 'неверный пароль',
 		password: 'пароль',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		password_recovery_success_message: 'пароль успешно изменен',
 		registration: 'регистрация',
 		authorization: 'авторизация',
 		register: 'зарегистрироваться',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		user_not_found: 'пользователь с таким email не найден',
 		login: 'войти',
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
 		name_plural_deleted: 'удаленные пользователи',
 		photo: 'фото',
 		state_waiting_auth: 'ожидает авторизации',
 		role_customer: 'заказчик',
 		first_name: 'имя',
 		state: 'статус',
 		state_fired: 'уволен',
 		role_specialist: 'специалист',
 		name_plural: 'пользователи',
 		phone: 'телефон',
 		grade: 'должность',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		last_name: 'фамилия',
 		roles: 'роли',
 		email: 'email',
 		role_admin: 'админ',
	},
	menu: {
 		ctlg_bug_state: 'Статусы багов',
 		meeting: 'Встречи',
 		counterparty: 'Контрагенты',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		bug: 'Баги',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_work_state: 'Статусы дел',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		man: 'Контакты',
 		comment: 'Комментарии',
 		time: 'Время',
 		user: 'пользователи',
 		ctlg_time_type: 'Типы времени',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		contract: 'Договоры',
 		work: 'Дела',
 		task: 'Задачи',
 		task_specialist_link: 'Участники задач',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		work_task_link: 'Связи дел и цифровых решений',
 		news_from_dima: 'Новости от Димы',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_task_type: 'Типы задач',
 		invoice: 'Счета',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_task_role: 'Роли в задачах',
 		digital_solution: 'Цифровые решения',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		work_specialist_link: 'Участники дел',
 		ctlg_request_state: 'Статусы запроса',
 		company: 'Компании',
 		system: 'Системы',
 		request: 'Запросы',
 		functional_requirement: 'Функциональные требования',
 		customer_task: 'Задачи заказчиков',
	},
	ctlg_electron_skill,
	ctlg_request_state,
	ctlg_request_priority,
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
	system_customer_agent_link,
	request_customer_agent_link,
	functional_requirement_customer_agent_link,
	digital_solution_specialist_link,
	digital_solution_customer_agent_link,
	customer_task_customer_agent_link,
	bug_customer_agent_link,
	work_specialist_link,
	work_task_link,
	company_man_link,
	time,
	comment,
	news_from_dima,
}
