const Queue = require('./index');

describe('Queue from stack', () => {
  it('should return a queue when using 2 stacks', () => {
    const q = new Queue();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);

    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(4);
  });
});
