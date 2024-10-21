import React, { Suspense } from 'react'
import { ContentLocations } from './components/content-locations'
import { LoaderContent } from '@/components/system/loader-content'

export default function page() {
  return (
    <Suspense 
      fallback={<LoaderContent content='Loading Locations' />}
    >
      <div className='my-10'>
        <ContentLocations />
      </div>
    </Suspense>
  )
}
