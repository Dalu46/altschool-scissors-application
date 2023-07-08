import checkCircle from '../assets/check-circle.svg';

const PricingCard = ({ plan, header, planText, cardList, whiteBackground }) => {
    console.log(cardList)
    const planList = cardList.map((item, id) => {
        return (
            <span key={id} className='flex py-3'>
                <img src={checkCircle} alt={item} className='mr-3'/>
                <p>{item}</p>
            </span>
        )
    })
  return (
    <div className={`${whiteBackground ? 'bg-[#c4def7]' : 'bg-[#1E3448]'} ${whiteBackground ? 'text-black' : 'text-white'} px-8 pt-4 rounded-[12px] mb-4 sm:w-[32%]`}>
        <p className='text-lg sm:2xl pb-4'>{plan}</p>
        <p className='text-xl font-extrabold sm-2xl pb-3'>{header}</p>
        <p>{planText}</p>
        <div className='py-4'>
            {planList}
        </div>
    </div>
  )
}

export default PricingCard