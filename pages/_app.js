import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import styles from "./app.module.scss";
import { Container, Segment, Menu, Icon, Button } from "semantic-ui-react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu inverted color="black" fixed="top" className={styles.menu}>
        <Menu.Item header>
          NFT Gallery v1.0
        </Menu.Item>
      </Menu>
      <Container className={styles.container}>
        <Component {...pageProps} />
        {/* <div style={{ textAlign: "center" }}>
          <a href="https://gerardvanderput.com" target="_blank">
            <Button icon size="mini" labelPosition="left">
              <Icon name="heart" color="red" />
              Gerard van der Put.com
            </Button>
          </a>
        </div> */}
      </Container>
    </>
  );
}

export default MyApp;
