
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://live-as-sky.game.163.com/account/get_outfit`;
const method = `POST`;
const headers = {
'Host' : `live-as-sky.game.163.com`,
'X-Session-ID' : `1C859C56-85B3-4DD1-BFF3-2B4E11306CFF`,
'User-Agent' : `Sky-Main-com.netease.sky/0.7.1.160990 (iPad8,9; iphoneos 14.4.0; zh-Hans)`
};
const body = `{"user":"dc7e79ca-07fe-486f-8331-156adc2ea546","body":"33emCbjTNwxqD95KSJFfLrG8cOFmefe9llHbZZv4pxGClcJ/U9z1vMPDkGK4rCzILZFAVJji1A4yp4eK9n2XlVayf2XtD+eWOgNX7jU8pZkYEJch5WA+tG1/3qU="}`;

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
