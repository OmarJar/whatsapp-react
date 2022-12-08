const languages = [
    {
        id: Math.random().toString(16).slice(2),
        title: "azərbaycan"
    },
    {
        id: Math.random().toString(16).slice(2),
        title: "Afrikaans"
    },
    {
        id: Math.random().toString(16).slice(2),
        title: "Bahasa Indonesia"
    },
    {
        id: Math.random().toString(16).slice(2),
        title: "Melayu"
    },
    {
        id: Math.random().toString(16).slice(2),
        title: "català"
    },
    {
        id: Math.random().toString(16).slice(2),
        title: "čeština"
    },
    {
        id: Math.random().toString(16).slice(2),
        title: "dansk"
    },
    {
        id: Math.random().toString(16).slice(2),
        title: "Deutsch"
    },
    {
        id: Math.random().toString(16).slice(2),
        title: "eesti"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "English"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "español"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "français"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Gaeilge"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "hrvatski"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "italiano"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Kiswahili"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "latviešu"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "lietuvių"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "magyar"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Nederlands"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "norsk bokmål"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "o‘zbek"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Filipino"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "polski"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Português (Brasil)"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Português (Portugal)"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "română"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "shqip"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "slovenčina"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "slovenščina"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "suomi"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "svenska"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Tiếng Việt"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Türkçe"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "Ελληνικά"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "български"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "қазақ тілі"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "македонски"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "русский"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "српски"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "українська"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "עברית"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "العربية"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "فارسى"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "اردو"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "বাংলা"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "हिन्दी"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "ગુજરાતી"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "ಕನ್ನಡ"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "मराठी"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "ਪੰਜਾਬੀ"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "தமிழ்"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "తెలుగు"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "മലയാളം"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "ไทย"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "简体中文"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "繁體中文（台灣）"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "繁體中文（香港）"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "日本語"
    },
    {
        id: Math.random().toString(16).slice(2),
         title: "한국어"
    },
    // "azərbaycan",
    // "Afrikaans",
    // "Bahasa Indonesia",
    // "Melayu",
    // "català",
    // "čeština",
    // "dansk",
    // "Deutsch",
    // "eesti",
    // "English",
    // "español",
    // "français",
    // "Gaeilge",
    // "hrvatski",
    // "italiano",
    // "Kiswahili",
    // "latviešu",
    // "lietuvių",
    // "magyar",
    // "Nederlands",
    // "norsk bokmål",
    // "o‘zbek",
    // "Filipino",
    // "polski",
    // "Português (Brasil)",
    // "Português (Portugal)",
    // "română",
    // "shqip",
    // "slovenčina",
    // "slovenščina",
    // "suomi",
    // "svenska",
    // "Tiếng Việt",
    // "Türkçe",
    // "Ελληνικά",
    // "български",
    // "қазақ тілі",
    // "македонски",
    // "русский",
    // "српски",
    // "українська",
    // "עברית",
    // "العربية",
    // "فارسى",
    // "اردو",
    // "বাংলা",
    // "हिन्दी",
    // "ગુજરાતી",
    // "ಕನ್ನಡ",
    // "मराठी",
    // "ਪੰਜਾਬੀ",
    // "தமிழ்",
    // "తెలుగు",
    // "മലയാളം",
    // "ไทย",
    // "简体中文",
    // "繁體中文（台灣）",
    // "繁體中文（香港）",
    // "日本語",
    // "한국어"
]

export default languages