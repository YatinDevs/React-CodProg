// ? React Mastery - Concepts Over View :
/**
 *
 * !1. React Components :
 * * - Convention Captial Letter of Component File first Letter.
 *
 * * - if we dont write default while exporting Component.
     - export { Home }; 
 * * - In one file we can only have One default export component.
     - export default Home;
 * 
 * * - if we dont write default.
 *   - import {Home} from "./components/Home";
 * * - On default export component.
 *   - import Home from "./components/Home";
 * 
 * * - Organise Components in Component Folder.
 * 
 * ? - React Dev Tools ,Chrome Dev Tools, Redux Dev Tools. - 
 */

/**
 *  TODO : JSX Rules.
 * 
 *  * 1.Instead of class we write className.
    - class is reserved keyword in JSX used for creating classes.
 *  
 *  * 2.In JSX if you want to use JavaScript use {}.
 *  * 3.Can use all function types.
 *  * 4.Instead of for we use htmlFor.
 *  
 */

/*
   TODO : CSS in React Application.
    * 1. we can create styling obj and apply using js Object.
      const cssStyles = {
        backgroundColor: "lightblue",
        fontFamily: "sans-serif",
        margin: "1rem",
        padding: "1rem",
      };
        style={cssStyles}

    * 2. we can directly do inline style
        style={{
          backgroundColor: "lightblue",
          fontFamily: "sans-serif",
          margin: "1rem",
          padding: "1rem",
        }}

    * 3. we can import external style sheet

         import "./FirstComponent.css";

    ?usecases:
       * ternary operator
        className={isDarkmode ? "bg-dark" : null}
       * && operator
        className={isDarkmode && "bg-dark"}

    *  case 1:
        className={`container ${isDarkmode ? "bg-dark" : null}`}
        - if true class applied.
        - but false null as string added to class.
    *  case 2:
        className={`container ${isDarkmode && "bg-dark"}`}
        - if true class applied.
        - but false false as string added to class.
    *  case 3:
        className={`container ${isDarkmode ? "bg-dark" : ""}`}
        - if true class applied.
        - but false empty string applied to class.

    !Note : CSS Modules are supported in both CRA & Vite.

    * case : 
     - save file as (styles.module.css);
     - import styles from "./styles.module.css";
     - className = {styles.container}
     - <header class="_container_s9xcv_11"> -->(Unique Class name applied)
     - Avoids Name Collision.

 */
