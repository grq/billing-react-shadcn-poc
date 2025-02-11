import ServiceRateForm from './service-rate-form'

import { PageTitle } from '@/components/page-title'

const AddServiceRatePage = () => {

  return (
    <>
      <PageTitle path={[['Billing'], ['Settings'], ['Service rates', '/servicerates'], ['Add Service rate', '/addservicerate']]} />
      <div className='p-5'>
        <ServiceRateForm />
      </div>
    </>
  )
}

export default AddServiceRatePage
