"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DefinePlugin = require('webpack/lib/DefinePlugin');
exports.electronConfig = {
    target: 'electron-renderer',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    },
    externals: [
        { sharp: 'commonjs sharp' },
        { leveldown: 'require("leveldown")' }
    ],
    plugins: [
        new DefinePlugin({
            'process.env.FLUENTFFMPEG_COV': false
        }),
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24td2VicGFjay1jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy9lbGVjdHJvbi13ZWJwYWNrLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRTVDLFFBQUEsY0FBYyxHQUFHO0lBQzFCLE1BQU0sRUFBRSxtQkFBbUI7SUFDM0IsSUFBSSxFQUFFO1FBQ0YsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDSDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsYUFBYTthQUNyQjtTQUNKO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtRQUMzQixFQUFFLFNBQVMsRUFBRSxzQkFBc0IsRUFBRTtLQUN4QztJQUNELE9BQU8sRUFBRTtRQUNMLElBQUksWUFBWSxDQUFDO1lBQ2IsOEJBQThCLEVBQUUsS0FBSztTQUN4QyxDQUFDO0tBQ0w7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGVmaW5lUGx1Z2luID0gcmVxdWlyZSgnd2VicGFjay9saWIvRGVmaW5lUGx1Z2luJyk7XG5cbmV4cG9ydCBjb25zdCBlbGVjdHJvbkNvbmZpZyA9IHtcbiAgICB0YXJnZXQ6ICdlbGVjdHJvbi1yZW5kZXJlcicsXG4gICAgbm9kZToge1xuICAgICAgICBfX2Rpcm5hbWU6IGZhbHNlLFxuICAgIH0sXG4gICAgbW9kdWxlOiB7XG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLm5vZGUkLyxcbiAgICAgICAgICAgICAgICB1c2U6ICdub2RlLWxvYWRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgZXh0ZXJuYWxzOiBbXG4gICAgICAgIHsgc2hhcnA6ICdjb21tb25qcyBzaGFycCcgfSxcbiAgICAgICAgeyBsZXZlbGRvd246ICdyZXF1aXJlKFwibGV2ZWxkb3duXCIpJyB9XG4gICAgXSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIG5ldyBEZWZpbmVQbHVnaW4oe1xuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LkZMVUVOVEZGTVBFR19DT1YnOiBmYWxzZVxuICAgICAgICB9KSxcbiAgICBdXG59OyJdfQ==