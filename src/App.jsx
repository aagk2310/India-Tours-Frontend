import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Login from './Components/Login';
import TourDetails from './Pages/TourDetails';
import DashBoard from './Pages/DashBoard';
import SignUp from './Components/SignUp';
import BookingsPage from './Pages/BookingsPage';
import CartItemsGrid from './Components/CartItemsGrid';
import Footer from './Components/Footer';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/tours/:id' element={<TourDetails />} />
            <Route path='/signup' element={<SignUp />} />

            <Route path='/dashboard' element={<DashBoard />}>
              <Route path='bookings' element={<BookingsPage />} />
              <Route path='cart' element={<CartItemsGrid />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
