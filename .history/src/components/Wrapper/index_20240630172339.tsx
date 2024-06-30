import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
)
