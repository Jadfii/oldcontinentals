import { Player } from '@/types';
import { findCountry } from '@/utils/countries';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function getPlayers(): Promise<Player[]> {
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error('Missing GOOGLE_API_KEY');
  }

  const doc = new GoogleSpreadsheet('1RV6XrWONVPQ-8qmx4ByrZX9EJ61cULQcIOIQj7hYV2w', {
    apiKey: process.env.GOOGLE_API_KEY,
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByTitle['OC Nationality'];
  await sheet.loadCells();

  const players: Player[] = [];

  let reading = true;
  let rowIdx = 1; // start at 2
  while (reading === true) {
    const cell = sheet.getCell(rowIdx, 0);
    const cell2 = sheet.getCell(rowIdx, 1);

    if (!cell.formattedValue) {
      reading = false;
      break;
    }

    players.push({
      name: cell.formattedValue,
      nationality: cell2.formattedValue || undefined,
    });
    rowIdx++;
  }

  return players.map((player) => ({
    ...player,
    countryCode: player.nationality
      ? (findCountry(player.nationality)?.iso2 ?? undefined)
      : undefined,
  }));
}
