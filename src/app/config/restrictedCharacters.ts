export function getRestrictedCharacters() {
  let restrictedCharacters = window.app.config.restrictedCharacters || {};
  restrictedCharacters = ['"', "'", '\0', '\b', '\n', '\r', '\t', '\u001A', '\\', '%', '_', '$'];
  return restrictedCharacters;
}
