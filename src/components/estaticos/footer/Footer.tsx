import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Box, Grid } from "@material-ui/core";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="front" height="120px">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                Me acompanhe nas redes sociais!{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://github.com/vxtxbryan" target="_blank">
                <GitHubIcon style={{ fontSize: 55, color: "white" }} />
              </a>
              <a href="https://www.instagram.com/vxtxbryan_/" target="_blank">
                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-oliveira-275836231/"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a href="https://twitter.com/vxtxbryan_" target="_blank">
                <TwitterIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a href="https://mail.google.com/mail" target="_blank">
                <EmailIcon style={{ fontSize: 60, color: "white" }} />
              </a>
            </Box>
          </Box>
          <Box className="front1" height="60px">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
              <a>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "white" }}
                  align="center"
                >
                  Victor Oliveira Da Silva
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
