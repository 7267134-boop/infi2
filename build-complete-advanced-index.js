const fs = require('fs');

console.log('Loading advanced tiers data...');
const t1_2 = require('./advanced_tiers1_2.js');
const t3_4 = require('./advanced_tiers3_4.js');
const t5_6 = require('./advanced_tiers5_6.js');
const t7_8 = require('./advanced_tiers7_8.js');
const t9_10 = require('./advanced_tiers9_10.js');

const allIntegrals = [...t1_2, ...t3_4, ...t5_6, ...t7_8, ...t9_10];
console.log('Total integrals loaded:', allIntegrals.length);

console.log('Reading background image...');
const imgB64 = fs.readFileSync('Gemini_Generated_Image_rn3115rn3115rn31.jpg').toString('base64');
console.log('Image encoded successfully. Length:', imgB64.length);

const units = [
    {
        num: '1', title: 'אינטגרל לא אמיתי', shortTitle: 'אינטגרל לא אמיתי', url: '2_20475_1.html',
        ring1: '#38bdf8', ring2: '#818cf8', ring3: '#0ea5e9', glowColor: 'rgba(56, 189, 248, 0.5)', textColor: '#0284c7',
        orbitSpeed1: '4.2s', orbitSpeed2: '6.5s', animFloat: 'organic-droplet-1',
        summary: 'אינטגרלים מוכללים מסוג ראשון (תחום אינסופי) וסוג שני (סינגולריות), מבחני השוואה ישיר וגבולי, מבחן אבל ומבחן דיריכלה.'
    },
    {
        num: '2', title: 'סדרות פונקציות', shortTitle: 'סדרות פונקציות', url: '2_20475_2.html',
        ring1: '#818cf8', ring2: '#a78bfa', ring3: '#6366f1', glowColor: 'rgba(99, 102, 241, 0.5)', textColor: '#4338ca',
        orbitSpeed1: '4.8s', orbitSpeed2: '7s', animFloat: 'organic-droplet-2',
        summary: 'התכנסות נקודתית מול התכנסות במידה שווה (במ"ש), מבחן הסופרמום Mn, שמירה על רציפות, אינטגרציה וגזירות.'
    },
    {
        num: '3', title: 'טורי פונקציות', shortTitle: 'טורי פונקציות', url: '2_20475_3.html',
        ring1: '#34d399', ring2: '#6ee7b7', ring3: '#10b981', glowColor: 'rgba(16, 185, 129, 0.5)', textColor: '#047857',
        orbitSpeed1: '4s', orbitSpeed2: '6.2s', animFloat: 'organic-droplet-3',
        summary: 'טורי פונקציות, מבחן M של ויירשטראס, טורי חזקות, רדיוס ותחום התכנסות R, גזירה ואינטגרציה איבר-איבר.'
    },
    {
        num: '4', title: 'המרחב האוקלידי', shortTitle: 'המרחב האוקלידי', url: '2_20475_4.html',
        ring1: '#c084fc', ring2: '#d8b4fe', ring3: '#a855f7', glowColor: 'rgba(168, 85, 247, 0.5)', textColor: '#7e22ce',
        orbitSpeed1: '4.5s', orbitSpeed2: '6.8s', animFloat: 'organic-droplet-1',
        summary: 'מבנה Rn, נורמה, מכפלה פנימית, טופולוגיה של קבוצות פתוחות וסגורות, סדרות וקומפקטיות (היינה-בורל).'
    },
    {
        num: '5', title: 'גבולות ורציפות', shortTitle: 'גבולות ורציפות', url: '2_20475_5.html',
        ring1: '#fb7185', ring2: '#fda4af', ring3: '#f43f5e', glowColor: 'rgba(244, 114, 182, 0.5)', textColor: '#be185d',
        orbitSpeed1: '4.6s', orbitSpeed2: '6.4s', animFloat: 'organic-droplet-2',
        summary: 'פונקציות בכמה משתנים, גבולות כפולים, שלילת גבול ע"י מסלולים, קואורדינטות פולריות, ורציפות ב-Rn.'
    },
    {
        num: '6', title: 'נגזרות חלקיות', shortTitle: 'נגזרות חלקיות', url: '2_20475_6.html',
        ring1: '#f59e0b', ring2: '#fde68a', ring3: '#fbbf24', glowColor: 'rgba(245, 158, 11, 0.5)', textColor: '#b45309',
        orbitSpeed1: '4.3s', orbitSpeed2: '6.3s', animFloat: 'organic-droplet-3',
        summary: 'נגזרות חלקיות, דיפרנציאביליות, מישור משיק, כלל השרשרת הרב-ממדי, גרדיאנט, נגזרת כיוונית והסיאן.'
    },
    {
        num: '7', title: 'פונקציות סתומות', shortTitle: 'פונקציות סתומות', url: '2_20475_7.html',
        ring1: '#f87171', ring2: '#fca5a5', ring3: '#ef4444', glowColor: 'rgba(239, 68, 68, 0.5)', textColor: '#be123c',
        orbitSpeed1: '4.7s', orbitSpeed2: '7.2s', animFloat: 'organic-droplet-1',
        summary: 'משפט הפונקציה הסתומה וחישוב נגזרות, משפט ההעתקה ההפוכה והיעקוביאן, וכופלי לגראנז\' לקיצון מאולץ.'
    }
];

