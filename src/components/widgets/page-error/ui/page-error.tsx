import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/shared/button'
import { RoutePath } from '@/config/route-config'

import style from './page-error.module.scss'

export const PageError = () => {
  const navigate = useNavigate()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <main>
      <section>
        <div className='container'>
          <div className={style.page_error}>
            <h1 className={style.title}>Something went wrong</h1>
            <div className={style.buttons}>
              <Button onClick={reloadPage}>Reload Page</Button>
              or
              <Button onClick={() => navigate(RoutePath.home)}>
                Back to Home Page
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
