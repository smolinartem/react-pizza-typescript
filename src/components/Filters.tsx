import type { Category } from '../types/index.types'

type FiltersProps = {
  items: Category[]
  categoryName: string
  onSelect: (value: string) => void
  selected: string
}

export default function Filters({ items, categoryName, onSelect, selected }: FiltersProps) {
  return (
    <ul className='flex items-center justify-center gap-6 mb-6'>
      <li>
        <label className='form-label text-center'>
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
        <li key={item.id}>
          <label className='form-label text-center'>
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
