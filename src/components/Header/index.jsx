import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { BrandWrapper, Container } from './style'
import mainBrand from '../../assets/icons/pixer-logo.svg';

export const Header = () => {
  return (
    <Container>
        <header id='main-header' className='d-flex align-items-center'>
            <BrandWrapper>
                <a href="#"><img src={mainBrand} alt="main-brand" /></a>
            </BrandWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path='#' element={<h1>Hero</h1>}/>
                    <Route path='#about' element={<h1>About</h1>}/>
                    <Route path='#services' element={<h1>Services</h1>}/>
                    <Route path='#contact' element={<h1>Contact</h1>}/>
                </Routes>

                <NavLink to={'#'}>Home</NavLink>
                <NavLink to={'#about'}>About</NavLink>
                <NavLink to={'#services'}>Services</NavLink>
                <NavLink to={'#contact'}>Contact</NavLink>
            </BrowserRouter>
        </header>
    </Container>
  )
}
