import Grid from "../Grid";
import feature from "../feature.module.scss";

export default () => (
	<Grid>
		<div className={[feature.minor, feature.right].join(" ")}>
			<h2>Community Carols 2023</h2>
			<p>
				2000 years ago "the Word became flesh and dwelt among us" (John
				1:14), and, quite literally, everything changed.
			</p>
			<p>
				At this year's carol service, we invite you to come join others
				from the local community to sing Christmas carols, eat mince
				pies, and hear what it's all about!
			</p>
			<p>
				If you'd like to help out with either <em>the Choir</em>,{" "}
				<em>Baking</em> or <em>Arts &amp; Crafts</em>, please{" "}
				<a href="mailto:ben@vpcc.church?subject=I%20would%20like%20to%20help%out!">
					get in touch
				</a>{" "}
				as soon as possible!
			</p>
		</div>
		<div
			className={[feature.major, feature.left, feature.image].join(" ")}
			style={{ backgroundImage: `url("/assets/carols.jpg")` }}
		/>
	</Grid>
);
