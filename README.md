# About LocalOps

```
 _                    _  ___
| |    ___   ___ __ _| |/ _ \ _ __  ___
| |   / _ \ / __/ _` | | | | | '_ \/ __|
| |__| (_) | (_| (_| | | |_| | |_) \__ \
|_____\___/ \___\__,_|_|\___/| .__/|___/
                             |_|
```

LocalOps is a central cloud native deployment platform that enables developers to offer SaaS, BYOC (Bring your own
cloud), On-Prem, Self-hosted versions of their services in just a few minutes.

No need to write Dockerfiles, Kubernetes helm charts, Terraform/Pulumi scripts or hire DevOps engineers.

## How it works

1. Connect cloud account
2. Connect Github repos
3. Spin up environemnt and services
4. Push commits to deploy

```
                     +-----------------------+
                     |   User's GitHub Repo  |
                     |  (Code + Workflows)   |
                     +-----------+-----------+
                                 |
                                 v
                     +---------------------------+
                     |     LocalOps Platform     |
                     | (Build • Deploy • Manage) |
                     +-----------+---------------+
                                 |
          +----------+-----------+-----------+-----------+
          |          |                       |           |
          v          v                       v           v
    +---------+  +---------+           +-----------+  +-----------+
    |  AWS    |  |  GCP    |           |   Azure   |  |  On-Prem  |
    | Account |  | Account |           |  Account  |  | Servers   |
    +---------+  +---------+           +-----------+  +-----------+

```

## Top deployment modes

1. **SaaS:** Deploy services in own cloud account for all users to use.
2. **Single tenant SaaS:** Offer dedicated cluster and infrastructure for specific privacy/performance-demanding
   customers.
3. **Bring your own cloud (BYOC):** Let your customers bring their own cloud account to deploy and run your services.
   Connect, deploy and manage such environments remotely.
4. **Self-hosted / On-Prem:** Let your customers IT team get Kubernetes helm charts of your service, deploy and run on
   their own infrastructure (data centers, private clouds, edge locations, etc).

## Developer documentation

- See developer docs at [https://docs.localops.co](https://docs.localops.co)

## Get started

- Sign up now at [https://console.localops.co/signup](https://console.localops.co/signup) and start deploying your
  services in minutes!
- See a quick demo at [https://go.localops.co/tour](https://go.localops.co/tour).
- Learn more at [localops.co](https://localops.co)

## Join our community

- Join [discord server](https://discord.gg/tx6nJvCa).

# Building LocalOps documentation

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To
install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where docs.json is)

```
mintlify dev
```

### Publishing Changes

Install our Github App to auto propagate changes from your repo to your deployment. Changes will be deployed to
production automatically after pushing to the default branch. Find the link to install on your dashboard.

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `docs.json`
