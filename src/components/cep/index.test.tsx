import Cep from '.';
import { render } from '@testing-library/react';

test('renders learn react link', () => {
  const cep = render(<Cep zipCode={14407329} />);
  expect(cep).toMatchSnapshot();
});