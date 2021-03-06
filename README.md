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
$ git switch -c tmp
$ npm run build
$ git add -f dist
$ npm version minor -f
$ git push $(git tag --points-at HEAD)
$ git checkout master
$ git branch -D tmp
```

The action is now published! :rocket:
