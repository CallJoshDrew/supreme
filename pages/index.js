import Head from "next/head";
// import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import MediaCard from "../components/MainHero";
import FiveUsp from "../components/FiveUsp"
import FeaturedProducts from "../components/FeaturedProducts";
import TrustedBy from "../components/TrustedBy";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import Brochure from '../components/Brochure'
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const {query: {urlBack, productTab,}} = router;
	const [section, setSection] = useState(null);

	const handleScroll = () => {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView();
		}
	};

	useEffect(() => {
		setSection(urlBack);
	}, [urlBack]);

	useEffect(() => {
		handleScroll();
	},);
	
	return (
    <Fragment >
		{/* <div className={styles.container}> */}
			<Head>
				<title>Supreme Evershine</title>
				<link rel="icon" href="/Logo.png" />
			</Head>
      <NavBar/>
      <MediaCard />
			<FiveUsp />
			<TrustedBy />
			<FeaturedProducts urlBack={urlBack} productTab={productTab}/>
			<Categories urlBack={urlBack} productTab={productTab}/>
			<Brochure />
			<Footer />
		{/* </div> */}
    </Fragment>
	);
}
