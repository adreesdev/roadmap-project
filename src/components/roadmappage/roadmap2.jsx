import { Grid } from "@mui/material";
import React from "react";
import Accordians1 from "./accordians1";
import AccordianSidebox1 from "./accordiansidebox1";
const RoadMap2 = ({ title, date, direction }) => {
	return (
		<>
			{direction === 1 ? (
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
						<AccordianSidebox1 data={date} />
					</Grid>
					<Grid item sm={9} py={{ sm: 0, xs: 3 }} pl={{ sm: 2, xs: 0 }}>
						{title.map((title, index) => (
							<Accordians1 title={title} direction={direction} key={index} />
						))}
					</Grid>
				</Grid>
			) : (
				<Grid container direction="row-reverse" py={2}>
					<Grid
						item
						sm={3}
						sx={{
							boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
							borderLeft: "5px solid #AD00FF",
							textAlign: "center",
							width: "100%",
						}}
						py={2}
					>
						<AccordianSidebox1 data={date} />
					</Grid>
					<Grid item sm={9} py={{ sm: 0, xs: 3 }} pr={{ sm: 2, xs: 0 }}>
						{title.map((title, index) => (
							<Accordians1 title={title} direction={direction} key={index} />
						))}
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default RoadMap2;
