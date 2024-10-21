"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Tabs() {
    const pathname = usePathname()
    const router = useRouter()
    
    const routes = {
        characters: '/characters',
        episodes: '/episodes',
        locations: '/locations'
    }

    return (
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                    <button
                        onClick={() => {;
                            router.push('/characters')
                        }}
                        className={`inline-block p-4 ${ pathname === routes.characters ? 'border-neutral-800 border-b-2 rounded-t-lg text-neutral-600 font-medium' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`} type="button">Characters</button>
                </li>
                <li className="me-2" role="presentation">
                    <button
                        onClick={() => {;
                            router.push('/episodes')
                        }} 
                        className={`inline-block p-4 ${ pathname === routes.episodes ? 'border-neutral-800 border-b-2 rounded-t-lg text-neutral-600 font-medium' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`} type="button">Episodes</button>
                </li>
                <li className="me-2" role="presentation">
                    <button 
                        onClick={() => {;
                            router.push('/locations')
                        }} 
                        className={`inline-block p-4 ${ pathname === routes.locations ? 'border-neutral-800 border-b-2 rounded-t-lg text-neutral-600 font-medium' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`} type="button">Locations</button>
                </li>
            </ul>
        </div>
    )
}
