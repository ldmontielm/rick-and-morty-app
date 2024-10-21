import React from 'react'
import { ContentEpisode } from './components/content-episode'

interface Props{
    params: {
        id: string
    }
}

export default function page({ params }:Props) {
  return (
    <div>
        <ContentEpisode id={params.id} />
    </div>
  )
}
