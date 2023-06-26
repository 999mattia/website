import { style } from "solid-js/web";
import styles from "./Header.module.css";
import github from "../assets/github.svg";
import spotify from "../assets/spotify.svg";
import instagram from "../assets/instagram.svg";

export default function Header() {
	return (
		<div class={styles.container}>
			<div class={styles.content}>
				<a
					class={styles.logo}
					href="/"
				>
					Mattia
				</a>
				<div>
					<a
						href="https://github.com/999mattia/"
						target="blank"
					>
						<img
							class={styles.icon}
							src={github}
						></img>
					</a>
					<a
						href="https://open.spotify.com/user/ninja33-ch"
						target="blank"
					>
						<img
							class={styles.icon}
							src={spotify}
						></img>
					</a>
					<a
						href="https://www.instagram.com/mattia.05x/"
						target="blank"
					>
						<img
							class={styles.icon}
							src={instagram}
						></img>
					</a>
				</div>
			</div>
		</div>
	);
}
