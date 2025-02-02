let insertt=()=>{
  
    let name=document.querySelector("#first-name").value;
    let age=document.querySelector("#age").value;
    let number=document.querySelector("#phone").value;
    let depcity=document.querySelector("#departure-city").value;
    let descity=document.querySelector("#destination-city").value;
    let depdate=document.querySelector("#departure-date").value;
    let choice=document.querySelector("#choice").value;
    let passengers=document.querySelector("#passengers").value;
    let price=document.querySelector("#price").value;
   
    let url='http://localhost:3000/flight'
    
    fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
    
          name:name,
          age:age,
          number:number,
          depcity:depcity,
          descity:descity,
          depdate:depdate,
          class:choice,
          passengers:passengers,
          price:price
        })
    }),
    location.href="details.html";
    return false;
};

let fetchData = async () => {
let url = "http://localhost:3000/flight";
let res = await fetch(url, { method: "GET" });
let data = await res.json();

console.log(data);
let show = document.querySelector("#display");
show.innerHTML = "";

data.forEach((e) => {
    show.innerHTML += `
        <tr data-id="${e.id}">
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.number}</td>
            <td>${e.depcity}</td>
            <td>${e.descity}</td>
            <td>${e.depdate}</td>
            <td>${e.choice}</td>
            <td>${e.passengers}</td>
            <td>${e.price}</td>

            <td onclick="deelete('${e.id}')">Delete</td>
            <td onclick="updatee('${e.id}')">Update</td>
        </tr>
    `
});
};
let filterout = () => {
let searchQuery = document.querySelector("#search").value.toLowerCase();
let tableRows = document.querySelectorAll("#display tr");

tableRows.forEach(row => {
    let name = row.cells[0].textContent.toLowerCase();
    if (name.includes(searchQuery)) {
        row.style.display = '';
    } else {
        row.style.display = 'none';
    }
});
};

window.onload = () => {
fetchData();
};

let deelete=(id)=>{
let url=`http://localhost:3000/flight/${id}`
fetch(url,{method:"DELETE"})
}
//update 
let updatee=async(id)=>{
let url=`http://localhost:3000/flight/${id}`
let res=await fetch(url)
let data=await res.json()
console.log(data);

 let Formdata=`
 <form >
 <h3>Update Here....</h3>
 <br>
      <label for="upname">Name</label>
        <input type="text" id="upname" value="${data.name}" name="first-name" required placeholder="Enter your Name">

        <label for="upage">Age</label>
        <input type="number" id="upage" value="${data.age}" name="age" required placeholder="Enter your Age">

        <label for="upphone">Phone Number</label>
        <input type="tel" id="upphone" value="${data.number}" name="phone" required placeholder="Enter your Mobile">

        <label for="updeparture">Departure City</label>
        <input type="text" id="updeparture" value="${data.depcity}" name="departure-city" required placeholder="Enter your City">

        <label for="updestination">Destination City</label>
        <input type="text" id="updestination" value="${data.descity}" name="destination-city" required placeholder="Enter your City">

        <label for="updepdate">Departure Date</label>
        <input type="date" id="updepdate" value="${data.depdate}" name="departure-date" required>

        <label for="upchoice">Class</label>
        <select id="upchoice" value="${data.choice}" name="choice" required placeholder="Enter your Class">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
        </select>

        <label for="uppassengers">Number of Passengers</label>
        <input type="number" id="uppassengers" value="${data.passengers}" name="passengers" min="1" required placeholder="Enter Number of Passengers">
         
        <label for="upprice">Price</label>
        <input type="number" id="upprice" value="${data.price}" name="price" >

 <input type="submit" value="Update" onclick="return finalUpdate('${data.id}')">
 </form>
` 
  document.querySelector("#updateform").innerHTML=Formdata
}

  let finalUpdate=(id)=>{
  let inpname=document.querySelector("#upname").value;
  let inpage=document.querySelector("#upage").value;
  let inpnumber=document.querySelector("#upphone").value;
  let inpdeparture=document.querySelector("#updeparture").value;
  let inpdestination=document.querySelector("#updestination").value;
  let inpdepdate=document.querySelector("#updepdate").value;
  let inpchoice=document.querySelector("#upchoice").value;
  let inpassengers=document.querySelector("#uppassengers").value;
  let inprice=document.querySelector("#upprice").value;



  let url=`http://localhost:3000/flight/${id}`

  fetch(url,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
  
      name: inpname,
      age:inpage,
      number: inpnumber,
      depcity: inpdeparture,
      descity: inpdestination,
      depdate: inpdepdate,
      class: inpchoice,
      passengers:inpassengers,
      price:inprice
     
  
    })
  
  });
  return false;
}



