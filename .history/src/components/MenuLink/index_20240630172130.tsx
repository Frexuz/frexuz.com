import React from 'react'

const styles = {
  link: {
    fontWeight: 900,
    color: '#000',
    textTransform: 'uppercase',
  },
}

export const MenuLink = ({ text }: { text: string }) => (
  <a href="#work" style={styles.link}>
    {text}
  </a>
)
