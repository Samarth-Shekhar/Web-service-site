const jwt = require('jsonwebtoken');
const SupabaseService = require('../services/supabaseService');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Not authorized to access this route' 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await SupabaseService.getAdminById(decoded.id);
    
    if (!req.admin) {
      return res.status(401).json({ 
        success: false, 
        message: 'Admin not found' 
      });
    }
    
    next();
  } catch (err) {
    return res.status(401).json({ 
      success: false, 
      message: 'Not authorized to access this route' 
    });
  }
};

module.exports = { protect };
