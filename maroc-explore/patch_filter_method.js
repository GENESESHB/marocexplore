const fs = require('fs');
const path = require('path');

const libFrPath = path.join(__dirname, 'src', 'app', 'lib', 'toursActivitiesLibFr.js');
let content = fs.readFileSync(libFrPath, 'utf8');

const functionToAdd = `
export const getFilteredToursFr = (filters) => {
        const { destination, duration, activity, category, q } = filters;

        return toursActivitiesLibFr.filter(tour => {
                const matchesSearch = !q ||
                        tour.title.toLowerCase().includes(q.toLowerCase()) ||
                        tour.location.toLowerCase().includes(q.toLowerCase()) ||
                        tour.description.toLowerCase().includes(q.toLowerCase());

                const matchesCategory = !category || category === 'all' || tour.category === category || tour.category.toLowerCase() === category.toLowerCase();
                const matchesDuration = !duration || tour.durationDays === parseInt(duration);
                const matchesDestination = !destination || tour.location.toLowerCase() === destination.toLowerCase();
                const matchesActivity = !activity || tour.activity === activity;

                return matchesSearch && matchesCategory && matchesDuration && matchesDestination && matchesActivity;
        });
};
`;

if (!content.includes('getFilteredToursFr')) {
    fs.appendFileSync(libFrPath, '\n' + functionToAdd, 'utf8');
    console.log("Successfully appended getFilteredToursFr to toursActivitiesLibFr.js");
} else {
    console.log("getFilteredToursFr already exists.");
}

