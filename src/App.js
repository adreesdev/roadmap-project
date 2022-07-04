import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DrawerAppBar from "./components/header/header";
import Home from "./pages/home";

import Footer from "./components/footer/footer";
import Roadmap from "./pages/roadmap";
import Build from "./pages/build";
import Community from "./pages/community";
import Roadmappage2 from "./pages/liveroadmap";

function App() {
	return (
		<BrowserRouter>
			<DrawerAppBar />
			<Routes>
				<Route path="/roadmap" element={<Roadmap />} />
				<Route path="/liveroadmap" element={<Roadmappage2 />} />
				<Route path="/build" element={<Build />} />
				<Route path="/community" element={<Community />} />
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
