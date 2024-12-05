import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                 /**Todos as rotas aqui */
                 {/* <Route path='/' element={<Home />} /> */}
                 {/* <Route path='/carrinho' element={<Carrinho />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}