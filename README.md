# stack-counter-sdk

TypeScript SDK for collaborative on-chain counters on the Stacks blockchain — increment, snapshot, audit history.

## Install

```bash
npm install stack-counter-sdk
```

## Usage

```ts
import { buildReadOnlyUrl, parseContractId } from 'stack-counter-sdk';

const contract = parseContractId('SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C.stack-counter-a1');
if (contract) {
  const url = buildReadOnlyUrl({ contract, functionName: 'get-counter' });
  console.log(url);
}
```

## What's inside

- `constants` — network endpoints, project-specific defaults
- `utils` — address/contract-name validation, parsing, formatting, STX conversion
- `contract` — read-only call URL helpers
- `types` — `CounterState` and related shapes

## Scripts

```bash
npm test           # vitest run
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # tsup → dist/
```

## License

MIT
