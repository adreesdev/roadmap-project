import {
	Box,
	createTheme,
	Grid,
	responsiveFontSizes,
	ThemeProvider,
	Typography,
} from "@mui/material";
import React from "react";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Community2 = () => {
	return (
		<>
			<Grid container py={13}>
				<Grid item md={6} pr={4}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<ThemeProvider theme={theme}>
							<Typography
								sx={{
									fontFamily: "'Lato'",
									fontStyle: "normal",
									fontWeight: "700",
									color: "#48007C",
								}}
								variant="h2"
							>
								Lets Join Our Network Community
							</Typography>
							<Typography
								sx={{
									fontFamily: "'Lato'",
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "18px",
									lineHeight: "20px",
									textAlign: "justify",
									textJustify: "inter-word",
								}}
								py={2}
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</Typography>
						</ThemeProvider>
					</Box>
				</Grid>
				<Grid
					item
					md={6}
					sx={{
						background: "linear-gradient(180deg, #48007C 0%, #6100BF 100%)",
						borderRadius: "32px",
						display: "flex",
						alignItems: "center",
					}}
					px={2}
				>
					<Grid container>
						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							py={2}
						>
							<img src="/assets/images/community/linkedin.png" alt="linkedin" />
						</Grid>
						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							py={2}
						>
							<img src="/assets/images/community/telegram.png" alt="telegram" />
						</Grid>
						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							py={2}
						>
							<img src="/assets/images/community/facebook.png" alt="facebook" />
						</Grid>
						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							py={2}
						>
							<img src="/assets/images/community/twitter.png" alt="twitter" />
						</Grid>
						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							py={2}
						>
							<img src="/assets/images/community/reddit.png" alt="reddit" />
						</Grid>
						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							py={2}
						>
							<img src="/assets/images/community/youtube.png" alt="youtube" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Community2;
