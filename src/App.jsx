import React, { useState } from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";

import Resume from "./Components/Resume/Resume";
import Myprojects from "./Components/Myprojects/Myprojects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
 
  

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Resume />
      <Myprojects />
      <Contact />
      <Footer/>

         </>
  );
};

export default App;





// import React, { useState } from "react";
// import Navbar from "../src/Components/Navbar/Navbar";
// import Home from "./Components/Home/Home";
// import Skills from "./Components/Skills/Skills";
// import Resume from "./Components/Resume/Resume";
// import Myprojects from "./Components/Myprojects/Myprojects";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [allEntry, setAllEntry] = useState([]);

//   const submitForm = (e) => {
//     e.preventDefault();


//     if
//     (email && password){
//     const newEntry = { email: email, password: password };
//     setAllEntry([...allEntry, newEntry]);
//     console.log(allEntry);
//     setEmail("");
//     setPassword("");
//   }

//  else {

//   alert("plz fill the data");

// }
// }

//   return (
//     <>
//       {/* <Navbar />
//       <Home />
//       <Skills />
//       <Resume />
//       <Myprojects />
//       <Contact />
//       <Footer/> */}

//       <form onSubmit={submitForm}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="off"
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>

//       <div>
//         {allEntry.map((curElrm, index) => {
//           return (
//             <div key={index}>
//               <p  >Email: {curElrm.email}</p>
//               <p>Password: {curElrm.password}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;
