import { User } from '../../domain/entities/User';

export default interface UserRepository {
  getUserById(userId: string): Promise<User>;
  createUser(userData: User): Promise<User>;
  updateUser(userId: string, userData: User): Promise<User>;
  deleteUser(userId: string): Promise<void>;
}