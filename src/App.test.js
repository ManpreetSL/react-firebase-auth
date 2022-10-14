import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fateh', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Vaheguru Jee Kaa Khalsa; Vaheguru Jee Kee Fateh!/i
  );
  expect(linkElement).toBeInTheDocument();
});
