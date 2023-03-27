import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieList from './MovieList';
import api from './api';

jest.mock('./api');

describe('MovieList', () => {
  it('should load movies upon first render', () => {
    const movies = [
      {id: 1, title: 'Movie 1'},
      {id: 2, title: 'Movie 2'},
    ];
    const response = {data: movies};
    api.get.mockResolvedValue(response);

    render(<MovieList />);
    expect(api.get).toBeCalledWith('/movies');

    waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeVisible();
      expect(screen.getByText('Movie 2')).toBeVisible();
    });
  });
  it('should add movies to the server and list', async () => {
    const user = userEvent.setup();
    const newMovieTitle = 'Movie3';

    api.get.mockResolvedValue({data: []});
    api.post.mockResolvedValue({data: {title: newMovieTitle}});

    render(<MovieList />);

    await user.type(
      screen.getByPlaceholderText('New movie title'),
      newMovieTitle,
    );
    await user.click(screen.getByText('Save'));

    expect(api.post).toBeCalledWith('/movies', {title: newMovieTitle});
    waitFor(() => {
      expect(screen.getByText(newMovieTitle)).toBeVisible();
    });
  });
});
