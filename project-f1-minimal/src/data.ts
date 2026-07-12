export interface Team {
  id: number;
  name: string;
  base: string;
}

export interface Driver {
  id: number;
  name: string;
  team: string;
}

export interface DriverParams {
  id: string;
}

export const teams: Team[] = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Ferrari", base: "Maranello, Italy" },
  { id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 7, name: "Visa Cash App RB", base: "Faenza, Italy" },
  { id: 8, name: "Haas", base: "Kannapolis, United States" },
  { id: 9, name: "Williams", base: "Grove, United Kingdom" },
  { id: 10, name: "Sauber", base: "Hinwil, Switzerland" }
];

export const drivers: Driver[] = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Liam Liam Lawson", team: "Red Bull Racing" },
  { id: 3, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari" },
  { id: 5, name: "George Russell", team: "Mercedes" },
  { id: 6, name: "Andrea Kimi Antonelli", team: "Mercedes" },
  { id: 7, name: "Lando Norris", team: "McLaren" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Jack Doohan", team: "Alpine" },
  { id: 13, name: "Yuki Tsunoda", team: "Visa Cash App RB" },
  { id: 14, name: "Isack Hadjar", team: "Visa Cash App RB" },
  { id: 15, name: "Oliver Bearman", team: "Haas" },
  { id: 16, name: "Esteban Ocon", team: "Haas" },
  { id: 17, name: "Alex Albon", team: "Williams" },
  { id: 18, name: "Carlos Sainz", team: "Williams" },
  { id: 19, name: "Gabriel Bortoleto", team: "Sauber" },
  { id: 20, name: "Nico Hülkenberg", team: "Sauber" }
];
