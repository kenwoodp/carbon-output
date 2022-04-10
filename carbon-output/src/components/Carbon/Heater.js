import { Link } from 'react-router-dom'

function Heater({ getElectricityEstimate }) {
    return (
        <div className="heater">
            <h3>Boy it's cold this morning.</h3>
            <h3>Bet you wish that number would go away...</h3>
            <Link to='/work' onClick={() => getElectricityEstimate(5)}>Turn the heater on.</Link>
        </div>
    )
}

export default Heater