"use client"
import React from 'react'
import { useLocations } from '../../hooks/use-locations'
import { CardLocation } from '../card-location'
import { Location } from '../../models'
import { Paginator } from '@/components/system/paginator'
import { useSearchParams } from 'next/navigation'
import BlurFade from '@/components/ui/blur-fade'
import { LoaderContent } from '@/components/system/loader-content'
import { ErrorContent } from '@/components/system/error-content'

export default function ContentLocations() {
    const params = useSearchParams()
    const { data, isLoading, isError, error } = useLocations(Number(params.get('page') || "1"))

    if(isError){
        return (
            <ErrorContent content={error.message} />
        )
    }

    if(isLoading){
        return (
            <LoaderContent content='Loading Locations' />
        )
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                {
                    data?.results.map((location, idx) => (
                        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                            <CardLocation key={idx} location={location as Location} />
                        </BlurFade>
                    ))
                }
            </div>
            <Paginator quantity={data?.info.pages ?? 0} />
        </div>
    )
}
