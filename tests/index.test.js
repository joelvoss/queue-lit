import { Queue } from '../src/index';

describe(`queue`, () => {
	it('should add new elements', () => {
		const queue = new Queue();
		queue.push('🙃')
		expect(queue.pop()).toBe('🙃');
		queue.push('😀')
		queue.push('a')
		expect(queue.pop()).toBe('😀');
		expect(queue.pop()).toBe('a');

		const l = queue.push(0)
		expect(l).toBe(1);
	});

	it('should pop elements', () => {
		const queue = new Queue();
		expect(queue.pop()).toBe(undefined);
		expect(queue.pop()).toBe(undefined);

		queue.push('😀')

		expect(queue.pop()).toBe('😀');
		expect(queue.pop()).toBe(undefined);
	});

	it('should clear all elements', () => {
		const queue = new Queue();
		queue.clear();
		queue.push(1);
		queue.clear();
		expect(queue.size).toBe(0);

		queue.push(1);
		queue.push(2);
		queue.push(3);
		queue.clear();
		expect(queue.size).toBe(0);
	});

	it('should return its size', () => {
		const queue = new Queue();
		expect(queue.size).toBe(0);
		queue.push(0);
		expect(queue.size).toBe(1);
		queue.push(1);
		expect(queue.size).toBe(2);
		queue.push(2);
		expect(queue.size).toBe(3);
		queue.pop();
		expect(queue.size).toBe(2);
		queue.pop();
		expect(queue.size).toBe(1);
		queue.pop();
		expect(queue.size).toBe(0);
	});

	it('should be iterable', () => {
		const queue = new Queue();
		queue.push('a');
		queue.push('b');
		expect([...queue]).toStrictEqual(['a', 'b'])
	});
});
