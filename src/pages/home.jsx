import React from "react";
import Home1 from "../components/homepage/home1";
import Cards1 from "../components/homepage/cards1";
import Logos from "../components/homepage/logos";
import Cards2 from "../components/homepage/cards2";
import { Box, Button, Grid, Typography, Container } from "@mui/material";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
	let cards1_data = require("../assets/data/card1.json");
	let logo_data = require("../assets/data/logos.json");
	let cards2_data = require("../assets/data/card2.json");

	let cards1_render = cards1_data.map(({ img, heading, text }, i) => (
		<Cards1 key={i} description={text} heading={heading} images={img} />
	));
	let logos_render = logo_data.map(({ img }, i) => (
		<Logos key={i} image={img} />
	));
	let cards2_render = cards2_data.map(({ title }, i) => (
		<Cards2 key={i} title={title} />
	));

	return (
		<>
			<Container>
				<Home1 />

				<Grid container py={5} px={4}>
					{cards1_render}
				</Grid>

				<Grid container py={3}>
					<Grid
						item
						md={7}
						sx={{
							background: "rgba(229, 229, 229, 0.5)",
							border: "1px solid #48007C",
							borderRadius: "32px",
							display: "flex",
							alignItems: "center",
						}}
					>
						<Grid container>{logos_render}</Grid>
					</Grid>
					<Grid item md={5} pl={4} py={4}>
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
									Our partners, your products
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
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</Typography>
								<Button
									variant="contained"
									sx={{
										width: "180px",
										height: "45px",
										background:
											"radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%) ",
										borderRadius: "36px",
									}}
									fontSize={{ md: "24px", sm: "18px" }}
									fontWeight="700"
									fontFamily={"Lato"}
								>
									Build
								</Button>
							</ThemeProvider>
						</Box>
					</Grid>
				</Grid>

				<Grid container py={6}>
					<Grid item md={4} pr={{ md: 3, sm: 0 }}>
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
									The complete package
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
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</Typography>
							</ThemeProvider>
						</Box>
					</Grid>

					<Grid item md={8}>
						<Grid container>{cards2_render}</Grid>
					</Grid>
				</Grid>
			</Container>
			<Box
				sx={{
					backgroundImage: `url(${"/assets/images/background/bg2.png"})`,
					backgroundSize: "cover",
				}}
			>
				<Container>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: { md: "center", sm: "flex-start" },
						}}
						py={{ md: 20, sm: 15, xs: 13 }}
					>
						<Box sx={{ width: { md: "70%", sm: "100%" } }}>
							<ThemeProvider theme={theme}>
								<Typography
									variant="h3"
									sx={{
										fontFamily: "'Lato'",
										fontStyle: "normal",
										fontWeight: "700",
										color: "white",
									}}
								>
									Lets Join Our Community
								</Typography>
								<Typography
									sx={{
										fontFamily: "'Lato'",
										fontStyle: "normal",
										fontWeight: "400",
										fontSize: { lg: "18px", md: "16px", sm: "14px" },
										textAlign: "justify",
										textJustify: "inter-word",
										color: "white",
									}}
									py={2}
								>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.{" "}
								</Typography>
							</ThemeProvider>
							<Button
								variant="contained"
								sx={{
									width: "180px",
									height: "45px",
									background:
										"radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%) ",
									borderRadius: "36px",
								}}
								fontSize={{ md: "24px", sm: "18px" }}
								fontWeight="700"
								fontFamily={"Lato"}
							>
								Join Now
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Home;
