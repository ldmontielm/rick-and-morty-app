import { Loader } from 'lucide-react'
import React from 'react'

interface Props{
    content: string
}

export default function LoaderContent({ content }:Props) {
  return (
    <div className="w-full p-4 flex flex-col items-center gap-2 text-white">
        <Loader size={18} className="animate-spin" />
        <p className="text-semibold text-xs">{ content }</p>
    </div>
  )
}
