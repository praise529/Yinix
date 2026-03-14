import SideBar from './Components/SideBar'
import TopBar from './Components/TopBar'

const Class = () => {
  return (
    <div>
      <SideBar selected="Home"></SideBar>
      <TopBar></TopBar>

      <div className='Main'>
        <h1>Main</h1>
      </div>
    </div>
  )
}

export default Class
