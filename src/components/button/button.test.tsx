import { render } from '@testing-library/react';
import { Button, ButtonProps } from '.';

describe('Button', () => {
  const renderButton = (props: ButtonProps) => render(<Button {...props} />);

  test('renders with primary color and contained variant', () => {
    const { container } = renderButton({
      primary: true,
      size: 'medium',
      label: 'Button',
    });
    expect(container.firstChild).toHaveClass('bg-green-500');
  });
});
