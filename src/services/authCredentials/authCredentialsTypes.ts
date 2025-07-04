import { AuthCredentials } from "../../domain/Auth/authTypes";

export interface AuthCredentialsService {
    authCredentials: AuthCredentials | null   // Nem sempre o usuario estará logado
    saveCredentials : (ac: AuthCredentials) => Promise<void>
    remove: () => Promise<void>
    isLoading: boolean
}