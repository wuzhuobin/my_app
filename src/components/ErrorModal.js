import React from "react";
import Button from "./Button";

import styles from "./ErrorModal.module.css";

export default function ErrorModal(props = { onOKClicked: () => { } }) {
	return (<div className={styles.backdrop}>
		<div className={styles.modal}>
			<header className={styles.header}>
				<h2>
					Error:
				</h2>
			</header>
			<div className={styles.content}>
				{props.children}
			</div>
			<footer className={styles.actions}>
				<Button onClick={ props.onOKClicked }>OK</Button>
			</footer>
		</div>
	</div>)
}