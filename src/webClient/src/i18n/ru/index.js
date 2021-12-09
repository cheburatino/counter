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
	auth: {
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		password_recovery: 'восстановление пароля',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		user_not_found: 'пользователь с таким email не найден',
 		login: 'войти',
 		password_recovery_success_message: 'пароль успешно изменен',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		registration: 'регистрация',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		wrong_password: 'неверный пароль',
 		authorization: 'авторизация',
 		register: 'зарегистрироваться',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
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
 		state: 'статус',
 		grade: 'должность',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		role_admin: 'админ',
 		name_plural: 'пользователи',
 		name_plural_deleted: 'удаленные пользователи',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		email: 'email',
 		phone: 'телефон',
 		photo: 'фото',
 		state_waiting_auth: 'ожидает авторизации',
 		role_specialist: 'специалист',
 		roles: 'роли',
 		role_customer: 'заказчик',
	},
	menu: {
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		company: 'Компании',
 		bug: 'Баги',
 		work_task_link: 'Связи дел и цифровых решений',
 		meeting: 'Встречи',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		ctlg_task_state: 'Статусы задач',
 		request: 'Запросы',
 		invoice: 'Счета',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		ctlg_time_type: 'Типы времени',
 		contract: 'Договоры',
 		customer_task: 'Задачи заказчиков',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		time: 'Время',
 		ctlg_task_type: 'Типы задач',
 		ctlg_work_state: 'Статусы дел',
 		ctlg_bug_state: 'Статусы багов',
 		counterparty: 'Контрагенты',
 		task: 'Задачи',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		system: 'Системы',
 		work: 'Дела',
 		task_specialist_link: 'Участники задач',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		comment: 'Комментарии',
 		user: 'пользователи',
 		ctlg_task_role: 'Роли в задачах',
 		man: 'Контакты',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		work_specialist_link: 'Участники дел',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		digital_solution: 'Цифровые решения',
 		functional_requirement: 'Функциональные требования',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		news_from_dima: 'Новости от Димы',
	},
	message: {
 		ok: 'ok',
 		cancel: 'отмена',
 		edit: 'редактировать',
 		files: 'файлы',
 		photo: 'фото',
 		save: 'сохранить',
 		delete: 'удалить',
 		send: 'отправить',
 		file: 'файл',
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
