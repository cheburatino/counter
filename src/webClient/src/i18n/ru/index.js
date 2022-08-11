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
	profile: {
 		phone: 'телефон',
 		avatar: 'фото',
 		exit: 'выйти',
 		breadcrumb_label: 'Редактирование профиля',
 		last_name: 'фамилия',
 		first_name: 'имя',
	},
	user: {
 		state_waiting_auth: 'ожидает авторизации',
 		state_working: 'работает',
 		role_customer: 'заказчик',
 		role_specialist: 'специалист',
 		first_name: 'имя',
 		roles: 'роли',
 		role_student: 'сотрудник',
 		state_fired: 'уволен',
 		last_name: 'фамилия',
 		photo: 'фото',
 		grade: 'должность',
 		email: 'email',
 		role_admin: 'админ',
 		name_plural: 'пользователи',
 		name_plural_deleted: 'удаленные пользователи',
 		state: 'статус',
 		phone: 'телефон',
	},
	menu: {
 		sprint: 'Спринты',
 		ctlg_contract_state: 'Статусы договоров',
 		meeting: 'Встречи',
 		technical_task: 'Технические задания',
 		payment: 'Платежи',
 		ctlg_customer_task_state: 'Статусы задач заказчиков',
 		ctlg_development_task_state: 'Статусы задач на разработку',
 		system: 'Системы',
 		contract: 'Договоры',
 		digital_solution: 'Цифровые решения',
 		development_task: 'Задачи разработки',
 		completion_act: 'Акты выполненных работ',
 		user: 'пользователи',
 		ctlg_digital_solution_state: 'Статусы цифровых решений',
 		ctlg_task_type: 'Типы задач',
 		ctlg_time_state: 'Статусы времени',
 		ctlg_completion_act_state: 'Статусы актов',
 		invoice: 'Счета',
 		news_from_dima: 'Новости от Димы',
 		company: 'Компании',
 		task: 'Задачи',
 		time: 'Время',
 		ctlg_meeting_state: 'Статусы встреч',
 		ctlg_technical_task_work_state: 'Статусы работ по ТЗ',
 		ctlg_filter: 'Фильтры',
 		legal_entity: 'Юр.Лица',
 		ctlg_development_task_type: 'Типы задач на разработку',
 		man: 'Контакты',
 		customer_task: 'Задачи заказчиков',
 		work: 'Работы',
 		ctlg_task_state: 'Статусы задач',
 		ctlg_work_state: 'Статусы работ',
 		ctlg_technical_task_state: 'Статусы технических заданий',
 		ctlg_invoice_state: 'Статусы счетов',
 		ctlg_system_state: 'Статусы систем',
 		ctlg_order_by: 'Сортировки',
	},
	message: {
 		save: 'сохранить',
 		edit: 'редактировать',
 		send: 'отправить',
 		file: 'файл',
 		photo: 'фото',
 		ok: 'ok',
 		cancel: 'отмена',
 		delete: 'удалить',
 		files: 'файлы',
	},
	auth: {
 		login: 'войти',
 		authorization: 'авторизация',
 		forgot_password: 'забыли пароль',
 		register_message: 'Проверьте указанный в регистрации email. Должно прийти письмо для подтверждения почтового адреса.',
 		invalid_first_name: 'необходимо заполнить поле "имя"',
 		invalid_last_name: 'необходимо заполнить поле "фамилия"',
 		check_user_email_message: 'Ссылка уже неактивна. Возможные причины: <br/><br/>- Ваш email уже успешно подтвержден - попробуйте войти в систему с логином и паролем <br/>- Истекло время подтверждения почтового адреса. Нужно регистрироваться снова',
 		wrong_password: 'неверный пароль',
 		password_recovery: 'восстановление пароля',
 		password_recovery_success_message: 'пароль успешно изменен',
 		register: 'зарегистрироваться',
 		invalid_email: 'поле "email" заполнено неверно',
 		invalid_password_must_be_more_7: 'пароль должен быть больше 7 знаков',
 		invalid_user_already_exist: 'пользователь с таким email уже зарегестрирован',
 		user_not_found: 'пользователь с таким email не найден',
 		password_recovery_message: 'Проверьте указанный в регистрации email. Должно прийти письмо с ссылкой для восстановления пароля.',
 		password_recovery_go_to_login: 'перейти к авторизации',
 		invalid_password_wrong_repeat: 'повторно введенный пароль не совпадает с первым вариантом',
 		password: 'пароль',
 		password_repeat: 'повторите пароль',
 		registration: 'регистрация',
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
