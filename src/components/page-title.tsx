import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList, BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarTrigger
} from '@/components/ui/sidebar'

interface PageTitleProps {
  path: string[][]
}

export const PageTitle = ({ path }: PageTitleProps) => (
  <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div className="flex items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {
            path.map((p, i) => (
              <>
                <BreadcrumbItem key={i}>
                  <BreadcrumbLink href={p[1] ?? undefined}>
                    {p[0]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {
                  i !== path.length - 1 ?
                    <BreadcrumbSeparator className="hidden md:block" />
                    :
                    null
                }
              </>
            ))
          }
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </header>
)