import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default () => (
	<nav>
		<div
			style={{
				marginTop: "15px",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Link href="/">
				<Image
					className={styles.logo}
					src="/assets/logo.svg"
					alt="Victoria Park Community Church logo"
					width={50}
					height={50}
				/>
			</Link>
		</div>
	</nav>
);
