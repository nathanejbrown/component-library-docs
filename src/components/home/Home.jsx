import { Nav } from 'component-library'
import './Home.css'
import ComponentDetail from '../ComponentDetail/ComponentDetail'
import { useLocation, useParams } from 'react-router'
import ComponentDetailConfig from '../../config/component-detail-config'
import { useNavigate, Outlet } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const handleNavClick = (path) => navigate(path);
  let location = useLocation();

  let {component} = useParams();

  console.log('comp', component)

  let pathname = location.pathname.slice(1);

  let componentDetails = pathname ? ComponentDetailConfig[pathname] : '';

  let navItems = [
    'Button',
    'Card'
  ]

  console.log('details', componentDetails)

  return (
    <div className='home-container'>
      <Nav items={navItems} onClick={handleNavClick}></Nav>
      <ComponentDetail details={componentDetails}>
        {/* <Outlet /> */}
      </ComponentDetail>
    </div>
  )
}

export default Home