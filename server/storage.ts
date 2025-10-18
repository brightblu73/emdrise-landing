import type { Testimonial, InsertTestimonial } from "@shared/schema";

export interface IStorage {
  getTestimonials(): Promise<Testimonial[]>;
  addTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private testimonials: Testimonial[] = [];
  private nextId = 1;

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }

  async addTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const newTestimonial: Testimonial = {
      id: this.nextId++,
      ...testimonial,
    };
    this.testimonials.push(newTestimonial);
    return newTestimonial;
  }
}
