const supabase = require('../config/supabase');

class Company {
  // Get all companies
  static async getAllCompanies() {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data;
  }

  // Get company by id
  static async getCompanyById(id) {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  // Create new company
  static async createCompany(companyData) {
    const { data, error } = await supabase
      .from('companies')
      .insert([companyData])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Update company
  static async updateCompany(id, companyData) {
    const { data, error } = await supabase
      .from('companies')
      .update(companyData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Delete company
  static async deleteCompany(id) {
    const { data, error } = await supabase
      .from('companies')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Get company by name
  static async getCompanyByName(name) {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('name', name)
      .eq('is_active', true)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows returned
    return data || null;
  }
}

module.exports = Company;
