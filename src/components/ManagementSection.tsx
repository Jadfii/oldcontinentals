import { Player } from '@/types';
import { PlayerSection } from './PlayerSection';
import { Title } from './Title';

type ManagementSectionProps = { title: string; players: Player[] };

export const ManagementSection = ({ title, players }: ManagementSectionProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      }}
    >
      <Title style={{ marginBottom: 8 }}>{title}</Title>

      <PlayerSection players={players} />
    </div>
  );
};
