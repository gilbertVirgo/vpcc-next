import Image from "next/image";
import styles from "./s.module.scss";

export default () => (
	<div className={styles.wrapper}>
		<Image src="assets/traffic-cone.svg" width={80} height={100} />
		<h1>Website under construction</h1>
		<p>In the mean time, please find essential info below.</p>
	</div>
);
