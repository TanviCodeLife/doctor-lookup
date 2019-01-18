export class Detail {
  constructor(uid, name, address, phone, website, newPatients) {
    this.uid = uid;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.newPatients = newPatients;
  }

  static checkNewPatients(details) {
    return (details.newPatients) ? "Accepting new patients!" : "Not accepting new patients at this time.";
  }
}
