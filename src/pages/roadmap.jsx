import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Roadmap1 from "../components/roadmappage/roadmap1";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";
import RoadMap2 from "../components/roadmappage/roadmap2";
import RoadMap3 from "../components/roadmappage/roadmap3";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Roadmap = () => {
	let roadmap2_data = require("../assets/data/accordians1.json");
	let roadmap2_render = roadmap2_data.map(({ title, date, direction }, i) => (
		<RoadMap2 key={i} title={title} date={date} direction={direction} />
	));

	let roadmap3_data = require("../assets/data/accordians2.json");
	let roadmap3_render = roadmap3_data.map(({ head, content }, i) => (
		<RoadMap3 key={i} head={head} content={content} />
	));

	return (
		<>
			<Container>
				<Roadmap1 />
				<Box py={5}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h2"
						>
							RoadMap
						</Typography>
					</ThemeProvider>
				</Box>
				{roadmap2_render}

				<Box py={5}>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h2"
						>
							Upcomig Milestone
						</Typography>
					</ThemeProvider>
				</Box>
				{roadmap3_render}
			</Container>
		</>
	);
};

export default Roadmap;