// Insert Data Function
// const insertt = async () => {
//   const name = document.querySelector("#first-name").value;
//   const age = document.querySelector("#age").value;
//   const number = document.querySelector("#phone").value;
//   const depcity = document.querySelector("#departure-city").value;
//   const descity = document.querySelector("#destination-city").value;
//   const depdate = document.querySelector("#departure-date").value;
//   const choice = document.querySelector("#choice").value;
//   const passengers = document.querySelector("#passengers").value;
//   const price = document.querySelector("#price").value;

//   const url = "http://localhost:3000/flight";

//   try {
//     await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         age,
//         number,
//         depcity,
//         descity,
//         depdate,
//         class: choice,
//         passengers,
//         price,
//       }),
//     });
//     location.href = "details.html"; // Redirect to details page
//   } catch (error) {
//     console.error("Error inserting data:", error);
//   }

//   return false;
// };

// // Fetch and Display Data
// const fetchData = async () => {
//   const url = "http://localhost:3000/flight";

//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     const show = document.querySelector("#display");
//     show.innerHTML = ""; // Clear previous data

//     data.forEach((e) => {
//       show.innerHTML += `
//         <tr data-id="${e.id}">
//             <td>${e.name}</td>
//             <td>${e.age}</td>
//             <td>${e.number}</td>
//             <td>${e.depcity}</td>
//             <td>${e.descity}</td>
//             <td>${e.depdate}</td>
//             <td>${e.class}</td>
//             <td>${e.passengers}</td>
//             <td>${e.price}</td>
//             <td><button onclick="deelete('${e.id}')">Delete</button></td>
//             <td><button onclick="updatee('${e.id}')">Update</button></td>
//         </tr>
//       `;
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// // Filter Data
// const filterout = () => {
//   const searchQuery = document.querySelector("#search").value.toLowerCase();
//   const tableRows = document.querySelectorAll("#display tr");

//   tableRows.forEach((row) => {
//     const name = row.cells[0].textContent.toLowerCase();
//     row.style.display = name.includes(searchQuery) ? "" : "none";
//   });
// };

// // Delete Data
// const deelete = async (id) => {
//   const url = `http://localhost:3000/flight/${id}`;

//   try {
//     await fetch(url, { method: "DELETE" });
//     fetchData(); // Refresh data
//   } catch (error) {
//     console.error("Error deleting data:", error);
//   }
// };

// // Update Data
// const updatee = async (id) => {
//   const url = `http://localhost:3000/flight/${id}`;

//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     const updateForm = `
//       <form>
//         <h3>Update Here...</h3>
//         <label for="upname">Name</label>
//         <input type="text" id="upname" value="${data.name}" required>

//         <label for="upage">Age</label>
//         <input type="number" id="upage" value="${data.age}" required>

//         <label for="upphone">Phone Number</label>
//         <input type="tel" id="upphone" value="${data.number}" required>

//         <label for="updeparture">Departure City</label>
//         <input type="text" id="updeparture" value="${data.depcity}" required>

//         <label for="updestination">Destination City</label>
//         <input type="text" id="updestination" value="${data.descity}" required>

//         <label for="updepdate">Departure Date</label>
//         <input type="date" id="updepdate" value="${data.depdate}" required>

//         <label for="upchoice">Class</label>
//         <select id="upchoice" required>
//           <option value="economy" ${data.class === "economy" ? "selected" : ""}>Economy</option>
//           <option value="business" ${data.class === "business" ? "selected" : ""}>Business</option>
//           <option value="first" ${data.class === "first" ? "selected" : ""}>First Class</option>
//         </select>

//         <label for="uppassengers">Number of Passengers</label>
//         <input type="number" id="uppassengers" value="${data.passengers}" min="1" required>

//         <label for="upprice">Price</label>
//         <input type="number" id="upprice" value="${data.price}" required>

//         <input type="submit" value="Update" onclick="return finalUpdate('${data.id}')">
//       </form>
//     `;

//     document.querySelector("#updateform").innerHTML = updateForm;
//   } catch (error) {
//     console.error("Error fetching data for update:", error);
//   }
// };

// // Final Update Function
// const finalUpdate = async (id) => {
//   const name = document.querySelector("#upname").value;
//   const age = document.querySelector("#upage").value;
//   const number = document.querySelector("#upphone").value;
//   const depcity = document.querySelector("#updeparture").value;
//   const descity = document.querySelector("#updestination").value;
//   const depdate = document.querySelector("#updepdate").value;
//   const choice = document.querySelector("#upchoice").value;
//   const passengers = document.querySelector("#uppassengers").value;
//   const price = document.querySelector("#upprice").value;

//   const url = `http://localhost:3000/flight/${id}`;

//   try {
//     await fetch(url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         age,
//         number,
//         depcity,
//         descity,
//         depdate,
//         class: choice,
//         passengers,
//         price,
//       }),
//     });
//     fetchData(); // Refresh data
//     document.querySelector("#updateform").innerHTML = ""; // Clear form
//   } catch (error) {
//     console.error("Error updating data:", error);
//   }

//   return false;
// };

// // On Page Load
// window.onload = () => {
//   fetchData();
// };

