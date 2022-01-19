import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Button from './Button';
import ErrorModal from './ErrorModal';

export default function AddUser(props = { onAddUserClicked: (message) => { } }) {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [error, hideErrorModal] = useState(false);
	const [errorMessage, setErrorMessage] = useState();
	const errorMessages = [
		'Please enter a valid name and age (non-empty values).',
		'Please enter a valid age (> 0).',
	];

	return (<div className={styles.add_user}>
		{error && <ErrorModal onOKClicked={() => hideErrorModal(false)}>{errorMessage}</ErrorModal>}

		<form className={styles.input} onSubmit={(event) => {
			event.preventDefault();
			if (username.trim().length === 0 || age.trim().length === 0) {
				hideErrorModal(true);
				setErrorMessage(errorMessages[[0]]);
			}
			else if (+age < 0) {
				hideErrorModal(true);
				setErrorMessage(errorMessages[1]);
			}
			else {
				hideErrorModal(false);
				props.onAddUserClicked(`Username is ${username} and age is ${age}.`);
				setUsername("");
				setAge("");
			}
		}}>
			<label>Username</label>
			<input type="text" value={username} onChange={(event) => { setUsername(event.target.value) }}></input>
			<label>Age (Years)</label>
			<input type="number" value={age} onChange={(event) => { setAge(event.target.value) }}></input>
			<Button>Add User</Button>
		</form>
	</div>);
}