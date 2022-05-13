import fs from 'fs'

/* Configurations */
const file = './logs.csv';

/* Note: We could use Redis for this */
const saveLog = async (data: Record<string, any>) => {

    const _data = typeof (data) === 'object' ? JSON.stringify(data) : data;

    fs.appendFileSync(file, _data + '\n');
}

export { saveLog };
