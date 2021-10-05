
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./Components/mock-data.json";
import ReadOnlyRow from "./Components/ReadOnlyRow";
//import EditableRow from "./Components/ReadOnlyRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {/* {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : ( */}
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;



// import React, { useState } from "react";
// import { nanoid } from 'nanoid';
// //import logo from './logo.svg';
// import './App.css';
// //import Data from './Components/data.json';
// import data from './Components/Mark-data.json';




// const App = () => {

//   const[contact,setContacts] = useState(data);
// const [addFormData, setAddFormData] = useState({
//   Id:'',
//   fullName: '',
//   email: '',
//   eduction:''
// })

// const handleAddFormChange = (event) => {
//   event.preventDefault();

//   const fieldName = event.target.getAttribute('name');
//   const fieldValue = event.target.value;

//   const newFormData = {...addFormData};
//   newFormData[fieldName] = fieldValue;

//   setAddFormData(newFormData);
// };

// const handleAddFormSubmit = (event) =>{
//   event.preventDefault();

//   const newContact = {
//     id:nanoid(),
//     Id:addFormData.Id,
//     fullName:addFormData.fullName,
//     email:addFormData.email,
//     eduction:addFormData.eduction

//   };
// const newcontact = [...contact, newContact];
// setContacts(newContact)
// };

//   return(
//     <div className="app-container">
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Eduction</th>
//           </tr>
//         </thead>
//       </table>
//       <table>
//         <tbody>
//           {contacts.map((contact) =>  
//           <tr>
//           <td>{contact.id}</td>
//           <td>{contact.name}</td>
//           <td>{contact.email}</td>
//           <td>{contact.eduction}</td>
//         </tr>
//         )}
          
//         </tbody>
//       </table>
  
  
//     <h2>Add a Contact</h2>
//     <form onSubmit={handleAddFormSubmit}>
//       <input type="text" 
//       name="Id" 
//       required="required"
//        placeholder="Enter A Id"
//        onChange={handleAddFormChange}
//        />

// <input type="text" 
//       name="fullname" 
//       required="required"
//        placeholder="Enter A Name"
//        onChange={handleAddFormChange}
//        />

// <input type="text" 
//       name="Email" 
//       required="required"
//        placeholder="Enter A Email"
//        onChange={handleAddFormChange}
//        />

// <input type="text" 
//       name="eduction" 
//       required="required"
//        placeholder="Enter A eduction"
//        onChange={handleAddFormChange}
//        />

// <button type="submit" >Add</button>
//     </form>
  
//     </div>
//   )
//   }

// export default App;


// //   return(
// //     <div className="App">
// //         <div className="posts">
            
// //     {Data.map(post =>{
// //         return(
// //             <div key={ post.id} className="post">
// //             <h4>{post.name}</h4>
// //             <p>{post.eduction}</p>
// //             <input type = "text" /><br/ ><br/>
// //             <input type = "text" /><br/ ><br/>
// //             <button onClick={clickMe}>Add</button>
// //             <button onClick={clickShe}>Delete</button>
            
// //                 </div>
// //         )
// //     })}

// //         </div>
// //     </div>
// // )
 