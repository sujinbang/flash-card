const fs = require('fs');

const content = fs.readFileSync('/Users/sjbang/Study/flash-card/templates/src/data/adp-subject4.ts', 'utf8');
const match = content.match(/export const ADP_SUBJECT4_QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);

if (match) {
    const arr = new Function(`return ${match[1]}`)();
    const map = new Map();
    let duplicates = 0;
    
    for (const q of arr) {
        const normQ = q.question.replace(/\s+/g, '').trim();
        if (map.has(normQ)) {
            duplicates++;
            console.log(`Duplicate found: ${q.id} and ${map.get(normQ).id}`);
            console.log(`Answer 1: ${map.get(normQ).answer}, Answer 2: ${q.answer}`);
        } else {
            map.set(normQ, q);
        }
    }
    console.log(`Total duplicates: ${duplicates}`);
} else {
    console.log("Could not parse array");
}
