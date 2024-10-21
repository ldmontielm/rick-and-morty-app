import React from 'react'

interface Props {
    content: string
}

export default function ErrorContent({ content }:Props) {
  return (
    <div className="w-full p-4 flex flex-col items-center gap-2 text-white">
        <p className="text-medium text-xl">{content}</p>
    </div>
  )
}
