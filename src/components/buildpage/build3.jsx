import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Build3 = ({ title }) => {
	return (
		<>
			<Stack
				p={2}
				direction={{ xs: "column", sm: "row" }}
				justifyContent={{ sm: "space-between" }}
				alignItems={{ xs: "center" }}
				sx={{
					boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
					marginY: "10px",
					marginX: "50px",
				}}
			>
				<Typography
					sx={{
						fontFamily: "'Lato'",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "16px",
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
						marginTop: { sm: "0px", xs: "10px" },
					}}
				>
					<ArrowForwardIosRoundedIcon />
				</Box>
			</Stack>
		</>
	);
};

export default Build3;
