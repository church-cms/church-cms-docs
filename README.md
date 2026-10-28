# ChurchCMS Documentation

Official documentation for **ChurchCMS** — an Open Source Church Management Software.

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## About ChurchCMS

ChurchCMS is a comprehensive, open-source church management system designed to streamline administrative tasks, member engagement, event management, and financial tracking for religious organizations.

---

## Links

- **Official Website**: [https://churchcms.app](https://churchcms.app)
- **Developer Website**: [https://gegosoft.com](https://gegosoft.com)
- **Documentation**: [https://github.com/church-cms/church-cms-docs](https://github.com/church-cms/church-cms-docs)

---

## Related Repositories

- **Laravel Backend**: [https://github.com/church-cms/church-cms-laravel](https://github.com/church-cms/church-cms-laravel)
- **Android App**: [https://github.com/church-cms/church-cms-android](https://github.com/church-cms/church-cms-android)
- **Documentation**: [https://github.com/church-cms/church-cms-docs](https://github.com/church-cms/church-cms-docs) (this repository)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.


---

## Local Development

Requires Node.js 24 and pnpm 10.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Documentation pages live in `contents/docs/` as `.mdx` files. The sidebar is defined in `settings/documents.ts`.

---

## Deploying

The site is built as a static export (`pnpm build` writes plain HTML to `out/`) and served by nginx from the CloudPanel server at `164.52.209.116`. No Node process runs in production.

### Automatic (GitHub Actions)

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and syncs `out/` to the server. It can also be started by hand from the **Actions** tab (**Deploy → Run workflow**).

The workflow needs two repository secrets:

| Secret               | Value                                                                  |
| -------------------- | ---------------------------------------------------------------------- |
| `DEPLOY_SSH_KEY`     | Private SSH key allowed to log in as `churchcms-docs`                  |
| `DEPLOY_KNOWN_HOSTS` | Output of `ssh-keyscan -t ed25519 164.52.209.116`                      |

### Manual

With an SSH key authorized for the `churchcms-docs` site user:

```bash
pnpm run deploy   # not `pnpm deploy`, which is a pnpm built-in
```

This installs dependencies, regenerates the search index, builds, and runs `rsync --delete` to `/home/churchcms-docs/htdocs/docs.churchcms.app`. The target can be overridden with `DEPLOY_HOST`, `DEPLOY_USER` and `DEPLOY_PATH`.

To preview the production build locally, run `pnpm build && pnpm start`.

### Server notes

- Site user `churchcms-docs`, managed in CloudPanel. SSL is a Let's Encrypt certificate that CloudPanel renews automatically.
- The vhost needs `try_files $uri $uri.html $uri/ =404;` and `error_page 404 /404.html;` so that clean URLs like `/docs/getting-started` resolve to `getting-started.html`.

---

## Contributing

We welcome contributions to improve this project.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Contact

For support or inquiries: hello@gegosoft.com
