import React, { useState } from 'react'

const LanguageSelect = ({ IsLanguageSelectOpen }) => {
  const [SelectedLanguage, setSelectedLanguage] = useState('English')
  return (
    <div
      style={{
        border: '1px solid #d5de26',
        display: IsLanguageSelectOpen ? 'flex' : 'none',
      }}
      className="absolute dark:text-white text-grey flex flex-col right-1/4 ml-2/3 font-medium bg-dark-white p-4 rounded dark:bg-light-dark border-green "
    >
      <span
        style={{ color: SelectedLanguage === 'English' ? '#d5de26' : '' }}
        onClick={() => setSelectedLanguage('English')}
        className="hover:text-green"
      >
        ENGLISH
      </span>
    </div>
  )
}

export default LanguageSelect
