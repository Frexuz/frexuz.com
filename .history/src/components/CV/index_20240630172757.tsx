import React from 'react'

import { cv } from '@/media'
import { CVItem } from '@/components'

export const CV = () => {
  return <>{cv.map((cvItem) => <CVItem key={`CVItem${cvItem.name}`} {...cvItem} />}</>)
}
