import { Roster } from '@/components/roster';
import { getPlayers } from '@/data/players';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    const regularFontData = await fetch(
      new URL('../../../assets/Karla-Regular.ttf', import.meta.url).toString()
    ).then((res) => res.arrayBuffer());
    const boldFontData = await fetch(
      new URL('../../../assets/Karla-Bold.ttf', import.meta.url).toString()
    ).then((res) => res.arrayBuffer());
    const titleFontData = await fetch(
      new URL('../../../assets/Iceland-Regular.ttf', import.meta.url).toString()
    ).then((res) => res.arrayBuffer());

    const players = await getPlayers();

    return new ImageResponse(<Roster players={players} image />, {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Karla Regular',
          data: regularFontData,
          style: 'normal',
        },
        {
          name: 'Karla Bold',
          data: boldFontData,
          style: 'normal',
        },
        {
          name: 'Iceland',
          data: titleFontData,
          style: 'normal',
        },
      ],
      headers: {
        'cache-control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (err) {
    console.error('Error: ', err);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
