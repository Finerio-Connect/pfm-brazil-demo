import Account from '../models/Account';
import AccountPayload from '../payloads/AccountPayload';
import IAccountUpdatePayload from '../interfaces/IAccountUpdatePayload';
export default interface IAccountsClient {
    getList: (userId: number) => Promise<Account[]>;
    get: (id: string | number) => Promise<Account>;
    create: (accountToCreate: AccountPayload) => Promise<Account>;
    edit: (id: string | number, accountToUpdate: IAccountUpdatePayload) => Promise<Account>;
    delete: (id: string | number) => Promise<boolean>;
}
