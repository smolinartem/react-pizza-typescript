export default function CartFooter({ totalPrice }: { totalPrice: number }) {
  return (
    <div className='py-8 flex items-center justify-between gap-2'>
      <span className='md:text-xl font-semibold text-center'>
        Сумма заказа: {totalPrice}&#8381;
      </span>
      <button className='button text-sm p-2 md:text-base md:px-4' type='button'>
        Оформить заказ
      </button>
    </div>
  )
}
