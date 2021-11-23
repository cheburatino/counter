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
	user: {
 		role_student: 'сотрудник',
 		state_waiting_auth: 'ожидает авторизации',
 		state_working: 'работает',
 		role_specialist: 'специалист',
 		roles: 'роли',
 		phone: 'телефон',
 		grade: 'должность',
 		photo: 'фото',
 		state_fired: 'уволен',
 		name_plural: 'пользователи',
 		first_name: 'имя',
 		name_plural_deleted: 'удаленные пользователи',
 		state: 'статус',
 		email: 'email',
 		role_admin: 'админ',
 		role_customer: 'заказчик',
 		last_name: 'фамилия',
	},
	menu: {
 		functional_requirement: 'Функциональные требования',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_bug_state: 'Статусы багов',
 		counterparty: 'Контрагенты',
 		ctlg_electron_skill: 'Компетенции',
 		man: 'Контакты',
 		work: 'Дела',
 		bug: 'Баги',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		customer_task: 'Задачи заказчиков',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		work_task_link: 'Связи дел и цифровых решений',
 		task: 'Задачи',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		user: 'пользователи',
 		ctlg_task_type: 'Типы задач',
 		meeting: 'Встречи',
 		company: 'Компании',
 		request: 'Запросы',
 		work_specialist_link: 'Участники дел',
 		news_from_dima: 'Новости от Димы',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		contract: 'Договоры',
 		invoice: 'Счета',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		time: 'Время',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_task_role: 'Роли в задачах',
 		system: 'Системы',
 		digital_solution: 'Цифровые решения',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		comment: 'Комментарии',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_time_type: 'Типы времени',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_work_state: 'Статусы дел',
 		task_specialist_link: 'Участники задач',
	},
	message: {
 		delete: 'удалить',
 		edit: 'редактировать',
 		send: 'отправить',
 		photo: 'фото',
 		ok: 'ok',
 		cancel: 'отмена',
 		file: 'файл',
 		files: 'файлы',
 		save: 'сохранить',
	},
	auth: {
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		registration: 'регистрация',
 		forgot_password: 'забыли пароль',
 		register: 'зарегистрироваться',
 		wrong_password: 'неверный пароль',
 		login: 'войти',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		user_not_found: 'пользователь с таким email не найден',
 		authorization: 'авторизация',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
	},
	profile: {
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
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
