import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";
import { Apps } from "@material-ui/icons";
import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      {/* Logo */}
      <img src="/img/LogoIcons/logo.png" alt="Logo" className={classes.logo} />

      {/* Navigation Links */}
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="#news"
            color="transparent"
            className={classes.navLink}
          >
            NEWS
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText="BEHAVIOURS"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link href="/components" key="Communities">
                <a className={classes.dropdownLink}>Communities</a>
              </Link>,
              <a
                href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
                target="_blank"
                className={classes.dropdownLink}
                key="Generations"
              >
                Generations
              </a>
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#trends"
            color="transparent"
            className={classes.navLink}
          >
            TRENDS
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#sectors"
            color="transparent"
            className={classes.navLink}
          >
            SECTORS
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#topics"
            color="transparent"
            className={classes.navLink}
          >
            TOPICS
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#experts"
            color="transparent"
            className={classes.navLink}
          >
            EXPERTS & OPINION
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#reports"
            color="transparent"
            className={classes.navLink}
          >
            REPORTS BANK
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#login"
            color="transparent"
            className={classes.navLink}
          >
            Login
          </Button>
        </ListItem>
      </List>
    </div>
  );
}
