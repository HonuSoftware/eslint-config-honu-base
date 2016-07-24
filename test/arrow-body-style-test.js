/* eslint-disable no-var, prefer-arrow-callback */

var ESLintCodeReview = require('eslint-code-review').default;
var expect = require('chai').expect;

var config = require('../rules/es6');

describe('arrow-body-style', function() {
  it('should fail when only returning', function() {
    const code = `
      const failureReturn = () => {
        return 1;
      }
    `;
    const messages = new ESLintCodeReview(code, config);
    expect(messages).to.be.an('object', typeof messages);
    expect(messages.length).to.equal(1);
    expect(messages.ruleMatch('arrow-body-style')).to.equal(true);
  });

  it('should succeed with mapping format', function() {
    const code = `
      const success1 = () => 2;
    `;
    const messages = new ESLintCodeReview(code, config);
    expect(messages).to.be.an('object', typeof messages);
    expect(messages.length).to.equal(0);
    expect(messages.ruleMatch('arrow-body-style')).to.equal(false);
  });

  it('should succeed with function format', function() {
    const code = `
      const success2 = () => {
        const testVar = 1;
        return testVar;
      };
    `;
    const messages = new ESLintCodeReview(code, config);
    expect(messages).to.be.an('object', typeof messages);
    expect(messages.length).to.equal(0);
    expect(messages.ruleMatch('arrow-body-style')).to.equal(false);
  });
});
