// --- СЛОВАРИ ---
const translations = {
    ru: {
        hero_title: "Создай себя", hero_desc: "ИИ-генерация идеальной программы тренировок и питания на основе вашей физиологии.",
        data_title: "Физические данные", height_label: "Рост (см)", weight_label: "Вес (кг)",
        gender_label: "Пол", male: "Мужской", female: "Женский", workout_title: "Тип тренировки", strength: "Силовая", cardio: "Кардио",
        filter_title: "Тонкая настройка", level_label: "Уровень подготовки", level_beg: "Новичок", level_int: "Средний", level_adv: "Опытный",
        loc_label: "Место тренировок", loc_gym: "Тренажерный зал", loc_home: "Дома", loc_out: "На улице",
        days_label: "Дней в неделю", 
        day_1: "1 день", day_2: "2 дня", day_3: "3 дня", day_4: "4 дня", day_5: "5 дней", day_6: "6 дней", day_7: "7 дней",
        notes_label: "Особенности / Травмы",
        generate_btn: "Сгенерировать программу", error_data: "Заполните рост и вес корректно.",
        loading: "Синтез программы...", result_title: "Ваша персональная программа", reset_btn: "Начать заново", print_btn: "Распечатать",
        side_title: "Как это работает", side_1: "Укажите свои параметры", side_2: "ИИ анализирует данные", side_3: "Получите идеальный план",
        bmi_title: "Анализ тела (ИМТ)", bmi_desc: "Ваш ИМТ и фильтры учтены при генерации нагрузок.",
        bmi_low: "Дефицит массы", bmi_norm: "Норма", bmi_high: "Избыточный вес", bmi_obese: "Ожирение",
        ai_lang: "русском", ai_h1: "Тренировка", ai_h2: "Питание", ai_h3: "Вода"
    },
    en: {
        hero_title: "Build Yourself", hero_desc: "AI-generated perfect workout and nutrition plan based on your physiology.",
        data_title: "Physical Data", height_label: "Height (cm)", weight_label: "Weight (kg)",
        gender_label: "Gender", male: "Male", female: "Female", workout_title: "Workout Type", strength: "Strength", cardio: "Cardio",
        filter_title: "Advanced Filters", level_label: "Fitness Level", level_beg: "Beginner", level_int: "Intermediate", level_adv: "Advanced",
        loc_label: "Workout Location", loc_gym: "Gym", loc_home: "Home", loc_out: "Outdoors",
        days_label: "Days per week", 
        day_1: "1 day", day_2: "2 days", day_3: "3 days", day_4: "4 days", day_5: "5 days", day_6: "6 days", day_7: "7 days",
        notes_label: "Injuries / Diet notes",
        generate_btn: "Generate Plan", error_data: "Enter valid height and weight.",
        loading: "Synthesizing plan...", result_title: "Your Personalized Plan", reset_btn: "Start Over", print_btn: "Print",
        side_title: "How it works", side_1: "Enter your body metrics", side_2: "AI analyzes your data", side_3: "Get a perfect routine",
        bmi_title: "Body Analysis (BMI)", bmi_desc: "Your BMI and filters are calculated for accuracy.",
        bmi_low: "Underweight", bmi_norm: "Normal weight", bmi_high: "Overweight", bmi_obese: "Obese",
        ai_lang: "English", ai_h1: "Workout", ai_h2: "Nutrition", ai_h3: "Hydration"
    },
    fr: {
        hero_title: "Forgez-vous", hero_desc: "Programme parfait d'entraînement et nutrition généré par l'IA.",
        data_title: "Données Physiques", height_label: "Taille (cm)", weight_label: "Poids (kg)",
        gender_label: "Sexe", male: "Homme", female: "Femme", workout_title: "Entraînement", strength: "Musculation", cardio: "Cardio",
        filter_title: "Paramètres Avancés", level_label: "Niveau", level_beg: "Débutant", level_int: "Intermédiaire", level_adv: "Avancé",
        loc_label: "Lieu", loc_gym: "Salle de sport", loc_home: "Maison", loc_out: "En plein air",
        days_label: "Jours par semaine", 
        day_1: "1 jour", day_2: "2 jours", day_3: "3 jours", day_4: "4 jours", day_5: "5 jours", day_6: "6 jours", day_7: "7 jours",
        notes_label: "Blessures / Régime",
        generate_btn: "Générer le plan", error_data: "Entrez une taille et un poids valides.",
        loading: "Synthèse du programme...", result_title: "Votre Plan Personnalisé", reset_btn: "Recommencer", print_btn: "Imprimer",
        side_title: "Comment ça marche", side_1: "Entrez vos mesures", side_2: "L'IA analyse les données", side_3: "Obtenez un plan parfait",
        bmi_title: "Analyse Corporelle (IMC)", bmi_desc: "Votre IMC et vos filtres sont pris en compte.",
        bmi_low: "Insuffisance", bmi_norm: "Poids normal", bmi_high: "Surpoids", bmi_obese: "Obésité",
        ai_lang: "français", ai_h1: "Entraînement", ai_h2: "Nutrition", ai_h3: "Hydratation"
    },
    es: {
        hero_title: "Crea tu versión", hero_desc: "Plan perfecto de entrenamiento y nutrición generado por IA.",
        data_title: "Datos Físicos", height_label: "Altura (cm)", weight_label: "Peso (kg)",
        gender_label: "Género", male: "Masculino", female: "Femenino", workout_title: "Entrenamiento", strength: "Fuerza", cardio: "Cardio",
        filter_title: "Ajustes Avanzados", level_label: "Nivel", level_beg: "Principiante", level_int: "Intermedio", level_adv: "Avanzado",
        loc_label: "Lugar", loc_gym: "Gimnasio", loc_home: "Casa", loc_out: "Al aire libre",
        days_label: "Días por semana", 
        day_1: "1 día", day_2: "2 días", day_3: "3 días", day_4: "4 días", day_5: "5 días", day_6: "6 días", day_7: "7 días",
        notes_label: "Lesiones / Dieta",
        generate_btn: "Generar Plan", error_data: "Introduce altura y peso válidos.",
        loading: "Sintetizando plan...", result_title: "Tu Plan Personalizado", reset_btn: "Empezar de nuevo", print_btn: "Imprimir",
        side_title: "Cómo funciona", side_1: "Introduce tus medidas", side_2: "La IA analiza los datos", side_3: "Obtén una rutina perfecta",
        bmi_title: "Análisis Corporal (IMC)", bmi_desc: "Tu IMC y filtros se calculan para mayor precisión.",
        bmi_low: "Bajo peso", bmi_norm: "Normal", bmi_high: "Sobrepeso", bmi_obese: "Obesidad",
        ai_lang: "español", ai_h1: "Entrenamiento", ai_h2: "Nutrición", ai_h3: "Hidratación"
    }
};

