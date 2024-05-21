import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BirdsLists from './components/cards/birds/BirdsLists'
import CatsList from './components/cards/cats/CatsList'
import DogsList from './components/cards/dogs/DogsList'
import AboutUs from './page/AboutUs'
import AnimalSearch from './page/AnimalSearch'
import ContactUs from './page/ContactUs'
import HomePage from './page/HomePage';


function App() {
 
  const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/about-us',
    element:<AboutUs/>
  },
  {
    path:'/contact-us',
    element:<ContactUs/>
  },
  {
    path:'/dogs',
    element:<DogsList/>
  },
  {
    path:'/cats',
    element:<CatsList/>
  },
  {
    path:'/birds',
    element:<BirdsLists/>
  },
  {
    path: '/search/:query',
    element: <AnimalSearch />
  }
])
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
   
  
  )
}

export default App
