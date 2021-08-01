import {Link} from 'react-router-dom'

// link are use instead od a tag for the page not to reload

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
