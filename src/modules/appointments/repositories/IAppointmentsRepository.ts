import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllMonthFromProviderDTO from '../dtos/IFindAllMonthFromProviderDTO';
import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllMonthFromProviderDTO,
  ): Promise<Appointment[]>;
}
