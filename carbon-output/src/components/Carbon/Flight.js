import { Link } from 'react-router-dom'

function Flight({ getFlightEstimate }) {
    return (
        <div className="flight">
            <h3>The 10:30am wanderlust has inevitably set in and you're wishing you were literally anywhere but here.</h3>
            <h3>Maybe the width of the Pacific Ocean is far enough away.</h3>
            <h3>Hopefully you'll remember to turn off the heater before you go.</h3>
            <Link to='/sfo' onClick={() => getFlightEstimate()}>Fly to San Francisco</Link>
        </div>
    )
}

export default Flight