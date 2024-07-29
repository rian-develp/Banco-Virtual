
const baseUrl = 'https://api-credit-card-792613245.development.catalystserverless.com/server/'

export const DoRequest = async (method, endPoint, data) => {
    const response = await fetch(baseUrl+endPoint, {
    method: method,
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': 'xhjXi2YSrWVQ03c2johE3er4U3Cud24k5AzFUljrfm9LYC2YhykbJdGepiDIZwzJ.creditcard',
    'X-User-Id': '10205000000176097'
    },
    body: JSON.stringify(data),
    });

    var res = await response.json()

    console.log('REQUEST =>')
    console.log('POST => '+baseUrl+endPoint)
    console.log('BODY => '+JSON.stringify(data))
    console.log('\n\n ')
    console.log('RESULT =>')
    console.log('POST =>'+baseUrl+endPoint)
    console.log('CODE => '+response.status)
    console.log('RESPONSE => '+JSON.stringify(res, null, 2))
    
    return {
    code: response.status,
    body: res
    };
}