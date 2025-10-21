export class ModeProvider {
  constructor(defaultMode) {
    this._mode = defaultMode;
  }

  get mode() {
    return this._mode;
  }

  set mode(value) {
    if (!value) {
      console.error("Mode cannot be empty.");
      return;
    }
    this._mode = value;
  }
}

export default ModeProvider;
