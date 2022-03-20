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
	message: {
 		send: 'отправить',
 		photo: 'фото',
 		delete: 'удалить',
 		save: 'сохранить',
 		cancel: 'отмена',
 		edit: 'редактировать',
 		file: 'файл',
 		files: 'файлы',
 		ok: 'ok',
	},
	auth: {
 		register: 'зарегистрироваться',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		login: 'войти',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		password_repeat: 'повторите пароль',
 		password: 'пароль',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		user_not_found: 'пользователь с таким email не найден',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		wrong_password: 'неверный пароль',
 		registration: 'регистрация',
 		authorization: 'авторизация',
 		password_recovery_success_message: 'пароль успешно изменен',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_email: 'поле "email" заполнено неверно',
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
 		state_working: 'работает',
 		roles: 'роли',
 		phone: 'телефон',
 		photo: 'фото',
 		first_name: 'имя',
 		state_fired: 'уволен',
 		role_specialist: 'специалист',
 		state: 'статус',
 		grade: 'должность',
 		email: 'email',
 		role_admin: 'админ',
 		role_student: 'сотрудник',
 		name_plural: 'пользователи',
 		name_plural_deleted: 'удаленные пользователи',
 		last_name: 'фамилия',
 		state_waiting_auth: 'ожидает авторизации',
 		role_customer: 'заказчик',
	},
	menu: {
 		model: 'Модели',
 		ctlg_filter: 'Фильтры',
 		technical_task: 'Технические задания',
 		development_task: 'Задачи по разработке',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		ctlg_time_type: 'Типы времени',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		customer_task: 'Задачи заказчиков',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		company_man_link: 'Связи компаний и людей',
 		news_from_dima: 'Новости от Димы',
 		contract: 'Договоры',
 		sprint: 'Спринты',
 		ctlg_development_task_state: 'Статусы задач на разработку',
 		ctlg_model_state: 'Статусы моделей',
 		ctlg_bug_state: 'Статусы багов',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		man: 'Контакты',
 		bug: 'Баги',
 		work: 'Дела',
 		work_specialist_link: 'Участники дел',
 		ctlg_functional_requirement_state: 'Статусы функциональностей',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		task: 'Задачи',
 		counterparty: 'Контрагенты',
 		company: 'Компании',
 		time: 'Время',
 		ctlg_work_state: 'Статусы дел',
 		ctlg_invoice_state: 'Статусы счетов',
 		functional_requirement: 'Функциональность',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_order_by: 'Сортировки',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		meeting: 'Встречи',
 		completion_act: 'Акты выполненных работ',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_task_state: 'Статусы задач',
 		invoice: 'Счета',
 		work_task_link: 'Связи дел и цифровых решений',
 		comment: 'Комментарии',
 		user: 'пользователи',
 		ctlg_model_type: 'Типы моделей',
 		ctlg_completion_act_state: 'Статусы актов',
 		payment: 'Платежи',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_contract_state: 'Статусы договоров',
 		digital_solution: 'Цифровые решения',
 		task_specialist_link: 'Участники задач',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_task_type: 'Типы задач',
 		request: 'Запросы',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		ctlg_development_task_type: 'Типы задач на разработку',
 		system: 'Системы',
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
