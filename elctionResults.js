function electionWinner(votes) {
    const vObj = {};
    for(let v of votes){
        vObj[v] = (vObj[v] || 0) + 1;
    }

    let winners = [];
    let maxVotes = 0;

    for(let name in vObj){
        if(vObj[name] > maxVotes){
            maxVotes = vObj[name];
            winners = [name];
        }
        else if (vObj[name] === maxVotes){
            winners.push(name);
        }
    }

    if(winners.length === 1){
        return winners[0];
    }
    winners.sort();
    return winners[winners.length - 1];
}
