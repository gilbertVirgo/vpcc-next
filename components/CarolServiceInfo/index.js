import Button from "../Button";
import Grid from "../Grid";
import feature from "../feature.module.scss";

export default () => (
	<Grid>
		<div className={[feature.minor, feature.right].join(" ")}>
			<h2>Community Carols 2023</h2>
			<p>
				The Bible says 2000 years ago, God "became flesh and dwelt among
				us" (John 1:14). In that one Christmas moment, everything
				changed.
			</p>
			<p>
				At this year's carol service, we invite you to come join others
				from the local community to sing Christmas carols, eat mince
				pies, and hear what it's all about!
			</p>
		</div>
		<div
			className={[feature.major, feature.left, feature.image].join(" ")}
			style={{ backgroundImage: `url("/assets/carols.jpg")` }}
		/>
	</Grid>
);
