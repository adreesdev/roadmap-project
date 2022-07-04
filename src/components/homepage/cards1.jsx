import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

const Cards1 = ({ description, heading, images }) => {
	return (
		<Grid item sm={12} md={6} lg={4} p={2}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",

					boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
				}}
				p={3}
			>
				<Avatar
					variant={"rounded"}
					alt="The image"
					src={images}
					style={{
						width: 73,
						height: 73,
					}}
				/>
				<Typography
					sx={{
						fontFamily: "'Lato'",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "22px",
						lineHeight: "25px",
						color: "#48007C",
					}}
					py={2}
				>
					{heading}
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
				>
					{description}
				</Typography>
			</Box>
		</Grid>
	);
};

export default Cards1;
