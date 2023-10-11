import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import { SelectType } from '@/types/select-type'
import { SelectDownIcon } from '@/components/shared/icons/select-down-icon'
import { SelectUpIcon } from '@/components/shared/icons/select-up-icon'

import style from './select.module.scss'

interface SelectProps {
  options: SelectType<string>
  setValue: (value: string) => void
  value: string
}

export const Select = ({ options, setValue, value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef() as MutableRefObject<HTMLDivElement>

  const clickOutsideModal = useCallback(
    (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    },
    [setIsOpen]
  )

  useEffect(() => {
    document.addEventListener('click', clickOutsideModal, true)

    return () => document.removeEventListener('click', clickOutsideModal, true)
  }, [clickOutsideModal])

  return (
    <div className={style.select}>
      <h3 className={style.title}>{options.selectTitle}</h3>
      <div ref={dropdownRef} className={style.dropdown}>
        <button
          className={style.dropdown_selected}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {value}
          {isOpen ? <SelectUpIcon /> : <SelectDownIcon />}
        </button>
        {isOpen && (
          <ul className={style.dropdown_content}>
            {options.selectItems.map((item) => (
              <li
                key={item}
                className={style.dropdown_item}
                onClick={() => {
                  setValue(item)
                  setIsOpen(false)
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
