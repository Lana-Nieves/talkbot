# Postgres migrations
> If we needed to reverse something, we could just push another migration negating whatever we did that went boom ... Why roll back when you can roll forward?

> npm run migrate

### File name

A migration file must match the following pattern:

`[id][separator][name][extension]`

| Section   | Accepted Values                   | Description                                                                                                                      |
| --------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| id        | Any integer or left zero integers | Consecutive integer ID. <br />**Must start from 1 and be consecutive, e.g. if you have migrations 1-4, the next one must be 5.** |
| separator | `_` or `-` or nothing             |                                                                                                                                  |
| name      | Any length text                   |                                                                                                                                  |
| extension | `.sql` or `.js`                   | File extensions supported **not case sensitive**                                                                                 |

Example:

```text
src\sql
├ 1_create-initial-tables.sql
├ 2-alter-initial-tables.SQL
└ 3-alter-initial-tables-again.js
```

Or, if you want better ordering in your filesystem:

```text
src\sql
├ 00001_create-initial-tables.sql
├ 00002-alter-initial-tables.sql
└ 00003_alter-initial-tables-again.js
```

Migrations will be performed in the order of the ids.

Note that file names cannot be changed later.
