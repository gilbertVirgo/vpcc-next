"use client";

import Image from "next/image";
import React from "react";
import banner from "./banner.module.scss";
import { redirect } from "next/navigation";

const SERVICE_DATE = new Date(2023, 11, 17, 17, 0, 0, 0);

const BigNumber = ({ children }) => (
	<h2 style={{ fontSize: "150px", margin: "25px 0 -25px" }}>{children}</h2>
);

const getCountdownString = (countdown) => {
	if (countdown.days >= 1)
		return (
			<>
				<BigNumber>{countdown.days}</BigNumber>
				<h2>days to go</h2>
			</>
		);
	else if (countdown.hours > 1)
		return (
			<>
				<BigNumber>{countdown.hours}</BigNumber>
				<h2>hours to go</h2>
			</>
		);
	else if (countdown.hours >= 0) return <h2>Less than an hour to go!</h2>;
	else if (countdown.hours > -2)
		return <h2>We've already started, but feel free to join anyway!</h2>;
	else return redirect("/");
};

export default () => {
	const now = new Date();
	const countdown = {
		days: Math.round((SERVICE_DATE - now) / 1000 / 60 / 60 / 24),
		hours: Math.round((SERVICE_DATE - now) / 1000 / 60 / 60),
		minutes: Math.round((SERVICE_DATE - now) / 1000 / 60),
		seconds: Math.round((SERVICE_DATE - now) / 1000),
	};

	return (
		<div className={banner.wrapper}>
			<Image src="/assets/holly.svg" width={100} height={50} />
			<h1>Carol Service</h1>
			<div>{getCountdownString(countdown)}</div>
		</div>
	);
};
