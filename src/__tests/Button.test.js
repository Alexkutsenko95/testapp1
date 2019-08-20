import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Button from '../components/Button';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App/>);
});
describe('Button tests', () => {

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render three Buttons', () => {
        expect(wrapper.find(Button)).toHaveLength(3);
    });
});