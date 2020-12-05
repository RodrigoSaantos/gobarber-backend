import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUsers: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUsers = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('Should be able to create a new user', async () => {
    const user = await createUsers.execute({
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a unew ser with same email from another', async () => {
    await createUsers.execute({
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    await expect(
      createUsers.execute({
        name: 'Rodrigo',
        email: 'rodrigo@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
