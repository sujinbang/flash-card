const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../templates/src/data');

function readFile(filename) {
    const filePath = path.join(dataDir, filename);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Clean up TypeScript specific parts
    content = content.replace(/import\s+.*?from\s+['"].*?['"];?/gs, '');
    content = content.replace(/export\s+const\s+\w+\s*(:\s*[^=]+)?\s*=\s*/g, '');
    
    // Some files might have trailing semicolons
    content = content.trim();
    if (content.endsWith(';')) {
        content = content.slice(0, -1);
    }
    
    try {
        return eval('(' + content + ')');
    } catch (e) {
        console.error(`Error parsing ${filename}:`, e.message);
        console.log("Snippet:", content.substring(0, 100));
        return null;
    }
}

const mainData = readFile('adp-subject4.ts');
const ch4 = readFile('adp-subject4-ch4.ts');
const ch5 = readFile('adp-subject4-ch5.ts');
const ch6 = readFile('adp-subject4-ch6.ts');

if (!mainData || !ch4 || !ch5 || !ch6) {
    console.error("Failed to read all files");
    process.exit(1);
}

// Merge them
const allItems = [...mainData, ...ch4, ...ch5, ...ch6];

// Group by question
const mapByQuestion = new Map();

for (const item of allItems) {
    const qStr = item.question.trim();
    if (!mapByQuestion.has(qStr)) {
        mapByQuestion.set(qStr, item);
    } else {
        const existing = mapByQuestion.get(qStr);
        // Replace if existing answer is empty and new answer is not empty
        const existingHasAnswer = existing.answer !== undefined && existing.answer !== null && existing.answer.trim() !== '';
        const newHasAnswer = item.answer !== undefined && item.answer !== null && item.answer.trim() !== '';
        
        if (!existingHasAnswer && newHasAnswer) {
            mapByQuestion.set(qStr, item);
        } else if (existingHasAnswer && newHasAnswer) {
            // If both have answers, could take the newer one or keep existing
            // Let's keep existing, but you can also overwrite.
        }
    }
}

const finalItems = Array.from(mapByQuestion.values());

const outputStr = `import { Question } from '../types';\n\nexport const ADP_SUBJECT4_QUESTIONS: Question[] = ${JSON.stringify(finalItems, null, 2)};\n`;

fs.writeFileSync(path.join(dataDir, 'adp-subject4.ts'), outputStr, 'utf-8');
console.log(`Merged! Original main had ${mainData.length} items. Total files sum: ${allItems.length}. Final output has ${finalItems.length} items.`);
