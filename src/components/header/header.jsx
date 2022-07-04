import {
	Button,
	Drawer,
	Grid,
	Typography,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Menu,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Container from "@mui/material/Container";

const useStyles = makeStyles({
	navbarlink: {
		color: "black",
		fontFamily: "'Lato'",
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: "21px",
		lineHeight: "29px",
		textDecoration: "none",
		"&:hover": {
			color: "#AD00FF",
		},
	},
	navbarlink_active: {
		color: "#AD00FF",
		fontFamily: "'Lato'",
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: "21px",
		lineHeight: "29px",
		textDecoration: "none",
	},
});
const Navbar = (props) => {
	const [state, setState] = useState({
		left: false,
	});
	const classes = useStyles(props);
	const matches = useMediaQuery("(max-width:1000px)");

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{["About", "Build", "Roadmap", "Community"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["Docs"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Container>
			<Box py={2}>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
					<Grid item xs={4}>
						<Box
							width="100%"
							height="100%"
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Typography
								fontSize={{ md: "24px", sm: "18px" }}
								fontWeight="700"
								fontFamily={"Lato"}
								sx={{
									background:
										"linear-gradient(180deg, #6300C6 0%, #AD00FF 100%)",
									webkitBackgroundClip: "text",
									webkitTextFillColor: "transparent",
									backgroundClip: "text",
									textFillColor: "transparent",
								}}
							>
								Logo Here
							</Typography>
						</Box>
					</Grid>
					{matches ? (
						<>
							<Grid item xs={8}>
								<Box
									width={"100%"}
									height="100%"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-end",
									}}
								>
									{["left"].map((anchor) => (
										<React.Fragment key={anchor}>
											<Button onClick={toggleDrawer(anchor, true)}>
												<MenuRoundedIcon />
											</Button>
											<Drawer
												anchor={anchor}
												open={state[anchor]}
												onClose={toggleDrawer(anchor, false)}
											>
												{list(anchor)}
											</Drawer>
										</React.Fragment>
									))}
								</Box>
							</Grid>
						</>
					) : (
						<>
							<Grid
								item
								xs={5}
								sx={{ display: "flex", justifyContent: "flex-end" }}
							>
								<Box
									width="100%"
									height="100%"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-evenly",
									}}
								>
									<NavLink
										to="/"
										className={({ isActive }) =>
											isActive ? classes.navbarlink_active : classes.navbarlink
										}
									>
										About
									</NavLink>
									<NavLink
										to="/build"
										className={({ isActive }) =>
											isActive ? classes.navbarlink_active : classes.navbarlink
										}
									>
										Build
									</NavLink>
									<Button
										id="basic-button"
										aria-controls={open ? "basic-menu" : undefined}
										aria-haspopup="true"
										aria-expanded={open ? "true" : undefined}
										onClick={handleClick}
										sx={{
											background: "transparent",
											color: "black",
											fontFamily: "'Lato'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: "21px",
											lineHeight: "29px",
											textDecoration: "none",
											textTransform: "none",
										}}
									>
										Roadmap
									</Button>
									<Menu
										id="basic-menu"
										anchorEl={anchorEl}
										open={open}
										onClose={handleClose}
										MenuListProps={{
											"aria-labelledby": "basic-button",
										}}
									>
										<MenuItem onClick={handleClose}>
											<NavLink
												to="/roadmap"
												className={({ isActive }) =>
													isActive
														? classes.navbarlink_active
														: classes.navbarlink
												}
											>
												Roadmap
											</NavLink>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<NavLink
												to="/liveroadmap"
												className={({ isActive }) =>
													isActive
														? classes.navbarlink_active
														: classes.navbarlink
												}
											>
												Live Roadmap
											</NavLink>
										</MenuItem>
									</Menu>

									<NavLink
										to="/community"
										className={({ isActive }) =>
											isActive ? classes.navbarlink_active : classes.navbarlink
										}
									>
										Community
									</NavLink>
								</Box>
							</Grid>
							<Grid
								item
								xs={3}
								sx={{ display: "flex", justifyContent: "flex-end" }}
							>
								<Box
									width={"100%"}
									height="100%"
									sx={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<Button
										variant="contained"
										sx={{
											width: "180px",
											height: "45px",
											background:
												"radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%) ",
											borderRadius: "36px",
										}}
										fontSize={{ md: "24px", sm: "18px" }}
										fontWeight="700"
										fontFamily={"Lato"}
									>
										Docs
									</Button>
								</Box>
							</Grid>
						</>
					)}
				</Grid>
			</Box>
		</Container>
	);
};

export default Navbar;
