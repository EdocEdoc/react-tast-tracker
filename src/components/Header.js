import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
//get location using useLocation
// use components only on the location specified (route)

// destructor object props using {}
const Header = ({ title, onAdd, buttonState }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {   location.pathname === '/' &&
                <Button color={!buttonState ? 'green' : 'red'} text={!buttonState ? 'Add' : 'Close'} onClick={onAdd}/>
            }
        </header>
    )
}

// default value for props
Header.defaultProps = {
    title: 'Task Tracker',
}

// Type of props (parameter)
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
