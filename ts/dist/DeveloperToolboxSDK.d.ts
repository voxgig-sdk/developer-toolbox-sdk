import { GeneratorEntity } from './entity/GeneratorEntity';
import { UrlToolEntity } from './entity/UrlToolEntity';
import { UtilityEntity } from './entity/UtilityEntity';
export type * from './DeveloperToolboxTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { DeveloperToolboxEntityBase } from './DeveloperToolboxEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class DeveloperToolboxSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Generator(entopts?: Record<string, any>): GeneratorEntity;
    UrlTool(entopts?: Record<string, any>): UrlToolEntity;
    Utility(entopts?: Record<string, any>): UtilityEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): DeveloperToolboxSDK;
    tester(testopts?: any, sdkopts?: any): DeveloperToolboxSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof DeveloperToolboxSDK;
export { stdutil, config, BaseFeature, DeveloperToolboxEntityBase, DeveloperToolboxSDK, SDK, };
