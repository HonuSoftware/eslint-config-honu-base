import ESLintCodeReview from 'eslint-code-review';
import { expect } from 'chai';

import config from '../rules/es6';

describe('arrow-body-style', () => {
  it('should fail when only returning', () => {
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

  it('should succeed with mapping format', () => {
    const code = `
      const success1 = () => 2;
    `;
    const messages = new ESLintCodeReview(code, config);
    expect(messages).to.be.an('object', typeof messages);
    expect(messages.length).to.equal(0);
    expect(messages.ruleMatch('arrow-body-style')).to.equal(false);
  });

  it('should succeed with function format', () => {
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
