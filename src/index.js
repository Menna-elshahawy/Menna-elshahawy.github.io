import React from "react";
import * as ReactDOM from "react-dom/client";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';

 // import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main/>);

// root.render(
//     <React.StrictMode>
//     <Main />
//   </React.StrictMode>,
//   );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );