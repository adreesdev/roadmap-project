import {
	Box,
	Container,
	createTheme,
	Grid,
	responsiveFontSizes,
	ThemeProvider,
	Typography,
} from "@mui/material";
import React from "react";
import Build1 from "../components/buildpage/build1";
import Build2 from "../components/buildpage/build2";
import Build3 from "../components/buildpage/build3";
import BuildAccordions from "../components/buildpage/buildaccordions";
import BuildCards1 from "../components/buildpage/buildcards1";
import BuildCards2 from "../components/buildpage/buildcards2";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Build = () => {
	let buildcards1_data = require("../assets/data/card2.json");
	let buildcards1_render = buildcards1_data.map(({ title }, i) => (
		<BuildCards1 key={i} title={title} />
	));
	let buildcards2_render = buildcards1_data.map(({ title }, i) => (
		<BuildCards2 key={i} title={title} />
	));
	let tools_data = require("../assets/data/tools.json");
	let guide_data = require("../assets/data/guide.json");
	let need_data = require("../assets/data/need.json");
	return (
		<>
			<Container>
				<Build1 />
				<Box px={4} pt={2} pb={3}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
							}}
							variant="h3"
						>
							Build without Compromise
						</Typography>
					</ThemeProvider>
				</Box>
				<Grid container py={2} px={4}>
					<Grid item md={8}>
						<Grid container>{buildcards1_render}</Grid>
					</Grid>
					<Grid item md={4}></Grid>
				</Grid>
				<Box pt={5} pb={1}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h4"
						>
							Getting Started is simple
						</Typography>
					</ThemeProvider>
				</Box>
				<BuildAccordions />
				<Box pt={5} pb={4}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h4"
						>
							Case Study
						</Typography>
					</ThemeProvider>
				</Box>
				<Build2 />
				<Box pt={9} pb={1}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h4"
						>
							Build your best ideas with us
						</Typography>
					</ThemeProvider>
				</Box>
				<Grid container py={2} px={4}>
					{buildcards2_render}
				</Grid>
				<Box pt={5} pb={3}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h4"
						>
							Here's what you'll need
						</Typography>
					</ThemeProvider>
				</Box>
				{need_data.map(({ title }, i) => (
					<Build3 title={title} key={i} />
				))}
				<Box pt={9} pb={3}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h4"
						>
							Tutorials & guides
						</Typography>
					</ThemeProvider>
				</Box>
				{guide_data.map(({ title }, i) => (
					<Build3 title={title} key={i} />
				))}
				<Box pt={9} pb={3}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h4"
						>
							Tools
						</Typography>
					</ThemeProvider>
				</Box>
				{tools_data.map(({ title }, i) => (
					<Build3 title={title} key={i} />
				))}
			</Container>
		</>
	);
};

export default Build;
