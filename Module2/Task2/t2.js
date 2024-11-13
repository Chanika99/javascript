'use strict';

function getNumberOfParticipants() {
    const input = prompt("Enter the number of participants:");
    const numParticipants = parseInt(input);

    if (isNaN(numParticipants) || numParticipants <= 0) {
        alert("Please enter a valid positive number for participants.");
        return null;
    }

    return numParticipants;
}

function getParticipantNames(numParticipants) {
    const participants = [];

    for (let i = 0; i < numParticipants; i++) {
        const name = prompt(`Enter the name of participant ${i + 1}:`);

        if (name.trim() === "") {
            alert("Name cannot be empty.");
            i--;
        } else {
            participants.push(name.trim());
        }
    }

    return participants;
}

function displayParticipants(participants) {
    participants.sort();

    const listElement = document.getElementById("participantList");

    listElement.innerHTML = "";


    for (const participant of participants) {
        const listItem = document.createElement("li");
        listItem.textContent = participant;
        listElement.appendChild(listItem);
    }
}

function main() {
    const numParticipants = getNumberOfParticipants();

    if (numParticipants !== null) {
        const participants = getParticipantNames(numParticipants);
        displayParticipants(participants);
    }
}

window.onload = main;