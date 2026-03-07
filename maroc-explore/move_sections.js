const fs = require('fs');

const jsPath = 'src/app/tours/components/TourTemplate.js';
let jsContent = fs.readFileSync(jsPath, 'utf8');

const startStr = '                            {/* Guest Reviews */}';
const endStr = '                        </div>\n\n                        {/* Right Column - Booking Form Widget */}';
const endStr2 = '                        </div>\r\n\r\n                        {/* Right Column - Booking Form Widget */}';

const startIndex = jsContent.indexOf(startStr);
let endIndex = jsContent.indexOf(endStr);
if (endIndex === -1) endIndex = jsContent.indexOf(endStr2);

if (startIndex !== -1 && endIndex !== -1) {
    const extractedBlock = jsContent.substring(startIndex, endIndex);

    // Remove the extracted block from the main content
    jsContent = jsContent.substring(0, startIndex) + jsContent.substring(endIndex);

    // Now find the insertion point at the bottom of the page
    const insertPointMarker = '            </div>\n        </div>\n    );\n}';
    const insertPointMarker2 = '            </div>\r\n        </div>\r\n    );\r\n}';

    let insertPoint = jsContent.indexOf(insertPointMarker);
    if (insertPoint === -1) insertPoint = jsContent.indexOf(insertPointMarker2);

    if (insertPoint !== -1) {
        const insertionBlock = `\n            {/* Full-Width Bottom Sections */}\n            <div className={styles.bottomSectionsWrapper}>\n                <div className={styles.bottomSectionsContainer}>\n${extractedBlock}                </div>\n            </div>\n`;
        jsContent = jsContent.substring(0, insertPoint) + insertionBlock + jsContent.substring(insertPoint);
        fs.writeFileSync(jsPath, jsContent, 'utf8');
        console.log("Successfully moved the sections in TourTemplate.js");
    } else {
        console.log("Could not find insertion point.");
    }
} else {
    console.log("Could not find markers. Start:", startIndex, "End:", endIndex);
}
