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
	auth: {
 		login: 'войти',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		wrong_password: 'неверный пароль',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		forgot_password: 'забыли пароль',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		authorization: 'авторизация',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register: 'зарегистрироваться',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		user_not_found: 'пользователь с таким email не найден',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
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
 		name_plural_deleted: 'удаленные пользователи',
 		phone: 'телефон',
 		role_admin: 'админ',
 		state_working: 'работает',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		state: 'статус',
 		roles: 'роли',
 		email: 'email',
 		role_student: 'сотрудник',
 		state_fired: 'уволен',
 		grade: 'должность',
 		photo: 'фото',
 		state_waiting_auth: 'ожидает авторизации',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
	},
	menu: {
 		functional_requirement: 'Функциональность',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		ctlg_development_task_state: 'Статусы задач на разработку',
 		digital_solution: 'Цифровые решения',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_model_state: 'Статусы моделей',
 		contract: 'Договоры',
 		work_task_link: 'Связи дел и цифровых решений',
 		ctlg_model_type: 'Типы моделей',
 		ctlg_functional_requirement_state: 'Статусы функциональностей',
 		ctlg_order_by: 'Сортировки',
 		task_specialist_link: 'Участники задач',
 		payment: 'Платежи',
 		completion_act: 'Акты выполненных работ',
 		task: 'Задачи',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		system: 'Системы',
 		sprint: 'Спринты',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		time: 'Время',
 		ctlg_task_state: 'Статусы задач',
 		meeting: 'Встречи',
 		technical_task: 'Технические задания',
 		development_task: 'Задачи по разработке',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		man: 'Контакты',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		comment: 'Комментарии',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		user: 'пользователи',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		invoice: 'Счета',
 		bug: 'Баги',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_bug_state: 'Статусы багов',
 		ctlg_filter: 'Фильтры',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		work_specialist_link: 'Участники дел',
 		news_from_dima: 'Новости от Димы',
 		ctlg_work_state: 'Статусы дел',
 		ctlg_contract_state: 'Статусы договоров',
 		ctlg_development_task_type: 'Типы задач на разработку',
 		company: 'Компании',
 		ctlg_invoice_state: 'Статусы счетов',
 		request: 'Запросы',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		counterparty: 'Контрагенты',
 		customer_task: 'Задачи заказчиков',
 		work: 'Дела',
 		model: 'Модели',
 		ctlg_time_type: 'Типы времени',
 		ctlg_task_type: 'Типы задач',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_completion_act_state: 'Статусы актов',
	},
	message: {
 		save: 'сохранить',
 		cancel: 'отмена',
 		delete: 'удалить',
 		edit: 'редактировать',
 		files: 'файлы',
 		photo: 'фото',
 		ok: 'ok',
 		send: 'отправить',
 		file: 'файл',
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
