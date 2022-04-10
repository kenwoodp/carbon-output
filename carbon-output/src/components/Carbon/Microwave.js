import { Link } from 'react-router-dom'

function Microwave ({ getElectricityEstimate }) {
    return (
        <div className="microwave">
            <h3>The sound of the kettle firing up causes adrenaline to begin coursing through your veins. You feel a sudden urge to begin multi-tasking in the hopes that you might make the 6:38am train today.</h3>
            <h3>You fish a porridge sachet out of your pantry and combine it with milk before you throw it into the microwave, bon appetit.</h3>
            <Link to='/heater' onClick={() => getElectricityEstimate(1.1)}>Turn the microwave on.</Link>
        </div>
    )
}

export default Microwave