const denomResources = [
    {
        symbol: 'Xm', displaySymbol: 'X<sub>m</sub>', title: 'מאגר בחינות', shortTitle: 'מאגר בחינות', url: 'exams.html',
        ring1: '#818cf8', ring2: '#c7d2fe', ring3: '#4f46e5', glowColor: 'rgba(99, 102, 241, 0.5)', textColor: '#3730a3',
        orbitSpeed1: '4.5s', orbitSpeed2: '6.5s', animFloat: 'organic-droplet-2',
        summary: '97 מבחני עבר רשמיים מלאים עם שאלות אמריקאיות, פתרונות צעד-אחר-צעד, רמזים אינטראקטיביים והסברים מעמיקים.'
    },
    {
        symbol: 'Gm', displaySymbol: 'G<sub>m</sub>', title: 'משחק תרגול', shortTitle: 'משחק תרגול', url: 'game.html',
        ring1: '#34d399', ring2: '#a7f3d0', ring3: '#059669', glowColor: 'rgba(16, 185, 129, 0.5)', textColor: '#065f46',
        orbitSpeed1: '4.2s', orbitSpeed2: '6.8s', animFloat: 'organic-droplet-3',
        summary: 'משחק אתגר הטירוף של אינפי 2: תרגול אינטראקטיבי דינמי, ניקוד חי, שאלות זמן אמת ומעקב התקדמות.'
    },
    {
        symbol: 'Sm', displaySymbol: 'S<sub>m</sub>', title: 'סיכומי עזר', shortTitle: 'סיכומי עזר', url: 'summary.html',
        ring1: '#38bdf8', ring2: '#bae6fd', ring3: '#0284c7', glowColor: 'rgba(56, 189, 248, 0.5)', textColor: '#0369a1',
        orbitSpeed1: '4.6s', orbitSpeed2: '6.2s', animFloat: 'organic-droplet-1',
        summary: 'סיכומי קורס מתומצתים וממוקדים, דפי נוסחאות, משפטים מרכזיים והוכחות קריטיות לבחינה הסופית.'
    }
];

const pencilPlusColors = [
    '#f97316', '#3b82f6', '#10b981', '#a855f7', '#ec4899', '#eab308'
];

function generateUnitsHtml() {
    let html = '';
    units.forEach((u, i) => {
        html += `
            <div class="relative group/orb flex flex-col items-center">
                <a href="${u.url}" 
                   class="glass-orb-btn relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center text-decoration-none shadow-sm transition-all duration-300"
                   style="--ring-c1: ${u.ring1}; --ring-c2: ${u.ring2}; --ring-c3: ${u.ring3}; --glow-color: ${u.glowColor}; animation: ${u.animFloat} 7s ease-in-out infinite;">
                    <div class="orb-sparkle sparkle-1"></div>
                    <div class="orb-sparkle sparkle-2"></div>
                    <div class="orb-sparkle sparkle-3"></div>
                    <span class="font-caveat font-bold text-3xl sm:text-4xl text-slate-900 drop-shadow-sm select-none relative z-10">${u.num}</span>
                </a>
                <span class="text-[11px] sm:text-xs font-bold text-slate-800 mt-2 text-center tracking-tight max-w-[76px] leading-tight select-none">
                    ${u.shortTitle}
                </span>

                <!-- Hover Card Tooltip -->
                <div class="orb-tooltip-card p-3 rounded-2xl">
                    <div class="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/10">
                        <span class="text-xs font-bold text-amber-300">יחידה ${u.num} • ${u.title}</span>
                        <a href="${u.url}" class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600/80 hover:bg-blue-500 text-white transition-colors">
                            מעבר ליחידה
                        </a>
                    </div>
                    <p class="text-[11px] text-slate-200 leading-snug m-0">${u.summary}</p>
                </div>
            </div>
        `;
        if (i < units.length - 1) {
            const pColor = pencilPlusColors[i % pencilPlusColors.length];
            html += `
                <div class="pencil-plus-sign text-base sm:text-lg select-none px-0.5 mb-5" style="color: ${pColor};">
                    +
                </div>
            `;
        }
    });
    return html;
}

function generateDenomHtml() {
    let html = '';
    denomResources.forEach((d, i) => {
        html += `
            <div class="relative group/orb flex flex-col items-center">
                <a href="${d.url}" 
                   class="glass-orb-btn relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center text-decoration-none shadow-sm transition-all duration-300"
                   style="--ring-c1: ${d.ring1}; --ring-c2: ${d.ring2}; --ring-c3: ${d.ring3}; --glow-color: ${d.glowColor}; animation: ${d.animFloat} 7s ease-in-out infinite;">
                    <div class="orb-sparkle sparkle-1"></div>
                    <div class="orb-sparkle sparkle-2"></div>
                    <div class="orb-sparkle sparkle-3"></div>
                    <span class="font-caveat font-bold text-2xl sm:text-3xl text-slate-900 drop-shadow-sm select-none relative z-10">${d.displaySymbol}</span>
                </a>
                <span class="text-[11px] sm:text-xs font-bold text-slate-800 mt-2 text-center tracking-tight select-none">
                    ${d.shortTitle}
                </span>

                <!-- Hover Card Tooltip -->
                <div class="orb-tooltip-card p-3 rounded-2xl">
                    <div class="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/10">
                        <span class="text-xs font-bold text-amber-300">${d.title}</span>
                        <a href="${d.url}" class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600/80 hover:bg-blue-500 text-white transition-colors">
                            כניסה למשאב
                        </a>
                    </div>
                    <p class="text-[11px] text-slate-200 leading-snug m-0">${d.summary}</p>
                </div>
            </div>
        `;
        if (i < denomResources.length - 1) {
            html += `
                <div class="pencil-plus-sign text-base sm:text-lg select-none px-2 mb-5" style="color: #6366f1;">
                    +
                </div>
            `;
        }
    });
    return html;
}

