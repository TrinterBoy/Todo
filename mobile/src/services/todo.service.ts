import { ITodo } from '../../types/todoTypes';
import { HttpService } from './http.setvice';
import { Todo } from '../static/QUERY.KEY';

interface IUpdate {
    id: string;
    updatedTodo: ITodo
}

class TodoService extends HttpService {
  constructor() {
    super();
  }

  async getAllTodo() {
    const { data } = await this.get({ url: Todo });
    return data;
  }

  async addTodo(newTodo: ITodo ) {
    const data = await this.post({ url: Todo+'/create', data: { ...newTodo } });
    return data;
  }

  async updateTodo({ id, updatedTodo } : IUpdate) {
    const data = await this.put({
      url: Todo+`/update/${id}`,
      data: { ...updatedTodo },
    });
    return data;
  }

  async deleteTodo(id: string) {
    const data = await this.delete({ url: Todo+`/delete/${id}` });
    return data;
  }
}

const todoService = new TodoService();

export default todoService;
