import { render } from '@testing-library/react';

import { Container } from './container';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Container>
        <div>Test</div>
                
    </Container>);
    expect(baseElement).toBeTruthy();
  });
});
