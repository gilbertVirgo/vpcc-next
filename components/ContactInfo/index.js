import Grid from "../Grid";
import feature from "../feature.module.scss";

export default () => (
	<Grid>
		<div className={[feature.minor, feature.right].join(" ")}>
			<h2>Connect with&nbsp;us</h2>
			<p>
				Contact us via email at{" "}
				<a href="mailto:ben@vpcc.church">ben@vpcc.church</a> or using{" "}
				<a href="https://www.facebook.com/profile.php?id=100091737656153">
					Facebook
				</a>{" "}
				or{" "}
				<a href="https://www.instagram.com/vpcc.church/">Instagram</a>.
			</p>
		</div>
		<div
			className={[feature.major, feature.left, feature.image].join(" ")}
			style={{ backgroundImage: `url("/assets/contact.jpg")` }}
		/>
	</Grid>
);
