const supabase = require('../config/supabase');

class Testimonial {
  // Get all testimonials
  static async getAllTestimonials(featured = false) {
    let query = supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true);

    if (featured) {
      query = query.eq('featured', true);
    }

    query = query.order('sort_order', { ascending: true }).order('created_at', { ascending: false });

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }

  // Get featured testimonials
  static async getFeaturedTestimonials(limit = 6) {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .eq('featured', true)
      .order('sort_order', { ascending: true })
      .limit(limit);

    if (error) throw error;
    return data;
  }

  // Get testimonial by id
  static async getTestimonialById(id) {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  // Create new testimonial
  static async createTestimonial(testimonialData) {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([testimonialData])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Update testimonial
  static async updateTestimonial(id, testimonialData) {
    const { data, error } = await supabase
      .from('testimonials')
      .update(testimonialData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Delete testimonial
  static async deleteTestimonial(id) {
    const { data, error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Get testimonials by company
  static async getTestimonialsByCompany(company) {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('company_name', company)
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data;
  }
}

module.exports = Testimonial;
