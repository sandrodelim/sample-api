import { Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'src/interfaces/Task';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  private readonly tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      done: true,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      done: true,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
      done: false,
    },
  ];

  @Get()
  findAll (): Task[] {
    return this.tasks;
  }

  @Post()
  create (task: Task) {
    this.tasks.push(task);
  }
}
