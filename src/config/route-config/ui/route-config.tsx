import { BookPage } from '@/pages/book-page'
import { HomePage } from '@/pages/home-page'
import { Navigate, RouteProps } from 'react-router-dom'

enum AppRoutes {
  HOME = 'home',
  BOOK = 'book',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.BOOK]: '/book/:id',
  [AppRoutes.NOT_FOUND]: '*'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />
  },
  [AppRoutes.BOOK]: {
    path: RoutePath.book,
    element: <BookPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <Navigate replace to={RoutePath.home} />
  }
}
