import { useParams } from 'react-router-dom'

import { useCurrentBook } from '@/hooks/use-current-book'
import { Loader } from '@/components/shared/loader'
import BookCover from '@/app/assets/book-cover.webp'

import style from './book-page.module.scss'

const BookPage = () => {
  const { id } = useParams()
  const { book, formattedAuthors, formattedCategories, isLoading } =
    useCurrentBook(id)

  if (isLoading) return <Loader />

  return (
    <main className={style.book}>
      <div className='container'>
        <section className={style.book_content}>
          <div className={style.book_cover}>
            <img
              className={style.book_image}
              src={book?.volumeInfo.imageLinks?.thumbnail || BookCover}
              alt={book?.volumeInfo.title}
            />
          </div>
          <div className={style.book_about}>
            <p className={style.book_category}>{formattedCategories}</p>
            <div className={style.book_block}>
              <div className={style.book_info}>
                <h2 className={style.book_title}>{book?.volumeInfo.title}</h2>
                <p className={style.book_authors}>{formattedAuthors}</p>
              </div>
              <div className={style.book_description}>
                {book?.volumeInfo.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: book?.volumeInfo?.description
                    }}
                    className={style.book_text}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default BookPage
