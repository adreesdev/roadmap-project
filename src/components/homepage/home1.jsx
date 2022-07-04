import { Box, Typography } from "@mui/material";
import React from "react";

import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Home1 = () => {
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
						Build The Future
					</Typography>
				</ThemeProvider>

				<Box
					sx={{
						backgroundImage: `url(${"/assets/images/background/neon-wave-bg.png"})`,
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
							on Name Here
						</Typography>
					</ThemeProvider>
				</Box>
			</Box>

			<Box pt={4} px={4}>
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
						Build without compromise
					</Typography>
				</ThemeProvider>
				<Typography
					sx={{
						fontFamily: "'Lato'",
						fontStyle: "normal",
						fontWeight: "400",
						fontSize: "24px",
						lineHeight: "29px",
						overflowWrap: "break-word",
						textAlign: "justify",
						textJustify: "inter-word",
					}}
					pt={3}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</Typography>
			</Box>
		</>
	);
};

export default Home1;
