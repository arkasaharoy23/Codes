// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDQekb8O6JTEpZ8d8OIqCa52aTFJaFcv68",
//   authDomain: "project1-d4f85.firebaseapp.com",
//   projectId: "project1-d4f85",
//   storageBucket: "project1-d4f85.firebasestorage.app",
//   messagingSenderId: "799862858295",
//   appId: "1:799862858295:web:7bb6f9bbcacf468a5855b2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// let signupBtn = document.querySelector('.signup-btn');

// signupBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirm-password').value;
//     let username = document.getElementById('username').value;

//     // Basic validation
//     if (!email || !password || !confirmPassword || !username) {
//         alert('Please fill all fields');
//         return;
//     }

//     if (password !== confirmPassword) {
//         alert('Passwords do not match');
//         return;
//     }

//     if (password.length < 6) {
//         alert('Password must be at least 6 characters');
//         return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up successfully
//             const user = userCredential.user;
//             window.location.href = 'home.html';
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);
//         });
// });