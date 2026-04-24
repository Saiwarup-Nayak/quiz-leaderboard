**Quiz Leaderboard Aggregator**

This project implements a backend solution to process quiz event data from an external API, handle duplicate responses, and generate an accurate leaderboard.

**Description**

The application polls the provided API 10 times, collects event data, removes duplicate entries based on a unique identifier (roundId and participant), aggregates scores for each participant, and generates a sorted leaderboard. The final result is then submitted to the API for validation.

**Tech Stack**
Node.js
Axios

**Execution**
npm install
node index.js

**Key Logic**
Deduplication is performed using a combination of roundId and participant
Each unique event is processed only once
Scores are aggregated per participant
Leaderboard is sorted in descending order of total score

**Requirements Met**
10 API polls executed
Duplicate data handled correctly
Accurate leaderboard generated
Correct total score computed
Single submission performed
