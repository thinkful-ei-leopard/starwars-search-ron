
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ValidationError from './ValidationError';

describe('<ValidationError />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ValidationError />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<ValidationError />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});