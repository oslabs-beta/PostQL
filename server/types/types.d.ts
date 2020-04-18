interface Response extends Body {
  locals: { username: string; instance: any; logs: any; log: any };
  cookie: any;
  clearCookie: any;
}

interface Request extends Body {
  body: {
    username: any;
    password: any;
    email: any;
    type: any;
    queryString: any;
    outputMetrics: any; };
  params: { queryID: any; instanceID: any };
  cookies: { auth: any };

}
