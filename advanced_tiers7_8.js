const { plot } = require('./plot-helper.js');

const tiers7_8 = [
    // ==========================================
    // TIER 7: יחידות 4 & 5 - המרחב האוקלידי, עקומות ואינטגרלים מרובי משתנים (61–70)
    // ==========================================
    {
        id: 61, tier: 7, tierName: "המרחב האוקלידי ועקומות",
        name: "אורך עקומה: רבע מעגל יחידה במישור האוקלידי",
        func: "f(t) = \\|\\gamma'(t)\\| = \\sqrt{\\sin^2 t + \\cos^2 t} = 1 \\quad (t \\in [0, \\pi/2])",
        integral: "L = \\int_{0}^{\\pi/2} \\|\\gamma'(t)\\|\\,dt",
        antiderivative: "\\frac{\\pi}{2} \\approx 1.571",
        steps: [
            "פרמטריזציה של מעגל היחידה ב-$\\mathbb{R}^2$: $\\gamma(t) = (\\cos t, \\sin t)$ עבור $t \\in [0, \\pi/2]$.",
            "וקטור המהירות: $\\gamma'(t) = (-\\sin t, \\cos t)$, ונורמת המהירות: $\\|\\gamma'(t)\\| = \\sqrt{(-\\sin t)^2 + (\\cos t)^2} = 1$.",
            "נוסחת אורך עקומה ב-$\\mathbb{R}^n$: $L = \\int_0^{\\pi/2} 1\\,dt = [t]_0^{\\pi/2}$.",
            "תוצאה סופית מספרית: אורך רבע המעגל שווה בדיוק ל- $\\frac{\\pi}{2}$."
        ],
        unit: "יחידה 4", unitName: "המרחב האוקלידי", unitUrl: "2_20475_4.html",
        theorem: "הגדרת אורך מסילה גזירה ברציפות במרחב אוקלידי לפי נורמה אוקלידית",
        ...plot(t => 1, 0, Math.PI / 2, 0, 1.2)
    },
    {
        id: 62, tier: 7, tierName: "המרחב האוקלידי ועקומות",
        name: "אורך עקומת סליל הליקס תלת-ממדי במרחב R^3",
        func: "f(t) = \\|\\gamma'(t)\\| = \\sqrt{\\cos^2 t + \\sin^2 t + 1} = \\sqrt{2} \\quad (t \\in [0, 2\\pi])",
        integral: "L = \\int_{0}^{2\\pi} \\sqrt{2}\\,dt",
        antiderivative: "2\\sqrt{2}\\pi \\approx 8.886",
        steps: [
            "עקומת הסליל במרחב $\\mathbb{R}^3$: $\\gamma(t) = (\\cos t, \\sin t, t)$ עבור סיבוב מלא $t \\in [0, 2\\pi]$.",
            "וקטור הנגזרת: $\\gamma'(t) = (-\\sin t, \\cos t, 1)$.",
            "נורמה אוקלידית: $\\|\\gamma'(t)\\| = \\sqrt{(-\\sin t)^2 + (\\cos t)^2 + 1^2} = \\sqrt{1 + 1} = \\sqrt{2}$ (מהירות קבועה!).",
            "תוצאה סופית מספרית: האינטגרל הוא $L = \\int_0^{2\\pi} \\sqrt{2}\\,dt = 2\\sqrt{2}\\pi$."
        ],
        unit: "יחידה 4", unitName: "המרחב האוקלידי", unitUrl: "2_20475_4.html",
        theorem: "חישוב אורך מסילות במרחב האוקלידי התלת-ממדי",
        ...plot(t => Math.SQRT2, 0, 2 * Math.PI, 0, 2)
    },
    {
        id: 63, tier: 7, tierName: "המרחב האוקלידי ועקומות",
        name: "אורך עקומת אסטרואידה שלמה במישור",
        func: "f(t) = 4 \\cdot 3\\sin(t)\\cos(t) = 6\\sin(2t) \\quad (t \\in [0, \\pi/2])",
        integral: "L = 4 \\int_{0}^{\\pi/2} 3\\sin(t)\\cos(t)\\,dt",
        antiderivative: "6",
        steps: [
            "משוואת האסטרואידה: $x^{2/3} + y^{2/3} = 1$, פרמטריזציה: $\\gamma(t) = (\\cos^3 t, \\sin^3 t)$.",
            "נגזרת ברביע הראשון: $\\gamma'(t) = (-3\\cos^2 t \\sin t, 3\\sin^2 t \\cos t)$.",
            "נורמה: $\\|\\gamma'(t)\\| = \\sqrt{9\\cos^4 t\\sin^2 t + 9\\sin^4 t\\cos^2 t} = 3\\sin t\\cos t$.",
            "תוצאה סופית מספרית: $4 \\int_0^{\\pi/2} 3\\sin t\\cos t\\,dt = 12 \\left[\\frac{\\sin^2 t}{2}\\right]_0^{\\pi/2} = 12 \\cdot \\frac{1}{2} = 6$ (תוצאה שלמה מרהיבה!)."
        ],
        unit: "יחידה 4", unitName: "המרחב האוקלידי", unitUrl: "2_20475_4.html",
        theorem: "אורך קשת של עקומות סימטריות חלקות למקוטעין במישור",
        ...plot(t => 3 * Math.sin(t) * Math.cos(t), 0, Math.PI / 2, 0, 1.6)
    },
    {
        id: 64, tier: 7, tierName: "המרחב האוקלידי ועקומות",
        name: "אורך קשת פרבולה סטנדרטית",
        func: "f(x) = \\sqrt{1 + x^2} \\quad (x \\in [0, 1])",
        integral: "L = \\int_{0}^{1} \\sqrt{1+x^2}\\,dx",
        antiderivative: "\\frac{\\sqrt{2} + \\ln(1+\\sqrt{2})}{2} \\approx 1.1478",
        steps: [
            "עבור הפרבולה $y = \\frac{x^2}{2}$, הנגזרת היא $y' = x$. אלמנט האורך: $dL = \\sqrt{1+(y')^2}dx = \\sqrt{1+x^2}dx$.",
            "אינטגרציה בחלקים / הצבה היפרבולית $x = \\sinh(u)$: הקדומה היא $\\frac{1}{2}\\left(x\\sqrt{1+x^2} + \\ln|x+\\sqrt{1+x^2}|\\right)$.",
            "הצבת גבולות בין $0$ ל-$1$: $\\frac{1}{2}(1\\cdot\\sqrt{2} + \\ln(1+\\sqrt{2})) - 0$.",
            "תוצאה סופית מספרית: ערך האורך הוא בדיוק $\\frac{\\sqrt{2} + \\ln(1+\\sqrt{2})}{2}$."
        ],
        unit: "יחידה 4", unitName: "המרחב האוקלידי", unitUrl: "2_20475_4.html",
        theorem: "נוסחת אורך גרף פונקציה ממשית גזירה ברציפות",
        ...plot(x => Math.sqrt(1 + x * x), 0, 1, 1, Math.SQRT2)
    },
    {
        id: 65, tier: 7, tierName: "גבולות ורציפות בכמה משתנים",
        name: "אינטגרל רדיאלי בקואורדינטות קוטביות במישור R^2",
        func: "f(r) = r e^{-r^2} \\quad (r \\in [0, \\infty))",
        integral: "\\int_{0}^{2\\pi} d\\theta \\int_{0}^{\\infty} r e^{-r^2}\\,dr",
        antiderivative: "\\pi \\approx 3.142",
        steps: [
            "מעבר לקואורדינטות קוטביות: $x = r\\cos\\theta, y = r\\sin\\theta$, כאשר היעקוביאן הוא $r$.",
            "פיצול האינטגרלים משיקולי סימטריה מעגלית: $\\left(\\int_0^{2\\pi} d\\theta\\right) \\cdot \\left(\\int_0^\\infty r e^{-r^2}dr\\right)$.",
            "חישוב האינטגרל הרדיאלי בהצבה $u = r^2$: $\\int_0^\\infty r e^{-r^2}dr = \\left[-\\frac{1}{2}e^{-r^2}\\right]_0^\\infty = \\frac{1}{2}$.",
            "תוצאה סופית מספרית: מכפלת הזווית ברדיוס: $2\\pi \\cdot \\frac{1}{2} = \\pi$."
        ],
        unit: "יחידה 5", unitName: "גבולות ורציפות בפונקציות של כמה משתנים", unitUrl: "2_20475_5.html",
        theorem: "קואורדינטות קוטביות במישור והיעקוביאן של העתקה מעגלית",
        ...plot(r => r * Math.exp(-r * r), 0, 3, 0, 0.45)
    },
    {
        id: 66, tier: 7, tierName: "גבולות ורציפות בכמה משתנים",
        name: "נפח כדור היחידה התלת-ממדי מאינטגרל חתכים רוחביים",
        func: "A(z) = \\pi (1 - z^2) \\quad (z \\in [-1, 1])",
        integral: "V = \\int_{-1}^{1} \\pi (1 - z^2)\\,dz",
        antiderivative: "\\frac{4}{3}\\pi \\approx 4.1888",
        steps: [
            "בכל גובה $z \\in [-1, 1]$, החתך של כדור היחידה $x^2+y^2+z^2 \\le 1$ הוא מעגל ברדיוס $r(z) = \\sqrt{1-z^2}$.",
            "שטח החתך המעגלי: $A(z) = \\pi (r(z))^2 = \\pi (1-z^2)$.",
            "אינטגרציה לאורך ציר ה-$z$: $V = 2\\pi \\int_0^1 (1-z^2)dz = 2\\pi \\left[z - \\frac{z^3}{3}\\right]_0^1 = 2\\pi \\cdot \\frac{2}{3}$.",
            "תוצאה סופית מספרית: נפח כדור היחידה שווה בדיוק ל- $\\frac{4}{3}\\pi$."
        ],
        unit: "יחידה 5", unitName: "גבולות ורציפות בפונקציות של כמה משתנים", unitUrl: "2_20475_5.html",
        theorem: "עקרון קוואליירי ואינטגרל חתכים לנפחי גופי סיבוב במרחב",
        ...plot(z => Math.PI * (1 - z * z), -1, 1, 0, Math.PI)
    },
    {
        id: 67, tier: 7, tierName: "גבולות ורציפות בכמה משתנים",
        name: "שטח מעטפת כדור היחידה ב-R^3",
        func: "f(z) = 2\\pi \\quad (z \\in [-1, 1])",
        integral: "S = \\int_{-1}^{1} 2\\pi\\,dz",
        antiderivative: "4\\pi \\approx 12.566",
        steps: [
            "שטח מעטפת סיבוב סביב ציר ה-$z$: $S = \\int_{-1}^1 2\\pi y(z) \\sqrt{1 + (y'(z))^2} dz$.",
            "כיוון ש-$y(z) = \\sqrt{1-z^2}$, הנגזרת היא $y' = -\\frac{z}{\\sqrt{1-z^2}}$.",
            "האלמנט: $y \\sqrt{1+(y')^2} = \\sqrt{1-z^2} \\cdot \\frac{1}{\\sqrt{1-z^2}} = 1$ (ארכימדס: צמצום מושלם!).",
            "תוצאה סופית מספרית: $S = \\int_{-1}^1 2\\pi\\,dz = 2\\pi [1 - (-1)] = 4\\pi$."
        ],
        unit: "יחידה 5", unitName: "גבולות ורציפות בפונקציות של כמה משתנים", unitUrl: "2_20475_5.html",
        theorem: "משפט ארכימדס לשטח מעטפת כדור והטלה גלילית",
        ...plot(z => 2 * Math.PI, -1, 1, 0, 2.5 * Math.PI)
    },
    {
        id: 68, tier: 7, tierName: "גבולות ורציפות בכמה משתנים",
        name: "אינטגרל עבודה בשדה וקטורי משמר במישור R^2",
        func: "f(t) = \\nabla \\phi(\\gamma(t)) \\cdot \\gamma'(t) \\quad (t \\in [0, 1])",
        integral: "W = \\int_{0}^{1} \\nabla \\phi(\\gamma(t)) \\cdot \\gamma'(t)\\,dt",
        antiderivative: "3",
        steps: [
            "שדה משמר הוא גרדיאנט של פונקציית פוטנציאל סקלרית: $F = \\nabla \\phi$.",
            "לפי כלל השרשרת הרב-ממדי: $\\frac{d}{dt} \\phi(\\gamma(t)) = \\nabla \\phi(\\gamma(t)) \\cdot \\gamma'(t)$.",
            "המשפט היסודי למסילות: האינטגרל תלוי אך ורק בנקודות הקצה: $\\phi(B) - \\phi(A)$.",
            "תוצאה סופית מספרית: עבור פוטנציאל עם $\\phi(A) = 2, \\phi(B) = 5$, העבודה היא $5 - 2 = 3$."
        ],
        unit: "יחידה 5", unitName: "גבולות ורציפות בפונקציות של כמה משתנים", unitUrl: "2_20475_5.html",
        theorem: "המשפט היסודי של אינטגרלים קוויים ואי-תלות במסלול בשדות משמרים",
        ...plot(t => 3 * (1 + 0.2 * Math.sin(Math.PI * t)), 0, 1, 0, 4)
    },
    {
        id: 69, tier: 7, tierName: "המרחב האוקלידי ועקומות",
        name: "אי-שוויון קושי-שוורץ לפונקציות במרחב L2",
        func: "f(x) = x, \\quad g(x) = x^2 \\quad (x \\in [0, 1])",
        integral: "\\left(\\int_{0}^{1} x^3\\,dx\\right)^2 \\le \\int_{0}^{1} x^2\\,dx \\cdot \\int_{0}^{1} x^4\\,dx",
        antiderivative: "\\frac{1}{16} \\le \\frac{1}{15} \\quad (\\text{אימות מדויק!})",
        steps: [
            "אי-שוויון קושי-שוורץ במרחב הילברט: $\\left(\\int_0^1 f(x)g(x)dx\\right)^2 \\le \\int_0^1 f(x)^2 dx \\int_0^1 g(x)^2 dx$.",
            "חישוב אגף שמאל: $\\int_0^1 x^3 dx = \\frac{1}{4} \\Rightarrow \\left(\\frac{1}{4}\\right)^2 = \\frac{1}{16} = 0.0625$.",
            "חישוב אגף ימין: $\\int_0^1 x^2 dx = \\frac{1}{3}, \\int_0^1 x^4 dx = \\frac{1}{5} \\Rightarrow \\frac{1}{3} \\cdot \\frac{1}{5} = \\frac{1}{15} \\approx 0.0667$.",
            "תוצאה סופית מספרית: $\\frac{1}{16} \\le \\frac{1}{15}$ - אימות מספרי מוחלט לאי-שוויון קושי-שוורץ!"
        ],
        unit: "יחידה 4", unitName: "המרחב האוקלידי", unitUrl: "2_20475_4.html",
        theorem: "אי-שוויון קושי-שוורץ במרחבים וקטוריים נורמיים",
        ...plot(x => x * x * x, 0, 1, 0, 1)
    },
    {
        id: 70, tier: 7, tierName: "גבולות ורציפות בכמה משתנים",
        name: "אינטגרל פוטנציאל גרביטציוני ניוטוני במרחב",
        func: "f(r) = \\frac{1}{r^2} \\quad (r \\in [1, \\infty))",
        integral: "U = \\int_{1}^{\\infty} \\frac{1}{r^2}\\,dr",
        antiderivative: "1",
        steps: [
            "כוח המשיכה הניוטוני דועך ביחס ריבועי למרחק במרחב $\\mathbb{R}^3$: $F(r) \\propto \\frac{1}{r^2}$.",
            "הפוטנציאל שווה לעבודת ההבאה מאינסוף אל המרחק $R=1$: $U = \\int_1^\\infty \\frac{dr}{r^2}$.",
            "הקדומה היא $F(r) = -\\frac{1}{r}$. הצבת גבולות: $0 - (-1) = 1$.",
            "תוצאה סופית מספרית: פוטנציאל הכבידה מנורמל שווה בדיוק ל- $1$."
        ],
        unit: "יחידה 5", unitName: "גבולות ורציפות בפונקציות של כמה משתנים", unitUrl: "2_20475_5.html",
        theorem: "פוטנציאל ניוטוני והתכנסות אנרגיה במרחב התלת-ממדי",
        ...plot(r => 1 / (r * r), 1, 5, 0, 1)
    },

    // ==========================================
    // TIER 8: יחידה 6 - נגזרות חלקיות וגזירה תחת סימן האינטגרל (71–80)
    // ==========================================
    {
        id: 71, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "אינטגרל דיריכלה המלכותי: שיטת פיינמן וגזירה תחת האינטגרל",
        func: "f(x) = \\frac{\\sin x}{x} \\quad (x \\in [0, \\infty))",
        integral: "\\int_{0}^{\\infty} \\frac{\\sin x}{x}\\,dx",
        antiderivative: "\\frac{\\pi}{2} \\approx 1.571",
        steps: [
            "נגדיר אינטגרל תלוי פרמטר: $I(\\alpha) = \\int_0^\\infty e^{-\\alpha x} \\frac{\\sin x}{x} dx$ עבור $\\alpha \\ge 0$.",
            "נגזור תחת סימן האינטגרל לפי $\\alpha$: $I'(\\alpha) = \\int_0^\\infty -e^{-\\alpha x} \\sin x\\,dx = -\\frac{1}{\\alpha^2 + 1}$.",
            "אינטגרציה על הנגזרת: $I(\\alpha) = -\\arctan(\\alpha) + C$. כיוון ש-$I(\\infty) = 0$, נקבל $C = \\frac{\\pi}{2}$.",
            "תוצאה סופית מספרית: בהצבת $\\alpha = 0$ נקבל את אינטגרל דיריכלה: $I(0) = \\frac{\\pi}{2}$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "כלל לייבניץ לגזירה תחת סימן האינטגרל (טכניקת פיינמן)",
        ...plot(x => x === 0 ? 1 : Math.sin(x) / x, 0, 10, -0.25, 1)
    },
    {
        id: 72, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "אינטגרל פריולאני (Frullani's Integral)",
        func: "f(x) = \\frac{e^{-x} - e^{-2x}}{x} \\quad (x \\in (0, \\infty))",
        integral: "\\int_{0}^{\\infty} \\frac{e^{-x} - e^{-2x}}{x}\\,dx",
        antiderivative: "\\ln(2) \\approx 0.693",
        steps: [
            "נוסחת פריולאני הכללית: $\\int_0^\\infty \\frac{f(a x) - f(b x)}{x} dx = (f(\\infty) - f(0))\\ln(a/b)$.",
            "כאן $f(t) = e^{-t}$ כאשר $a = 1$ ו-$b = 2$.",
            "הערכים בקצוות: $f(0) = e^0 = 1$ ו-$f(\\infty) = \\lim_{t\\to\\infty} e^{-t} = 0$.",
            "תוצאה סופית מספרית: $(0 - 1) \\ln(1/2) = -(-\\ln 2) = \\ln(2)$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "משפט האינטגרל של פריולאני למנות הפרשים אינפיניטסימליות",
        ...plot(x => (Math.exp(-x) - Math.exp(-2 * x)) / x, 0.05, 5, 0, 0.4)
    },
    {
        id: 73, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "גזירת אינטגרל גאוס לפי פרמטר: x בריבוע כפול גאוסיאן",
        func: "f(x) = x^2 e^{-x^2} \\quad (x \\in (-\\infty, \\infty))",
        integral: "\\int_{-\\infty}^{\\infty} x^2 e^{-x^2}\\,dx",
        antiderivative: "\\frac{\\sqrt{\\pi}}{2} \\approx 0.886",
        steps: [
            "נגדיר את אינטגרל גאוס עם פרמטר $\\alpha > 0$: $I(\\alpha) = \\int_{-\\infty}^\\infty e^{-\\alpha x^2}dx = \\sqrt{\\frac{\\pi}{\\alpha}}$.",
            "נגזור לפי $\\alpha$ באמצעות כלל לייבניץ: $I'(\\alpha) = \\int_{-\\infty}^\\infty -x^2 e^{-\\alpha x^2}dx$.",
            "גזירת האגף הימני: $\\frac{d}{d\\alpha}\\left(\\sqrt{\\pi}\\alpha^{-1/2}\\right) = -\\frac{\\sqrt{\\pi}}{2}\\alpha^{-3/2}$.",
            "תוצאה סופית מספרית: בהצבת $\\alpha = 1$ וביטול המינוס: $\\int_{-\\infty}^\\infty x^2 e^{-x^2}dx = \\frac{\\sqrt{\\pi}}{2}$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "גזירה תחת סימן האינטגרל בקרניים אינסופיות עם התכנסות במידה שווה",
        ...plot(x => x * x * Math.exp(-x * x), -3, 3, 0, 0.4)
    },
    {
        id: 74, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "אינטגרל פיינמן הקלאסי: (x בריבוע פחות 1) חלקי לאן x",
        func: "f(x) = \\frac{x^2 - 1}{\\ln x} \\quad (x \\in (0, 1))",
        integral: "\\int_{0}^{1} \\frac{x^2 - 1}{\\ln x}\\,dx",
        antiderivative: "\\ln(3) \\approx 1.099",
        steps: [
            "נכליל את האינטגרל באמצעות פרמטר: $I(\\alpha) = \\int_0^1 \\frac{x^\\alpha - 1}{\\ln x}dx$ עבור $\\alpha \\ge 0$.",
            "נגזור לפי הפרמטר $\\alpha$: $I'(\\alpha) = \\int_0^1 \\frac{x^\\alpha \\ln x}{\\ln x}dx = \\int_0^1 x^\\alpha dx = \\frac{1}{\\alpha + 1}$.",
            "אינטגרציה לפי $\\alpha$: $I(\\alpha) = \\ln(\\alpha + 1) + C$. כיוון ש-$I(0) = \\int_0^1 0\\,dx = 0$, נקבל $C = 0$.",
            "תוצאה סופית מספרית: בהצבת $\\alpha = 2$ נקבל בדיוק $\\ln(2+1) = \\ln(3)$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "שיטת ריצ'רד פיינמן לחילוץ לוגריתמים במכנה באמצעות פרמטריזציה",
        ...plot(x => (x * x - 1) / Math.log(x), 0.02, 0.98, 0, 2)
    },
    {
        id: 75, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "גזירת אינטגרל עם גבול משתנה: כלל השרשרת המשולב",
        func: "F(x) = \\int_{0}^{x^2} \\sin(t^2)\\,dt \\quad (x \\in [0, 1.5])",
        integral: "\\frac{d}{dx} \\int_{0}^{x^2} \\sin(t^2)\\,dt",
        antiderivative: "2x \\sin(x^4)",
        steps: [
            "נגדיר $G(u) = \\int_0^u \\sin(t^2)dt$. לפי המשפט היסודי של החדו\"א: $G'(u) = \\sin(u^2)$.",
            "הפונקציה המבוקשת היא הרכבה: $F(x) = G(u(x))$ כאשר $u(x) = x^2$.",
            "לפי כלל השרשרת: $F'(x) = G'(u(x)) \\cdot u'(x) = \\sin((x^2)^2) \\cdot (2x)$.",
            "תוצאה סופית אנליטית: הנגזרת שווה ל- $2x \\sin(x^4)$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "גזירת פונקציה המוגדרת על ידי אינטגרל עם גבולות משתנים",
        ...plot(t => Math.sin(t * t), 0, 2, -1, 1)
    },
    {
        id: 76, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "כלל לייבניץ המלא: גבול משתנה ואינטגרנד תלוי פרמטר",
        func: "I(\\alpha) = \\int_{0}^{\\alpha} \\sqrt{\\alpha^2 - x^2}\\,dx \\quad (\\alpha > 0)",
        integral: "\\frac{d}{d\\alpha} \\int_{0}^{\\alpha} \\sqrt{\\alpha^2 - x^2}\\,dx",
        antiderivative: "\\frac{\\pi \\alpha}{2}",
        steps: [
            "האינטגרל מייצג שטח רבע מעגל ברדיוס $\\alpha$: $I(\\alpha) = \\frac{\\pi \\alpha^2}{4}$.",
            "נגזרת ישירה לפי $\\alpha$: $\\frac{d}{d\\alpha}\\left(\\frac{\\pi \\alpha^2}{4}\\right) = \\frac{\\pi \\alpha}{2}$.",
            "אימות לפי נוסחת לייבניץ: $f(\\alpha, \\alpha)\\cdot 1 + \\int_0^\\alpha \\frac{\\partial}{\\partial \\alpha}\\sqrt{\\alpha^2-x^2}dx = 0 + \\int_0^\\alpha \\frac{\\alpha}{\\sqrt{\\alpha^2-x^2}}dx = \\alpha [\\arcsin(x/\\alpha)]_0^\\alpha = \\frac{\\pi\\alpha}{2}$.",
            "תוצאה סופית מספרית: התאמה מוחלטת: $\\frac{\\pi\\alpha}{2}$ (עבור $\\alpha=1$: $\\frac{\\pi}{2}$)."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "נוסחת לייבניץ המלאה לגזירת אינטגרל עם גבולות עליונים ותחתונים תלויים",
        ...plot(x => Math.sqrt(1 - x * x), 0, 1, 0, 1)
    },
    {
        id: 77, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "אינטגרל פואסון הלוגריתמי: התאפסות מעגלית",
        func: "f(x) = \\ln(1 - 2a\\cos x + a^2) \\quad (a = 0.5, x \\in [0, \\pi])",
        integral: "\\int_{0}^{\\pi} \\ln(1 - 2a\\cos x + a^2)\\,dx",
        antiderivative: "0 \\quad (|a| < 1)",
        steps: [
            "זהו אינטגרל פואסון המפורסם עבור $|a| < 1$. נגדיר $I(a) = \\int_0^\\pi \\ln(1-2a\\cos x + a^2)dx$.",
            "נגזור לפי $a$: $I'(a) = \\int_0^\\pi \\frac{2a - 2\\cos x}{1 - 2a\\cos x + a^2}dx$.",
            "אינטגרל הנגזרת מתאפס זהותית לכל $|a| < 1$ (בזכות הרחבה מרוכבת או אינטגרציה מעגלית).",
            "תוצאה סופית מספרית: מכיוון ש-$I(0) = \\int_0^\\pi \\ln(1)dx = 0$ והנגזרת מתאפסת, הערך הוא תמיד $0$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "אינטגרל פואסון לפונקציות הרמוניות ומשפט הערך הממוצע של גאוס",
        ...plot(x => Math.log(1.25 - Math.cos(x)), 0, Math.PI, -1.5, 1)
    },
    {
        id: 78, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "התמרת לפלס של סינוס: אינטגרל מעריכי עם פרמטר s",
        func: "f(t) = e^{-s t} \\sin(\\omega t) \\quad (s = 1, \\omega = 2, t \\in [0, \\infty))",
        integral: "\\int_{0}^{\\infty} e^{-s t} \\sin(\\omega t)\\,dt",
        antiderivative: "\\frac{\\omega}{s^2 + \\omega^2} = \\frac{2}{1^2+2^2} = \\frac{2}{5} = 0.4",
        steps: [
            "נפעיל אינטגרציה בחלקים פעמיים ברציפות (אינטגרל מעגלי קלאסי).",
            "קדומה: $\\int e^{-st}\\sin(\\omega t)dt = \\frac{e^{-st}}{s^2+\\omega^2}(-s\\sin(\\omega t) - \\omega\\cos(\\omega t))$.",
            "הצבת הגבולות: באינסוף האקספוננט $e^{-st} \\to 0$ (עבור $s>0$), ובאפס נקבל $-\\frac{1}{s^2+\\omega^2}(0 - \\omega) = \\frac{\\omega}{s^2+\\omega^2}$.",
            "תוצאה סופית מספרית: עבור $s=1, \\omega=2$, הערך הוא בדיוק $\\frac{2}{5} = 0.4$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "התמרת לפלס וגזירות חלקיות של אופרטורים אינטגרליים",
        ...plot(t => Math.exp(-t) * Math.sin(2 * t), 0, 5, -0.2, 0.45)
    },
    {
        id: 79, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "משפט קלארו לפונקציונל: שוויון נגזרות חלקיות מעורבות",
        func: "f(x, \\alpha, \\beta) = \\cos(\\alpha x + \\beta) \\quad (x \\in [0, 1])",
        integral: "\\frac{\\partial^2}{\\partial \\alpha \\partial \\beta} \\int_{0}^{1} \\cos(\\alpha x + \\beta)\\,dx",
        antiderivative: "-\\frac{1}{2} = -0.5 \\quad (\\text{בנקודה } \\alpha=0, \\beta=0)",
        steps: [
            "אינטגרל הפונקציה: $\\Phi(\\alpha, \\beta) = \\int_0^1 \\cos(\\alpha x + \\beta)dx$.",
            "לפי משפט קלארו, כיוון שהנגזרות החלקיות רציפות במלבן, $\\frac{\\partial^2 \\Phi}{\\partial \\alpha \\partial \\beta} = \\frac{\\partial^2 \\Phi}{\\partial \\beta \\partial \\alpha}$.",
            "נגזרת תחת האינטגרל: $\\int_0^1 \\frac{\\partial^2}{\\partial \\alpha \\partial \\beta}\\cos(\\alpha x + \\beta)dx = \\int_0^1 -x\\cos(\\alpha x + \\beta)dx$.",
            "תוצאה סופית מספרית: בנקודה $(0, 0)$: $\\int_0^1 -x\\cos(0)dx = -\\int_0^1 x\\,dx = -\\frac{1}{2}$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "משפט שוורץ (קלארו) לשוויון נגזרות חלקיות מעורבות תחת אינטגרל",
        ...plot(x => -x, 0, 1, -1, 0)
    },
    {
        id: 80, tier: 8, tierName: "נגזרות חלקיות וכלל לייבניץ",
        name: "אינטגרל פיינמן מתקדם: הפרש ארקטנגנס חלקי x",
        func: "f(x) = \\frac{\\arctan(\\pi x) - \\arctan(x)}{x} \\quad (x \\in (0, \\infty))",
        integral: "\\int_{0}^{\\infty} \\frac{\\arctan(\\pi x) - \\arctan(x)}{x}\\,dx",
        antiderivative: "\\frac{\\pi}{2}\\ln(\\pi) \\approx 1.798",
        steps: [
            "נגדיר $I(a) = \\int_0^\\infty \\frac{\\arctan(a x) - \\arctan(x)}{x}dx$ עבור $a > 0$.",
            "נגזור לפי $a$: $I'(a) = \\int_0^\\infty \\frac{1}{x} \\cdot \\frac{x}{1+a^2 x^2} dx = \\int_0^\\infty \\frac{dx}{1+(a x)^2} = \\left[\\frac{\\arctan(a x)}{a}\\right]_0^\\infty = \\frac{\\pi}{2a}$.",
            "אינטגרציה לפי $a$: $I(a) = \\frac{\\pi}{2}\\ln(a) + C$. כיוון ש-$I(1) = 0$, נקבל $C = 0$.",
            "תוצאה סופית מספרית: בהצבת $a = \\pi$: ערך האינטגרל הוא $\\frac{\\pi}{2}\\ln(\\pi) \\approx 1.798$."
        ],
        unit: "יחידה 6", unitName: "נגזרות חלקיות", unitUrl: "2_20475_6.html",
        theorem: "אינטגרל פריולאני לאלמנטים טריגונומטריים הפוכים",
        ...plot(x => (Math.atan(Math.PI * x) - Math.atan(x)) / x, 0.05, 5, 0, 1.2)
    }
];

module.exports = tiers7_8;
