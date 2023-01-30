import ctlg_history_type from './ctlg_history_type'
import ctlg_system_state from './ctlg_system_state'
import ctlg_meeting_state from './ctlg_meeting_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_stage from './ctlg_task_stage'
import ctlg_task_state from './ctlg_task_state'
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
import contact from './contact'
import system from './system'
import legal_entity from './legal_entity'
import contract from './contract'
import work_time_sheet from './work_time_sheet'
import technical_task from './technical_task'
import task from './task'
import meeting from './meeting'
import invoice from './invoice'
import payment from './payment'
import completion_act from './completion_act'
import work from './work'
import time from './time'

export default {
	message: {
 		photo: 'фото',
 		ok: 'ok',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		save: 'сохранить',
 		cancel: 'отмена',
 		delete: 'удалить',
	},
	auth: {
 		password_repeat: 'повторите пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		register: 'зарегистрироваться',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		login: 'войти',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password_recovery: 'восстановление пароля',
 		forgot_password: 'забыли пароль',
 		registration: 'регистрация',
 		wrong_password: 'неверный пароль',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		authorization: 'авторизация',
 		password_recovery_success_message: 'пароль успешно изменен',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		user_not_found: 'пользователь с таким email не найден',
 		password: 'пароль',
	},
	profile: {
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
 		phone: 'телефон',
 		avatar: 'фото',
	},
	user: {
 		state_fired: 'уволен',
 		role_specialist: 'специалист',
 		last_name: 'фамилия',
 		state: 'статус',
 		phone: 'телефон',
 		email: 'email',
 		role_admin: 'админ',
 		state_waiting_auth: 'ожидает авторизации',
 		role_customer: 'заказчик',
 		name_plural: 'пользователи',
 		name_plural_deleted: 'удаленные пользователи',
 		grade: 'должность',
 		photo: 'фото',
 		role_student: 'сотрудник',
 		first_name: 'имя',
 		roles: 'роли',
 		state_working: 'работает',
	},
	menu: {
 		system: 'Системы',
 		work_time_sheet: 'ЛУРВ',
 		meeting: 'Встречи',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		contact: 'Контакты',
 		legal_entity: 'Юр.Лица',
 		completion_act: 'Акты выполненных работ',
 		user: 'пользователи',
 		ctlg_task_type: 'Типы задач',
 		ctlg_completion_act_state: 'Статусы актов',
 		ctlg_filter: 'Фильтры',
 		ctlg_order_by: 'Сортировки',
 		ctlg_time_state: 'Статусы времени',
 		ctlg_invoice_state: 'Статусы счетов',
 		company: 'Компании',
 		payment: 'Платежи',
 		time: 'Время',
 		ctlg_task_state: 'Состояния задачи',
 		contract: 'Договоры',
 		task: 'Задачи',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_work_state: 'Статусы работ',
 		invoice: 'Счета',
 		ctlg_history_type: 'Типы историй',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_task_stage: 'Этапы задачи',
 		technical_task: 'Технические задания',
 		ctlg_contract_state: 'Статусы договоров',
 		work: 'Работы',
	},
	ctlg_history_type,
	ctlg_system_state,
	ctlg_meeting_state,
	ctlg_task_type,
	ctlg_task_stage,
	ctlg_task_state,
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
	contact,
	system,
	legal_entity,
	contract,
	work_time_sheet,
	technical_task,
	task,
	meeting,
	invoice,
	payment,
	completion_act,
	work,
	time,
}
