export const Tag = ({
  text,
  small,
  variant,
}: {
  text: string
  small?: boolean
  variant?: 'brand' | 'normal'
}) => (
  <span
    className={`font-bold ${small ? 'px-1 py-0.5 text-sm' : 'px-2 py-1'} ${
      variant === 'brand' ? 'bg-[#cc0178]' : 'bg-gray-300'
    } ${variant === 'brand' ? 'text-white' : 'text-gray-800'} rounded m-0.5`}
  >
    {text}
  </span>
)
