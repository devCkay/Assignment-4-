var names = ["John", "Jane", "Joe", "Bob", "Sue", "Amy", "Jack", "Jill", "Jared", "Mark"];

for (var i = 0; i < names.length && i < 10; i++) {
  var name = names[i];
  if (name.charAt(0) === 'J' || name.charAt(0) === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
