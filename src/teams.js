export const printWinningTeams = (teams)=>{
   let winners = teams.filter(team=> team.result === 'win');
    console.log(winners);
}

