import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App"> 
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{backgroundColor:"#61dafb", width:"100%", height:"100px", display:"flex", justifyContent:"center", alignItems:"center", color:"#000", fontSize:"50px", fontWeight:"600"}}>
                    Hello world</p>
                <a
                    className="App-link"
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hello React
                </a>
            </header>
        </div>
    );
}


// function App() {
//     let a=10;
//     let name = "Test";
//     let arr=[10,20,30,40,50]
//     let obj = {
//       "id":101,
//       "name":"test",
//       "age":25,
//       "salary":25000
//     }
//     let user = [
//       {
//         "uid":101,
//         "uname":"dsfgsd"
//       },
//       {
//         "uid":102,
//         "uname":"test" 
//       },
//       {
//         "uid":103,
//         "uname":"abc"
//       }
//     ]
//     let st = {
//       color:"maroon",
//       backgroundColor:"yellowgreen"
//     }
//     return (
//       <>
//       <div className="App">
//         <h3>My React Component</h3>
//         <h4>A is -- {a}</h4>
//         <h4 style={st}>Name is -- {name}</h4>
//         <h4>Addition is -- {10+20}</h4>
//         <ul>
//             {
//               arr.map((i,index)=>{
//                 return <li key={index}>{i}</li> 
//               })
//             }
//         </ul>
//         <h5 style={{color:"red",backgroundColor:"yellow"}}>Name is -- {obj.name}</h5>
//         <hr />
//         <table border={'2'} align='center' bgcolor='red'>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//           </tr>
//           {
//             user.map((i)=>{
//                 return (
//                   <tr>
//                     <td>{i.uid}</td>
//                     <td>{i.uname}</td>
  
//                   </tr>
//                 )
//             })
//           }
//         </table>
//         <ayushpatel />
//       </div>
//       <div>
//         Ayush Patel
//       </div>
//       </>
//     );
  
//   } 




// function App(){
//     const arr = [10,20,30,40,50]
//     const userobj = {
//         id:101,
//         name:"ayush",
//         age :"20",
//         salary:20000
//     }
//     return(
//         <>
//     <div>
//         <h3>Props example</h3>
//         <props name="test" testarr={arr} user={userobj}/>
        
//     </div>
        
        
//         </>
//     )
//   }

export default App;