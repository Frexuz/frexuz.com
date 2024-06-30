import { images } from '@/media'
import { Tag } from '@/components/Tag'

export const BioRandom = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-18 mt-20 flex flex-wrap items-center justify-center text-center font-bold leading-7">
          <p className="ml-2 mr-4">
            Born in 🇸🇪 Sweden, also speak 🇵🇱 Polish, have lived in 🇲🇹 Malta, and
            currently in 🇭🇰 Hong Kong.
          </p>
        </div>

        <h2
          className={`bg-black text-white py-1 px-2 rounded text-center mt-60 ${
            isMobile ? 'text-20' : 'text-32'
          }`}
        >
          I&apos;m a coder
        </h2>
        <h3 className="text-18 mt-20 text-center font-bold leading-7">
          Self-taught since the age of 13. Never satisfied. Always learning.
          Enjoy web/mobile, efficiency and tools. Doing things right.
        </h3>

        <h2
          className={`bg-black text-white py-1 px-2 rounded text-center mt-60 ${
            isMobile ? 'text-20' : 'text-32'
          }`}
        >
          I&apos;m a traveler
        </h2>
        <h3 className="text-18 mt-20 text-center font-bold leading-7">
          My goal is to visit 100 countries. 71 left!
        </h3>
        <div className="mt-20 flex flex-wrap justify-center">
          <Tag text="🇨🇳 China" />
          <Tag text="🇭🇷 Croatia" />
          <Tag text="🇩🇰 Denmark" />
          <Tag text="🇫🇷 France" />
          <Tag text="🇩🇪 Germany" />
          <Tag text="🇬🇷 Greece" />
          <Tag text="🇭🇰 Hong Kong" />
          <Tag text="🇮🇩 Indonesia" />
          <Tag text="🇮🇹 Italy" />
          <Tag text="🇯🇵 Japan" />
          <Tag text="🇰🇪 Kenya" />
          <Tag text="🇱🇹 Lithuania" />
          <Tag text="🇲🇴 Macau" />
          <Tag text="🇲🇾 Malaysia" />
          <Tag text="🇲🇹 Malta" />
          <Tag text="🇵🇪 Peru" />
          <Tag text="🇵🇭 Philippines" />
          <Tag text="🇵🇱 Poland" />
          <Tag text="🇪🇸 Spain" />
          <Tag text="🇸🇬 Singapore" />
          <Tag text="🇰🇷 South Korea" />
          <Tag text="🇸🇪 Sweden" />
          <Tag text="🇨🇭 Switzerland" />
          <Tag text="🇹🇿 Tanzania" />
          <Tag text="🇹🇭 Thailand" />
          <Tag text="🇬🇧 UK" />
          <Tag text="🇺🇸 USA" />
          <Tag text="🇻🇦 Vatican City" />
          <Tag text="🇻🇳 Vietnam" />
        </div>

        <h2
          className={`bg-black text-white py-1 px-2 rounded text-center mt-60 ${
            isMobile ? 'text-20' : 'text-32'
          }`}
        >
          I love cats
        </h2>
        <h3 className="text-18 mt-20 text-center font-bold leading-7">
          I have two.
        </h3>
        <span
          role="img"
          aria-label="Cats"
          className="text-32 mb-10 mt-20 block"
        >
          😻😻
        </span>
        <a
          href="https://instagram.com/frexuz"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300"
        ></a>
      </div>
    </div>
  )
}
