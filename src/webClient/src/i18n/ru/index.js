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
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import counterparty from './counterparty'
import company from './company'
import man from './man'
import system from './system'
import request from './request'
import digital_solution from './digital_solution'
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
 		password: 'пароль',
 		registration: 'регистрация',
 		authorization: 'авторизация',
 		password_recovery: 'восстановление пароля',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		wrong_password: 'неверный пароль',
 		register: 'зарегистрироваться',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		password_repeat: 'повторите пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		user_not_found: 'пользователь с таким email не найден',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
	},
	profile: {
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
	},
	user: {
 		last_name: 'фамилия',
 		role_student: 'сотрудник',
 		name_plural: 'пользователи',
 		roles: 'роли',
 		phone: 'телефон',
 		photo: 'фото',
 		email: 'email',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		first_name: 'имя',
 		grade: 'должность',
 		state_fired: 'уволен',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		state: 'статус',
 		state_working: 'работает',
 		name_plural_deleted: 'удаленные пользователи',
	},
	menu: {
 		ctlg_task_role: 'Роли в задачах',
 		ctlg_order_by: 'Сортировки',
 		man: 'Контакты',
 		system: 'Системы',
 		task: 'Задачи',
 		ctlg_request_state: 'Статусы запроса',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		payment: 'Платежи',
 		news_from_dima: 'Новости от Димы',
 		user: 'пользователи',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		ctlg_functional_requirement_state: 'Статусы функциональностей',
 		completion_act: 'Акты выполненных работ',
 		sprint: 'Спринты',
 		time: 'Время',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		request: 'Запросы',
 		model: 'Модели',
 		technical_task: 'Технические задания',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		ctlg_task_type: 'Типы задач',
 		ctlg_completion_act_state: 'Статусы актов',
 		digital_solution: 'Цифровые решения',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_contract_state: 'Статусы договоров',
 		customer_task: 'Задачи заказчиков',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		ctlg_bug_state: 'Статусы багов',
 		contract: 'Договоры',
 		task_specialist_link: 'Участники задач',
 		ctlg_time_type: 'Типы времени',
 		ctlg_task_state: 'Статусы задач',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		ctlg_invoice_state: 'Статусы счетов',
 		work: 'Дела',
 		comment: 'Комментарии',
 		ctlg_model_type: 'Типы моделей',
 		invoice: 'Счета',
 		counterparty: 'Контрагенты',
 		functional_requirement: 'Функциональность',
 		work_task_link: 'Связи дел и цифровых решений',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		company: 'Компании',
 		bug: 'Баги',
 		ctlg_model_state: 'Статусы моделей',
 		ctlg_work_state: 'Статусы дел',
 		meeting: 'Встречи',
 		ctlg_filter: 'Фильтры',
 		work_specialist_link: 'Участники дел',
	},
	message: {
 		photo: 'фото',
 		ok: 'ok',
 		cancel: 'отмена',
 		delete: 'удалить',
 		file: 'файл',
 		save: 'сохранить',
 		edit: 'редактировать',
 		send: 'отправить',
 		files: 'файлы',
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
	meeting,
	contract,
	technical_task,
	counterparty,
	company,
	man,
	system,
	request,
	digital_solution,
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
