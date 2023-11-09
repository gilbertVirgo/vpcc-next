import Button from "./Button";
import Grid from "./Grid";
import feature from "./feature.module.scss";

export default () => (
	<Grid>
		<div className={[feature.minor, feature.left].join(" ")}>
			<h2>What we believe</h2>
			<p>We submit to the UCCF Statement of Faith.</p>
			<a
				target="_blank"
				href="https://www.uccf.org.uk/media/pages/impact/more/asked-to-be-a-leader/1964487579-1692888765/uccf_doctrinalbasis.pdf"
			>
				<Button>Find out more →</Button>
			</a>
		</div>
		<div
			className={[feature.major, feature.right, feature.image].join(" ")}
			style={{ backgroundImage: `url("/assets/doctrinal-basis.jpg")` }}
		/>
	</Grid>
);
