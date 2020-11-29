import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('Should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUsers = new CreateUserService(fakeUsersRepository);

    const user = await createUsers.execute({
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a unew ser with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUsers = new CreateUserService(fakeUsersRepository);

    await createUsers.execute({
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    expect(
      createUsers.execute({
        name: 'Rodrigo',
        email: 'rodrigo@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
