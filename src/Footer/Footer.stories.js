import * as React from 'react';
import Footer from './Footer';


export default {
    title: 'Components/Footer',
    component: Footer,
};

export const defaultView = () => (
    <Footer
        copyrightText='© 2019 SAP SE or an affiliate company'
        logo={"//unpkg.com/fundamental-styles/dist/images/sap-logo.png"}
        subtitle1='Version: 0.0.78'
        subtitle2='Build Date: 12th Nov 2019' />
);

defaultView.story = {
    name: 'Default View'
};