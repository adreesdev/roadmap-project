import { Box, Typography } from "@mui/material";
import React from "react";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const LiveRoadmap1 = () => {
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
						Live Roadmap
					</Typography>
				</ThemeProvider>

				<Box
					sx={{
						backgroundImage: `url(${"/assets/images/background/bg5.png"})`,
						width: "100%",
						height: { lg: "500px", md: "450px", sm: "300px", xs: "250px" },
						backgroundSize: "cover",
					}}
				></Box>
			</Box>
		</>
	);
};

export default LiveRoadmap1;
