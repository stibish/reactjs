import React from 'react';
import { useForm } from 'react-hook-form';

const Feedback = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(watch('example'));
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<h3>Заполните заявку на обратную связь</h3>
					<div className="input-group mb-2">
						<input
							{...register('lastName', {
								required: true,
								maxLength: 150,
								pattern: /^[а-яА-Я]+$/i,
							})}
							type="text"
							className="form-control"
							placeholder="Фамилия"
							id="formGroupExampleInput"
						/>
					</div>
					{errors?.lastName?.type === 'required' && (
						<p>Поле обязательно для заполнения</p>
					)}
					{errors?.lastName?.type === 'maxLength' && (
						<p>Поле не может содержать бболее 150 символов</p>
					)}
					{errors?.lastName?.type === 'pattern' && (
						<p>Поле заполнено некорректно</p>
					)}

					<div className="input-group mb-2">
						<input
							{...register('firstName', {
								required: true,
								maxLength: 150,
								pattern: /^[а-яА-Я]+$/i,
							})}
							type="text"
							className="form-control"
							placeholder="Имя"
							id="formGroupExampleInput"
						/>
					</div>
					{errors?.firstName?.type === 'required' && (
						<p>Поле обязательно для заполнения</p>
					)}
					{errors?.firstName?.type === 'maxLength' && (
						<p>Поле не может содержать бболее 150 символов</p>
					)}
					{errors?.firstName?.type === 'pattern' && (
						<p>Поле заполнено некорректно</p>
					)}

					<div className="input-group mb-2">
						<input
							{...register('middleName', {
								required: true,
								maxLength: 150,
								pattern: /^[а-яА-Я]+$/i,
							})}
							type="text"
							className="form-control"
							placeholder="Отчество"
							id="formGroupExampleInput"
						/>
					</div>
					{errors?.middleName?.type === 'required' && (
						<p>Поле обязательно для заполнения</p>
					)}
					{errors?.middleName?.type === 'maxLength' && (
						<p>Поле не может содержать бболее 150 символов</p>
					)}
					{errors?.middleName?.type === 'pattern' && (
						<p>Поле заполнено некорректно</p>
					)}

					<div className="input-group mb-3">
						<input
							{...register('eMail', {
								required: true,
								maxLength: 150,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
							type="email"
							className="form-control"
							placeholder="Email Address"
							id="formGroupExampleInput"
						/>
					</div>
					{errors?.eMail?.type === 'required' && (
						<p>Поле обязательно для заполнения</p>
					)}
					{errors?.eMail?.type === 'maxLength' && (
						<p>Поле не может содержать бболее 150 символов</p>
					)}
					{errors?.eMail?.type === 'pattern' && (
						<p>Email заполнено некорректно</p>
					)}

					<div className="input-group mb-3">
						<input type="submit" />
					</div>
				</div>
			</form>
		</>
	);
};

export default Feedback;
