import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                 /**Todos as rotas aqui */
                 <Route path='/' element={<Home />} />
                 <Route path='/cart' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}