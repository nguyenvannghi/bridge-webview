
# bridge-webview
Communication between native app and web app

Install using npm:

    npm install bridge-webview

Install using yarn:

    yarn add bridge-webview

> Be sure to add the **window[_CONTEXT_KEY_] = window** into your
> project
_CONTEXT_KEY: This is defined by native

## Import required:

 **Call HTTP request methods:**

    import {postApi, getApi, putApi, deleteApi} from  'bridge-webview';
 **Get response API :**

     import {fetchAPISucceed, fetchAPIFailed} from  'bridge-webview';

**Push action for native:**

    import {callNativeLocalService} from  'bridge-webview';

**Get data from native:**

    import {getNativeLocalService} from  'bridge-webview';
   




