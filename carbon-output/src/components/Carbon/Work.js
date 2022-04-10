import { Link } from 'react-router-dom'

function Drive({ getVehicleEstimate, setDistance }) {
    return (
        <div className="drive">
            <form>
                <h3>Where does the time go.</h3> 
                <h3>No way we're making that train.</h3>
                <h3>Oh well, we can listen to some whale songs on the drive in to distract you from the ominous ticker above your head.</h3>
                <h3>How long was the drive to work again?</h3>
                <p>
                    <label htmlFor="">Distance to work: </label><input type="text" onChange={event => setDistance(event.target.value)}/>
                </p>
                <Link to='/computer' onClick={() => getVehicleEstimate()}>Drive to work.</Link>
            </form>
        </div>
    )
}

export default Drive