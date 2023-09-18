import { render } from '@testing-library/react';

import Playlists from './playlists';

describe('Playlists', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Playlists />);
    expect(baseElement).toBeTruthy();
  });
});
