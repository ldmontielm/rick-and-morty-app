import React from 'react'
import { ContentCharacter } from './components/content-character'

interface Props{
    params: {
        id: string
    }
}

export default function page({ params }:Props) {
  return (
    <div className='my-10'>
      <ContentCharacter id={params.id} />
    </div>
  )
}
