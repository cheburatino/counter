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
import company from './company'
import system from './system'
import legal_entity from './legal_entity'
import contract from './contract'
import work_time_sheet from './work_time_sheet'
import technical_task from './technical_task'
import task from './task'
import meeting from './meeting'
import man from './man'
import customer_task from './customer_task'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import work from './work'
import time from './time'

export default {
	message: {
 		send: 'отправить',
 		photo: 'фото',
 		ok: 'ok',
 		delete: 'удалить',
 		edit: 'редактировать',
 		files: 'файлы',
 		save: 'сохранить',
 		cancel: 'отмена',
 		file: 'файл',
	},
	auth: {
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		login: 'войти',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		authorization: 'авторизация',
 		invalid_email: 'поле "email" заполнено неверно',
 		wrong_password: 'неверный пароль',
 		register: 'зарегистрироваться',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		forgot_password: 'забыли пароль',
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		user_not_found: 'пользователь с таким email не найден',
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
 		name_plural: 'пользователи',
 		role_admin: 'админ',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		phone: 'телефон',
 		photo: 'фото',
 		state_working: 'работает',
 		first_name: 'имя',
 		roles: 'роли',
 		state: 'статус',
 		email: 'email',
 		role_student: 'сотрудник',
 		state_waiting_auth: 'ожидает авторизации',
 		name_plural_deleted: 'удаленные пользователи',
 		last_name: 'фамилия',
 		grade: 'должность',
 		state_fired: 'уволен',
	},
	menu: {
 		work_time_sheet: 'ЛУРВ',
 		meeting: 'Встречи',
 		work: 'Работы',
 		company: 'Компании',
 		time: 'Время',
 		user: 'пользователи',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_order_by: 'Сортировки',
 		invoice: 'Счета',
 		completion_act: 'Акты выполненных работ',
 		ctlg_contract_state: 'Статусы договоров',
 		ctlg_completion_act_state: 'Статусы актов',
 		ctlg_filter: 'Фильтры',
 		ctlg_time_state: 'Статусы времени',
 		legal_entity: 'Юр.Лица',
 		customer_task: 'Задачи заказчиков',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_task_type: 'Типы задач',
 		ctlg_work_state: 'Статусы работ',
 		technical_task: 'Технические задания',
 		payment: 'Платежи',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		contract: 'Договоры',
 		task: 'Задачи',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_invoice_state: 'Статусы счетов',
 		system: 'Системы',
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
	company,
	system,
	legal_entity,
	contract,
	work_time_sheet,
	technical_task,
	task,
	meeting,
	man,
	customer_task,
	invoice,
	payment,
	completion_act,
	work,
	time,
}
