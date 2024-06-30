import React from 'react'

const styles = {
  button: {
    fontWeight: 700,
    fontSize: 15,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 5,
    padding: '15px 20px',
    minWidth: 80,
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
    textTransform: 'uppercase',
  },
}

export const Button = ({
  text,
  style,
  href,
  target,
}: {
  text: string
  style: any
  href: string
  target: string
}) => (
  <a href={href} style={{ ...styles.button, ...style }} target={target}>
    {text}
  </a>
)
