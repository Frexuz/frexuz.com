import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto max-w-6xl">{children}</div>
)
