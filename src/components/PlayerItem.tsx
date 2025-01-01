import { Player } from '@/types';
import { Flag } from './Flag';

interface Props {
  player: Player;
}

export const PlayerItem: React.FC<Props> = ({ player }) => {
  if (!player?.countryCode) return null;

  const width = player.name.length * 15;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        maxHeight: 32,
        flex: `0 0 ${width}px`,
        width: width,
      }}
    >
      <Flag countryCode={player.countryCode} />

      <h6
        style={{
          color: '#fff',
          fontSize: 20,
        }}
      >
        {player.name}
      </h6>
    </div>
  );
};
