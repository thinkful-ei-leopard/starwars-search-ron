
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ResultCharacter from './ResultCharacter';

describe('<ResultCharacter />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ResultCharacter />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<ResultCharacter />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});