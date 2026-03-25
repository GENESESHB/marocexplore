const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'lib', 'toursActivitiesLibFr.js');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = {
    // Categories
    '"category": "desert"': '"category": "Désert"',
    '"category": "city"': '"category": "Ville"',
    '"category": "mountains"': '"category": "Montagnes"',
    '"category": "beach"': '"category": "Plage"',

    // Durations
    '"duration": "3 Days"': '"duration": "3 Jours"',
    '"duration": "1 Day"': '"duration": "1 Jour"',
    '"duration": "2 Days"': '"duration": "2 Jours"',
    '"duration": "3 Hours"': '"duration": "3 Heures"',
    '"duration": "4 Hours"': '"duration": "4 Heures"',
    '"duration": "Evening"': '"duration": "Soirée"',

    // Availability
    '"availability": "Daily"': '"availability": "Tous les jours"',
    '"availability": "Every Monday, Wednesday, Friday"': '"availability": "Lundi, Mercredi, Vendredi"',
    '"availability": "Private - Daily"': '"availability": "Privé - Tous les jours"',
    '"availability": "Daily: 10AM or 4PM"': '"availability": "Tous les jours : 10h ou 16h"',
    '"availability": "Daily at 10:00 AM"': '"availability": "Tous les jours à 10h00"',
    '"availability": "Seasonal / On request"': '"availability": "Saisonnier / Sur demande"',

    // Departure Times
    '"departureTime": "08:00 AM"': '"departureTime": "08h00"',
    '"departureTime": "09:00 AM"': '"departureTime": "09h00"',
    '"departureTime": "08:30 AM"': '"departureTime": "08h30"',
    '"departureTime": "Flexible"': '"departureTime": "Flexible"',
    '"departureTime": "10:00 AM"': '"departureTime": "10h00"',
    '"departureTime": "07:00 PM"': '"departureTime": "19h00"',

    // Departure/Return Points
    '"departurePoint": "Jemaa el-Fnaa / Hotel Pickup"': '"departurePoint": "Jemaa el-Fnaa / Prise en charge à l\'hôtel"',
    '"returnPoint": "Marrakech Center"': '"returnPoint": "Centre de Marrakech"',
    '"departurePoint": "Koutoubia Mosque Main Entrance"': '"departurePoint": "Entrée Principale de la Mosquée Koutoubia"',
    '"returnPoint": "Jemaa el-Fnaa"': '"returnPoint": "Jemaa el-Fnaa"',
    '"departurePoint": "Hotel Pickup in Marrakech"': '"departurePoint": "Prise en charge à l\'hôtel à Marrakech"',
    '"returnPoint": "Hotel in Marrakech"': '"returnPoint": "Hôtel à Marrakech"',
    '"departurePoint": "Your Hotel in Casablanca"': '"departurePoint": "Votre Hôtel à Casablanca"',
    '"returnPoint": "Your Hotel in Casablanca"': '"returnPoint": "Votre Hôtel à Casablanca"',

    // Times inside itineraries
    '"time": "09:00"': '"time": "09h00"',
    '"time": "10:30"': '"time": "10h30"',
    '"time": "12:00"': '"time": "12h00"',
    '"time": "14:30"': '"time": "14h30"',
    '"time": "16:30"': '"time": "16h30"',
    '"time": "10:00 AM"': '"time": "10h00"',
    '"time": "10:30 AM"': '"time": "10h30"',
    '"time": "11:00 AM"': '"time": "11h00"',
    '"time": "12:30 PM"': '"time": "12h30"',
    '"time": "01:00 PM"': '"time": "13h00"',
    '"time": "07:00 PM"': '"time": "19h00"',
    '"time": "08:00 PM"': '"time": "20h00"',
    '"time": "09:30 PM"': '"time": "21h30"',
    '"time": "11:00 PM"': '"time": "23h00"',
    '"time": "10:00"': '"time": "10h00"',
    '"time": "11:00"': '"time": "11h00"',
    '"time": "13:00"': '"time": "13h00"',
    '"time": "15:00"': '"time": "15h00"',
    '"time": "11:30"': '"time": "11h30"',

    // Review Experiences
    '"experience": "Solo Traveler"': '"experience": "Voyageur Solo"',
    '"experience": "Couple Trip"': '"experience": "Voyage en Couple"',
    '"experience": "Group of Friends"': '"experience": "Groupe d\'Amis"',
    '"experience": "Family Vacation"': '"experience": "Vacances en Famille"',

    // Day texts
    '"day": 1': '"day": 1',
    '"day": 2': '"day": 2',
    '"day": 3': '"day": 3'
};

for (const [eng, fr] of Object.entries(replacements)) {
    content = content.replaceAll(eng, fr);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Translated remaining strings in toursActivitiesLibFr.js");