const finalHtml = `<!DOCTYPE html>
<html lang="he" dir="rtl" class="h-full">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="ai-document-summary"
        content="דף הבית והאינדקס האינטראקטיבי של הקורס חשבון אינפיניטסימלי 2 (20475). תיחום עליון לבן מוחלט ומופרד, במת משוואת אינטגרל שקופה עם פס אור תוחם: סמל אינטגרל קלאסי מ-0 עד 100 בכתב יד טבעי, מעגלי זכוכית שקופים התחומים בפס אור פסטלי משתנה עם נקודות אור צהובות ומספרים בכתב יד צבעוני, פלוסים בעפרונות צבעוניים, משאבי העל Xm+Gm+Sm, סיומת כתב יד אדומה = 100, וכפתור עגול צף לקורסים נוספים עם dx מרחף. בלחיצה על האינטגרל או פס החלוקה נפתח מסע 100 אינטגרלים אינטראקטיבי מ-0 עד 100 עם שרטוטי עקומות מדויקים, קדומות, תוצאות מספריות מלאות, שלבי פתרון ושיוך לכל יחידות הקורס ולבחינות.">
    <title>חשבון אינפיניטסימלי 2 (20475) • משוואת האינטגרל של הקורס</title>
    <meta name="description"
        content="אינדקס הקורס חשבון אינפיניטסימלי 2 (20475) באוניברסיטה הפתוחה: סמל אינטגרל קלאסי, במת משוואה שקופה עם פס אור תוחם, מעגלי זכוכית שקופים, מסע 100 אינטגרלים אינטראקטיבי מ-0 עד 100 עם שרטוטי עקומות, מאגר 97 בחינות וסיכום מקיף.">
    <link rel="canonical" href="https://all-the-courses.pages.dev/">

    <!-- Google Fonts: Heebo, Assistant, Rubik, Caveat (Handwritten), Patrick Hand -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700;800&family=Caveat:wght@600;700&family=Heebo:wght@400;500;600;700;800;900&family=Patrick+Hand&family=Rubik:wght@500;700;800&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Font Awesome 6 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- KaTeX CDN for High-Quality Mathematical Notation -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" crossorigin="anonymous"></script>

    <!-- Theme Manager Script for Day / Night / Reading Mode -->
    <script src="theme-manager.js"></script>

    <!-- Tailwind Configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Assistant', 'Heebo', 'Rubik', 'sans-serif'],
                        caveat: ['Caveat', 'cursive'],
                        patrick: ['Patrick Hand', 'cursive']
                    }
                }
            }
        };
    </script>

    <style>
        body {
            font-family: 'Assistant', 'Heebo', sans-serif;
            background-color: #f8fafc;
            color: #0f172a;
        }

        .pen-integral-text {
            font-family: 'Caveat', cursive;
            font-weight: 700;
            color: #1e293b;
        }

        .handwritten-eq-100 {
            font-family: 'Caveat', cursive;
            font-weight: 700;
            color: #dc2626;
            filter: drop-shadow(0 1px 2px rgba(220, 38, 38, 0.25));
        }

        .pencil-underline-red {
            stroke: #dc2626;
            stroke-width: 2.5;
            stroke-linecap: round;
            fill: none;
            filter: drop-shadow(0 1px 1px rgba(220, 38, 38, 0.3));
        }

        .pencil-plus-sign {
            font-family: 'Patrick Hand', 'Caveat', cursive;
            font-weight: 700;
            filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.08));
        }

        .translucent-equation-stage {
            background: rgba(255, 255, 255, 0.50);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border-radius: 2rem;
            position: relative;
            box-shadow: 0 10px 35px -5px rgba(99, 102, 241, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.6);
        }

        .translucent-equation-stage::before {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: calc(2rem + 2px);
            padding: 2px;
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.6), rgba(99, 102, 241, 0.4), rgba(244, 114, 182, 0.5), rgba(251, 191, 36, 0.5));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
        }

        .glass-orb-btn {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            position: relative;
            cursor: pointer;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04), inset 0 0 12px rgba(255, 255, 255, 0.3);
        }

        .glass-orb-btn::before {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: inherit;
            padding: 2px;
            background: conic-gradient(from 0deg, var(--ring-c1), var(--ring-c2), var(--ring-c3), var(--ring-c1));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: ringRotate 6s linear infinite;
        }

        @keyframes ringRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .orb-sparkle {
            position: absolute;
            width: 4.5px;
            height: 4.5px;
            border-radius: 50%;
            background: #fbbf24;
            box-shadow: 0 0 8px #f59e0b, 0 0 12px #fbbf24;
            pointer-events: none;
        }

        .sparkle-1 {
            top: 20%;
            left: 20%;
            animation: orbitSparkle1 4s ease-in-out infinite;
        }

        .sparkle-2 {
            bottom: 22%;
            right: 22%;
            animation: orbitSparkle2 5.5s ease-in-out infinite;
        }

        .sparkle-3 {
            top: 50%;
            right: 18%;
            animation: orbitSparkle3 4.8s ease-in-out infinite;
        }

        @keyframes orbitSparkle1 {
            0%, 100% { transform: translate(0, 0) scale(0.8); opacity: 0.3; }
            50% { transform: translate(14px, 12px) scale(1.3); opacity: 1; }
        }

        @keyframes orbitSparkle2 {
            0%, 100% { transform: translate(0, 0) scale(1.1); opacity: 0.9; }
            50% { transform: translate(-12px, -14px) scale(0.7); opacity: 0.2; }
        }

        @keyframes orbitSparkle3 {
            0%, 100% { transform: translate(0, 0) scale(0.7); opacity: 0.4; }
            50% { transform: translate(-10px, 10px) scale(1.2); opacity: 0.95; }
        }

        @keyframes organic-droplet-1 {
            0%, 100% { border-radius: 52% 48% 51% 49% / 49% 53% 47% 51%; transform: translate(0, 0) rotate(0deg); }
            33% { border-radius: 48% 52% 47% 53% / 53% 47% 52% 48%; transform: translate(2px, -3px) rotate(1.5deg); }
            66% { border-radius: 53% 47% 52% 48% / 48% 52% 49% 51%; transform: translate(-2px, 2px) rotate(-1.5deg); }
        }

        @keyframes organic-droplet-2 {
            0%, 100% { border-radius: 50% 50% 48% 52% / 52% 48% 50% 50%; transform: translate(0, 0) rotate(0deg); }
            33% { border-radius: 52% 48% 53% 47% / 47% 53% 48% 52%; transform: translate(-2px, 3px) rotate(-1.5deg); }
            66% { border-radius: 47% 53% 49% 51% / 51% 49% 53% 47%; transform: translate(2px, -2px) rotate(1.5deg); }
        }

        @keyframes organic-droplet-3 {
            0%, 100% { border-radius: 49% 51% 53% 47% / 48% 52% 51% 49%; transform: translate(0, 0) rotate(0deg); }
            33% { border-radius: 53% 47% 48% 52% / 52% 48% 47% 53%; transform: translate(3px, 2px) rotate(2deg); }
            66% { border-radius: 48% 52% 50% 50% / 50% 50% 52% 48%; transform: translate(-3px, -2px) rotate(-2deg); }
        }

        .soft-pastel-fraction-bar {
            height: 3px;
            background: linear-gradient(90deg, 
                rgba(56, 189, 248, 0.75), 
                rgba(129, 140, 248, 0.75), 
                rgba(52, 211, 153, 0.75), 
                rgba(192, 132, 252, 0.75), 
                rgba(251, 113, 133, 0.75), 
                rgba(245, 158, 11, 0.75), 
                rgba(248, 113, 113, 0.75));
            border-radius: 9999px;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.35);
        }

        .orb-tooltip-card {
            position: absolute;
            bottom: calc(100% + 12px);
            left: 50%;
            transform: translateX(-50%) scale(0.95);
            opacity: 0;
            pointer-events: none;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #fff;
            width: 240px;
            z-index: 50;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
        }

        .group\\/orb:hover .orb-tooltip-card {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(-50%) scale(1);
        }

        .orb-tooltip-card::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 6px;
            border-style: solid;
            border-color: rgba(15, 23, 42, 0.95) transparent transparent transparent;
        }

        .floating-course-switcher-btn {
            position: fixed;
            top: 1.5rem;
            right: 1.5rem;
            z-index: 60;
            width: 76px;
            height: 76px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .floating-course-switcher-btn:hover {
            transform: scale(1.06);
            box-shadow: 0 12px 30px rgba(99, 102, 241, 0.2);
        }

        .floating-course-switcher-btn::before {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: 50%;
            padding: 2px;
            background: conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: ringRotate 5s linear infinite;
        }

        .silver-wave-layer {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            overflow: hidden;
            pointer-events: none;
        }

        .silver-wave-layer::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(60deg, transparent 30%, rgba(255, 255, 255, 0.7) 50%, transparent 70%);
            animation: silverWave 4s infinite linear;
        }

        @keyframes silverWave {
            0% { transform: translateY(-30%) rotate(0deg); }
            100% { transform: translateY(30%) rotate(360deg); }
        }

        .course-switcher-pen-ring {
            position: absolute;
            inset: 3px;
            border-radius: 50%;
            border: 1px dashed rgba(100, 116, 139, 0.35);
            pointer-events: none;
        }

        .floating-inner-symbol {
            position: absolute;
            font-family: 'Caveat', cursive;
            font-weight: 700;
            font-size: 13px;
            color: #4f46e5;
            animation: floatSymbol 3.5s ease-in-out infinite;
        }

        @keyframes floatSymbol {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-3px, -4px) rotate(-8deg); }
        }

        /* SECRET 100 INTEGRALS EXPLORER STYLES */
        #integral-explorer-view {
            animation: explorerFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes explorerFadeIn {
            0% { opacity: 0; transform: scale(0.96) translateY(6px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .explorer-slider-track {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            border-radius: 9999px;
            background: linear-gradient(90deg, #38bdf8, #818cf8, #34d399, #c084fc, #fb7185, #f59e0b, #ef4444);
            outline: none;
            cursor: pointer;
        }

        .explorer-slider-track::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #ffffff;
            border: 2.5px solid #6366f1;
            box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
            cursor: pointer;
            transition: transform 0.15s ease;
        }

        .explorer-slider-track::-webkit-slider-thumb:hover {
            transform: scale(1.2);
        }

        .tier-chip {
            transition: all 0.2s ease;
        }
        .tier-chip:hover {
            transform: translateY(-1px);
        }

        /* KaTeX custom responsive styling */
        .katex-display {
            margin: 0.25em 0 !important;
            overflow-x: auto;
            overflow-y: hidden;
        }
        .katex {
            font-size: 1.1em;
        }
    </style>
</head>

<body class="min-h-full flex flex-col relative selection:bg-indigo-500 selection:text-white">

    <!-- Fixed Base64 Background Wallpaper (Full High Definition Math Motif) -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img src="data:image/jpeg;base64,${imgB64}" 
             alt="מתמטיקה אינפי 2" 
             class="w-full h-full object-cover object-center opacity-85"
             loading="eager">
        <div class="absolute inset-0 bg-white/20"></div>
    </div>

    <!-- Floating Circular "לקורסים נוספים" Button -->
    <a href="https://all-the-courses.pages.dev/" 
       class="floating-course-switcher-btn"
       title="מעבר לפורטל כל הקורסים">
        <div class="silver-wave-layer"></div>
        <div class="course-switcher-pen-ring"></div>
        <div class="floating-inner-symbol top-1.5 right-2">dx</div>
        <div class="relative z-10 flex flex-col items-center justify-center">
            <i class="fa-solid fa-compass text-indigo-600 text-lg mb-0.5"></i>
            <span class="text-[9.5px] font-bold text-slate-800 leading-tight text-center">לקורסים<br>נוספים</span>
        </div>
    </a>

    <!-- Main Content Container -->
    <main class="relative z-10 flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 max-w-7xl mx-auto w-full">

        <!-- ============================================================
             PART 1: PURE WHITE ISOLATED HEADER CONTAINER (תיחום לבן לחלוטין)
             ============================================================ -->
        <header class="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center mb-8 relative z-20">
            
            <!-- Site Info Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50/80 border border-indigo-100/90 text-indigo-700 text-xs font-bold mb-4 shadow-2xs">
                <i class="fa-solid fa-graduation-cap text-indigo-600"></i>
                <span>חשבון אינפיניטסימלי 2 (20475) • האוניברסיטה הפתוחה</span>
            </div>

            <!-- Main Course Title -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                חשבון אינפיניטסימלי 2 <span class="text-indigo-600 text-2xl sm:text-3xl font-bold">(20475)</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed mb-4 font-medium">
                ברוכים הבאים לאתר הקורס חשבון אינפיניטסימלי 2. אתר הכולל לימוד מעמיק, סימולציות אינטראקטיביות, הכנה לבחינה וסיכום מלא.
            </p>

            <!-- Collapsible Guide Accordion (למה צריך אתר לקורס?) -->
            <div class="w-full max-w-xl mx-auto">
                <button type="button" 
                        onclick="toggleGuideAccordion()" 
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer">
                    <span>✨ למה צריך אתר לקורס? לחצו להסבר</span>
                    <i id="guide-chevron" class="fa-solid fa-chevron-down text-xs transition-transform duration-200"></i>
                </button>
                <div id="guide-accordion-content" class="hidden text-right bg-amber-50/70 rounded-2xl p-4 mt-2.5 border border-amber-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-xs">
                    קורס אינפי 2 הוא אחד מקורסי הליבה המאתגרים ביותר בתואר. האתר נבנה במטרה להנגיש את כל החומר התיאורטי עם דגש על אינטואיציה ויזואלית, סימולציות מתמטיות חיות, פירוק מעמיק של מבחני עבר ודפי סיכום ממוקדים להצלחה מקסימלית בבחינה.
                </div>
            </div>

        </header>

        <!-- ============================================================
             PART 2: TRANSLUCENT INTEGRAL EQUATION STAGE (במת משוואת האינטגרל)
             ============================================================ -->
        <section class="w-full max-w-5xl translucent-equation-stage p-6 sm:p-8 md:p-10 mb-12">
            
            <!-- Default Equation View (מצב רגיל של משוואת הקורס) -->
            <div id="course-equation-view" class="w-full flex items-center justify-between gap-2 sm:gap-3">
                
                <!-- 1. LEFT CLASSICAL INTEGRAL COLUMN WITH 0 AND 100 -->
                <div class="integral-column relative h-56 sm:h-64 md:h-72 px-1 flex flex-col justify-between items-center shrink-0 cursor-pointer"
                     onclick="handleIntegralClick(event)"
                     title="לחצו בכל מקום לאורך האינטגרל לחקירת מסע 100 האינטגרלים!">
                    
                    <!-- Upper Bound: 100 -->
                    <div class="relative z-30 self-end pl-0 sm:pl-1">
                        <span class="pen-integral-text text-xl sm:text-2xl font-bold select-none text-slate-800">
                            100
                        </span>
                    </div>

                    <!-- Classical Integral Symbol with Loop Curve -->
                    <div class="relative flex-1 w-7 sm:w-8 md:w-9 flex items-center justify-center my-0.5">
                        <svg viewBox="0 0 40 220" class="w-full h-full overflow-visible select-none drop-shadow-xs">
                            <path d="M 28,15 C 24,6 17,6 15,14 C 13,24 23,45 23,75 L 23,145 C 23,175 13,196 15,206 C 17,214 24,214 28,205" 
                                  fill="none" 
                                  stroke="#1e293b" 
                                  stroke-width="5" 
                                  stroke-linecap="round" 
                                  stroke-linejoin="round" />
                            <circle cx="20" cy="110" r="3.2" fill="#f59e0b" style="filter: drop-shadow(0 0 5px #f59e0b);" />
                        </svg>
                    </div>

                    <!-- Lower Bound: 0 -->
                    <div class="relative z-30 self-start pr-0 sm:pr-1">
                        <span class="pen-integral-text text-xl sm:text-2xl font-bold select-none text-slate-800">
                            0
                        </span>
                    </div>

                </div>

                <!-- 2. CENTER FRACTION: NUMERATOR (UNITS) / DENOMINATOR (RESOURCES) -->
                <div class="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 min-w-0">
                    
                    <!-- NUMERATOR: 7 Core Units -->
                    <div class="w-full flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 flex-wrap sm:flex-nowrap">
                        ${generateUnitsHtml()}
                    </div>

                    <!-- FRACTION BAR: Pastel Gradient Glow Line -->
                    <div class="w-full my-4 sm:my-5 relative px-1 cursor-pointer"
                         onclick="handleFractionBarClick(event)"
                         title="לחצו בכל נקודה לאורך הפס לפתיחת שלב תואם במסע 100 האינטגרלים!">
                        <div class="soft-pastel-fraction-bar w-full"></div>
                        <div class="absolute inset-0 hover:bg-indigo-400/20 rounded-full transition-colors"></div>
                    </div>

                    <!-- DENOMINATOR: 3 Master Resources (Xm + Gm + Sm) -->
                    <div class="w-full flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap sm:flex-nowrap">
                        ${generateDenomHtml()}
                    </div>

                </div>

                <!-- 3. RIGHT HANDWRITTEN EQUATION TERMINATOR: dx = 100 -->
                <div class="flex items-center gap-2 sm:gap-2.5 shrink-0 self-center pl-1 sm:pl-3">
                    <span class="pen-integral-text italic text-2xl sm:text-3xl text-slate-800 select-none">
                        dx
                    </span>
                    <span class="font-caveat font-bold text-2xl sm:text-3xl text-rose-600 select-none">
                        =
                    </span>
                    <div class="relative flex flex-col items-center select-none">
                        <span class="handwritten-eq-100 text-3xl sm:text-4xl md:text-5xl leading-none">
                            100
                        </span>
                        <svg viewBox="0 0 70 12" class="w-14 sm:w-16 md:w-18 h-2.5 sm:h-3 overflow-visible mt-0.5">
                            <path d="M 2,3 Q 35,1 68,4" class="pencil-underline-red" />
                            <path d="M 6,8 Q 35,6 64,9" class="pencil-underline-red" />
                        </svg>
                    </div>
                </div>

            </div>

            <!-- ============================================================
                 PART 3: THE SECRET 100 INTEGRALS EXPLORER (במת חקירת 100 האינטגרלים)
                 Initially hidden; revealed on clicking the integral or fraction bar!
                 ============================================================ -->
            <div id="integral-explorer-view" class="hidden relative z-30 w-full flex flex-col items-center text-slate-800 direction-rtl">
                
                <!-- Top Navigation Bar & Tier Indicator -->
                <div class="w-full flex items-center justify-between pb-3 mb-3 border-b border-indigo-200/50">
                    <div class="flex items-center gap-2.5 flex-wrap">
                        <span id="exp-tier-badge" class="px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-xs">
                            Tier 1: יסודות וקדומות
                        </span>
                        <span id="exp-level-badge" class="font-caveat font-bold text-xl sm:text-2xl text-indigo-950">
                            שלב 1 / 100
                        </span>
                    </div>

                    <!-- Close Button: Return to Course Equation -->
                    <button onclick="closeIntegralExplorer()" 
                            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-indigo-600 border border-slate-200 text-xs font-bold shadow-xs transition-all cursor-pointer">
                        <span>חזרה למשוואת הקורס</span>
                        <span class="text-sm">✕</span>
                    </button>
                </div>

                <!-- 0 to 100 Interactive Scrubber Track -->
                <div class="w-full mb-4 px-1 flex flex-col gap-1.5">
                    <div class="flex items-center justify-between text-[11px] font-bold text-slate-600 px-1">
                        <span class="cursor-pointer hover:text-indigo-600" onclick="setExplorerLevel(1)">1 • יסודות</span>
                        <span class="cursor-pointer hover:text-indigo-600" onclick="setExplorerLevel(31)">31 • סדרות</span>
                        <span class="cursor-pointer hover:text-indigo-600" onclick="setExplorerLevel(51)">51 • טורים</span>
                        <span class="cursor-pointer hover:text-indigo-600" onclick="setExplorerLevel(71)">71 • לייבניץ</span>
                        <span class="cursor-pointer hover:text-rose-600 font-extrabold" onclick="setExplorerLevel(100)">100 • מבחן שיא 🎯</span>
                    </div>
                    <input id="exp-slider" type="range" min="1" max="100" value="1" 
                           class="explorer-slider-track"
                           oninput="setExplorerLevel(parseInt(this.value))">
                </div>

                <!-- Main Dynamic Card: Curve Diagram & Pedagogical Solution Steps -->
                <div class="w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mb-4">
                    
                    <!-- Right Column: Visual Math Card with Curve Plot (ציור הפונקציה המתמטית המדויקת) -->
                    <div class="md:col-span-5 bg-white/75 backdrop-blur-md rounded-2xl p-4 border border-white/90 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="text-[11px] font-bold text-slate-500 mb-1">פונקציה ואינטגרל מסוים:</div>
                            <div id="exp-func-title" class="text-lg sm:text-xl text-indigo-950 mb-1.5 font-bold" dir="ltr">
                                <!-- KaTeX Rendered Function -->
                            </div>
                            <div id="exp-integral-expr" class="text-xl sm:text-2xl text-slate-900 mb-2 font-bold" dir="ltr">
                                <!-- KaTeX Rendered Integral -->
                            </div>
                            <div class="bg-rose-50/90 rounded-xl p-3 border border-rose-100/90 mb-3 shadow-2xs">
                                <div class="text-[11px] font-bold text-rose-800 mb-1 flex items-center justify-between">
                                    <span>תוצאה סופית מספרית / התכנסות:</span>
                                    <i class="fa-solid fa-circle-check text-rose-500 text-xs"></i>
                                </div>
                                <div id="exp-antideriv" class="text-xl sm:text-2xl font-black text-rose-600" dir="ltr">
                                    <!-- KaTeX Rendered Final Value -->
                                </div>
                            </div>
                        </div>

                        <!-- Mathematical Function Curve Plot Container -->
                        <div class="bg-slate-50/80 rounded-xl p-2 border border-slate-100 flex items-center justify-center shadow-inner">
                            <div id="exp-curve-container" class="w-full"></div>
                        </div>
                    </div>

                    <!-- Left Column: Step-by-Step Derivation & Unit Curriculum Association -->
                    <div class="md:col-span-7 bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/90 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100">
                                <h4 id="exp-integral-name" class="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-1.5">
                                    <i class="fa-solid fa-pen-nib text-indigo-500 text-xs"></i>
                                    <span>אינטגרל פולינומי מסוים</span>
                                </h4>
                                <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                                    צעדי פתרון מלאים
                                </span>
                            </div>

                            <!-- Step-by-Step Solution List -->
                            <div id="exp-steps-list" class="space-y-2 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                                <!-- Dynamic Steps Inserted Here with KaTeX -->
                            </div>
                        </div>

                        <!-- Curriculum Connection & Link Button -->
                        <div class="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                            <div>
                                <div class="text-[10.5px] font-bold text-slate-500">שיוך מתמטי לתוכנית הקורס:</div>
                                <div id="exp-unit-ref" class="text-xs font-bold text-indigo-900">
                                    יחידה 1 • אינטגרל לא אמיתי
                                </div>
                                <div id="exp-theorem-ref" class="text-[11px] text-slate-600 line-clamp-1">
                                    המשפט היסודי של החשבון האינפיניטסימלי
                                </div>
                            </div>

                            <a id="exp-unit-btn" href="2_20475_1.html" 
                               class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md transition-all shrink-0 no-underline cursor-pointer">
                                <span>מעבר ליחידה</span>
                                <i class="fa-solid fa-arrow-left text-[10px]"></i>
                            </a>
                        </div>

                    </div>

                </div>

                <!-- Bottom Quick Jump Toolbar (10 Tiers & Controls) -->
                <div class="w-full flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/50">
                    <div class="flex items-center gap-1.5">
                        <button onclick="prevExplorerLevel()" class="px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-2xs cursor-pointer">
                            ← קודם
                        </button>
                        <button onclick="randomExplorerLevel()" class="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 shadow-2xs cursor-pointer">
                            🎲 אקראי
                        </button>
                        <button onclick="nextExplorerLevel()" class="px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-2xs cursor-pointer">
                            הבא →
                        </button>
                    </div>

                    <!-- 10 Milestone Tier Buttons -->
                    <div class="flex items-center gap-1 flex-wrap">
                        <button onclick="setExplorerLevel(1)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-sky-100 text-sky-800 hover:bg-sky-200 cursor-pointer">Tier 1</button>
                        <button onclick="setExplorerLevel(11)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer">Tier 2</button>
                        <button onclick="setExplorerLevel(21)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer">Tier 3</button>
                        <button onclick="setExplorerLevel(31)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 hover:bg-emerald-200 cursor-pointer">Tier 4</button>
                        <button onclick="setExplorerLevel(41)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-teal-100 text-teal-800 hover:bg-teal-200 cursor-pointer">Tier 5</button>
                        <button onclick="setExplorerLevel(51)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer">Tier 6</button>
                        <button onclick="setExplorerLevel(61)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-pink-100 text-pink-800 hover:bg-pink-200 cursor-pointer">Tier 7</button>
                        <button onclick="setExplorerLevel(71)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 hover:bg-amber-200 cursor-pointer">Tier 8</button>
                        <button onclick="setExplorerLevel(81)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-orange-100 text-orange-800 hover:bg-orange-200 cursor-pointer">Tier 9</button>
                        <button onclick="setExplorerLevel(91)" class="tier-chip px-2 py-1 rounded-md text-[10px] font-bold bg-rose-100 text-rose-800 hover:bg-rose-200 cursor-pointer">Tier 10 🎯</button>
                    </div>
                </div>

            </div>

        </section>

    </main>

    <!-- Professional Footer (Matched exactly to Linear Algebra 1 & Infi 1 standards) -->
    <footer class="relative z-10 w-full bg-white/80 backdrop-blur-md border-t border-slate-200/60 py-6 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-600">
                    חשבון אינפיניטסימלי 2 (20475) • האוניברסיטה הפתוחה
                </span>
            </div>

            <!-- Social / Contact Links -->
            <div class="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/roei-vaknin/" target="_blank" rel="noopener noreferrer"
                   class="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-xs font-semibold">
                    <i class="fa-brands fa-linkedin text-sm"></i>
                    <span>LinkedIn</span>
                </a>
                <span class="text-slate-300">•</span>
                <a href="https://wa.me/972545558908" target="_blank" rel="noopener noreferrer"
                   class="text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-1.5 text-xs font-semibold">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    <span>WhatsApp</span>
                </a>
            </div>

        </div>
    </footer>

    <!-- Client-Side Logic & 100 Integrals Dataset -->
    <script>
        const INTEGRALS_DATA = ${JSON.stringify(allIntegrals)};
        let currentExplorerLevel = 1;

        const tierColors = {
            1: "bg-sky-600",
            2: "bg-indigo-600",
            3: "bg-indigo-500",
            4: "bg-emerald-600",
            5: "bg-teal-600",
            6: "bg-purple-600",
            7: "bg-pink-600",
            8: "bg-amber-600",
            9: "bg-orange-600",
            10: "bg-rose-600"
        };

        // Safe KaTeX Helper Functions
        function renderLatexToHtml(latexStr, displayMode) {
            if (!latexStr) return '';
            if (window.katex && typeof window.katex.renderToString === 'function') {
                try {
                    return window.katex.renderToString(latexStr, {
                        displayMode: !!displayMode,
                        throwOnError: false
                    });
                } catch (e) {
                    return latexStr;
                }
            }
            return latexStr;
        }

        function renderMathInElementSafe(targetEl) {
            const el = targetEl || document.body;
            if (window.renderMathInElement) {
                try {
                    window.renderMathInElement(el, {
                        delimiters: [
                            {left: '$$', right: '$$', display: true},
                            {left: '$', right: '$', display: false},
                            {left: '\\(', right: '\\)', display: false},
                            {left: '\\[', right: '\\]', display: true}
                        ],
                        throwOnError: false
                    });
                } catch (e) {}
            } else {
                setTimeout(() => renderMathInElementSafe(el), 100);
            }
        }

        function openIntegralExplorer(level = 1) {
            currentExplorerLevel = Math.max(1, Math.min(100, level));
            const eqView = document.getElementById('course-equation-view');
            const expView = document.getElementById('integral-explorer-view');
            if (eqView && expView) {
                eqView.classList.add('hidden');
                expView.classList.remove('hidden');
                renderExplorerCard(currentExplorerLevel);
            }
        }

        function closeIntegralExplorer() {
            const eqView = document.getElementById('course-equation-view');
            const expView = document.getElementById('integral-explorer-view');
            if (eqView && expView) {
                expView.classList.add('hidden');
                eqView.classList.remove('hidden');
            }
        }

        function setExplorerLevel(level) {
            currentExplorerLevel = Math.max(1, Math.min(100, level));
            renderExplorerCard(currentExplorerLevel);
        }

        function nextExplorerLevel() {
            setExplorerLevel(currentExplorerLevel < 100 ? currentExplorerLevel + 1 : 1);
        }

        function prevExplorerLevel() {
            setExplorerLevel(currentExplorerLevel > 1 ? currentExplorerLevel - 1 : 100);
        }

        function randomExplorerLevel() {
            const rnd = Math.floor(Math.random() * 100) + 1;
            setExplorerLevel(rnd);
        }

        function renderExplorerCard(level) {
            const item = INTEGRALS_DATA.find(d => d.id === level) || INTEGRALS_DATA[0];
            
            // Update slider
            const slider = document.getElementById('exp-slider');
            if (slider) slider.value = item.id;

            // Badges
            const tierBadge = document.getElementById('exp-tier-badge');
            if (tierBadge) {
                tierBadge.className = "px-3 py-1 rounded-full text-xs font-bold text-white shadow-xs " + (tierColors[item.tier] || "bg-indigo-600");
                tierBadge.innerText = "Tier " + item.tier + ": " + item.tierName;
            }

            const levelBadge = document.getElementById('exp-level-badge');
            if (levelBadge) {
                levelBadge.innerText = "שלב " + item.id + " / 100";
            }

            // Integral Name
            const nameEl = document.getElementById('exp-integral-name');
            if (nameEl) nameEl.innerHTML = '<i class="fa-solid fa-pen-nib text-indigo-500 text-xs"></i><span>' + item.name + '</span>';

            // Mathematical Expressions with KaTeX
            const funcEl = document.getElementById('exp-func-title');
            if (funcEl) funcEl.innerHTML = renderLatexToHtml(item.func, false);

            const intEl = document.getElementById('exp-integral-expr');
            if (intEl) intEl.innerHTML = renderLatexToHtml(item.integral, true);

            const antiEl = document.getElementById('exp-antideriv');
            if (antiEl) antiEl.innerHTML = renderLatexToHtml(item.antiderivative, true);

            // True Mathematical Function Curve Drawing
            const curveContainer = document.getElementById('exp-curve-container');
            if (curveContainer) {
                curveContainer.innerHTML = \`
                    <svg viewBox="0 0 110 90" class="w-full h-32 sm:h-40 overflow-visible select-none">
                        <defs>
                            <linearGradient id="curve-stroke-\${item.id}" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#0284c7" />
                                <stop offset="50%" stop-color="#6366f1" />
                                <stop offset="100%" stop-color="#ec4899" />
                            </linearGradient>
                            <linearGradient id="curve-area-\${item.id}" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.45" />
                                <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05" />
                            </linearGradient>
                        </defs>
                        <line x1="12" y1="78" x2="102" y2="78" stroke="#cbd5e1" stroke-width="1.2" stroke-linecap="round" />
                        <line x1="18" y1="12" x2="18" y2="82" stroke="#cbd5e1" stroke-width="1.2" stroke-linecap="round" />
                        <text x="100" y="85" font-size="6" fill="#64748b" font-family="'Assistant', sans-serif">x</text>
                        <text x="12" y="15" font-size="6" fill="#64748b" font-family="'Assistant', sans-serif">y</text>
                        <path d="\${item.areaD}" fill="url(#curve-area-\${item.id})" />
                        <path d="\${item.pathD}" fill="none" stroke="url(#curve-stroke-\${item.id})" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.3));" />
                        <circle cx="58" cy="46" r="2.8" fill="#fbbf24" stroke="#ffffff" stroke-width="1" style="filter: drop-shadow(0 0 4px #f59e0b);" />
                    </svg>
                \`;
            }

            // Steps with KaTeX Math Rendering
            const stepsList = document.getElementById('exp-steps-list');
            if (stepsList) {
                stepsList.innerHTML = item.steps.map((s, idx) => \`
                    <div class="flex items-start gap-2 bg-white/70 backdrop-blur-xs rounded-xl p-2.5 border border-slate-100 shadow-2xs">
                        <span class="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            \${idx + 1}
                        </span>
                        <div class="text-slate-800 font-medium leading-relaxed w-full">
                            \${s}
                        </div>
                    </div>
                \`).join('');

                renderMathInElementSafe(stepsList);
            }

            // Unit reference & button
            const unitRef = document.getElementById('exp-unit-ref');
            if (unitRef) unitRef.innerText = item.unit + " • " + item.unitName;

            const thRef = document.getElementById('exp-theorem-ref');
            if (thRef) thRef.innerText = item.theorem;

            const unitBtn = document.getElementById('exp-unit-btn');
            if (unitBtn) {
                unitBtn.href = item.unitUrl;
                unitBtn.innerHTML = '<span>מעבר ל' + item.unit + '</span><i class="fa-solid fa-arrow-left text-[10px]"></i>';
            }

            // Auto-retry rendering if KaTeX arrives slightly after DOM click
            if (!window.katex || !window.renderMathInElement) {
                setTimeout(() => {
                    if (window.katex && window.renderMathInElement) {
                        renderExplorerCard(currentExplorerLevel);
                    }
                }, 120);
            }
        }

        // Click Handler for the Integral column (maps vertical position to level 1–100)
        function handleIntegralClick(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const clickY = event.clientY - rect.top;
            const pct = 1 - Math.max(0, Math.min(1, clickY / rect.height));
            const targetLevel = Math.max(1, Math.min(100, Math.round(pct * 99) + 1));
            openIntegralExplorer(targetLevel);
        }

        // Click Handler for the fraction bar (maps horizontal position to level 1–100)
        function handleFractionBarClick(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const pct = Math.max(0, Math.min(1, clickX / rect.width));
            const targetLevel = Math.max(1, Math.min(100, Math.round(pct * 99) + 1));
            openIntegralExplorer(targetLevel);
        }

        // Keyboard navigation (Escape to close, Left/Right arrows for prev/next)
        document.addEventListener('keydown', (e) => {
            const expView = document.getElementById('integral-explorer-view');
            if (expView && !expView.classList.contains('hidden')) {
                if (e.key === 'Escape') closeIntegralExplorer();
                if (e.key === 'ArrowRight') prevExplorerLevel();
                if (e.key === 'ArrowLeft') nextExplorerLevel();
            }
        });

        function toggleGuideAccordion() {
            const content = document.getElementById('guide-accordion-content');
            const chevron = document.getElementById('guide-chevron');
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                if (chevron) chevron.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                if (chevron) chevron.style.transform = 'rotate(0deg)';
            }
        }

        // Window load listener to ensure KaTeX renders if active
        window.addEventListener('load', () => {
            if (window.lucide) lucide.createIcons();
            const expView = document.getElementById('integral-explorer-view');
            if (expView && !expView.classList.contains('hidden')) {
                renderExplorerCard(currentExplorerLevel);
            }
        });
    </script>

</body>
</html>
`;

fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('Successfully written index.html with ADVANCED 100 Integrals Explorer! File size:', (fs.statSync('index.html').size / 1024 / 1024).toFixed(2), 'MB');
