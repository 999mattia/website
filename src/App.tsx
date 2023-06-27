import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import styles from "./App.module.css";
import { Song } from "./lib/types";
import icon from "./assets/icon.png";

const App: Component = () => {
	const [song, setSong] = createSignal<Song>({
		name: "Loading...",
		artist: "Loading...",
		imgUrl: "",
	});

	createEffect(() => {
		const fetchSong = async () => {
			try {
				const res = await fetch("https://spotify.mattiag.ch/current");
				const song: Song = await res.json();
				setSong(song);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchSong();

		const intervall = setInterval(fetchSong, 1000);

		return () => clearInterval(intervall);
	});

	return (
		<div class={styles.container}>
			<div class={styles.content}>
				<div class={styles.aboutContainer}>
					<img
						class={styles.aboutImg}
						src={icon}
					/>
					<div>
						<div class={styles.aboutText1}>hey, i'm mattia</div>
						<div>i like sports</div>
					</div>
				</div>

				<div class={styles.center}>currently listening to:</div>

				<div class={styles.musicContainer}>
					<div class={styles.musicText}>
						<div class={styles.musicTextName}>{song()?.name}</div>
						<div>by</div>
						<div class={styles.musicTextArtist}>
							{song()?.artist}
						</div>
					</div>
					<img
						class={styles.musicImage}
						src={song()?.imgUrl}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
