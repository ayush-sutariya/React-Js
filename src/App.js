import logo from "./logo.svg";
import "./App.css";

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
  let data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true,
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false,
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true,
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true,
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true,
    },
  ];
  let filterdata = data.filter((d, i) => d.status === true);
  let total = filterdata.reduce((acc, d) => acc+d.salary+d.bonus , 0);
  return (
    <table border='1'>
        <tr>
          <th><h1>Name</h1></th>
          <th><h1>Age</h1></th>
          <th><h1>Bonus</h1></th>
          <th><h1>Salary</h1></th>
          <th><h1>Status</h1></th>
          <th><h1>Total Salary</h1></th>
          <th><h1>Total</h1></th>
        </tr>
      {filterdata.map((d, i) => {
        return <>
          <tr>
            <td><h2>{d.name}</h2></td>
            <td><h2>{d.age}</h2></td>
            <td><h2>{d.bonus}</h2></td>
            <td><h2>{d.salary}</h2></td>
            <td><h2>{d.status.toString()}</h2></td>
            <td><h2>{d.bonus+d.salary}</h2></td>
            {i === 0 ?  <td rowspan={filterdata.length}><h2>{total}</h2></td>:null}
          </tr>
        </>;
      })}
    </table>
  );
}

export default App;
