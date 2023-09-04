import React from 'react'
import { Link } from 'react-router-dom';
import Icon from './Icon'

export const Button = ({
    variant,
    children,
    outline,
    className,
    onClick,
    ...rest
  }) => {
    return (
      <button
        className={
          className 
        }
        {...rest}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

export const ButtonLink = ({ className, to, name, children, onClick}) => {
    return (
    <Link className={className} to={to} onClick={onClick}>
      {name} {children}
    </Link>
    );
  };

  export const ButtonIcon = ({ icon, title, onClick, className, spin,size,transform,classnNameIcon }) => {
    return (
      <button onClick={onClick} className={className}>
        <Icon
          icon={icon}
          className={classnNameIcon}
          transform={transform}
          spin={spin}
          size={size}
        />
        {title}
      </button>
    );
  };