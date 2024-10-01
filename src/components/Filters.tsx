import type { category } from '../types/index.types'

type FiltersProps = {
  items: category[]
  categoryName: string
  onSelect: (value: string) => void
}

export default function Filters({ items, categoryName, onSelect }: FiltersProps) {
  return (
    <ul className='flex items-center justify-center gap-5'>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type='radio'
              name={categoryName}
              value={item.value}
              onChange={(e) => onSelect(e.target.value)}
            />
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  )
}
