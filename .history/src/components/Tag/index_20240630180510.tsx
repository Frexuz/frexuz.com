export const Tag = ({
  text,
  small,
  variant,
}: {
  text: string
  small?: boolean
  variant: 'brand' | 'normal'
}) => (
  <span
    className={`font-bold text-white ${
      small ? 'px-1 py-0.5 text-xs' : 'px-2 py-1 text'
    } ${variant === 'brand' ? 'bg-[#cc0178]' : 'bg-gray-400'} rounded m-0.5`}
  >
    {text}
  </span>
)
