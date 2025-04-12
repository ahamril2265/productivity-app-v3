import React from 'react';
import './Profile.css';
import rilwanImage from '../assets/rilwan.png'; // make sure the image exists

function Profile() {
  return (
    <div className="profile-container">
      <img src={rilwanImage} alt="Rilwan" className="profile-image" />
      <h1>Ahamed Rilwan Mohaaideen</h1>
      <h3>Electrical & Electronics Engineering Student</h3>
      <p>
        Aspiring airline pilot ✈️ | Passionate about tech, travel & transformation.  
        I build with purpose and code with clarity.  
        Currently exploring React, IoT systems, and project-based learning 🚀
      </p>

      <div className="profile-links">
        <a href="mailto:ahamril0310@gmail.com">📧 Email</a>
        <a href="https://github.com/ahamril2265" target="_blank" rel="noreferrer">💻 GitHub</a>
        <a href="https://www.linkedin.com/in/ahamedrilwan" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
      </div>
    </div>
  );
}

export default Profile;
