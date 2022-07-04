import { Grid } from "@mui/material";
import React from "react";
import Accordians2 from "./accordians2";
import AccordianSidebox1 from "./accordiansidebox1";

const RoadMap3 = ({ head, content }) => {
	return (
		<>
			<Grid container py={2}>
				<Grid
					item
					sm={3}
					sx={{
						boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
						borderRight: "5px solid #AD00FF",
						textAlign: "center",
						width: "100%",
					}}
					py={2}
				>
					<AccordianSidebox1 data={head} />
				</Grid>
				<Grid
					item
					sm={9}
					py={{ sm: 0, xs: 3 }}
					pl={{ sm: 2, xs: 0 }}
					sx={{
						width: "100%",
					}}
				>
					{content.map((content, index) => (
						<Accordians2 content={content} key={index} />
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default RoadMap3;
