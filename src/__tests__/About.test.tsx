import { divide } from '../pages/About';
import About from '../pages/About';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test divide function', () => {
  describe('When given two integers', () => {
    it('should return a number', () => {
      expect(divide(4, 2)).toBe(2);
    });
  });
  describe('When trying to divide by 0', () => {
    it('should throw an error', () => {
      expect(() => divide(4, 0)).toThrowError("You can't divide by zero.");
    });
  });
});

test('renders learn react link', () => {
  render(<About />);
  const Version = screen.getByText(/Version/);
  expect(Version).toBeInTheDocument();
});
