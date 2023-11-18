// import "./FirstComponent.css";
import styles from "./Home.module.css";
import styles2 from "./Home2.module.css";
function Home() {
  const cssStyles = {
    backgroundColor: "lightblue",
    fontFamily: "sans-serif",
    margin: "1rem",
    padding: "1rem",
  };

  const isDarkmode = false;
  return (
    <>
      <header
        // style={cssStyles}
        // style={{
        //   backgroundColor: "lightblue",
        //   fontFamily: "sans-serif",
        //   margin: "1rem",
        //   padding: "1rem",
        // }}

        // className={isDarkmode ? "bg-dark" : null}
        // className={isDarkmode && "bg-dark"}

        // className={`container ${isDarkmode ? "bg-dark" : null}`}
        // className={`container ${isDarkmode && "bg-dark"}`}
        // className={`container ${isDarkmode ? "bg-dark" : ""}`}

        className={`${styles.container} ${styles2["bg-dark"]}`}
      >
        <p>Lorem ipsum dolor sit amet.</p>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Home;

//* if we dont write default.
// export { Home };
//* In one file we can only default Export one component.
