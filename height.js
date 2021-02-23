
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://live-as-sky.game.163.com/account/get_outfit`;
const method = `POST`;
const headers = {
'Host' : `live-as-sky.game.163.com`,
'X-Session-ID' : `5A9F1B1B-0A47-4785-8A69-FB6D30DD4903`,
'User-Agent' : `Sky-Main-com.netease.sky/0.7.1.160990 (iPad8,9; iphoneos 14.4.0; zh-Hans)`
};
const body = `{"user":"dc7e79ca-07fe-486f-8331-156adc2ea546","body":"cIB00UNWKdm3yxH7cmnMKuIsNJ9i8zTwRG6eNnwIt7vuEOFcsmbi88pJ+bsoNJV5CRjr1gInCcwUAaQcMxJ6OPyX0+JqFjICcGB76K+155v2uW9ZnhrDXuHndBw="}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
