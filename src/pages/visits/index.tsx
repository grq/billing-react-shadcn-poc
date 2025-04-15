import VisitsTable from '@/pages/visits/visits-table'
import { PageTitle } from '@/components/page-title'

const VisitsPage = () => {

  return (
    <>
      <PageTitle path={[['Billing'], ['Visits', '/visits']]} />
      <VisitsTable />
    </>
  )
}

export default VisitsPage