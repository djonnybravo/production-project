import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button tests with React Testing library', () => {
    test('with first param', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
