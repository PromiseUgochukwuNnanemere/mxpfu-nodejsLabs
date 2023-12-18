// const express = require('express');
// const router = express.Router();


// let users = [
//     {
//         firstName: "John",
//         lastName: "wick",
//         email:"johnwick@gamil.com",
//         DOB:"22-01-1990",
//     },
//     {
//         firstName: "John",
//         lastName: "smith",
//         email:"johnsmith@gamil.com",
//         DOB:"21-07-1983",
//     },
//     {
//         firstName: "Joyal",
//         lastName: "white",
//         email:"joyalwhite@gamil.com",
//         DOB:"21-03-1989",
//     },
// ];

// // GET request: Retrieve all users
// router.get("/",(req,res)=>{
//   // Copy the code here
//   res.send(users);
//   });

//   router.get("/",(req,res)=>{
//     res.send(JSON.stringify({users},null,4));
// });

//   router.get("/:email",(req,res)=>{
//     const email = req.params.email;
//     let filtered_users = users.filter((user) => user.email === email);
//     res.send(filtered_users);
// });


// // POST request: Create a new user
//   // Copy the code here
//   router.post("/",(req,res)=>{
//     users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"email":req.query.email,"DOB":req.query.DOB});
//     res.send("The user" + (' ')+ (req.query.firstName) + " Has been added!")
// });

// // PUT request: Update the details of a user by email ID
// router.put("/:email", (req, res) => {
//     const email = req.params.email;
//     let filtered_users = users.filter((user) => user.email === email);
//     if (filtered_users.length > 0) {
//         let filtered_user = filtered_users[0];
//         let DOB = req.query.DOB;
//         let firstName = req.query.firstName;
//         let lastName = req.query.lastName;
//         //if the DOB has changed
//         if(DOB) {
//             filtered_user.DOB = DOB
//         }
//         /*
//         Include code here similar to the one above for other attibutes
//         */
//        if(firstName) {
//            filtered_user.firstName = firstName
//        }
//        if(lastName) {
//            filtered_user.lastName = lastName
//        }
//         users = users.filter((user) => user.email != email);
//         users.push(filtered_user);
//         res.send(`User with the email  ${email} updated.`);
//     }
//     else{
//         res.send("Unable to find user!");
//     }
//   });


// // DELETE request: Delete a user by email ID
// router.delete("/:email", (req, res) => {
//   const email = req.params.email;
//   users = users.filter((user) => user.email != email);
//   res.send(`User with the email  ${email} deleted.`);
// });

// module.exports=router;





// const express = require('express');
// const router = express.Router();

// let users = [
//     {
//         firstName: "John",
//         lastName: "wick",
//         email: "johnwick@gmail.com",
//         DOB: "22-01-1990",
//     },
//     {
//         firstName: "John",
//         lastName: "smith",
//         email: "johnsmith@gmail.com",
//         DOB: "21-07-1983",
//     },
//     {
//         firstName: "Joyal",
//         lastName: "white",
//         email: "joyalwhite@gmail.com",
//         DOB: "21-03-1989",
//     },
// ];

// // GET request to retrieve all users
// router.get("/", (req, res) => {
//     res.json({ users });
// });

// // GET request to retrieve a user by email
// router.get("/:email", (req, res) => {
//     const email = req.params.email;
//     let filteredUsers = users.filter((user) => user.email === email);
//     res.json(filteredUsers);
// });

// // POST request to create a new user
// router.post("/", (req, res) => {
//     const { firstName, lastName, email, DOB } = req.body;
//     users.push({ firstName, lastName, email, DOB });
//     res.send(`The user ${firstName} has been added!`);
// });

// // PUT request to update the details of a user by email
// router.put("/:email", (req, res) => {
//     const email = req.params.email;
//     let filteredUsers = users.filter((user) => user.email === email);
//     if (filteredUsers.length > 0) {
//         let filteredUser = filteredUsers[0];
//         const { DOB, firstName, lastName } = req.body;
//         if (DOB) {
//             filteredUser.DOB = DOB;
//         }
//         if (firstName) {
//             filteredUser.firstName = firstName;
//         }
//         if (lastName) {
//             filteredUser.lastName = lastName;
//         }
//         users = users.filter((user) => user.email !== email);
//         users.push(filteredUser);
//         res.send(`User with the email ${email} updated.`);
//     } else {
//         res.status(404).send("User not found");
//     }
// });

// module.exports = router;



// const express = require('express');
// const router = express.Router();

// let users = [
//     {
//         firstName: "John",
//         lastName: "wick",
//         email: "johnwick@gamil.com",
//         DOB: "22-01-1990",
//     },
//     {
//         firstName: "John",
//         lastName: "smith",
//         email: "johnsmith@gamil.com",
//         DOB: "21-07-1983",
//     },
//     {
//         firstName: "Joyal",
//         lastName: "white",
//         email: "joyalwhite@gamil.com",
//         DOB: "21-03-1989",
//     },
// ];

// // GET request to retrieve all users
// router.get("/", (req, res) => {
//     /**
//      * Returns a JSON object containing an array of all users
//      * @param {express.Request} req - The request object
//      * @param {express.Response} res - The response object
//      */
//     res.json({ users });
// });

// // GET request to retrieve a user by email
// router.get("/:email", (req, res) => {
//     const email = req.params.email;
//     let filteredUser = users.find((user) => user.email === email);
//     if (filteredUser) {
//         res.json(filteredUser);
//     } else {
//         res.status(404).send("User not found");
//     }
// });

// // POST request to create a new user
// router.post("/", (req, res) => {
//     const { firstName, lastName, email, DOB } = req.body;
//     users.push({ firstName, lastName, email, DOB });
//     res.send(`The user ${firstName} has been added!`);
// });

// // PUT request to update the details of a user by email
// router.put("/:email", (req, res) => {
//     const email = req.params.email;
//     let userIndex = users.findIndex((user) => user.email === email);
//     if (userIndex !== -1) {
//         const { DOB, firstName, lastName } = req.body;
//         if (DOB) {
//             users[userIndex].DOB = DOB;
//         }
//         if (firstName) {
//             users[userIndex].firstName = firstName;
//         }
//         if (lastName) {
//             users[userIndex].lastName = lastName;
//         }
//         res.send(`User with the email ${email} updated.`);
//     } else {
//         res.status(404).send("User not found");
//     }
// });

// module.exports = router;




const express = require('express');
const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "wick",
        email: "johnwick@gmail.com",
        DOB: "22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email: "johnsmith@gmail.com",
        DOB: "21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email: "joyalwhite@gmail.com",
        DOB: "21-03-1989",
    },
];

router.get("/", (req, res) => {
    res.json({ users });
});

router.get("/:email", (req, res) => {
    const email = req.params.email;
    let filteredUser = users.find((user) => user.email === email);
    if (filteredUser) {
        res.json(filteredUser);
    } else {
        res.status(404).send("User not found");
    }
});

router.post("/", (req, res) => {
    const { firstName, lastName, email, DOB } = req.body;
    users.push({ firstName, lastName, email, DOB });
    res.send(`The user ${firstName} has been added!`);
});

router.put("/:email", (req, res) => {
    const email = req.params.email;
    let userIndex = users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
        const { DOB, firstName, lastName } = req.body;
        if (DOB) {
            users[userIndex].DOB = DOB;
        }
        if (firstName) {
            users[userIndex].firstName = firstName;
        }
        if (lastName) {
            users[userIndex].lastName = lastName;
        }
        res.json(users[userIndex]);
    } else {
        res.status(404).send("User not found");
    }
});

module.exports = router;
