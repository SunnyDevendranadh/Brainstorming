# Deployment

## GitHub Pages

1. Go to repository **Settings > Pages**
2. Source: **GitHub Actions**
3. The included workflow `.github/workflows/static.yml` will deploy `index.html` on every push to `master`

## Local Use

Simply open `index.html` in a browser. All state is stored in `localStorage`.

## Custom Domain

Add a `CNAME` file to the root and configure DNS.
