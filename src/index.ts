class Node {
	value: unknown;
	next: Node | undefined = undefined;

	constructor(value: unknown) {
		this.value = value;
	}
}

////////////////////////////////////////////////////////////////////////////////

/**
 * A simple queue implementation that follows the FIFO (First In, First Out)
 * principle.
 */
export class Queue {
	private head: Node | undefined;
	private tail: Node | undefined;
	private _size = 0;

	constructor() {
		this.clear();
	}

	/**
	 * Removes all elements from the queue.
	 */
	clear() {
		this.head = undefined;
		this.tail = undefined;
		this._size = 0;
	}

	/**
	 * Adds a new element to the queue.
	 */
	push(value: unknown) {
		const node = new Node(value);

		if (this.head && this.tail) {
			this.tail.next = node;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}

		this._size++;
		return this._size;
	}

	/**
	 * Removes and returns the first element in the queue.
	 */
	pop() {
		if (!this.head) return;

		const current = this.head;
		this.head = this.head.next;
		this._size--;
		return current.value;
	}

	/**
	 * Returns the number of elements in the queue.
	 */
	get size() {
		return this._size;
	}

	*[Symbol.iterator]() {
		let current = this.head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}
