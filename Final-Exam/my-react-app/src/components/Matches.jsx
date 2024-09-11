import React, { useState, useEffect } from 'react';

const fetchTeams = async () => {
    try {
        const response = await fetch('../src/assets/teams.csv');
        if (!response.ok) {
            throw new Error(`Network response issue: ${response.statusText}`);
        }
        const text = await response.text();
        return parseTeamsCSV(text);
    } catch (error) {
        console.error('Error fetching teams data:', error);
        return {};
    }
};

const parseTeamsCSV = (text) => {
    const lines = text.trim().split('\n');
    const [...dataLines] = lines;
    return dataLines.reduce((acc, line) => {
        const [ID, Name] = line.split(',').slice(0, 2);
        acc[ID] = Name;
        return acc;
    }, {});
};

export default function Matches() {
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState({});
    const [error, setError] = useState(null);
    const [expandedMatch, setExpandedMatch] = useState(null);
    const [expandedTeam, setExpandedTeam] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamNames = await fetchTeams();
                setTeams(teamNames);

                const response = await fetch('../src/assets/matches.csv');
                if (!response.ok) {
                    throw new Error(`Network response issue: ${response.statusText}`);
                }
                const text = await response.text();
                parseCSV(text);
            } catch (error) {
                console.error('Error loading data:', error);
                setError('Failed to load data');
            }
        };

        fetchData();
    }, []);

    const parseCSV = (text) => {
        const lines = text.trim().split('\n');
        const result = lines.slice(1).map(line => {
            const [ID, ATeamID, BTeamID, Date, Score] = line.split(',');
            return { ID, ATeamID, BTeamID, Date, Score };
        }).filter(match => match.ID);

        setMatches(result);
    };

    const toggleExpand = (matchID) => {
        setExpandedMatch((prev) => (prev === matchID ? null : matchID));
        setExpandedTeam(team);
    };

    return (
        <>
            <section className="matches">
                <div className="heading">
                    <h2 id="matches">Matches</h2>
                </div>

                <div className="rounds">
                    {matches.length > 0 ? (
                        matches.map((match) => (
                            <div key={match.ID}>
                                <div className="match-card">
                                    {/* Clickable area on each team */}
                                    <div className="team" onClick={() => toggleExpand(match.ID)}>
                                        <div>
                                            <h2>{teams[match.ATeamID] || match.ATeamID}</h2>
                                        </div>
                                        <div>
                                            <img src={`/matches/flags/${match.ATeamID}.png`} alt={`team-${match.ATeamID}`} />
                                        </div>
                                    </div>

                                    <div className="result">
                                        <div>
                                            <h2>{match.Score}</h2>
                                        </div>
                                    </div>

                                    <div className="team2" onClick={() => toggleExpand(match.ID)}>
                                        <div>
                                            <img src={`/matches/flags/${match.BTeamID}.png`} alt={`team-${match.BTeamID}`} />
                                        </div>
                                        <div>
                                            <h2>{teams[match.BTeamID] || match.BTeamID}</h2>
                                        </div>
                                    </div>
                                </div>

                                {/* Collapsible content, displayed outside the match-card */}
                                {expandedMatch === match.ID && (
                                    <div className="extra-info">
                                        <img style={{
                                            // marginLeft: expandedTeam === 'teamB' ? '0' : 'auto'
                                            }} src="/matches/pitch-bg.svg" />
                                        {/* <p>Date: {match.Date}</p> */}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>0 matches found</p>
                    )}
                </div>
            </section>
        </>
    );
}



// import React, { useState, useEffect } from 'react';

// const parseCSV = (text) => {
//     const lines = text.trim().split('\n');
//     const headers = lines[0].split(',');
//     return lines.slice(1).map(line => {
//         const values = line.split(',');
//         return headers.reduce((acc, header, i) => {
//             acc[header] = values[i];
//             return acc;
//         }, {});
//     });
// };

// const fetchTeams = async () => {
//     try {
//         const response = await fetch('../src/assets/teams.csv');
//         if (!response.ok) {
//             throw new Error(`Network response issue: ${response.statusText}`);
//         }
//         const text = await response.text();
//         return parseTeamsCSV(text);
//     } catch (error) {
//         console.error('Error fetching teams data:', error);
//         return {};
//     }
// };

// const parseTeamsCSV = (text) => {
//     const lines = text.trim().split('\n');
//     const headers = lines[0].split(',');
//     return lines.slice(1).reduce((acc, line) => {
//         const values = line.split(',');
//         const [ID, Name] = values;
//         acc[ID] = Name;
//         return acc;
//     }, {});
// };

// const fetchPlayers = async () => {
//     try {
//         const response = await fetch('../src/assets/players.csv');
//         if (!response.ok) {
//             throw new Error(`Network response issue: ${response.statusText}`);
//         }
//         const text = await response.text();
//         return parseCSV(text);
//     } catch (error) {
//         console.error('Error fetching players data:', error);
//         return [];
//     }
// };

// export default function Matches() {
//     const [matches, setMatches] = useState([]);
//     const [teams, setTeams] = useState({});
//     const [players, setPlayers] = useState([]);
//     const [error, setError] = useState(null);
//     const [expandedMatch, setExpandedMatch] = useState(null);
//     const [expandedTeam, setExpandedTeam] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const teamNames = await fetchTeams();
//                 setTeams(teamNames);

//                 const playerData = await fetchPlayers();
//                 setPlayers(playerData);

//                 const response = await fetch('../src/assets/matches.csv');
//                 if (!response.ok) {
//                     throw new Error(`Network response issue: ${response.statusText}`);
//                 }
//                 const text = await response.text();
//                 const matchData = parseCSV(text);
//                 setMatches(matchData);
//             } catch (error) {
//                 console.error('Error loading data:', error);
//                 setError('Failed to load data');
//             }
//         };

//         fetchData();
//     }, []);

//     const toggleExpand = (matchID, teamID) => {
//         setExpandedMatch((prev) => (prev === matchID ? null : matchID));
//         setExpandedTeam(teamID);
//     };

//     const getPlayersByTeam = (teamID) => {
//         return players.filter(player => player.TeamID === teamID);
//     };

//     return (
//         <>
//             <section className="matches">
//                 <div className="heading">
//                     <h2 id="matches">Matches</h2>
//                 </div>

//                 <div className="rounds">
//                     {matches.length > 0 ? (
//                         matches.map((match) => (
//                             <div key={match.ID}>
//                                 <div className="match-card">
//                                     <div className="team" onClick={() => toggleExpand(match.ID, match.ATeamID)}>
//                                         <div>
//                                             <h2>{teams[match.ATeamID] || match.ATeamID}</h2>
//                                         </div>
//                                         <div>
//                                             <img src={`/matches/flags/${match.ATeamID}.png`} alt={`team-${match.ATeamID}`} />
//                                         </div>
//                                     </div>

//                                     <div className="result">
//                                         <div>
//                                             <h2>{match.Score}</h2>
//                                         </div>
//                                     </div>

//                                     <div className="team2" onClick={() => toggleExpand(match.ID, match.BTeamID)}>
//                                         <div>
//                                             <img src={`/matches/flags/${match.BTeamID}.png`} alt={`team-${match.BTeamID}`} />
//                                         </div>
//                                         <div>
//                                             <h2>{teams[match.BTeamID] || match.BTeamID}</h2>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {expandedMatch === match.ID && (
//                                     <div className="extra-info">
//                                         <img
//                                             // style={{
//                                             //     marginLeft: expandedTeam === match.BTeamID ? 'auto' : '0',
//                                             //     marginRight: expandedTeam === match.ATeamID ? 'auto' : '0'
//                                             // }}
//                                             src="/matches/pitch-bg.svg"
//                                             alt="Pitch"
//                                         />

//                                         <div>
//                                             <h3>Players for {teams[expandedTeam]}</h3>
//                                             {getPlayersByTeam(expandedTeam).length > 0 ? (
//                                                 <ul>
//                                                     {getPlayersByTeam(expandedTeam).map(player => (
//                                                         <li key={player.ID}>
//                                                             {player.FullName} - {player.Position}
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             ) : (
//                                                 <p>No players found</p>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))
//                     ) : (
//                         <p>0 matches found</p>
//                     )}
//                 </div>
//             </section>
//         </>
//     );
// }
