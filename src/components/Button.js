import React from "react";
import styles from "./Button.module.css";

export default function Button(props = { onClick: () => { } }) {
	return (
		<button className={styles.button} onClick={props.onClick}>{props.children}</button>
	);
}