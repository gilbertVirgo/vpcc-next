import Image from "next/image";
import banner from "../banner.module.scss";

export default () => (
	<div className={banner.wrapper}>
		<Image src="assets/traffic-cone.svg" width={80} height={100} />
		<h1>Website under construction</h1>
		<p>In the meantime, please find essential info below.</p>
	</div>
);
