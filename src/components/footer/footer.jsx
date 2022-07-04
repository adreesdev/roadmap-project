import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";

const useStyles = makeStyles({
	footerlink: {
		fontFamily: "'Lato'",
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: "18px",
		lineHeight: "268.5%",
		paddingTop: "15px",
	},
	footerhead: {
		fontFamily: "'Lato'",
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: "18px",
		lineHeight: "268.5%",
		color: "#48007C",
	},
});

const Footer = (props) => {
	const classes = useStyles(props);
	return (
		<>
			<Container>
				<Grid container py={7}>
					<Grid item md={4} py={2}>
						<Box
							sx={{
								width: "180px",
								height: "180px",
								borderRadius: "50%",
								background: "linear-gradient(180deg, #6100BF 0%, #AD00FF 100%)",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								fontSize: "36px",
								lineHeight: "105%",
								color: "#FFFFFF",
							}}
						>
							Logo Here
						</Box>
					</Grid>
					<Grid item md={8} py={2}>
						<Grid container>
							<Grid item lg={3}>
								<Box p={2}>
									<Typography className={classes.footerhead}>Build</Typography>
									<Typography className={classes.footerlink}>
										Wallets
									</Typography>
									<Typography className={classes.footerlink}>
										Explorer
									</Typography>
									<Typography className={classes.footerlink}>
										Exchanges
									</Typography>
									<Typography className={classes.footerlink}>Docs</Typography>
									<Typography className={classes.footerlink}>Blog</Typography>
									<Typography className={classes.footerlink}>
										Roadmap
									</Typography>
								</Box>
							</Grid>
							<Grid item lg={3} p={2}>
								<Box>
									<Typography className={classes.footerhead}>Build</Typography>
									<Typography className={classes.footerlink}>
										Pact Language Resources
									</Typography>
									<Typography className={classes.footerlink}>
										Useful Tools
									</Typography>
									<Typography className={classes.footerlink}>
										Quick Start
									</Typography>
									<Typography className={classes.footerlink}>
										Pact Developer Tutorials
									</Typography>
									<Typography className={classes.footerlink}>
										Chat on Discord
									</Typography>
								</Box>
							</Grid>
							<Grid item lg={3} p={2}>
								<Box>
									<Typography className={classes.footerhead}>Apply</Typography>
									<Typography className={classes.footerlink}>Grants</Typography>
									<Typography className={classes.footerlink}>
										Developer Program
									</Typography>
									<Typography className={classes.footerlink}>
										Ambassadors
									</Typography>
									<Typography className={classes.footerlink}>Career</Typography>
								</Box>
							</Grid>
							<Grid item lg={3} p={2}>
								<Box>
									<Typography className={classes.footerhead}>Links</Typography>
									<Typography className={classes.footerlink}>About</Typography>
									<Typography className={classes.footerlink}>Team</Typography>
									<Typography className={classes.footerlink}>FAQ</Typography>
									<Typography className={classes.footerlink}>
										Whitepapers
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Box
				sx={{
					boxShadow: "1px 0px 23px rgba(0, 0, 0, 0.25)",
				}}
			>
				<Container>
					<Stack
						py={3}
						direction={{ xs: "column", sm: "row" }}
						justifyContent={{ sm: "space-between" }}
						alignItems={{ xs: "center" }}
					>
						<Typography
							sx={{
								fontFamily: "'Lato'",
								fontStyle: "normal",
								fontWeight: "700",
								fontSize: "16px",
							}}
						>
							Name Here All rights reserved @ 2021
						</Typography>
						<Box>
							<LinkedInIcon />
							<FacebookIcon />
							<TelegramIcon />
							<TwitterIcon />
							<RedditIcon />
							<YouTubeIcon />
						</Box>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
