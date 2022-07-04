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
import Community1 from "../components/community/community1";
import Community2 from "../components/community/community2";
import Community3 from "../components/community/community3";
import CommunityAccordion from "../components/community/communityaccordion";
import CommunityCards1 from "../components/community/communitycards1";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const Community = () => {
	let communitycards1_data = require("../assets/data/communitycards1.json");
	return (
		<>
			<Container>
				<Community1 />
				<Community2 />
				<Box px={4} pt={2} pb={3}>
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
							Build from within
						</Typography>
					</ThemeProvider>
				</Box>
				<Grid container py={2} px={4}>
					{communitycards1_data.map(({ title }, i) => (
						<CommunityCards1 title={title} key={i} />
					))}
				</Grid>
				<Box px={4} pt={9} pb={3}>
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
							Watch with us
						</Typography>
					</ThemeProvider>
				</Box>

				<Container maxWidth="md">
					<Grid container sx={{ display: "flex", textAlign: "center" }}>
						<Community3 />
					</Grid>
				</Container>
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
							Get app
						</Typography>
						<Box sx={{ width: { md: "50%", sm: "90%" }, textAlign: "center" }}>
							<Typography
								sx={{
									fontFamily: "'Lato'",
									fontStyle: "normal",
									fontWeight: "400",
								}}
								variant="p"
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s.
							</Typography>
						</Box>
					</ThemeProvider>
				</Box>
				<CommunityAccordion />
			</Container>
		</>
	);
};

export default Community;
