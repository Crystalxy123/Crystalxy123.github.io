# Legacy URL migration

The former port-based service cannot be preserved after the personal server is shut down because GitHub Pages serves HTTPS on the standard web port only. The mapping below preserves path-level continuity without retaining any runtime dependency on the old server.

| Legacy address or pattern | New canonical address | Handling |
| --- | --- | --- |
| Old bare IP homepage | `https://www.xiaoxingyu2001.com/` | DNS-independent legacy host cannot be redirected after shutdown; update all known links. |
| Port-8888 homepage on either domain variant | `https://www.xiaoxingyu2001.com/` | The port cannot be served by GitHub Pages. |
| `/projects?lang=zh` | `/projects/` | Static page reads the query and keeps Chinese. |
| `/projects?lang=en` | `/en/projects/` | Client compatibility redirect. |
| `/cv/?lang=zh` | `/about/` | Static legacy redirect. |
| `/cv/?lang=en` | `/en/about/` | Static legacy redirect. |
| `/projects/insight/?lang=zh` | `/projects/insight/` | Archived research-prototype page. |
| `/projects/insight/?lang=en` | `/en/projects/insight/` | Archived research-prototype page. |
| `/projects/insight/docs/` | `/projects/insight/` | Static redirect; method summary retained. |
| `/projects/idheas-eca/` | `/projects/idheas-eca/` | Archived demo page; backend interaction removed. |
| `/projects/kureas/` | `/projects/kureas/` | Archived toolkit overview. |
| `/projects/kureas/index_zh.html?lang=zh` | `/projects/kureas/` | Static redirect file. |
| `/projects/cogtool/index.html` | `/projects/` | Static redirect to current project index. |
| `/projects/cogtool/index_zh.html` | `/projects/` | Static redirect to current project index. |
| `/projects/smartrisk/` | `/projects/` | Static notice and redirect; key-backed backend removed. |
| `/publications/` | `/publications/` | Rebuilt as a static filterable list. |
| `/blog/` | `/` | Old placeholder blog archived; static redirect. |

## Dynamic tools

- **InSight-R:** research method and file-format description retained; upload analysis unavailable because it requires Python and probabilistic-model execution.
- **IDHEAS-ECA Assistant:** archived description retained; local API and any model-key flow removed.
- **SmartRisk:** archived because it requires a model key and server processing. Visitors are never asked to enter a key into the new site.
- **KUREAS:** represented as an archived toolkit overview until each browser-only module has a separate quality and security review.

Every generated production file is scanned for the former IP pattern, port 8888, loopback hosts, and localhost references. Historical server addresses appear only in migration/security documentation and never in `dist/`.

