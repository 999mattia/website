import styles from "../styles/Header.module.css";
import { useTheme } from "next-themes";
import Image from "next/image";

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
						<Image
							src="/mode.png"
							height={40}
							width={40}
							alt="mode"
						></Image>
					</a>
				</div>
			</header>
		</center>
	);
}
