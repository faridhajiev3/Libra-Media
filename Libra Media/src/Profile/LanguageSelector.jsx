import React, { useState } from 'react'
import "../scss/language.scss"

function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };
    return (
        <div className="language-selector">
            <div
                className={`language-option ${selectedLanguage === 'English' ? 'selected' : ''}`}
                onClick={() => handleLanguageChange('English')}
            >
                <span>English</span>
                {selectedLanguage === 'English' && <span className="checkmark">✔</span>}
            </div>
            <div
                className={`language-option ${selectedLanguage === 'Arabic' ? 'selected' : ''}`}
                onClick={() => handleLanguageChange('Arabic')}
            >
                <span>Arabic</span>
                {selectedLanguage === 'Arabic' && <span className="checkmark">✔</span>}
            </div>
        </div>
    )
}

export default LanguageSelector