import ctlg_time_type from './ctlg_time_type'
import ctlg_meeting_state from './ctlg_meeting_state'
import ctlg_digital_solution_state from './ctlg_digital_solution_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_state from './ctlg_task_state'
import ctlg_customer_task_state from './ctlg_customer_task_state'
import ctlg_work_state from './ctlg_work_state'
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
import digital_solution from './digital_solution'
import development_task from './development_task'
import customer_task from './customer_task'
import task from './task'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import sprint from './sprint'
import work from './work'
import company_man_link from './company_man_link'
import time from './time'
import comment from './comment'
import news_from_dima from './news_from_dima'

export default {
	message: {
 		edit: 'редактировать',
 		files: 'файлы',
 		photo: 'фото',
 		save: 'сохранить',
 		cancel: 'отмена',
 		send: 'отправить',
 		file: 'файл',
 		ok: 'ok',
 		delete: 'удалить',
	},
	auth: {
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		password_repeat: 'повторите пароль',
 		registration: 'регистрация',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		register: 'зарегистрироваться',
 		login: 'войти',
 		authorization: 'авторизация',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		wrong_password: 'неверный пароль',
 		password: 'пароль',
 		password_recovery: 'восстановление пароля',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		user_not_found: 'пользователь с таким email не найден',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
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
 		state_waiting_auth: 'ожидает авторизации',
 		role_specialist: 'специалист',
 		name_plural: 'пользователи',
 		photo: 'фото',
 		email: 'email',
 		role_admin: 'админ',
 		phone: 'телефон',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		state_fired: 'уволен',
 		last_name: 'фамилия',
 		role_customer: 'заказчик',
 		grade: 'должность',
 		name_plural_deleted: 'удаленные пользователи',
 		first_name: 'имя',
 		roles: 'роли',
 		state: 'статус',
	},
	menu: {
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		news_from_dima: 'Новости от Димы',
 		task: 'Задачи',
 		completion_act: 'Акты выполненных работ',
 		system: 'Системы',
 		development_task: 'Задачи разработки',
 		meeting: 'Встречи',
 		invoice: 'Счета',
 		comment: 'Комментарии',
 		ctlg_task_type: 'Типы задач',
 		ctlg_filter: 'Фильтры',
 		ctlg_order_by: 'Сортировки',
 		payment: 'Платежи',
 		work: 'Дела',
 		company_man_link: 'Связи компаний и людей',
 		ctlg_time_type: 'Типы времени',
 		ctlg_meeting_state: 'Статусы встреч',
 		counterparty: 'Контрагенты',
 		man: 'Контакты',
 		sprint: 'Спринты',
 		ctlg_task_state: 'Статусы задач',
 		technical_task: 'Технические задания',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		ctlg_invoice_state: 'Статусы счетов',
 		ctlg_development_task_state: 'Статусы задач на разработку',
 		contract: 'Договоры',
 		company: 'Компании',
 		user: 'пользователи',
 		ctlg_work_state: 'Статусы дел',
 		time: 'Время',
 		ctlg_development_task_type: 'Типы задач на разработку',
 		ctlg_completion_act_state: 'Статусы актов',
 		digital_solution: 'Цифровые решения',
 		customer_task: 'Задачи заказчиков',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		ctlg_contract_state: 'Статусы договоров',
	},
	ctlg_time_type,
	ctlg_meeting_state,
	ctlg_digital_solution_state,
	ctlg_task_type,
	ctlg_task_state,
	ctlg_customer_task_state,
	ctlg_work_state,
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
	digital_solution,
	development_task,
	customer_task,
	task,
	invoice,
	payment,
	completion_act,
	sprint,
	work,
	company_man_link,
	time,
	comment,
	news_from_dima,
}
