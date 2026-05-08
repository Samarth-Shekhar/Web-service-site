const supabase = require('../config/supabase');

class Portfolio {
  // Get all portfolio projects
  static async getAllProjects(filters = {}) {
    let query = supabase
      .from('portfolio_projects')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (filters.category) {
      query = query.eq('category', filters.category);
    }

    if (filters.featured) {
      query = query.eq('featured', true);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }

  // Get project by slug
  static async getProjectBySlug(slug) {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) throw error;
    return data;
  }

  // Get project by id
  static async getProjectById(id) {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  // Create new project
  static async createProject(projectData) {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .insert([projectData])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Update project
  static async updateProject(id, projectData) {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .update(projectData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Delete project
  static async deleteProject(id) {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Search projects
  static async searchProjects(query) {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data;
  }

  // Get categories count
  static async getCategoriesCount() {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('category')
      .eq('is_active', true);

    if (error) throw error;

    const counts = {};
    data.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }
}

module.exports = Portfolio;
