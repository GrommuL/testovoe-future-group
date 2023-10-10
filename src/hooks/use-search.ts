import { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useSearch = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const getSearchValue = (e: FormEvent<HTMLFormElement>) => {
    if (pathname !== '/') navigate('/')

    e.preventDefault()

    const searchValue = (e.currentTarget[0] as HTMLInputElement).value
    console.log(searchValue)
  }

  return { getSearchValue }
}
