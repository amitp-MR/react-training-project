import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe("footer component test cases", () => {
    test('footer should be visible to user', () => {
        const { getByText } = render(<Footer />);
        expect(getByText('About')).toBeTruthy();
    });
});
