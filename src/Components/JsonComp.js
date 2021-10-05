  
  







// function clickMe(){
//     alert('you added')
//   }
//   function clickShe(){
//     delete ('You Deleted A Row..!')
//   }
  


// // import React from 'react';
// // import Data from "./data.json";
// // import './App.css';
// // function JsonComp(){
// //     return(
// //         <div className="App">
// //             <div className="posts">
                
// //         {Data.map(post =>{
// //             return(
// //                 <div key={ post.id} className="post">
// //                 <h4>{post.name}</h4>
// //                 <p>{post.content}</p>
// //                     </div>
// //             )
// //         })}
            a

// //             </div>
// //         </div>
// //     )
// // }
// // export default JsonComp;







// import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Data from './Components/data.json';

// function App(){
//   const [inputList, setInputList] = useState([
//     {firstName: "first name", lastName: "last name"}]);

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);

//     const handleAddClick = () => {
//       setInputList([...inputList,{firstame: "" , lastName: ""}]);
//     };
//   }
//   const handleRemoveClick = index => {
//     const list = [...inputList];
//     list.splice(index,1);
//     setInputList(list);
//   }
//   return(
//     <div className="App">
//       {inputList.map((x, i) => {
//         return(
//           <div className="box">
//   <input type="text" name="firstName" placeholder="First Name"
//    value={x.firstName} onChange={e =>handleChange(e, i)}/>
   
//   <input type="text" name="firstName" placeholder="First Name"
//    className="jk"value={x.lastName} onChange={e => handleChange (e,i)}/>

  
//   <input type="button" value="remove" className="jk" onClick={() => handleRemoveInput(i)}/>
    
//     <input type="button" value="Add" onClick={handleAddClick} />
//     </div>
//     </div>
//         );
//       })}