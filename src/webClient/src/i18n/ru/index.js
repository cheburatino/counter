import ctlg_system_state from './ctlg_system_state'
import ctlg_meeting_state from './ctlg_meeting_state'
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
import ctlg_time_state from './ctlg_time_state'
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
import work_time_sheet from './work_time_sheet'
import legal_entity from './legal_entity'
import company from './company'
import man from './man'
import system from './system'
import customer_task from './customer_task'
import task from './task'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import work from './work'
import time from './time'

export default {
	message: {
 		save: 'сохранить',
 		cancel: 'отмена',
 		file: 'файл',
 		ok: 'ok',
 		delete: 'удалить',
 		edit: 'редактировать',
 		send: 'отправить',
 		files: 'файлы',
 		photo: 'фото',
	},
	auth: {
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		wrong_password: 'неверный пароль',
 		password_repeat: 'повторите пароль',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		registration: 'регистрация',
 		authorization: 'авторизация',
 		register: 'зарегистрироваться',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		user_not_found: 'пользователь с таким email не найден',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		login: 'войти',
 		password: 'пароль',
 		password_recovery_success_message: 'пароль успешно изменен',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
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
 		name_plural_deleted: 'удаленные пользователи',
 		first_name: 'имя',
 		grade: 'должность',
 		name_plural: 'пользователи',
 		roles: 'роли',
 		state: 'статус',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		state_fired: 'уволен',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		state_working: 'работает',
 		last_name: 'фамилия',
 		phone: 'телефон',
 		photo: 'фото',
 		email: 'email',
 		role_student: 'сотрудник',
	},
	menu: {
 		ctlg_order_by: 'Сортировки',
 		legal_entity: 'Юр.Лица',
 		company: 'Компании',
 		customer_task: 'Задачи заказчиков',
 		work: 'Работы',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_time_state: 'Статусы времени',
 		technical_task: 'Технические задания',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_completion_act_state: 'Статусы актов',
 		ctlg_contract_state: 'Статусы договоров',
 		completion_act: 'Акты выполненных работ',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		ctlg_work_state: 'Статусы работ',
 		user: 'пользователи',
 		ctlg_filter: 'Фильтры',
 		meeting: 'Встречи',
 		contract: 'Договоры',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_invoice_state: 'Статусы счетов',
 		task: 'Задачи',
 		payment: 'Платежи',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		work_time_sheet: 'ЛУРВ',
 		system: 'Системы',
 		invoice: 'Счета',
 		time: 'Время',
 		ctlg_task_type: 'Типы задач',
 		man: 'Контакты',
	},
	ctlg_system_state,
	ctlg_meeting_state,
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
	ctlg_time_state,
	meeting,
	contract,
	technical_task,
	work_time_sheet,
	legal_entity,
	company,
	man,
	system,
	customer_task,
	task,
	invoice,
	payment,
	completion_act,
	work,
	time,
}