let currentLang = 'ru';
let workoutType = 'strength';

const langBtns = document.querySelectorAll('.lang-btn');
const themeCircles = document.querySelectorAll('.theme-circle');

// Структурные элементы
const mainLayout = document.getElementById('mainLayout');
const leftCol = document.getElementById('leftCol');
const sections = { hero: document.getElementById('heroSection'), input: document.getElementById('inputSection'), loader: document.getElementById('loader'), result: document.getElementById('resultSection') };
const sideCards = { info: document.getElementById('infoCard'), bmi: document.getElementById('bmiCard') };

const useFiltersToggle = document.getElementById('useFiltersToggle');
const filterFieldsWrapper = document.getElementById('filterFieldsWrapper');

useFiltersToggle.addEventListener('change', function() {
    filterFieldsWrapper.classList.toggle('disabled-fields', !this.checked);
});

const updatePlaceholders = () => {
    const ph = { ru: "Например: болят колени, веган...", en: "E.g., bad knees, vegan...", fr: "Ex: douleurs aux genoux, végan...", es: "Ej: dolor de rodillas, vegano..." };
    document.getElementById('filterNotes').placeholder = ph[currentLang];
};

const updateDaysOptions = () => {
    const dict = translations[currentLang];
    const select = document.getElementById('filterDays');
    for (let i = 1; i <= 7; i++) {
        const option = select.querySelector(`option[value="${i}"]`);
        if (option) {
            option.textContent = dict[`day_${i}`];
        }
    }
}

// Язык
langBtns.forEach(btn => btn.addEventListener('click', () => {
    langBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active');
    currentLang = btn.dataset.lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        if (translations[currentLang][el.getAttribute('data-i18n')]) {
            el.textContent = translations[currentLang][el.getAttribute('data-i18n')];
        }
    });
    updatePlaceholders();
    updateDaysOptions(); // Обновляем текст дней
}));

// Тема
themeCircles.forEach(circle => circle.addEventListener('click', () => {
    if (circle.dataset.themeSet === 'light') { document.body.setAttribute('data-theme', 'light'); localStorage.setItem('theme', 'light'); } 
    else { document.body.removeAttribute('data-theme'); localStorage.setItem('theme', 'dark'); }
}));
if (localStorage.getItem('theme') === 'light') document.body.setAttribute('data-theme', 'light');

