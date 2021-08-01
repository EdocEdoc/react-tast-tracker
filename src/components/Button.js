import PropTypes from 'prop-types'


const Button = ({color, text, onClick, className, marginBottom }) => {
    return (
        <button onClick={onClick} className={`btn ${className}`} style={{ backgroundColor: color, marginBottom: marginBottom }}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Button',
    className: '',
    marginBottom: 0,
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button
