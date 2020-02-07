
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Results from './Results';

describe('<Results />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Results />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Results />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});