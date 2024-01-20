This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Contentful throws `SyntaxError: Unexpected token ';'. Expected an opening '(' before a method's parameter list.` on iPhone 6 iOS 12.5.7 when used in the Pages router in Next.js 

When used in the App router there is no error.

[Connect iPhone to Safari Technology Preview](https://www.browserstack.com/guide/how-to-debug-on-iphone)

[Go to https://contentful-test-sepia.vercel.app/](https://contentful-test-sepia.vercel.app/) and check the console on your phone in Safari Technology Preview.

The homepage uses the App router and no error is logged. Click the link Go to the pages router [(or open here)](https://contentful-test-sepia.vercel.app/page-router)

The console now throws `SyntaxError: Unexpected token ';'. Expected an opening '(' before a method's parameter list.`

Alternatively clone this repo. Install locally and connect to your localhost using ngrok or a similar service.
