function Home({ carbonCounter, calculateCarbonOutput }) {
    return (
        <div className="Home">
            <div className="carbonTicker">
                <span>{carbonCounter}</span>
            </div>
            <div className="addCarbonOutput">
                
                <div className="lamp">
                    <h2>Turn the lamp on</h2>
                    <button onClick={() => calculateCarbonOutput(2)}>ON</button>
                </div>

            </div>
        </div>
    )

    // return (
    //     <div className="Home">
    //         <div className="carbonTicker">
    //             <span>{counter}</span>
    //         </div>
    //         <div className="time">
    //             <span>{time}</span>
    //         </div>
    //         <div className="addCarbonOutput">
                
    //             <h2>Turn the kettle on</h2>
    //             <form onSubmit={calculateCarbonOutput}>
    //                 <label htmlFor="">Duration (hr): </label>
    //                 <input type="text" name="duration"/>
    //                 <button type="submit">Add</button>
    //             </form>
                
    //         </div>
    //     </div>
    // )
}

export default Home