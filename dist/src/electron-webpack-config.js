"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    externals: {
        sharp: 'commonjs sharp'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24td2VicGFjay1jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy9lbGVjdHJvbi13ZWJwYWNrLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsY0FBYyxHQUFHO0lBQzFCLE1BQU0sRUFBRSxtQkFBbUI7SUFDM0IsSUFBSSxFQUFFO1FBQ0YsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDSDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsYUFBYTthQUNyQjtTQUNKO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsZ0JBQWdCO0tBQzFCO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbGVjdHJvbkNvbmZpZyA9IHtcbiAgICB0YXJnZXQ6ICdlbGVjdHJvbi1yZW5kZXJlcicsXG4gICAgbm9kZToge1xuICAgICAgICBfX2Rpcm5hbWU6IGZhbHNlLFxuICAgIH0sXG4gICAgbW9kdWxlOiB7XG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLm5vZGUkLyxcbiAgICAgICAgICAgICAgICB1c2U6ICdub2RlLWxvYWRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgZXh0ZXJuYWxzOiB7XG4gICAgICAgIHNoYXJwOiAnY29tbW9uanMgc2hhcnAnXG4gICAgfVxufTsiXX0=