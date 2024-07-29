![cover](https://kpkfzczpavanzocxzyta.supabase.co/storage/v1/object/public/oc-react/readme-header-oc-react-07.png)

<!-- ∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴ -->
<!-- ∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵∴∵  ∵ NPƸӜƷL1M ∴ ∴∵∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴ -->
<!-- ∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴ -->

# INSTALL SETUP

Local machine, Dev, build & Deploy

## IMAGES OPTIMIZER

### INSTALL PYTHON

Use the python script (MACOS)

```
brew install python
```

Next upgrade package

```
pip3 install --upgrade pip --break-system-packages
```

### RUN IMAGESIZE.PY

python3 imageSize.py

- `argument1[SOURCE FOLDER]`
- `argument2[TARGET FOLDER]`
- `argument3[QUALITE INT[0-100]]`
- `argument4[SIZE%[0-100]]`

```
python3 imageSize.py /sourceFolder/ /targetFolder 90 30
```

## INSTALL RUNTIME

Install `Bun` with Homebrew on Mac (By Nepha Code) For Neah

```
brew tap oven-sh/bun
brew install bun
```

Create a new file **package.json**

```
{
  "name": "oc-06-fisheye",
  "module": "index.html",
  "type": "module",
  "scripts": {
    "dev": "BROWSER='firefox-developer-edition' vite --open",
    "build": "vite build",
    "preview": "vite preview",
    "serve": "vite preview"
  },
  "overrides": {
    "rollup": "npm:@rollup/wasm-node"
  },
  "devDependencies": {
    "@types/bun": "latest",
    "vite": "latest",
    "sass": "latest",
    "eslint": "latest",
    "prettier": "latest"
  },
  "peerDependencies": {
    "typescript": "latest"
  },
  "dependencies": {
    "vite": "latest"
  },
  "optionalDependencies": {
    "@rollup/rollup-linux-x64-gnu": "latest"
  }
}
```

## INSTALL WITH BUN

```
bun init
bun add vite
```

```
bun create vite fisheyes --template vanilla
```

```
bun install
```

```
bun run dev
```

## PRODUCTION

This project manage with **BUN** and **Github Action**
_No Release auto iteration_
_Branch release_ (without pull request)

Default config `bun.lockb`, `.nojekyll`, `.gitignore`

### GENERATE FILE

```
bun vite build
```

### CI/CD WITH RELEASE

When you commit, add tag `v0.x.x` or `v1.x.x`
Add the yaml configuration with push tag

```
on:
  push:
    tags:
      - 'v*'  # Déclencheur sur les tags qui commencent par 'v'
```

### INSTALL LINTER

> > install

```
bun install eslint --save-dev
```

> > Load

```
./node_modules/.bin/eslint --init
```

PROCESS
OK [Y]

1.  How would you like to use ESLint? · problems
2.  What type of modules does your project use? · esm
3.  Which framework does your project use? · none
4.  Does your project use TypeScript? · javascript
5.  Where does your code run? · browser

eslint@9.x, globals, @eslint/js

1. Would you like to install them now? · Yes
2. Which package manager do you want to use? · bun

Settings.json

```
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": ["javascript"]
}
```

Vite > restart

With my best my girl

![cover](https://kpkfzczpavanzocxzyta.supabase.co/storage/v1/object/public/oc-react/readme-footer-oc-react-06.png)
