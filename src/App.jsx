import React from 'react'
import { Footer } from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

const Router = React.lazy(() => import('./router/Router'));

const App = ()=> {
    return (
      <React.Suspense fallback={<Spinner/>}>
        <Router/>
        <Footer/>
      </React.Suspense>    
  )
}

export default App
