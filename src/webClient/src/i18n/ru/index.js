import ctlg_request_state from './ctlg_request_state'
import ctlg_model_state from './ctlg_model_state'
import ctlg_model_type from './ctlg_model_type'
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
import ctlg_contract_state from './ctlg_contract_state'
import ctlg_technical_task_state from './ctlg_technical_task_state'
import ctlg_technical_task_work_state from './ctlg_technical_task_work_state'
import ctlg_completion_act_state from './ctlg_completion_act_state'
import ctlg_invoice_state from './ctlg_invoice_state'
import ctlg_filter from './ctlg_filter'
import ctlg_order_by from './ctlg_order_by'
import ctlg_development_task_state from './ctlg_development_task_state'
import ctlg_development_task_type from './ctlg_development_task_type'
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import digital_solution from './digital_solution'
import development_task from './development_task'
import model from './model'
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
import bug_customer_agent_link from './bug_customer_agent_link'
import work_specialist_link from './work_specialist_link'
import work_task_link from './work_task_link'
import company_man_link from './company_man_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	profile: {
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
	},
	user: {
 		state_fired: 'уволен',
 		state_waiting_auth: 'ожидает авторизации',
 		email: 'email',
 		role_admin: 'админ',
 		state_working: 'работает',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		roles: 'роли',
 		name_plural_deleted: 'удаленные пользователи',
 		last_name: 'фамилия',
 		state: 'статус',
 		phone: 'телефон',
 		grade: 'должность',
 		name_plural: 'пользователи',
 		photo: 'фото',
 		role_student: 'сотрудник',
 		first_name: 'имя',
	},
	menu: {
 		ctlg_functional_requirement_state: 'Статусы функциональностей',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		model: 'Модели',
 		payment: 'Платежи',
 		ctlg_development_task_state: 'Статусы задач на разработку',
 		counterparty: 'Контрагенты',
 		completion_act: 'Акты выполненных работ',
 		task: 'Задачи',
 		work_task_link: 'Связи дел и цифровых решений',
 		ctlg_filter: 'Фильтры',
 		development_task: 'Задачи разработки',
 		work: 'Дела',
 		user: 'пользователи',
 		ctlg_completion_act_state: 'Статусы актов',
 		digital_solution: 'Цифровые решения',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_invoice_state: 'Статусы счетов',
 		meeting: 'Встречи',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_task_type: 'Типы задач',
 		contract: 'Договоры',
 		customer_task: 'Задачи заказчиков',
 		company: 'Компании',
 		sprint: 'Спринты',
 		ctlg_time_type: 'Типы времени',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		ctlg_order_by: 'Сортировки',
 		technical_task: 'Технические задания',
 		task_specialist_link: 'Участники задач',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		time: 'Время',
 		news_from_dima: 'Новости от Димы',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		comment: 'Комментарии',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_model_type: 'Типы моделей',
 		invoice: 'Счета',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		work_specialist_link: 'Участники дел',
 		ctlg_bug_state: 'Статусы багов',
 		ctlg_contract_state: 'Статусы договоров',
 		request: 'Запросы',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_work_state: 'Статусы дел',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		system: 'Системы',
 		man: 'Контакты',
 		ctlg_development_task_type: 'Типы задач на разработку',
 		functional_requirement: 'Функциональность',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		ctlg_model_state: 'Статусы моделей',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		bug: 'Баги',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
	},
	message: {
 		edit: 'редактировать',
 		file: 'файл',
 		cancel: 'отмена',
 		delete: 'удалить',
 		send: 'отправить',
 		files: 'файлы',
 		photo: 'фото',
 		ok: 'ok',
 		save: 'сохранить',
	},
	auth: {
 		user_not_found: 'пользователь с таким email не найден',
 		login: 'войти',
 		password_repeat: 'повторите пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register: 'зарегистрироваться',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		wrong_password: 'неверный пароль',
 		password: 'пароль',
 		authorization: 'авторизация',
 		password_recovery: 'восстановление пароля',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		registration: 'регистрация',
 		password_recovery_success_message: 'пароль успешно изменен',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
	},
	ctlg_request_state,
	ctlg_model_state,
	ctlg_model_type,
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
	ctlg_contract_state,
	ctlg_technical_task_state,
	ctlg_technical_task_work_state,
	ctlg_completion_act_state,
	ctlg_invoice_state,
	ctlg_filter,
	ctlg_order_by,
	ctlg_development_task_state,
	ctlg_development_task_type,
	meeting,
	contract,
	technical_task,
	counterparty,
	company,
	man,
	system,
	request,
	digital_solution,
	development_task,
	model,
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
	bug_customer_agent_link,
	work_specialist_link,
	work_task_link,
	company_man_link,
	time,
	comment,
	news_from_dima,
}
