import React from 'react'
import PricingCard from '../../components/PricingCard'

const Pricing = () => {

    const freeData = ['Unlimited URL Shortening', 'Basic Link Analytics', 'Customizable Short Links', 'Standard Support', 'Ad-supported']
    const professionalData = ['Enhanced Link Analytics', 'Custom Branded Domains', 'Advanced Link Customization', 'Priority Support', 'Add-free Experience']
    const teamsData = ['Team Collaboration', 'User Roles and Permissions', 'Enhanced Security', 'API Access', 'Dedicated Account Manager']
  return (
    <div className='sm:flex sm:justify-between px-4 sm:px-6 lg:px-8 '>
        <PricingCard plan="Basic" header="Free" planText="Free for all users" cardList={freeData}/>
        <PricingCard plan="Professional" header="$15/month" planText="Ideal for business creators" cardList={professionalData} whiteBackground={true}/>
        <PricingCard plan="Teams" header="$25/month" planText="Share with up to 10 users" cardList={teamsData}/>


    </div>
  )
}

export default Pricing;