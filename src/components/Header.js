import PropTypes from 'prop-types'
import Button from './Button'

// destructor object props using {}
const Header = ({ title, onAdd, buttonState }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={!buttonState ? 'green' : 'red'} text={!buttonState ? 'Add' : 'Close'} onClick={onAdd}/>
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
