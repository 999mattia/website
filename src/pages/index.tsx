import Head from "next/head";
import { useLastFM } from "use-last-fm";
import styles from "@/styles/Home.module.css";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
	const lastFM = useLastFM("mattia_999", "ddd142322b7ef8898f1fc27ad07a1760");

	return (
		<div className={styles.center}>
			<div className={styles.container}>
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
				<div className={styles.about}>
					<div>
						{/* <Image
							className={styles.aboutIcon}
							src="/code.svg"
							width={75}
							height={75}
							alt="code"
						></Image> */}
					</div>
					<div>
						<h1>hi i'm mattia</h1>i like sports and coding
					</div>
				</div>
				<>
					{lastFM.status === "playing" ? (
						<div className={styles.music}>
							<h2>currently listening to:</h2>
							<div className={styles.musicContent}>
								<div className={styles.musicText}>
									<h2>{lastFM.song.name}</h2> by
									<h2>{lastFM.song.artist}</h2>
								</div>
								<img
									className={styles.musicImg}
									height={150}
									width={150}
									alt="album art"
									src={lastFM.song.art}
								/>
							</div>
						</div>
					) : (
						<></>
					)}
				</>
			</div>
		</div>
	);
}
