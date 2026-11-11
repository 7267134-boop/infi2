const fs = require('fs');

console.log('Loading refined 100 integrals data...');
const integralsData = JSON.parse(fs.readFileSync('structured-100-integrals.json', 'utf8'));
console.log('Total integrals loaded:', integralsData.length);

console.log('Reading background image...');
const imgB64 = fs.readFileSync('Gemini_Generated_Image_rn3115rn3115rn31.jpg').toString('base64');
console.log('Image encoded successfully. Length:', imgB64.length);

const units = [
    {
        num: '1', title: 'אינטגרל לא אמיתי', shortTitle: 'אינטגרל לא אמיתי', url: '2_20475_1.html',
        ring1: '#38bdf8', ring2: '#818cf8', ring3: '#0ea5e9', glowColor: 'rgba(56, 189, 248, 0.5)', textColor: '#0284c7',
        orbitSpeed1: '4.2s', orbitSpeed2: '6.5s', animFloat: 'organic-droplet-1',
        simpleDesc: 'אינטגרלים של פונקציות בקטעים אינסופיים או עם נקודות סינגולריות. נלמד מתי השטח מתחת לעקומה נשאר סופי, איך משווים לפונקציות פשוטות, ומבחני התכנסות מרכזיים (השוואה ישירה וגבולית, מבחן אבל ומבחן דיריכלה).'
    },
    {
        num: '2', title: 'סדרות פונקציות', shortTitle: 'סדרות פונקציות', url: '2_20475_2.html',
        ring1: '#818cf8', ring2: '#a78bfa', ring3: '#6366f1', glowColor: 'rgba(99, 102, 241, 0.5)', textColor: '#4338ca',
        orbitSpeed1: '4.8s', orbitSpeed2: '7s', animFloat: 'organic-droplet-2',
        simpleDesc: 'איך מתנהגת סדרה של פונקציות כאשר האינדקס n שואף לאינסוף. נבדיל בין התכנסות נקודתית להתכנסות אחידה (במידה שווה - במ"ש), נשתמש במבחן הסופרמום Mn, ונבדוק מתי מותר להחליף סדר גבול ואינטגרל או נגזרת.'
    },
    {
        num: '3', title: 'טורי פונקציות', shortTitle: 'טורי פונקציות', url: '2_20475_3.html',
        ring1: '#34d399', ring2: '#6ee7b7', ring3: '#10b981', glowColor: 'rgba(16, 185, 129, 0.5)', textColor: '#047857',
        orbitSpeed1: '4s', orbitSpeed2: '6.2s', animFloat: 'organic-droplet-3',
        summary: 'סכום אינסופי של פונקציות. נלמד את מבחן ה-M של ויירשטראס להתכנסות במ"ש, נחקור טורי חזקות, רדיוס ותחום התכנסות R, גזירה ואינטגרציה איבר-איבר, ואיך להציג פונקציות מוכרות כטורי טיילור ומקלורן.',
        simpleDesc: 'סכום אינסופי של פונקציות. נלמד את מבחן ה-M של ויירשטראס להתכנסות במ"ש, נחקור טורי חזקות, רדיוס ותחום התכנסות R, גזירה ואינטגרציה איבר-איבר, ואיך להציג פונקציות מוכרות כטורי טיילור ומקלורן.'
    },
    {
        num: '4', title: 'המרחב האוקלידי', shortTitle: 'המרחב האוקלידי', url: '2_20475_4.html',
        ring1: '#c084fc', ring2: '#d8b4fe', ring3: '#a855f7', glowColor: 'rgba(168, 85, 247, 0.5)', textColor: '#7e22ce',
        orbitSpeed1: '4.5s', orbitSpeed2: '6.8s', animFloat: 'organic-droplet-1',
        simpleDesc: 'מעבר ממתמטיקה של משתנה יחיד למרחב של וקטורים במספר ממדים. מרחקים, נורמות, אי-שוויון קושי-שוורץ, קבוצות פתוחות, סגורות וקומפקטיות (משפט היינה-בורל), ועקומות במרחב עם חישוב וקטור מהירות ואורך קשת.'
    },
    {
        num: '5', title: 'גבולות ורציפות', shortTitle: 'גבולות ורציפות', url: '2_20475_5.html',
        ring1: '#fb7185', ring2: '#fda4af', ring3: '#f43f5e', glowColor: 'rgba(244, 63, 94, 0.5)', textColor: '#be123c',
        orbitSpeed1: '4.3s', orbitSpeed2: '6.6s', animFloat: 'organic-droplet-2',
        simpleDesc: 'גבולות של פונקציות בשני משתנים ויותר f(x,y). נלמד איך להוכיח שגבול אינו קיים באמצעות מסלולים שונים, ואיך לחשב גבולות שכן קיימים בעזרת קואורדינטות קוטביות וכלל הסנדוויץ, לצד משפט ויירשטראס לקיצון בקבוצה קומפקטית.'
    },
    {
        num: '6', title: 'נגזרות חלקיות', shortTitle: 'נגזרות חלקיות', url: '2_20475_6.html',
        ring1: '#fbbf24', ring2: '#fde68a', ring3: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.5)', textColor: '#b45309',
        orbitSpeed1: '4.6s', orbitSpeed2: '6.4s', animFloat: 'organic-droplet-3',
        simpleDesc: 'איך פונקציה רב-ממדית משתנה בכל כיוון. נגזרות חלקיות fx ו-fy, הגדרת הדיפרנציאביליות, בניית משוואת המישור המשיק, חישוב הגרדיאנט והנגזרת הכיוונית, כלל השרשרת הרב-ממדי, ושוויון נגזרות מעורבות לפי משפט שוורץ.'
    },
    {
        num: '7', title: 'פונקציות סתומות', shortTitle: 'פונקציות סתומות', url: '2_20475_7.html',
        ring1: '#f87171', ring2: '#fca5a5', ring3: '#ef4444', glowColor: 'rgba(239, 68, 68, 0.5)', textColor: '#b91c1c',
        orbitSpeed1: '4.1s', orbitSpeed2: '6.3s', animFloat: 'organic-droplet-1',
        simpleDesc: 'משפט הפונקציה הסתומה לגזירה ללא בידוד המשתנה, איתור וסיווג נקודות קיצון מקומיות בעזרת מטריצת הסיאן, ופתרון בעיות אופטימיזציה מורכבות תחת אילוצים באמצעות שיטת כופלי לגראנז.'
    }
];

const denomResources = [
    {
        symbol: 'Xm', displaySymbol: 'X<sub>m</sub>', title: 'מאגר בחינות', shortTitle: 'מאגר בחינות', url: 'exams.html',
        ring1: '#818cf8', ring2: '#c7d2fe', ring3: '#4f46e5', glowColor: 'rgba(99, 102, 241, 0.5)', textColor: '#3730a3',
        orbitSpeed1: '4.4s', orbitSpeed2: '6.5s', animFloat: 'organic-droplet-2',
        simpleDesc: 'מאגר מבחני עבר רשמיים פתורים של אינפי 2 עם פתרונות מלאים ומפורטים, הסברים צעד-אחר-צעד, וטיפים קריטיים להצלחה במבחן.'
    },
    {
        symbol: 'Gm', displaySymbol: 'G<sub>m</sub>', title: 'משחק תרגול', shortTitle: 'משחק תרגול', url: 'game.html',
        ring1: '#34d399', ring2: '#a7f3d0', ring3: '#059669', glowColor: 'rgba(16, 185, 129, 0.5)', textColor: '#065f46',
        orbitSpeed1: '4.2s', orbitSpeed2: '6.8s', animFloat: 'organic-droplet-3',
        simpleDesc: 'משחק אתגר הטירוף של אינפי 2: תרגול אינטראקטיבי דינמי בזמן אמת, צבירת ניקוד, שאלות מושגיות מהירות ומעקב התקדמות חי.'
    },
    {
        symbol: 'Sm', displaySymbol: 'S<sub>m</sub>', title: 'סיכומי עזר', shortTitle: 'סיכומי עזר', url: 'summary.html',
        ring1: '#38bdf8', ring2: '#bae6fd', ring3: '#0284c7', glowColor: 'rgba(56, 189, 248, 0.5)', textColor: '#0369a1',
        orbitSpeed1: '4.6s', orbitSpeed2: '6.2s', animFloat: 'organic-droplet-1',
        simpleDesc: 'סיכומי קורס מתומצתים וממוקדים, דפי נוסחאות מרוכזים ורשימת משפטי מפתח לשינון מהיר לקראת המבחן הסופי.'
    }
];

