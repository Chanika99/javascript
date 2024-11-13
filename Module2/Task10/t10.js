'use strict'

function runVotingProgram() {
    let numberOfCandidates = parseInt(prompt("Enter the number of candidates:"));
    let candidates = [];

    for (let i = 0; i < numberOfCandidates; i++) {
        let name = prompt(`Name for candidate ${i + 1}:`);
        candidates.push({
            name: name,
            votes: 0
        });
    }

    let numberOfVoters = parseInt(prompt("Enter the number of voters:"));

    for (let i = 0; i < numberOfVoters; i++) {
        let vote = prompt(`Voter ${i + 1}, enter the candidate's name you want to vote for (or press Enter for an empty vote):`);

        if (vote === "") {
            console.log(`Voter ${i + 1} cast an empty vote.`);
            continue; // Skip to the next voter
        }

        let candidateFound = false;
        for (let candidate of candidates) {
            if (candidate.name.toLowerCase() === vote.toLowerCase()) { // case-insensitive match
                candidate.votes += 1;
                candidateFound = true;
                break;
            }
        }

        if (!candidateFound) {
            console.log(`Invalid vote: '${vote}' is not a registered candidate.`);
        }
    }

    candidates.sort((a, b) => b.votes - a.votes);

    let winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

    console.log("Results:");
    for (let candidate of candidates) {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    }
}

runVotingProgram();