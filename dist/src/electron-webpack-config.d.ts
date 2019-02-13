export declare const electronConfig: {
    target: string;
    node: {
        __dirname: boolean;
    };
    module: {
        rules: {
            test: RegExp;
            use: string;
        }[];
    };
    externals: ({
        sharp: string;
        leveldown?: undefined;
    } | {
        leveldown: string;
        sharp?: undefined;
    })[];
    plugins: any[];
};
