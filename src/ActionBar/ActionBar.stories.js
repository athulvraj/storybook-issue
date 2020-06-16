import * as React from 'react';
import ActionBar from './ActionBar';


export default {
    title: 'Components/ActionBar',
    component: ActionBar,
};

export const defaultView = () => (
    <ActionBar>
        <button option='transparent' typeAttr='button'>Cancel</button>
        <button option='emphasized'>Submit</button>
    </ActionBar>
);
defaultView.story = {
    name: 'ActionBar False'
};
