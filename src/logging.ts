export const AUTOMATION_BRIDGE_LOG_PREFIX = '[automation-bridge] ';

export function withLogPrefix(message: string): string {
  return `${AUTOMATION_BRIDGE_LOG_PREFIX}${message}`;
}
