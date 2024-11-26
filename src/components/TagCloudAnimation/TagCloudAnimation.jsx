import React, { useEffect } from 'react';

function TagCloudAnimation() {
    useEffect(() => {
        // Dynamically load the TagCloud script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
          // TagCloud.js initialization after the script has loaded
          const myTags = [
            'JavaScript', 'CSS', 'HTML',
            'C', 'C++', 'React',
            'Python', 'Java', 'git',
            'django', 'Node.js', 'OpenCV',
            'GCP', 'MySQL', 'jQuery',
          ];
    
          const tagCloud = TagCloud('.content', myTags, {
            radius: 250,
            maxSpeed: 'medium',
            initSpeed: 'medium',
            direction: 135,
            keep: true,
          });
    
          // To change the color of text randomly
          const colors = ['#fff'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          document.querySelector('.content').style.color = randomColor;
    
          // Cleanup on unmount
          return () => {
            if (tagCloud) {
              tagCloud.destroy();
            }
          };
        };
    
        // Cleanup if the script is not loaded successfully
        script.onerror = () => {
          console.error('Failed to load the TagCloud script.');
        };
    
        return () => {
          // Remove the script when the component unmounts
          document.body.removeChild(script);
        };
    }, []); // Empty dependency array to run once on mount
    
    return (
        <div className="relative w-full  bg-transparent">
            <span className="content"></span>
        </div>
    );
}

export default TagCloudAnimation;
