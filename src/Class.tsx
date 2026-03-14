import { DotsThree, Pencil } from 'phosphor-react'
import SideBar from './Components/SideBar'
import TopBar from './Components/TopBar'

const Class = () => {
  return (
    <div>
      <SideBar selected="Home"></SideBar>
      <TopBar></TopBar>

      <div className='Main'>
        <div className='Row-Between'>
          <h1>Ms. Cook 5-34</h1>
          <button className='No-BG-Button'><DotsThree weight='bold' size={20}></DotsThree></button>
        </div><br></br><br></br>

        <div className='Center'>
          <button style={{ width: "80%" }}><Pencil weight='bold' size={25}></Pencil> New Announcement</button>
        </div>
      </div>
    </div>
  )
}

export default Class
