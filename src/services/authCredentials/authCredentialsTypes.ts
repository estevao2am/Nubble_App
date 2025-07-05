import { AuthCredentials } from "../../domain/Auth/authTypes";

export interface AuthCredentialsService {
    authCredentials: AuthCredentials | null   // Nem sempre o usuario estará logado
    saveCredentials : (ac: AuthCredentials) => Promise<void>
    removeCredentials: () => Promise<void>
    isLoading: boolean
}