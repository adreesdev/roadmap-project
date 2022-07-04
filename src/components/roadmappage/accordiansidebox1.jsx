import { Typography } from "@mui/material";
import React from "react";
const AccordianSideBox = ({ data }) => {
	return (
		<>
			<Typography
				sx={{
					fontFamily: "'Lato'",
					fontStyle: "normal",
					fontWeight: "900",
					fontSize: "20px",
					lineHeight: "29px",
				}}
			>
				{data}
			</Typography>
		</>
	);
};

export default AccordianSideBox;
