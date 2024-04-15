// // Task 1.1
// class Human {
//     constructor(name, surname, { age = 0} , gender, nationality ) {
//       this.name = name;
//       this.surname = surname;
//       this.age = age;
//       this.gender = gender;
//       this.nationality = nationality;
//     }
//     getFullName() {
//       return `${this.name} ${this.surname}`;
//     }
//     getBirthYear() {
//       const currentYear = "2024";
//       return currentYear - this.age;
//     }
//   }

//   // Task 1.2 
//   class User extends Human {
//     constructor(name, surname, { age = 0} , gender, nationality , username, email, isAdmin, password = "", bio = "") {
//       super(name, surname, { age, gender, nationality });
//       this.username = username;
//       this.email = email;
//       this.isAdmin = isAdmin;
//       this.isLogged = false;
//       if (password.length < 5) {
//         throw new Error('Password must be at least 5 characters.');
//       }
//       this.password = password;
//       if (bio.length > 30) {
//         throw new Error('Bio length can not contain more than 30 characters.');
//       }
//       this.bio = bio;
//     }
// }

// // Task 1.3
// changePassword(currentPassword, newPassword) {
//     if (this.password = newPassword) {
//         return "Password changed.";
//     } else if (currentPassword == newPassword) {
//         return "Current password and new password are the same.";
//     } else {
//       return "Password is not correct.";
// }
// }

// const users = [ 
// ];

// Task 2.1
// sortUsersByUsername (users) {
//     return users.slice().sort((a, b) => a.username.localeCompare(b.username));
// }


// Task 2.2
// filterByBirthYear (users, year) {
//     return users.filter(user => user.getBirthYear() > year);
// }

// Task 2.3
// login(users, username, password) {
//     if (users !== username) {
//         return 'User not found';
//       } else if (this.password !== password) {
//         return 'Incorrect username or password';
//       } else if (user.isLogged) {
//         return 'Another user currently logged in';
//       } else { user.isLogged = true;
//         alert('Successfully logged in');
//         return 'Successfully logged in';
//       }
// }

// Task 3
// logOut(users, username) {
//     if (users !== username) {
//         return 'User not found';
//       } else if (this.password !== password) {
//         return 'Incorrect username or password';
//       } else if (user.isLogged = false) {
//         return 'User did not logged in to log out!' ;
//       } else { user.isLogged = true;
//         return 'Successfully logged out';
//       }
// }

// Task 4
// newUser = {};
// createUser(users, newUser) {
//     users.push(newUser);
// }

// Task 5
// deleteUser(users, mewUsername) {
//     if () {
    
//       return 'User is deleted';
//     } else {
//       return 'User not found';
//     }
//   }



