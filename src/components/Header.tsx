import styles from "../styles/Header.module.css";
import { useTheme } from "next-themes";

export default function Header() {
	const { theme, setTheme } = useTheme();

	return (
		<center>
			<header className={styles.container}>
				<div className={styles.left}>Mattia</div>
				<div className={styles.right}>
					<a
						onClick={() =>
							theme == "light"
								? setTheme("dark")
								: setTheme("light")
						}
					>
						<img
							src="/mode.png"
							height="40px"
						></img>
					</a>
				</div>
			</header>
		</center>
	);
}
