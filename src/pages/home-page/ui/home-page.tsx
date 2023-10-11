import { BookCard } from '@/components/book-card'
import { Loader } from '@/components/shared/loader'
import { useBooks } from '@/hooks/use-books'

import style from './home-page.module.scss'

const HomePage = () => {
  const { isLoading, books, numberOfBooksFound } = useBooks()

  if (isLoading) return <Loader />

  return (
    <main className={style.home}>
      <div className='container'>
        <section className={style.section}>
          <h2 className={style.title}>
            {books
              ? `Found ${numberOfBooksFound} results`
              : 'Sorry, nothing was found for your request.'}
          </h2>
          <div className={style.books}>
            {books?.map((book) => (
              <BookCard
                key={book?.id}
                id={book?.id}
                image={book.volumeInfo.imageLinks?.thumbnail}
                title={book.volumeInfo?.title}
                category={book.volumeInfo?.categories}
                authors={book.volumeInfo?.authors}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomePage
