/* eslint-disable @next/next/no-img-element */

export const Flag = ({ countryCode }: { countryCode: string | null }) => {
  const width = 1.25 * 20;
  const height = 1.25 * 14;

  if (countryCode === 'logi')
    return (
      <img
        src={'https://i.imgur.com/uT5MJWi.png'}
        alt={`${countryCode} flag`}
        width={width}
        height={height}
        style={{ marginRight: 6 }}
      />
    );

  if (!countryCode)
    return (
      <div
        style={{
          marginRight: 8,
          width,
          height,
          background: 'grey',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
        }}
      >
        ?
      </div>
    );

  return (
    <>
      <img
        src={
          countryCode.includes('NIR')
            ? `https://flagicons.lipis.dev/flags/4x3/gb-nir.svg`
            : `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${countryCode?.toLowerCase()}.svg`
        }
        alt={`${countryCode} flag`}
        width={width}
        height={height}
        style={{ marginRight: 6 }}
      />
    </>
  );
};
