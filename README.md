First personal website/portfolio. Honestly as a DE and DevOps guy, I did more work implementing smooth deployment (since sveltekit does not integrate perfectly with github pages, yet) than I did actually designing and making the site haha.

## Working on local

Use `npm run dev` to develop. This will make the site accessible on http://localhost:5173/ by default.

## Deploying to github pages

1. Run the ff: 

```
npm run gh-pages

npm run deploy
```

This will deploy the build to the `gh-pages` branch, which Github Pages sources from. 

To preview the build itself, run `npm run preview`.

