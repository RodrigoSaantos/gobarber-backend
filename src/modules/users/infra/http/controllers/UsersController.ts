import { Request, Response } from 'express';
import CreateUserService from '@modules/users/services/CreateUserService';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({
        name,
        email,
        password,
      });

      // const userWithoutPassword = {
      //   id: user.id,
      //   name: user.name,
      //   email: user.email,
      //   created_at: user.created_at,
      //   updated_at: user.updated_at,
      // };

      return response.json(classToClass(user));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
