import Head from "next/head";
// import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import MediaCard from "../components/MainHero";
import FiveUsp from "../components/FiveUsp"
import FeaturedProducts from "../components/FeaturedProducts";
import TrustedBy from "../components/TrustedBy";
import { Fragment } from "react";
import Brochure from '../components/Brochure'
import Footer from "../components/Footer";
import Categories from "../components/Categories";

export default function Home() {
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
			<FeaturedProducts />
			<Categories />
			<Brochure />
			<Footer />
		{/* </div> */}
    </Fragment>
	);
}
