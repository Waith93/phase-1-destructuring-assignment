// Given Data

const farmAnimals = "cow horse sheep pig chicken";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// Strings

// 1. Destructuring animal sounds
const farmAnimalsArr = farmAnimals.split(" ");
const [moo, neigh, baa, oink, cluck] = farmAnimalsArr;

// 2. Destructuring four animal names (excluding horse)
const [bessie, , dolly, babe, little] = farmAnimalsArr;

// 3. Destructuring three animal colors (excluding chicken)
const [blackAndWhite, , black, pink] = farmAnimalsArr;

// Arrays

// 4. Destructuring colors using full names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructuring colors using initials (excluding indigo)
const [r, o, y, g, b, , v] = colors;

// 6. Destructuring only indigo using a different variable name
const [, , , , , indg] = colors;

// Objects

// 7. Destructuring all muppet object properties
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructuring nested object properties
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;


