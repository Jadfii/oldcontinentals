import { Player } from '@/types';
import { PlayerItem } from './PlayerItem';

export const PlayerList = ({ players }: { players: Player[][] }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        overflow: 'hidden',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        rowGap: 0.5 * 16,
        columnGap: 128,
        height: 700,
      }}
    >
      {players.map((group, i) => (
        <div style={{ display: 'flex', flexDirection: 'column' }} key={i}>
          {group.map((player) => (
            <PlayerItem player={player} key={`${player.name}-${player.countryCode}`} />
          ))}
        </div>
      ))}
    </div>
  );
};
