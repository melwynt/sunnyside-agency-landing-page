## Description

This is a simple React and SASS Boilerplate with Parcel bundler:

- [parceljs](https://parceljs.org/)
- react
- react-dom
- sass

Node version in use:<br>
`v16.13.0`

Run `npm install` locally to install all required modules.

Run `npm run start` to start the live server locally.

Please give this repo a ⭐ if you found it useful! Thanks

## Why should you use this boilerplate?

Parcel is fast!<br>

And this boilerplate makes it super easy to get you up and running.

## Things I've added to get you up and running

In the `index.html` file, I've added the bare minimum.<br>

In `index.js` and `app.js`, you can replace the code with your React app.<br>

The code below will only apply in development.<br>

> Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things.

```javascript
if (module.hot) {
  module.hot.accept();
}
```

## HMR (Hot Module Replacement)

You might have noticed in `package.json` this line:

```
"start": "rm -rf public/* && parcel src/index.html --dist-dir public --port 1234 --hmr-port 4326 --host localhost --open"
```

Normally it would be enough to just enter:

```
"start": "parcel src/index.html"
```

HMR might fail on some machines hence the need to specify `--port`, `--hmr-port` and `--host`.

Source: [https://github.com/parcel-bundler/parcel/issues/6334#issuecomment-868853192](https://github.com/parcel-bundler/parcel/issues/6334#issuecomment-868853192)

```
rm -rf public/*
```

Each time we are running `npm run start`, we delete all the files inside the `public` folder to avoid stale files.

## Fork

You should fork this repo if you would like to use it.

If you decide to clone this repo, don't forget to change your Git remote URL:<br>
Here's a quick [How-To](https://devconnected.com/how-to-change-git-remote-origin/) guide.

```
git remote set-url origin <your-remote_url>
git remote -v
```

## Contact

🐦 Twitter: [@melwyncode](https://twitter.com/melwyncode)<br>
🧑‍💻 LinkedIn: [melwynturbant](https://www.linkedin.com/in/melwynturbant)
