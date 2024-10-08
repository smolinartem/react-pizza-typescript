import type { Category } from '../types/index.types'

type FiltersProps = {
  items: Category[]
  categoryName: string
  onSelect: (value: string) => void
  selected: string
}

export default function Filters({ items, categoryName, onSelect, selected }: FiltersProps) {
  return (
    <ul className='flex-center gap-2 mb-6 overflow-x-scroll scroll-pl-10 sm:overflow-x-hidden sm:scroll-pl-0'>
      <li className='shrink-0'>
        <label className='form-label text-center text-sm p-2 md:text-base md:p-3'>
          <input
            className='appearance-none hidden m-0'
            type='radio'
            name={categoryName}
            value='all'
            onChange={(e) => onSelect(e.target.value)}
            checked={selected === 'all'}
          />
          Все
        </label>
      </li>
      {items.map((item) => (
        <li key={item.id} className='shrink-0'>
          <label className='form-label text-center text-sm p-2 md:text-base md:p-3'>
            <input
              className='appearance-none hidden m-0'
              type='radio'
              name={categoryName}
              value={item.value}
              onChange={(e) => onSelect(e.target.value)}
              checked={selected === item.value}
            />
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  )
}
