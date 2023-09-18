import { render } from '@testing-library/react';

import Artists from './artists';

describe('Artists', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Artists />);
    expect(baseElement).toBeTruthy();
  });
});
