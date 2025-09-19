class Phone {
  #brand;
  #model;
  #batteryLevel;
  #isOn;
  #callHistory;
  #contacts;
  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
    this.#isOn = false;
    this.#batteryLevel = 100;
    this.#callHistory = [];
    this.#contacts = [];
  }
  turnOn() {
    if (this.#batteryLevel > 0) {
      this.#isOn = true;
    }
  }
  turnOff() {
    this.#isOn = false;
  }
  makeCall(contactOrNumber) {
    this.#batteryLevel *= 0.9;
    if (contactOrNumber.match(/^\d+$/) && contactOrNumber.length === 10) {
      this.#callHistory.push(contactOrNumber);
    } else {
      const number = this.getNumberByName(contactOrNumber);
      this.#callHistory.push(number);
    }
  }

  getNumberByName(name) {
    const contact = this.#contacts.find((c) => c.ContactName === name);
    return contact ? contact.ContactNumber : null;
  }

  charge() {
    this.#batteryLevel = 100;
  }
  getCallHIstory() {
    return this.#callHistory;
    // return [...this.#callHistory];
  }
  addContacts(name, number) {
    this.#contacts.push({
      contactName: name.toLowerCase(),
      contactNumber: number,
    });
  }
  getInfo() {
    return {
      brand: this.#brand,
      model: this.#model,
      batteryLevel: this.#batteryLevel,
      isON: this.#isOn,
      contacts: this.#contacts,
    };
  }
}

const iphone = new Phone("Apple", "iPhone 15");
console.log(iphone.getInfo());
iphone.makeCall("123456789");
console.log(iphone.getCallHIstory());
iphone.addContacts("Hello", "123456789");
iphone.addContacts("AMMY", "678912345");
iphone.addContacts("mac", "987654321");
iphone.makeCall("mac");
console.log(iphone.getInfo());
console.log(iphone.getCallHIstory());
