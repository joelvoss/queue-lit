class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Queue
 * @implements Iterable<Value>
 * @template Value
 */
export class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	/**
	 * clear
	 * @returns {void}
	 */
	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	/**
	 * push
	 * @param {Value} value
	 * @returns {number}
	 */
	push(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
		return this.#size;
	}

	/**
	 * pop
	 * @returns {Value | undefined}
	 */
	pop() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	/**
	 * size
	 * @returns {number}
	 */
	get size() {
		return this.#size;
	}

	/**
	 * Iterator
	 * @returns {IterableIterator<Value>}
	 */
	*[Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}
