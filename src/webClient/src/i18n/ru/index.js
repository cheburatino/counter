import ctlg_electron_skill from './ctlg_electron_skill'
import ctlg_request_state from './ctlg_request_state'
import ctlg_request_priority from './ctlg_request_priority'
import ctlg_time_type from './ctlg_time_type'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_digital_solution_specialist_role from './ctlg_digital_solution_specialist_role'
import ctlg_functional_requirement_state from './ctlg_functional_requirement_state'
import ctlg_functional_requirement_specialist_role from './ctlg_functional_requirement_specialist_role'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_task_role from './ctlg_task_role'
import ctlg_work_state from './ctlg_work_state'
import ctlg_work_specialist_role from './ctlg_work_specialist_role'
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
import functional_requirement_specialist_link from './functional_requirement_specialist_link'
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
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		ok: 'ok',
 		cancel: 'отмена',
 		delete: 'удалить',
 		edit: 'редактировать',
 		photo: 'фото',
	},
	auth: {
 		wrong_password: 'неверный пароль',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_email: 'поле "email" заполнено неверно',
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		login: 'войти',
 		register: 'зарегистрироваться',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		user_not_found: 'пользователь с таким email не найден',
 		authorization: 'авторизация',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
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
 		email: 'email',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		role_specialist: 'специалист',
 		last_name: 'фамилия',
 		roles: 'роли',
 		state: 'статус',
 		phone: 'телефон',
 		grade: 'должность',
 		role_customer: 'заказчик',
 		first_name: 'имя',
 		photo: 'фото',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		name_plural_deleted: 'удаленные пользователи',
 		role_student: 'сотрудник',
	},
	menu: {
 		user: 'пользователи',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		meeting: 'Встречи',
 		company: 'Компании',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_task_type: 'Типы задач',
 		contract: 'Договоры',
 		bug: 'Баги',
 		news_from_dima: 'Новости от Димы',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_task_role: 'Роли в задачах',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_work_state: 'Статусы дел',
 		man: 'Контакты',
 		invoice: 'Счета',
 		work: 'Дела',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		work_specialist_link: 'Участники дел',
 		work_task_link: 'Связи дел и цифровых решений',
 		comment: 'Комментарии',
 		ctlg_time_type: 'Типы времени',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		ctlg_bug_state: 'Статусы багов',
 		digital_solution: 'Цифровые решения',
 		functional_requirement: 'Функциональные требования',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		counterparty: 'Контрагенты',
 		customer_task: 'Задачи заказчиков',
 		task_specialist_link: 'Участники задач',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		company_man_link: 'Связи компаний и людей',
 		time: 'Время',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		system: 'Системы',
 		request: 'Запросы',
 		task: 'Задачи',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
	},
	ctlg_electron_skill,
	ctlg_request_state,
	ctlg_request_priority,
	ctlg_time_type,
	ctlg_digital_solution_state,
	ctlg_digital_solution_specialist_role,
	ctlg_functional_requirement_state,
	ctlg_functional_requirement_specialist_role,
	ctlg_task_type,
	ctlg_task_state,
	ctlg_task_role,
	ctlg_work_state,
	ctlg_work_specialist_role,
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
	functional_requirement_specialist_link,
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
