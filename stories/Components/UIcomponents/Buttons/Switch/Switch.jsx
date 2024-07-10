import React, { useEffect, useState } from 'react';
import './switch.scss';
import '../../../../Atom/Icons/icons.scss';

export function Switch({
    size = 'default',
    state = 'default',
    isToggled = true,
    showIcon = false,
    showLabel = false,
    showValue = false,
    onToggle,
    label = 'Label:',
    valueOn = 'On',
    valueOff = 'Off',
    ...args
  }) {
    const [toggled, setToggled] = useState(isToggled);
  
    useEffect(() => {
        setToggled(isToggled);
      }, [isToggled]);

    const handleToggle = () => {
      if (state !== 'disabled') {
        setToggled(!toggled);
        if (onToggle) onToggle(!toggled);
      }
    };
 
    const switchClass = `
      switch
      switch--${size}
      switch--${state}
      ${toggled ? 'switch--toggled' : 'switch--untoggled'}
    `;

    return (
      <div className={switchClass} onClick={handleToggle} {...args}>
        {showLabel && <div className="switch__label">{label}</div>}
        <div className='switch__wrapper'>
        <button 
          className="switch__track" 
          tabIndex={0}
          aria-label={label}
          aria-pressed={toggled}
        >
        {showIcon && <div className='switch__icon'/>}
          <div className="switch__thumb">
          </div>
        </button>
        {showValue && (
          <span className="switch__value">
            {toggled ? valueOn : valueOff}
          </span>
        )}
        </div>
      </div>
    );
  }