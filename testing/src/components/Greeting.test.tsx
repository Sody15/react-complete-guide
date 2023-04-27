import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const helloWorldElement = screen.getByText('Hello World', { exact: false });

    // Assert
    expect(helloWorldElement).toBeInTheDocument();
  });
  test('renders "Its good to see you" if the button NOT clicked', () => {
    render(<Greeting />);

    const pTag = screen.getByText(`It's good to see you`, { exact: false });

    expect(pTag).toBeInTheDocument();
  });

  test('renders "Changed!" if the button IS clicked', async () => {
    render(<Greeting />);

    const buttonEl = screen.getByRole('button');
    await userEvent.click(buttonEl);

    const pTag = screen.getByText('Changed!');

    expect(pTag).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', async () => {
    render(<Greeting />);

    const buttonEl = screen.getByRole('button');
    await userEvent.click(buttonEl);

    const pTag = screen.queryByText('Good to see you', { exact: false });

    expect(pTag).toBeNull();
  });
});
