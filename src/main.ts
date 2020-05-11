import {setFailed} from '@actions/core'
import {exec} from '@actions/exec'

const sh = `
curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644;
mkdir ~/.kube && cp /etc/rancher/k3s/k3s.yaml ~/.kube/config;
`;

try {
  if (process.platform !== 'linux') {
    throw new Error('Only Linux supported for now')
  }
  exec('bash', ['-c', sh])
} catch (error) {
  setFailed(error.message)
}
