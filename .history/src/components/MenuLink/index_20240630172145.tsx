const styles = {
  link: {
    fontWeight: 900,
    color: '#000',
    textTransform: 'uppercase',
  },
}

export const MenuLink = ({ text }: { text: string }) => (
  <a style={styles.link}>{text}</a>
)
