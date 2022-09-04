import React from 'react'
import Spinner from './components/Spinner/Spinner';

const Router = React.lazy(() => import('./router/Router'));

const App = ()=> {
    return (
      <React.Suspense fallback={<Spinner/>}>
        <Router/>
      </React.Suspense>    
  )
}

export default App
