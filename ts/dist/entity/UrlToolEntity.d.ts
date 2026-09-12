import { DeveloperToolboxEntityBase } from '../DeveloperToolboxEntityBase';
import type { DeveloperToolboxSDK } from '../DeveloperToolboxSDK';
import type { Control } from '../types';
import type { UrlTool, UrlToolCreateData } from '../DeveloperToolboxTypes';
declare class UrlToolEntity extends DeveloperToolboxEntityBase<UrlTool> {
    constructor(client: DeveloperToolboxSDK, entopts: any);
    make(this: UrlToolEntity): UrlToolEntity;
    create(this: any, reqdata?: UrlToolCreateData, ctrl?: Control): Promise<UrlToolEntity>;
}
export { UrlToolEntity };
