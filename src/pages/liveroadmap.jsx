import {
	Box,
	Container,
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
	Typography,
} from "@mui/material";
import React from "react";
import LiveRoadmap1 from "../components/roadmappage2/roadmap2";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const LiveRoadmap = () => {
	return (
		<>
			<Container>
				<LiveRoadmap1 />
				<Box
					pt={9}
					pb={3}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "center",
							}}
							variant="h3"
						>
							Roadmap
						</Typography>
						<Box sx={{ width: { md: "60%", sm: "90%" }, textAlign: "center" }}>
							<Typography
								sx={{
									fontFamily: "'Lato'",
									fontStyle: "normal",
									fontWeight: "400",
								}}
								variant="p"
							>
								The Koraplay project roadmap is a technical guideline of what is
								to come. Our project is community driven, and we strive to
								achieve the goals we have set at the earliest.
							</Typography>
						</Box>
					</ThemeProvider>
				</Box>
				<Box py={4} sx={{ textAlign: "center" }}>
					<img
						src="/assets/images/background/liveroadmap.png"
						alt="liveroadmap"
					/>
				</Box>
			</Container>
		</>
	);
};

export default LiveRoadmap;
