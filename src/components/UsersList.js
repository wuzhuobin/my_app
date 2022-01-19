import React from "react";
import styles from "./UsersList.module.css";


export default function UsersList(props) {
	return (<React.Fragment>
		<div className={styles.users}>
			<ul>
				{props.children.map((value) => { return (<li>{value}</li>); })}
			</ul>
		</div>
	</React.Fragment>);
}