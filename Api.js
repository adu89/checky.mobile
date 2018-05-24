const baseUrl = 'http://localhost:5000/api';

var adminToken = '';

async function getInventoryItems() {
    try {
        let response = await fetch(baseUrl + '/inventory-items');
        let json = response.json();
        return json;
    } catch (e) {
        console.log(e)
        return {};
    }
}

async function loginAdmin(username, password) {
    console.log(adminToken);
    try {
        let response = await fetch(baseUrl + '/auth', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=password&username=' + username + '&password=' + password
        });
        if(response.status != 200)
            throw '';
        let json = await response.json();
        console.log(response);
        adminToken = json.access_token;
        return true;
    } catch (e) {
        return false;
    }
}

async function syncDevice(deviceName, authToken, organizationGuid) {
    try {
        var body = {
            deviceName: deviceName
        };
        if (organizationGuid) {
            body.organization = {
                organizationGuid: organizationGuid
            };
        }
        let response = await fetch(baseUrl + '/devices', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify(body)
        });
        let json = response.json();
        return json;
    } catch (e) {
        console.log(e)
        return {};
    }
}

async function createOrder() { }

async function updateInventoryItem() { }

export default {
    loginAdmin: loginAdmin,
    getInventoryItems: getInventoryItems,
    syncDevice: syncDevice
};