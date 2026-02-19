/* eslint max-len: 0 */

import type { Spring } from "../types";

interface ParticleState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  gravity: number;
  magnitude: number;
  radius: number;
  mass: number;
  direction: number;
  friction: number;
  springs: Spring[];
  masses: Particle[];
  color: string;
  width: number;
  height: number;
  [key: string]: any;
}

const INITIAL_STATE: ParticleState = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  gravity: 0,
  magnitude: 0,
  radius: 1,
  mass: 1,
  direction: Math.PI * 2,
  friction: 1,
  springs: [],
  masses: [],
  color: "#000000",
  width: 10,
  height: 10,
};

class Particle {
  state: ParticleState;

  constructor(state: ParticleState = structuredClone(INITIAL_STATE)) {
    this.state = state || ({} as ParticleState);
  }

  static create(state: Partial<ParticleState> = structuredClone(INITIAL_STATE)): Particle {
    // Spread the default state with the optional state
    state = { ...structuredClone(INITIAL_STATE), ...state };

    // Create particle with the new options.
    const particle = new Particle(state as ParticleState);

    // Set length.
    particle.setSpeed(state.magnitude!);

    // Set angle.
    particle.setHeading(state.direction!);

    // Return new particle.
    return particle;
  }

  static generate(number: number, opts: Partial<ParticleState> = structuredClone(INITIAL_STATE)): Particle[] {
    const particles: Particle[] = [];

    for (let i = 0; i < number; i++) {
      particles.push(Particle.create(opts));
    }

    return particles;
  }

  accelerate(ax: number = this.state.vx, ay: number = this.state.vy): void {
    this.state.vx += ax;
    this.state.vy += ay;
  }

  update(fric: number = this.state.friction, grav: number = this.state.gravity) {
    // Apply springs
    this.handleSprings();

    // Apply gravitations
    this.handleMasses();

    // Apply fake friction to velocity
    this.state.vx *= fric;
    this.state.vy *= fric;

    // Apply gravity to velocity
    this.accelerate(0, grav);

    // Update position based on acceleration
    return this.updatePos();
  }

  setSpeed(speed: number): void {
    const angle = this.getHeading();
    this.state.vx = Math.cos(angle) * speed;
    this.state.vy = Math.sin(angle) * speed;
  }

  setHeading(angle: number): void {
    const speed = this.getSpeed();
    this.state.vx = Math.cos(angle) * speed;
    this.state.vy = Math.sin(angle) * speed;
  }

  getSpeed(): number {
    return Math.hypot(this.state.vx, this.state.vy);
  }

  getHeading(x: number = this.state.vx, y: number = this.state.vy): number {
    return Math.atan2(y, x);
  }

  angleTo(p: Particle): number {
    const dx = p.state.x - this.state.x;
    const dy = p.state.y - this.state.y;
    return Math.atan2(dy, dx);
  }

  distanceTo(p: Particle): number {
    const dx = p.state.x - this.state.x;
    const dy = p.state.y - this.state.y;
    return Math.hypot(dx, dy);
  }

  addMass(mass: Particle): void {
    this.removeMass(mass);
    this.state.masses.push(mass);
  }

  removeMass({state: mass}: Particle): void {
    const masses = this.state.masses;

    for (let i = 0; i < masses.length; i++) {
      if (mass.x === masses[i].state.x &&
          mass.y === masses[i].state.y) {
        masses.splice(i, 1);
        break;
      }
    }
  }

  gravitateTo(particle: Particle): void {
    const dx = particle.state.x - this.state.x;
    const dy = particle.state.y - this.state.y;

    const distSqrd = dx * dx + dy * dy;
    const dist = Math.sqrt(distSqrd);

    const force = particle.state.mass / distSqrd;

    const sin = dy / dist;
    const cos = dx / dist;

    const ax = cos * force;
    const ay = sin * force;

    this.accelerate(ax, ay);
  }

  updatePos(vx?: number, vy?: number): { x: number; y: number } {
    if (vx === undefined && vy === undefined) {
      this.state.x += this.state.vx;
      this.state.y += this.state.vy;
      return {x: this.state.x, y: this.state.y};
    }

    this.state.x += vx!;
    this.state.y += vy!;
    return {x: this.state.x, y: this.state.y};
  }

  addSpring(spring: Spring): Spring {
    this.removeSpring(spring);
    this.state.springs.push(spring);
    return spring;
  }

  removeSpring({point: {state: p}}: Spring): void {
    const springs = this.state.springs;

    for (let i = 0; i < springs.length; i++) {
      if (p.x === springs[i].point.state.x &&
          p.y === springs[i].point.state.y) {
        springs.splice(i, 1);
        break;
      }
    }
  }

  springFromTo(particle: Particle, springy: number = 0.05, offset: number = 100): [Particle, Particle] {
    const dx = (particle.state.x - this.state.x);
    const dy = (particle.state.y - this.state.y);

    const distance = Math.hypot(dx, dy);
    const springForce = (distance - offset) * springy;

    const sx = dx / distance * springForce;
    const sy = dy / distance * springForce;

    this.accelerate(sx, sy);

    particle.state.vx -= sx;
    particle.state.vy -= sy;

    return [this, particle];
  }

  springToPoint(spring: Spring): [Particle, Spring] {
    const dx = (spring.point.state.x - this.state.x);
    const dy = (spring.point.state.y - this.state.y);

    const distance = Math.hypot(dx, dy);
    const springForce = (distance - spring.offset) * spring["spring"];

    const sx = dx / distance * springForce;
    const sy = dy / distance * springForce;

    this.accelerate(sx, sy);

    return [this, spring];
  }

  handleSprings(springs: Spring[] = this.state.springs) {
    for (let i = 0; i < springs.length; i++) {
      this.springToPoint(springs[i]);
    }

    return springs;
  }

  handleMasses(masses: Particle[] = this.state.masses) {
    for (let i = 0; i < masses.length; i++) {
      this.gravitateTo(masses[i]);
    }

    return masses;
  }
}

export default Particle;
