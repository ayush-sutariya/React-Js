import logo from "./logo.svg";
import "./App.css";
import State from "./container/State";
import Emoployee from "./container/Emoployee";

// function App(props) {
//   let data = [10,20,30,40,50];
//   return(
//     <div>
//       {
//         data.map((d,i) => {
//           return(
//             <h2>{d}</h2>
//           )
//         })
//       }
//     </div>
//   )
// }

// function App(props){
//   let data = [
//     {
//       name: "amit",
//       age: 35,
//       salary: 40000,
//       bonus: 1000,
//       status: true
//     },
//     {
//       name: "ajay",
//       age: 25,
//       salary: 38000,
//       bonus: 2000,
//       status: false
//     },
//     {
//       name: "mayur",
//       age: 23,
//       salary: 50000,
//       bonus: 500,
//       status: true
//     },
//     {
//       name: "jay",
//       age: 29,
//       salary: 35000,
//       bonus: 600,
//       status: true
//     },
//     {
//       name: "raj",
//       age: 33,
//       salary: 22000,
//       bonus: 2000,
//       status: true
//     }
//   ]
//   let filterdata = data.filter((d,i) => (d.salary > 30000 && d.age >= 25))
//   return(
//     <div>
//       {
//         filterdata.map((d, i)=> {
//           return(
//             <>
//             <h3>{d.name}</h3>
//             <h3>{d.age}</h3>
//             <h3>{d.bonus}</h3>
//             <h3>{d.salary}</h3>
//             <h3>{d.status}</h3>
//             </>
//           )
//         })
//       }
//     </div>
//   )
// }

function App(props) {
  <Emoployee />;
}

export default App;
