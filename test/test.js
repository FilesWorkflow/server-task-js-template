import fs from 'fs';
import task from '../dist/task.js';
const testFile0 = fs.readFileSync('test/test_file_0');
const testFile1 = fs.readFileSync('test/test_file_1');
const result = await task(
    [new File([testFile0], 'test_file_0'), new File([testFile1], 'test_file_1')],
);
console.log(result);