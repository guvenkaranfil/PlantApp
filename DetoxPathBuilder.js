class MyPathBuilder {
  constructor({rootDir}) {
    this._rootDir = rootDir;
  }

  buildPathForTestArtifact(artifactName, testSummary) {
    /* ... use this._rootDir ... */
    console.log('this._rootDir:', this._rootDir);
    console.log('this._rootDir:', artifactName);
    return './__tests__/artifacts/current/' + artifactName;
  }
}

module.exports = MyPathBuilder;
