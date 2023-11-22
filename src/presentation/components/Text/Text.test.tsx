import {Text} from './Text';
import {render} from '@testing-library/react-native';

describe('Text Component', () => {
  test('should render', () => {
    const rendered = render(<Text>Test</Text>);
    expect(rendered).toBeTruthy();
  });

  test('should render with default props', () => {
    const rendered = render(<Text>Test</Text>);
    expect(rendered).toMatchSnapshot();
  });

  test('should render with preset', () => {
    const rendered = render(<Text preset="title">Test</Text>);
    expect(rendered).toMatchSnapshot();
  });
});