document.querySelectorAll('#workoutToggle .toggle-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('#workoutToggle .toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); workoutType = btn.dataset.type;
}));

document.getElementById('btnPrint').addEventListener('click', () => window.print());

// Генерация
document.getElementById('btnGenerate').addEventListener('click', async () => {
    const dict = translations[currentLang];
    const height = parseFloat(document.getElementById('userHeight').value);
    const weight = parseFloat(document.getElementById('userWeight').value);
    
    if (!height || !weight || height <= 0 || weight <= 0) { document.getElementById('formError').classList.remove('hidden'); return; }
    document.getElementById('formError').classList.add('hidden');

    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    let bmiStatusText = ""; let bmiColor = "var(--primary-color)";
    if (bmi < 18.5) { bmiStatusText = dict.bmi_low; bmiColor = "#ffaa00"; }
    else if (bmi < 25) { bmiStatusText = dict.bmi_norm; bmiColor = "var(--success-color)"; }
    else if (bmi < 30) { bmiStatusText = dict.bmi_high; bmiColor = "#ffaa00"; }
    else { bmiStatusText = dict.bmi_obese; bmiColor = "var(--error-color)"; }

    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiValue').style.color = bmiColor;
    document.getElementById('bmiStatus').textContent = bmiStatusText;

    mainLayout.classList.add('result-mode');
    leftCol.classList.add('hidden');
    sections.hero.classList.add('hidden'); sections.input.classList.add('hidden');
    sideCards.info.classList.add('hidden'); sideCards.bmi.classList.remove('hidden');
    sections.loader.classList.remove('hidden'); sections.result.classList.add('hidden');

    const gender = document.getElementById('userGender').options[document.getElementById('userGender').selectedIndex].text;
    const typeStr = workoutType === 'strength' ? dict.strength : dict.cardio;
    
    const systemPrompt = `You are an elite fitness coach.
RULES: 1. NO EMOJIS. 2. Reply in strict HTML format (<h3>,<ul>,<li>,<p>,<b>,<br>). 3. Reply ONLY in ${dict.ai_lang}.
4. Must contain exactly three <h3> headers: <h3>${dict.ai_h1}</h3>, <h3>${dict.ai_h2}</h3>, <h3>${dict.ai_h3}</h3>. 5. No greetings, just the plan.`;
    
    let userPrompt = `Height: ${height}cm, Weight: ${weight}kg, BMI: ${bmi} (${bmiStatusText}), Gender: ${gender}, Goal: ${typeStr}. `;
    
    if (useFiltersToggle.checked) {
        const lvl = document.getElementById('filterLevel').options[document.getElementById('filterLevel').selectedIndex].text;
        const loc = document.getElementById('filterLocation').options[document.getElementById('filterLocation').selectedIndex].text;
        const days = document.getElementById('filterDays').options[document.getElementById('filterDays').selectedIndex].text;
        const notes = document.getElementById('filterNotes').value.trim();

        userPrompt += `Fitness Level: ${lvl}, Location: ${loc}, Training frequency: ${days}. `;
        if (notes) userPrompt += `IMPORTANT DIET/INJURY NOTES: ${notes}.`;
    }

    try {
        // Отправка запроса на НАШ сервер
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ systemPrompt, userPrompt })
        });
        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Server error');
        }

        document.getElementById('resultContent').innerHTML = data.content;
        sections.loader.classList.add('hidden');
        sections.result.classList.remove('hidden');
    } catch (error) {
        alert('Ошибка: ' + error.message);
        mainLayout.classList.remove('result-mode');
        leftCol.classList.remove('hidden');
        sections.loader.classList.add('hidden');
        sections.hero.classList.remove('hidden');
        sections.input.classList.remove('hidden');
        sideCards.bmi.classList.add('hidden');
        sideCards.info.classList.remove('hidden');
    }
});

// Сброс
document.getElementById('btnReset').addEventListener('click', () => {
    sections.result.classList.add('hidden'); sideCards.bmi.classList.add('hidden');
    sections.hero.classList.remove('hidden'); sections.input.classList.remove('hidden'); sideCards.info.classList.remove('hidden');
    document.getElementById('resultContent').innerHTML = '';
    
    mainLayout.classList.remove('result-mode');
    leftCol.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Инициализация при загрузке
updatePlaceholders();
updateDaysOptions();