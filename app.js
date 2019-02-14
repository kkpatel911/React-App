const Header = () => {
    return (
        <header>
            <h1>Score Board</h1>
            <span className="stats"> Players: 1</span>
        </header>
    )
}

const Player = () => {
    return (
        <div className='player'>
            <span className="player-name">
                Kishan
            </span>


        </div>
    )
}
const Counter = () => {
    <div className='counter'>
        <button className='counter-action decrement'> - </button>
        <span className='counter-score'> 20 </span>
        <button className='counter-action increment'> + </button>
    </div>
}

ReactDOM.render(
    <Player />,
    document.getElementById('root')
)
