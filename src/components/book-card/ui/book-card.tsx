import { Link } from 'react-router-dom'
import { FC } from 'react'

import style from './book-card.module.scss'

interface BookCardProps {
  id: string
  image: string
  category: string[]
  title: string
  authors: string[]
}

export const BookCard: FC<BookCardProps> = ({
  id,
  authors,
  category,
  image,
  title
}) => {
  const formattedAuthors = authors?.join(', ')
  const formattedCategories = category?.[0]

  return (
    <Link to={`/book/${id}`} className={style.card}>
      <img className={style.card_image} src={image} alt={title} />
      <div className={style.card_category}>{formattedCategories}</div>
      <div className={style.card_info}>
        <h3 className={style.card_title}>{title}</h3>
        <p className={style.card_authors}>{formattedAuthors}</p>
      </div>
    </Link>
  )
}
