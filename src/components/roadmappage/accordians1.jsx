import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const Accordians = ({ title, direction }) => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<>
			{direction === 1 ? (
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					sx={{
						boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
						marginY: "10px",
					}}
				>
					<AccordionSummary
						expandIcon={
							expanded ? (
								<RemoveRoundedIcon sx={{ color: "#AD00FF" }} />
							) : (
								<AddRoundedIcon sx={{ color: "#AD00FF" }} />
							)
						}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography sx={{ width: "90%", flexShrink: 0 }}>
							{title}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</Typography>
					</AccordionDetails>
				</Accordion>
			) : (
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					sx={{
						boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
						marginY: "10px",
						direction: "rtl",
					}}
				>
					<AccordionSummary
						expandIcon={
							expanded ? (
								<RemoveRoundedIcon sx={{ color: "#AD00FF" }} />
							) : (
								<AddRoundedIcon sx={{ color: "#AD00FF" }} />
							)
						}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography sx={{ width: "90%", flexShrink: 0 }}>
							{title}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{
								textAlign: "justify",
								mozTextAlignLast: "left",
								textAlignLast: "left",
							}}
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</Typography>
					</AccordionDetails>
				</Accordion>
			)}
		</>
	);
};

export default Accordians;
