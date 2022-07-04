import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const CommunityCards1 = ({ title }) => {
	return (
		<Grid item xs={12} sm={6} md={4} p={2}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",

					boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
					borderTop: "5px solid #48007C",
				}}
				p={3}
			>
				<Typography
					sx={{
						fontFamily: "'Lato'",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "20px",
						lineHeight: "25px",
						color: "#48007C",
					}}
				>
					{title}
				</Typography>
				<Typography
					sx={{
						fontFamily: "'Lato'",
						fontStyle: "normal",
						fontWeight: "400",
						fontSize: "16px",
						lineHeight: "19px",
						textAlign: "justify",
						textJustify: "inter-word",
					}}
					py={2}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
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
					py={2}
					fontSize={{ md: "24px", sm: "18px" }}
					fontWeight="700"
					fontFamily={"Lato"}
				>
					Build Now
				</Button>
			</Box>
		</Grid>
	);
};

export default CommunityCards1;
