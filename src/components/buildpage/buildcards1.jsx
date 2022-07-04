import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const BuildCards1 = ({ title }) => {
	return (
		<>
			<Grid item sm={12} md={6} p={2}>
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
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</Typography>
				</Box>
			</Grid>
		</>
	);
};

export default BuildCards1;
