import { Link } from 'react-router-dom'

function Lamp({ getElectricityEstimate }) {
    return (
        <div className="landing">
            <div className="lamp">
                {document.body.classList.remove('lights')}
                {document.body.classList.add('black')}
                <Link to='/kettle' onClick={() => getElectricityEstimate(0.01)}>Turn the lamp on.</Link>
            </div>
            <div className="alarmClock">
                <p>6: 00<span className='am'>am</span></p> 
            </div>
        </div>
    )
}

export default Lamp