import { images } from '@/media'
import { Tag } from '@/components/Tag'

export const Bio = () => (
  <div className="flex flex-col items-center">
    <div className="mb-5 flex flex-row">
      <a
        href="https://linkedin.com/in/kristian-gerardsson"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-0.5 mr-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400"
      >
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M5.67,22.63H.81V8.7H5.67Zm10.09-9.39a2.14,2.14,0,0,0-2.14,2.14v7.25H8.51V8.7h5.11v1.59a6.76,6.76,0,0,1,4.28-1.6c3.17,0,5.37,2.35,5.37,6.81v7.13H17.9V15.38A2.14,2.14,0,0,0,15.76,13.23Zm-10-9.36a2.5,2.5,0,1,1-2.5-2.5A2.5,2.5,0,0,1,5.74,3.88Z"
            style={{
              fill: '#fff',
              stroke: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 1.5,
            }}
          />
        </svg>
      </a>
      <a
        href="https://github.com/frexuz/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-0.5 mr-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400"
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M14.41,22.35a.5.5,0,0,0,.64.48,11.25,11.25,0,1,0-6.24,0,.5.5,0,0,0,.64-.48V20A2.81,2.81,0,0,1,6,18.28,6.07,6.07,0,0,0,4.64,16c2.85.69,2.9,2.54,4.84,1.67a4,4,0,0,1,.63-1.82c-2.2-.25-4.52-.6-4.52-4.4a3.84,3.84,0,0,1,1-2.66,3.56,3.56,0,0,1,.1-2.62s.83-.27,2.73,1a9.39,9.39,0,0,1,5,0c1.89-1.28,2.72-1,2.72-1a3.56,3.56,0,0,1,.1,2.62,3.83,3.83,0,0,1,1,2.66c0,3.81-2.32,4.15-4.53,4.39a3.83,3.83,0,0,1,.68,2.33Z"
            style={{
              fill: '#fff',
              stroke: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 1.5,
            }}
          />
        </svg>
      </a>
    </div>

    <div
      className="mb-12 h-[150px] w-[150px] rounded-full p-1.5 sm:h-[250px] sm:w-[250px]"
      style={{
        background: 'linear-gradient(45deg, #cc0178, #f66, #cc0178)',
        boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div
        className="h-full w-full rounded-full bg-cover"
        style={{
          backgroundImage: `url('${images.profilePicture.src}')`,
          boxShadow: '0 0 30px 5px rgba(0, 0, 0, 0.25) inset',
        }}
      ></div>
    </div>

    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="relative">
        <h1 className="rounded bg-black px-2.5 py-1.5 text-center text-3xl text-white sm:text-5xl">
          Kristian Gerardsson
        </h1>
        <h4 className="absolute -top-6 right-0 rounded text-sm font-bold">
          AKA FREXUZ
        </h4>
      </div>
      <h2 className="mt-2 rounded bg-[#cc0178] px-2.5 py-0.5 text-center text-3xl text-white sm:text-2xl">
        Full-stack developer
      </h2>
      <div className="mt-5 flex flex-row flex-wrap justify-center">
        <Tag text="Ruby on Rails" />
        <Tag text="React / React Native" />
        <Tag text="TypeScript" />
        <Tag text="SCSS" />
        <Tag text="MySQL / Postgres" />
        <Tag text="Redis / memcached" />
        <Tag text="Websockets" />
        <Tag text="AWS" />
        <Tag text="UX" />
        <Tag text="and more..." />
      </div>
    </div>
  </div>
)
