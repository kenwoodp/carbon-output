import { Link } from 'react-router-dom'

function Sfo({ reset }) {
    return (
        <div className="sfo">
            <div>
                <Link to='/' onClick={reset}>Reset.</Link>
            </div>
        </div>
    )
}

export default Sfo