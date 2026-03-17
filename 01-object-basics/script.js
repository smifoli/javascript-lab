/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const table = {
  brand: "IKEA",
  model: "LAGKAPTEN / ALEX",
  measurements: {
    length: 140,
    width: 60,
    height: 73,
  },
  color: "white",
  computer: null,

  placeComputer: function (device) {
    if (!device || !device.model) {
      return "This does not look like a valid device.";
    }
    this.computer = device;
    return this.getComputer();
  },

  removeComputer: function () {
    this.computer = null;
    return this.getComputer();
  },

  getComputer: function () {
    if (this.computer !== null) {
      return `The '${this.computer.model}' is on the table '${this.model}'.`;
    } else {
      return `The table '${this.model}' does not contain any computers.`;
    }
  },
};

const computer = {
  brand: "Apple",
  model: "MacBook Air",
  specs: {
    ram: 16,
    storage: "512GB",
    processor: "M2",
  },
  ports: ["USB-C", "MagSafe", "Headphone Jack"],
  isOn: false,

  togglePower: function () {
    this.isOn = !this.isOn;
    return `The ${this.model} is now turned ${this.isOn ? "on" : "off"}.`;
  },
};

console.log(
  "%c--- JAVASCRIPT OBJECT DEMO ---",
  "color: #ff9900; font-weight: bold;",
);

// Initial status
console.log("1. Initial state of the table:", table);
console.log(table.getComputer());

// Execute interaction
console.log("2. Action: Placing computer on the table...");
console.log(table.placeComputer(computer));

// Show result of interaction
console.log("3. Table now contains:", table.computer.model);

// Instructions for the user
console.log(
  "\n%c--- TRY IT YOURSELF ---",
  "color: #ff9900; font-weight: bold;",
);
console.log("Now it's your turn! Try these commands in this console:");
console.log("- type 'table' to see the full object.");
console.log("- type 'table.measurements.height' to check the height.");
console.log("- type 'table.removeComputer()' to clear the table.");
console.log(
  "- type 'table.placeComputer(computer)' to add the computer to the table.",
);
