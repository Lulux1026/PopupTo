import React, { useState } from 'react';
import '../popupTo.css';

const PopupTo = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleTogglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleItemClick = (action) => {
    console.log(action);
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`talk-room-menu ${isPopupOpen ? 'active' : ''}`} onClick={handleTogglePopup}>
      <div className={`menu-icon ${isPopupOpen ? 'active' : ''}`} style={{ background: `rgba(255, 255, 255, 0.8) url('/image/menu1.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '40px', height: '40px' }}></div>

      {isPopupOpen && (
        <div className="menu-items" onClick={handleContentClick}>
          <span onClick={() => handleItemClick('프로필 변경')}>
            <img src="/image/menu3.png" alt="프로필 변경 아이콘" />
            프로필 변경
          </span>
          <span onClick={() => handleItemClick('톡방 이동')}>
            <img src="/image/menu4.png" alt="톡방 이동 아이콘" />
            톡방 이동
          </span>
          <span onClick={() => handleItemClick('로그아웃')}>
            <img src="/image/menu5.png" alt="로그아웃 아이콘" />
            로그아웃
          </span>
        </div>
      )}
    </div>
  );
};

export default PopupTo;
