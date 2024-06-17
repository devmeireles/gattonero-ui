import { render } from '@testing-library/react';
import Avatar, { AvatarProps } from '.';

describe('Avatar', () => {
  const renderAvatar = (props: AvatarProps) => render(<Avatar {...props} />);

  test('renders with default props', () => {
    const { container } = renderAvatar({
      src: 'https://thispersondoesnotexist.com/',
      alt: 'avatar',
    });
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with a custom size', () => {
    const { container } = renderAvatar({
      src: 'https://thispersondoesnotexist.com/',
      alt: 'avatar',
      size: 'lg',
    });
    expect(container.firstChild).toHaveClass('w-12 h-12');
  });
});
