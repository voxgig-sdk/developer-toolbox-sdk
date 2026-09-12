import { DeveloperToolboxEntityBase } from '../DeveloperToolboxEntityBase';
import type { DeveloperToolboxSDK } from '../DeveloperToolboxSDK';
import type { Control } from '../types';
import type { Utility, UtilityCreateData } from '../DeveloperToolboxTypes';
declare class UtilityEntity extends DeveloperToolboxEntityBase<Utility> {
    constructor(client: DeveloperToolboxSDK, entopts: any);
    make(this: UtilityEntity): UtilityEntity;
    create(this: any, reqdata?: UtilityCreateData, ctrl?: Control): Promise<UtilityEntity>;
}
export { UtilityEntity };
