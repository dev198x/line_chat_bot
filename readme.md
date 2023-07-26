### Using a ngrok to make an https url 
step 1: Install ngrok global
```
npm install -g ngrok
```
step 2: Login to [dashboard](https://dashboard.ngrok.com) to add authen
```
ngrok config add-authtoken 1flDPUiyWhvnH3EUqw71V0Rd0re_45jqLvaLRXxuphArd9vpe
```
step 3: Run ngrok on this port:
```
ngrok http 3000
```
step 4: Run server on this port:
```
yarn dev
```

---------------
### Chat message through webhook
[Bot message information](https://developers.line.biz/en/reference/messaging-api/#bot)

[Flow communication](https://blog.sirateek.dev/get-started-using-line-messaging-api-4f9f3ccd81bd)

There are two way sending message via message api:
    - **reply**: user send message to the server, then server send back base on replyToken.
    - **push**: server send message to user base on the userId.

Setup webhook url in the [Message Channel](https://developers.line.biz/console/channel/2000088084/messaging-api)


**Reference docs**
- Retry key when sending message fail [doc](https://developers.line.biz/en/docs/messaging-api/retrying-api-request/#retry-failed-api-request-summary)
    
- Sending message [api](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)

   
- Message [types](https://developers.line.biz/en/docs/messaging-api/sending-messages/)
    
- Message [event](https://developers.line.biz/en/reference/messaging-api/#message-event)
  

------------
### Get user profile
**FE**: get profile id -> send id to server to get more information
**BE**: There are 2 way to consider
  1. FE send the accessToken to to the BE, then BE will use this accessToken to call the api user profile to get userId
  2. FE send the userId to the BE, then BE will use this userId with channelToken to get the user information.
   
**Enpoint url** in the login app: this will be redirect after login 
online web : https://polite-sable-ae4ae2.netlify.app/
local: link of ngrok 


User profile information [docs](https://developers.line.biz/en/docs/liff/using-user-profile/#sending-id-token)


#### Getting user profile api: 
**method1**: using accessToken
With this api to get userId: https://developers.line.biz/en/reference/line-login/#get-user-profile
id, name, message, avatar.

**method2**: using a [idToken](https://developers.line.biz/en/docs/line-login/verify-id-token/#get-an-id-token)
clientId: is the [login channel id](https://developers.line.biz/console/channel/2000069528/basics)

