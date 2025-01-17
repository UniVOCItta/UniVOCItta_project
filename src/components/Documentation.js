import React from 'react';
import '../App.css';
// Translation
import { useTranslation } from "react-i18next";

function Documentation() {

  // Translation 
  const { t } = useTranslation();
  
  return (
    <>
        <div className='container-fluid'>
            <h1 style={{textTransform: 'uppercase'}}>{t('footer.documentation')}</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </>
  )
}

export default Documentation