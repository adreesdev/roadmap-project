import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BuildAccordions = () => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<>
			<Box py={3} px={6}>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					sx={{
						boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
						marginY: "10px",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "#AD00FF" }} />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
						sx={
							expanded === "panel1" ? { color: "#AD00FF" } : { color: "black" }
						}
					>
						<Typography
							sx={{
								width: "90%",
								flexShrink: 0,
								paddingX: "25px",
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "900",
								fontSize: "18px",
							}}
						>
							Quickstart
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ width: "90%", paddingX: "40px" }}>
						<Typography pb={3}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</Typography>
						<Button
							variant="contained"
							sx={{
								width: "140px",
								height: "35px",
								background:
									"radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%) ",
								borderRadius: "36px",
							}}
							fontSize={{ md: "18px", sm: "14px" }}
							fontWeight="700"
							fontFamily={"Lato"}
						>
							Start Now
						</Button>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
					sx={{
						boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
						marginY: "10px",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "#AD00FF" }} />}
						aria-controls="panel2bh-content"
						id="panel2bh-header"
					>
						<Typography
							sx={{
								width: "90%",
								flexShrink: 0,
								paddingX: "25px",
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "900",
								fontSize: "18px",
							}}
						>
							Explore dApp templates
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ width: "90%", paddingX: "40px" }}>
						<Typography pb={3}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</Typography>
						<Button
							variant="contained"
							sx={{
								width: "140px",
								height: "35px",
								background:
									"radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%) ",
								borderRadius: "36px",
							}}
							fontSize={{ md: "18px", sm: "14px" }}
							fontWeight="700"
							fontFamily={"Lato"}
						>
							Start Now
						</Button>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
					sx={{
						boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
						marginY: "10px",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "#AD00FF" }} />}
						aria-controls="panel3bh-content"
						id="panel3bh-header"
					>
						<Typography
							sx={{
								width: "90%",
								flexShrink: 0,
								paddingX: "25px",
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "900",
								fontSize: "18px",
							}}
						>
							View the source
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ width: "90%", paddingX: "40px" }}>
						<Typography pb={3}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</Typography>
						<Button
							variant="contained"
							sx={{
								width: "140px",
								height: "35px",
								background:
									"radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%) ",
								borderRadius: "36px",
							}}
							fontSize={{ md: "18px", sm: "14px" }}
							fontWeight="700"
							fontFamily={"Lato"}
						>
							Start Now
						</Button>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}
					sx={{
						boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
						marginY: "10px",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "#AD00FF" }} />}
						aria-controls="panel4bh-content"
						id="panel4bh-header"
					>
						<Typography
							sx={{
								width: "90%",
								flexShrink: 0,
								paddingX: "25px",
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "900",
								fontSize: "18px",
							}}
						>
							Get the tools
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ width: "90%", paddingX: "40px" }}>
						<Typography pb={3}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</Typography>
						<Button
							variant="contained"
							sx={{
								width: "140px",
								height: "35px",
								background:
									"radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%) ",
								borderRadius: "36px",
							}}
							fontSize={{ md: "18px", sm: "14px" }}
							fontWeight="700"
							fontFamily={"Lato"}
						>
							Start Now
						</Button>
					</AccordionDetails>
				</Accordion>
			</Box>
		</>
	);
};

export default BuildAccordions;
