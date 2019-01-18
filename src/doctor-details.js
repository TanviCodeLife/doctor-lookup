
export class Detail {
  constructor(uid, name, address, phone, website, newPatients, lat, long) {
    this.uid = uid;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.newPatients = newPatients;
    this.lat = lat;
    this.long = long;
  }

  static checkNewPatients(details) {
    return (details.newPatients) ? "Accepting new patients!" : "Not accepting new patients at this time.";
  }
}
