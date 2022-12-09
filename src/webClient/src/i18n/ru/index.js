import ctlg_plan_end_date_change_side from './ctlg_plan_end_date_change_side'
import ctlg_history_type from './ctlg_history_type'
import ctlg_system_state from './ctlg_system_state'
import ctlg_meeting_state from './ctlg_meeting_state'
import ctlg_task_type from './ctlg_task_type'
import ctlg_task_stage from './ctlg_task_stage'
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
import contact from './contact'
import system from './system'
import legal_entity from './legal_entity'
import contract from './contract'
import work_time_sheet from './work_time_sheet'
import technical_task from './technical_task'
import task from './task'
import plan_end_date_change from './plan_end_date_change'
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
 		ok: 'ok',
 		save: 'сохранить',
 		cancel: 'отмена',
 		send: 'отправить',
 		file: 'файл',
 		delete: 'удалить',
 		edit: 'редактировать',
 		files: 'файлы',
 		photo: 'фото',
	},
	auth: {
 		registration: 'регистрация',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		user_not_found: 'пользователь с таким email не найден',
 		password_repeat: 'повторите пароль',
 		password_recovery: 'восстановление пароля',
 		password_recovery_success_message: 'пароль успешно изменен',
 		wrong_password: 'неверный пароль',
 		authorization: 'авторизация',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		login: 'войти',
 		password: 'пароль',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		forgot_password: 'забыли пароль',
 		register: 'зарегистрироваться',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
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
 		photo: 'фото',
 		email: 'email',
 		name_plural_deleted: 'удаленные пользователи',
 		roles: 'роли',
 		state: 'статус',
 		grade: 'должность',
 		state_working: 'работает',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		first_name: 'имя',
 		phone: 'телефон',
 		state_waiting_auth: 'ожидает авторизации',
 		role_student: 'сотрудник',
 		state_fired: 'уволен',
 		name_plural: 'пользователи',
 		last_name: 'фамилия',
 		role_admin: 'админ',
	},
	menu: {
 		work_time_sheet: 'ЛУРВ',
 		time: 'Время',
 		user: 'пользователи',
 		ctlg_task_stage: 'Этапы задачи',
 		ctlg_task_state: 'Статусы задач',
 		system: 'Системы',
 		contract: 'Договоры',
 		invoice: 'Счета',
 		completion_act: 'Акты выполненных работ',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_contract_state: 'Статусы договоров',
 		plan_end_date_change: 'Изменения плановой даты завершения',
 		ctlg_history_type: 'Типы историй',
 		ctlg_task_type: 'Типы задач',
 		ctlg_work_state: 'Статусы работ',
 		ctlg_invoice_state: 'Статусы счетов',
 		ctlg_time_state: 'Статусы времени',
 		company: 'Компании',
 		legal_entity: 'Юр.Лица',
 		customer_task: 'Задачи заказчиков',
 		payment: 'Платежи',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		technical_task: 'Технические задания',
 		ctlg_completion_act_state: 'Статусы актов',
 		meeting: 'Встречи',
 		work: 'Работы',
 		ctlg_plan_end_date_change_side: 'Из-За кого изменилась плановая дата завершения',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		ctlg_filter: 'Фильтры',
 		contact: 'Контакты',
 		task: 'Задачи',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_order_by: 'Сортировки',
 		man: 'Контакты',
	},
	ctlg_plan_end_date_change_side,
	ctlg_history_type,
	ctlg_system_state,
	ctlg_meeting_state,
	ctlg_task_type,
	ctlg_task_stage,
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
	contact,
	system,
	legal_entity,
	contract,
	work_time_sheet,
	technical_task,
	task,
	plan_end_date_change,
	meeting,
	man,
	customer_task,
	invoice,
	payment,
	completion_act,
	work,
	time,
}
