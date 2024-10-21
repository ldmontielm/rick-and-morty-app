import React from 'react'
import Link from 'next/link'
import { Episode } from '../../models'

interface Props{
    episode: Episode
}

export default function CardEpisode({ episode }:Props) {
  return (
    <div className="p-3 bg-[#2D2D2D] rounded-md">
        <Link href={`/episodes/${episode.id}`} className="text-sm font-semibold hover:text-[#C4DF2B] text-white">{episode.name}</Link>
        <p className="text-xs text-muted-foreground">{episode.episode} - {episode.air_date}</p>
        <p className="text-xs text-muted-foreground">{episode.characters.length} Characters</p>
    </div>
  )
}
