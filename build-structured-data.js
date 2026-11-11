const fs = require('fs');

const t1_2 = require('./advanced_tiers1_2.js');
const t3_4 = require('./advanced_tiers3_4.js');
const t5_6 = require('./advanced_tiers5_6.js');
const t7_8 = require('./advanced_tiers7_8.js');
const t9_10 = require('./advanced_tiers9_10.js');

const rawAll = [...t1_2, ...t3_4, ...t5_6, ...t7_8, ...t9_10];

function cleanMath(str) {
    if (!str) return '';
    return str.replace(/\$/g, '').replace(/[\.]$/, '').trim();
}

function refineItem(item) {
    const rawIntro = `נתונה הפונקציה לחקירה וחישוב אינטגרל מסוים: ${item.name}. במסגרת שלב זה נבחן את תחום ההגדרה, רציפות הפונקציה, התנהגותה בקצוות והתאמתה למשפטי הקורס של ${item.unit} (${item.unitName}).`;

    const structuredSteps = item.steps.map((rawStep, idx) => {
        let title = '';
        let desc = '';
        let formula = '';

        // Specific overrides for the 4 non-math strings:
        if (item.id === 15 && idx === 3) {
            return {
                stepNum: 4,
                title: 'תוצאה סופית: התבדרות האינטגרל',
                desc: 'האינטגרנד דועך בקצב איטי שאינו מספיק להתכנסות, והאינטגרל מתבדר לאינסוף.',
                formula: '\\int_0^\\infty \\frac{x}{1+x^2}\\,dx = \\infty \\quad (\\text{מתבדר})'
            };
        }
        if (item.id === 23 && idx === 3) {
            return {
                stepNum: 4,
                title: 'תוצאה סופית: התבדרות בנקודת המפנה',
                desc: 'הערך p=1 מהווה את נקודת המפנה הקלאסית שבה האינטגרל המוכלל מתבדר.',
                formula: '\\int_0^1 \\frac{1}{x}\\,dx = \\infty \\quad (\\text{מתבדר})'
            };
        }
        if (item.id === 28 && idx === 0) {
            return {
                stepNum: 1,
                title: 'זיהוי אינטגרל מעורב מסוג 1 וסוג 2',
                desc: 'האינטגרל כולל נקודת סינגולריות באפס וקרן אינטגרציה אינסופית, ומפוצל לשני תחומי אינטגרציה.',
                formula: '\\int_0^\\infty \\frac{dx}{\\sqrt{x}(1+x)} = \\int_0^1 \\frac{dx}{\\sqrt{x}(1+x)} + \\int_1^\\infty \\frac{dx}{\\sqrt{x}(1+x)}'
            };
        }
        if (item.id === 92 && idx === 3) {
            return {
                stepNum: 4,
                title: 'מסקנת מבחן דיריכלה והתכנסות בתנאי',
                desc: 'כל תנאי משפט דיריכלה מתקיימים במלואם, ולכן האינטגרל של פרנל מתכנס בתנאי.',
                formula: '\\int_1^\\infty \\sin(x^2)\\,dx < \\infty \\quad (\\text{מתכנס בתנאי})'
            };
        }

        if (rawStep.includes(':')) {
            const colonIdx = rawStep.indexOf(':');
            let prefix = rawStep.substring(0, colonIdx).trim();
            let suffix = rawStep.substring(colonIdx + 1).trim();

            const mathMatches = suffix.match(/\$([^\$]+)\$/g);
            if (mathMatches && mathMatches.length > 0) {
                formula = mathMatches.map(m => cleanMath(m)).join(' \\quad ');
                let cleanSuffix = suffix.replace(/\$([^\$]+)\$/g, '').trim();
                cleanSuffix = cleanSuffix.replace(/^[-–—:,.\s]+|[-–—:,.\s]+$/g, '').trim();
                desc = cleanSuffix;
            } else {
                formula = cleanMath(suffix);
            }

            let cleanPrefix = prefix.replace(/\$([^\$]+)\$/g, '').trim();
            cleanPrefix = cleanPrefix.replace(/[-–—:,.\s]+$/g, '').trim();
            title = cleanPrefix;

            const prefixMath = prefix.match(/\$([^\$]+)\$/);
            if (prefixMath && (!title || title.endsWith('של') || title.endsWith('ב-') || title.length < 4)) {
                title = (title ? title + ' ' : '') + 'הפונקציה והאינטגרנד';
            }
        } else {
            const mathMatches = rawStep.match(/\$([^\$]+)\$/g);
            if (mathMatches && mathMatches.length > 0) {
                formula = mathMatches.map(m => cleanMath(m)).join(' \\quad ');
                let cleanSentence = rawStep.replace(/\$([^\$]+)\$/g, '').trim();
                desc = cleanSentence.replace(/\s+/g, ' ').trim();
            } else {
                formula = cleanMath(item.func);
                desc = rawStep;
            }
        }

        // Standardize & clean title
        if (!title || title.length < 3 || title.startsWith('שלב') || title.startsWith('צעד')) {
            if (idx === 0) title = 'בדיקת רציפות והגדרת האינטגרנד';
            else if (idx === item.steps.length - 1) title = 'תוצאה סופית מספרית';
            else if (idx === 1) title = 'מציאת הפונקציה הקדומה ופישוט';
            else if (idx === 2) title = 'הצבת גבולות ושימוש במשפט';
            else title = `צעד חישוב ${idx + 1}`;
        }

        title = title.replace(/\s*(?:של|ב-|ב|ל-|עם)\s*$/, '').trim();

        if (!desc || desc.length < 6) {
            if (idx === 0) {
                desc = 'בודקים את תחום ההגדרה, רציפות הפונקציה ותנאי האינטגרביליות לפי משפטי הקורס לקראת ביצוע האינטגרציה.';
            } else if (idx === item.steps.length - 1) {
                desc = 'מציבים את ערכי הגבול ומבצעים פישוט אלגברי עד לקבלת התוצאה המספרית הסופית.';
            } else if (idx === 1) {
                desc = 'מזהים את המבנה המתמטי ומוצאים את הפונקציה הקדומה, או מבצעים פיתוח מתאים בהתאם למשפטי היחידה.';
            } else {
                desc = 'מבצעים את פעולות החשבון האינפיניטסימלי והמעבר האלגברי הדרוש לשלב זה.';
            }
        } else {
            desc = desc.replace(/^[-–—:.,\s]+|[-–—:.,\s]+$/g, '').trim();
            if (!desc.endsWith('.')) desc += '.';
        }

        formula = cleanMath(formula);
        // In case there is still stray Hebrew inside formula, wrap with \text
        if (/[\u0590-\u05FF]/.test(formula)) {
            formula = `\\text{${formula}}`;
        }

        return {
            stepNum: idx + 1,
            title,
            desc,
            formula
        };
    });

    return {
        id: item.id,
        tier: item.tier,
        tierName: item.tierName,
        name: item.name,
        func: item.func,
        integral: item.integral,
        antiderivative: item.antiderivative,
        unit: item.unit,
        unitName: item.unitName,
        unitUrl: item.unitUrl,
        theorem: item.theorem,
        rawIntro,
        finalSummary: `חישוב האינטגרל הושלם בהצלחה מלאה! התוצאה הסופית מתקבלת מתוך ${item.theorem}.`,
        structuredSteps,
        pathD: item.pathD,
        areaD: item.areaD
    };
}

const refinedAll = rawAll.map(refineItem);

fs.writeFileSync('structured-100-integrals.json', JSON.stringify(refinedAll, null, 2), 'utf8');
console.log('Successfully refined all 100 integrals! Zero Hebrew in raw math formulas!');
