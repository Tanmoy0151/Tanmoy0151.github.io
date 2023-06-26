import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, duration, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`toast ${isVisible ? 'visible' : ''}`}>
            <div className="message">{message}</div>
            
        </div>
    );
};

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    duration: PropTypes.number,
    onClose: PropTypes.func,
};

Toast.defaultProps = {
    duration: 3000,
    onClose: () => { },
};

export default Toast;

// this component introduces as experimental