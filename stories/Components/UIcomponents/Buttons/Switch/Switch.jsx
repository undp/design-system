import React, { useEffect, useState } from 'react';
import './switch.scss';
import '../../../../Atom/Icons/icons.scss';
import check from '../../../../assets/icons/checkmark-regular.svg';
import cross from '../../../../assets/icons/disabled-x-regular.svg';

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
    ...props
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
      <div className={switchClass} onClick={handleToggle} {...props}>
        {showLabel && <div className="switch__label">{label}</div>}
        <div className='switch__wrapper'>
        <div className="switch__track" tabIndex={0}>
            {showIcon && (
                <img className='switch__icon' src={toggled ? check : cross} alt="" />
            )}
          <div className="switch__thumb">
          </div>
        </div>
        {showValue && (
          <span className="switch__value">
            {toggled ? valueOn : valueOff}
          </span>
        )}
        </div>
      </div>
    );
  }