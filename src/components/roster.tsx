/* eslint-disable @next/next/no-img-element */

import { Player } from '@/types';
import { ManagementSection } from './ManagementSection';
import { groupBy } from '@/utils/object';
import { PlayerList } from './PlayerList';
import { Title } from './Title';

export const Roster = ({ players, image }: { players: Player[]; image?: boolean }) => {
  const managementNames = [
    ['Alexei Blade', 'SmauG'],
    ['Hash', 'Flurgle', 'Arkantdos'],
  ] satisfies Player['name'][][];

  const groupedManagement = managementNames.map((group) =>
    group
      .map((name) =>
        players.find((player) => player.name.toLowerCase().includes(name.toLowerCase()))
      )
      .filter((player) => !!player)
      .sort((a, b) => a.name.localeCompare(b.name))
  );

  const groupedPlayers = Object.values(
    groupBy(
      players.filter((player) => !groupedManagement.flat().includes(player)),
      'countryCode'
    )
  )
    .sort((a, b) => b.length - a.length)
    .map((group) => group.sort((a, b) => a.name.localeCompare(b.name)));

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        backgroundColor: '#000',
        overflow: 'hidden',
        ...(image && { fontFamily: '"Karla Regular", sans-serif' }),
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          position: 'absolute',
          overflow: 'hidden',
          zIndex: '1',
        }}
      >
        <img
          width="100%"
          height="100%"
          src={'https://i.imgur.com/8uUQhfo.jpeg'}
          alt="background"
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          zIndex: '2',
          padding: 80,
          paddingBottom: 20,
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          gap: 128,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex' }}>
            <img
              src={'https://i.imgur.com/dvS7QZl.png'}
              width={400}
              height={337}
              alt="logo"
              style={{ zIndex: '10' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <ManagementSection title="Leaders" players={groupedManagement[0]} />
            <ManagementSection title="Council" players={groupedManagement[1]} />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex' }}>
            <Title style={{ marginBottom: 32 }}>Team members</Title>
          </div>
          <PlayerList players={groupedPlayers} />

          <div
            style={{ display: 'none', height: 100, width: '100%', flexShrink: 0 }}
          ></div>
        </div>
      </div>
    </div>
  );
};
