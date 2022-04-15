import "./widget.scss"
import { KeyboardArrowUp, PersonOutline } from '@mui/icons-material'
const Widget = () => {
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">21312</span>
        <span className="link">See all user</span>
      </div>
      <div className="right">
          <div className="percentage">
            <KeyboardArrowUp/> 20%
          </div>
          <PersonOutline className="icon"/>
      </div>
    </div>

  )
}

export default Widget