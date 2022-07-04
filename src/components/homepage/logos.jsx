import { Avatar, Grid } from "@mui/material";
import React from "react";

const Logos = ({ image }) => {
	return (
		<Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
			<Avatar
				variant={"rectangle"}
				alt="The image"
				src={image}
				sx={{
					width: { md: "100px", sm: "90px", xs: "80px" },
					height: { md: "73px", sm: "65px", xs: "60px" },
				}}
			/>
		</Grid>
	);
};

export default Logos;
