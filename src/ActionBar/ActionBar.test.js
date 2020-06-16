import React from 'react';
import { shallow } from 'enzyme';
import ActionBar from './ActionBar';

describe('Actionbar', () => {
    let element;
    beforeEach(() => element = shallow(<ActionBar />));
    
    test('Should load', () => {
        expect(element).toBeTruthy();
    });

    test('Should Display Children', () => {
        element.setProps({
            children: 'Hello'
        });
        expect(element.find('.button-bar').text()).toEqual('Hello');
    });
});