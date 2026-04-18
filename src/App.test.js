// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DriftProtocol title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DriftProtocol/i);
    expect(titleElement).toBeInTheDocument();
});
