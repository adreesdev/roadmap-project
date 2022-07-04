import {
	Box,
	Button,
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
	Typography,
} from "@mui/material";
import React from "react";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const Build2 = () => {
	return (
		<>
			<Box
				sx={{
					boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
					borderTop: "5px solid #AD00FF",
					paddingY: "50px",
					marginX: "45px",
				}}
			>
				<ThemeProvider theme={theme}>
					<Box pl={5} py={3} pr={{ md: 30, sm: 5, xs: 5 }}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "left",
							}}
							variant="h6"
						>
							Rapid Launch
						</Typography>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "400",
								textAlign: "left",
							}}
							variant="p"
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</Typography>
					</Box>
					<Box pl={5} py={3} pr={{ md: 30, sm: 5, xs: 5 }}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "left",
							}}
							variant="h6"
						>
							A smart contract first
						</Typography>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "400",
								textAlign: "left",
							}}
							variant="p"
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</Typography>
					</Box>
					<Box pl={5} py={3} pr={{ md: 30, sm: 5, xs: 5 }}>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								color: "#48007C",
								textAlign: "left",
							}}
							variant="h6"
						>
							Powered by Pact
						</Typography>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "400",
								textAlign: "left",
							}}
							variant="p"
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</Typography>
					</Box>
				</ThemeProvider>
				<Box
					pt={7}
					sx={{
						textAlign: "center",
					}}
				>
					<Button
						variant="contained"
						sx={{
							width: "150px",
							height: "40px",
							background:
								"radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%) ",
							borderRadius: "36px",
						}}
						fontSize={{ md: "18px", sm: "14px" }}
						fontWeight="700"
						fontFamily={"Lato"}
					>
						Visit Site
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Build2;
