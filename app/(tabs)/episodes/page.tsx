import React, { Suspense } from 'react'
import { ContentEpisodes } from './components/content-episodes'
import { LoaderContent } from '@/components/system/loader-content'

export default function page() {
  return (
    <Suspense fallback={<LoaderContent content='Loading Episodes' />}>
      <div className='my-10'>
        <ContentEpisodes />
      </div>
    </Suspense>
  )
}
