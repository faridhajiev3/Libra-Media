import React, { useState } from 'react'
import "../scss/language.scss"
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n, t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language === 'az' ? 'Azərbaycan' : 'English');

    const handleLanguageChange = (language, code) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(code);
    };
    return (
        <div className="language-selector">
            <div
                className={`language-option ${selectedLanguage === 'English' ? 'selected' : ''}`}
                onClick={() => handleLanguageChange('English', 'en')}
            >
                <span>English</span>
                {selectedLanguage === 'English' && <span className="checkmark">✔</span>}
            </div>
            <div
                className={`language-option ${selectedLanguage === 'Azərbaycan' ? 'selected' : ''}`}
                onClick={() => handleLanguageChange('Azərbaycan', 'az')}
            >
                <span>Azərbaycan</span>
                {selectedLanguage === 'Azərbaycan' && <span className="checkmark">✔</span>}
            </div>
        </div>
    )
}

export default LanguageSelector