
module.exports = {
  dialect: 'postgres',
  dialectOptions: {              
    ssl: {                        
      require: true,              
      rejectUnauthorized: false   
    }                             
},                               
  host: '189.5.178.200',
  username: 'nmpjpzzj',
  password: 'jig8kBprKzgW3qfHk_8osLLLcaWEkV3_',
  database: 'sqlnode',
  port: '5432',
  define: {
    timestamps: true,
    underscored: true,
  },
};

// created_at = informar que foi criado o banco de dados  
// update_at = ultima vez que o banco foi atualizado