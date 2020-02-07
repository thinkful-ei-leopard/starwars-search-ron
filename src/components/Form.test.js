
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Form from './Form';

describe('<Form />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Form />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});