import { describe, it, expect } from 'vitest';
import {
  microStxToStx,
  stxToMicroStx,
  isValidStacksAddress,
  isValidContractName,
  parseContractId,
  formatContractId,
  truncateAddress,
} from '../src/utils';

describe('microStxToStx / stxToMicroStx', () => {
  it('converts micro to STX', () => {
    expect(microStxToStx(1_000_000)).toBe(1);
    expect(microStxToStx(500_000)).toBe(0.5);
  });
  it('round-trips', () => {
    expect(stxToMicroStx(microStxToStx(1_234_567))).toBe(1_234_567);
  });
});

describe('isValidStacksAddress', () => {
  it('accepts mainnet SP addresses', () => {
    expect(isValidStacksAddress('SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C')).toBe(true);
  });
  it('rejects garbage', () => {
    expect(isValidStacksAddress('')).toBe(false);
    expect(isValidStacksAddress('not-an-address')).toBe(false);
  });
});

describe('isValidContractName', () => {
  it('accepts standard names', () => {
    expect(isValidContractName('stack-counter-a1')).toBe(true);
    expect(isValidContractName('counter1')).toBe(true);
  });
  it('rejects empty or leading digit', () => {
    expect(isValidContractName('')).toBe(false);
    expect(isValidContractName('1bad')).toBe(false);
  });
});

describe('parseContractId / formatContractId', () => {
  it('parses valid id', () => {
    const got = parseContractId('SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C.stack-counter-a1');
    expect(got?.name).toBe('stack-counter-a1');
  });
  it('returns null for malformed', () => {
    expect(parseContractId('garbage')).toBeNull();
  });
  it('formats round-trip', () => {
    const id = formatContractId('SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C', 'x');
    expect(id).toContain('.x');
  });
});

describe('truncateAddress', () => {
  it('truncates long addresses', () => {
    const r = truncateAddress('SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C');
    expect(r).toBe('SP16...6N4C');
  });
  it('returns short address as-is', () => {
    expect(truncateAddress('short')).toBe('short');
  });
});
