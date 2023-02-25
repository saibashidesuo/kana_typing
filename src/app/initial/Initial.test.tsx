import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Initial from './Initial';

describe('初期画面', () => {
  test('ボタンが押下されると、ボタンに設定されているイベントが発効すること', () => {
    const mockedStart = jest.fn();
    render(<Initial start={mockedStart} />);
    userEvent.click(screen.getByRole('button'));

    expect(mockedStart).toHaveBeenCalledTimes(1);
  });
});
