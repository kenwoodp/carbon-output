import { Link } from 'react-router-dom'

function Kettle({ getElectricityEstimate }) {
    return (
        <div className="kettle">
            {document.body.classList.remove('black')}
            {document.body.classList.add('lights')}
            <h3>You wake up cold, anxious, miserable and alone.</h3> 
            <h3>The day seems like any other, aside from the fact that a floating number has appeared above you.</h3>
            <h3>I doubt it's anything important though so you should go ahead and make yourself a cup of coffee.</h3>
            <Link to='/microwave' onClick={() => getElectricityEstimate(2.2)}>Turn the kettle on.</Link>
        </div>
    )
}

export default Kettle