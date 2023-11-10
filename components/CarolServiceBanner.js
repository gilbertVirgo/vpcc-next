import Image from "next/image";
import banner from "./banner.module.scss";

export default () => (
	<div className={banner.wrapper}>
		<Image src="/assets/holly.svg" width={100} height={50} />
		<h1>Carol Service</h1>
	</div>
);
