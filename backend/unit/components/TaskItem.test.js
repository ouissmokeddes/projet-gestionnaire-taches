// tests/unit/components/TaskItem.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../../../frontend/src/components/TaskItem';

describe('TaskItem', () => {
  const task = { id: 1, title: 'Test', status: 'open' };

  it('affiche le titre de la tâche', () => {
    render(<TaskItem task={task} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('déclenche onToggleStatus au clic', () => {
    const mockToggle = jest.fn();
    render(<TaskItem task={task} onToggleStatus={mockToggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
});