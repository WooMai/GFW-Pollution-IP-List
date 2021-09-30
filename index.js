const fetch = require('node-fetch')

exports.handler = async (event) => {
    const res = await fetch('https://zh.wikiversity.org/w/api.php?action=parse&format=json&prop=wikitext&page=%E9%98%B2%E7%81%AB%E9%95%BF%E5%9F%8E%E5%9F%9F%E5%90%8D%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BC%93%E5%AD%98%E6%B1%A1%E6%9F%93IP%E5%88%97%E8%A1%A8&section=2', {
        headers: {
            'User-Agent': `GFW-Pollution-IP-List (+https://github.com/WooMai/GFW-Pollution-IP-List)`
        },
    })

    const json = await res.json();
    const wikitext = json['parse']['wikitext']['*'];
    const ips = wikitext.match(/(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g)

    const response = {
        statusCode: 200,
        body: JSON.stringify(ips, null, 2),
        headers: {
            'content-type': 'application/json'
        }
    };
    return response;
};