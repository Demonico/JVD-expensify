import DotEnv from 'dotenv';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-dates/initialize';

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
  adapter: new Adapter()
});