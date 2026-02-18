// server-middleware/block-bots.js
// Bloquea rutas típicas de bots/scanners y user-agents agresivos para evitar carga innecesaria en SSR

// User-Agents de bots que consumen recursos sin aportar valor
// Estos bots disparan SSR completo innecesariamente
const BLOCKED_USER_AGENTS = [
  'mj12bot',           // Majestic SEO bot - muy agresivo
  'ahrefsbot',         // Ahrefs crawler
  'semrushbot',        // SEMrush crawler
  'dotbot',            // Moz crawler
  'petalbot',          // Huawei search bot
  'bytespider',        // ByteDance/TikTok crawler
  'tiktokspider',      // TikTok spider
  'yandexbot',         // Yandex crawler
  'baiduspider',       // Baidu crawler
  'sogou',             // Sogou crawler
  'exabot',            // Exalead crawler
  'blexbot',           // BLEXBot crawler
  'dataforseo',        // DataForSEO bot
  'serpstatbot',       // Serpstat crawler
  'megaindex',         // MegaIndex crawler
  'rogerbot',          // Moz/Roger bot
  'screaming frog',    // Screaming Frog SEO
  'netcraft',          // Netcraft scanner
  'censys',            // Censys scanner
  'zgrab',             // ZGrab scanner
  'masscan',           // Mass scanner
  'nmap',              // Network scanner
  'sqlmap',            // SQL injection scanner
  'nikto',             // Web scanner
  'hubspot',           // HubSpot DataHub crawler - causa requests de 30s+
]

// User-Agents que pueden pasar pero con respuesta cacheada/limitada
const ALLOWED_BOTS = [
  'googlebot',         // Google - importante para SEO
  'bingbot',           // Bing - importante para SEO
  'facebookexternalhit', // Facebook link preview
  'twitterbot',        // Twitter/X link preview
  'linkedinbot',       // LinkedIn link preview
  'whatsapp',          // WhatsApp link preview
  'telegrambot',       // Telegram link preview
  'slackbot',          // Slack link preview
  'discordbot',        // Discord link preview
  'uptimerobot',       // Monitoring - útil para alertas
]

const BLOCKED_PATHS = [
  // WordPress
  '/wp-login.php',
  '/wp-admin',
  '/wp-content',
  '/wp-includes',
  '/xmlrpc.php',
  // Joomla
  '/administrator',
  // Drupal
  '/sites/default/files',
  '/node/',
  // OpenCart / Magento
  '/admin/controller',
  '/index.php/admin',
  // Common exploit paths
  '/.env',
  '/.git',
  '/.svn',
  '/config.php',
  '/phpinfo.php',
  '/phpmyadmin',
  '/pma',
  '/mysql',
  '/backup',
  '/db',
  '/database',
  '/sql',
  '/dump',
  // Otros paths problemáticos vistos en logs
  '/cordClip',
  '/cgi-bin',
  '/scripts',
  '/aws',
  '/azure',
  '/gcloud',
]

const BLOCKED_EXTENSIONS = [
  '.php',
  '.asp',
  '.aspx',
  '.jsp',
  '.cgi',
  '.pl',
]

module.exports = function (req, res, next) {
  const url = (req.url || '').toLowerCase()
  const pathname = url.split('?')[0]
  const userAgent = (req.headers['user-agent'] || '').toLowerCase()

  // 1. Verificar User-Agent de bots bloqueados (prioridad alta)
  for (const bot of BLOCKED_USER_AGENTS) {
    if (userAgent.includes(bot)) {
      // Retornar 403 para bots bloqueados
      res.statusCode = 403
      res.setHeader('Content-Type', 'text/plain')
      res.end('Forbidden')
      return
    }
  }

  // 2. Verificar paths bloqueados
  for (const blockedPath of BLOCKED_PATHS) {
    if (pathname.startsWith(blockedPath.toLowerCase())) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }
  }

  // 3. Verificar extensiones bloqueadas
  for (const ext of BLOCKED_EXTENSIONS) {
    if (pathname.endsWith(ext)) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }
  }

  next()
}
