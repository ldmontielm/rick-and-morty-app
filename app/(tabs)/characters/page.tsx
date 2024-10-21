import React, { Suspense } from 'react'
import { ContentCharacters } from './components/content-characters'
import { LoaderContent } from '@/components/system/loader-content'

export default function page() {
  return (
    <Suspense fallback={<LoaderContent content='Loading Characters' /> }>
      <div className='my-10'>
        <ContentCharacters />
      </div>
    </Suspense>
  )
}
