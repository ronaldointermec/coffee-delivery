import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                 <Route path='/' element={<Home />} />
                 <Route path='/cart' element={<Cart />} />
                 <Route path='/order/:orderId/success' element={<Success />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}