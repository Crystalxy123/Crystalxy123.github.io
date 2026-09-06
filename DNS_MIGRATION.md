# DNS migration to GitHub Pages

> Current configuration (2026-09-06): GitHub Pages uses `xiaoxingyu2001.com`, which serves the site over HTTPS. The repository now aligns its CNAME and canonical metadata with that existing domain. The www-domain instructions below are historical migration notes, not required steps for this release.

Canonical domain: `www.xiaoxingyu2001.com`  
Confirmed user-site target: `Crystalxy123.github.io`  
Check date: 2026-08-14 (Asia/Shanghai)

Do not change DNS until the default GitHub Pages URL is deployed and its main and deep bilingual routes have been tested.

## Current observed records

The pre-migration terminal check returned:

- `www.xiaoxingyu2001.com CNAME`: no CNAME record.
- `www.xiaoxingyu2001.com A`: `36.103.199.77`.
- `xiaoxingyu2001.com A`: `36.103.199.77`.
- `xiaoxingyu2001.com AAAA`: no record.
- HTTPS HEAD requests to both hostnames timed out during the check.

This differs from older task notes that referenced a different personal-server address. Preserve `36.103.199.77` as the rollback value only while the current server is still intentionally available.

## Records to remove or replace

After GitHub Pages is healthy:

1. remove the `www` A record pointing to `36.103.199.77`;
2. remove any other `www` A, AAAA, CNAME, URL-forwarding, or wildcard record that conflicts with the new CNAME;
3. replace the apex `@` A record pointing to `36.103.199.77` with the four GitHub Pages A records below;
4. do not create a wildcard `*` record.

## Records to add

Enter these records in the domain provider's DNS console:

| Type | Host/name | Value/target | Notes |
| --- | --- | --- | --- |
| CNAME | `www` | `Crystalxy123.github.io` | Do not append a repository name; some providers add the trailing dot automatically. |
| A | `@` | `185.199.108.153` | GitHub Pages apex record. |
| A | `@` | `185.199.109.153` | GitHub Pages apex record. |
| A | `@` | `185.199.110.153` | GitHub Pages apex record. |
| A | `@` | `185.199.111.153` | GitHub Pages apex record. |

Optional IPv6 records, recommended only if the provider and local network support IPv6 reliably:

| Type | Host/name | Value/target |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

Suggested TTL during migration: `600` seconds if the provider allows it. After the site is stable for 48 hours, a longer TTL such as `3600` seconds is reasonable.

## GitHub Pages setting

In the target repository:

1. open **Settings**;
2. choose **Pages** under “Code and automation”;
3. under **Build and deployment**, set **Source** to **GitHub Actions**;
4. under **Custom domain**, enter `www.xiaoxingyu2001.com` and choose **Save**;
5. wait for the DNS check to pass;
6. enable **Enforce HTTPS**.

The repository includes `public/CNAME`, but the Pages setting and external DNS are still required.

## Intended behavior

- `https://www.xiaoxingyu2001.com` serves the canonical site.
- `https://xiaoxingyu2001.com` redirects to the `www` canonical domain after GitHub validates both domain variants.
- Canonical tags, Open Graph metadata, sitemap entries, and structured data use the `www` address.

## Verification commands

```bash
dig www.xiaoxingyu2001.com CNAME +short
dig xiaoxingyu2001.com A +short
dig xiaoxingyu2001.com AAAA +short
curl -I https://www.xiaoxingyu2001.com
curl -I https://xiaoxingyu2001.com
```

Expected outcomes after propagation:

- the `www` CNAME resolves to `crystalxy123.github.io.` (DNS is case-insensitive);
- the apex A query returns the four `185.199.*.153` addresses;
- HTTPS responds without a certificate warning;
- the apex response redirects to the `www` hostname;
- `/en/`, `/projects/`, and `/projects/insight/` return successful responses.

DNS propagation can take from minutes to the previous record's TTL. GitHub's certificate issuance can take additional time after DNS becomes correct.

## Rollback

Rollback is possible only while the old server and its TLS configuration remain available:

1. remove the `www` CNAME to `Crystalxy123.github.io`;
2. restore `www` A to `36.103.199.77`;
3. remove the four GitHub Pages apex A records;
4. restore the apex `@` A record to `36.103.199.77`;
5. wait for DNS propagation and verify both hostnames;
6. keep the GitHub repository unchanged so deployment can be retried later.

Never mix the old-server A record and the GitHub Pages A records at the same hostname; visitors would be routed unpredictably.

## When the old server can be closed

Keep the old server available until all of these have remained true for at least 48 hours:

- the Pages workflow is green on the repository's deployed default branch (`master` during migration, or `main` after an optional default-branch rename);
- the default `Crystalxy123.github.io` site works;
- both custom-domain variants resolve as intended;
- GitHub Pages shows the custom domain as valid and Enforce HTTPS is on;
- Chinese, English, project deep links, the 404 page, and mobile navigation have been tested on the public domain;
- search, profile, and shared links no longer contain a port-8888 address.

The old `:8888` URLs will stop working permanently after shutdown. DNS cannot redirect a URL that explicitly requests a closed port.
