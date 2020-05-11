<p align="center">
  <a href="https://github.com/nelsonsilva/setup-k3s/actions"><img src="https://github.com/nelsonsilva/setup-k3s/workflows/build-test/badge.svg"></a>
</p>

# K3s GitHub action

This action sets up a K3s cluster.

## Example usage

```yaml
uses: nelsonsilva/setup-k3s
```

## Developing

Install the dependencies  
```bash
$ npm install
```

Build and package it for distribution
```bash
$ npm run build
```

If you want to run the action locally you can also use:
```bash
$ npx ts-node src/main.ts
```

## Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder. 

Then run [ncc](https://github.com/zeit/ncc) and push the results:
```bash
$ git switch -c releases/v0.1.0
$ npm run build
$ git add -f dist
$ git commit -m "Release v0.1.0"
$ git push origin releases/v0.1.0
```

The action is now published! :rocket:
