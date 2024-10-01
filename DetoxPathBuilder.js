class MyPathBuilder {
  constructor({rootDir}) {
    this._rootDir = rootDir;
  }

  buildPathForTestArtifact(artifactName, testSummary) {
    /* ... use this._rootDir ... */
    return './__tests__/artifacts/current/' + artifactName;
  }
}

module.exports = MyPathBuilder;
