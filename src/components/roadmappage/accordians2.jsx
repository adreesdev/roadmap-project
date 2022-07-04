import { Stack, Typography } from "@mui/material";
import React from "react";

const Accordians2 = ({ content }) => {
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
					{content.title}
				</Typography>
				<Typography
					sx={{
						fontFamily: "'Lato'",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "16px",
					}}
				>
					{content.tag}
				</Typography>
			</Stack>
		</>
	);
};

export default Accordians2;
