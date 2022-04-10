import { Link } from 'react-router-dom'

function Computer({ getElectricityEstimate }) {
    return (
        <div className="computer">
            <h2>This is what it's all for isn't it.</h2>
            <h2>Time to rev up the computer and churn out some sweet, sweet emails.</h2>
            <h2>Did we leave the heater running?</h2>
            <Link to='/flight' onClick={() => getElectricityEstimate(0.3)}>Turn on your computer.</Link>
        </div>
    )
}

export default Computer