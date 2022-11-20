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
 		files: 'файлы',
 		photo: 'фото',
 		save: 'сохранить',
 		cancel: 'отмена',
 		edit: 'редактировать',
 		file: 'файл',
 		ok: 'ok',
 		delete: 'удалить',
 		send: 'отправить',
	},
	auth: {
 		authorization: 'авторизация',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		wrong_password: 'неверный пароль',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password: 'пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		login: 'войти',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		register: 'зарегистрироваться',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		user_not_found: 'пользователь с таким email не найден',
 		password_repeat: 'повторите пароль',
 		password_recovery_success_message: 'пароль успешно изменен',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
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
 		roles: 'роли',
 		state: 'статус',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		role_customer: 'заказчик',
 		first_name: 'имя',
 		grade: 'должность',
 		role_admin: 'админ',
 		state_fired: 'уволен',
 		name_plural: 'пользователи',
 		email: 'email',
 		name_plural_deleted: 'удаленные пользователи',
 		last_name: 'фамилия',
 		phone: 'телефон',
 		photo: 'фото',
 		state_waiting_auth: 'ожидает авторизации',
 		role_specialist: 'специалист',
	},
	menu: {
 		ctlg_system_state: 'Статусы систем',
 		company: 'Компании',
 		time: 'Время',
 		work: 'Работы',
 		completion_act: 'Акты выполненных работ',
 		user: 'пользователи',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		invoice: 'Счета',
 		ctlg_invoice_state: 'Статусы счетов',
 		ctlg_order_by: 'Сортировки',
 		legal_entity: 'Юр.Лица',
 		system: 'Системы',
 		customer_task: 'Задачи заказчиков',
 		ctlg_task_type: 'Типы задач',
 		ctlg_work_state: 'Статусы работ',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		payment: 'Платежи',
 		ctlg_contract_state: 'Статусы договоров',
 		contract: 'Договоры',
 		ctlg_task_state: 'Статусы задач',
 		man: 'Контакты',
 		ctlg_filter: 'Фильтры',
 		ctlg_time_state: 'Статусы времени',
 		meeting: 'Встречи',
 		technical_task: 'Технические задания',
 		task: 'Задачи',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		ctlg_completion_act_state: 'Статусы актов',
 		work_time_sheet: 'ЛУРВ',
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
