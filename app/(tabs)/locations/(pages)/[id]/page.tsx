import React from 'react'
import { ContentLocation } from './components/content-location'

interface Props{
    params: {
        id: string
    }
}

export default function page({ params }:Props) {
  return (
    <div>
        <ContentLocation id={params.id} />
    </div>
  )
}
