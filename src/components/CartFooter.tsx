export default function CartFooter({ totalPrice }: { totalPrice: number }) {
  return (
    <div className='py-8 flex items-center justify-between'>
      <span className='text-xl font-semibold'>Сумма заказа: {totalPrice}&#8381;</span>
      <button className='button' type='button'>
        Оформить заказ
      </button>
    </div>
  )
}
