import { render } from '@testing-library/react';

import GamelistUi from './gamelist-ui';

describe('GamelistUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GamelistUi />);
    expect(baseElement).toBeTruthy();
  });
});
