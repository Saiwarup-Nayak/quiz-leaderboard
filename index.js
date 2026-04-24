const axios = require("axios");

const BASE_URL = "https://devapigw.vidalhealthtpa.com/srm-quiz-task";
const REG_NO = "RA2311056010158"; // 


const uniqueEvents = new Set();

const scores = {};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchData() {
    for (let i = 0; i < 10; i++) {
        try {
            console.log(`Polling ${i}...`);

            const response = await axios.get(`${BASE_URL}/quiz/messages`, {
                params: {
                    regNo: REG_NO,
                    poll: i
                }
            });

            const events = response.data.events;

            events.forEach(event => {
                const key = `${event.roundId}-${event.participant}`;

                if (!uniqueEvents.has(key)) {
                    uniqueEvents.add(key);

                    if (!scores[event.participant]) {
                        scores[event.participant] = 0;
                    }

                    scores[event.participant] += event.score;
                }
            });

            if (i < 9) {
                await sleep(5000);
            }

        } catch (error) {
            console.error("Error:", error.message);
        }
    }
}

function generateLeaderboard() {
    const leaderboard = Object.keys(scores).map(participant => ({
        participant,
        totalScore: scores[participant]
    }));

    leaderboard.sort((a, b) => b.totalScore - a.totalScore);

    return leaderboard;
}

async function submitLeaderboard(leaderboard) {
    try {
        const response = await axios.post(`${BASE_URL}/quiz/submit`, {
            regNo: REG_NO,
            leaderboard
        });

        console.log("\nSubmission Response:");
        console.log(response.data);

    } catch (error) {
        console.error("Submission Error:", error.message);
    }
}

async function main() {
    await fetchData();

    const leaderboard = generateLeaderboard();

    console.log("\nFinal Leaderboard:");
    console.log(leaderboard);

    const totalScore = leaderboard.reduce((sum, p) => sum + p.totalScore, 0);

    console.log("\nTotal Score:", totalScore);

    await submitLeaderboard(leaderboard);
}

main();