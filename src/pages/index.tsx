import Head from "next/head";
import { useEffect } from "react";
import { useLastFM } from "use-last-fm";

export default function Home() {
	const lastFM = useLastFM("mattia_999", "ddd142322b7ef8898f1fc27ad07a1760");

	return (
		<>
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
			<h1>Hello World!</h1>
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
					<>
						<p>i'm currently not listening to music</p>
					</>
				)}
			</div>
		</>
	);
}
