
module.exports = {
  dialect: 'postgres',
  dialectOptions: {              
    ssl: {                        
      require: true,              
      rejectUnauthorized: false   
    }                             
},                               
  host: 'kesavan.db.elephantsql.com',
  username: 'nmpjpzzj',
  password: 'jig8kBprKzgW3qfHk_8osLLLcaWEkV3_',
  database: 'nmpjpzzj',
  port: '5432',
  define: {
    timestamps: true,
    underscored: true,
  },
};

// created_at = informar que foi criado o banco de dados  
// update_at = ultima vez que o banco foi atualizado