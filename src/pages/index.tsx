import Head from "next/head";
import { useLastFM } from "use-last-fm";
import styles from "@/styles/Home.module.css";
import { useTheme } from "next-themes";

export default function Home() {
	const lastFM = useLastFM("mattia_999", "ddd142322b7ef8898f1fc27ad07a1760");

	return (
		<div className={styles.center}>
			<main className={styles.container}>
				<Head>
					<title>Mattia</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<link
						rel="icon"
						href="/favicon.ico"
					/>
				</Head>
				<h1>hi, i'm mattia</h1>i like sports, coding and meeting up with
				friends
				<div>
					{lastFM.status === "playing" ? (
						<>
							<img src={lastFM.song.art} />
							<p>
								{" "}
								i'm listening to {lastFM.song.name} by{" "}
								{lastFM.song.artist}
							</p>
						</>
					) : (
						<></>
					)}
				</div>
			</main>
		</div>
	);
}
