import { Sign } from 'src/pages';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Sign />).toJSON();
  expect(tree).toMatchSnapshot();
});
