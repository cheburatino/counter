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
import ctlg_technical_task_work_state from './ctlg_technical_task_work_state'
import ctlg_completion_act_state from './ctlg_completion_act_state'
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
import payment from './payment'
import completion_act from './completion_act'
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
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
	},
	user: {
 		role_student: 'сотрудник',
 		state_waiting_auth: 'ожидает авторизации',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		name_plural_deleted: 'удаленные пользователи',
 		phone: 'телефон',
 		photo: 'фото',
 		email: 'email',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		name_plural: 'пользователи',
 		roles: 'роли',
 		state: 'статус',
 		grade: 'должность',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		role_admin: 'админ',
	},
	menu: {
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_completion_act_state: 'Статусы актов',
 		ctlg_task_type: 'Типы задач',
 		work: 'Дела',
 		customer_task: 'Задачи заказчиков',
 		work_specialist_link: 'Участники дел',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		sprint: 'Спринты',
 		company_man_link: 'Связи компаний и людей',
 		time: 'Время',
 		ctlg_work_state: 'Статусы дел',
 		ctlg_contract_state: 'Статусы договоров',
 		meeting: 'Встречи',
 		digital_solution: 'Цифровые решения',
 		technical_task: 'Технические задания',
 		company: 'Компании',
 		customer_task_customer_agent_link: 'Связи задач заказчиков и представителей заказчиков',
 		bug: 'Баги',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		news_from_dima: 'Новости от Димы',
 		ctlg_bug_state: 'Статусы багов',
 		functional_requirement: 'Функциональные требования',
 		ctlg_electron_skill: 'Компетенции',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		counterparty: 'Контрагенты',
 		completion_act: 'Акты выполненных работ',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		system: 'Системы',
 		payment: 'Платежи',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		contract: 'Договоры',
 		comment: 'Комментарии',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		invoice: 'Счета',
 		task_specialist_link: 'Участники задач',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		ctlg_invoice_state: 'Статусы счетов',
 		man: 'Контакты',
 		request: 'Запросы',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		work_task_link: 'Связи дел и цифровых решений',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		user: 'пользователи',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_time_type: 'Типы времени',
 		task: 'Задачи',
	},
	message: {
 		save: 'сохранить',
 		cancel: 'отмена',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		ok: 'ok',
 		delete: 'удалить',
 		photo: 'фото',
	},
	auth: {
 		password_repeat: 'повторите пароль',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		login: 'войти',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password_recovery: 'восстановление пароля',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		user_not_found: 'пользователь с таким email не найден',
 		password: 'пароль',
 		authorization: 'авторизация',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		register: 'зарегистрироваться',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		wrong_password: 'неверный пароль',
 		registration: 'регистрация',
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
	ctlg_technical_task_work_state,
	ctlg_completion_act_state,
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
	payment,
	completion_act,
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
