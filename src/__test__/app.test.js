import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'rsvp';
import shim from './../shim.js';

configure({adapter: new Adapter()})
const app = shallow(<App />)
app.find('input').simulate('change', {target: [value: 'My new value']})
app.find('button').simulate('click')
expect(app.state('input')).toBe('')