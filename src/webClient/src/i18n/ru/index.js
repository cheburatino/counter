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
	menu: {
 		ctlg_time_type: 'Типы времени',
 		company_man_link: 'Связи компаний и людей',
 		work_specialist_link: 'Участники дел',
 		counterparty: 'Контрагенты',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_task_type: 'Типы задач',
 		meeting: 'Встречи',
 		functional_requirement: 'Функциональные требования',
 		time: 'Время',
 		system: 'Системы',
 		request: 'Запросы',
 		bug: 'Баги',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		work_task_link: 'Связи дел и цифровых решений',
 		invoice: 'Счета',
 		work: 'Дела',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		comment: 'Комментарии',
 		user: 'пользователи',
 		ctlg_work_state: 'Статусы дел',
 		man: 'Люди',
 		digital_solution: 'Цифровые решения',
 		news_from_dima: 'Новости от Димы',
 		ctlg_task_state: 'Статусы задач',
 		task: 'Задачи',
 		customer_task: 'Задачи заказчиков',
 		company: 'Компании',
 		task_specialist_link: 'Участники задач',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_bug_state: 'Статусы багов',
 		contract: 'Договоры',
	},
	message: {
 		ok: 'ok',
 		cancel: 'отмена',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		save: 'сохранить',
 		delete: 'удалить',
 		files: 'файлы',
 		photo: 'фото',
	},
	auth: {
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		login: 'войти',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		forgot_password: 'забыли пароль',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		password_repeat: 'повторите пароль',
 		registration: 'регистрация',
 		wrong_password: 'неверный пароль',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password: 'пароль',
 		register: 'зарегистрироваться',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		user_not_found: 'пользователь с таким email не найден',
 		authorization: 'авторизация',
 		password_recovery: 'восстановление пароля',
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
 		name_plural: 'пользователи',
 		last_name: 'фамилия',
 		roles: 'роли',
 		role_specialist: 'специалист',
 		name_plural_deleted: 'удаленные пользователи',
 		grade: 'должность',
 		state_waiting_auth: 'ожидает авторизации',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		photo: 'фото',
 		email: 'email',
 		role_customer: 'заказчик',
 		first_name: 'имя',
 		state: 'статус',
 		phone: 'телефон',
 		role_admin: 'админ',
 		role_student: 'сотрудник',
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
