import { render } from '@testing-library/react';

import Albums from './albums';

describe('Albums', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Albums />);
    expect(baseElement).toBeTruthy();
  });
});
