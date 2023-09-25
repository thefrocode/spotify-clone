import React from 'react';
import * as styles from './list.css';
interface ListProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  display?: 'grid' | 'flex';
  flex?: 0 | 1;
  backgroundColor?: string;
  gap?: string;
  margin?: string;
  width?: string;
}

export function List({
  children,
  direction,
  display,
  flex,
  backgroundColor,
  gap,
  margin,
  width,
}: ListProps) {
  // Map over children and apply any additional styles
  const childrenWithStyles = React.Children.map(children, (child, index) => {
    // You can apply additional styles to each child element here if needed
    const childStyles = {
      // Add any child-specific styles here
    };

    return (
      <div
        key={index}
        className={styles.listItem({
          flex,
        })}
      >
        {child}
      </div>
    );
  });
  return (
    <div
      className={styles.list({
        direction,
        display,
      })}
      style={{ backgroundColor, gap, margin, width }}
    >
      {childrenWithStyles}
    </div>
  );
}
