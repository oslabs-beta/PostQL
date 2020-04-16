export declare class Backoff {
    cb: any;
    count: number;
    running: boolean;
    timeout: any;
    maxRetries: number;
    constructor(cb: any);
    start(): Promise<void>;
    stop: () => void;
}
