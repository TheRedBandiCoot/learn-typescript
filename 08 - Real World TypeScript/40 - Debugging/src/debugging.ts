const env = {
  SESSION_SECRET: 'env-secret',
  NODE_ENV: 'production',
} as const;

type Opions = {
  secret: string;
  cookie: {
    httpOnly: boolean;
    secure: boolean;
    maxAge: number;
  };
  resave: boolean;
  saveUninitialized: boolean;
  store: string;
};
const options = {
  secret: env.SESSION_SECRET,
  cookie: {
    httpOnly: {
      someValue: {
        anotherNestedValue: 5,
      },
    },
    secure: env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  },
  resave: true,
  saveUninitialized: true,
  store: 'test',
};

function session(value: boolean) {
  console.log(value);
}

session(options.cookie.httpOnly);
