import { Context } from './Context';
declare class DeveloperToolboxError extends Error {
    isDeveloperToolboxError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { DeveloperToolboxError };
