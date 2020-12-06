import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('Should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Rodrigo Santos',
      email: 'ro_santos@gmail.com',
    });

    expect(updateUser.name).toBe('Rodrigo Santos');
    expect(updateUser.email).toBe('ro_santos@gmail.com');
  });

  it('Should not be able to update the profile from non-existing user', async () => {
    await expect(
      updateProfile.execute({
        user_id: 'non-existing-user-id',
        name: 'Rodrigo',
        email: 'rodrigo@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'user-exemplo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Rodrigo',
      email: 'ro_santos@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Rodrigo Santos',
        email: 'rodrigo@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Rodrigo Santos',
      email: 'ro_santos@gmail.com',
      old_password: '123456',
      password: '1234567',
    });

    expect(updateUser.password).toBe('1234567');
  });

  it('Should be not able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Rodrigo Santos',
        email: 'ro_santos@gmail.com',
        password: '1234567',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should be not able to update the password with wrong password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Rodrigo Santos',
        email: 'ro_santos@gmail.com',
        old_password: 'wrong-old-password',
        password: '1234567',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
