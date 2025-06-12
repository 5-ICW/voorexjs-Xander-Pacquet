// Factuur Klasse
class Factuur {
  constructor(factuurnummer, datum, bedrag, betaald = false) {
    this.factuurnummer = factuurnummer;
    this.datum = new Date(datum);
    this.bedrag = bedrag;
    this.betaald = betaald;
  }

  markeerAlsBetaald() {
    this.betaald = true;
  }

  toString() {
    return `Factuur ${this.factuurnummer}: €${this.bedrag.toFixed(2)} - ${
      this.betaald ? "Betaald" : "Openstaand"
    }`;
  }
}

// Klant Klasse
class Klant {
  constructor(id, naam, email, factuurnummer, bedrag, factuur2, factuur1) {
    this.id = id;
    this.naam = naam;
    this.email = email;
    this.facturen = [];
    this.factuurnummer = factuurnummer;
    this.bedrag = bedrag;
    this.factuur1 = factuur1;
    this.factuur2 = factuur2;
  }

  voegFactuurToe(factuur) {
    if (factuur instanceof Factuur) {
      this.facturen.push(factuur);
    } else {
      throw new Error(
        "Alleen instanties van Factuur kunnen worden toegevoegd."
      );
    }
  }

  getOpenstaandeFacturen() {
    return this.facturen.filter((f) => !f.betaald);
  }

  getTotaalBedragOpenstaand() {
    // bereken het totaal van de facturen die nog niet betaald zijn.
  }

  printFacturen() {
    console.log(
      this.facturen.forEach(
        `Facturen voor ${this.naam}: \n ${this.factuur1}\n ${this.factuur2}`
      )
    );
  }
}

module.exports = {
  Factuur,
  Klant,
};
