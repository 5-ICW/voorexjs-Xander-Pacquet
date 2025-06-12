/** Maak een klant aan Karel Kleintjes (email: karel.kleintjes@example.com)
 * Je maakt onderstaande facturen aan
 * Factuur("F2025001", "2025-06-01", 250.0)
 * Factuur("F2025001", "2025-06-01", 250.0)
 * bovenstaande regels maken 2 facturen aan.
 * Koppel deze facturen aan Karel Kleintjes als klant.
 *
 * Print je zijn facturen uit met de method: printFacturen() --> staat al in de code
 * output:
 *     Facturen voor Jan Jansen:
 *      Factuur F2025001: €250.00 - Openstaand
 *      Factuur F2025002: €120.00 - Betaald
 *
 * Als laatste zorg je dat dit werkt.
 * console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
 * output: Openstaand totaal: 250
 */

//zorgen dat we de classes in deze map kunnen gebruiken
const { Factuur, Klant } = require("./Admin");

//de nieuwe variableen aan maken
const factuur1 = new Factuur("F2025001", "2025-06-01", 250.0, false);
const factuur2 = new Factuur("F2025002", "2025-06-05", 120.0, true);
const klant1 = new Klant(1, "Karel", "karel.kleintjes@example.com");

//de functies toepassen
// console.log(factuur1.toString());
// console.log(factuur2.toString());
console.log(`Facturen voor ${klant1.naam}: \n ${factuur1}\n ${factuur2}`);

klant1.printFacturen();
// console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
