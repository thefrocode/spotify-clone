import React, { useState, useEffect } from 'react';
import { progressBar, progressBarInner } from './progress-bar.css';

interface ProgressBarProps {
    value: number;
    maxValue: number;
    barColor: string;
    height?: string;
}

const ProgressBar = ({ value, maxValue, barColor, height }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);
    console.log(value);
  useEffect(() => {
    const progressWidth = (value / maxValue) * 100;
    setWidth(progressWidth);
  }, [value, maxValue]);

  const barStyle = {
    width: `${width}%`,
    backgroundColor: barColor,
    height: height || '3px',
    transition: 'width 0.3s ease-in-out',
  };

  return (
    <div className={progressBar}>
      <div className={progressBarInner} style={barStyle}></div>
    </div>
  );
};

export default ProgressBar;
