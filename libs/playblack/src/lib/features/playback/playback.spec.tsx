import { render } from '@testing-library/react';

import Playback from './playback';

describe('Playback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Playback />);
    expect(baseElement).toBeTruthy();
  });
});
