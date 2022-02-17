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
import technical_task from './technical_task'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import digital_solution from './digital_solution'
import functional_requirement from './functional_requirement'
import invoice from './invoice'
import sprint from './sprint'
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
 		cancel: 'отмена',
 		delete: 'удалить',
 		ok: 'ok',
 		save: 'сохранить',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
	},
	auth: {
 		wrong_password: 'неверный пароль',
 		registration: 'регистрация',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		password_recovery: 'восстановление пароля',
 		register: 'зарегистрироваться',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		password_repeat: 'повторите пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		user_not_found: 'пользователь с таким email не найден',
 		login: 'войти',
 		password: 'пароль',
 		authorization: 'авторизация',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
	},
	profile: {
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
	},
	user: {
 		name_plural_deleted: 'удаленные пользователи',
 		state: 'статус',
 		grade: 'должность',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		state_waiting_auth: 'ожидает авторизации',
 		state_fired: 'уволен',
 		role_specialist: 'специалист',
 		name_plural: 'пользователи',
 		last_name: 'фамилия',
 		photo: 'фото',
 		email: 'email',
 		role_admin: 'админ',
 		first_name: 'имя',
 		roles: 'роли',
 		phone: 'телефон',
 		role_customer: 'заказчик',
	},
	menu: {
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_bug_state: 'Статусы багов',
 		man: 'Контакты',
 		request: 'Запросы',
 		ctlg_time_type: 'Типы времени',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		work_task_link: 'Связи дел и цифровых решений',
 		time: 'Время',
 		comment: 'Комментарии',
 		ctlg_task_type: 'Типы задач',
 		system: 'Системы',
 		sprint: 'Спринты',
 		task: 'Задачи',
 		customer_task: 'Задачи заказчиков',
 		ctlg_work_state: 'Статусы дел',
 		digital_solution: 'Цифровые решения',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		technical_task: 'Технические задания',
 		company: 'Компании',
 		functional_requirement: 'Функциональные требования',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		user: 'пользователи',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		news_from_dima: 'Новости от Димы',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		contract: 'Договоры',
 		counterparty: 'Контрагенты',
 		invoice: 'Счета',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_request_priority: 'Приоритеты запросов',
 		meeting: 'Встречи',
 		task_specialist_link: 'Участники задач',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		work: 'Дела',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		work_specialist_link: 'Участники дел',
 		ctlg_request_state: 'Статусы запроса',
 		bug: 'Баги',
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
	technical_task,
	counterparty,
	company,
	man,
	system,
	request,
	digital_solution,
	functional_requirement,
	invoice,
	sprint,
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
