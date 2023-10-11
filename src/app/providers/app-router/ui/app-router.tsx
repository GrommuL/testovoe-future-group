import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/app/layout'
import { RouteConfig } from '@/config/route-config'
import { PageLoader } from '@/components/widgets/page-loader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          {Object.values(RouteConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  )
}
