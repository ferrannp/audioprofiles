import React from "react";
import IconButton from "@mui/material/IconButton";
import { SvgIcons } from "./SvgIcons";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Audio Profiles application {"\u0026"} website created by{" "}
        <a href="https://twitter.com/ferrannp">Ferran Negre</a>. Get it on{" "}
        <a href="https://play.google.com/store/apps/details?id=com.fnp.audioprofiles">
          Google Play
        </a>
        .
      </p>
      <div>
        <IconButton
          touch={true}
          href="https://github.com/ferrannp/audioprofiles"
          linkButton={true}
        >
          <SvgIcons.GithubIcon className="footer-icon" />
        </IconButton>
        <IconButton
          touch={true}
          href="https://twitter.com/audioprofiles"
          linkButton={true}
        >
          <SvgIcons.TwitterIcon className="footer-icon" />
        </IconButton>
      </div>
    </footer>
  );
};
