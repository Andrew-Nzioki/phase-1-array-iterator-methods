const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
    personalQuote: "You're never too old to learn something new",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
    personalQuote: "I just got lost in thought - it was unfamiliar territory",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote: "Always remember you’re unique, just like everyone else",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
    personalQuote: "Behind every great man is a woman rolling her eyes",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote:
      "You don’t have to see the whole staircase, just take the first step",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
    personalQuote:
      "Failure is not the opposite of success: it’s part of success",
  },
];

function firstNamePrinter(collection) {
  for (const user of collection) {
    console.log(user.firstName);
  }
}
function lastNamePrinter(collection) {
  for (const user of collection) {
    console.log(user.lastName);
  }
}
firstNamePrinter(users) 
//lastNamePrinter(users)

function blueFilter(collection) {
    for (const user of collection) {
      if (user.favoriteColor === "Blue") {
        console.log(user.firstName);
      }
    }
  }
  
  blueFilter(users);

  function colorFilter(collection, color) {
    for (const user of collection) {
      if (user.favoriteColor === color) {
        console.log(user.firstName);
      }
    }
  }
  
  colorFilter(users, "Red");
  // LOG: Kate