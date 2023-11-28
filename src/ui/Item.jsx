/* eslint-disable react/prop-types */
import { MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

function Item({ icon, to, title, setActive, active }) {
  return (
    <MenuItem
      icon={icon}
      component={<Link to={to} />}
      onClick={() => setActive(title)}
      active={title === active}
    >
      {title}
    </MenuItem>
  )
}

export default Item
