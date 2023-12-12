import Grid from "../Grid";
import feature from "../feature.module.scss";

export default () => (
	<Grid>
		<div className={[feature.left, feature.minor].join(" ")}>
			<h2>Where? When?</h2>
			<p>
				It's all happening <strong>this Sunday</strong> (17 Dec 2023),
				from <strong>5:00pm-6:30pm</strong> at{" "}
				<strong>The Canal Club Community Centre, E2 9HP</strong>.
			</p>
		</div>

		<div
			className={[feature.right, feature.major, feature.iframe].join(" ")}
		>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.905203740282!2d-0.052046201784467755!3d51.534280309435125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d7518c51a91%3A0x81cb98823aa11592!2sCanal%20Club%20Community%20Centre!5e0!3m2!1sen!2suk!4v1695728059219!5m2!1sen!2suk"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</Grid>
);
