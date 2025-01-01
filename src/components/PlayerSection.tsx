import { Player } from '@/types';
import { PlayerItem } from './PlayerItem';

export const PlayerSection = ({ players }: { players: Player[] }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {players.map((player) => (
          <PlayerItem key={player.name + player.nationality} player={player} />
        ))}
      </div>
    </div>
  );
};
