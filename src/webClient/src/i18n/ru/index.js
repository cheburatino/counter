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
 		ok: 'ok',
 		file: 'файл',
 		send: 'отправить',
 		files: 'файлы',
 		photo: 'фото',
 		save: 'сохранить',
 		cancel: 'отмена',
 		delete: 'удалить',
 		edit: 'редактировать',
	},
	auth: {
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		login: 'войти',
 		password_recovery: 'восстановление пароля',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		password_repeat: 'повторите пароль',
 		forgot_password: 'забыли пароль',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password: 'пароль',
 		register: 'зарегистрироваться',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		user_not_found: 'пользователь с таким email не найден',
 		wrong_password: 'неверный пароль',
 		registration: 'регистрация',
 		authorization: 'авторизация',
	},
	profile: {
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
	},
	user: {
 		name_plural: 'пользователи',
 		roles: 'роли',
 		photo: 'фото',
 		role_admin: 'админ',
 		role_student: 'сотрудник',
 		last_name: 'фамилия',
 		state_waiting_auth: 'ожидает авторизации',
 		state_working: 'работает',
 		name_plural_deleted: 'удаленные пользователи',
 		first_name: 'имя',
 		state: 'статус',
 		email: 'email',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		phone: 'телефон',
 		grade: 'должность',
 		state_fired: 'уволен',
	},
	menu: {
 		ctlg_task_type: 'Типы задач',
 		invoice: 'Счета',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_work_state: 'Статусы работ',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		meeting: 'Встречи',
 		ctlg_filter: 'Фильтры',
 		contract: 'Договоры',
 		completion_act: 'Акты выполненных работ',
 		work: 'Работы',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		time: 'Время',
 		ctlg_contract_state: 'Статусы договоров',
 		task: 'Задачи',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_completion_act_state: 'Статусы актов',
 		ctlg_invoice_state: 'Статусы счетов',
 		ctlg_order_by: 'Сортировки',
 		work_time_sheet: 'ЛУРВ',
 		system: 'Системы',
 		user: 'пользователи',
 		man: 'Контакты',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_time_state: 'Статусы времени',
 		technical_task: 'Технические задания',
 		legal_entity: 'Юр.Лица',
 		company: 'Компании',
 		customer_task: 'Задачи заказчиков',
 		payment: 'Платежи',
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
