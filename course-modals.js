/**
 * course-modals.js - חשבון אינפיניטסימלי 2 (20475)
 * מערכת מודאלים אוטונומית ב-Vanilla JS לניהול חוויית משתמש:
 * 1. מדריך כניסה ראשונה (Welcome Roadmap Modal) - מותאם אישית לפדגוגיה, לצבעי הוורוד-ענבר (Rose/Amber) ולמפת הלימוד של אינפי 2.
 * 2. חלון שיתוף ומאגר הקורסים הראשי (Share Modal) - מופיע לגולשים חוזרים מעל 24 שעות וחוזר מדי 5 ימים בלבד.
 * 
 * הכל מנוהל בצורה פרטית ב-localStorage ללא מעקב חיצוני וללא שום שרת.
 */

(function () {
    'use strict';

    const STORAGE_KEYS = {
        FIRST_SEEN: 'infi2_modal_first_seen_ts',
        WELCOME_SHOWN: 'infi2_welcome_modal_shown',
        LAST_SHARE_POPUP: 'infi2_last_share_popup_ts',
        SHARE_DISMISSED: 'infi2_share_modal_dismissed'
    };

    const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;
    const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

    /* ==========================================================================
       1. הזרקת עיצובים חדים (CSS) מותאמים לפלטת Rose / Amber של אינפי 2
       ========================================================================== */
    function injectStyles() {
        if (document.getElementById('infi2-modals-styles')) return;

        const styleEl = document.createElement('style');
        styleEl.id = 'infi2-modals-styles';
        styleEl.textContent = `
            /* אנימציות כניסה ויציאה */
            @keyframes infi2FadeInBackdrop {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes infi2ScaleInModal {
                from { opacity: 0; transform: scale(0.93) translateY(18px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes infi2PulseGlow {
                0%, 100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.22); }
                50% { box-shadow: 0 0 35px rgba(37, 99, 235, 0.35); }
            }
            @keyframes infi2RainbowSpin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes infi2ToastSlide {
                from { opacity: 0; transform: translate(-50%, -20px); }
                to { opacity: 1; transform: translate(-50%, 0); }
            }

            /* מעטפת הרקע (Backdrop) */
            .infi2-backdrop {
                position: fixed;
                inset: 0;
                background: rgba(15, 23, 42, 0.68);
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
                z-index: 99999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 16px;
                opacity: 0;
                animation: infi2FadeInBackdrop 0.25s ease-out forwards;
                font-family: 'Heebo', 'Rubik', system-ui, -apple-system, sans-serif;
                direction: rtl;
                text-align: right;
                box-sizing: border-box;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            .infi2-backdrop * {
                box-sizing: border-box;
            }

            /* כרטיס המודאל - מותאם באופן מלא לפלטת הצבעים של הקורס */
            .infi2-modal-card {
                position: relative;
                width: 100%;
                background: #ffffff;
                border: 1.5px solid #bfdbfe;
                border-radius: 22px;
                box-shadow: 0 20px 50px -10px rgba(15, 23, 42, 0.4), 0 0 25px rgba(37, 99, 235, 0.22);
                display: flex;
                flex-direction: column;
                max-height: 88vh;
                opacity: 0;
                animation: infi2ScaleInModal 0.3s ease-out forwards;
                overflow: hidden;
                transform: none !important;
            }

            /* גדלים מותאמים */
            .infi2-modal-card.welcome-size {
                max-width: 800px;
            }
            .infi2-modal-card.share-size {
                max-width: 520px;
            }

            /* כפתור סגירה X */
            .infi2-close-btn {
                position: absolute;
                top: 14px;
                left: 14px;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: #f1f5f9;
                border: 1px solid #cbd5e1;
                color: #334155;
                font-size: 18px;
                font-weight: 700;
                line-height: 1;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;
                z-index: 10;
            }
            .infi2-close-btn:hover {
                background: #ef4444;
                color: #ffffff;
                border-color: #ef4444;
                transform: rotate(90deg);
            }

            /* כותרת עליונה */
            .infi2-header {
                padding: 22px 26px 14px 26px;
                border-bottom: 1px solid #bfdbfe;
                background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);
                position: relative;
                flex-shrink: 0;
            }

            .infi2-badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 12px;
                border-radius: 9999px;
                font-size: 12.5px;
                font-weight: 800;
                background: #eff6ff;
                color: #1d4ed8;
                border: 1px solid #bfdbfe;
                margin-bottom: 8px;
            }

            .infi2-title {
                margin: 0 0 4px 0;
                font-size: 20px;
                font-weight: 900;
                color: #1d4ed8;
                line-height: 1.3;
            }

            .infi2-subtitle {
                margin: 0;
                font-size: 13.5px;
                color: #475569;
                line-height: 1.45;
            }

            /* גוף המודאל עם גלילה נעימה */
            .infi2-body {
                padding: 18px 26px;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                flex-grow: 1;
            }

            /* כרטיס מדריך ראשי מעוצב */
            .infi2-guide-card {
                background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
                border: 1px solid #bfdbfe;
                border-radius: 14px;
                padding: 14px 16px;
                margin-bottom: 18px;
            }

            .infi2-guide-title {
                font-size: 14.5px;
                font-weight: 800;
                color: #1d4ed8;
                margin-bottom: 4px;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .infi2-guide-text {
                font-size: 13.5px;
                color: #334155;
                line-height: 1.55;
                margin: 0;
            }

            /* רשימת האקורדיונים - פריטים סגורים במבנה מעטפה ("תיבת מכתב") */
            .infi2-acc-container {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 12px;
            }

            .infi2-acc-item {
                border: 1.5px solid #e2e8f0;
                background: #ffffff;
                border-radius: 14px;
                transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
                overflow: hidden;
                flex-shrink: 0;
            }
            .infi2-acc-item:hover {
                border-color: #bfdbfe;
                background: #eff6ff;
                box-shadow: 0 4px 14px rgba(37, 99, 235, 0.22);
            }
            .infi2-acc-item.open {
                border-color: #2563eb;
                box-shadow: 0 4px 18px rgba(37, 99, 235, 0.22);
                background: #ffffff;
            }

            /* כפתור כותרת אקורדיון */
            .infi2-acc-header {
                width: 100%;
                background: none;
                border: none;
                padding: 13px 16px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                text-align: right;
                gap: 12px;
                font-family: inherit;
                transition: background-color 0.15s ease;
            }

            .infi2-acc-header-left {
                display: flex;
                align-items: center;
                gap: 12px;
                flex: 1;
                min-width: 0;
            }

            .infi2-acc-icon {
                font-size: 20px;
                width: 38px;
                height: 38px;
                border-radius: 10px;
                background: #eff6ff;
                border: 1px solid #bfdbfe;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .infi2-acc-header-text {
                flex: 1;
                min-width: 0;
            }

            .infi2-acc-name {
                font-size: 14.5px;
                font-weight: 800;
                color: #0f172a;
                line-height: 1.35;
                margin-bottom: 2px;
            }
            .infi2-acc-item.open .infi2-acc-name {
                color: #1d4ed8;
            }

            .infi2-acc-snippet {
                font-size: 12.5px;
                color: #64748b;
                line-height: 1.4;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .infi2-acc-chevron {
                font-size: 12px;
                color: #94a3b8;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.25s ease, color 0.2s ease, background 0.2s ease;
                flex-shrink: 0;
            }
            .infi2-acc-item.open .infi2-acc-chevron {
                transform: rotate(180deg);
                color: #2563eb;
                background: #eff6ff;
            }

            /* תוכן אקורדיון מורחב */
            .infi2-acc-content {
                display: none;
                padding: 0 18px 16px 18px;
                animation: infi2FadeInBackdrop 0.2s ease-out forwards;
            }
            .infi2-acc-item.open .infi2-acc-content {
                display: block;
            }

            .infi2-acc-desc {
                font-size: 13.5px;
                color: #0f172a;
                line-height: 1.65;
                padding-top: 12px;
                border-top: 1px dashed #bfdbfe;
            }

            .infi2-acc-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin: 12px 0 8px 0;
            }

            .infi2-tag {
                font-size: 11.5px;
                font-weight: 700;
                background: #eff6ff;
                color: #1d4ed8;
                border: 1px solid #bfdbfe;
                padding: 2px 10px;
                border-radius: 9999px;
            }

            .infi2-acc-action-btn {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 12.5px;
                font-weight: 800;
                color: #ffffff;
                background: #2563eb;
                padding: 6px 14px;
                border-radius: 8px;
                text-decoration: none;
                margin-top: 6px;
                transition: background 0.15s ease, transform 0.15s ease;
            }
            .infi2-acc-action-btn:hover {
                background: #1d4ed8;
                transform: translateX(-2px);
            }

            /* חלק תחתון (Footer) */
            .infi2-footer {
                padding: 14px 26px;
                border-top: 1px solid #e2e8f0;
                background: #f8fafc;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                flex-wrap: wrap;
                flex-shrink: 0;
            }

            .infi2-footer-notice {
                font-size: 12.5px;
                color: #475569;
                font-weight: 600;
                line-height: 1.45;
                flex: 1;
                min-width: 220px;
            }

            .infi2-btn-row {
                display: flex;
                gap: 8px;
                align-items: center;
            }

            .infi2-btn-primary {
                background: #2563eb;
                color: #ffffff;
                border: none;
                padding: 8px 18px;
                border-radius: 10px;
                font-size: 13.5px;
                font-weight: 800;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                transition: background 0.15s ease, transform 0.15s ease;
            }
            .infi2-btn-primary:hover {
                background: #1d4ed8;
                transform: translateY(-1px);
            }

            .infi2-btn-secondary {
                background: #ffffff;
                border: 1.5px solid #cbd5e1;
                color: #334155;
                padding: 8px 14px;
                border-radius: 10px;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                transition: all 0.15s ease;
            }
            .infi2-btn-secondary:hover {
                background: #f1f5f9;
                border-color: #94a3b8;
            }

            .infi2-btn-success {
                background: #10b981 !important;
                border-color: #10b981 !important;
                color: #ffffff !important;
            }

            /* כרטיס שיתוף מיוחד */
            .infi2-share-hub-card {
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 14px 16px;
                background: #eff6ff;
                border: 1.5px solid #bfdbfe;
                border-radius: 14px;
                text-decoration: none;
                margin-top: 14px;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .infi2-share-hub-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 18px rgba(37, 99, 235, 0.22);
            }

            /* הודעת טוסט (Toast) */
            .infi2-toast {
                position: fixed;
                top: 24px;
                left: 50%;
                transform: translateX(-50%);
                background: #0f172a;
                color: #ffffff;
                padding: 12px 24px;
                border-radius: 9999px;
                font-size: 14px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 8px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
                border: 1px solid #2563eb;
                z-index: 100000;
                animation: infi2ToastSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }

            /* רספונסיביות למובייל */
            @media (max-width: 640px) {
                .infi2-header {
                    padding: 20px 20px 14px 20px;
                }
                .infi2-title {
                    font-size: 18px;
                }
                .infi2-body {
                    padding: 16px 18px;
                }
                .infi2-footer {
                    padding: 14px 18px 18px 18px;
                }
                .infi2-btn-row {
                    flex-direction: column;
                    width: 100%;
                }
                .infi2-btn-primary, .infi2-btn-secondary {
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(styleEl);
    }

    /* ==========================================================================
       2. מערכת הצגת התראות טוסט (Toast Notifications)
       ========================================================================== */
    function showToast(message, emoji = '✓') {
        const existing = document.querySelector('.infi2-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'infi2-toast';
        toast.innerHTML = `<span>${emoji}</span> <span>${message}</span>`;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    /* ==========================================================================
       3. לוגיקת העתקת קישור ללוח
       ========================================================================== */
    function copyCourseLink(btnElement) {
        // קישור ישיר לדף הראשי של האתר - נטו קישור בלבד ללא טקסט נלווה
        const baseUrl = 'https://infi2-9rg.pages.dev/';

        const handleSuccess = () => {
            showToast('הקישור הועתק ללוח: ' + baseUrl, '📋');
            if (btnElement) {
                const origHtml = btnElement.innerHTML;
                btnElement.classList.add('infi2-btn-success');
                btnElement.innerHTML = `<span>✓</span> <span>הקישור הועתק!</span>`;
                setTimeout(() => {
                    btnElement.classList.remove('infi2-btn-success');
                    btnElement.innerHTML = origHtml;
                }, 2500);
            }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(baseUrl).then(handleSuccess).catch(() => {
                fallbackCopy(baseUrl, handleSuccess);
            });
        } else {
            fallbackCopy(baseUrl, handleSuccess);
        }
    }

    function fallbackCopy(text, callback) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '-9999px';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            if (callback) callback();
        } catch (e) {
            alert('העתק את הקישור מטה:\n\n' + text);
        }
        document.body.removeChild(textArea);
    }

    /* ==========================================================================
       4. יצירת חלון כניסה ראשונה (Welcome Roadmap Modal)
       ========================================================================== */
    function createWelcomeModal() {
        injectStyles();

        // הסרת מודאל קיים אם פתוח
        const existing = document.getElementById('infi2-welcome-backdrop');
        if (existing) existing.remove();

        const backdrop = document.createElement('div');
        backdrop.id = 'infi2-welcome-backdrop';
        backdrop.className = 'infi2-backdrop';

        backdrop.innerHTML = `
            <div class="infi2-modal-card welcome-size" role="dialog" aria-modal="true" aria-labelledby="infi2-welcome-title">
                <button type="button" class="infi2-close-btn" id="infi2-welcome-close-x" aria-label="סגור חלון">✕</button>

                <div class="infi2-header">
                    <div class="infi2-badge">
                        <span>🧭</span>
                        <span>מדריך התמצאות ולמידה בקורס</span>
                    </div>
                    <h2 class="infi2-title" id="infi2-welcome-title">חשבון אינפיניטסימלי 2 (20475)</h2>
                    <p class="infi2-subtitle">הסבר על מבנה האתר, מצבי הלימוד ביחידות, תרגול השאלות ומאגרי הבחינות</p>
                </div>

                <div class="infi2-body">
                    <div class="infi2-guide-card">
                        <div class="infi2-guide-title">
                            <span>💡</span>
                            <span>איך ללמוד ולהצליח בקורס</span>
                        </div>
                        <p class="infi2-guide-text">
                            כל הסעיפים מטה מוצגים כתיבות מכתב סגורות ומסודרות. לחצו על כל סעיף כדי לפתוח אותו ולקבל פירוט מלא על אופן הפעולה, הכלים והיתרונות המובנים בו:
                        </p>
                    </div>

                    <div class="infi2-acc-container">
                        <!-- פריט 1: פרקי הלימוד (סגור בהתחלה) -->
                        <div class="infi2-acc-item" id="infi2-acc-1">
                            <button type="button" class="infi2-acc-header" onclick="window.__infi2ToggleAcc(1)">
                                <div class="infi2-acc-header-left">
                                    <div class="infi2-acc-icon">📚</div>
                                    <div class="infi2-acc-header-text">
                                        <div class="infi2-acc-name">1. פרקי הלימוד ואופן הלמידה המובנה</div>
                                        <div class="infi2-acc-snippet">כיסוי מלא של סילבוס הקורס, מצבי תצוגה מותאמים ושאלות הכוונה עצמית</div>
                                    </div>
                                </div>
                                <div class="infi2-acc-chevron">▼</div>
                            </button>
                            <div class="infi2-acc-content">
                                <div class="infi2-acc-desc">
                                    כיסוי של 7 יחידות הלימוד (אינטגרל מסוים, אינטגרלים לא-אמיתיים, טורי פונקציות והתכנסות במידה שווה, טורי חזקות וטיילור, פונקציות רב-משתניות, דיפרנציאביליות, ואינטגרלים כפולים ומשולשים).
                                    
                                <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 12px 14px; margin: 10px 0;">
                                    <strong style="color: #1d4ed8; font-size: 14px; display: block; margin-bottom: 6px;">🎚️ 3 מצבי התצוגה המובנים בראש כל פרק:</strong>
                                    <p style="margin: 0 0 8px 0; font-size: 13px; line-height: 1.55; color: #334155;">
                                        בראש כל פרק יש כפתור מעבר בין שלושה מצבי תצוגה שמותאמים לשלבי הלימוד השונים:
                                    </p>
                                    <ul style="margin: 0; padding-right: 18px; line-height: 1.7; font-size: 13px; color: #1e293b;">
                                        <li><strong>🏛️ מצב פורמלי:</strong> הגדרות מתמטיות ריגורוזיות, תנאי סף, ניסוחי משפטים מדויקים והוכחות מלאות שלב-אחר-שלב. <em>מתי להשתמש:</em> כשרוצים לדעת בדיוק איך לנסח תשובה תקנית ומלאה במבחן, עם כל התנאים והנימוקים שהבודקים דורשים.</li>
                                        <li><strong>📖 בגובה העיניים:</strong> פירוק הרעיונות המופשטים להסברים נגישים וברורים בגובה העיניים, בליווי אנלוגיות ותרשימים שמסבירים "מה זה בעצם אומר בתכל'ס". <em>איך לעבוד איתו:</em> במפגש ראשון עם הגדרה או משפט חדש כדי לבנות אינטואיציה פנימית מוצקה לפני הצלילה לנוסחאות.</li>
                                        <li><strong>⚡ משפטים נטו:</strong> תמצית חדה וממוקדת של כל המשפטים, הטענות, תנאי הבדיקה והנוסחאות בלבד, ללא הוכחות והסברים ארוכים. <em>מתי להשתמש:</em> בחזרות ממוקדות לפני מבחן, שינון מהיר ושליפת תבניות פתרון בזמן תרגול.</li>
                                    </ul>
                                </div>
                                </div>
                                <div class="infi2-acc-tags">
                                    <span class="infi2-tag">כיסוי מלא של הסילבוס</span>
                                    <span class="infi2-tag">מצבי תצוגה מובנים</span>
                                    <span class="infi2-tag">שאלות הכוונה עצמית ❓</span>
                                </div>
                                <a href="2_20475_1.html" class="infi2-acc-action-btn">
                                    <span>כניסה ליחידה 1: האינטגרל המסוים</span>
                                    <span>←</span>
                                </a>
                            </div>
                        </div>

                        <!-- פריט 2: הסימולציות והעזרים הגרפיים (סגור בהתחלה) -->
                        <div class="infi2-acc-item" id="infi2-acc-2">
                            <button type="button" class="infi2-acc-header" onclick="window.__infi2ToggleAcc(2)">
                                <div class="infi2-acc-header-left">
                                    <div class="infi2-acc-icon">🌊</div>
                                    <div class="infi2-acc-header-text">
                                        <div class="infi2-acc-name">2. הסימולציות והעזרים הגרפיים — מה לומדים מהם ואיך לתפעל</div>
                                        <div class="infi2-acc-snippet">המחשת מנגנונים דינמיים, חקירת פרמטרים ומקרי קצה בזמן אמת במקום שינון יבש</div>
                                    </div>
                                </div>
                                <div class="infi2-acc-chevron">▼</div>
                            </button>
                            <div class="infi2-acc-content">
                                <div class="infi2-acc-desc">
                                    העזרים הוויזואליים והמעבדות האינטראקטיביות שזורים ישירות בתוך פרקי הלימוד:
                                    <ul style="margin: 6px 0; padding-right: 20px; line-height: 1.65; font-size: 13.5px; color: #1e293b;">
                                        <li><strong>🎯 מה הערך הפדגוגי שלהם:</strong> הסימולציות נועדו להמחיש את המנגנונים הדינמיים (התנהגות תהליכים, תנועת נתונים, פעולת אלגוריתמים, שינויים במרחב וגבולות) שקשה לתפוס מטקסט סטטי בלבד.</li>
                                        <li><strong>💡 איך ללמוד מהם נכון:</strong> אל תסתפקו בהתבוננות פסיבית! שנו ערכים בסליידרים, הזינו קלטים שונים, הריצו תהליכים צעד-אחר-צעד, ובדקו מקרי קצה כדי לראות את התגובה בזמן אמת.</li>
                                        <li><strong>🔍 בקורס זה:</strong> המחשה גרפית חיה של סכומי דרבו ורימן, קירובי טיילור מסדרים עולים, תחום ורדיוס התכנסות, משטחים רב-משתניים $z=f(x,y)$, מישורי משיק ווקטור הגרדיאנט במרחב.</li>
                                    </ul>
                                </div>
                                <div class="infi2-acc-tags">
                                    <span class="infi2-tag">המחשה ויזואלית חיה</span>
                                    <span class="infi2-tag">שינוי פרמטרים ומקרי קצה</span>
                                    <span class="infi2-tag">הבנה אינטואיטיבית עמוקה</span>
                                </div>
                                <a href="2_20475_1.html" class="infi2-acc-action-btn">
                                    <span>למעבדות בפרק הראשון</span>
                                    <span>←</span>
                                </a>
                            </div>
                        </div>

                        <!-- פריט 3: תרגול שאלות ומצבי התשובה (סגור בהתחלה) -->
                        <div class="infi2-acc-item" id="infi2-acc-3">
                            <button type="button" class="infi2-acc-header" onclick="window.__infi2ToggleAcc(3)">
                                <div class="infi2-acc-header-left">
                                    <div class="infi2-acc-icon">🎯</div>
                                    <div class="infi2-acc-header-text">
                                        <div class="infi2-acc-name">3. תרגול שאלות, מצבי הפתרון וניתוח מסיחים</div>
                                        <div class="infi2-acc-snippet">שאלות הכוונה ❓ בפרקים, דרגות פתרון מדורגות (רמז, שלד, פתרון מלא) ופירוק מלכודות</div>
                                    </div>
                                </div>
                                <div class="infi2-acc-chevron">▼</div>
                            </button>
                            <div class="infi2-acc-content">
                                <div class="infi2-acc-desc">
                                    המערכת מעודדת תרגול אקטיבי ולא רק קריאה פסיבית:
                                    <ul style="margin: 6px 0; padding-right: 20px; line-height: 1.65; font-size: 13.5px; color: #1e293b;">
                                        <li><strong>❓ שאלות הכוונה (Active Recall):</strong> לצד תת-סעיפים מוטמע כפתור ❓. לפני שאתם קוראים את ההסבר או הפתרון, לחצו עליו ונסו לנסח את התשובה בעצמכם כדי לוודא שאתם מסוגלים לשחזר את החומר לבד.</li>
                                        <li><strong>🎚️ מצבי התשובה והפתרון בשאלות:</strong>
                                            <div style="margin-top: 4px; padding: 6px 12px; background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 8px; font-size: 12.5px; line-height: 1.6;">
                                                • <strong>רמז (Hint):</strong> כיוון מחשבה ראשוני להתמודדות עצמאית מבלי לחשוף את התשובה.<br>
                                                • <strong>שלד פתרון (Solution Outline):</strong> ראשי הפרקים ושלבי העבודה המרכזיים של התשובה.<br>
                                                • <strong>פתרון מלא ומנומק (Full Solution):</strong> פתרון פורמלי ומלא שלב-אחר-שלב ברמת בחינה.
                                            </div>
                                        </li>
                                        <li><strong>🧠 ניתוח מסיחים מעמיק:</strong> בשאלות רב-ברירה, המערכת מפרקת עבורכם כל אחד מהמסיחים השגויים: למה הוא נראה מפתה, איזו טעות חישוב או הנחה מוטעית הובילה אליו, ואיך להיזהר מהמלכודת של כותבי הבחינה.</li>
                                        
                                    </ul>
                                </div>
                                <div class="infi2-acc-tags">
                                    <span class="infi2-tag">שאלות הכוונה ❓</span>
                                    <span class="infi2-tag">רמז / שלד / פתרון מלא</span>
                                    <span class="infi2-tag">ניתוח מעמיק לכל מסיח</span>
                                </div>
                                <a href="2_20475_1.html" class="infi2-acc-action-btn">
                                    <span>לתרגול בפרקים</span>
                                    <span>←</span>
                                </a>
                            </div>
                        </div>

                        <!-- פריט 4: מאגר הבחינות והדרייב (סגור בהתחלה) -->
                        <div class="infi2-acc-item" id="infi2-acc-4">
                            <button type="button" class="infi2-acc-header" onclick="window.__infi2ToggleAcc(4)">
                                <div class="infi2-acc-header-left">
                                    <div class="infi2-acc-icon">📑</div>
                                    <div class="infi2-acc-header-text">
                                        <div class="infi2-acc-name">4. מאגר הבחינות, קובצי המקור ב-Google Drive ומחברות (91–100)</div>
                                        <div class="infi2-acc-snippet">97 בחינות משוחזרות, קישורים לטפסי מקור בדרייב, פתרונות רשמיים והשוואה למחברות שקיבלו 100</div>
                                    </div>
                                </div>
                                <div class="infi2-acc-chevron">▼</div>
                            </button>
                            <div class="infi2-acc-content">
                                <div class="infi2-acc-desc">
                                    הכנה מעשית ממוקדת לבחינת הגמר של האוניברסיטה הפתוחה:
                                    <ul style="margin: 6px 0; padding-right: 20px; line-height: 1.65; font-size: 13.5px; color: #1e293b;">
                                        <li><strong>📁 מה כולל מאגר ה-Google Drive:</strong>
                                            <div style="margin-top: 4px; padding: 6px 12px; background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 8px; font-size: 12.5px; line-height: 1.6;">
                                                • <strong>טפסי בחינה סרוקים מקוריים</strong> של האוניברסיטה הפתוחה ממועדי א', ב' ומיוחדים.<br>
                                                • <strong>פתרונות רשמיים</strong> מלאים ומפורטים.<br>
                                                • <strong>מחברות בחינה אמיתיות של סטודנטים שקיבלו ציונים 91–100:</strong> מאפשר להשוות את דרך הכתיבה, הפירוט והנימוק שלכם לכתיבה שקיבלה ניקוד מלא במבחן.
                                            </div>
                                        </li>
                                        <li><strong>🎯 מצב מיקוד לבחינה:</strong> בדפי המבחנים ניתן להפעיל מצב מיקוד (קיפול תפריטים והסחות דעת) ולתרגל עם שעון עצר כדי להתרגל לזמני הבחינה האמיתיים.</li>
                                    </ul>
                                </div>
                                <div class="infi2-acc-tags">
                                    <span class="infi2-tag">97 בחינות</span>
                                    <span class="infi2-tag">קובצי מקור ב-Google Drive</span>
                                    <span class="infi2-tag">מחברות מצטיינים (91–100)</span>
                                    <span class="infi2-tag">מצב מיקוד וטיימר</span>
                                </div>
                                <a href="exams.html" class="infi2-acc-action-btn">
                                    <span>מאגר הבחינות והדרייב</span>
                                    <span>←</span>
                                </a>
                            </div>
                        </div>

                        <!-- פריט 5: חומרי הסיכום והעזרים המשלימים (סגור בהתחלה) -->
                        <div class="infi2-acc-item" id="infi2-acc-5">
                            <button type="button" class="infi2-acc-header" onclick="window.__infi2ToggleAcc(5)">
                                <div class="infi2-acc-header-left">
                                    <div class="infi2-acc-icon">📝</div>
                                    <div class="infi2-acc-header-text">
                                        <div class="infi2-acc-name">5. חומרי הסיכום והעזרים המשלימים</div>
                                        <div class="infi2-acc-snippet">מחברת סיכום מקיפה עם מרקרים פסטליים וטבלאות השוואה לחזרה מהירה לפני המבחן</div>
                                    </div>
                                </div>
                                <div class="infi2-acc-chevron">▼</div>
                            </button>
                            <div class="infi2-acc-content">
                                <div class="infi2-acc-desc">
                                    כלי עיון וחזרה מרוכזת לשלבי הסיום של הלמידה:
                                    <ul style="margin: 6px 0; padding-right: 20px; line-height: 1.65; font-size: 13.5px; color: #1e293b;">
                                        <li><strong>📝 סיכום הקורס המקיף:</strong> זמין בדף <a href="summary.html" style="color: #2563eb; font-weight: bold; text-decoration: underline;">סיכום הקורס המקיף (מחברת דיגיטלית עם מרקרים)</a> — מחברת סיכום דיגיטלית מסודרת עם הדגשות צבעוניות וטבלאות השוואה מהירות.</li>
                                    <li><strong>🎮 משחק אימון אינטואיציה מהירה:</strong> זמין בדף <a href="game.html" style="color: #2563eb; font-weight: bold; text-decoration: underline;">game.html</a> — אתגר מהיר נגד השעון לבדיקת אינסטינקטים ושליפה מיידית תחת לחץ זמנים.</li>
                                    </ul>
                                </div>
                                <div class="infi2-acc-tags">
                                    <span class="infi2-tag">סיכום מקיף ומסודר</span>
                                    <span class="infi2-tag">מרקרים פסטליים</span>
                                    <span class="infi2-tag">טבלאות השוואה מהירות</span>
                                </div>
                                <a href="summary.html" class="infi2-acc-action-btn">
                                    <span>לסיכום הקורס המקיף</span>
                                    <span>←</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- פוטר עם העתקת קישור בלבד -->
                    <div class="infi2-footer">
                        <div class="infi2-footer-notice">
                            💬 מכירים חברים שלומדים את הקורס? נשמח שתשתפו אותם בקישור הישיר לאתר.
                        </div>
                        <div class="infi2-btn-row">
                            <button type="button" class="infi2-btn-secondary" id="infi2-welcome-copy-btn">
                                📋 העתקת קישור לאתר
                            </button>
                            <button type="button" class="infi2-btn-primary" id="infi2-welcome-start-btn">
                                🚀 הבנתי, בואו נתחיל
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(backdrop);

        const closeModal = () => {
            backdrop.style.opacity = '0';
            backdrop.style.transition = 'opacity 0.25s ease';
            setTimeout(() => backdrop.remove(), 250);
        };

        // אירועים
        document.getElementById('infi2-welcome-close-x').addEventListener('click', closeModal);
        document.getElementById('infi2-welcome-start-btn').addEventListener('click', closeModal);
        document.getElementById('infi2-welcome-copy-btn').addEventListener('click', function () {
            copyCourseLink(this);
        });

        // סגירה בלחיצה על הרקע החיצוני
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeModal();
        });

        // סגירה ב-Escape
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    }

    /* ==========================================================================
       5. יצירת חלון שיתוף ומאגר הקורסים הראשי (Share & Hub Modal - כל 5 ימים)
       ========================================================================== */
    function createShareModal() {
        injectStyles();

        const existing = document.getElementById('infi2-share-backdrop');
        if (existing) existing.remove();

        const backdrop = document.createElement('div');
        backdrop.id = 'infi2-share-backdrop';
        backdrop.className = 'infi2-backdrop';

        backdrop.innerHTML = `
            <div class="infi2-modal-card share-size" role="dialog" aria-modal="true" aria-labelledby="infi2-share-title">
                <button class="infi2-close-btn" id="infi2-share-close-x" title="סגור חלון" aria-label="סגור חלון">✕</button>

                <div class="infi2-header" style="text-align: center;">
                    <div class="infi2-badge" style="margin: 0 auto 8px auto;">
                        <span>💙</span>
                        <span>אוהבים את האתר? עוזרים לחברים!</span>
                    </div>
                    <h2 class="infi2-title" id="infi2-share-title" style="font-size: 20px;">
                        נהנים מהלימוד באינפי 2? שתפו והמליצו! 😊
                    </h2>
                    <p class="infi2-subtitle">
                        מאגר הקורסים והסיכומים שלנו מתעדכן באופן שוטף. אם האתר מסייע לכם בלמידה, או אם אתם מכירים סטודנטים שמחפשים דרך יעילה להבין את החומר ולהתכונן למבחן — נשמח שתשתפו אותם בקישור הישיר לאתר.
                    </p>
                </div>

                <div class="infi2-body" style="padding-top: 14px; padding-bottom: 14px; gap: 14px;">
                    <!-- כרטיס קישור ישיר להעתקה -->
                    <div style="background: #ffffff; border: 1.5px solid #fecdd3; border-radius: 16px; padding: 14px 16px;">
                        <label style="display: block; font-size: 13px; font-weight: 800; color: #881337; margin-bottom: 8px;">
                            📋 קישור ישיר לאתר (נטו קישור):
                        </label>
                        <div style="display: flex; gap: 8px; align-items: center;">
                            <input id="infi2-share-link-input" type="text" readonly value="https://infi2-9rg.pages.dev/"
                                style="flex: 1; padding: 10px 14px; border: 1.5px solid #fda4af; border-radius: 10px; font-size: 13.5px; background: #fff8f8; color: #881337; direction: ltr; text-align: left; font-family: monospace; font-weight: 600; outline: none;">
                            <button type="button" class="infi2-btn-primary" id="infi2-share-copy-btn" style="min-width: unset; padding: 10px 18px; font-size: 13.5px; white-space: nowrap; display: flex; align-items: center; gap: 6px;">
                                <span>📋</span>
                                <span>העתק קישור</span>
                            </button>
                        </div>
                    </div>

                    <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 14px 16px;">
                        <div style="font-weight: 800; color: #0f172a; font-size: 14.5px; margin-bottom: 4px; display: flex; items-center; gap: 6px;">
                            <span>🌐</span> <span>מאגר כל הקורסים הראשי:</span>
                        </div>
                        <p style="font-size: 12.5px; color: #475569; margin: 0 0 10px 0; line-height: 1.45;">
                            מחפשים קורסים נוספים במדעי המחשב ובמתמטיקה? היכנסו לפורטל הראשי המרכז את כל האתרים האינטראקטיביים שלנו.
                        </p>
                        <a href="https://all-the-courses.pages.dev/" target="_blank" rel="noopener noreferrer" class="infi2-btn-secondary" style="width: 100%; min-width: unset; padding: 10px 16px; font-size: 13.5px; text-decoration: none;">
                            <span>למעבר למאגר הקורסים הראשי</span>
                            <span>←</span>
                        </a>
                    </div>
                </div>

                <div class="infi2-footer" style="padding-top: 12px; padding-bottom: 14px;">
                    <button type="button" class="infi2-btn-secondary" id="infi2-share-dismiss-btn" style="width: 100%; min-width: unset; padding: 9px 16px; font-size: 13px; border-color: transparent; background: transparent; color: #64748b;">
                        <span>המשך בלימוד (סגור חלון)</span>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(backdrop);

        const closeShare = () => {
            const now = Date.now();
            localStorage.setItem(STORAGE_KEYS.LAST_SHARE_POPUP, now.toString());
            backdrop.style.opacity = '0';
            backdrop.style.transition = 'opacity 0.25s ease';
            setTimeout(() => backdrop.remove(), 250);
        };

        document.getElementById('infi2-share-close-x').addEventListener('click', closeShare);
        document.getElementById('infi2-share-dismiss-btn').addEventListener('click', closeShare);
        document.getElementById('infi2-share-copy-btn').addEventListener('click', function () {
            copyCourseLink(this);
        });

        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeShare();
        });
    }

    /* ==========================================================================
       6. מנגנון האקורדיון הגלובלי
       ========================================================================== */
    window.__infi2ToggleAcc = function (index) {
        const item = document.getElementById(`infi2-acc-${index}`);
        if (!item) return;

        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.infi2-acc-item').forEach(el => el.classList.remove('open'));

        if (!isOpen) {
            item.classList.add('open');
        }
    };

    /* ==========================================================================
       7. חשיפה גלובלית להפעלה יזומה מכפתורי הפוטר
       ========================================================================== */
    window.showCourseWelcomeModal = function () {
        createWelcomeModal();
    };
    window.showCourseShareModal = function () {
        createShareModal();
    };

    /* ==========================================================================
       8. מכונת המצבים והתזמון האוטומטי (Auto-Trigger State Machine)
       ========================================================================== */
    function checkAndTriggerModals() {
        const now = Date.now();

        let firstSeen = localStorage.getItem(STORAGE_KEYS.FIRST_SEEN);
        if (!firstSeen) {
            localStorage.setItem(STORAGE_KEYS.FIRST_SEEN, now.toString());
            firstSeen = now;
        } else {
            firstSeen = parseInt(firstSeen, 10);
        }

        const welcomeShown = localStorage.getItem(STORAGE_KEYS.WELCOME_SHOWN);
        const lastSharePopup = parseInt(localStorage.getItem(STORAGE_KEYS.LAST_SHARE_POPUP) || '0', 10);
        const timeSinceFirstSeen = now - firstSeen;

        // מקרה א': כניסה ראשונה לאתר
        if (!welcomeShown) {
            setTimeout(() => {
                createWelcomeModal();
            }, 800);
            return;
        }

        // מקרה ב': גולש חוזר מעל 24 שעות ומעל 5 ימים מהקפצה קודמת
        if (timeSinceFirstSeen >= TWENTY_FOUR_HOURS_MS) {
            const timeSinceLastShare = now - lastSharePopup;
            if (lastSharePopup === 0 || timeSinceLastShare >= FIVE_DAYS_MS) {
                setTimeout(() => {
                    createShareModal();
                }, 1200);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkAndTriggerModals);
    } else {
        checkAndTriggerModals();
    }

})();
