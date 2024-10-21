"use client"

import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface Props {
  quantity: number 
}

export default function Paginator({ quantity }:Props) {
  const pathname = usePathname()
  const router = useRouter()
  const params = useSearchParams()
  const [ page, setPage ] = useState(params.get('page') || "1")

  useEffect(() => {
    const _page = params.get('page')||'1'
    
    if(Number(_page) <= 0){
      router.push(`${pathname}?page=1`)
    }
    if(Number(_page) > quantity){
      router.push(`${pathname}?page=${quantity}`)
    }

    setPage(_page)

  }, [params, pathname, quantity, router])

  const increasePage = () => {
    router.push(`${pathname}?page=${Number(page) + 1}`)
  }

  const decreasePage = () => {
    router.push(`${pathname}?page=${Number(page) - 1}`)
  }

  return (
    <div className='w-full mt-5 flex items-center justify-between'>
      <p className='text-xs text-muted-foreground'>Page {page} of {quantity}</p>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              size="icon" 
              className="bg-[#2D2D2D] hover:bg-[#3f3f3f]"
              disabled={Number(page) <= 1}
              onClick={() => {
                decreasePage()
              }}>
              <ChevronLeft className="text-white" size={14} />
            </Button>
          </PaginationItem>
        
          <PaginationItem className="bg-[#2D2D2D] rounded-md text-white">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <Button
                size="icon"
                disabled={Number(page) >= quantity}
                className="bg-[#2D2D2D] hover:bg-[#3f3f3f]"
                onClick={() => {
                  increasePage()
                }}>
                <ChevronRight className="text-white" size={14} />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>

  )
}