const pencilPlusColors = [
    '#f97316', '#3b82f6', '#10b981', '#a855f7', '#ec4899', '#eab308'
];

function generateUnitsHtml() {
    let html = '';
    units.forEach((u, i) => {
        html += `
            <div class="unit-bubble-wrapper relative flex flex-col items-center">
                <!-- Circle Droplet (Fixed size & aspect-square so it NEVER distorts into an oval!) -->
                <a href="${u.url}" 
                   class="unit-orb-button relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 aspect-square rounded-full shrink-0 flex items-center justify-center text-decoration-none shadow-sm transition-transform duration-300 hover:scale-105"
                   style="--ring-c1: ${u.ring1}; --ring-c2: ${u.ring2}; --ring-c3: ${u.ring3}; --glow-color: ${u.glowColor}; animation: ${u.animFloat} 7s ease-in-out infinite;">
                    
                    <span class="font-caveat font-bold text-3xl sm:text-4xl text-slate-900 select-none relative z-10">${u.num}</span>

                    <!-- Spacious Expanded Card Popover Revealed on Hover Centered in Place -->
                    <div class="unit-expanded-popover p-4 flex-col items-center text-center shadow-2xl" 
                         style="border: 2px solid ${u.ring1}; box-shadow: 0 20px 45px -10px ${u.glowColor}, 0 0 16px ${u.glowColor};" 
                         dir="rtl">
                        <div class="flex items-center gap-1.5 mb-1.5">
                            <span class="w-2.5 h-2.5 rounded-full" style="background: ${u.ring1};"></span>
                            <span class="text-xs font-black text-indigo-950">יחידה ${u.num} • ${u.title}</span>
                        </div>
                        <p class="text-[11.5px] text-slate-700 leading-relaxed mb-3 font-medium">${u.simpleDesc}</p>
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-bold text-white shadow-xs transition-transform hover:scale-105" 
                              style="background: linear-gradient(135deg, ${u.ring1}, ${u.ring3});">
                            <span>לחצו לכניסה ליחידה</span>
                            <i class="fa-solid fa-arrow-left text-[10px]"></i>
                        </span>
                    </div>
                </a>
                
                <!-- Short label underneath in normal view -->
                <span class="unit-under-label text-[11px] sm:text-xs font-bold text-slate-800 mt-2 text-center tracking-tight max-w-[76px] leading-tight select-none" dir="rtl">
                    ${u.shortTitle}
                </span>
            </div>
        `;
        if (i < units.length - 1) {
            const pColor = pencilPlusColors[i % pencilPlusColors.length];
            html += `
                <div class="pencil-plus-sign text-base sm:text-lg select-none px-0.5 mb-5 shrink-0" style="color: ${pColor};">
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
            <div class="unit-bubble-wrapper relative flex flex-col items-center">
                <a href="${d.url}" 
                   class="unit-orb-button relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 aspect-square rounded-full shrink-0 flex items-center justify-center text-decoration-none shadow-sm transition-transform duration-300 hover:scale-105"
                   style="--ring-c1: ${d.ring1}; --ring-c2: ${d.ring2}; --ring-c3: ${d.ring3}; --glow-color: ${d.glowColor}; animation: ${d.animFloat} 7s ease-in-out infinite;">
                    
                    <span class="font-caveat font-bold text-2xl sm:text-3xl text-slate-900 select-none relative z-10">${d.displaySymbol}</span>

                    <div class="unit-expanded-popover p-4 flex-col items-center text-center shadow-2xl" 
                         style="border: 2px solid ${d.ring1}; box-shadow: 0 20px 45px -10px ${d.glowColor}, 0 0 16px ${d.glowColor};" 
                         dir="rtl">
                        <div class="flex items-center gap-1.5 mb-1.5">
                            <span class="w-2.5 h-2.5 rounded-full" style="background: ${d.ring1};"></span>
                            <span class="text-xs font-black text-indigo-950">${d.title}</span>
                        </div>
                        <p class="text-[11.5px] text-slate-700 leading-relaxed mb-3 font-medium">${d.simpleDesc}</p>
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-bold text-white shadow-xs transition-transform hover:scale-105" 
                              style="background: linear-gradient(135deg, ${d.ring1}, ${d.ring3});">
                            <span>כניסה למשאב</span>
                            <i class="fa-solid fa-arrow-left text-[10px]"></i>
                        </span>
                    </div>
                </a>
                
                <span class="unit-under-label text-[11px] sm:text-xs font-bold text-slate-800 mt-2 text-center tracking-tight select-none" dir="rtl">
                    ${d.shortTitle}
                </span>
            </div>
        `;
        if (i < denomResources.length - 1) {
            html += `
                <div class="pencil-plus-sign text-base sm:text-lg select-none px-2 mb-5 shrink-0" style="color: #6366f1;">
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>חשבון אינפיניטסימלי 2 (20475) | פורטל הלמידה והסיכום המקיף</title>

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Google Fonts: Caveat (Authentic Handwriting), Rubik (Modern UI Hebrew), Patrick Hand -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- KaTeX for High-Precision Mathematical Rendering -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <style>
        body {
            font-family: 'Rubik', sans-serif;
            background-color: #fafbfc;
            color: #0f172a;
            overflow-x: hidden;
        }

        .font-caveat {
            font-family: 'Caveat', 'Patrick Hand', cursive, sans-serif;
        }

        .handwritten-eq-100 {
            font-family: 'Caveat', 'Patrick Hand', cursive, sans-serif;
            font-weight: 700;
            color: #e11d48;
            transform: rotate(-3deg);
            display: inline-block;
            filter: drop-shadow(0 2px 4px rgba(225, 29, 72, 0.25));
        }

        .pencil-underline-red {
            stroke: #e11d48;
            stroke-width: 2.2;
            stroke-linecap: round;
            stroke-dasharray: 120;
            stroke-dashoffset: 0;
            fill: none;
            opacity: 0.85;
        }

        .pen-integral-text {
            font-family: 'Caveat', 'Patrick Hand', cursive, sans-serif;
            font-style: italic;
        }

        .pencil-plus-sign {
            font-family: 'Caveat', 'Patrick Hand', cursive, sans-serif;
            font-weight: 700;
            transform: rotate(-4deg);
            display: inline-block;
            opacity: 0.9;
        }

        /* 50% Translucent Equation Stage Glassmorphism */
        .translucent-equation-stage {
            background: rgba(255, 255, 255, 0.50);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1.5px solid rgba(255, 255, 255, 0.75);
            border-radius: 2.5rem;
            box-shadow: 
                0 20px 45px -10px rgba(99, 102, 241, 0.12),
                0 0 0 1px rgba(255, 255, 255, 0.6) inset;
            position: relative;
        }

        .translucent-equation-stage::before {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: 2.6rem;
            padding: 2px;
            background: linear-gradient(135deg, 
                rgba(56, 189, 248, 0.4), 
                rgba(129, 140, 248, 0.3), 
                rgba(244, 114, 182, 0.3), 
                rgba(251, 191, 36, 0.35));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0.65;
        }

        /* UNIT ORB BUTTON ARCHITECTURE (Strict aspect-square, zero oval stretching) */
        .unit-orb-button {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 2px solid transparent;
            position: relative;
        }

        .unit-orb-button::before {
            content: '';
            position: absolute;
            inset: -2.5px;
            border-radius: 9999px;
            padding: 2.5px;
            background: conic-gradient(from 0deg, var(--ring-c1), var(--ring-c2), var(--ring-c3), var(--ring-c1));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0.9;
        }

        .unit-bubble-wrapper {
            position: relative;
            z-index: 10;
        }

        /* Whichever bubble is hovered gets elevated ABOVE all other units (Unit 4 never covers Unit 3) */
        .unit-bubble-wrapper:hover,
        .unit-bubble-wrapper:focus-within {
            z-index: 99 !important;
        }

        /* SPACIOUS EXPANDED POPOVER ON HOVER (Directly centered, matching border color, never squished!) */
        .unit-expanded-popover {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.92);
            width: 290px;
            min-height: 170px;
            border-radius: 1.75rem;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            z-index: 100;
            opacity: 0;
            pointer-events: none;
            display: flex;
            transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .unit-bubble-wrapper:hover .unit-expanded-popover,
        .unit-bubble-wrapper:focus-within .unit-expanded-popover {
            opacity: 1;
            pointer-events: auto;
            transform: translate(-50%, -50%) scale(1);
        }

        @keyframes organic-droplet-1 {
            0%, 100% { border-radius: 50% 50% 48% 52% / 52% 48% 52% 48%; transform: translate(0, 0) rotate(0deg); }
            33% { border-radius: 53% 47% 52% 48% / 47% 53% 49% 51%; transform: translate(1px, -2px) rotate(1deg); }
            66% { border-radius: 48% 52% 49% 51% / 51% 49% 53% 47%; transform: translate(-2px, 1px) rotate(-1deg); }
        }

        @keyframes organic-droplet-2 {
            0%, 100% { border-radius: 48% 52% 51% 49% / 50% 50% 48% 52%; transform: translate(0, 0) rotate(0deg); }
            33% { border-radius: 52% 48% 47% 53% / 53% 47% 51% 49%; transform: translate(-2px, 2px) rotate(-1.5deg); }
            66% { border-radius: 47% 53% 49% 51% / 51% 49% 53% 47%; transform: translate(2px, -2px) rotate(1.5deg); }
        }

        @keyframes organic-droplet-3 {
            0%, 100% { border-radius: 49% 51% 53% 47% / 48% 52% 51% 49%; transform: translate(0, 0) rotate(0deg); }
            33% { border-radius: 53% 47% 48% 52% / 52% 48% 47% 53%; transform: translate(3px, 2px) rotate(2deg); }
            66% { border-radius: 48% 52% 50% 50% / 50% 50% 52% 48%; transform: translate(-3px, -2px) rotate(-2deg); }
        }

        .soft-pastel-fraction-bar {
            height: 4px;
            background: linear-gradient(90deg, 
                rgba(56, 189, 248, 0.85), 
                rgba(129, 140, 248, 0.85), 
                rgba(52, 211, 153, 0.85), 
                rgba(192, 132, 252, 0.85), 
                rgba(251, 113, 133, 0.85), 
                rgba(245, 158, 11, 0.85), 
                rgba(248, 113, 113, 0.85));
            border-radius: 9999px;
            box-shadow: 0 0 12px rgba(99, 102, 241, 0.4);
        }

        /* FLOATING "לקורסים נוספים" BUTTON: FIXED TO TOP-LEFT OF PAGE (NOT SCREEN SCROLLING), ENLARGED, SMOOTH FLOATING INTEGRAL */
        .floating-course-switcher-btn {
            position: absolute;
            top: 1.5rem;
            left: 1.5rem;
            z-index: 60;
            width: 108px;
            height: 108px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.90);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
            animation: organic-droplet-1 7s ease-in-out infinite;
        }

        .floating-course-switcher-btn:hover {
            transform: scale(1.06);
            box-shadow: 0 14px 35px rgba(99, 102, 241, 0.25);
        }

        .floating-course-switcher-btn::before {
            content: '';
            position: absolute;
            inset: -2.5px;
            border-radius: inherit;
            padding: 2.5px;
            background: conic-gradient(from 0deg, #38bdf8, #818cf8, #f472b6, #fbbf24, #34d399, #38bdf8);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: ringRotate 6s linear infinite;
        }

        @keyframes ringRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes gentleIntegralFloat {
            0% { transform: translateY(3px) rotate(-3deg); filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.25)); }
            50% { transform: translateY(-4px) rotate(3deg); filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.35)); }
            100% { transform: translateY(3px) rotate(-3deg); filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.25)); }
        }

        .floating-symbol-integral {
            animation: gentleIntegralFloat 4.2s ease-in-out infinite;
            display: inline-block;
            transform-origin: center center;
        }

        /* INTERACTIVE SITE GUIDE CARD: COMPACT ON REST, EXPANDS ON HOVER OR CLICK */
        .site-guide-interactive-card {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .site-guide-interactive-card .guide-expandable-content {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, margin 0.35s ease;
        }

        .site-guide-interactive-card:hover .guide-expandable-content,
        .site-guide-interactive-card.is-open .guide-expandable-content {
            max-height: 1200px;
            opacity: 1;
            margin-top: 1rem;
        }

        .site-guide-interactive-card .guide-expand-indicator {
            transition: transform 0.3s ease;
        }

        .site-guide-interactive-card:hover .guide-expand-indicator,
        .site-guide-interactive-card.is-open .guide-expand-indicator {
            transform: rotate(180deg);
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

        /* Notebook Parchment Container */
        .notebook-sheet {
            background-color: #fefdf8;
            background-image: 
                radial-gradient(#e5e7eb 0.75px, transparent 0.75px);
            background-size: 16px 16px;
            border: 1.5px solid #fed7aa;
            border-radius: 1.5rem;
            box-shadow: 0 4px 15px rgba(251, 191, 36, 0.08);
        }

        /* KaTeX custom responsive styling - STRICTLY NO HORIZONTAL SCROLLBAR */
        .katex-display {
            margin: 0.4em 0 !important;
            overflow-x: hidden !important;
            overflow-y: hidden !important;
        }
        .katex {
            font-size: 1.15em;
            max-width: 100%;
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

    <!-- Floating Circular "לקורסים נוספים" Button (Moved to LEFT, enlarged to 108px, points to https://all-the-courses.pages.dev/) -->
    <a href="https://all-the-courses.pages.dev/" 
       class="floating-course-switcher-btn group" 
       title="מעבר לפורטל כל הקורסים">
        <div class="relative z-10 flex flex-col items-center justify-center pointer-events-none select-none">
            <span class="font-caveat text-4xl sm:text-5xl text-indigo-700 font-bold leading-none floating-symbol-integral">
                ∫
            </span>
            <span class="text-[11px] font-extrabold text-slate-800 tracking-tight leading-none mt-0.5">
                לקורסים
            </span>
            <span class="text-[10px] font-bold text-indigo-600 leading-none">
                נוספים
            </span>
        </div>
    </a>

    <!-- Main Container -->
    <div class="relative z-10 min-h-full flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">

        <!-- ============================================================
             PART 1: HERO HEADER (ENTIRE REGION ENCLOSED IN CLEAN WHITE CARD)
             ============================================================ -->
        <header class="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md flex flex-col items-center text-center mb-8 sm:mb-10">
            
            <!-- Academic Course Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 shadow-2xs mb-4">
                <i class="fa-solid fa-square-root-variable text-indigo-600 text-xs"></i>
                <span class="text-xs sm:text-sm font-semibold text-indigo-950">
                    חשבון אינפיניטסימלי 2 (20475) • האוניברסיטה הפתוחה
                </span>
            </div>

            <!-- Main Portal Title -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                חשבון אינפיניטסימלי <span class="text-indigo-600">2</span>
            </h1>

            <p class="text-slate-600 text-sm sm:text-base max-w-2xl font-medium mb-4 leading-relaxed">
                קורס חשבון אינפיניטסימלי 2 מהווה את שער הכניסה לאנליזה מתקדמת: מאינטגרלים לא אמיתיים והתכנסות במידה שווה של סדרות וטורי פונקציות, ועד לגבולות כפולים, נגזרות חלקיות, פונקציות סתומות וקיצון תחת אילוצים במרחב הרב-ממדי.
            </p>

            <!-- Interactive Academic Learning Guide Card (Compact at rest, smoothly expands on hover or click) -->
            <div id="site-guide-card" 
                 class="site-guide-interactive-card w-full max-w-3xl bg-slate-50/70 hover:bg-slate-50/95 rounded-2xl p-4 sm:p-5 border border-indigo-100/80 hover:border-indigo-200 shadow-2xs hover:shadow-md transition-all duration-300 text-right mt-1 cursor-pointer group" 
                 onclick="toggleGuideCard(event)"
                 dir="rtl">
                
                <!-- Resting Header & Compact Summary (Always visible in resting state) -->
                <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <span class="w-9 h-9 rounded-xl bg-indigo-100/80 flex items-center justify-center text-indigo-700 text-base shadow-2xs shrink-0">
                            💡
                        </span>
                        <div>
                            <div class="flex items-center gap-2">
                                <h3 class="text-sm sm:text-base font-black text-indigo-950 leading-tight">
                                    מדריך הלמידה: מבנה הפרקים ומשאבי ההצלחה בקורס
                                </h3>
                                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 hidden sm:inline-block">
                                    3 מצבי למידה מובנים
                                </span>
                            </div>
                            <p class="text-[11.5px] text-slate-600 font-medium mt-0.5">
                                הסבר קצר על האתר: העבירו את העכבר או לחצו לפירוט מלא על 3 מצבי הלמידה, הסימולציות, המשאבים ודרכי יצירת קשר ✨
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-1.5 text-indigo-600 text-xs font-bold shrink-0">
                        <span class="hidden md:inline text-[11px] text-indigo-700">לחצו או רחפו להרחבה</span>
                        <i class="fa-solid fa-chevron-down guide-expand-indicator text-xs transition-transform duration-300"></i>
                    </div>
                </div>

                <!-- Expandable Deep Content (Revealed smoothly on hover or click) -->
                <div class="guide-expandable-content border-t border-indigo-100/80 pt-4 space-y-4 text-right">
                    
                    <!-- 1. The 3 Distinct Learning Modes across all 7 units -->
                    <div>
                        <div class="flex items-center gap-1.5 mb-2.5">
                            <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
                            <span class="font-black text-xs sm:text-sm text-indigo-950">שלושת מצבי הלמידה המובנים בכל אחד מ-7 פרקי הקורס:</span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            <!-- Mode 1: בגובה העיניים -->
                            <div class="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-start">
                                <div class="flex items-center gap-1.5 mb-1.5 text-sky-700 font-bold text-xs">
                                    <i class="fa-regular fa-eye"></i>
                                    <span>1. מצב בגובה העיניים</span>
                                </div>
                                <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                                    <strong>אינטואיציה ויזואלית ומבוא מושגי:</strong> הסברים פשוטים, שפה ישירה ודוגמאות מוחשיות שמפרקות כל מושג מופשט לגורמים (התכנסות במ"ש מול נקודתית, טורי חזקות, המרחב האוקלידי, גבולות כפולים ונגזרות חלקיות) ללא שפה מכבידה לפני שנכנסים לפורמליזם.
                                </p>
                            </div>

                            <!-- Mode 2: מצב משפטי -->
                            <div class="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-start">
                                <div class="flex items-center gap-1.5 mb-1.5 text-indigo-700 font-bold text-xs">
                                    <i class="fa-solid fa-scale-balanced"></i>
                                    <span>2. מצב משפטי</span>
                                </div>
                                <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                                    <strong>תנאי משפטים, דקויות ומלכודות:</strong> ניתוח קפדני של תנאי המשפטים ב-7 פרקי הקורס (משפט דיני, מבחן M של ויירשטראס, משפט שוורץ, פונקציה סתומה וכופלי לגראנז'), הבדלה בין תנאי הכרחי למספיק, דקויות הגדרה ומלכודות בחינה נפוצות.
                                </p>
                            </div>

                            <!-- Mode 3: מצב פורמלי -->
                            <div class="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-start">
                                <div class="flex items-center gap-1.5 mb-1.5 text-purple-700 font-bold text-xs">
                                    <i class="fa-solid fa-square-root-variable"></i>
                                    <span>3. מצב פורמלי</span>
                                </div>
                                <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                                    <strong>הוכחות מתמטיות ופתרון מבחן:</strong> כתיבה מתמטית מדויקת לפי הסטנדרט האקדמי המחמיר של האוניברסיטה הפתוחה: הוכחות משפטים מלאות שלב-אחר-שלב, וניסוח מלא ומנומק של תרגילי חישוב להבטחת 100% מהנקודות בבחינה.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- 2. Interactive Simulations & Success Resources -->
                    <div>
                        <div class="flex items-center gap-1.5 mb-2.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                            <span class="font-black text-xs sm:text-sm text-indigo-950">סימולציות חיות ומשאבי ההצלחה בבחינה:</span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                            <!-- סימולציות חיות -->
                            <div class="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-start">
                                <div class="flex items-center gap-1.5 mb-1 text-emerald-700 font-bold text-xs">
                                    <i class="fa-solid fa-chart-line"></i>
                                    <span>סימולציות חיות</span>
                                </div>
                                <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                                    הדמיות ויזואליות דינמיות בכל אחד מ-7 הפרקים להמחשת התכנסות סדרות וטורי פונקציות, רדיוס התכנסות, ומשטחים תלת-ממדיים.
                                </p>
                            </div>

                            <!-- משחק תרגול -->
                            <a href="game.html" class="p-2.5 rounded-xl bg-white hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-300 shadow-2xs flex flex-col justify-start transition-all group/res text-decoration-none">
                                <div class="flex items-center gap-1.5 mb-1 text-emerald-700 font-bold text-xs">
                                    <i class="fa-solid fa-gamepad group-hover/res:scale-110 transition-transform"></i>
                                    <span>משחק תרגול (G<sub>m</sub>)</span>
                                </div>
                                <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                                    אימון אקטיבי אינטראקטיבי בזמן אמת לשאלות קונספטואליות, זיהוי מבחנים ומעקב התקדמות חי.
                                </p>
                            </a>

                            <!-- מאגר בחינות -->
                            <a href="exams.html" class="p-2.5 rounded-xl bg-white hover:bg-indigo-50/60 border border-slate-200/80 hover:border-indigo-300 shadow-2xs flex flex-col justify-start transition-all group/res text-decoration-none">
                                <div class="flex items-center gap-1.5 mb-1 text-indigo-700 font-bold text-xs">
                                    <i class="fa-solid fa-award group-hover/res:scale-110 transition-transform"></i>
                                    <span>מאגר בחינות (X<sub>m</sub>)</span>
                                </div>
                                <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                                    כל בחינות העבר הרשמיות של האוניברסיטה הפתוחה פתורות ומנותחות ב-100% (dx=100).
                                </p>
                            </a>

                            <!-- סיכומי עזר -->
                            <a href="summary.html" class="p-2.5 rounded-xl bg-white hover:bg-sky-50/60 border border-slate-200/80 hover:border-sky-300 shadow-2xs flex flex-col justify-start transition-all group/res text-decoration-none">
                                <div class="flex items-center gap-1.5 mb-1 text-sky-700 font-bold text-xs">
                                    <i class="fa-solid fa-book-bookmark group-hover/res:scale-110 transition-transform"></i>
                                    <span>סיכומי עזר (S<sub>m</sub>)</span>
                                </div>
                                <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                                    דפי נוסחאות מרוכזים ורשימת משפטי מפתח לשינון מהיר וממוקד לקראת המבחן.
                                </p>
                            </a>
                        </div>
                    </div>

                    <!-- 3. Contact & Email Explanation -->
                    <div class="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
                        <div class="flex items-start gap-2.5">
                            <span class="text-base text-indigo-600 shrink-0 mt-0.5">✉️</span>
                            <div>
                                <span class="text-xs font-bold text-indigo-950 block">פניות, דיווח על טעויות והצעות לשיפור:</span>
                                <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                                    מצאתם טעות מתמטית? שאלה לגבי פתרון? שלחו עדכון ישיר באימייל או בוואטסאפ ונתקן מיד לטובת כלל הסטודנטים.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 shrink-0" dir="ltr">
                            <a href="mailto:yairkurtzman@gmail.com" 
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 text-xs font-bold border border-indigo-200 shadow-2xs transition-all">
                                <i class="fa-regular fa-envelope"></i>
                                <span>Email</span>
                            </a>
                            <a href="https://wa.me/972586736525" target="_blank" rel="noopener noreferrer" 
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-green-600 hover:text-white text-green-700 text-xs font-bold border border-green-200 shadow-2xs transition-all">
                                <i class="fa-brands fa-whatsapp text-green-600"></i>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </header>

        <!-- ============================================================
             PART 2: TRANSLUCENT INTEGRAL EQUATION STAGE (במת משוואת האינטגרל)
             ============================================================ -->
        <section class="w-full max-w-5xl translucent-equation-stage p-6 sm:p-8 md:p-10 mb-12">
            
            <!-- Default Equation View (מצב רגיל של משוואת הקורס - מוגדר ב-LTR) -->
            <div id="course-equation-view" class="w-full flex items-center justify-between gap-2 sm:gap-3" dir="ltr">
                
                <!-- 1. LEFT RED CALLIGRAPHY INTEGRAL COLUMN (0 TO 100) WITH INTERACTIVE MOUSE TRACKING (SHIFTED LEFT AWAY FROM CIRCLE 1) -->
                <div id="integral-col-interactive" 
                     class="integral-column relative h-56 sm:h-64 md:h-72 px-1 flex flex-col justify-between items-center shrink-0 cursor-pointer mr-6 sm:mr-8 md:mr-10"
                     onmousemove="handleIntegralMouseMove(event)"
                     onmouseleave="handleIntegralMouseLeave()"
                     onclick="handleIntegralClick(event)"
                     title="הזיזו את העכבר לאורך האינטגרל ולחצו לחקירת מסע 100 האינטגרלים!">
                    
                    <!-- Upper Bound: 100 in RED pen style -->
                    <div class="relative z-30 self-end pl-0 sm:pl-1">
                        <span class="font-caveat font-bold text-2xl sm:text-3xl select-none text-rose-600">
                            100
                        </span>
                    </div>

                    <!-- Classical Calligraphic Integral Symbol in RED with Correct Orientations -->
                    <div class="relative flex-1 w-8 sm:w-9 md:w-10 flex items-center justify-center my-0.5 pointer-events-none">
                        <svg viewBox="0 0 38 220" class="w-full h-full overflow-visible select-none drop-shadow-sm">
                            <!-- Top hook curves UP-RIGHT, stem goes through center, bottom hook curves DOWN-LEFT -->
                            <path d="M 33,20 C 31,7 21,7 17,20 L 17,200 C 13,213 3,213 1,200" 
                                  fill="none" 
                                  stroke="#e11d48" 
                                  stroke-width="5" 
                                  stroke-linecap="round" 
                                  stroke-linejoin="round" />
                            <!-- Interactive Glowing Light Dot tracking the mouse Y position! -->
                            <circle id="integral-tracking-dot" cx="17" cy="110" r="4.2" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5" 
                                    style="filter: drop-shadow(0 0 8px #f59e0b); transition: cy 0.08s ease-out;" />
                        </svg>
                    </div>

                    <!-- Lower Bound: 0 in RED pen style -->
                    <div class="relative z-30 self-start pr-0 sm:pr-1">
                        <span class="font-caveat font-bold text-2xl sm:text-3xl select-none text-rose-600">
                            0
                        </span>
                    </div>

                </div>

                <!-- 2. CENTER FRACTION: NUMERATOR (UNITS) / DENOMINATOR (RESOURCES) -->
                <div class="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 min-w-0">
                    
                    <!-- NUMERATOR: 7 Core Units (Fixed circular bubbles, expanding popovers on hover) -->
                    <div class="w-full flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 flex-wrap sm:flex-nowrap">
                        ${generateUnitsHtml()}
                    </div>

                    <!-- FRACTION BAR: Pastel Gradient Glow Line with Interactive Mouse Tracking Dot -->
                    <div id="fraction-bar-interactive" 
                         class="w-full my-4 sm:my-5 relative px-1 py-2 cursor-pointer group"
                         onmousemove="handleFractionBarMouseMove(event)"
                         onmouseleave="handleFractionBarMouseLeave()"
                         onclick="handleFractionBarClick(event)"
                         title="הזיזו את העכבר לאורך הקו ולחצו לפתיחת שלב תואם במסע 100 האינטגרלים!">
                        <div class="soft-pastel-fraction-bar w-full relative">
                            <!-- Interactive Glowing Light Dot tracking the mouse X position! -->
                            <div id="fraction-tracking-dot" 
                                 class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-2 border-white shadow-[0_0_10px_#f59e0b] pointer-events-none transition-all duration-75"
                                 style="left: 50%;"></div>
                        </div>
                    </div>

                    <!-- DENOMINATOR: 3 Master Resources (Xm + Gm + Sm) -->
                    <div class="w-full flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap sm:flex-nowrap">
                        ${generateDenomHtml()}
                    </div>

                </div>

                <!-- 3. RIGHT HANDWRITTEN EQUATION TERMINATOR: dx = 100 (Clickable: links to exams.html!) -->
                <a href="exams.html" 
                   class="flex items-center gap-2 sm:gap-2.5 shrink-0 self-center pl-1 sm:pl-3 group/dx cursor-pointer text-decoration-none transition-transform hover:scale-105"
                   title="מעבר למאגר בחינות העבר של אינפי 2 (ציון 100!)">
                    <span class="pen-integral-text italic text-2xl sm:text-3xl text-slate-800 select-none group-hover/dx:text-rose-600 transition-colors">
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
                </a>

            </div>

            <!-- ============================================================
                 PART 3: THE SECRET 100 INTEGRALS EXPLORER (במת חקירת 100 האינטגרלים)
                 Notebook handwritten experience, no tabs, no scrollbars!
                 ============================================================ -->
            <div id="integral-explorer-view" class="hidden relative z-30 w-full flex flex-col items-center text-slate-800" dir="rtl">
                
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
                        <span class="cursor-pointer hover:text-indigo-600" onclick="setExplorerLevel(71)">71 • נגזרות</span>
                        <span class="cursor-pointer hover:text-rose-600 font-extrabold" onclick="setExplorerLevel(100)">100 • מבחן שיא 🎯</span>
                    </div>
                    <input id="exp-slider" type="range" min="1" max="100" value="1" 
                           class="explorer-slider-track"
                           oninput="setExplorerLevel(parseInt(this.value))">
                </div>

                <!-- Main Dynamic Stage: Right Context & Curve + Left Handwritten Notebook Step Stage -->
                <div class="w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mb-4">
                    
                    <!-- RIGHT COLUMN (Col 1-5): Visual Math Card with Curve Plot (ציור הפונקציה המתמטית עם נקודת אור נעה) -->
                    <div class="md:col-span-5 bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-white/90 shadow-xs flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                                <span>עקומת הפונקציה y = f(x)</span>
                                <span class="text-indigo-600 font-mono text-[10px]">מסלול תנועה חי</span>
                            </div>

                            <!-- True Mathematical Function Curve Drawing with continuous moving light particle -->
                            <div id="exp-curve-container" class="my-2 bg-slate-50/70 rounded-xl p-2 border border-slate-100 flex items-center justify-center">
                                <!-- Dynamic SVG injected via JS -->
                            </div>

                            <!-- Course Unit & Theorem Context Badge (100% Infi 2 Syllabus) -->
                            <div class="bg-indigo-50/70 rounded-xl p-3 border border-indigo-100/80 mb-3 text-right">
                                <div class="text-[10px] font-extrabold text-indigo-700 uppercase tracking-wider mb-0.5">שיוך מתמטי לתוכנית הקורס:</div>
                                <div id="exp-unit-ref" class="text-xs font-bold text-indigo-950 mb-1">יחידה 1 • אינטגרל לא אמיתי</div>
                                <div id="exp-theorem-ref" class="text-[11px] text-slate-600 font-medium leading-snug">המשפט היסודי של החשבון האינפיניטסימלי</div>
                            </div>
                        </div>

                        <!-- Unit Navigation Action Button -->
                        <a id="exp-unit-btn" href="2_20475_1.html" 
                           class="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors">
                            <span>מעבר ליחידה</span>
                            <i class="fa-solid fa-arrow-left text-[10px]"></i>
                        </a>
                    </div>

                    <!-- LEFT COLUMN (Col 6-12): Handwritten Notebook Card (מחברת מתמטית ממוקדת, ללא לשוניות, ללא גלילה) -->
                    <div class="md:col-span-7 notebook-sheet p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                            <!-- Header: Exercise Name & Current Step Badge in Handwritten Font -->
                            <div class="flex items-center justify-between mb-3 pb-2 border-b border-amber-200/60">
                                <h3 id="exp-integral-name" class="font-caveat font-bold text-2xl sm:text-3xl text-indigo-950 flex items-center gap-2">
                                    <i class="fa-solid fa-feather-pointed text-amber-600 text-sm"></i>
                                    <span>שם האינטגרל</span>
                                </h3>
                                <span id="exp-step-indicator" class="font-caveat font-bold text-base sm:text-lg text-amber-800 bg-amber-100/60 px-3 py-0.5 rounded-full">
                                    שלב 1 מתוך 4
                                </span>
                            </div>

                            <!-- Active Step Workspace (Display math directly in front of the eyes + Hebrew explanation) -->
                            <div id="exp-step-stage" class="min-h-[170px] flex flex-col justify-center">
                                <!-- Dynamic Step Content injected via JS -->
                            </div>
                        </div>

                        <!-- Navigation Controls (לשלב הבא / לשלב הקודם) -->
                        <div id="exp-step-controls" class="flex items-center justify-between pt-3 mt-3 border-t border-amber-200/60">
                            <!-- Dynamic controls injected via JS -->
                        </div>

                    </div>

                </div>

                <!-- Bottom Level Jump Controls -->
                <div class="w-full flex items-center justify-between pt-2 border-t border-indigo-200/40">
                    <button onclick="prevExplorerLevel()" 
                            class="px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-2xs hover:text-indigo-600 transition-all cursor-pointer">
                        → אינטגרל קודם
                    </button>
                    
                    <button onclick="randomExplorerLevel()" 
                            class="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 shadow-2xs transition-all cursor-pointer flex items-center gap-1.5">
                        <i class="fa-solid fa-dice text-indigo-500"></i>
                        <span>אינטגרל אקראי</span>
                    </button>

                    <button onclick="nextExplorerLevel()" 
                            class="px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-2xs hover:text-indigo-600 transition-all cursor-pointer">
                        לאינטגרל הבא ←
                    </button>
                </div>

            </div>

        </section>

        <!-- ============================================================
             PART 4: FOOTER (LARGELY TRANSPARENT WITH JUST A DELICATE FROSTED MIST)
             ============================================================ -->
        <footer class="bg-transparent pb-8 relative z-30 mt-auto w-full flex flex-col items-center">
            
            <!-- Delicate Frosted Card (Very transparent, whisper of blur, 100% legible) -->
            <div class="w-full max-w-2xl bg-white/15 backdrop-blur-[2px] rounded-3xl p-5 sm:p-6 border border-white/30 shadow-none flex flex-col items-center text-center mx-auto mb-3" dir="rtl">
                
                <!-- Floating WhatsApp, LinkedIn, and Email Icon Buttons -->
                <div class="flex justify-center items-center gap-3.5 mb-3" dir="ltr">
                    <!-- WhatsApp -->
                    <a href="https://wa.me/972586736525" target="_blank" rel="noopener noreferrer" title="WhatsApp"
                        class="w-11 h-11 bg-white/30 hover:bg-green-500/20 backdrop-blur-xs rounded-2xl flex items-center justify-center shadow-none border border-white/40 hover:border-green-400 hover:scale-105 transition-all duration-300 text-slate-700">
                        <svg class="w-5 h-5 text-green-600 transition-colors" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                    </a>

                    <!-- LinkedIn -->
                    <a href="https://linkedin.com/in/yair-kurtzman-382417247" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                        class="w-11 h-11 bg-white/30 hover:bg-sky-500/20 backdrop-blur-xs rounded-2xl flex items-center justify-center shadow-none border border-white/40 hover:border-sky-400 hover:scale-105 transition-all duration-300 text-slate-700">
                        <svg class="w-5 h-5 text-sky-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-1.61 1.61h-.022A1.61 1.61 0 0 1 3.96 6.106a1.61 1.61 0 1 1 3.24 0ZM7.18 19.5H4V8.796h3.18V19.5Z" clip-rule="evenodd" />
                        </svg>
                    </a>

                    <!-- Email -->
                    <a href="mailto:yairkurtzman@gmail.com" title="שליחת מייל"
                        class="w-11 h-11 bg-white/30 hover:bg-indigo-500/20 backdrop-blur-xs rounded-2xl flex items-center justify-center shadow-none border border-white/40 hover:border-indigo-400 hover:scale-105 transition-all duration-300 text-slate-700">
                        <i class="fa-regular fa-envelope text-indigo-700 text-base"></i>
                    </a>
                </div>

                <p class="text-slate-800 text-base sm:text-lg font-bold mb-1">
                    🎓 !למידה מהנה ובהצלחה רבה במבחן
                </p>
                <p class="text-slate-700 text-xs sm:text-sm font-semibold mb-2.5 max-w-xl leading-relaxed">
                    התוכן של האתר נערך ונסקר מכל הכיוונים על ידי, אבל עדיין האתר נבנה בעזרת בינה מלאכותית ולכן ייתכנו טעויות, אשמח לעדכון אם מצאתם על מנת שאוכל לתקן.
                </p>
                <p class="text-slate-500 text-[11px] font-semibold">
                    © כל הזכויות על המבחנים וחומרי הלימוד שמורות לאוניברסיטה הפתוחה ולמחברי הסיכומים
                </p>
            </div>

            <!-- Bottom Credit Bar (Exact Match to Linear 1) -->
            <div class="w-full max-w-2xl px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2 font-medium" dir="rtl">
                <div>
                    חשבון אינפיניטסימלי 2 (20475) • האוניברסיטה הפתוחה
                </div>
                <div class="flex items-center gap-3" dir="ltr">
                    <a href="https://wa.me/972586736525" target="_blank" rel="noopener noreferrer" class="hover:text-green-600 flex items-center gap-1 transition-colors">
                        <span>WhatsApp</span>
                        <i class="fa-brands fa-whatsapp text-green-600"></i>
                    </a>
                    <span>•</span>
                    <a href="https://linkedin.com/in/yair-kurtzman-382417247" target="_blank" rel="noopener noreferrer" class="hover:text-sky-600 flex items-center gap-1 transition-colors">
                        <span>LinkedIn</span>
                        <i class="fa-brands fa-linkedin text-sky-600"></i>
                    </a>
                    <span>•</span>
                    <a href="mailto:yairkurtzman@gmail.com" class="hover:text-indigo-600 flex items-center gap-1 transition-colors">
                        <span>Email</span>
                        <i class="fa-regular fa-envelope text-indigo-600"></i>
                    </a>
                </div>
            </div>

        </footer>

    </div>

    <!-- ============================================================
         JAVASCRIPT CONTROLLER & 100 INTEGRALS DATA STORE
         ============================================================ -->
    <script>
        const INTEGRALS_DATA = ${JSON.stringify(integralsData)};

        let currentExplorerLevel = 1;
        let currentExplorerStep = 0; // 0: Raw Intro, 1..N: Solution Steps, N+1: Final Result

        const tierColors = {
            1: "bg-sky-600",
            2: "bg-blue-600",
            3: "bg-indigo-600",
            4: "bg-violet-600",
            5: "bg-emerald-600",
            6: "bg-teal-600",
            7: "bg-purple-600",
            8: "bg-fuchsia-600",
            9: "bg-amber-600",
            10: "bg-rose-600"
        };

        function renderLatexToHtml(latexStr, displayMode = false) {
            if (!latexStr) return '';
            if (window.katex && window.katex.renderToString) {
                try {
                    return window.katex.renderToString(latexStr, {
                        displayMode: displayMode,
                        throwOnError: false
                    });
                } catch (e) {
                    console.warn('KaTeX render error:', e);
                }
            }
            return '<span class="font-mono text-sm">' + latexStr + '</span>';
        }

        // ==========================================
        // INTERACTIVE MOUSE TRACKING ON INTEGRAL & FRACTION BAR
        // ==========================================
        function handleIntegralMouseMove(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const clientY = event.clientY - rect.top;
            const pct = Math.max(0, Math.min(1, clientY / rect.height));
            // In SVG coordinates (22 to 198)
            const dotY = 22 + pct * (198 - 22);
            const dot = document.getElementById('integral-tracking-dot');
            if (dot) dot.setAttribute('cy', dotY.toFixed(1));
        }

        function handleIntegralMouseLeave() {
            const dot = document.getElementById('integral-tracking-dot');
            if (dot) dot.setAttribute('cy', '110');
        }

        function handleFractionBarMouseMove(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const clientX = event.clientX - rect.left;
            const pct = Math.max(0, Math.min(1, clientX / rect.width));
            const dot = document.getElementById('fraction-tracking-dot');
            if (dot) dot.style.left = (pct * 100).toFixed(1) + '%';
        }

        function handleFractionBarMouseLeave() {
            const dot = document.getElementById('fraction-tracking-dot');
            if (dot) dot.style.left = '50%';
        }

        function openIntegralExplorer(level = 1) {
            currentExplorerLevel = Math.max(1, Math.min(100, level));
            currentExplorerStep = 0; // Always start at raw problem statement
            const eqView = document.getElementById('course-equation-view');
            const expView = document.getElementById('integral-explorer-view');
            if (eqView && expView) {
                eqView.classList.add('hidden');
                expView.classList.remove('hidden');
                renderExplorerCard();
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
            currentExplorerStep = 0;
            renderExplorerCard();
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

        function setExplorerStep(stepIdx) {
            currentExplorerStep = stepIdx;
            renderExplorerStepStage();
        }

        function nextExplorerStep() {
            const item = INTEGRALS_DATA.find(d => d.id === currentExplorerLevel) || INTEGRALS_DATA[0];
            const maxStep = item.structuredSteps.length + 1;
            if (currentExplorerStep < maxStep) {
                setExplorerStep(currentExplorerStep + 1);
            } else {
                nextExplorerLevel();
            }
        }

        function prevExplorerStep() {
            if (currentExplorerStep > 0) {
                setExplorerStep(currentExplorerStep - 1);
            }
        }

        function renderExplorerCard() {
            const item = INTEGRALS_DATA.find(d => d.id === currentExplorerLevel) || INTEGRALS_DATA[0];

            // Update Slider
            const slider = document.getElementById('exp-slider');
            if (slider) slider.value = item.id;

            // Badges
            const tierBadge = document.getElementById('exp-tier-badge');
            if (tierBadge) {
                tierBadge.className = "px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-xs " + (tierColors[item.tier] || "bg-indigo-600");
                tierBadge.innerText = "Tier " + item.tier + ": " + item.tierName;
            }

            const levelBadge = document.getElementById('exp-level-badge');
            if (levelBadge) {
                levelBadge.innerText = "שלב " + item.id + " / 100";
            }

            // Right Column: True Mathematical Curve with Continuous Light Particle
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
                                <stop offset="100%" stop-color="#6366f1" stop-opacity="0.05" />
                            </linearGradient>
                        </defs>
                        <!-- Grid & Axes -->
                        <line x1="10" y1="80" x2="102" y2="80" stroke="#cbd5e1" stroke-width="1" />
                        <line x1="15" y1="8" x2="15" y2="85" stroke="#cbd5e1" stroke-width="1" />
                        <text x="100" y="86" font-size="7" fill="#94a3b8" font-family="sans-serif">x</text>
                        <text x="11" y="10" font-size="7" fill="#94a3b8" font-family="sans-serif">y</text>
                        <!-- Area Fill Under Curve -->
                        <path d="\${item.areaD}" fill="url(#curve-area-\${item.id})" />
                        <!-- Curve Stroke -->
                        <path id="curve-path-\${item.id}" d="\${item.pathD}" fill="none" stroke="url(#curve-stroke-\${item.id})" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.3));" />
                        <!-- Continuous Moving Glowing Particle Along the Curve -->
                        <circle r="3.6" fill="#fbbf24" stroke="#ffffff" stroke-width="1.2" style="filter: drop-shadow(0 0 6px #f59e0b);">
                            <animateMotion dur="4s" repeatCount="indefinite" path="\${item.pathD}" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" />
                        </circle>
                    </svg>
                \`;
            }

            // Course Unit & Theorem Reference
            const unitRef = document.getElementById('exp-unit-ref');
            if (unitRef) unitRef.innerText = item.unit + " • " + item.unitName;

            const thRef = document.getElementById('exp-theorem-ref');
            if (thRef) thRef.innerText = item.theorem;

            const unitBtn = document.getElementById('exp-unit-btn');
            if (unitBtn) {
                unitBtn.href = item.unitUrl;
                unitBtn.innerHTML = '<span>מעבר לחומרי ' + item.unit + '</span><i class="fa-solid fa-arrow-left text-[10px]"></i>';
            }

            // Left Column Title: Exercise Name
            const nameEl = document.getElementById('exp-integral-name');
            if (nameEl) {
                nameEl.innerHTML = '<i class="fa-solid fa-feather-pointed text-amber-600 text-sm"></i><span>' + item.name + '</span>';
            }

            // Render Active Step in Notebook Sheet
            renderExplorerStepStage();
        }

        function renderExplorerStepStage() {
            const item = INTEGRALS_DATA.find(d => d.id === currentExplorerLevel) || INTEGRALS_DATA[0];
            const stageEl = document.getElementById('exp-step-stage');
            const controlsEl = document.getElementById('exp-step-controls');
            const stepIndicator = document.getElementById('exp-step-indicator');
            if (!stageEl || !controlsEl) return;

            const totalSteps = item.structuredSteps.length;
            const finalStepIdx = totalSteps + 1;

            if (currentExplorerStep === 0) {
                // STEP 0: RAW PROBLEM STATEMENT (Display math directly in front of user's eyes, no scrollbars!)
                if (stepIndicator) {
                    stepIndicator.innerText = "נתוני היסוד של השאלה";
                }

                stageEl.innerHTML = \`
                    <div class="flex flex-col gap-3">
                        <div class="text-xs font-bold text-amber-900 flex items-center gap-1.5" dir="rtl">
                            <i class="fa-solid fa-pencil text-amber-600 text-xs"></i>
                            <span>הפונקציה והאינטגרל לחקירה:</span>
                        </div>
                        
                        <!-- Mathematical Formula directly visible (Clean, centered KaTeX display math, no scrollbar!) -->
                        <div class="bg-white/80 rounded-2xl p-4 border border-amber-200/70 text-center shadow-2xs" dir="ltr">
                            <div class="text-indigo-950 font-bold mb-2">
                                \${renderLatexToHtml(item.func, true)}
                            </div>
                            <div class="text-slate-900 font-bold">
                                \${renderLatexToHtml(item.integral, true)}
                            </div>
                        </div>

                        <!-- Clear Hebrew Pedagogical Description -->
                        <div class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium" dir="rtl">
                            \${item.rawIntro}
                        </div>
                    </div>
                \`;

                controlsEl.innerHTML = \`
                    <span class="font-caveat font-bold text-sm text-slate-500">שלב 0 מתוך \${totalSteps}</span>
                    <button onclick="setExplorerStep(1)" 
                            class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer flex items-center gap-2">
                        <span>לשלב הבא (תחילת הפתרון)</span>
                        <i class="fa-solid fa-arrow-left text-[11px]"></i>
                    </button>
                \`;

            } else if (currentExplorerStep >= 1 && currentExplorerStep <= totalSteps) {
                // STEP 1..N: INDIVIDUAL STEP VIEW (Display math directly, pure Hebrew description, zero scrollbars!)
                const currentStepData = item.structuredSteps[currentExplorerStep - 1];

                if (stepIndicator) {
                    stepIndicator.innerText = "שלב " + currentExplorerStep + " מתוך " + totalSteps;
                }

                stageEl.innerHTML = \`
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center justify-between pb-1 border-b border-amber-200/50" dir="rtl">
                            <span class="font-caveat font-bold text-xl sm:text-2xl text-slate-900">
                                צעד \${currentStepData.stepNum}: \${currentStepData.title}
                            </span>
                        </div>

                        <!-- Dedicated KaTeX Formula Card (Display math, centered, full width, no scrollbars!) -->
                        <div class="bg-white/80 rounded-2xl p-4 border border-amber-200/70 text-center shadow-2xs" dir="ltr">
                            \${renderLatexToHtml(currentStepData.formula, true)}
                        </div>

                        <!-- Pure Hebrew Description -->
                        <div class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium" dir="rtl">
                            \${currentStepData.desc}
                        </div>
                    </div>
                \`;

                const prevAction = currentExplorerStep === 1 ? 'setExplorerStep(0)' : 'prevExplorerStep()';
                const nextLabel = currentExplorerStep === totalSteps ? 'לתוצאה הסופית 🎯' : 'לשלב הבא ←';

                controlsEl.innerHTML = \`
                    <button onclick="\${prevAction}" 
                            class="px-4 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-700 text-xs font-bold border border-amber-200 transition-colors cursor-pointer">
                        → לשלב הקודם
                    </button>
                    <span class="font-caveat font-bold text-base text-amber-800">צעד \${currentExplorerStep} / \${totalSteps}</span>
                    <button onclick="nextExplorerStep()" 
                            class="px-5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer flex items-center gap-1.5">
                        <span>\${nextLabel}</span>
                    </button>
                \`;

            } else {
                // FINAL STEP: CELEBRATORY RESULT & CONVERGENCE OUTCOME
                if (stepIndicator) {
                    stepIndicator.innerText = "תוצאה סופית והתכנסות";
                }

                stageEl.innerHTML = \`
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center justify-between pb-1 border-b border-emerald-200/60" dir="rtl">
                            <span class="font-caveat font-bold text-2xl text-emerald-950 flex items-center gap-1.5">
                                <i class="fa-solid fa-circle-check text-emerald-600 text-base"></i>
                                <span>התוצאה הסופית של האינטגרל:</span>
                            </span>
                        </div>

                        <!-- Large KaTeX Result Card -->
                        <div class="bg-white/90 rounded-2xl p-4 border border-emerald-200/80 text-center shadow-xs" dir="ltr">
                            <div class="text-emerald-900 font-black text-xl sm:text-2xl">
                                \${renderLatexToHtml(item.antiderivative, true)}
                            </div>
                        </div>

                        <!-- Hebrew Summary & Course Theorem Link -->
                        <div class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium" dir="rtl">
                            \${item.finalSummary}
                        </div>
                    </div>
                \`;

                controlsEl.innerHTML = \`
                    <button onclick="prevExplorerStep()" 
                            class="px-4 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-700 text-xs font-bold border border-amber-200 transition-colors cursor-pointer">
                        → לשלב הקודם
                    </button>
                    <button onclick="setExplorerStep(0)" 
                            class="px-4 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition-colors cursor-pointer flex items-center gap-1">
                        <i class="fa-solid fa-rotate-right text-[10px]"></i>
                        <span>חזרה להתחלה</span>
                    </button>
                    <button onclick="nextExplorerLevel()" 
                            class="px-5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer flex items-center gap-1.5">
                        <span>לאינטגרל הבא (\${currentExplorerLevel < 100 ? currentExplorerLevel + 1 : 1}) ←</span>
                    </button>
                \`;
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

        // Keyboard navigation (Escape to close, Left/Right arrows for next/prev)
        document.addEventListener('keydown', (e) => {
            const expView = document.getElementById('integral-explorer-view');
            if (expView && !expView.classList.contains('hidden')) {
                if (e.key === 'Escape') closeIntegralExplorer();
                if (e.key === 'ArrowRight') {
                    if (currentExplorerStep > 0) prevExplorerStep();
                    else prevExplorerLevel();
                }
                if (e.key === 'ArrowLeft') {
                    const item = INTEGRALS_DATA.find(d => d.id === currentExplorerLevel) || INTEGRALS_DATA[0];
                    if (currentExplorerStep <= item.structuredSteps.length) nextExplorerStep();
                    else nextExplorerLevel();
                }
            }
        });

        function toggleGuideCard(e) {
            // Do not toggle if the user clicked an explicit link inside
            if (e && e.target && e.target.closest('a')) return;
            const card = document.getElementById('site-guide-card');
            if (card) {
                card.classList.toggle('is-open');
            }
        }

        // Window load listener to ensure KaTeX renders if active
        window.addEventListener('load', () => {
            if (window.lucide) lucide.createIcons();
            const expView = document.getElementById('integral-explorer-view');
            if (expView && !expView.classList.contains('hidden')) {
                renderExplorerCard();
            }
        });
    </script>

</body>
</html>
`;

fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('Successfully written index.html! File size:', (fs.statSync('index.html').size / 1024 / 1024).toFixed(2), 'MB');
