import ctlg_time_type from './ctlg_time_type'
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
import meeting from './meeting'
import contract from './contract'
import technical_task from './technical_task'
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
 		roles: 'роли',
 		phone: 'телефон',
 		photo: 'фото',
 		name_plural: 'пользователи',
 		email: 'email',
 		state_waiting_auth: 'ожидает авторизации',
 		last_name: 'фамилия',
 		state_fired: 'уволен',
 		first_name: 'имя',
 		state: 'статус',
 		grade: 'должность',
 		role_admin: 'админ',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
	},
	menu: {
 		ctlg_task_type: 'Типы задач',
 		contract: 'Договоры',
 		system: 'Системы',
 		customer_task: 'Задачи заказчиков',
 		sprint: 'Спринты',
 		work: 'Дела',
 		user: 'пользователи',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		ctlg_filter: 'Фильтры',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_completion_act_state: 'Статусы актов',
 		company: 'Компании',
 		man: 'Контакты',
 		invoice: 'Счета',
 		ctlg_time_type: 'Типы времени',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_invoice_state: 'Статусы счетов',
 		technical_task: 'Технические задания',
 		legal_entity: 'Юр.Лица',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		task: 'Задачи',
 		news_from_dima: 'Новости от Димы',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_work_state: 'Статусы дел',
 		ctlg_contract_state: 'Статусы договоров',
 		ctlg_order_by: 'Сортировки',
 		ctlg_development_task_state: 'Статусы задач на разработку',
 		meeting: 'Встречи',
 		time: 'Время',
 		ctlg_development_task_type: 'Типы задач на разработку',
 		digital_solution: 'Цифровые решения',
 		development_task: 'Задачи разработки',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		payment: 'Платежи',
 		completion_act: 'Акты выполненных работ',
	},
	message: {
 		cancel: 'отмена',
 		file: 'файл',
 		photo: 'фото',
 		send: 'отправить',
 		files: 'файлы',
 		ok: 'ok',
 		save: 'сохранить',
 		delete: 'удалить',
 		edit: 'редактировать',
	},
	auth: {
 		password_recovery: 'восстановление пароля',
 		register: 'зарегистрироваться',
 		user_not_found: 'пользователь с таким email не найден',
 		password_repeat: 'повторите пароль',
 		password_recovery_success_message: 'пароль успешно изменен',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		forgot_password: 'забыли пароль',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		login: 'войти',
 		password: 'пароль',
 		registration: 'регистрация',
 		authorization: 'авторизация',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		wrong_password: 'неверный пароль',
	},
	ctlg_time_type,
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
	meeting,
	contract,
	technical_task,
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
