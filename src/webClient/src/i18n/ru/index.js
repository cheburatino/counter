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
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		password_recovery: 'восстановление пароля',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		authorization: 'авторизация',
 		password_recovery_success_message: 'пароль успешно изменен',
 		forgot_password: 'забыли пароль',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		user_not_found: 'пользователь с таким email не найден',
 		wrong_password: 'неверный пароль',
 		login: 'войти',
 		registration: 'регистрация',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register: 'зарегистрироваться',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
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
 		photo: 'фото',
 		role_admin: 'админ',
 		role_specialist: 'специалист',
 		name_plural_deleted: 'удаленные пользователи',
 		first_name: 'имя',
 		roles: 'роли',
 		state: 'статус',
 		state_waiting_auth: 'ожидает авторизации',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		role_customer: 'заказчик',
 		name_plural: 'пользователи',
 		phone: 'телефон',
 		grade: 'должность',
 		email: 'email',
	},
	menu: {
 		ctlg_work_specialist_role: 'Роли специалистов в делах',
 		ctlg_bug_state: 'Статусы багов',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		ctlg_completion_act_state: 'Статусы актов',
 		customer_task: 'Задачи заказчиков',
 		bug: 'Баги',
 		ctlg_request_priority: 'Приоритеты запросов',
 		ctlg_task_state: 'Статусы задач',
 		work_task_link: 'Связи дел и цифровых решений',
 		task: 'Задачи',
 		task_specialist_link: 'Участники задач',
 		digital_solution_specialist_link: 'Связи цифровых решений и специалиста',
 		ctlg_model_type: 'Типы моделей',
 		functional_requirement: 'Функциональные требования',
 		payment: 'Платежи',
 		sprint: 'Спринты',
 		digital_solution_customer_agent_link: 'Связи цифровых решений и заказчиков',
 		ctlg_task_role: 'Роли в задачах',
 		counterparty: 'Контрагенты',
 		model: 'Модели',
 		functional_requirement_specialist_link: 'Связи цифровых решений и специалистов',
 		bug_customer_agent_link: 'Связи багов и представителей заказчиков',
 		news_from_dima: 'Новости от Димы',
 		ctlg_contract_state: 'Статусы договоров',
 		digital_solution: 'Цифровые решения',
 		system_customer_agent_link: 'Связи систем и представителей заказчиков',
 		time: 'Время',
 		ctlg_order_by: 'Сортировки',
 		completion_act: 'Акты выполненных работ',
 		man: 'Контакты',
 		comment: 'Комментарии',
 		user: 'пользователи',
 		ctlg_functional_requirement_state: 'Статусы функциональных требований',
 		contract: 'Договоры',
 		ctlg_filter: 'Фильтры',
 		work: 'Дела',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		company: 'Компании',
 		request: 'Запросы',
 		ctlg_task_type: 'Типы задач',
 		ctlg_invoice_state: 'Статусы счетов',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		invoice: 'Счета',
 		ctlg_work_state: 'Статусы дел',
 		meeting: 'Встречи',
 		system: 'Системы',
 		ctlg_model_state: 'Статусы моделей',
 		ctlg_functional_requirement_specialist_role: 'Роли специалистов в функциональных требованиях',
 		request_customer_agent_link: 'Связи запросов и представителей заказчиков',
 		ctlg_digital_solution_specialist_role: 'Роли специалистов в цифровых решениях',
 		technical_task: 'Технические задания',
 		functional_requirement_customer_agent_link: 'Связи функциональных требований и представителей заказчиков',
 		work_specialist_link: 'Участники дел',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_request_state: 'Статусы запроса',
 		ctlg_time_type: 'Типы времени',
	},
	message: {
 		save: 'сохранить',
 		cancel: 'отмена',
 		send: 'отправить',
 		photo: 'фото',
 		ok: 'ok',
 		edit: 'редактировать',
 		file: 'файл',
 		files: 'файлы',
 		delete: 'удалить',
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
