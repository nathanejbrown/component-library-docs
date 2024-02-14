import { useState } from 'react'
import { Nav } from 'component-library'
import './Home.css'
import ComponentDetail from '../ComponentDetail/ComponentDetail'
import { useLocation } from 'react-router'
import ComponentDetailConfig from '../../config/component-detail-config'

function Home() {
  let location = useLocation();

  let pathname = location.pathname.slice(1);

  let componentDetails = ComponentDetailConfig[pathname].description

  let navItems = [
    'First',
    'Second',
    'Third'
  ]

  console.log('href', window.location.href)

  return (
    <div className='home-container'>
      <Nav items={navItems}></Nav>
      <ComponentDetail details={componentDetails} />
    </div>
  )
}

export default Home