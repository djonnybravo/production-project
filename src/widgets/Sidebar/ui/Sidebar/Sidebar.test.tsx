import { Sidebar } from 'widgets/Sidebar';
import { render, screen } from '@testing-library/react';

describe('Sidebar tests', () => {
    test('', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
