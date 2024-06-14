import { render } from '@testing-library/react';
import { Button, ButtonProps } from '.';

describe('Button', () => {
  const renderButton = (props: ButtonProps) => render(<Button {...props} />);

  test('renders with default props', () => {
    const { container } = renderButton({
      children: 'Button',
    });
    expect(container.firstChild).toHaveTextContent('Button');
  });

  test('renders with a custom background color', () => {
    const { container } = renderButton({
      children: 'Button',
      backgroundColor: 'bg-red-500',
    });
    expect(container.firstChild).toHaveClass('bg-red-500');
  });

  test('renders with a custom border color', () => {
    const { container } = renderButton({
      children: 'Button',
      bordered: true,
      borderColor: 'border-red-500',
    });
    expect(container.firstChild).toHaveClass('border-red-500');
  });

  test('renders with a custom text color', () => {
    const { container } = renderButton({
      children: 'Button',
      textColor: 'text-red-500',
    });
    expect(container.firstChild).toHaveClass('text-red-500');
  });

  test('renders with a custom rounded size', () => {
    const { container } = renderButton({
      children: 'Button',
      rounded: true,
      roundedSize: 'rounded-lg',
    });
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  test('renders with an outlined style', () => {
    const { container } = renderButton({
      children: 'Button',
      outlined: true,
    });
    expect(container.firstChild).toHaveClass(
      'bg-transparent border border-black'
    );
  });

  test('renders with a hover background color', () => {
    const { container } = renderButton({
      children: 'Button',
      backgroundColor: 'bg-red-500',
      backgroundColorHover: 'bg-red-600',
    });
    expect(container.firstChild).toHaveClass('hover:bg-red-600');
  });

  test('renders with a hover border color', () => {
    const { container } = renderButton({
      children: 'Button',
      bordered: true,
      borderColor: 'border-red-500',
      borderColorHover: 'border-red-600',
    });
    expect(container.firstChild).toHaveClass('hover:border-red-600');
  });

  test('renders with a disabled state', () => {
    const { container } = renderButton({
      children: 'Button',
      disabled: true,
    });
    expect(container.firstChild).toHaveClass('opacity-50 cursor-not-allowed');
  });

  test('renders with a loading state', () => {
    const { container } = renderButton({
      children: 'Button',
      loading: true,
    });
    expect(container.firstChild).toHaveClass('opacity-50 cursor-wait');
  });

  test('renders with icons', () => {
    const { container } = renderButton({
      children: 'Button',
      prependIcon: <span>👈</span>,
      appendIcon: <span>👉</span>,
    });
    expect(container.firstChild).toContainHTML('<span>👈</span>');
    expect(container.firstChild).toContainHTML('<span>👉</span>');
  });

  test('renders with a small size', () => {
    const { container } = renderButton({
      children: 'Button',
      size: 'sm',
    });
    expect(container.firstChild).toHaveClass('px-2 py-1 text-sm');
  });

  test('renders with a medium size', () => {
    const { container } = renderButton({
      children: 'Button',
      size: 'md',
    });
    expect(container.firstChild).toHaveClass('px-4 py-2 text-base');
  });

  test('renders with a large size', () => {
    const { container } = renderButton({
      children: 'Button',
      size: 'lg',
    });
    expect(container.firstChild).toHaveClass('px-6 py-3 text-lg');
  });
});
