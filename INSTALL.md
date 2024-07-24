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

Create a new file
```
{
"name": "oc-06-fisheye",
"module": "index.ts",
"type": "module",
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"serve": "vite preview"
},
"devDependencies": {
"@types/bun": "latest",
"sass": "^1.77.4",
"vite": "^5.2.12"
},
"peerDependencies": {
"typescript": "^5.0.0"
},
"dependencies": {
"vite": "^5.3.3"
}
}
```

Install with `Bun`

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
*No Release auto iteration*
*Branch release* (without pull request)

Default config  `bun.lockb`, `.nojekyll`, `.gitignore`

### GENERATE FILE
```
bun vite build
```
![cover](https://kpkfzczpavanzocxzyta.supabase.co/storage/v1/object/public/oc-react/readme-footer-oc-react-06.png)