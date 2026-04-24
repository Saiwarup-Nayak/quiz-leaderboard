**Quiz Leaderboard Aggregator**

This project implements a backend solution to process quiz event data from an external API, handle duplicate responses, and generate an accurate leaderboard.

**Description**

The application polls the provided API 10 times, collects event data, removes duplicate entries based on a unique identifier (roundId and participant), aggregates scores for each participant, and generates a sorted leaderboard. The final result is then submitted to the API for validation.

**Tech Stack**<br>
Node.js<br>
Axios

**Execution**<br>
npm install<br>
node index.js

**Key Logic**<br>
Deduplication is performed using a combination of roundId and participant<br>
Each unique event is processed only once<br>
Scores are aggregated per participant<br>
Leaderboard is sorted in descending order of total score

**Requirements Met**<br>
10 API polls executed<br>
Duplicate data handled correctly<br>
Accurate leaderboard generated<br>
Correct total score computed<br>
Single submission performed<br>
