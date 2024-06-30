// Converted TSX component using Tailwind CSS classes
export const Button = ({
  text,
  href,
  target,
  extraClasses = '',
}: {
  text: string
  href: string
  target: string
  extraClasses?: string
}) => (
  <a
    href={href}
    target={target}
    className={`font-bold text-sm text-white bg-black rounded px-5 py-3.5 min-w-[80px] no-underline justify-center items-center shadow-lg uppercase ${extraClasses}`}
  >
    {text}
  </a>
)
