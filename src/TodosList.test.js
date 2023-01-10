import React from 'react';
//import { shallow } from 'enzyme';
// Commented because this testing dependency
// might be causing npm issues when running 
// npm install
import TodosList from './TodosList';

describe('TodosList component', () => {
  it('renders without crashing', () => {
    shallow(<TodosList />);
  });

  it('renders the correct number of list items', () => {
    const todos = [
      { task_id: 1, description: 'Task 1', completed: false },
      { task_id: 2, description: 'Task 2', completed: true },
      { task_id: 3, description: 'Task 3', completed: false },
    ];
    const wrapper = shallow(<TodosList todos={todos} />);
    expect(wrapper.find('.list-item').length).toEqual(todos.length);
  });

  it('calls the deleteTask function when the delete button is clicked', () => {
    const deleteTask = jest.fn();
    const wrapper = shallow(<TodosList deleteTask={deleteTask} />);
    wrapper.find('.button-delete').simulate('click');
    expect(deleteTask).toHaveBeenCalled();
  });

  it('calls the markTaskCompleted function when the complete button is clicked', () => {
    const markTaskCompleted = jest.fn();
    const wrapper = shallow(<TodosList markTaskCompleted={markTaskCompleted} />);
    wrapper.find('.button-complete').simulate('click');
    expect(markTaskCompleted).toHaveBeenCalled();
  });

  it('calls the handleEdit function when the edit button is clicked', () => {
    const handleEdit = jest.fn();
    const wrapper = shallow(<TodosList handleEdit={handleEdit} />);
    wrapper.find('.button-edit').simulate('click');
    expect(handleEdit).toHaveBeenCalled();
  });

  it('displays the correct task description in the list item', () => {
    const todos = [{ task_id: 1, description: 'Task 1', completed: false }];
    const wrapper = shallow(<TodosList todos={todos} />);
    expect(wrapper.find('.list').props().value).toEqual('Task 1');
  });
});
