const { expect } = require('chai');
const wrap = require('./wrap');



describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Adds line breaks to keep row length below the supplied number', () => {
    const text = 'abcdefghijklmnopqrstuvwxyz';
    expect(wrap(text, 3)).to.equal('abc\ndef\nghi\njkl\nmno\npqr\nstu\nvwx\nyz');
  });
  it('Doesnt add line break if lenght of string is exactly target length', () => {
    const text = 'abc';
    expect(wrap(text, 3)).to.equal('abc');
  });
  it('Takes into account already existing line breaks', () => {
    const text = 'a\nbcdefghijklmnopqrstuvwxy\nz';
    expect(wrap(text, 3)).to.equal('a\nbcd\nefg\nhij\nklm\nnop\nqrs\ntuv\nwxy\nz');
  });
  it('Returns the original string if column parameter is <= 0', () => {
    const text = 'sdfsfss';
    expect(wrap(text, 0)).to.equal(text);
  });
});
