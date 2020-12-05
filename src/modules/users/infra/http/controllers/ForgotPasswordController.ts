import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswodEmail = container.resolve(
      SendForgotPasswordEmailService,
    );

    await sendForgotPasswodEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}
