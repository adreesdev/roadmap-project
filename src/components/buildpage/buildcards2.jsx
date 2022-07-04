import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const BuildCards2 = ({ title }) => {
	return (
		<>
			<Grid item sm={12} md={6} p={2}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "left",
						boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
						borderTop: "5px solid #48007C",
					}}
					p={3}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems={{ xs: "center" }}
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
						<Box
							sx={{
								background: "linear-gradient(180deg, #48007C 0%, #AD00FF 100%)",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "white",
								padding: "2px",
							}}
						>
							<ArrowForwardIosRoundedIcon />
						</Box>
					</Stack>
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

export default BuildCards2;
