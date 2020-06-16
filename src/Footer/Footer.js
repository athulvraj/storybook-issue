import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';
/**
 * Footer component is a static component placed at the bottom of the page across the app.
 * It holds the SAP logo(customizable),copyright info & any other desired text.
 *
 */
const Footer = props => (
    <footer className='fd-shell__footer fg-footer'>
        {props.logo &&
            <div className='footer-logo-wrapper'>
                <img alt='SAP' className='footer-logo'
                    src={props.logo} />
            </div>
        }
        <div className='footer-text'>
            <div>{props.copyrightText}</div>
            <div>{props.subtitle1}</div>
            <div>{props.subtitle2}</div>
        </div>
    </footer>
);

Footer.propTypes = {
    /** *(binary(.png, .jpg, etc...))* : Displays the logo in the Footer. Defaults to the SAP Logo.*/
    logo: PropTypes.any,
    /** Displays the text besides the logo*/
    copyrightText: PropTypes.string,
    /** Displays the text below the copyrightText*/
    subtitle1: PropTypes.string,
    /** Displays the text below the subtitle1*/
    subtitle2: PropTypes.string
};

Footer.defaultProps = {
    logo: null
};

export default Footer;