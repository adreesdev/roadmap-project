import { Box, Typography } from "@mui/material";
import React from "react";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Roadmap1 = () => {
	return (
		<>
			<Box py={2}>
				<ThemeProvider theme={theme}>
					<Typography
						sx={{
							fontFamily: "'Lato'",
							fontStyle: "normal",
							fontWeight: "700",
							color: "#6100BF",
							textAlign: { md: "left", xs: "center" },
						}}
						px={1}
						variant="h2"
					>
						Name Here
					</Typography>
				</ThemeProvider>

				<Box
					sx={{
						backgroundImage: `url(${"/assets/images/background/roadmapbg.png"})`,
						width: "100%",
						height: { lg: "500px", md: "450px", sm: "300px", xs: "250px" },
						backgroundSize: "cover",
					}}
				>
					<ThemeProvider theme={theme}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "white",
								textAlign: { md: "left", xs: "center" },
							}}
							px={{ md: 2, xs: 0 }}
							variant="h2"
						>
							Live RoadMap
						</Typography>
					</ThemeProvider>
				</Box>
			</Box>
		</>
	);
};

export default Roadmap1;
