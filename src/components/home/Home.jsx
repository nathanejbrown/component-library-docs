import { Nav } from 'component-library'
import './Home.css'
import ComponentDetail from '../ComponentDetail/ComponentDetail'
import { useLocation } from 'react-router'
import ComponentDetailConfig from '../../config/component-detail-config'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const handleNavClick = (path) => navigate(path);
  let location = useLocation();

  let pathname = location.pathname.slice(1);

  let componentDetails = pathname ? ComponentDetailConfig[pathname].description : '';

  let navItems = [
    'Button',
    'Card'
  ]

  return (
    <div className='home-container'>
      <Nav items={navItems} onClick={handleNavClick}></Nav>
      <ComponentDetail details={componentDetails} />
    </div>
  )
}

export default Home