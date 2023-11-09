import Grid from "../Grid";
import Image from "next/image";
import Link from "next/link";
import items from "./items";
import styles from "./styles.module.scss";

export default () => (
	<nav className={styles.outer}>
		<div className={styles.inner}>
			<Image
				className={styles.logo}
				src="/assets/logo.svg"
				alt="Victoria Park Community Church logo"
				width={50}
				height={50}
			/>
			{/* <div className={styles.items}>
				{items.map(({ title, link }) => (
					<Link href={link}>{title}</Link>
				))}
			</div> */}
		</div>
	</nav>
);
