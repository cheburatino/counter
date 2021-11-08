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
	profile: {
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
	},
	user: {
 		name_plural_deleted: 'удаленные пользователи',
 		state: 'статус',
 		photo: 'фото',
 		role_customer: 'заказчик',
 		role_student: 'сотрудник',
 		role_specialist: 'специалист',
 		name_plural: 'пользователи',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		grade: 'должность',
 		phone: 'телефон',
 		email: 'email',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		roles: 'роли',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
	},
	menu: {
 		contract: 'Договоры',
 		system: 'Системы',
 		request: 'Запросы',
 		digital_solution: 'Цифровые решения',
 		functional_requirement: 'Функциональные требования',
 		user: 'пользователи',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_task_role: 'Роли в задачах',
 		work: 'Дела',
 		comment: 'Комментарии',
 		invoice: 'Счета',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		ctlg_work_state: 'Статусы дел',
 		meeting: 'Встречи',
 		man: 'Люди',
 		bug: 'Баги',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_task_type: 'Типы задач',
 		customer_task: 'Задачи заказчиков',
 		time: 'Время',
 		ctlg_bug_state: 'Статусы багов',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		work_specialist_link: 'Участники дел',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		news_from_dima: 'Новости от Димы',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_task_state: 'Статусы задач',
 		counterparty: 'Контрагенты',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_customer_task_state: 'Статусы задач клиентов',
 		task: 'Задачи',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		task_specialist_link: 'Участники задач',
 		work_task_link: 'Связи дел и цифровых решений',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_time_type: 'Типы времени',
 		company: 'Компании',
	},
	message: {
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
 		cancel: 'отмена',
 		delete: 'удалить',
 		send: 'отправить',
 		ok: 'ok',
 		save: 'сохранить',
 		edit: 'редактировать',
	},
	auth: {
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		login: 'войти',
 		registration: 'регистрация',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		password: 'пароль',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_email: 'поле "email" заполнено неверно',
 		user_not_found: 'пользователь с таким email не найден',
 		wrong_password: 'неверный пароль',
 		authorization: 'авторизация',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register: 'зарегистрироваться',
 		password_repeat: 'повторите пароль',
 		password_recovery: 'восстановление пароля',
 		password_recovery_success_message: 'пароль успешно изменен',
 		forgot_password: 'забыли пароль',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
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
