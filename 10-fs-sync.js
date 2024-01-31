const { readFileSync, writeFileSync } = require("fs");
console.log("start");

// with this method we are able to reach an existed file. it has two parameter, the first is the path of the file, the second is the encoded of the file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// this method create a new file, or if the file is exist this method rewrite the content of the file. in this instance them has two parameter, the first is the path, te second is the content of the new file or the new content of an already existed file. and the third parameter is a flag which is an object. this instance is a very simple instance, in progress the course it is going to be more complex
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");
