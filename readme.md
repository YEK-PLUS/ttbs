# TTBS Lib

# Installing

```bash
npm install @yek-plus/ttbs
```

# Usage

```js
const ttbs = require("@yek-plus/ttbs");
ttbs().get({ ttbsNo: 3501184 }).then(console.log);
```

# Options

| property | type       | required | default            | description            |
| -------- | ---------- | -------- | ------------------ | ---------------------- |
| fetch    | `function` | false    | node-fetch package | request fetch function |

# Methods

## get

### Input

| property | type     | required | default | description                              |
| -------- | -------- | -------- | ------- | ---------------------------------------- |
| ttbsNo   | `number` | true     | null    | Taşınmaz Ticareti Bilgi Sistemi Numarası |

### Response

```js
{
  status: Boolean,
  error: String,
  doc: {
    belgeNo: String,
    belgeTarihi: String,
    belgeDurumu: String,
    belgeDurumuBool: Boolean,
    isletmeAdi: String,
    isletmeSahibi: String,
    isletmeAdres: String,
  },
};
```

# Todo
- [ ] Write Tests
