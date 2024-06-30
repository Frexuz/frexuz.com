export const Tag = ({
  text,
  style,
  small,
}: {
  text: string
  small?: boolean
  style: any
}) => {
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

  return <span style={{ ...styles.tag, ...style }}>{text}</span>
}
