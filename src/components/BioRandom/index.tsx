import { Tag } from '@/components/Tag'

const flags = [
  { flag: '🇦🇹', name: 'Austria' },
  { flag: '🇨🇳', name: 'China' },
  { flag: '🇨🇿', name: 'Czechia' },
  { flag: '🇩🇰', name: 'Denmark' },
  { flag: '🇸🇿', name: 'Eswatini' },
  { flag: '🇪🇸', name: 'Spain' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇬🇷', name: 'Greece' },
  { flag: '🇭🇰', name: 'Hong Kong' },
  { flag: '🇭🇷', name: 'Croatia' },
  { flag: '🇭🇺', name: 'Hungary' },
  { flag: '🇮🇩', name: 'Indonesia' },
  { flag: '🇮🇹', name: 'Italy' },
  { flag: '🇯🇵', name: 'Japan' },
  { flag: '🇰🇪', name: 'Kenya' },
  { flag: '🇰🇼', name: 'Kuwait' },
  { flag: '🇰🇷', name: 'South Korea' },
  { flag: '🇱🇮', name: 'Liechtenstein' },
  { flag: '🇱🇰', name: 'Sri Lanka' },
  { flag: '🇱🇸', name: 'Lesotho' },
  { flag: '🇱🇹', name: 'Lithuania' },
  { flag: '🇲🇴', name: 'Macau' },
  { flag: '🇲🇹', name: 'Malta' },
  { flag: '🇲🇺', name: 'Mauritius' },
  { flag: '🇲🇾', name: 'Malaysia' },
  { flag: '🇲🇦', name: 'Morocco' },
  { flag: '🇵🇪', name: 'Peru' },
  { flag: '🇵🇭', name: 'Philippines' },
  { flag: '🇵🇱', name: 'Poland' },
  { flag: '🇸🇨', name: 'Seychelles' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇿🇦', name: 'South Africa' },
  { flag: '🇸🇪', name: 'Sweden' },
  { flag: '🇨🇭', name: 'Switzerland' },
  { flag: '🇹🇭', name: 'Thailand' },
  { flag: '🇹🇿', name: 'Tanzania' },
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇻🇦', name: 'Vatican City' },
  { flag: '🇻🇳', name: 'Vietnam' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇧🇭', name: 'Bahrain' },
  { flag: '🇸🇦', name: 'Saudi Arabia' },
  { flag: '🇰🇭', name: 'Cambodia' },
  { flag: '🇮🇱', name: 'Israel' },
  { flag: '🇯🇴', name: 'Jordan' },
  { flag: '🇱🇦', name: 'Laos' },
  { flag: '🇹🇼', name: 'Taiwan' },
  { flag: '🇦🇪', name: 'United Arab Emirates' },
  { flag: '🇵🇼', name: 'Palau' },
].sort((a, b) => a.name.localeCompare(b.name))

export const BioRandom = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="text-18 mt-4 flex flex-wrap items-center justify-center text-center font-bold leading-7">
          <p className="ml-2 mr-4">
            Born in 🇸🇪 Sweden, also speak 🇵🇱 Polish, have lived in 🇲🇹 Malta, and
            currently in 🇭🇰 Hong Kong.
          </p>
        </div>

        <h2 className="mt-12 rounded bg-black px-2 py-1 text-center text-2xl text-white sm:text-3xl">
          I&apos;m a coder
        </h2>
        <h3 className="text-18 mt-4 text-center font-bold leading-7">
          Self-taught since the age of 13. Never satisfied. Always learning.
          Enjoy web/mobile, efficiency and tools. Doing things right.
        </h3>

        <h2 className="mt-12 rounded bg-black px-2 py-1 text-center text-2xl text-white sm:text-3xl">
          I&apos;m a traveler
        </h2>
        <h3 className="text-18 mt-4 text-center font-bold leading-7">
          My goal is to visit 100 countries. 49 left!
        </h3>
        <div className="mt-4 flex flex-wrap justify-center">
          {flags.map((country) => {
            return (
              <Tag
                text={`${country.flag} ${country.name}`}
                key={country.name}
              />
            )
          })}
        </div>

        <h2 className="mt-12 rounded bg-black px-2 py-1 text-center text-2xl text-white sm:text-3xl">
          I love cats
        </h2>
        <h3 className="text-18 mt-4 text-center font-bold leading-7">
          I have two.
        </h3>
        <span role="img" aria-label="Cats" className="text-32 mb-10 mt-4 block">
          😻😻
        </span>
        <a
          href="https://instagram.com/frexuz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M18.07,11.25a.25.25,0,0,0-.24.31,6,6,0,1,1-11.65,0,.25.25,0,0,0-.24-.31H.5a.5.5,0,0,0-.5.5V17.5A6.51,6.51,0,0,0,6.5,24h11A6.51,6.51,0,0,0,24,17.5V11.75a.5.5,0,0,0-.5-.5Z"
              style={{
                stroke: 'none',
                fill: 'rgb(255, 255, 255)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.5',
              }}
            ></path>
            <path
              d="M23.5,9.75a.5.5,0,0,0,.5-.5V6.5A6.51,6.51,0,0,0,17.5,0H11.75a.5.5,0,0,0-.5.5v4a.75.75,0,0,1-1.5,0V.5a.5.5,0,0,0-.5-.5h-.5a.5.5,0,0,0-.5.5v4a.75.75,0,0,1-1.5,0v-4A.5.5,0,0,0,6.23,0l-.55,0a.5.5,0,0,0-.43.5v4a.75.75,0,0,1-1.5,0V1A.25.25,0,0,0,3.38.81,6.5,6.5,0,0,0,0,6.5V9.25a.5.5,0,0,0,.5.5H6.7a.5.5,0,0,0,.41-.21,6,6,0,0,1,9.79,0,.5.5,0,0,0,.41.21Zm-6-5.25a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1h-1a1,1,0,0,1-1-1Z"
              style={{
                stroke: 'none',
                fill: 'rgb(255, 255, 255)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.5',
              }}
            ></path>
            <circle
              cx="12"
              cy="13"
              r="3"
              style={{
                stroke: 'none',
                fill: 'rgb(255, 255, 255)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.5',
              }}
            ></circle>
          </svg>
        </a>
      </div>
    </div>
  )
}
