import React, { useState } from "react";
import CarbonAbsorbed from "./CarbonAbsorbed";
import Footer from "./Footer";
import GetKlima from "./GetKlima";
import Header from "./Header";
import Hero from "./Hero";
import Hole from "./Hole";
import Invest from "./Invest";
import Mechanics from "./Mechanics";
import Newsletter from "./Newsletter";

const Main = ({ IsDark, setIsDark }) => {
	return (
		<div className='bg:white dark:bg-bg-dark'>
			<Hero />
			<Hole />
			<Mechanics />
			<CarbonAbsorbed />
			<Invest />
			<GetKlima />
			<Newsletter />
		</div>
	);
};

export default Main;
