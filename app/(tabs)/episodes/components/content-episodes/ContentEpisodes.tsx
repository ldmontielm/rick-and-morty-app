"use client"

import React from 'react'
import { useEpisodes } from '../../hooks/use-episodes'
import { CardEpisode } from '../card-episode'
import { Episode } from '../../models'
import BlurFade from '@/components/ui/blur-fade'
import { Paginator } from '@/components/system/paginator'
import { useSearchParams } from 'next/navigation'
import { LoaderContent } from '@/components/system/loader-content'
import { ErrorContent } from '@/components/system/error-content'

export default function ContentEpisodes() {
    const params = useSearchParams()
    const { data, isLoading, isError, error } = useEpisodes(Number(params.get('page') || "1")!)

    if(isError){
        return (
            <ErrorContent content={error.message} />
        )
    }

    if(isLoading){
        return (
            <LoaderContent content='Loading Episodes' />
        )
    }

    return (
        <div>
            <div className="flex flex-col gap-3">
                {
                    data?.results.map((episode, idx) => (
                        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                            <CardEpisode episode={episode as Episode} />
                        </BlurFade>
                    ))
                }
            </div>
            <Paginator quantity={data?.info.pages ?? 0} />
        </div>
    )
}
