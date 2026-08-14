# Security check

Check date: 2026-08-14  
Scope: files eligible for the new Git repository and generated `dist/`

## Result

The publishable site contains no environment file, credential file, private key, database connection, backend token, model key, server password, or private contact detail. The legacy workspace is retained locally and ignored as a whole because it contains multiple high-risk files and mixed research assets.

## Checks performed

| Category | Result |
| --- | --- |
| `.env`, `.env.local`, and environment variants | None are tracked. Legacy environment files are inside the ignored workspace. |
| API keys, access keys, client secrets, passwords, and tokens | No matching secret-bearing assignment is present in the publishable tree. No values are recorded here. |
| SSH/private keys, PEM/P12/key files | None are tracked. |
| Personal phone, residential address, identity document | Not published. |
| Public contact information | Academic Tsinghua email and previously public academic-profile links only. |
| Server IP, port 8888, localhost, loopback, backend API | Absent from generated production files; historical references remain only in migration documentation. |
| Databases and local data | None are tracked. |
| Full-text papers | Publisher PDFs are not copied into the public repository. |
| Current CV PDF | Not published because no current privacy-reviewed formal PDF was found. |
| Research data and unpublished material | None are migrated from the mixed legacy workspace. |
| `node_modules`, build cache, logs, editor files | Excluded by `.gitignore`. |
| Nested Git repositories | Remain under the ignored legacy workspace and are not staged. |
| Generated site link/security scan | Passed through `npm run verify:build`. |

## Legacy risks found and contained

- Multiple real `.env` files.
- Local deployment settings and historical server references.
- Model-backed tools that asked users for an API key.
- Python environments, packaged binaries, logs, research datasets, and large archives.
- Full conference proceedings and publisher PDFs with unclear redistribution rights.

The containment control is `/academic-website/` in the root `.gitignore`. Removing this rule without a separate repository-by-repository security and licensing review is prohibited.

## Pre-push release gate

Before every publication:

1. inspect `git status --short` and `git diff --cached`;
2. confirm no ignored legacy file was force-added;
3. run `npm run check`;
4. scan tracked files by name for `.env`, keys, credentials, and archives;
5. scan tracked text for credential assignment patterns;
6. verify that the generated site contains no server address or backend endpoint;
7. push without `--force`.

