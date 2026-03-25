const fs = require('fs');
const content = fs.readFileSync('src/app/lib/toursActivitiesLibFr.js', 'utf8');

const regex = /"activity":\s*"(.*?)"/g;
let match;
const activities = new Set();

while ((match = regex.exec(content)) !== null) {
    if (match[1] && !match[1].match(/^[A-Z][a-z]+$/)) { // Ignore very simple words if any
        activities.add(match[1]);
    }
}

fs.writeFileSync('activities.json', JSON.stringify(Array.from(activities), null, 2), 'utf8');
console.log(`Extracted ${activities.size} unique activities.`);
