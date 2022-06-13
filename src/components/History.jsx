

function History(props){
    if (props.allClicks.length === 0){
        return(
            <div>the app is used by pressing the button</div>
        )
    }
    return(
        <div>the app history is: {props.allClicks.join(' ')}</div>
    )
}

export default History