import { Account } from "./account.model";
import accountsFixture from "./account.fixtures.json"

class AccountService {
    public static create(): Account {
        return new Account();
    }

    public static async all() {
        const accounts = await Account.find();

        if (__DEV__ && accounts.length === 0) {
            return await this.seed()
        }

        return accounts
    }

    public static async get({ id }: { id: string }): Promise<Account> {
        return await Account.findOneOrFail(id)
    }

    public static async save(account: Account): Promise<void> {
        await account.save()
    }

    public static async delete(account: Account): Promise<void> {
        await Account.delete({ id: account.id });
    }

    public static async seed(): Promise<Account[]> {
        const accounts = [];

        for (const { name, username, password } of accountsFixture) {
            const account = new Account()
            Object.assign(account, { name, username, password })

            account.save()
            accounts.push(account)
        }

        return accounts
    }
}


export default AccountService;
