class LocalStorageService {
    
    LANGUAGE_STORAGE_KEY = 'language'

    getLanguage() {
        return localStorage.getItem(this.LANGUAGE_STORAGE_KEY);
    }

    setLanguage(language) {
        localStorage.setItem(this.LANGUAGE_STORAGE_KEY, language);
    }
}

class LanguageService {
    LANGUAGES = [
        'de','en','fr','it',
    ];
    DEFAULT_LANGUAGE = 'en';
    
    localStorageService = new LocalStorageService();

    checkLanguage() {
        let currentLanguage = null;
        if (/^\/[a-z]{2}\//.test(location.pathname)) {
            currentLanguage = location.pathname.substring(1,3)
        } else {
            currentLanguage = this.localStorageService.getLanguage();
        }
        if (!currentLanguage) {
            const browserLanguage = navigator.language.substring(0,2);
            currentLanguage = this.LANGUAGES
                .find(lang === browserLanguage) ?? this.DEFAULT_LANGUAGE; 
        }
        this.applyLanguage(currentLanguage);
    }

    applyLanguage(language) {
        this.localStorageService.setLanguage(language);
        if (location.pathname.indexOf(`/${language}/`) < 0) {
            // Get the current path after the language code
            const currentPath = location.pathname.replace(/^\/[a-z]{2}\//, '');
            // Construct new URL with new language code while preserving the current path
            location.href = `/${language}/${currentPath}`;
        }
    }
}

const languageService = new LanguageService();
languageService.checkLanguage();

