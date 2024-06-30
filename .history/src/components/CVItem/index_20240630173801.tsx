import { Tag } from '@/components/Tag'

export const CVItem = ({ name, style, dates, role, texts, tags }: any) => {
  const isMobile = false // This should ideally be determined dynamically

  return (
    <div
      className={`mt-12 ${isMobile ? 'p-0' : 'pl-0 pr-0 pb-2.5'} ${
        isMobile ? '' : 'grid grid-cols-2'
      }`}
    >
      <div
        className={`border-r ${
          isMobile ? 'border-b' : 'border-r'
        } border-pink-600 ${isMobile ? 'pb-2.5' : 'pr-5'} ${
          isMobile ? 'w-full' : 'w-50'
        } ${isMobile ? 'justify-start' : 'justify-end'} ${
          isMobile ? 'mb-5' : 'mb-0'
        }`}
      >
        {/* Header content goes here */}
      </div>
      <div className="flex-3 ml-5">{/* Info content goes here */}</div>
      <ul className="list-disc">{/* List items go here */}</ul>
      <div className="ml-4.5 mt-2.5 flex flex-row flex-wrap">
        {/* Tags content goes here */}
      </div>
      <div
        className={`text-4xl font-extrabold ${
          isMobile ? 'text-left' : 'text-right'
        } leading-snug whitespace-nowrap`}
      >
        {/* Name content goes here */}
      </div>
      <div className="mb-2.5 text-xl">{/* Role content goes here */}</div>
    </div>
  )
}
