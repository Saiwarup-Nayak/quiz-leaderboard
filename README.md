##This project polls a quiz API multiple times, handles duplicate responses, and generates a correct leaderboard based on total participant scores.

#Overview
The API may return the same event data across different polls. To ensure accurate results, each event is processed only once using a unique key based on roundId and participant.

#Tech Stack#
Node.js
Axios

#How it Works
Calls the API 10 times with a 5-second delay between requests
Collects all event data
Removes duplicate entries using (roundId + participant)
Aggregates scores per participant
Sorts and generates the final leaderboard
Submits the result to the API

#Run the Project
npm install
node index.js

#Notes
Exactly 10 polls are required
Duplicate events must be ignored
Leaderboard is sorted in descending order of total score
Submission is done only once
