export const Tag = ({ text, small }: { text: string; small?: boolean }) => {
  const styles = {
    tag: {
      fontWeight: 700,
      color: '#fff',
      backgroundColor: '#cc0178',
      padding: small ? 7 : 9,
      fontSize: small ? 14 : 15,
      borderRadius: 3,
    },
  }

  return (
    <span
      style={{ ...styles.tag, ...style }}
      className="text-333 m-2 bg-gray-300"
    >
      {text}
    </span>
  )
}
