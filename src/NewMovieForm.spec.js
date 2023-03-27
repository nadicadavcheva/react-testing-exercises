import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMovieForm from './NewMovieForm';

describe('NewMovieForm', () => {
  let createHandler;
  let movieTitle;

  const renderAndSave = async () => {
    movieTitle = 'Black Panter';
    const user = userEvent.setup();
    createHandler = jest.fn().mockName('createHandler');

    render(<NewMovieForm onCreate={createHandler} />);
    await user.type(screen.getByPlaceholderText('New movie title'), movieTitle);
    await user.click(screen.getByRole('button', {name: 'Save'}));
  };

  it('component should shown on page', async () => {
    await renderAndSave();
    expect(screen.getByLabelText('New movie title')).toBeVisible();
  });
  it('component should reset input field after submit', async () => {
    await renderAndSave();
    expect(screen.getByPlaceholderText('New movie title')).toHaveValue('');
  });
  it('component should call create handler ', async () => {
    await renderAndSave();
    expect(createHandler).toHaveBeenCalledWith(movieTitle);
  });
});
