// import React, { useEffect } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import Header from "./Header";
// import Login from "./Login";
// import { auth } from "./firebase";
// import { useStateValue } from "./StateProvider";

// function App() {
//   const [{ user }, dispatch] = useStateValue();

//   useEffect(() => {
//     // will only run once when the app component loads...
//     auth.onAuthStateChanged((authUser) => {
//       console.log("THE USER IS >>> ", authUser);
//       if (authUser) {
//         // the user just logged in / the user was logged in
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         // the user is logged out
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="app">
//         <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/">
//             <Header />
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ToastContainer } from "react-toastify";
import Orders from "./components/orders/Orders";

const promise = loadStripe(
  "pk_test_51HPvTBIOljmntfcQC1n0EJpWiklLHfLLbvIRmbtahMdllY6NNLF5vu7hw9O5PYBaTZdmf3ppAtWbhTbCzPZnx0o500tCU9bjNq"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      <ToastContainer style={{ marginTop: "45px" }} />
    </Router>
  );
}

export default App;
