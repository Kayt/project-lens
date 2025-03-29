import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-file'

export default {
    input: 'build/compiled/index.js',
    plugins: [cleanup()],
    output: [
        {
            file: 'dist/lens.js',
            format: 'esm',
            plugins: [filesize()],
        }
    ]
}