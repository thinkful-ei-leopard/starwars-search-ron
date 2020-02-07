import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree= renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});