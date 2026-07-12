import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

function generateDataTs(seed: any) {
  const header = `export interface Team {\n  id: number;\n  name: string;\n  base: string;\n}\n\nexport interface Driver {\n  id: number;\n  name: string;\n  team: string;\n}\n\nexport interface DriverParams {\n  id: string;\n}\n\n`;

  const teams = `export const teams: Team[] = ${JSON.stringify(seed.teams, null, 2)};\n\n`;
  const drivers = `export const drivers: Driver[] = ${JSON.stringify(seed.drivers, null, 2)};\n`;

  return header + teams + drivers;
}

function main() {
  const root = resolve(__dirname, '..', '..');
  const seedPath = resolve(root, 'seeds', 'seed.json');
  const outPath = resolve(root, 'src', 'data.ts');

  const raw = readFileSync(seedPath, 'utf-8');
  const seed = JSON.parse(raw);

  const content = generateDataTs(seed);
  writeFileSync(outPath, content, 'utf-8');
  console.log(`Seed applied: wrote ${outPath}`);
}

if (require.main === module) {
  main();
}
