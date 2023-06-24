import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // const hex = rgbToHex(...rgb);

  const copyColor = () => {
    navigator.clipboard.writeText(`#${hex}`);

    setAlert(true);
  };

  useEffect(() => {
    // const timeout = setTimeout(() => {
    //   setAlert(false);
    // }, 3000);
    // return () => clearTimeout(timeout);
    setAlert(false);
  }, [hex]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyColor}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
      {alert && <p className='alert'>Copied to Clipboard!</p>}
    </article>
  );
};

export default SingleColor;
