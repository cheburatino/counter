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
import ctlg_contract_state from './ctlg_contract_state'
import ctlg_technical_task_state from './ctlg_technical_task_state'
import ctlg_invoice_state from './ctlg_invoice_state'
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
	profile: {
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
	},
	user: {
 		state_waiting_auth: 'ожидает авторизации',
 		photo: 'фото',
 		email: 'email',
 		role_admin: 'админ',
 		role_student: 'сотрудник',
 		last_name: 'фамилия',
 		roles: 'роли',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		role_specialist: 'специалист',
 		name_plural_deleted: 'удаленные пользователи',
 		first_name: 'имя',
 		state: 'статус',
 		phone: 'телефон',
 		grade: 'должность',
 		role_customer: 'заказчик',
 		name_plural: 'пользователи',
	},
	menu: {
 		sprint: 'Спринты',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		time: 'Время',
 		comment: 'Комментарии',
 		ctlg_time_type: 'Типы времени',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		counterparty: 'Контрагенты',
 		bug: 'Баги',
 		ctlg_contract_state: 'Статусы договоров',
 		meeting: 'Встречи',
 		functional_requirement: 'Функциональные требования',
 		invoice: 'Счета',
 		user: 'пользователи',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_work_state: 'Статусы дел',
 		company_man_link: 'Связи компаний и людей',
 		news_from_dima: 'Новости от Димы',
 		ctlg_request_priority: 'Приоритеты запросов',
 		man: 'Контакты',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		ctlg_invoice_state: 'Статусы счетов',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		work_specialist_link: 'Участники дел',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		work_task_link: 'Связи дел и цифровых решений',
 		technical_task: 'Технические задания',
 		system: 'Системы',
 		digital_solution: 'Цифровые решения',
 		customer_task: 'Задачи заказчиков',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		contract: 'Договоры',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		company: 'Компании',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_bug_state: 'Статусы багов',
 		task: 'Задачи',
 		work: 'Дела',
 		task_specialist_link: 'Участники задач',
 		ctlg_task_type: 'Типы задач',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		request: 'Запросы',
	},
	message: {
 		cancel: 'отмена',
 		delete: 'удалить',
 		photo: 'фото',
 		save: 'сохранить',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		ok: 'ok',
	},
	auth: {
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		login: 'войти',
 		password: 'пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		forgot_password: 'забыли пароль',
 		register: 'зарегистрироваться',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		password_repeat: 'повторите пароль',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		user_not_found: 'пользователь с таким email не найден',
 		wrong_password: 'неверный пароль',
 		registration: 'регистрация',
 		authorization: 'авторизация',
 		password_recovery: 'восстановление пароля',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
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
	ctlg_contract_state,
	ctlg_technical_task_state,
	ctlg_invoice_state,
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
