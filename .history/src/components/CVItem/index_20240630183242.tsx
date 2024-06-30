import { Tag } from '@/components/Tag'

export const CVItem = ({ name, style, dates, role, texts, tags }: any) => {
  return (
    <div
      className="mt-12 p-0 md:grid md:grid-cols-2 md:pb-2.5 md:pl-0 md:pr-0"
      style={style}
    >
      <div className="mb-5 w-full justify-start border-r border-pink-600 pb-2.5 md:mb-0 md:w-auto md:justify-end md:border-r md:pr-5">
        <h2 className="whitespace-nowrap text-right text-4xl font-extrabold leading-snug">
          {name}
        </h2>
        <h3 className="mb-2.5 text-xl">{role}</h3>
        <div className="text-sm text-gray-500">{dates}</div>
      </div>
      <div className="flex-3 ml-5">
        <ul className="list-disc pl-5">
          {texts.map((text, index) => (
            <li
              key={index}
              className="text-base leading-7"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </ul>
        <div className="ml-4.5 mt-2.5 flex flex-row flex-wrap">
          {tags &&
            tags.map((tag, index) => <Tag key={index} text={tag} small />)}
        </div>
      </div>
    </div>
  )
}
