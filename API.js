
//------------  Module No 25 ----------------------------------------------------\\\



    // video No 04--------------
    const user = {id:122,name:'rakib'}
    const userJson = JSON.stringify(user);
    console.log(userJson);
    const userFrom = JSON.parse(userJson);
    console.log(userFrom);

    // video No 05------------------------
   fetch(' http://jsonplaceholder.typicode.com/users')
   .then (Response => Response .json())
   .then(jason => console.log(jason))

// --------------
fetch(' http://jsonplaceholder.typicode.com/users')
   .then (Response => Response .json())
   .then(jason => displayUser(jason))

   function displayUser(user){
       const userNam = user.map(user =>user.username)
       console.log(userNam,"user");

   }
// -------------------------

fetch(' http://jsonplaceholder.typicode.com/users')
   .then (Response => Response .json())
   .then(json => displayUser(json))

   function displayUser(users){
    
   const userNames = users.map(user =>user.username)
   const ul = document.getElementById('user-container')
    //    console.log(userNam,"user");
   for (let i = 0; i <userNames.length; i++) {
       const username = userNames[i];
       const li = document.createElement('li');
       li.innerText = username;
       ul.appendChild(li);

   }
   }




// video No 06----------------------------------------


fetch(' http://jsonplaceholder.typicode.com/user')
   .then (Response => Response .json())
   .then(json => displayUser(json))
.catch(error => console.log(error))
   function displayUser(users){
    
   const userNames = users.map(user =>user.username)
   const ul = document.getElementById('user-container')
    //    console.log(userNam,"user");
   for (let i = 0; i <userNames.length; i++) {
       const username = userNames[i];
       const li = document.createElement('li');
       li.innerText = username;
       ul.appendChild(li);

   }
   }

//---video No 07 ---------------------------

        //    Google Search
 
        // what is GET Vs POST 



// ------video No 08-------------


document.getElementById("submit").addEventListener("click",function(){
    const title =   document.getElementById('title').value;
    const bodyContent = document.getElementById('bodyContent').value;
      
       console.log(title,bodyContent);

})     
//-----------------------------------------------\\\\\\\\\\\\\

document.getElementById("submit").addEventListener("click",function(){
    const title =   document.getElementById('title').value;
    const bodyContent = document.getElementById('bodyContent').value;
      
    const post = {title:title, body:bodyContent};
    nowPostToServer(post)
})     

  function nowPostToServer(poshInfo){
         
 fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(poshInfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  }
//   function displayUser(users){
    
//        const userNames = users.map(user =>user.username)
//        const ul = document.getElementById('user-container')
//         //    console.log(userNam,"user");
//        for (let i = 0; i <userNames.length; i++) {
//            const username = userNames[i];
//            const li = document.createElement('li');
//            li.innerText = username;
//            ul.appendChild(li);
    
//        }
//        }
 

// video No 09---------------
//    Google search 

  // what is JQuery ajax ?
 // what is JQuery Element ?


 //  video No 10 ------------------------------------------
  

 //   video Summery 
  