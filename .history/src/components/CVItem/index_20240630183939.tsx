import { Tag } from '@/components/Tag'

export const CVItem = ({ name, style, dates, role, texts, tags }: any) => {
  return (
    <div
      className="mt-12 p-0 sm:grid sm:grid-cols-2 sm:pb-2.5 sm:pl-0 sm:pr-0"
      style={style}
    >
      <div className="mb-5 flex w-full flex-col items-end justify-start border-b-4 border-pink-600 pb-2.5 sm:mb-0 sm:w-auto sm:border-b-0 sm:border-r-4 sm:pr-5">
        <h2 className="whitespace-nowrap text-right text-4xl font-extrabold">
          {name}
        </h2>
        <h3 className="mb-1 text-xl font-bold">{role}</h3>
        <div className="text text-gray-500">{dates}</div>
      </div>
      <div className="flex-3 ml-5">
        <ul className="list-disc pl-5">
          {texts.map((text, index) => (
            <li
              key={index}
              className="mt-1 text-lg leading-6"
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
