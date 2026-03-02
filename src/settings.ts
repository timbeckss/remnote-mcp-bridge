/**
 * Settings IDs and defaults for Automation Bridge plugin
 */

// Setting IDs
export const SETTING_ACCEPT_WRITE_OPERATIONS = 'automation-bridge-accept-write-operations';
export const SETTING_ACCEPT_REPLACE_OPERATION = 'automation-bridge-accept-replace-operation';
export const SETTING_AUTO_TAG_ENABLED = 'automation-bridge-auto-tag-enabled';
export const SETTING_AUTO_TAG = 'automation-bridge-auto-tag';
export const SETTING_JOURNAL_PREFIX = 'automation-bridge-journal-prefix';
export const SETTING_JOURNAL_TIMESTAMP = 'automation-bridge-journal-timestamp';
export const SETTING_WS_URL = 'automation-bridge-ws-url';
export const SETTING_DEFAULT_PARENT = 'automation-bridge-default-parent';

// Default values
export const DEFAULT_ACCEPT_WRITE_OPERATIONS = true;
export const DEFAULT_ACCEPT_REPLACE_OPERATION = false;
export const DEFAULT_AUTO_TAG = '';
export const DEFAULT_JOURNAL_PREFIX = '';
export const DEFAULT_WS_URL = 'ws://127.0.0.1:3002';

// Settings interface for type safety
export interface AutomationBridgeSettings {
  acceptWriteOperations: boolean;
  acceptReplaceOperation: boolean;
  autoTagEnabled: boolean;
  autoTag: string;
  journalPrefix: string;
  journalTimestamp: boolean;
  wsUrl: string;
  defaultParentId: string;
}
