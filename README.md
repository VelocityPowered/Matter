# Matter

Matter is the new website design for the Velocity project. It is still quite rough
and incomplete and depends on other dependencies that haven't yet been completed.

We started with the code from the old Velocity website, so this website has rather
unidiomatic React code. Contributions are appreciated!

## Starting

Matter is built on `create-react-app`. You can launch a dev server with:

```
$ yarn start
```

You can also build with:

```
$ yarn build
```

The website can then be deployed to Netlify or similar. Since the Velocity project
has a lot of infrastructure needs, we're deploying to a Kubernetes cluster.