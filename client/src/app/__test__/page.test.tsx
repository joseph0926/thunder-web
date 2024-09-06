import DashboardPage from '@/app/(dashboard)/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Basic page test', () => {
  render(<DashboardPage />);
  expect(screen.getByText('DashboardPage')).toBeDefined();
});
