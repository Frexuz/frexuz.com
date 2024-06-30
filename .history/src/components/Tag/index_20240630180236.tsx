export const Tag = ({ text, small }: { text: string; small?: boolean }) => (
  <span
    className={`font-bold text-white ${
      small ? 'p-1 text-xs' : 'px-2 py-1 text'
    } bg-[#cc0178] rounded m-0.5`}
  >
    {text}
  </span>
)
