// we can use this two alternative syntax because we talk about an object.
// module is an object and the export is it's property, and the items array is the exports's property and the person object as well

module.exports.items = ["item1", "item2"];
const person = {
  name: "bob",
};

module.exports.singlePerson = person;
