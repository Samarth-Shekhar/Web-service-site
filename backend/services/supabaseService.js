const supabase = require('../config/supabase');

const SupabaseService = {
  // Services
  async getServices(category = null) {
    let query = supabase.from('services').select('*').eq('is_active', true);
    if (category) {
      query = query.eq('category', category);
    }
    const { data, error } = await query.order('sort_order', { ascending: true });
    if (error) throw error;
    return data;
  },

  async getServiceBySlug(slug) {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    if (error) throw error;
    return data;
  },

  async createService(serviceData) {
    const { data, error } = await supabase
      .from('services')
      .insert([serviceData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async updateService(id, serviceData) {
    const { data, error } = await supabase
      .from('services')
      .update(serviceData)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async deleteService(id) {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return true;
  },

  // Clients (Leads)
  async createClient(clientData) {
    const { data, error } = await supabase
      .from('clients')
      .insert([clientData])
      .select()
      .single();
    if (error) {
      console.error('❌ Supabase Insert Error:', error.message, error.details);
      throw error;
    }
    return data;
  },

  async getClients(options = {}) {
    const { page = 1, limit = 20, status, search } = options;
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase.from('clients').select('*', { count: 'exact' });

    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`);
    }

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) throw error;
    return { data, total: count };
  },

  async getClientStats() {
    try {
      const { count: total } = await supabase.from('clients').select('id', { count: 'exact', head: true });
      const { count: newLeads } = await supabase.from('clients').select('id', { count: 'exact', head: true }).eq('status', 'new');
      const { count: contacted } = await supabase.from('clients').select('id', { count: 'exact', head: true }).eq('status', 'contacted');
      const { count: converted } = await supabase.from('clients').select('id', { count: 'exact', head: true }).eq('status', 'converted');

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const { count: todayLeads } = await supabase.from('clients').select('id', { count: 'exact', head: true }).gte('created_at', today.toISOString());

      const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const { count: monthlyLeads } = await supabase.from('clients').select('id', { count: 'exact', head: true }).gte('created_at', thisMonth.toISOString());

      return {
        total: total || 0,
        newLeads: newLeads || 0,
        contacted: contacted || 0,
        converted: converted || 0,
        todayLeads: todayLeads || 0,
        monthlyLeads: monthlyLeads || 0,
      };
    } catch (error) {
      console.error('Error fetching client stats:', error.message);
      return { total: 0, newLeads: 0, contacted: 0, converted: 0, todayLeads: 0, monthlyLeads: 0 };
    }
  },

  async updateClient(id, clientData) {
    const { data, error } = await supabase
      .from('clients')
      .update(clientData)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async deleteClient(id) {
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return true;
  },

  // Payments
  async createPayment(paymentData) {
    const { data, error } = await supabase
      .from('payments')
      .insert([paymentData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getAllPayments() {
    const { data, error } = await supabase
      .from('payments')
      .select(`
        *,
        client:clients(name, email)
      `)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  // Admins
  async getAdminByEmail(email) {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('email', email)
      .single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async getAdminById(id) {
    try {
      // Basic UUID validation to prevent database crash
      if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
        return null;
      }

      const { data, error } = await supabase
        .from('admins')
        .select('*')
        .eq('id', id)
        .single();
      if (error && error.code !== 'PGRST116') throw error;
      return data;
    } catch (err) {
      console.error('Error in getAdminById:', err.message);
      return null;
    }
  }
};

module.exports = SupabaseService;
