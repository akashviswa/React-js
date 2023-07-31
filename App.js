// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //     return ( <
// //         div className = "App" >
// //         <
// //         header className = "App-header" >
// //         <
// //         img src = { logo }
// //         className = "App-logo"
// //         alt = "logo" / >
// //         <
// //         p >
// //         Hello < code > !! < /code > AKASH  < /p > < a className = "App-link"
// //         href = "https://reactjs.org"
// //         target = "_blank"
// //         rel = "noopener noreferrer" >
// //         <
// //         b > REACT TRAINING < /b>  < /
// //         a > < /
// //         header > <
// //         /div>
// //     );
// // }

// import React, { Component } from 'react';
// class app extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return ( <
//             div > < h1 > Hello Akash { this.props.fruit }.fruit < /h1></div >
//         );

//     }
// }
// // export default akash;
// import React,{Component} from 'react';
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: 'akash',
//             color: '',
//             coountry: ''
//         };
//     }
//     render() {
//         return(             
//             <div>
//                 <h1>welcome to {this.state.name} buddy club{ this.state.color }</h1>
//                 <p><b>about my friends</b></p>
//             </div>
//          );
//     }
// }
// // export default App;
// import React, { Component } from "react";
// import Phone from "./about";
// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       data :[
//         {
//           "name":"logesh","buddy":"loki"
//         },
//         {
//           "name":"kavibarathi" ,"buddy" : "kavi"
//         },
//         {
//           "name":"karthick raja: chetappu"
//         }
//       ]
//     };
//   }

//   render(){
//     return(
//       <div>
//         {/* '<h1>Happy Learning I am {this.state.name} fruit from {this.state.country} and my color is {this.state.Color}</h1> */}
//         <Fruits/>
//         <Fruits1/>
//         <ul>
//           {this.state.data.map((item)=> <List data = {item}/>)}
//         </ul>
//         <Phone />
//       </div>
//     );
//   }
// }

// class Fruits extends Component{
//   render(){
//     return(
//       <div>
//         <h2>Welcome to Buddy Club</h2>
//       </div>
//     )
//   }
//   }

//   class Fruits1 extends Component{
//     render(){
//       return(
//         <div>
//           <h2>It's about my friends</h2>
//         </div>
//       )
//     }
//     }

// class List extends Component{
//   render(){
//     return(
//       <div>
//         <ul>
//           <li><p>{this.props.data.nae}</p></li>
//         </ul>
//       </div>
//     )
//   }
// }



// export default App;
// import ReactDOM from'react-dom';
// import React from 'react';
// class inlineexample extends
// React.Component{
//   render()
//   {
//     return(
//       <div> 
//         <h1 style={{color:'green',textAlign:'center'}}>HI IAM AKASH</h1>
//         <h2>hello!! how was your training is going on did you learn something</h2>
//         <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<inlineexample/>,document.getElementById('root'));
// export default inlineexample
// import ReactDOM from'react-dom';
// import React from 'react';
// import'./style.css';
// class Inlineexample extends
// React.Component{
//   render()
//   {
//     const mystyle={
//       color:"blue",
//       fontfamily:"Arial"
//     };
//     return(
//       <div> 
//         <h1 style={mystyle}>HI IAM AKASH</h1>
//         <h2 className='Inlineexample'>hello!! how was your training is going on did you learn something</h2>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Inlineexample/>,document.getElementById('root'));
// export default Inlineexample
// import ReactDOM from'react-dom';
// import React from 'react';
// import img1 from './images/1.jpg';

    
// ReactDOM.render( <myele/>,document.getElementById("root"));

// class Inlineexample extends
// React.Component{
//   render()
//   {
//     <div> 
    // <h1>itachi</h1>
  //   <h2>suskai</h2>
  //   <h5>fight</h5>
  //   <img src={img1} alt="logo" width="200" height="200"></img>
  //   </div>
  // };
//     return(
//       <div> 
//         <h1 style={mystyle}>HI IAM AKASH</h1>
//         <h2 className='Inlineexample'>hello!! how was your training is going on did you learn something</h2>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Inlineexample/>,document.getElementById('root'));
// export default Inlineexample
// import React from"react";
// import  ReactDOM from "react-dom";
// class ReactStyle extends React.Component{
//   render(){
//   const myele={}
//     return(
//       <div>
//        <h1>super star </h1>
//     <video width='1000' height='900' controls> <source src="./video/n12.mp4" type="video/mp4"/></video>
//     <video width='500' height='500' controls> <source src="./video/r1.mp4" type="video/mp4"/></video>
//     </div> );
    
//   }
// } 
// ReactDOM.render(<ReactStyle/>,document.getElementById("root"));
import ReactDOM from "react-dom";
import React from "react";
import img1 from './images/ss5.webp';
import img2 from './images/ss2.jpg';
import img3 from './images/ss1.jpg';
import img4 from './images/ss4.jpg';

import './style.css';
class Task4 extends React.Component{
    render(){
        return(
            <div>
                <div>
                 <center><h1 >SUPER STAR!!</h1></center> 
                    <img className="img" src={img1}/>
                    <img className="img1" src={img2}/>
                    <div>
                    
                    <video autoPlay muted loop className="vid" width={850} controls>
                        <source src='./video/r1.mp4' type='video/mp4'/>
                    </video>

                    </div>
                    <img className="img2" src={img3}/>
                    <img className="img3" src={img4}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Task4 />,document.getElementById('root'));

