import React, { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      {isClient && (
        <p>
          This content is only rendered on the client side.
          {/* Your client-side code that uses window object */}
        </p>
      )}
    </div>
  );
};

export default AboutPage;