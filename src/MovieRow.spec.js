import {render, screen} from '@testing-library/react';
import MovieRow from './MovieRow';

describe('MovieRow', () => {
  it('component will display text', () => {
    const movie = {title: 'Black Panther: Wakanda Forever'};
    render(<MovieRow movie={movie} />);
    expect(screen.getByText(movie.title)).toBeVisible();
  });
  it('render icon if movie added today', () => {
    const movie = {addedToday: true};
    render(<MovieRow movie={movie} />);
    expect(screen.getByTestId('movie-added-today-icon')).toBeVisible();
  });
  it('do not render icon if the movie was not added today', () => {
    const movie = {addedToday: false};
    render(<MovieRow movie={movie} />);
    expect(
      screen.queryByTestId('movie-added-today-icon'),
    ).not.toBeInTheDocument();
  });
});
