import styles from "../styles/Header.module.css";

export default function Header() {
	return (
		<center>
			<header className={styles.container}>
				<div className={styles.left}>Mattia</div>
				<div className={styles.right}>
					<img
						src="/mode.png"
						height="40px"
					></img>
				</div>
			</header>
		</center>
	);
}
