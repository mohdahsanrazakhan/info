import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Profile = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const { text } = useTypewriter({
    words: ["Freelancer", "Frontend Developer", "React Developer"],
    loop: 0,
    typeSpeed: 120,
  });

  return (
    <div className="flex flex-col gap-5 w-[320px]">
      <div className="relative m-auto w-[120px] h-[120px]">
        {!imageLoaded && (
          <div className="absolute inset-0 rounded-full bg-gray-200 animate-pulse"></div>
        )}
        <img
          className={`rounded-full w-[120px] h-[120px] border-4 border-[#3DFFFF] ${imageLoaded ? 'block' : 'hidden'}`}
          src="https://avatars.githubusercontent.com/u/57056757?s=400&u=b0e15b61d1a671420db41de4feaef3147dc12783&v=4"
          alt="profile"
          onLoad={handleImageLoad}
        />
      </div>
      <h1 className="text-2xl font-medium">Mohd Ahsan Raza Khan</h1>
      <p>I'm a <span style={{ color: "#3DFFFF" }}>React Developer{text}</span><Cursor /></p>
    </div>
  )
}

export default Profile;