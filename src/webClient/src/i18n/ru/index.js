import ctlg_system_state from './ctlg_system_state'
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
import ctlg_time_state from './ctlg_time_state'
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import work_time_sheet from './work_time_sheet'
import legal_entity from './legal_entity'
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
import time from './time'
import news_from_dima from './news_from_dima'

export default {
	message: {
 		cancel: 'отмена',
 		edit: 'редактировать',
 		photo: 'фото',
 		ok: 'ok',
 		delete: 'удалить',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		save: 'сохранить',
	},
	auth: {
 		login: 'войти',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		wrong_password: 'неверный пароль',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		authorization: 'авторизация',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		user_not_found: 'пользователь с таким email не найден',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		registration: 'регистрация',
 		register: 'зарегистрироваться',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		forgot_password: 'забыли пароль',
 		invalid_email: 'поле "email" заполнено неверно',
	},
	profile: {
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
	},
	user: {
 		state_working: 'работает',
 		role_specialist: 'специалист',
 		name_plural: 'пользователи',
 		name_plural_deleted: 'удаленные пользователи',
 		role_admin: 'админ',
 		role_customer: 'заказчик',
 		roles: 'роли',
 		state: 'статус',
 		role_student: 'сотрудник',
 		state_fired: 'уволен',
 		grade: 'должность',
 		email: 'email',
 		phone: 'телефон',
 		photo: 'фото',
 		state_waiting_auth: 'ожидает авторизации',
 		last_name: 'фамилия',
 		first_name: 'имя',
	},
	menu: {
 		user: 'пользователи',
 		ctlg_task_type: 'Типы задач',
 		man: 'Контакты',
 		task: 'Задачи',
 		sprint: 'Спринты',
 		time: 'Время',
 		ctlg_work_state: 'Статусы работ',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		ctlg_invoice_state: 'Статусы счетов',
 		customer_task: 'Задачи заказчиков',
 		payment: 'Платежи',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		digital_solution: 'Цифровые решения',
 		ctlg_completion_act_state: 'Статусы актов',
 		ctlg_order_by: 'Сортировки',
 		system: 'Системы',
 		completion_act: 'Акты выполненных работ',
 		ctlg_development_task_type: 'Типы задач на разработку',
 		technical_task: 'Технические задания',
 		legal_entity: 'Юр.Лица',
 		work: 'Работы',
 		ctlg_filter: 'Фильтры',
 		meeting: 'Встречи',
 		company: 'Компании',
 		ctlg_contract_state: 'Статусы договоров',
 		ctlg_time_state: 'Статусы времени',
 		work_time_sheet: 'ЛУРВ',
 		development_task: 'Задачи разработки',
 		invoice: 'Счета',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_task_state: 'Статусы задач',
 		news_from_dima: 'Новости от Димы',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		ctlg_development_task_state: 'Статусы задач на разработку',
 		contract: 'Договоры',
	},
	ctlg_system_state,
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
	ctlg_time_state,
	meeting,
	contract,
	technical_task,
	work_time_sheet,
	legal_entity,
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
	time,
	news_from_dima,
}
