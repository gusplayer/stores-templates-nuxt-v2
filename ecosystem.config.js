module.exports = {
  apps: [
    {
      name: 'stores-templates-nuxt',
      instances: 'max',
      exec_mode: 'cluster',
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',

      max_restarts: 10,
      min_uptime: '10s',

      max_memory_restart: '1G',

      autorestart: true,
      watch: false,
    },
  ],
}
