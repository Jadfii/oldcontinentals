import { Roster } from '@/components/roster';
import { getPlayers } from '@/data/players';

export default async function Page() {
  const players = await getPlayers();

  return <Roster players={players} />;
}
