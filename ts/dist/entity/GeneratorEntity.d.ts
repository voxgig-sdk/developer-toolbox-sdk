import { DeveloperToolboxEntityBase } from '../DeveloperToolboxEntityBase';
import type { DeveloperToolboxSDK } from '../DeveloperToolboxSDK';
import type { Control } from '../types';
import type { Generator, GeneratorLoadMatch, GeneratorListMatch, GeneratorCreateData } from '../DeveloperToolboxTypes';
declare class GeneratorEntity extends DeveloperToolboxEntityBase<Generator> {
    constructor(client: DeveloperToolboxSDK, entopts: any);
    make(this: GeneratorEntity): GeneratorEntity;
    load(this: any, reqmatch?: GeneratorLoadMatch, ctrl?: Control): Promise<GeneratorEntity>;
    list(this: any, reqmatch?: GeneratorListMatch, ctrl?: Control): Promise<GeneratorEntity[]>;
    create(this: any, reqdata?: GeneratorCreateData, ctrl?: Control): Promise<GeneratorEntity>;
}
export { GeneratorEntity };
