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
        'languageKey','home','functions','pricing','demo','carousel1','carousel2','carousel3','carousel4','carousel5','home_arrow_text','home_kydo_use_cases','home_kydo_use_case_trustee','home_kydo_to_use_case_trustee','home_persona_martin_speech_bubble','home_kydo_use_case_kmu','home_kydo_to_use_case_kmu','home_persona_alexandra_speech_bubble','home_kydo_use_case_accounting','home_kydo_to_use_case_accounting','home_persona_thomas_speech_bubble','home_kydo_use_case_developer','home_kydo_to_use_case_developer','home_persona_julia_speech_bubble','about_us','philosophy1','philosophy2','interested_in_meeting_us','mail_us','call_us','book_demo','cup_of_coffee','trustee_title','trustee_sub_title','trustee_speaking_bubble','trustee_info_left','trustee_info_center','trustee_info_right','trustee_process_text_1','trustee_process_info_circle','trustee_process_info','trustee_process_text_2','trustee_process_text_3','trustee_process_text_4','kmu_title','kmu_sub_title','kmu_speaking_bubble','kmu_info_left','kmu_info_right','accounting_title','accounting_sub_title','accounting_speaking_bubble','accounting_info_left','accounting_info_right','developer_title','developer_sub_title','developer_speaking_bubble','developer_info_left','developer_info_circle','to_the_functions','functions_title','functions_tenant_structure_title','functions_tenant_structure_text','functions_tenant_info_circle','functions_define_doctypes_title','functions_define_doctypes_text','functions_define_doctype_info','functions_define_doctype_info_circle','functions_inbox_title','functions_inbox_text','functions_inbox_info','functions_automatic_processing_title','functions_automatic_processing_text','functions_automatic_processing_info','functions_archive_title','functions_archive_text','functions_archive_info','functions_vising_title','functions_vising_text','functions_vising_info','functions_dashboard_title','functions_dashboard_text','functions_dashboard_info_circle','functions_pinit','pricing_title','pricing_info_circle','pricing_users','pricing_user_full','pricing_user_upload','pricing_user_read','pricing_storage','pricing_storage_required','pricing_storage_info','pricing_modules','pricing_automated_processing','pricing_total','pricing_total_monthly','any_questions','become_reseller','select_amount','demo_try_kydo','demo_try_kydo_1','demo_try_kydo_2','demo_try_kydo_3','demo_try_kydo_4','demo_try_kydo_respect_privacy','demo_try_kydo_questions','demo_try_kydo_call_us_at','demo_try_kydo_email_us_at','demo_try_kydo_we_get_back_to_you','imprint','address','contact','uidNumber','termsOfUse','termsOfUseText',
    ];
    DEFAULT_LANGUAGE = 'de';
    
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

