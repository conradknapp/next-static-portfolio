Also, what exactly is the benefit of zeit:next exporting a static site?

Allows one to host on github pages, aws s3, etc. If you have a static site which does not have to render the app or fetch data on the backend before it is sent to the server you can gain a lot of speed. For all static deployments, you will be charged only for the bandwidth. You do not pay for computing resources and storage.
