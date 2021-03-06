class Vector {

	constructor(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}

	get mag() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}

	get mag2() {
		return Math.pow(this.x, 2) + Math.pow(this.y, 2);
	}

	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	add(a, b) {
		if (arguments.length === 1) {
			this.x += a.x;
			this.y += a.y;
		} else {
			this.x += a;
			this.y += b;
		}
		return this;
	}

	sub(a, b) {
		if (arguments.length === 1) {
			this.x -= a.x;
			this.y -= a.y;
		} else {
			this.x -= a;
			this.y -= b;
		}
		return this;
	}

	mult(factor) {
		this.x *= factor;
		this.y *= factor;
		return this;
	}

	div(factor) {
		this.x /= factor;
		this.y /= factor;
		return this;
	}

	rotate(angle) {
		const x = Math.cos(angle) * this.x - Math.sin(angle) * this.y;
		const y = Math.sin(angle) * this.x - Math.cos(angle) * this.y;
		this.set(x, y);
		return this;
	}

	normalize() {
		const mag = this.mag;
		if (mag === 0) return this;
		this.div(mag);
		return this;
	}

	toIsometric() {
		const x = this.x - this.y;
		const y = (this.x + this.y) / 2;
		this.set(x, y);
		return this;
	}

	toCartesian() {
		const x = (2 * this.y + this.x) / 2;
		const y = (2 * this.y - this.x) / 2;
		this.set(x, y);
		return this;
	}

	mod(factor1, factor2) {
		if (!factor2) factor2 = factor1;
		this.x = this.x % factor1;
		this.y = this.y % factor2;
		return this;
	}

	distanceTo(other) {
		return Vector.sub(other, this).mag;
	}

	distance2To(other) {
		return Vector.sub(other, this).mag2;
	}

	clone() {
		return new Vector(this.x, this.y);
	}

	static add(a, b) {
		return new Vector(a.x + b.x, a.y + b.y);
	}

	static sub(a, b) {
		return new Vector(a.x - b.x, a.y - b.y);
	}

	static mult(a, factor) {
		return new Vector(a.x * factor, a.y * factor);
	}

	static div(a, factor) {
		return new Vector(a.x / factor, a.y / factor);
	}

	static normalize(a) {
		const mag = a.mag;
		return new Vector(a.x / mag, a.y / mag);
	}

	static toIsometric(a, b) {
		if (arguments.length === 1) {
			const x = a.x - a.y;
			const y = (a.x + a.y) / 2;
			return new Vector(x, y);
		} else {
			const x = a - b;
			const y = (a + b) / 2;
			return new Vector(x, y);
		}
	}

	static toCartesian(a, b) {
		if (arguments.length === 1) {
			const x = (2 * a.y + a.x) / 2;
			const y = (2 * a.y - a.x) / 2;
			return new Vector(x, y);
		} else {
			const x = (2 * a + b) / 2;
			const y = (2 * a - b) / 2;
			return new Vector(x, y);
		}
	}

	static dist(a, b) {
		const diff = Vector.sub(b, a);
		return diff.mag;
	}

	static dist2(a, b) {
		const diff = Vector.sub(b, a);
		return diff.mag2;
	}

}
