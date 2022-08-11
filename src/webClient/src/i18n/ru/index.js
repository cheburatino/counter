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
	menu: {
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		ctlg_order_by: 'Сортировки',
 		ctlg_development_task_state: 'Статусы задач на разработку',
 		technical_task: 'Технические задания',
 		company: 'Компании',
 		task: 'Задачи',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_completion_act_state: 'Статусы актов',
 		completion_act: 'Акты выполненных работ',
 		work: 'Работы',
 		ctlg_development_task_type: 'Типы задач на разработку',
 		legal_entity: 'Юр.Лица',
 		invoice: 'Счета',
 		sprint: 'Спринты',
 		user: 'пользователи',
 		ctlg_contract_state: 'Статусы договоров',
 		ctlg_filter: 'Фильтры',
 		ctlg_invoice_state: 'Статусы счетов',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		system: 'Системы',
 		development_task: 'Задачи разработки',
 		payment: 'Платежи',
 		ctlg_work_state: 'Статусы работ',
 		meeting: 'Встречи',
 		digital_solution: 'Цифровые решения',
 		ctlg_task_type: 'Типы задач',
 		man: 'Контакты',
 		time: 'Время',
 		customer_task: 'Задачи заказчиков',
 		news_from_dima: 'Новости от Димы',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		ctlg_time_state: 'Статусы времени',
 		contract: 'Договоры',
	},
	message: {
 		ok: 'ok',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		files: 'файлы',
 		photo: 'фото',
 		save: 'сохранить',
 		cancel: 'отмена',
 		delete: 'удалить',
	},
	auth: {
 		register: 'зарегистрироваться',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		user_not_found: 'пользователь с таким email не найден',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		authorization: 'авторизация',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_success_message: 'пароль успешно изменен',
 		password_repeat: 'повторите пароль',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		registration: 'регистрация',
 		password_recovery: 'восстановление пароля',
 		wrong_password: 'неверный пароль',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		login: 'войти',
 		password: 'пароль',
 		password_recovery_go_to_login: 'перейти к авторизации',
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
 		phone: 'телефон',
 		email: 'email',
 		role_admin: 'админ',
 		state_fired: 'уволен',
 		role_specialist: 'специалист',
 		name_plural: 'пользователи',
 		roles: 'роли',
 		grade: 'должность',
 		photo: 'фото',
 		role_customer: 'заказчик',
 		last_name: 'фамилия',
 		role_student: 'сотрудник',
 		state_working: 'работает',
 		state: 'статус',
 		state_waiting_auth: 'ожидает авторизации',
 		first_name: 'имя',
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
