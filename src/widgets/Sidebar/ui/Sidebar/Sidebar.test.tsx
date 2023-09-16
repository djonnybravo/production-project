import { Sidebar } from 'widgets/Sidebar';
import { render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';

describe('Sidebar tests', () => {
    test('', () => {
        const SideBarWithTranslation = withTranslation()(Sidebar);
        render(<SideBarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
